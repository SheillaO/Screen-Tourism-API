export const getDataByQueryParams = (data, queryObj) => {
  const {
    continent,
    country,
    is_open_to_public,
    platform,
    show,
    movie,
    unesco_site,
  } = queryObj;

  // Filter by continent
  if (continent) {
    data = data.filter(
      (destination) =>
        destination.continent.toLowerCase() === continent.toLowerCase(),
    );
  }

  // Filter by country
  if (country) {
    data = data.filter(
      (destination) =>
        destination.country.toLowerCase() === country.toLowerCase(),
    );
  }

  // Filter by public access status
  if (is_open_to_public) {
    data = data.filter(
      (destination) =>
        destination.is_open_to_public === JSON.parse(is_open_to_public),
    );
  }

  // **Filter by streaming platform
  if (platform) {
    data = data.filter((destination) =>
      destination.featured_in?.some((media) =>
        media.platform.toLowerCase().includes(platform.toLowerCase()),
      ),
    );
  }

  // **Filter by show or movie title
  if (show || movie) {
    const searchTerm = show || movie;
    data = data.filter((destination) =>
      destination.featured_in?.some((media) =>
        media.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }

  // Filter by UNESCO site status
  if (unesco_site) {
    data = data.filter(
      (destination) =>
        destination.tourism_data?.unesco_site === JSON.parse(unesco_site),
    );
  }

  return data;
};
