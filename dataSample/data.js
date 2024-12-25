let sampleList = [
  {
    title: "Cozy Mountain Cabin",
    description: "A rustic cabin in the mountains",
    image:
      "https://plus.unsplash.com/premium_photo-1674574586052-6d0cee95c473?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1500,
    location: "Swat",
    country: "Pakistan",
  },
  {
    title: "Modern Studio Apartment",
    description: "Stylish and modern studio in the city center",
    image:
      "https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2000,
    location: "Islamabad",
    country: "Pakistan",
  },
  {
    title: "Luxury Beach Villa",
    description: "A luxurious villa by the beach",
    image:
      "https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5000,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Suburban House",
    description: "A quiet house in the suburbs",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2500,
    location: "Lahore",
    country: "Pakistan",
  },
  {
    title: "Countryside Cottage",
    description: "Charming cottage surrounded by nature",
    image:
      "https://images.unsplash.com/photo-1657215223750-c4988d4a2635?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200,
    location: "Hunza",
    country: "Pakistan",
  },
  {
    title: "Urban Loft",
    description: "Spacious loft in a bustling city",
    image:
      "https://images.unsplash.com/photo-1511745604865-bfc13388a4f9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3000,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Desert Retreat",
    description: "Peaceful retreat in the desert",
    image:
      "https://images.unsplash.com/photo-1514471244491-6fb96fcdf04f?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1800,
    location: "Tharparkar",
    country: "Pakistan",
  },
  {
    title: "Seaside Apartment",
    description: "Apartment with stunning sea views",
    image:
      "https://plus.unsplash.com/premium_photo-1661963542944-0d1fc8e66f83?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3500,
    location: "Gwadar",
    country: "Pakistan",
  },
  {
    title: "Hilltop Bungalow",
    description: "Scenic bungalow on a hill",
    image:
      "https://images.unsplash.com/photo-1696212588651-c6782a5b42e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4000,
    location: "Muree",
    country: "Pakistan",
  },
  {
    title: "City Penthouse",
    description: "Luxurious penthouse with city views",
    image:
      "https://images.unsplash.com/photo-1711122842694-bd38fe63f309?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6000,
    location: "Islamabad",
    country: "Pakistan",
  },
  {
    title: "Forest Lodge",
    description: "Lodge surrounded by dense forest",
    image:
      "https://images.unsplash.com/photo-1694086781766-f4ddf8a2a1a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1300,
    location: "Kaghan",
    country: "Pakistan",
  },
  {
    title: "Classic Farmhouse",
    description: "Traditional farmhouse with modern amenities",
    image:
      "https://plus.unsplash.com/premium_photo-1663088800901-c57258d8707a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2200,
    location: "Sialkot",
    country: "Pakistan",
  },
  {
    title: "Modern City Apartment",
    description: "A modern apartment in a prime location",
    image:
      "https://plus.unsplash.com/premium_photo-1733267085043-1d6e8b6e8ecd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2800,
    location: "Rawalpindi",
    country: "Pakistan",
  },
  {
    title: "Lake View Cabin",
    description: "A cabin with breathtaking lake views",
    image:
      "https://images.unsplash.com/photo-1485591926658-da9e25c13893?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3500,
    location: "Skardu",
    country: "Pakistan",
  },
  {
    title: "Winter Wonderland",
    description: "A cozy home in a snowy region",
    image:
      "https://images.unsplash.com/photo-1618824834789-eb5d98e150f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3000,
    location: "Naran",
    country: "Pakistan",
  },
  {
    title: "Historical Mansion",
    description: "A mansion with rich historical background",
    image:
      "https://images.unsplash.com/photo-1648725089348-65e294e0e3d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7000,
    location: "Multan",
    country: "Pakistan",
  },
  {
    title: "Mountain Retreat",
    description: "A peaceful retreat in the mountains",
    image:
      "https://plus.unsplash.com/premium_photo-1707974038057-0aeeaa2bef1c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5000,
    location: "Gilgit",
    country: "Pakistan",
  },
  {
    title: "Coastal Bungalow",
    description: "A serene bungalow near the coast",
    image:
      "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5500,
    location: "Pasni",
    country: "Pakistan",
  },
  {
    title: "Minimalist Studio",
    description: "A minimalist studio apartment",
    image:
      "https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1900,
    location: "Quetta",
    country: "Pakistan",
  },
  {
    title: "Penthouse in Downtown",
    description: "A luxurious penthouse in downtown",
    image:
      "https://images.unsplash.com/photo-1696556009844-2d7ef3c3e116?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7500,
    location: "Peshawar",
    country: "Pakistan",
  },
  {
    title: "Tranquil Lake House",
    description: "A peaceful house by the lake",
    image:
      "https://images.unsplash.com/photo-1726426221664-f2fbcefb4390?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4000,
    location: "Attabad Lake",
    country: "Pakistan",
  },
  {
    title: "Riverside Cottage",
    description: "A cozy cottage near the riverbank",
    image:
      "https://images.unsplash.com/photo-1707044093117-970e52b649aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2500,
    location: "Swat Valley",
    country: "Pakistan",
  },
  {
    title: "Modern Duplex",
    description: "A modern duplex apartment in the city",
    image:
      "https://plus.unsplash.com/premium_photo-1694030763063-4f1ad9c24bad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3000,
    location: "Islamabad",
    country: "Pakistan",
  },
  {
    title: "Hill Valley Lodge",
    description: "A lodge surrounded by lush green hills",
    image:
      "https://images.unsplash.com/photo-1534502025948-b0988c0c80d6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3500,
    location: "Mansehra",
    country: "Pakistan",
  },
  {
    title: "Luxury High-Rise",
    description: "An upscale apartment in a high-rise building",
    image:
      "https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 8000,
    location: "Lahore",
    country: "Pakistan",
  },
  {
    title: "Desert Villa",
    description: "A luxurious villa in the heart of the desert",
    image:
      "https://images.unsplash.com/photo-1509940473077-6e7950fbb0be?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4200,
    location: "Cholistan Desert",
    country: "Pakistan",
  },
  {
    title: "Secluded Cabin",
    description: "A cabin tucked away in a serene forest",
    image:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2700,
    location: "Kalam",
    country: "Pakistan",
  },
  {
    title: "Oceanfront Villa",
    description: "A beautiful villa with ocean views",
    image:
      "https://plus.unsplash.com/premium_photo-1715285342609-f975860642a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7000,
    location: "Gwadar",
    country: "Pakistan",
  },
  {
    title: "Skyline Penthouse",
    description: "A premium penthouse with skyline views",
    image:
      "https://images.unsplash.com/photo-1734217673456-f93860a3fd23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10000,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Urban Flat",
    description: "A sleek and stylish urban flat",
    image:
      "https://images.unsplash.com/photo-1734217673523-39a561a8f1e1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3000,
    location: "Faisalabad",
    country: "Pakistan",
  },
  {
    title: "Eco-Friendly Cottage",
    description: "A sustainable and eco-friendly cottage",
    image:
      "https://images.unsplash.com/photo-1636312589063-0ba99db76d88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2400,
    location: "Gilgit",
    country: "Pakistan",
  },
  {
    title: "Traditional Haveli",
    description: "A traditional haveli with cultural vibes",
    image:
      "https://images.unsplash.com/photo-1692152915189-50089ad3a6a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5200,
    location: "Bahawalpur",
    country: "Pakistan",
  },
  {
    title: "Cozy Snow Cabin",
    description: "A warm cabin in a snowy paradise",
    image:
      "https://images.unsplash.com/photo-1699041038429-b75969089997?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500,
    location: "Naran",
    country: "Pakistan",
  },
  {
    title: "City Center Apartment",
    description: "A modern apartment in the city center",
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2800,
    location: "Multan",
    country: "Pakistan",
  },
  {
    title: "Elegant Townhouse",
    description: "A stylish townhouse with premium amenities",
    image:
      "https://images.unsplash.com/photo-1454388683759-ee76c15fee26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3600,
    location: "Sukkur",
    country: "Pakistan",
  },
  {
    title: "Rooftop Villa",
    description: "An exclusive villa with a rooftop garden",
    image:
      "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 8000,
    location: "Rawalpindi",
    country: "Pakistan",
  },
  {
    title: "Mountain Base Lodge",
    description: "A cozy lodge at the base of a mountain",
    image:
      "https://images.unsplash.com/photo-1718606267789-de728d02f064?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4300,
    location: "Chitral",
    country: "Pakistan",
  },
  {
    title: "Luxury Condo",
    description: "An ultra-modern luxury condo",
    image:
      "https://images.unsplash.com/photo-1711111038517-f5d61fe63008?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9200,
    location: "Lahore",
    country: "Pakistan",
  },
  {
    title: "Sky High Residence",
    description: "A high-rise residence with panoramic views",
    image:
      "https://images.unsplash.com/photo-1657349231094-52e63dd6cc45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7500,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Modern Minimalist House",
    description: "A simple yet elegant minimalist house",
    image:
      "https://images.unsplash.com/photo-1718644342133-0dbb056cb7fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3200,
    location: "Hyderabad",
    country: "Pakistan",
  },
  {
    title: "Exclusive Lakeside Villa",
    description: "A luxurious villa on the lakeside",
    image:
      "https://images.unsplash.com/photo-1656496355421-98267a748d8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9500,
    location: "Attabad Lake",
    country: "Pakistan",
  },
];

module.exports = { data: sampleList };
