import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSONResponse } from "./utils/sendJSONResponse.js";
import { getDataByPathParams } from "./utils/getDataByPathParams.js";
import { getDataByQueryParams } from "./utils/getDataByQueryParams.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();

  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams);

  // ─── MAIN API ROUTE (with query params filtering) ────────────────────────
  if (urlObj.pathname === "/api" && req.method === "GET") {
    let filteredData = destinations;

    // Filter by query parameters (continent, country, platform, show, etc.)
    filteredData = getDataByQueryParams(destinations, queryObj);

    // **NEW:** Filter by streaming platform
    if (queryObj.platform) {
      filteredData = filteredData.filter((location) =>
        location.featured_in?.some((media) =>
          media.platform
            .toLowerCase()
            .includes(queryObj.platform.toLowerCase()),
        ),
      );
    }

    // **NEW:** Filter by show/movie title
    if (queryObj.show || queryObj.movie) {
      const searchTerm = queryObj.show || queryObj.movie;
      filteredData = filteredData.filter((location) =>
        location.featured_in?.some((media) =>
          media.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }

    // **NEW:** Filter by open to public status
    if (queryObj.is_open_to_public !== undefined) {
      const isOpen = queryObj.is_open_to_public === "true";
      filteredData = filteredData.filter(
        (location) => location.is_open_to_public === isOpen,
      );
    }

    // **NEW:** Filter by UNESCO site status
    if (queryObj.unesco_site !== undefined) {
      const isUnesco = queryObj.unesco_site === "true";
      filteredData = filteredData.filter(
        (location) => location.tourism_data?.unesco_site === isUnesco,
      );
    }

    sendJSONResponse(res, 200, filteredData);
  }

  // ─── FILTER BY CONTINENT ─────────────────────────────────────────────────
  else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filteredData = getDataByPathParams(
      destinations,
      "continent",
      continent,
    );
    sendJSONResponse(res, 200, filteredData);
  }

  // ─── FILTER BY COUNTRY ───────────────────────────────────────────────────
  else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = getDataByPathParams(destinations, "country", country);
    sendJSONResponse(res, 200, filteredData);
  }

  // ─── **NEW:** FILTER BY STREAMING PLATFORM ───────────────────────────────
  else if (req.url.startsWith("/api/platform") && req.method === "GET") {
    const platform = decodeURIComponent(req.url.split("/").pop());
    const filteredData = destinations.filter((location) =>
      location.featured_in?.some((media) =>
        media.platform.toLowerCase().includes(platform.toLowerCase()),
      ),
    );
    sendJSONResponse(res, 200, filteredData);
  }

  // ─── **NEW:** FILTER BY SHOW/MOVIE TITLE ─────────────────────────────────
  else if (req.url.startsWith("/api/show") && req.method === "GET") {
    const showTitle = decodeURIComponent(req.url.split("/").pop());
    const filteredData = destinations.filter((location) =>
      location.featured_in?.some((media) =>
        media.title.toLowerCase().includes(showTitle.toLowerCase()),
      ),
    );
    sendJSONResponse(res, 200, filteredData);
  }

  // ─── **NEW:** GET SINGLE LOCATION BY UUID ────────────────────────────────
  else if (req.url.startsWith("/api/location") && req.method === "GET") {
    const uuid = req.url.split("/").pop();
    const location = destinations.find((dest) => dest.uuid === uuid);

    if (location) {
      sendJSONResponse(res, 200, location);
    } else {
      sendJSONResponse(res, 404, {
        error: "Not found",
        message: `No location found with UUID: ${uuid}`,
      });
    }
  }

  // ─── **NEW:** GET TRENDING LOCATIONS (sorted by tourism impact) ──────────
  else if (urlObj.pathname === "/api/trending" && req.method === "GET") {
    const trending = destinations
      .filter((location) => location.featured_in?.length > 0)
      .sort((a, b) => {
        // Sort by number of shows/movies featured in
        return b.featured_in.length - a.featured_in.length;
      })
      .slice(0, 10); // Top 10 trending

    sendJSONResponse(res, 200, trending);
  }

  // ─── 404 NOT FOUND ────────────────────────────────────────────────────────
  else {
    res.setHeader("Content-Type", "application/json");
    sendJSONResponse(res, 404, {
      error: "Not found",
      message:
        "The requested route does not exist. Try /api, /api/platform/Netflix, /api/show/Game%20of%20Thrones",
    });
  }
});

server.listen(PORT, () =>
  console.log(`🎬 Screen Tourism API running on port: ${PORT}`),
);
