let sampleList = [
  {
    title: "Cozy Mountain Cabin",
    description: "A rustic cabin in the mountains",
    image:
      "https://images.unsplash.com/photo-1617191513569-5efcf3c7eec2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 1500,
    location: "Swat",
    country: "Pakistan",
  },
  {
    title: "Modern Studio Apartment",
    description: "Stylish and modern studio in the city center",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161ed2f69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2000,
    location: "Islamabad",
    country: "Pakistan",
  },
  {
    title: "Luxury Beach Villa",
    description: "A luxurious villa by the beach",
    image:
      "https://images.unsplash.com/photo-1613977257365-1dc22d3a93a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
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
      "https://images.unsplash.com/photo-1523307730656-7c89dc6e863b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 1200,
    location: "Hunza",
    country: "Pakistan",
  },
  {
    title: "Urban Loft",
    description: "Spacious loft in a bustling city",
    image:
      "https://images.unsplash.com/photo-1595526116070-29e6eec9e269?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3000,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Desert Retreat",
    description: "Peaceful retreat in the desert",
    image:
      "https://images.unsplash.com/photo-1612197595702-cdd32b382919?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 1800,
    location: "Tharparkar",
    country: "Pakistan",
  },
  {
    title: "Seaside Apartment",
    description: "Apartment with stunning sea views",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3500,
    location: "Gwadar",
    country: "Pakistan",
  },
  {
    title: "Hilltop Bungalow",
    description: "Scenic bungalow on a hill",
    image:
      "https://images.unsplash.com/photo-1605268698068-7b3b38e61f4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 4000,
    location: "Muree",
    country: "Pakistan",
  },
  {
    title: "City Penthouse",
    description: "Luxurious penthouse with city views",
    image:
      "https://images.unsplash.com/photo-1596558453722-546733dc453e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 6000,
    location: "Islamabad",
    country: "Pakistan",
  },
  {
    title: "Forest Lodge",
    description: "Lodge surrounded by dense forest",
    image:
      "https://images.unsplash.com/photo-1545065554-103d5e8a5bc0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 1300,
    location: "Kaghan",
    country: "Pakistan",
  },
  {
    title: "Classic Farmhouse",
    description: "Traditional farmhouse with modern amenities",
    image:
      "https://images.unsplash.com/photo-1582504575204-66ae09b8e6d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2200,
    location: "Sialkot",
    country: "Pakistan",
  },
  {
    title: "Modern City Apartment",
    description: "A modern apartment in a prime location",
    image:
      "https://images.unsplash.com/photo-1616627987254-2bbfae7f89f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2800,
    location: "Rawalpindi",
    country: "Pakistan",
  },
  {
    title: "Lake View Cabin",
    description: "A cabin with breathtaking lake views",
    image:
      "https://images.unsplash.com/photo-1564008260590-e6df8b5d6a4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3500,
    location: "Skardu",
    country: "Pakistan",
  },
  {
    title: "Winter Wonderland",
    description: "A cozy home in a snowy region",
    image:
      "https://images.unsplash.com/photo-1574661120598-6f23e402634c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3000,
    location: "Naran",
    country: "Pakistan",
  },
  {
    title: "Historical Mansion",
    description: "A mansion with rich historical background",
    image:
      "https://images.unsplash.com/photo-1614878957092-9d5c5c8319e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 7000,
    location: "Multan",
    country: "Pakistan",
  },
  {
    title: "Mountain Retreat",
    description: "A peaceful retreat in the mountains",
    image:
      "https://images.unsplash.com/photo-1605462863863-62fe4ae2f47e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 5000,
    location: "Gilgit",
    country: "Pakistan",
  },
  {
    title: "Coastal Bungalow",
    description: "A serene bungalow near the coast",
    image:
      "https://images.unsplash.com/photo-1544457075-900b78e5c6dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 5500,
    location: "Pasni",
    country: "Pakistan",
  },
  {
    title: "Minimalist Studio",
    description: "A minimalist studio apartment",
    image:
      "https://images.unsplash.com/photo-1616627965060-98ac3f6f8f47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 1900,
    location: "Quetta",
    country: "Pakistan",
  },
  {
    title: "Penthouse in Downtown",
    description: "A luxurious penthouse in downtown",
    image:
      "https://images.unsplash.com/photo-1590489799335-4fdb4c2da1ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 7500,
    location: "Peshawar",
    country: "Pakistan",
  },
  {
    title: "Tranquil Lake House",
    description: "A peaceful house by the lake",
    image:
      "https://images.unsplash.com/photo-1600607680160-fbbb65e43e8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 4000,
    location: "Attabad Lake",
    country: "Pakistan",
  },
  {
    title: "Riverside Cottage",
    description: "A cozy cottage near the riverbank",
    image:
      "https://images.unsplash.com/photo-1542314864-d0649a5b75e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2500,
    location: "Swat Valley",
    country: "Pakistan",
  },
  {
    title: "Modern Duplex",
    description: "A modern duplex apartment in the city",
    image:
      "https://images.unsplash.com/photo-1616628225330-6fcb18d46a9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3000,
    location: "Islamabad",
    country: "Pakistan",
  },
  {
    title: "Hill Valley Lodge",
    description: "A lodge surrounded by lush green hills",
    image:
      "https://images.unsplash.com/photo-1551434688-e076c223a692?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3500,
    location: "Mansehra",
    country: "Pakistan",
  },
  {
    title: "Luxury High-Rise",
    description: "An upscale apartment in a high-rise building",
    image:
      "https://images.unsplash.com/photo-1582506025241-3fd8a12bb0b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 8000,
    location: "Lahore",
    country: "Pakistan",
  },
  {
    title: "Desert Villa",
    description: "A luxurious villa in the heart of the desert",
    image:
      "https://images.unsplash.com/photo-1613972360254-2f3dc5c542ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 4200,
    location: "Cholistan Desert",
    country: "Pakistan",
  },
  {
    title: "Secluded Cabin",
    description: "A cabin tucked away in a serene forest",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2700,
    location: "Kalam",
    country: "Pakistan",
  },
  {
    title: "Oceanfront Villa",
    description: "A beautiful villa with ocean views",
    image:
      "https://images.unsplash.com/photo-1570129477492-7c7dbaf3443b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 7000,
    location: "Gwadar",
    country: "Pakistan",
  },
  {
    title: "Skyline Penthouse",
    description: "A premium penthouse with skyline views",
    image:
      "https://images.unsplash.com/photo-1616628222601-70d9e8c22588?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 10000,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Urban Flat",
    description: "A sleek and stylish urban flat",
    image:
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3000,
    location: "Faisalabad",
    country: "Pakistan",
  },
  {
    title: "Eco-Friendly Cottage",
    description: "A sustainable and eco-friendly cottage",
    image:
      "https://images.unsplash.com/photo-1616627965133-06c8f0e8e48e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2400,
    location: "Gilgit",
    country: "Pakistan",
  },
  {
    title: "Traditional Haveli",
    description: "A traditional haveli with cultural vibes",
    image:
      "https://images.unsplash.com/photo-1597690479507-d8bd11d1be37?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 5200,
    location: "Bahawalpur",
    country: "Pakistan",
  },
  {
    title: "Cozy Snow Cabin",
    description: "A warm cabin in a snowy paradise",
    image:
      "https://images.unsplash.com/photo-1553582132-d03846edc9e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 4500,
    location: "Naran",
    country: "Pakistan",
  },
  {
    title: "City Center Apartment",
    description: "A modern apartment in the city center",
    image:
      "https://images.unsplash.com/photo-1602525992868-6a78967bd017?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2800,
    location: "Multan",
    country: "Pakistan",
  },
  {
    title: "Elegant Townhouse",
    description: "A stylish townhouse with premium amenities",
    image:
      "https://images.unsplash.com/photo-1605453512796-cf4e4b2b7ff7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3600,
    location: "Sukkur",
    country: "Pakistan",
  },
  {
    title: "Rooftop Villa",
    description: "An exclusive villa with a rooftop garden",
    image:
      "https://images.unsplash.com/photo-1576671360914-5da6de977e79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 8000,
    location: "Rawalpindi",
    country: "Pakistan",
  },
  {
    title: "Mountain Base Lodge",
    description: "A cozy lodge at the base of a mountain",
    image:
      "https://images.unsplash.com/photo-1574092264947-1b74f09ff4e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 4300,
    location: "Chitral",
    country: "Pakistan",
  },
  {
    title: "Luxury Condo",
    description: "An ultra-modern luxury condo",
    image:
      "https://images.unsplash.com/photo-1593462164872-3ef2a04a4ff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 9200,
    location: "Lahore",
    country: "Pakistan",
  },
  {
    title: "Sky High Residence",
    description: "A high-rise residence with panoramic views",
    image:
      "https://images.unsplash.com/photo-1606816311734-6cce27427ed2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 7500,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Modern Minimalist House",
    description: "A simple yet elegant minimalist house",
    image:
      "https://images.unsplash.com/photo-1595425843257-40373b8d86f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3200,
    location: "Hyderabad",
    country: "Pakistan",
  },
  {
    title: "Exclusive Lakeside Villa",
    description: "A luxurious villa on the lakeside",
    image:
      "https://images.unsplash.com/photo-1613984292666-f6fcf736d4d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 9500,
    location: "Attabad Lake",
    country: "Pakistan",
  },
  {
    title: "Coastal Breeze Apartment",
    description: "A modern apartment near the coast",
    image:
      "https://images.unsplash.com/photo-1595425953443-640c742ea6a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 4300,
    location: "Pasni",
    country: "Pakistan",
  },
  {
    title: "Village Homestead",
    description: "A classic homestead in a peaceful village",
    image:
      "https://images.unsplash.com/photo-1574179828834-cf01f54729fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 2000,
    location: "Jhang",
    country: "Pakistan",
  },
  {
    title: "Heritage Palace",
    description: "An old palace with a rich history",
    image:
      "https://images.unsplash.com/photo-1587829751560-6856e616f2ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 8500,
    location: "Bahawalpur",
    country: "Pakistan",
  },
  {
    title: "Alpine Retreat",
    description: "A cabin in an alpine forest",
    image:
      "https://images.unsplash.com/photo-1598403395297-dc5cf58217cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 4200,
    location: "Hunza",
    country: "Pakistan",
  },
  {
    title: "Garden Loft",
    description: "A loft with a beautiful garden view",
    image:
      "https://images.unsplash.com/photo-1592335108537-f8367c351a5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3000,
    location: "Abbottabad",
    country: "Pakistan",
  },
  {
    title: "Elegant Manor",
    description: "A stately home with vintage charm",
    image:
      "https://images.unsplash.com/photo-1602512417118-1f642f2709e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 7500,
    location: "Murree",
    country: "Pakistan",
  },
  {
    title: "Rustic Ranch",
    description: "A spacious ranch with open landscapes",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 5000,
    location: "Balochistan",
    country: "Pakistan",
  },
  {
    title: "Beach House",
    description: "A stylish house overlooking the beach",
    image:
      "https://images.unsplash.com/photo-1598807501442-13015c3d93e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 6000,
    location: "Karachi",
    country: "Pakistan",
  },
  {
    title: "Treetop Retreat",
    description: "A treetop cabin for nature enthusiasts",
    image:
      "https://images.unsplash.com/photo-1604407758160-e15b2e0d1c6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 4600,
    location: "Shogran",
    country: "Pakistan",
  },
  {
    title: "Terrace Studio",
    description: "A cozy studio with a private terrace",
    image:
      "https://images.unsplash.com/photo-1610914643744-9a39f5a3b7d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    price: 3300,
    location: "Peshawar",
    country: "Pakistan",
  },
];

module.exports = { data: sampleList };
