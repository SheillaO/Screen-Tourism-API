# 🎬 Screen Tourism API — Where Fiction Meets Real Travel

*"The first API connecting iconic filming locations to actual destinations — because 65% of millennials choose where to travel based on what they watched."*

[![API Status](https://img.shields.io/badge/API-Live-success?style=for-the-badge)](https://screen-tourism-api.onrender.com/)


---

## 🎯 The Problem

**Screen Tourism is a $2.4 trillion blind spot.**

- People see Skellig Michael in Star Wars → Google "where was that filmed?" → Get scattered blog posts
- Tourism boards don't know which movies/shows drive visitors (they guess)
- Travel apps can't recommend "places from your favourite shows" (no data source)
- **No API exists** that connects streaming content to real-world travel destinations

### The Impact
- **40% of tourists** under 35 visit destinations because they saw them on screen (VisitBritain, 2023)
- **Game of Thrones** drove 250%+ tourism increases to Northern Ireland, Croatia, Iceland
- **$200B annually** in screen-driven tourism has zero centralised data infrastructure

---

## 💡 The Solution

**Screen Tourism API** aggregates filming locations, streaming platform data, and real-world travel logistics into one queryable endpoint.

✅ **Filter by Platform** — Find all Netflix, Disney+, or HBO locations  
✅ **Search by Show/Movie** — Get every Star Wars or Game of Thrones site  
✅ **Tourism Analytics** — See visitor increases post-release  
✅ **Travel Logistics** — Permits, accessibility, best seasons, booking links  
✅ **Social Proof** — Instagram hashtags, viral moments, photo spots  

---

## 🚀 Features

### 1. **Platform Filtering**
```javascript
GET /api/locations?platform=Netflix
GET /api/locations?platform=Disney+
GET /api/locations?platform=HBO
```

Returns: All locations featured in shows/movies on that platform.

### 2. **Show/Movie Search**
```javascript
GET /api/locations?show=Game%20of%20Thrones
GET /api/locations?movie=Star%20Wars
```

Returns: Every filming location for that title, with scenes described.

### 3. **Tourism Impact Data**
```javascript
{
  "tourism_impact": "+250% visitors during show's run",
  "economic_impact": {
    "local_jobs_created": 320,
    "avg_tourist_spend": "$95 per visit"
  }
}
```

### 4. **Practical Travel Info**
```javascript
{
  "traveler_tips": {
    "best_time_to_visit": "May-June (fewer crowds)",
    "difficulty_level": "Moderate",
    "permits_required": true,
    "booking_url": "https://..."
  }
}
```

### 5. **Social Media Integration**
```javascript
{
  "social_media": {
    "instagram_hashtag": "#Hobbiton",
    "post_count": 387000,
    "viral_moment": "Elijah Wood's 20th anniversary visit (2021)"
  }
}
```

---

## 🛠️ Technical Stack

### Core Technologies
- **Node.js** — Runtime environment
- **Express.js** — RESTful API framework
- **JSON** — Data storage (no database overhead for MVP)
- **CORS** — Cross-origin resource sharing enabled

### API Endpoints

```javascript
// Base URL
https://screen-tourism-api.onrender.com/api

// Available routes
GET /locations              // All locations
GET /locations/:id          // Single location by UUID
GET /locations?platform=X   // Filter by streaming platform
GET /locations?show=X       // Filter by show/movie title
GET /locations?continent=X  // Filter by continent
GET /locations?country=X    // Filter by country
```

### Sample Response
```json
{
  "name": "Giant's Causeway",
  "location": "County Antrim",
  "country": "Northern Ireland",
  "continent": "Europe",
  "is_open_to_public": true,
  "featured_in": [
    {
      "title": "Game of Thrones",
      "year": "2011-2019",
      "platform": "HBO Max",
      "scene": "The Iron Islands, Dragonstone beach scenes",
      "tourism_impact": "+250% visitors during show's run"
    }
  ],
  "tourism_data": {
    "annual_visitors": 998000,
    "peak_season": "June-August",
    "unesco_site": true
  },
  "social_media": {
    "instagram_hashtag": "#GiantsCauseway",
    "post_count": 285000
  },
  "uuid": "550e8400-e29b-41d4-a716-446655440004"
}
```

---

## 📊 Why This Matters

### For Travel Apps
- **Airbnb** could suggest stays near Squid Game locations
- **Google Maps** could add "filming location" layers
- **Booking.com** could create "Screen Tourism" categories

### For Tourism Boards
- **Measure** which shows drive visitors (data-driven marketing)
- **Target** ads to fans of shows filmed locally
- **Forecast** tourism spikes after show releases

### For Content Creators
- **TikTok travel influencers** need this data for viral content
- **YouTube vloggers** visiting "TV show locations" get millions of views
- **Travel bloggers** manually compile this — API saves hours

---

## 🎓 What I Learned

### Node.js Fundamentals
✅ **Express.js routing** — RESTful API design  
✅ **Query parameters** — Filtering and searching  
✅ **CORS middleware** — Cross-origin requests  
✅ **JSON data management** — No-database MVP approach  
✅ **Error handling** — 404s, validation, edge cases  

### Product Thinking
✅ **Market sizing** — $2.4T tourism + $200B screen-driven subset  
✅ **User research** — Why people can't find filming locations easily  
✅ **API design** — What endpoints developers actually need  
✅ **Data modeling** — Balancing depth vs API response speed  

### Real-World Skills
✅ **API documentation** — Writing for developer audiences  
✅ **Deployment** — Render/Railway free tier hosting  
✅ **Version control** — Git branching for features  
✅ **README writing** — Product positioning for recruiters  

---

## 🌍 Real-World Impact

### Current Use Case
- **15 locations** across 6 continents
- **25+ shows/movies** represented
- **Tourism data** from UNESCO, government sources, industry reports
- **Social media metrics** from Instagram, TikTok

### Expansion Roadmap
1. **Scale to 100+ locations** (add Yellowstone, Succession, Breaking Bad sites)
2. **User submissions** — Let travelers add missing locations
3. **Partnership with tourism boards** — Official data feeds
4. **Mobile app integration** — Provide SDK for travel apps

---

## 🚦 How to Use This API

### Option 1: Direct HTTP Requests
```bash
curl https://screen-tourism-api.onrender.com/api/locations?show=Game%20of%20Thrones
```

### Option 2: JavaScript Fetch
```javascript
fetch('https://screen-tourism-api.onrender.com/api/locations?platform=Netflix')
  .then(res => res.json())
  .then(data => console.log(data))
```

### Option 3: Postman
1. Import API endpoint
2. Add query parameters
3. Test responses

---

## 🏃 Run Locally

```bash
# Clone repository
git clone https://github.com/YourUsername/screen-tourism-api.git
cd screen-tourism-api

# Install dependencies
npm install

# Start server
npm start

# API runs on localhost:3000
```

---

## 🔗 Related Projects

This API is part of my portfolio demonstrating full-stack fundamentals:

### 🌟 [Lumière Restaurant API](https://github.com/SheillaO/Lumiere-Restaurant-Ordering-Infrastructure)
**Problem:** Food ordering apps hide fees  
**Solution:** Transparent pricing, one-tap checkout  
**Tech:** Node.js, Express, localStorage

### 💊 [GLP-1 Companion](https://github.com/SheillaO/GLP-1-Companion)
**Problem:** 40M Ozempic users need dose conversions  
**Solution:** Free calculator with history tracking  
**Tech:** Vanilla JS, FormData API

### 🍪 [ConsentVault](https://github.com/SheillaO/GDPR-Consent-Fatigue)
**Problem:** GDPR consent fatigue (97% blindly accept)  
**Solution:** Personal consent manager  
**Tech:** LocalStorage, dark pattern detection

---

## 🏆 Why This Project Stands Out

### 1. **First-to-Market**
No other API combines streaming platforms + tourism data + travel logistics in one endpoint.

### 2. **Solves Real Pain**
Tourism boards spend $millions trying to track screen tourism — this gives them free infrastructure.

### 3. **Product Thinking**
Not just "here's data" — designed for actual developer use cases (travel apps, tourism boards, content creators).

### 4. **Beginner-Friendly Backend**
Node.js class project evolved into deployable API with real-world application.

---

## 👨‍💻 About the Developer

**Sheilla O.**  
Backend Developer | Nairobi, Kenya 🇰🇪

**Background:**
- Node.js project → turned into portfolio-ready API
- Focus: Solving underserved market problems through code

**Philosophy:**  
*"The best APIs solve problems developers didn't know they had."*

---

## 🙏 Acknowledgments

- **Tourism boards** who publish visitor data publicly
- **Screen tourism researchers** who validated the $200B market size

---

<div align="center">

**Screen Tourism API — Because every destination has a story.**

</div>
