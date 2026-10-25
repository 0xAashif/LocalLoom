export const HERO_SLIDES = [
  {
    id: 1,
    image: "/products/product-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1610030469983-98e550d615e1?auto=format&fit=crop&w=1400&q=75",
    tag: "Chanderi & Maheshwari Heritage",
    title: "Aapke Shehar ki Mashhoor Dukaanein, Ab Ghar Baithe",
    subtitle: "Shujalpur, Kalapipal aur Shajapur ke asli bazaar se 5 kapde mangwayein. Pehle pehno, phir pasand aaye toh lo.",
    shopFeature: "Ramesh Saree Emporium • Shujalpur Mandi"
  },
  {
    id: 2,
    image: "/products/product-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1597983073493-8898140bc055?auto=format&fit=crop&w=1400&q=75",
    tag: "Festive & Wedding Menswear",
    title: "Bina Bheed, Asli Dukaan ke Rate Par Doorstep Trial",
    subtitle: "Kurta-pajama, sherwani aur festive wear ghar mangwa kar fit check karein. Sirf ₹49 rider convenience fee.",
    shopFeature: "Royal Menswear • Kalapipal Station Road"
  },
  {
    id: 3,
    image: "/products/product-3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1583391265517-35bef20f3452?auto=format&fit=crop&w=1400&q=75",
    tag: "Boutique Kurtis & Bridal Len-Den",
    title: "Shaadi Len-Den ki Shopping, Ab Drawing Room Mein",
    subtitle: "Indore ya Bhopal travel karne ki zaroorat nahi. Corridor ke trusted boutiques se direct trial box.",
    shopFeature: "Muskan Boutique, Shajapur & Shri Vastra, Sehore"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Browse Verified Local Shops",
    headingHindi: "Corridor ki Asli Dukaanein Dekhein",
    description: "Kalapipal, Shujalpur, Shajapur, Ashta aur Sehore ke mashhoor kapda bazaaron se curated sarees, kurtas aur suits chunein.",
    badge: "Verified Merchant Partners"
  },
  {
    number: "02",
    title: "Build Your 5-Piece Trial Bag",
    headingHindi: "5 Kapde Trial Bag Mein Dalein",
    description: "Kisi bhi dukaan se 5 garments tak select karein. Koi advance kapda payment nahi — sirf flat ₹49 rider convenience fee.",
    badge: "Flat ₹49 Doorstep Fee"
  },
  {
    number: "03",
    title: "90-Min Home Trial & Asli Daam",
    headingHindi: "Ghar Par Pehno, Asli Rate Par Lo",
    description: "Rider aapke ghar trial box layega. Aaram se pehan kar dekhein; jo pasand aaye uska dukaan ka bill pay karein, baaki usi waqt wapas.",
    badge: "Zero-Pressure Return"
  }
];

export const CATEGORIES = [
  { id: "Sab", name: "Sab Collections", count: 6, desc: "Poora corridor catalog" },
  { id: "Sarees", name: "Sarees & Dupattas", count: 2, desc: "Chanderi, Maheshwari & Cotton" },
  { id: "Ladies Suits & Kurtis", name: "Ladies Suits & Kurtis", count: 1, desc: "Partywear & Casual" },
  { id: "Men's Wear", name: "Men's Ethnic", count: 1, desc: "Kurtas, Jackets & Sets" },
  { id: "Shadi Len-Den", name: "Shadi Len-Den", count: 1, desc: "Bridal, Trousseau & Sets" },
  { id: "Kids", name: "Kids Ethnic", count: 1, desc: "Festive wear for boys & girls" }
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Chanderi Silk Handloom Saree",
    shop: "Ramesh Saree Emporium",
    town: "Shujalpur",
    distance: "2.1 km",
    price: 1250,
    mrp: 1450,
    category: "Sarees",
    image: "/products/product-1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1610030469983-98e550d615e1?auto=format&fit=crop&w=600&q=70",
    fabric: "Silk-Cotton Blend with Golden Zari Pallu",
    length: "5.5m + 0.8m Blouse Piece",
    badge: "Mandi Best-seller",
    trialAvailable: true
  },
  {
    id: 2,
    name: "Men's Festive Kurta Set",
    shop: "Royal Menswear",
    town: "Kalapipal",
    distance: "0.8 km",
    price: 899,
    mrp: 1100,
    category: "Men's Wear",
    image: "/products/product-2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1597983073493-8898140bc055?auto=format&fit=crop&w=600&q=70",
    fabric: "Slub Cotton with Mandarin Collar & Matching Pajama",
    length: "Size: 38, 40, 42 available",
    badge: "Town Favorite",
    trialAvailable: true
  },
  {
    id: 3,
    name: "Premium Designer Kurti",
    shop: "Muskan Boutique",
    town: "Shajapur",
    distance: "14 km",
    price: 650,
    mrp: 850,
    category: "Ladies Suits & Kurtis",
    image: "/products/product-3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1583391265517-35bef20f3452?auto=format&fit=crop&w=600&q=70",
    fabric: "Rayon with Fine Chikankari & Mirror Accent",
    length: "Calf Length, Regular Fit",
    badge: "Boutique Special",
    trialAvailable: true
  },
  {
    id: 4,
    name: "Bridal Lehenga (Trial Box Spec)",
    shop: "Shri Vastra",
    town: "Sehore",
    distance: "28 km",
    price: 4500,
    mrp: 5800,
    category: "Shadi Len-Den",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=70",
    fallbackImage: "/products/product-1.jpg",
    fabric: "Semi-Stitched Velvet Base with Heavy Zardozi Handwork",
    length: "Flared 3.5m Kalidar Lehenga",
    badge: "Shaadi Trial Only",
    trialAvailable: true
  },
  {
    id: 5,
    name: "Handblock Mulmul Cotton Dupatta",
    shop: "Malwa Handloom House",
    town: "Ashta",
    distance: "22 km",
    price: 420,
    mrp: 550,
    category: "Sarees",
    image: "/products/product-5.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=70",
    fabric: "100% Pure Mulmul Handprinted with Natural Dyes",
    length: "2.4m Standard Dupatta with Tassels",
    badge: "Handblock Craft",
    trialAvailable: true
  },
  {
    id: 6,
    name: "Kids Festive Kurta-Pajama",
    shop: "Chhotu Style Bazaar",
    town: "Dewas",
    distance: "35 km",
    price: 550,
    mrp: 720,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=70",
    fallbackImage: "/products/product-2.jpg",
    fabric: "Soft Jacquard Art Silk with Pure Cotton Inner Lining",
    length: "Ages 4-10 Years",
    badge: "Comfort Fit",
    trialAvailable: true
  }
];

export const STORES = [
  {
    id: "kalapipal-royal",
    name: "Royal Menswear",
    town: "Kalapipal",
    lat: 23.2333,
    lng: 76.7333,
    area: "Station Road, Main Bazaar",
    phone: "+91 93030 76644",
    speciality: "Men's Festive Kurtas, Suiting & Sherwanis",
    rating: "4.8",
    trialRiderHub: "Local Express (30–60 min)"
  },
  {
    id: "shujalpur-ramesh",
    name: "Ramesh Saree Emporium",
    town: "Shujalpur",
    lat: 23.4000,
    lng: 76.7167,
    area: "Old Grain Mandi, City Chowk",
    phone: "+91 93030 76644",
    speciality: "Chanderi, Maheshwari & Bridal Sarees",
    rating: "4.9",
    trialRiderHub: "Local Express (30–60 min)"
  },
  {
    id: "shajapur-muskan",
    name: "Muskan Boutique",
    town: "Shajapur",
    lat: 23.4333,
    lng: 76.2667,
    area: "Near Mahakal Mandir, Sadar Bazaar",
    phone: "+91 93030 76644",
    speciality: "Designer Kurtis, Partywear & Tailored Suits",
    rating: "4.7",
    trialRiderHub: "Corridor Pilot (60–90 min)"
  },
  {
    id: "ashta-malwa",
    name: "Malwa Handloom House",
    town: "Ashta",
    lat: 23.0167,
    lng: 76.7167,
    area: "Bhopal-Indore Highway, Near Bus Stand",
    phone: "+91 93030 76644",
    speciality: "Handblock Prints, Mulmul Dupattas & Khadi",
    rating: "4.8",
    trialRiderHub: "Corridor Pilot (60–90 min)"
  },
  {
    id: "sehore-vastra",
    name: "Shri Vastra",
    town: "Sehore",
    lat: 23.2000,
    lng: 77.0833,
    area: "Ganj Market, Sehore",
    phone: "+91 93030 76644",
    speciality: "Bridal Lehengas & Heavy Wedding Collections",
    rating: "4.9",
    trialRiderHub: "Corridor Pilot (60–90 min)"
  },
  {
    id: "dewas-chhotu",
    name: "Chhotu Style Bazaar",
    town: "Dewas",
    lat: 22.9667,
    lng: 76.0667,
    area: "Chamunda Mata Road, Dewas",
    phone: "+91 93030 76644",
    speciality: "Kids & Teens Ethnic Outfits",
    rating: "4.6",
    trialRiderHub: "Express Route (60–90 min)"
  },
  {
    id: "bhopal-silk",
    name: "Bhopal Silk & Zari Heritage",
    town: "Bhopal",
    lat: 23.2599,
    lng: 77.4126,
    area: "Old City Chowk, Bhopal",
    phone: "+91 93030 76644",
    speciality: "Authentic Zari Batua, Tussar & Brocade Silks",
    rating: "4.9",
    trialRiderHub: "Hub Partner"
  },
  {
    id: "indore-rajwada",
    name: "Rajwada Handloom Hub",
    town: "Indore",
    lat: 22.7196,
    lng: 75.8577,
    area: "Rajwada Cloth Market, Indore",
    phone: "+91 93030 76644",
    speciality: "Wholesale Rate Sarees & Suiting",
    rating: "4.8",
    trialRiderHub: "Hub Partner"
  }
];

export const CORRIDOR_TOWNS = [
  "Kalapipal",
  "Shujalpur",
  "Shajapur",
  "Ashta",
  "Sehore",
  "Dewas",
  "Bhopal",
  "Indore"
];

export const FAQS = [
  {
    question: "Doorstep Trial Box kaise kaam karta hai?",
    answer: "Aap catalogue se kisi bhi dukaandar ke 5 kapde tak select karke 'Trial Bag' mein add karte hain. Checkout par apna pata aur timing batayein. LocalLoom ka dedicated rider kapde aapke ghar deliver karega. 90 minute mein aaram se pehan kar dekhein, check karein, aur jo pasand aaye sirf usi ka dukaan ka bill pay karein. Baaki kapde rider usi waqt wapas le jata hai."
  },
  {
    question: "₹49 trial fee kis cheez ki hai?",
    answer: "₹49 ek flat convenience fee hai jo local delivery rider ke aane-jaane aur kapde handle karne ke kharche ko cover karti hai. Iske alawa koi extra platform charge ya hidden commission nahi hai."
  },
  {
    question: "Agar koi bhi kapda pasand na aaye toh kya hoga?",
    answer: "Koi dabav nahi hai. Agar aapko 5 mein se ek bhi kapda pasand nahi aaya, toh rider sabhi kapde bina kisi behes ke wapas le jayega. Aapko kapdon ka koi charge nahi dena padega, sirf ₹49 trial convenience fee lagti hai."
  },
  {
    question: "Kapdon ka daam bazaar se zyada toh nahi hota?",
    answer: "Nahi, bilkul nahi. LocalLoom par wahi rate milta hai jo dukaan ke cash-counter par chalta hai (Bazaar Rate Guarantee). Aapko dukaan ka hi original bill diya jata hai."
  },
  {
    question: "Trial ke liye kitna waqt milta hai?",
    answer: "Standard doorstep trial ke liye 90 minutes ka time milta hai. Rider ghar ke paas wait karta hai taaki aap aaram se mirror mein check kar sakein aur family ki rai le sakein."
  },
  {
    question: "Kya Ujjain ya doosre sheharon mein delivery hoti hai?",
    answer: "Filhal pilot phase sirf Indore–Bhopal corridor (Kalapipal, Shujalpur, Shajapur, Ashta, Sehore, Dewas, Bhopal, Indore) ke liye active hai. Ujjain abhi is route mein shamil nahi hai."
  },
  {
    question: "Humari dukaan LocalLoom par kaise jodein?",
    answer: "Agar aapki Indore-Bhopal corridor mein kapde ki dukaan hai, toh aap humare WhatsApp helpline (+91 93030 76644) par sampark kar sakte hain. Humari team 24 ghante mein aapki dukaan verify karke catalog live karegi."
  }
];

export const TRUST_POINTS = [
  {
    title: "Sirf ₹49 Home Trial Fee",
    subtitle: "No Advance Garment Payment",
    desc: "Aapke drawing room tak 5 kapde safely pahunchane ka flat delivery charge."
  },
  {
    title: "Up to 5 Clothes Per Box",
    subtitle: "Pehle Pehno, Phir Pasand Aaye Toh Lo",
    desc: "Colors aur sizes ghar par try karein. Zero peer pressure to buy."
  },
  {
    title: "Verified Corridor Shops",
    subtitle: "Asli Dukaan • Asli Bill Rate",
    desc: "Ramesh Saree, Royal Menswear aur corridor ke namkeen bazaar dukaan ke pakke bill."
  },
  {
    title: "Instant Doorstep Return",
    subtitle: "Zero Hassle Return Policy",
    desc: "Jo pasand na aaye, rider usi waqt wapas le lega. No courier return slip drama."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Shujalpur se 5 sareein ghar mangwayi. 2 pasand aayi, 3 wapas kardi rider ko. Itna aasan pehle kabhi nahi tha!",
    author: "Sunita Sharma",
    town: "Kalapipal",
    tag: "Chanderi Saree Trial",
    rating: 5
  },
  {
    id: 2,
    quote: "Royal Menswear Kalapipal se kurta-pajama mangwaya shadi ke liye. Size bilkul perfect nikla, dukaan ke rate par.",
    author: "Rahul Verma",
    town: "Shajapur",
    tag: "Men's Festive Kurta",
    rating: 5
  },
  {
    id: 3,
    quote: "Shaadi len-den ke liye 15 kapde dekhne the. Do baar mein ghar baithe trial ho gaya. Dukandaar ko call karke pack karwaya.",
    author: "Meena Patel",
    town: "Ashta",
    tag: "Shaadi Len-Den Set",
    rating: 5
  }
];
