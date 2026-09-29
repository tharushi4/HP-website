import { Destination, Tour, Booking, Review } from '@/types';

export const INITIAL_DESTINATIONS: Destination[] = [
  {
    id: 'dest-1',
    name: 'Amalfi Coast & Capri',
    slug: 'amalfi-coast',
    country: 'Italy',
    continent: 'Europe',
    description: 'A masterpiece of Mediterranean drama, featuring pastel-colored cliffside villas, lemon groves overlooking cobalt seas, and ancient cliff paths.',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200&auto=format&fit=crop'
    ],
    bestTimeToVisit: 'May to October',
    currency: 'EUR (€)',
    featured: true,
  },
  {
    id: 'dest-2',
    name: 'Swiss Alpine Wonderland',
    slug: 'swiss-alps',
    country: 'Switzerland',
    continent: 'Europe',
    description: 'Snow-crested peaks, mirror-like glacier lakes, fairytale chalets, and historic cogwheel trains carving through the majestic Bernese Oberland.',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop'
    ],
    bestTimeToVisit: 'June to September (Hiking) / Dec to March (Skiing)',
    currency: 'CHF (Fr)',
    featured: true,
  },
  {
    id: 'dest-3',
    name: 'Kyoto & Mount Fuji',
    slug: 'kyoto-japan',
    country: 'Japan',
    continent: 'Asia',
    description: 'Immerse in timeless Zen gardens, crimson Torii gates, sacred bamboo groves, Michelin-starred kaiseki dining, and sacred views of Mount Fuji.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop'
    ],
    bestTimeToVisit: 'March to May & October to November',
    currency: 'JPY (¥)',
    featured: true,
  },
  {
    id: 'dest-4',
    name: 'Serengeti & Ngorongoro',
    slug: 'serengeti-safari',
    country: 'Tanzania',
    continent: 'Africa',
    description: 'Witness the great wildebeest migration, lion prides stalking across golden savannas, and luxury tented camps under star-studded African skies.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop'
    ],
    bestTimeToVisit: 'July to October (Migration season)',
    currency: 'USD ($)',
    featured: true,
  },
  {
    id: 'dest-5',
    name: 'Bali & Nusa Penida',
    slug: 'bali-indonesia',
    country: 'Indonesia',
    continent: 'Asia',
    description: 'Emerald emerald tiered rice terraces, sacred water temples, world-class surf breaks, holistic wellness retreats, and vibrant artisan culture.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb35?q=80&w=1200&auto=format&fit=crop'
    ],
    bestTimeToVisit: 'April to October',
    currency: 'IDR (Rp)',
    featured: false,
  },
  {
    id: 'dest-6',
    name: 'Reykjavik & Golden Circle',
    slug: 'iceland-glaciers',
    country: 'Iceland',
    continent: 'Europe',
    description: 'Land of fire and ice: geothermal hot springs, roaring waterfalls, massive black sand beaches, and the ethereal dancing Aurora Borealis.',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop'
    ],
    bestTimeToVisit: 'September to March (Northern Lights) / June to August (Midnight Sun)',
    currency: 'ISK (kr)',
    featured: true,
  }
];

export const INITIAL_TOURS: Tour[] = [
  {
    id: 'tour-1',
    title: 'Amalfi Coastline Yacht & Epicurean Odyssey',
    slug: 'amalfi-coastline-yacht-odyssey',
    destinationId: 'dest-1',
    durationDays: 7,
    price: 3250,
    discountPrice: 2890,
    difficulty: 'Easy',
    groupSize: 10,
    category: 'Luxury',
    highlights: [
      'Private wooden Riva speedboat cruise around Capri and Faraglioni rocks',
      'Exclusive lemon grove limoncello tasting in historic Ravello',
      'Hike the legendary Path of the Gods with local naturalist guide',
      'Sunset Michelin-starred cliffside dining overlooking Positano bay'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Naples & Private Transfer to Positano',
        description: 'Meet your private concierge at Naples Airport. Travel along the dramatic Sorrentine peninsula to your cliffside boutique hotel. Welcome champagne reception at sunset.',
        meals: 'Dinner included',
        accommodation: 'Le Sirenuse / Villa Franca (5-star)'
      },
      {
        day: 2,
        title: 'Private Yacht Charter: Island of Capri & Blue Grotto',
        description: 'Board our luxury craft for a day of swimming in turquoise coves, exploring the iconic sea caves, and boutique shopping on the Piazzetta of Capri.',
        meals: 'Breakfast, Gourmet Lunch onboard',
        accommodation: 'Le Sirenuse / Villa Franca (5-star)'
      },
      {
        day: 3,
        title: 'Ravello Gardens & Historic Villa Rufolo',
        description: 'Ascend to mountaintop Ravello. Stroll through cliff-hanging botanical gardens that inspired Wagner and indulge in an artisan wine tasting with local vintners.',
        meals: 'Breakfast, Wine Pairing Lunch',
        accommodation: 'Palazzo Avino (5-star)'
      },
      {
        day: 4,
        title: 'The Sentiero degli Dei (Path of the Gods) Trek',
        description: 'Traverse one of the world’s most scenic mountain trails past ancient shepherd dwellings and dramatic precipices plunging into the sparkling sea.',
        meals: 'Breakfast, Rustic Shepherd Picnic',
        accommodation: 'Palazzo Avino (5-star)'
      },
      {
        day: 5,
        title: 'Amalfi Town & Ancient Paper Mills',
        description: 'Explore the grand 9th-century Duomo of St. Andrew, learn medieval paper-making at the paper museum, and sample artisan gelato in Piazza Duomo.',
        meals: 'Breakfast, Dinner',
        accommodation: 'Hotel Santa Caterina (5-star)'
      },
      {
        day: 6,
        title: 'Private Cooking Masterclass & Farm Experience',
        description: 'Harvest organic heirloom ingredients with Mama Agata in a private clifftop garden. Learn secrets of fresh handmade gnocchi and tiramisu.',
        meals: 'Breakfast, Farm-to-Table Lunch',
        accommodation: 'Hotel Santa Caterina (5-star)'
      },
      {
        day: 7,
        title: 'Departures & Farewell Espresso',
        description: 'Enjoy a leisurely breakfast overlooking the sapphire Tyrrhenian Sea before your chauffeured transfer to Naples for onward flights.',
        meals: 'Breakfast',
        accommodation: 'N/A'
      }
    ],
    inclusions: [
      '6 nights luxury 5-star boutique accommodation',
      'Private Mercedes Benz transfers throughout',
      'Full-day private yacht charter to Capri with skipper & open bar',
      'All gourmet meals as designated in itinerary',
      'Private guided trekking and historical walking tours',
      'All entrance fees, tasting experiences, and city permits'
    ],
    exclusions: [
      'International airfare',
      'Personal travel insurance',
      'Discretionary guide and crew gratuities'
    ],
    rating: 4.95,
    reviewCount: 48,
    images: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  },
  {
    id: 'tour-2',
    title: 'Swiss Glacier Express & Alpine High Summit Trek',
    slug: 'swiss-glacier-express-alpine-trek',
    destinationId: 'dest-2',
    durationDays: 8,
    price: 3890,
    discountPrice: 3450,
    difficulty: 'Moderate',
    groupSize: 12,
    category: 'Adventure',
    highlights: [
      'Ride the legendary panoramic Glacier Express across 291 bridges',
      'Sunrise hike facing the iconic horn of the Matterhorn in Zermatt',
      'Ascend to Jungfraujoch: Top of Europe at 3,454 meters altitude',
      'Private cheese fondue workshop inside a high-altitude alpine barn'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich & Scenic Train to Lucerne',
        description: 'Arrive at Zurich Airport. Board Switzerland’s pristine railway directly to lakeside Lucerne. Sunset cruise on Lake Lucerne with welcome cocktails.',
        meals: 'Dinner included',
        accommodation: 'Hotel Schweizerhof Lucerne (5-star)'
      },
      {
        day: 2,
        title: 'Mount Pilatus Dragon Ride & Cogwheel Descent',
        description: 'Ascend Mount Pilatus via the world’s steepest cogwheel railway with 48% gradient. Breathtaking panoramic vistas of 73 alpine peaks.',
        meals: 'Breakfast, Alpine Lunch',
        accommodation: 'Hotel Schweizerhof Lucerne (5-star)'
      },
      {
        day: 3,
        title: 'Glacier Express Excellence Class Journey to Zermatt',
        description: 'Settle into oversized leather seats with panoramic skylights, 5-course gourmet regional menu, and champagne service as you traverse alpine gorges.',
        meals: 'Breakfast, 5-course Lunch on train, Dinner',
        accommodation: 'Omnia Mountain Lodge Zermatt (5-star)'
      },
      {
        day: 4,
        title: 'Gornergrat & Riffelsee Matterhorn Reflection Hike',
        description: 'Witness the iconic pyramid peak mirrored in crystal mountain waters. Hike through fragrant pine forests and alpine meadows.',
        meals: 'Breakfast, Trail Snack, Fondue Dinner',
        accommodation: 'Omnia Mountain Lodge Zermatt (5-star)'
      },
      {
        day: 5,
        title: 'Interlaken & Lauterbrunnen Valley of 72 Waterfalls',
        description: 'Explore the sheer vertical limestone cliffs of Lauterbrunnen, the real-world inspiration for Tolkien’s Rivendell, and roaring Trümmelbach Falls.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Victoria-Jungfrau Grand Hotel (5-star)'
      },
      {
        day: 6,
        title: 'Jungfraujoch – Top of Europe Expedition',
        description: 'Journey inside the mountain by high-tech Eiger Express cable car. Walk through the sculpted Ice Palace and gaze across the Aletsch Glacier.',
        meals: 'Breakfast, High Altitude Lunch',
        accommodation: 'Victoria-Jungfrau Grand Hotel (5-star)'
      },
      {
        day: 7,
        title: 'Grindelwald First Cliff Walk & Alpine Spa',
        description: 'Suspended metal walkway wrapped around sheer rock cliffs. Afternoon relaxation at the thermal hydrotherapy pools.',
        meals: 'Breakfast, Farewell Gala Dinner',
        accommodation: 'Victoria-Jungfrau Grand Hotel (5-star)'
      },
      {
        day: 8,
        title: 'Zurich Departure',
        description: 'Scenic first-class rail return to Zurich Airport for international departures.',
        meals: 'Breakfast',
        accommodation: 'N/A'
      }
    ],
    inclusions: [
      '7 nights premier Swiss alpine lodge accommodation',
      'Swiss Travel Pass First Class with unlimited panoramic trains & steamers',
      'Glacier Express Excellence Class reservation and 5-course dining',
      'Mountain railway tickets to Gornergrat & Jungfraujoch',
      'Certified Swiss mountain UIAGM guide'
    ],
    exclusions: [
      'Transatlantic flights',
      'Personal gear (hiking boots/poles)',
      'Extra spa treatments'
    ],
    rating: 4.98,
    reviewCount: 62,
    images: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  },
  {
    id: 'tour-3',
    title: 'Timeless Japan: Kyoto Temples, Mount Fuji & Kaiseki',
    slug: 'timeless-japan-kyoto-fuji-kaiseki',
    destinationId: 'dest-3',
    durationDays: 10,
    price: 4400,
    discountPrice: null,
    difficulty: 'Easy',
    groupSize: 8,
    category: 'Cultural',
    highlights: [
      'Private after-hours meditation with a Zen Buddhist monk in Daitoku-ji',
      'Dawn stroll through Fushimi Inari’s 10,000 Vermilion Torii Gates',
      'Exclusive private Ryokan stay with natural volcanic onsen baths in Hakone',
      'Intimate tea ceremony and geiko cultural dialogue in Gion district'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Tokyo & Shinkansen Bullet Train to Kyoto',
        description: 'Welcome at Haneda or Narita. Ride the sleek Nozomi Shinkansen train at 300 km/h straight to the ancient capital of Kyoto.',
        meals: 'Welcome Bento & Dinner',
        accommodation: 'The Ritz-Carlton Kyoto'
      },
      {
        day: 2,
        title: 'Fushimi Inari Shrine & Kiyomizu-dera Wooden Terrace',
        description: 'Early morning hike through tunnels of vermilion torii gates followed by Kyoto’s historic preservation district in Higashiyama.',
        meals: 'Breakfast, Kaiseki Lunch',
        accommodation: 'The Ritz-Carlton Kyoto'
      },
      {
        day: 3,
        title: 'Arashiyama Bamboo Forest & Golden Pavilion Kinkaku-ji',
        description: 'Wander through towering emerald stalks of bamboo, visit the serene Tenryu-ji Zen garden, and marvel at the gold-leaf reflection of Kinkaku-ji.',
        meals: 'Breakfast, Tofu Cuisine Lunch, Dinner',
        accommodation: 'The Ritz-Carlton Kyoto'
      },
      {
        day: 4,
        title: 'Nara Ancient Capital & Sacred Sika Deer',
        description: 'Excursion to Todai-ji to stand before the world’s largest bronze Great Buddha. Feed friendly deer in Nara National Park.',
        meals: 'Breakfast, Lunch',
        accommodation: 'The Ritz-Carlton Kyoto'
      },
      {
        day: 5,
        title: 'Bullet Train to Hakone & Traditional Ryokan Experience',
        description: 'Travel into the foothills of Mount Fuji. Check into a historic Ryokan, change into yukata robes, and bathe in restorative onsen mineral pools.',
        meals: 'Breakfast, 9-course Kaiseki Banquet',
        accommodation: 'Gora Kadan Luxury Ryokan'
      },
      {
        day: 6,
        title: 'Lake Ashi Pirate Ship & Mount Fuji Views',
        description: 'Cruise tranquil Lake Ashi with reflection views of Mount Fuji and ride the Hakone ropeway over smoking volcanic sulfur vents.',
        meals: 'Breakfast, Lunch, Kaiseki Dinner',
        accommodation: 'Gora Kadan Luxury Ryokan'
      },
      {
        day: 7,
        title: 'Arrival in Futuristic Tokyo & Shibuya Crossing',
        description: 'Return to dynamic Tokyo. Visit Meiji Shrine in the forest, experience the organized chaos of Shibuya Crossing, and evening dining in Ginza.',
        meals: 'Breakfast, Dinner',
        accommodation: 'Aman Tokyo'
      },
      {
        day: 8,
        title: 'Tokyo TeamLab Borderless & Tsukiji Outer Market',
        description: 'Savor fresh melt-in-your-mouth bluefin tuna nigiri, followed by an immersive digital art museum experience.',
        meals: 'Breakfast, Sushi Master Lunch',
        accommodation: 'Aman Tokyo'
      },
      {
        day: 9,
        title: 'Asakusa Senso-ji & Sumida River Cruise',
        description: 'Explore Tokyo’s oldest temple with its iconic giant red lantern, followed by shopping for artisan knives and lacquerware.',
        meals: 'Breakfast, Farewell Wagyu Dinner',
        accommodation: 'Aman Tokyo'
      },
      {
        day: 10,
        title: 'Sayonara Tokyo',
        description: 'Private airport chauffeur transfer to Tokyo Narita or Haneda.',
        meals: 'Breakfast',
        accommodation: 'N/A'
      }
    ],
    inclusions: [
      '9 nights in luxury properties and traditional onsen ryokan',
      'All Shinkansen Bullet Train First-Class reserved tickets',
      'Private expert English-speaking licensed National Guides',
      'Exclusive private cultural workshops and monk meditation sessions',
      'All breakfast, high-end Kaiseki dinners, and specialty lunches'
    ],
    exclusions: [
      'International flights to/from Japan',
      'Alcoholic beverages beyond dinners'
    ],
    rating: 4.97,
    reviewCount: 54,
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  },
  {
    id: 'tour-4',
    title: 'Great Serengeti Migration & Ngorongoro Crater Luxury Safari',
    slug: 'serengeti-ngorongoro-luxury-safari',
    destinationId: 'dest-4',
    durationDays: 8,
    price: 5200,
    discountPrice: 4850,
    difficulty: 'Easy',
    groupSize: 6,
    category: 'Nature',
    highlights: [
      'Hot air balloon safari over the vast plains of the Serengeti at sunrise',
      'Descend into the Ngorongoro Crater caldera teeming with black rhinos and lions',
      'Unmatched Big Five wildlife tracking with expert Maasai trackers',
      'Campfire bush dining under the Southern Cross constellation'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kilimanjaro to Arusha Coffee Lodge',
        description: 'Arrive at Kilimanjaro International Airport. Chauffeur to a tranquil plantation lodge nestled amid aromatic coffee trees.',
        meals: 'Welcome Dinner',
        accommodation: 'Arusha Coffee Lodge'
      },
      {
        day: 2,
        title: 'Tarangire National Park: Kingdom of Elephants & Baobabs',
        description: 'First game drive among colossal baobab trees and massive herds of 300+ elephants along the Tarangire River.',
        meals: 'Breakfast, Bush Picnic, Gourmet Dinner',
        accommodation: 'Sanctuary Swala Camp'
      },
      {
        day: 3,
        title: 'Ngorongoro Crater Floor Safari',
        description: 'Descend 600 meters through mist into the world’s largest intact volcanic caldera. Spot endangered black rhinos, hippos, and flamingo-filled soda lakes.',
        meals: 'Breakfast, Picnic by Hippo Pool, Dinner',
        accommodation: 'Ngorongoro Crater Lodge'
      },
      {
        day: 4,
        title: 'Flight to the Central Serengeti',
        description: 'Scenic bush flight over the Great Rift Valley into Seronera. Afternoon game drive targeting leopards draped over acacia branches.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Four Seasons Safari Lodge Serengeti'
      },
      {
        day: 5,
        title: 'Serengeti Sunrise Hot Air Balloon & Bush Champagne',
        description: 'Float silently above herds of wildebeest and zebras as dawn paints the savanna in gold. Land for a five-star white-linen bush breakfast.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Four Seasons Safari Lodge Serengeti'
      },
      {
        day: 6,
        title: 'Mara River Crossing Search (Great Migration)',
        description: 'Track the migrating herds braving crocodile-infested waters. Intensive photography workshop with telephoto techniques.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Singita Faru Faru River Camp'
      },
      {
        day: 7,
        title: 'Maasai Cultural Exchange & Night Game Drive',
        description: 'Visit an authentic Maasai community to learn ancient survival skills, medicinal plants, and traditional jumping dances. Evening infrared spotlight drive.',
        meals: 'Breakfast, Lunch, Boma Campfire Dinner',
        accommodation: 'Singita Faru Faru River Camp'
      },
      {
        day: 8,
        title: 'Bush Flight to Kilimanjaro & Departures',
        description: 'Farewell morning game drive before our light aircraft transfers you back to Kilimanjaro for evening international connections.',
        meals: 'Breakfast, Lunch',
        accommodation: 'N/A'
      }
    ],
    inclusions: [
      '7 nights in premier safari lodges and luxury tented camps',
      'All internal bush flights in private twin-engine Cessna aircraft',
      'Exclusive-use 4x4 open-sided safari Land Cruiser with pop-up roof and fridge',
      'Hot air balloon safari with champagne breakfast',
      'All national park conservancy and crater descent fees'
    ],
    exclusions: [
      'Tanzania tourist visa ($50-$100)',
      'Guide tips ($20-$30/day recommended)'
    ],
    rating: 4.99,
    reviewCount: 39,
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  },
  {
    id: 'tour-5',
    title: 'Bali Soul Sanctuary: Temples, Yoga & Island Hopping',
    slug: 'bali-soul-sanctuary-wellness-adventure',
    destinationId: 'dest-5',
    durationDays: 8,
    price: 1850,
    discountPrice: 1599,
    difficulty: 'Easy',
    groupSize: 14,
    category: 'Wellness',
    highlights: [
      'Sunrise yoga overlooking the sacred jungle ravine in Ubud',
      'Traditional Tirta Empul holy spring water cleansing ritual with a Balinese priest',
      'Speedboat to Nusa Penida to photograph the T-Rex head cliff at Kelingking Beach',
      'Snorkel with gentle giant manta rays in crystal bays'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Denpasar & Ubud Rainforest Haven',
        description: 'Warm Balinese flower garland greeting at Ngurah Rai Airport. Transfer to your jungle pool villa.',
        meals: 'Welcome Dinner',
        accommodation: 'Maya Ubud Resort & Spa'
      },
      {
        day: 2,
        title: 'Tegallalang Rice Terraces & Sacred Water Blessing',
        description: 'Walk through cascading emerald paddy fields, sample Luwak coffee, and participate in holy spring purification.',
        meals: 'Breakfast, Organic Farm Lunch',
        accommodation: 'Maya Ubud Resort & Spa'
      },
      {
        day: 3,
        title: 'Mount Batur Sunrise Volcano Hike & Hot Springs',
        description: 'Pre-dawn climb to the rim of an active volcano to watch the sunrise above the clouds, followed by volcanic thermal mineral baths.',
        meals: 'Breakfast at Crater, Lunch',
        accommodation: 'Maya Ubud Resort & Spa'
      },
      {
        day: 4,
        title: 'Ubud to Sanur & Speedboat to Nusa Penida',
        description: 'Cruise across the Badung Strait. Check into cliffside beachfront bungalows.',
        meals: 'Breakfast, Seafood Lunch, Dinner',
        accommodation: 'Semabu Hills Resort'
      },
      {
        day: 5,
        title: 'Kelingking T-Rex Beach & Manta Ray Snorkeling',
        description: 'Marvel at the world-famous cliff formation and swim with harmless 4-meter wide oceanic manta rays.',
        meals: 'Breakfast, Beach Picnic, Dinner',
        accommodation: 'Semabu Hills Resort'
      },
      {
        day: 6,
        title: 'Return to Seminyak & Sunset Beach Club VIP',
        description: 'Cross back to the mainland. Unwind at an infinity pool club overlooking Canggu and Seminyak surf breaks.',
        meals: 'Breakfast, Dinner',
        accommodation: 'W Bali - Seminyak'
      },
      {
        day: 7,
        title: 'Uluwatu Clifftop Temple & Kecak Fire Dance',
        description: 'Perched 70 meters above crashing waves, watch the dramatic sunset Kecak chorus and chanting reenactment of the Ramayana.',
        meals: 'Breakfast, Jimbaran Bay Seafood Dinner',
        accommodation: 'W Bali - Seminyak'
      },
      {
        day: 8,
        title: 'Spa Recovery & Airport Transfer',
        description: 'Traditional 90-minute Balinese lulur herbal massage before departing.',
        meals: 'Breakfast',
        accommodation: 'N/A'
      }
    ],
    inclusions: [
      '7 nights boutique resort accommodation',
      'All local ground and high-speed boat transfers',
      'Daily morning yoga and meditation classes',
      'Manta ray snorkeling gear and boat charters',
      'Water temple blessings with offerings provided'
    ],
    exclusions: [
      'International flights',
      'Personal alcoholic beverages'
    ],
    rating: 4.88,
    reviewCount: 71,
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb35?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: false
  },
  {
    id: 'tour-6',
    title: 'Iceland Aurora Expedition & Glacier Ice Caving',
    slug: 'iceland-aurora-glacier-ice-caving',
    destinationId: 'dest-6',
    durationDays: 7,
    price: 3600,
    discountPrice: 3200,
    difficulty: 'Challenging',
    groupSize: 10,
    category: 'Adventure',
    highlights: [
      'Nightly guided hunts for the dancing Northern Lights away from light pollution',
      'Step into the crystalline sapphire depths of the Vatnajökull Ice Caves',
      'Walk along the surreal volcanic sands of Reynisfjara Diamond Beach',
      'Soak in the mineral-rich geothermal waters of the Blue Lagoon'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Reykjavik Welcome & Blue Lagoon Thermal Soak',
        description: 'Arrive at Keflavik Airport. Immediate transfer to the geothermal silica waters of the Blue Lagoon with mask bar and drink.',
        meals: 'Welcome Dinner',
        accommodation: 'The Reykjavik EDITION (5-star)'
      },
      {
        day: 2,
        title: 'The Golden Circle: Thingvellir, Geysir & Gullfoss',
        description: 'Walk between tectonic plates, watch Strokkur erupt 30 meters high every 6 minutes, and witness the thunder of the Golden Waterfall.',
        meals: 'Breakfast, Geothermal Bakery Lunch',
        accommodation: 'Hotel Rangá (Aurora Watch Specialist)'
      },
      {
        day: 3,
        title: 'Seljalandsfoss, Skógafoss & Black Sand Beach',
        description: 'Walk behind a roaring 60-meter water curtain and stand in awe of the hexagonal basalt sea stacks at Reynisfjara.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Hotel Rangá'
      },
      {
        day: 4,
        title: 'Vatnajökull Glacier Superjeep & Blue Ice Cave',
        description: 'Board a mammoth 4x4 Superjeep onto Europe’s largest glacier. Don crampons to enter natural translucent ice cathedrals.',
        meals: 'Breakfast, Glacier Trail Snack, Dinner',
        accommodation: 'Fosshótel Glacier Lagoon'
      },
      {
        day: 5,
        title: 'Jökulsárlón Glacier Lagoon & Diamond Beach',
        description: 'Watch glowing blue icebergs calve off glaciers into the lagoon, and touch glistening ice diamonds scattered on pitch-black volcanic sand.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Fosshótel Glacier Lagoon'
      },
      {
        day: 6,
        title: 'Lava Tunnels & Reykjavik Artisan Gastronomy',
        description: 'Explore the 5,000-year-old Raufarhólshellir lava tube. Evening culinary tour celebrating modern Nordic cuisine in Reykjavik.',
        meals: 'Breakfast, Tasting Menu Dinner',
        accommodation: 'The Reykjavik EDITION (5-star)'
      },
      {
        day: 7,
        title: 'Reykjavik Sightseeing & Departure',
        description: 'Visit the soaring Hallgrimskirkja church and Harpa concert hall before airport transfers.',
        meals: 'Breakfast',
        accommodation: 'N/A'
      }
    ],
    inclusions: [
      '6 nights upscale boutique hotel accommodation',
      'All travel in high-clearance customized Superjeep',
      'Vatnajökull ice cave expedition with certified glacier guides and crampons',
      'Blue Lagoon Comfort package entrance',
      'Nightly aurora wake-up calls and astronomy guidance'
    ],
    exclusions: [
      'Flights to Iceland',
      'Cold weather clothing (rental available upon request)'
    ],
    rating: 4.96,
    reviewCount: 44,
    images: [
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop'
    ],
    featured: true
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'book-1',
    bookingCode: 'TRV-89421',
    tourId: 'tour-1',
    customerName: 'Eleanor Vance',
    customerEmail: 'eleanor.vance@example.com',
    customerPhone: '+1 (555) 234-5678',
    travelDate: new Date('2026-10-15T00:00:00.000Z'),
    guestsCount: 2,
    totalAmount: 5780,
    status: 'CONFIRMED',
    specialRequests: 'Celebrating 10th wedding anniversary. Window table requested for dinners.',
    createdAt: new Date('2026-08-20T10:30:00.000Z')
  },
  {
    id: 'book-2',
    bookingCode: 'TRV-47392',
    tourId: 'tour-2',
    customerName: 'Marcus Sterling',
    customerEmail: 'marcus.s@example.com',
    customerPhone: '+44 20 7946 0912',
    travelDate: new Date('2026-11-04T00:00:00.000Z'),
    guestsCount: 1,
    totalAmount: 3450,
    status: 'CONFIRMED',
    specialRequests: 'Vegetarian meals preferred on Glacier Express.',
    createdAt: new Date('2026-08-25T14:15:00.000Z')
  },
  {
    id: 'book-3',
    bookingCode: 'TRV-10294',
    tourId: 'tour-4',
    customerName: 'Sophia Chen',
    customerEmail: 'sophia.chen@example.com',
    customerPhone: '+65 9123 4567',
    travelDate: new Date('2026-12-10T00:00:00.000Z'),
    guestsCount: 2,
    totalAmount: 9700,
    status: 'PENDING',
    specialRequests: 'Wildlife photography focus; telephoto lens battery charging support.',
    createdAt: new Date('2026-09-01T09:00:00.000Z')
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    tourId: 'tour-1',
    author: 'Clara & David Thorne',
    rating: 5,
    comment: 'The private Riva cruise to Capri was pure cinema! Everything from the clifftop hotel in Positano to the farm-to-table lunch in Ravello was orchestrated with perfection.',
    location: 'London, United Kingdom',
    createdAt: new Date('2026-07-12T00:00:00.000Z').toISOString()
  },
  {
    id: 'rev-2',
    tourId: 'tour-1',
    author: 'Dr. Michael Ross',
    rating: 5,
    comment: 'The Path of the Gods hike took my breath away. Our guide knew every wild herb and shepherd family along the way. Worth every single penny.',
    location: 'Boston, USA',
    createdAt: new Date('2026-06-28T00:00:00.000Z').toISOString()
  },
  {
    id: 'rev-3',
    tourId: 'tour-2',
    author: 'Julian Weber',
    rating: 5,
    comment: 'Glacier Express Excellence Class felt like a 5-star hotel gliding through the clouds. The Matterhorn sunrise reflection at Riffelsee will stay in my memory forever.',
    location: 'Munich, Germany',
    createdAt: new Date('2026-08-04T00:00:00.000Z').toISOString()
  },
  {
    id: 'rev-4',
    tourId: 'tour-4',
    author: 'Samantha & Noah Patel',
    rating: 5,
    comment: 'The sunrise hot air balloon over the Serengeti gave us goosebumps. We saw thousands of wildebeest and a pride of 14 lions right below us.',
    location: 'Toronto, Canada',
    createdAt: new Date('2026-08-19T00:00:00.000Z').toISOString()
  },
  {
    id: 'rev-5',
    tourId: 'tour-6',
    author: 'Erik Lindqvist',
    rating: 5,
    comment: 'Standing inside the crystal blue ice cave felt like another planet. On night four the Aurora danced across the entire sky above our geothermal hot tub!',
    location: 'Stockholm, Sweden',
    createdAt: new Date('2026-03-15T00:00:00.000Z').toISOString()
  }
];
