export const data = [
  
  {
    name: "Hobbiton Movie Set",
    location: "Matamata",
    country: "New Zealand",
    continent: "Oceania",
    is_open_to_public: true,
    featured_in: [
      {
        title: "The Lord of the Rings Trilogy",
        year: "2001-2003",
        platform: "HBO Max",
        scene: "The Shire - Bilbo and Frodo's home",
        tourism_impact: "+300% visitors, became NZ's top attraction"
      },
      {
        title: "The Hobbit Trilogy",
        year: "2012-2014",
        platform: "HBO Max",
        scene: "Bag End and Hobbiton village",
        tourism_impact: "Permanent set maintained as tourist destination"
      }
    ],
    details: [
      {
        fun_fact: "The set was rebuilt to be permanent after The Hobbit — complete with real vegetable gardens maintained year-round.",
      },
      {
        description: "A fully reconstructed movie set in the heart of New Zealand's Waikato farmland, featuring 44 hobbit holes and the Green Dragon Inn.",
      },
    ],
    tourism_data: {
      annual_visitors: 650000,
      peak_season: "December-February (NZ summer)",
      avg_visit_duration: "2-3 hours",
      accessibility: "Guided tours only, advance booking required",
      booking_required: true,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#Hobbiton",
      post_count: 387000,
      viral_moment: "Elijah Wood's 20th anniversary visit (2021)",
      best_photo_spot: "Bag End front door with round window",
      golden_hour: "Sunset over the Party Tree"
    },
    economic_impact: {
      local_jobs_created: 450,
      avg_tourist_spend: "$180 per visit",
      main_beneficiaries: ["Matamata town", "Tour operators", "Alexander family (landowners)"],
      sustainability_rating: "High"
    },
    traveler_tips: {
      best_time_to_visit: "April-May (autumn colors, fewer crowds)",
      difficulty_level: "Easy (wheelchair accessible)",
      what_to_bring: ["Camera", "Cash for Green Dragon Inn drinks"],
      permits_required: false,
      booking_url: "https://www.hobbitontours.com"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440021",
  },

  // 2. IRELAND - Giant's Causeway 
  {
    name: "Giant's Causeway",
    location: "County Antrim",
    country: "Northern Ireland",
    continent: "Europe",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Game of Thrones",
        year: "2011-2019",
        platform: "HBO Max",
        scene: "The Iron Islands, Dragonstone beach scenes",
        tourism_impact: "+250% visitors during show's run"
      }
    ],
    details: [
      {
        fun_fact: "The hexagonal columns are formed by ancient volcanic activity — AND doubled as Westeros filming locations.",
      },
      {
        description: "A UNESCO World Heritage Site featuring striking hexagonal basalt columns along the scenic Northern Irish coastline.",
      },
    ],
    tourism_data: {
      annual_visitors: 998000,
      peak_season: "June-August",
      avg_visit_duration: "2-4 hours",
      accessibility: "Free to visit, parking fees apply",
      booking_required: false,
      unesco_site: true
    },
    social_media: {
      instagram_hashtag: "#GiantsCauseway",
      post_count: 285000,
      viral_moment: "Kit Harington's behind-the-scenes photos (2016)",
      best_photo_spot: "Looking down from cliff tops at sunset",
      golden_hour: "Evening light on the basalt columns"
    },
    economic_impact: {
      local_jobs_created: 320,
      avg_tourist_spend: "$95 per visit",
      main_beneficiaries: ["Belfast hotels", "GoT tour operators", "Local restaurants"],
      sustainability_rating: "Medium - over-tourism concerns"
    },
    traveler_tips: {
      best_time_to_visit: "Early morning (7-9am) to avoid tour buses",
      difficulty_level: "Easy to Moderate (some steep steps)",
      what_to_bring: ["Windproof jacket", "Sturdy shoes", "Binoculars for coastal views"],
      permits_required: false,
      combo_tours: "Visit Dark Hedges (also from GoT) same day"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440004",
  },

  // 3. SOUTH KOREA - Squid Game Island
  {
    name: "Seongapdo Island",
    location: "Incheon",
    country: "South Korea",
    continent: "Asia",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Squid Game",
        year: "2021",
        platform: "Netflix",
        scene: "Glass bridge challenge exterior shots, island arrival scenes",
        tourism_impact: "+350% visitors in 2022, became K-drama pilgrimage site"
      }
    ],
    details: [
      {
        fun_fact: "Local residents erected unofficial 'Squid Game photo zones' with props from the show within weeks of its release.",
      },
      {
        description: "A small tidal island near Incheon known for its dramatic coastal cliffs and scenic hiking trails — now famous as a Squid Game filming location.",
      },
    ],
    tourism_data: {
      annual_visitors: 54000,
      peak_season: "September-November (fall colors)",
      avg_visit_duration: "Half-day trip",
      accessibility: "Ferry required (45 min from Incheon port)",
      booking_required: false,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#SquidGameIsland",
      post_count: 142000,
      viral_moment: "TikTok recreations of glass bridge scene (50M+ views)",
      best_photo_spot: "Rocky cliff overlook where players arrived by boat",
      golden_hour: "Sunrise ferry ride"
    },
    economic_impact: {
      local_jobs_created: 85,
      avg_tourist_spend: "$65 per visit",
      main_beneficiaries: ["Ferry operators", "Incheon seafood restaurants", "Local guides"],
      sustainability_rating: "Medium - rapid tourism growth"
    },
    traveler_tips: {
      best_time_to_visit: "Weekdays (avoid K-drama tour groups on weekends)",
      difficulty_level: "Moderate (rocky terrain, steep paths)",
      what_to_bring: ["Hiking boots", "Snacks (limited food on island)", "Cash (no ATMs)"],
      permits_required: false,
      local_cuisine: "Try fresh crab at Incheon port before ferry"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440022",
  },

  // 4. IRELAND - Skellig Michael (Star Wars)
  {
    name: "Skellig Michael",
    location: "County Kerry",
    country: "Ireland",
    continent: "Europe",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Star Wars: The Force Awakens",
        year: "2015",
        platform: "Disney+",
        scene: "Luke Skywalker's hideout island - final scene",
        tourism_impact: "+200% visitors, UNESCO issued crowd warnings"
      },
      {
        title: "Star Wars: The Last Jedi",
        year: "2017",
        platform: "Disney+",
        scene: "Rey training with Luke, Ahch-To planet",
        tourism_impact: "Sustained record tourism despite limited permits"
      }
    ],
    details: [
      {
        fun_fact: "This 6th-century monastery became a Star Wars pilgrimage site — UNESCO now limits visitors to protect ancient ruins.",
      },
      {
        description: "A UNESCO World Heritage Site featuring an ancient Christian monastery perched on a rocky island 12km off Ireland's coast.",
      },
    ],
    tourism_data: {
      annual_visitors: 18000,
      peak_season: "May-September (only season boats run)",
      avg_visit_duration: "4-5 hours (including boat trip)",
      accessibility: "Weather-dependent, 50% cancellation rate",
      booking_required: true,
      unesco_site: true
    },
    social_media: {
      instagram_hashtag: "#SkelligMichael",
      post_count: 67000,
      viral_moment: "Mark Hamill's emotional behind-the-scenes post (2015)",
      best_photo_spot: "Stone beehive huts where Luke lived",
      golden_hour: "Late afternoon (boat schedules permitting)"
    },
    economic_impact: {
      local_jobs_created: 120,
      avg_tourist_spend: "$450 per visit",
      main_beneficiaries: ["Boat operators (Portmagee)", "Kerry hotels", "Star Wars tour guides"],
      sustainability_rating: "High - strict UNESCO limits protect site"
    },
    traveler_tips: {
      best_time_to_visit: "June (longest days, best weather odds)",
      difficulty_level: "Challenging (600+ medieval stone steps, no railings)",
      what_to_bring: ["Waterproof everything", "Non-slip shoes", "Motion sickness meds", "Snacks (no facilities)"],
      permits_required: true,
      max_daily_visitors: 180,
      booking_url: "https://skelligexperience.com",
      insider_tip: "Book 6+ months ahead, have backup dates (weather cancellations common)"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440023",
  },

  // 5. USA - Maui (White Lotus)
  {
    name: "Wailea Beach - Four Seasons Resort",
    location: "Maui, Hawaii",
    country: "USA",
    continent: "North America",
    is_open_to_public: true,
    featured_in: [
      {
        title: "The White Lotus (Season 1)",
        year: "2021",
        platform: "HBO Max",
        scene: "Entire resort setting, beach scenes, spa scenes",
        tourism_impact: "+60% resort bookings post-premiere, waitlist through 2023"
      }
    ],
    details: [
      {
        fun_fact: "The resort's actual guests were asked to sign NDAs during filming — some appear as extras in background shots.",
      },
      {
        description: "A luxury beachfront resort in Wailea, Maui, featuring pristine beaches, world-class dining, and the infinity pool from THAT opening scene.",
      },
    ],
    tourism_data: {
      annual_visitors: "Private resort (guests only)",
      peak_season: "December-April (whale watching season)",
      avg_visit_duration: "4-7 night stays",
      accessibility: "Beach is public, resort facilities are not",
      booking_required: true,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#WhiteLotusHawaii",
      post_count: 94000,
      viral_moment: "Sydney Sweeney's pool floatie became a sold-out product",
      best_photo_spot: "Infinity pool overlooking Wailea Beach (guests only)",
      golden_hour: "Sunset from the beach (public access)"
    },
    economic_impact: {
      local_jobs_created: 850,
      avg_tourist_spend: "$2,500 per stay",
      main_beneficiaries: ["Four Seasons staff", "Wailea restaurants", "Maui tour operators"],
      sustainability_rating: "Medium - luxury tourism environmental impact"
    },
    traveler_tips: {
      best_time_to_visit: "Late April-May (after peak prices, before summer)",
      difficulty_level: "Easy (accessible beach)",
      what_to_bring: ["Reef-safe sunscreen (Hawaii law)", "Snorkel gear", "Resort casual attire"],
      permits_required: false,
      budget_alternative: "Public beach access is free. Stay in Kihei (15 min away) to save $$$. You can still visit the beach and take photos.",
      insider_tip: "Book spa treatments early — they sell out fast post-show"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440024",
  },

  // 6. ICELAND - Secret Life of Walter Mitty
  {
    name: "Skógafoss Waterfall",
    location: "South Iceland",
    country: "Iceland",
    continent: "Europe",
    is_open_to_public: true,
    featured_in: [
      {
        title: "The Secret Life of Walter Mitty",
        year: "2013",
        platform: "Prime Video",
        scene: "Iconic skateboarding scene down Route 1",
        tourism_impact: "+40% Iceland tourism 2014-2016, 'Mitty Effect' coined"
      },
      {
        title: "Game of Thrones",
        year: "2011-2019",
        platform: "HBO Max",
        scene: "Beyond the Wall sequences",
        tourism_impact: "Sustained high traffic from both fandoms"
      }
    ],
    details: [
      {
        fun_fact: "Tourism officials credit Walter Mitty for making Iceland 'cool' — visitor numbers jumped from 500K to 2.3M (2013-2018).",
      },
      {
        description: "A 60-meter cascading waterfall along Iceland's Ring Road, famous for its rainbow mist and dramatic basalt cliffs.",
      },
    ],
    tourism_data: {
      annual_visitors: 1200000,
      peak_season: "June-August (midnight sun)",
      avg_visit_duration: "1-2 hours",
      accessibility: "Roadside parking, stairs to top viewpoint",
      booking_required: false,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#Skogafoss",
      post_count: 524000,
      viral_moment: "Ben Stiller's anniversary post recreating skateboard scene (2023)",
      best_photo_spot: "Top of stairs (527 steps) or base with rainbow mist",
      golden_hour: "Midnight sun (June-July) creates 24-hour golden hour"
    },
    economic_impact: {
      local_jobs_created: 780,
      avg_tourist_spend: "$120 per day",
      main_beneficiaries: ["Reykjavik tour companies", "South Coast hotels", "Ring Road gas stations"],
      sustainability_rating: "Medium - over-tourism stress on infrastructure"
    },
    traveler_tips: {
      best_time_to_visit: "May or September (fewer crowds, northern lights possible)",
      difficulty_level: "Easy to Moderate (stairs to top optional)",
      what_to_bring: ["Waterproof jacket (you WILL get wet)", "Microspikes (winter)", "Wide-angle lens"],
      permits_required: false,
      combo_tours: "Pair with Seljalandsfoss (15 min away) and black sand beaches"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440025",
  },

  // 7. MOROCCO - Game of Thrones (Essaouira)
  {
    name: "Essaouira Old Town",
    location: "Essaouira",
    country: "Morocco",
    continent: "Africa",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Game of Thrones (Season 3)",
        year: "2013",
        platform: "HBO Max",
        scene: "Astapor slave city, Daenerys buying Unsullied army",
        tourism_impact: "+35% visitors, 'Slaver's Bay Tours' launched"
      }
    ],
    details: [
      {
        fun_fact: "The blue-and-white medina stood in for Astapor with minimal set decoration — locals joke they live in Slaver's Bay.",
      },
      {
        description: "A UNESCO-listed coastal town with whitewashed buildings, blue shutters, and a historic Portuguese fortress.",
      },
    ],
    tourism_data: {
      annual_visitors: 450000,
      peak_season: "March-May, September-November (mild weather)",
      avg_visit_duration: "2-3 days",
      accessibility: "Easy walking town, narrow medina streets",
      booking_required: false,
      unesco_site: true
    },
    social_media: {
      instagram_hashtag: "#Essaouira",
      post_count: 318000,
      viral_moment: "Emilia Clarke's travel blog post about filming (2013)",
      best_photo_spot: "Ramparts overlooking Atlantic Ocean at sunset",
      golden_hour: "Sunset from Skala de la Ville fortress"
    },
    economic_impact: {
      local_jobs_created: 520,
      avg_tourist_spend: "$85 per day",
      main_beneficiaries: ["Riad hotels", "Medina restaurants", "Argan oil cooperatives"],
      sustainability_rating: "High - tourism spread across old town"
    },
    traveler_tips: {
      best_time_to_visit: "April (Gnaoua music festival) or October (uncrowded)",
      difficulty_level: "Easy (flat coastal town)",
      what_to_bring: ["Windbreaker (constant ocean breeze)", "Cash (many riads don't take cards)", "Sunscreen"],
      permits_required: false,
      local_cuisine: "Fresh grilled fish at the port, under $10",
      insider_tip: "Stay in a riad inside the medina walls for authentic experience"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440026",
  },

  // 8. JORDAN - Indiana Jones (Petra)
  {
    name: "Petra (Treasury/Al-Khazneh)",
    location: "Ma'an Governorate",
    country: "Jordan",
    continent: "Asia",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Indiana Jones and the Last Crusade",
        year: "1989",
        platform: "Disney+",
        scene: "Final temple entrance where Holy Grail was hidden",
        tourism_impact: "+300% visitors after release, sustained global icon status"
      },
      {
        title: "Transformers: Revenge of the Fallen",
        year: "2009",
        platform: "Paramount+",
        scene: "Matrix of Leadership temple",
        tourism_impact: "Renewed interest from younger audiences"
      }
    ],
    details: [
      {
        fun_fact: "The Treasury is only the entrance — 85% of Petra's rock-carved city is still hidden behind it, rarely seen in films.",
      },
      {
        description: "A UNESCO World Heritage Site featuring a 2,000-year-old rock-carved city, crowned by the iconic Treasury facade.",
      },
    ],
    tourism_data: {
      annual_visitors: 1100000,
      peak_season: "March-May, September-November",
      avg_visit_duration: "Full day (recommended 2 days)",
      accessibility: "Moderate (1km walk through canyon to Treasury, further sites require hiking)",
      booking_required: true,
      unesco_site: true
    },
    social_media: {
      instagram_hashtag: "#Petra",
      post_count: 1200000,
      viral_moment: "Harrison Ford's 80th birthday tribute post at Petra (2022)",
      best_photo_spot: "Treasury framed by Siq canyon exit (arrive 6am for no crowds)",
      golden_hour: "Sunrise on Treasury (8am light hits facade perfectly)"
    },
    economic_impact: {
      local_jobs_created: 2400,
      avg_tourist_spend: "$180 per visit",
      main_beneficiaries: ["Wadi Musa town", "Bedouin guides", "Jordan tourism board"],
      sustainability_rating: "Medium - erosion concerns from foot traffic"
    },
    traveler_tips: {
      best_time_to_visit: "March or October (comfortable temps, clear skies)",
      difficulty_level: "Moderate to Challenging (lots of walking, optional hikes steep)",
      what_to_bring: ["Hiking boots", "3+ liters water", "Hat and sunscreen", "Cash for Bedouin tea/donkey rides"],
      permits_required: true,
      ticket_cost: "$70 (1 day), $77 (2 days)",
      insider_tip: "Stay overnight in Wadi Musa to catch sunrise at Treasury before tour groups arrive (9am+)"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440027",
  },

  // 9. THAILAND - The Beach (Maya Bay)
  {
    name: "Maya Bay",
    location: "Phi Phi Islands",
    country: "Thailand",
    continent: "Asia",
    is_open_to_public: true,
    featured_in: [
      {
        title: "The Beach",
        year: "2000",
        platform: "Prime Video",
        scene: "Entire movie - Leonardo DiCaprio's hidden paradise beach",
        tourism_impact: "+600% visitors, had to close 2018-2022 for environmental recovery"
      }
    ],
    details: [
      {
        fun_fact: "The beach was CLOSED for 4 years (2018-2022) to recover from over-tourism damage caused by the movie's fame.",
      },
      {
        description: "A stunning turquoise bay surrounded by limestone cliffs, made famous by The Beach — and infamous for environmental collapse.",
      },
    ],
    tourism_data: {
      annual_visitors: 450000,
      peak_season: "November-April (dry season)",
      avg_visit_duration: "1 hour (strictly enforced)",
      accessibility: "Boat only, limited permits since 2022 reopening",
      booking_required: true,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#MayaBay",
      post_count: 680000,
      viral_moment: "Closure announcement (2018) sparked global environmental tourism debate",
      best_photo_spot: "Boat view from water (no beach landing allowed now)",
      golden_hour: "Morning tours only (beach closes 10am daily)"
    },
    economic_impact: {
      local_jobs_created: 320,
      avg_tourist_spend: "$120 per tour",
      main_beneficiaries: ["Phi Phi tour operators", "Krabi hotels", "Marine conservation NGOs"],
      sustainability_rating: "Improving - strict limits enforced post-reopening"
    },
    traveler_tips: {
      best_time_to_visit: "November-December (reopening season, calmer seas)",
      difficulty_level: "Easy (boat access only, no hiking)",
      what_to_bring: ["Reef-safe sunscreen", "Underwater camera", "Motion sickness meds"],
      permits_required: true,
      new_rules: "No beach landing, swimming from boats only, max 375 visitors/day, no single-use plastics",
      insider_tip: "Visit Bamboo Island instead — similar beauty, fewer restrictions, better snorkeling"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440028",
  },

  // 10. CROATIA - Game of Thrones (Dubrovnik)
  {
    name: "Dubrovnik Old Town",
    location: "Dubrovnik",
    country: "Croatia",
    continent: "Europe",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Game of Thrones",
        year: "2011-2019",
        platform: "HBO Max",
        scene: "King's Landing - entire city setting, Walk of Shame steps, Red Keep",
        tourism_impact: "+550% visitors, cruise ships increased from 300 to 800/year"
      },
      {
        title: "Star Wars: The Last Jedi",
        year: "2017",
        platform: "Disney+",
        scene: "Canto Bight casino planet (briefly)",
        tourism_impact: "Minor additional bump"
      }
    ],
    details: [
      {
        fun_fact: "UNESCO threatened to delist Dubrovnik due to Game of Thrones over-tourism — city now caps daily visitors at 4,000.",
      },
      {
        description: "A stunning medieval walled city on Croatia's Adriatic coast — the real-world King's Landing complete with limestone streets and fortress walls.",
      },
    ],
    tourism_data: {
      annual_visitors: 1300000,
      peak_season: "July-August (cruise ship hell)",
      avg_visit_duration: "2-3 days",
      accessibility: "Old town is car-free, steep cobblestone streets",
      booking_required: false,
      unesco_site: true
    },
    social_media: {
      instagram_hashtag: "#Dubrovnik",
      post_count: 2100000,
      viral_moment: "Lena Headey recreated Walk of Shame in 2019 for charity",
      best_photo_spot: "City walls walk overlooking terracotta roofs",
      golden_hour: "Sunset from Mount Srđ cable car"
    },
    economic_impact: {
      local_jobs_created: 4200,
      avg_tourist_spend: "$150 per day",
      main_beneficiaries: ["Old Town restaurants (prices tripled)", "GoT tour guides", "Airbnb owners"],
      sustainability_rating: "Low - severe over-tourism, UNESCO warnings"
    },
    traveler_tips: {
      best_time_to_visit: "May or October (shoulder season, fewer cruise ships)",
      difficulty_level: "Moderate (lots of stairs, steep climbs on walls)",
      what_to_bring: ["Comfortable shoes (cobblestones)", "Water bottle", "Early alarm (visit 7-9am)"],
      permits_required: false,
      cost_saving: "Skip the GoT tour ($80+) — just walk the walls ($35) and use free podcast guide",
      insider_tip: "Stay in Lapad or Gruž neighborhoods (cheaper, quieter) and bus to Old Town"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440029",
  },

  // 11. JAPAN - Lost in Translation (Tokyo)
  {
    name: "Park Hyatt Tokyo",
    location: "Shinjuku, Tokyo",
    country: "Japan",
    continent: "Asia",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Lost in Translation",
        year: "2003",
        platform: "Netflix",
        scene: "Hotel bar scenes, Bill Murray's entire stay, iconic window view",
        tourism_impact: "+45% Park Hyatt bookings, New York Bar became pilgrimage site"
      }
    ],
    details: [
      {
        fun_fact: "The New York Bar where Bill Murray and Scarlett Johansson met still plays jazz nightly — tourists book months ahead for the 'Lost in Translation booth.'",
      },
      {
        description: "A luxury hotel occupying floors 39-52 of Shinjuku Park Tower, famous for its atmospheric bar with sweeping Tokyo night views.",
      },
    ],
    tourism_data: {
      annual_visitors: "Private hotel (guests + bar patrons)",
      peak_season: "March-April (cherry blossoms), October-November (fall colors)",
      avg_visit_duration: "2-3 night stays or evening bar visit",
      accessibility: "Public can visit bar/restaurant with advance reservation",
      booking_required: true,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#LostInTranslationTokyo",
      post_count: 48000,
      viral_moment: "20th anniversary Sofia Coppola reunion event (2023)",
      best_photo_spot: "Window seats in New York Bar at night",
      golden_hour: "Blue hour (6-7pm) when city lights turn on"
    },
    economic_impact: {
      local_jobs_created: 650,
      avg_tourist_spend: "$400-600 per night (hotel) or $80 (bar minimum)",
      main_beneficiaries: ["Park Hyatt staff", "Shinjuku restaurants", "Tokyo taxi drivers"],
      sustainability_rating: "High - controlled luxury tourism"
    },
    traveler_tips: {
      best_time_to_visit: "Weeknight evenings (less crowded bar)",
      difficulty_level: "Easy (elevator to 52nd floor)",
      what_to_bring: ["Smart casual attire (dress code enforced)", "¥5,000 minimum for bar"],
      permits_required: false,
      budget_alternative: "Visit the bar for drinks ($25 cocktails) instead of staying ($600/night). Arrive 5pm for best window seats.",
      insider_tip: "Request the corner booth where Bill Murray sat — staff know it well"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440030",
  },

  // 12. SCOTLAND - Harry Potter (Glenfinnan Viaduct)
  {
    name: "Glenfinnan Viaduct",
    location: "Scottish Highlands",
    country: "Scotland",
    continent: "Europe",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Harry Potter (films 2-8)",
        year: "2002-2011",
        platform: "HBO Max",
        scene: "Hogwarts Express train crossing - iconic aerial shots",
        tourism_impact: "+300% visitors, Jacobite Steam Train ridership up 250%"
      }
    ],
    details: [
      {
        fun_fact: "The Jacobite Steam Train runs daily Apr-Oct — passengers reenact Harry Potter scenes hanging out windows (not recommended).",
      },
      {
        description: "A 21-arch railway viaduct built in 1901, now famous as the Hogwarts Express bridge spanning a Highland valley.",
      },
    ],
    tourism_data: {
      annual_visitors: 350000,
      peak_season: "July-August (school holidays)",
      avg_visit_duration: "2-3 hours (viewpoint hike + train watching)",
      accessibility: "Viewpoint requires 20-min uphill hike",
      booking_required: false,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#GlenfinnanViaduct",
      post_count: 156000,
      viral_moment: "Daniel Radcliffe's behind-the-scenes train video (2021)",
      best_photo_spot: "Upper viewpoint with train mid-crossing",
      golden_hour: "Morning train (10:45am) with side lighting"
    },
    economic_impact: {
      local_jobs_created: 280,
      avg_tourist_spend: "$95 per visit",
      main_beneficiaries: ["Jacobite Steam Train", "Fort William hotels", "Highland tour operators"],
      sustainability_rating: "Medium - trail erosion from foot traffic"
    },
    traveler_tips: {
      best_time_to_visit: "May-June (wildflowers, fewer midges)",
      difficulty_level: "Moderate (steep 20-min hike to viewpoint)",
      what_to_bring: ["Midge repellent (essential May-Sep)", "Binoculars", "Rain gear", "Train timetable"],
      permits_required: false,
      train_times: "10:45am and 3:00pm departures from Fort William (Apr-Oct)",
      insider_tip: "Arrive 45min early to secure viewpoint spot — it gets PACKED when train approaches"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440031",
  },

  // 13. TUNISIA - Star Wars (Tatooine)
  {
    name: "Matmata & Tataouine",
    location: "Southern Tunisia",
    country: "Tunisia",
    continent: "Africa",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Star Wars (Original Trilogy)",
        year: "1977-1983",
        platform: "Disney+",
        scene: "Luke Skywalker's home planet Tatooine - underground homes, desert scenes",
        tourism_impact: "+200% visitors, sets left in desert became permanent attractions"
      },
      {
        title: "The Mandalorian",
        year: "2019-present",
        platform: "Disney+",
        scene: "Mos Eisley recreated with original sets",
        tourism_impact: "Renewed pilgrimage from new generation"
      }
    ],
    details: [
      {
        fun_fact: "The underground troglodyte homes in Matmata are REAL homes where locals still live — you can stay overnight in Luke's actual house (now Hotel Sidi Driss).",
      },
      {
        description: "A Berber village of ancient underground cave homes and nearby desert film sets, forming the real-world Tatooine.",
      },
    ],
    tourism_data: {
      annual_visitors: 125000,
      peak_season: "March-May, October-November (bearable heat)",
      avg_visit_duration: "2-3 days (includes Sahara tours)",
      accessibility: "4WD recommended for desert sets",
      booking_required: false,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#Tatooine",
      post_count: 94000,
      viral_moment: "Mark Hamill's 'homecoming' visit video (2019)",
      best_photo_spot: "Luke's courtyard home at Hotel Sidi Driss",
      golden_hour: "Sunset at abandoned Mos Espa set in Sahara"
    },
    economic_impact: {
      local_jobs_created: 340,
      avg_tourist_spend: "$75 per day",
      main_beneficiaries: ["Matmata hotels", "4WD tour guides", "Berber families hosting tourists"],
      sustainability_rating: "High - tourism supports traditional cave dwelling preservation"
    },
    traveler_tips: {
      best_time_to_visit: "March or November (comfortable temps, clear skies)",
      difficulty_level: "Moderate (desert heat, rough roads to sets)",
      what_to_bring: ["Sunscreen", "Long sleeves (desert sun)", "Cash (ATMs scarce)", "Star Wars references (locals love them)"],
      permits_required: false,
      must_do: "Sleep in Luke's actual bedroom at Hotel Sidi Driss ($25/night)",
      insider_tip: "Hire local guide to find all 7 abandoned sets — GPS coordinates online are often wrong"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440032",
  },

  // 14. ITALY - Roman Holiday (Rome)
  {
    name: "Bocca della Verità (Mouth of Truth)",
    location: "Rome",
    country: "Italy",
    continent: "Europe",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Roman Holiday",
        year: "1953",
        platform: "Paramount+",
        scene: "Audrey Hepburn and Gregory Peck's hand-biting scene",
        tourism_impact: "Created 70+ years of sustained tourism, average 300 person daily queue"
      }
    ],
    details: [
      {
        fun_fact: "The Mouth of Truth is a 2,000-year-old drain cover — legend says it bites off liars' hands. Tourists still reenact Audrey Hepburn's scream daily.",
      },
      {
        description: "An ancient marble mask in the portico of Santa Maria in Cosmedin church, made iconic by Roman Holiday.",
      },
    ],
    tourism_data: {
      annual_visitors: 800000,
      peak_season: "May-September",
      avg_visit_duration: "30 min (includes queue)",
      accessibility: "Wheelchair accessible church entrance",
      booking_required: false,
      unesco_site: false
    },
    social_media: {
      instagram_hashtag: "#BoccadellaVerita",
      post_count: 215000,
      viral_moment: "Every proposal where someone hides ring in the mouth (weekly)",
      best_photo_spot: "Hand-in-mouth pose (obviously)",
      golden_hour: "Early morning (7-8am) before tour groups"
    },
    economic_impact: {
      local_jobs_created: 120,
      avg_tourist_spend: "$60 per day",
      main_beneficiaries: ["Nearby gelaterias", "Trastevere restaurants", "Rome tour guides"],
      sustainability_rating: "High - free attraction, controlled crowds"
    },
    traveler_tips: {
      best_time_to_visit: "Weekday mornings before 9am",
      difficulty_level: "Easy (5-min walk from Circus Maximus metro)",
      what_to_bring: ["€2 donation for church", "Camera", "Patience for queue"],
      permits_required: false,
      combo_visit: "See Mouth of Truth + walk to Trastevere (10 min) for lunch",
      insider_tip: "Visit during church mass (Sunday 10:30am) — most tourists skip it, no queue"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440033",
  },

  // 15. NORWAY - Frozen (Fjords)
  {
    name: "Nærøyfjord",
    location: "Vestland",
    country: "Norway",
    continent: "Europe",
    is_open_to_public: true,
    featured_in: [
      {
        title: "Frozen",
        year: "2013",
        platform: "Disney+",
        scene: "Inspiration for Arendelle kingdom and fjord landscapes",
        tourism_impact: "+37% Norway tourism from families, 'Frozen tours' created"
      },
      {
        title: "Frozen II",
        year: "2019",
        platform: "Disney+",
        scene: "Enchanted Forest and Northuldra landscapes",
        tourism_impact: "Sustained family tourism, Northern Lights tours marketed to Frozen fans"
      }
    ],
    details: [
      {
        fun_fact: "Disney animators spent 3 weeks in Norway researching fjords, stave churches, and Sami culture — Arendelle is a mashup of Bergen, Oslo, and these UNESCO fjords.",
      },
      {
        description: "A UNESCO World Heritage fjord featuring dramatic cliffs, waterfalls, and traditional villages — the real-world inspiration for Elsa's kingdom.",
      },
    ],
    tourism_data: {
      annual_visitors: 450000,
      peak_season: "June-August (midnight sun)",
      avg_visit_duration: "2-3 days (fjord cruise + villages)",
      accessibility: "Boat tours, some viewpoints require hiking",
      booking_required: true,
      unesco_site: true
    },
    social_media: {
      instagram_hashtag: "#Naeroyfjord",
      post_count: 78000,
      viral_moment: "Kristen Bell's Norway travel vlog (2019) visiting Frozen locations",
      best_photo_spot: "Stegastein viewpoint (1,984ft above fjord)",
      golden_hour: "Sunset cruise (10pm in summer)"
    },
    economic_impact: {
      local_jobs_created: 520,
      avg_tourist_spend: "$200 per day",
      main_beneficiaries: ["Fjord cruise operators", "Flåm Railway", "Bergen hotels"],
      sustainability_rating: "Medium - cruise ship emissions concerns"
    },
    traveler_tips: {
      best_time_to_visit: "May or September (fewer crowds, still good weather)",
      difficulty_level: "Easy to Moderate (boat access easy, optional hikes challenging)",
      what_to_bring: ["Layers (weather changes fast)", "Waterproof jacket", "Binoculars for waterfalls"],
      permits_required: false,
      must_do: "Flåm Railway to Myrdal (one of world's steepest trains, stunning views)",
      insider_tip: "Book morning fjord cruise — afternoon often has cruise ship traffic"
    },
    uuid: "550e8400-e29b-41d4-a716-446655440034",
  },
]