export const company = {
  name: "Bhatia Auto Engineers",
  brand: "KOMET Auto Parts",
  tagline: "An ISO 9001:2015 Certified Company",
  blurb:
    "Manufacturers of chassis components for auto parts, tractor parts, motor parts and agricultural implements. Based in Ludhiana, Punjab, supplying customers in India and overseas for over two decades.",
  address:
    "Plot No. 536/6/1, Opp Big-Ben Industries, Single Cycle Road, Dhandari Kalan, Industrial Area C, Ludhiana - 141003, Punjab, India",
  email: "kometindia@yahoo.com",
  phones: [
    { label: "Mr. Jagjit Singh (Partner)", number: "+91-98155-36216", tel: "+919815536216" },
    { label: "Mr. Tajinder Singh (Partner)", number: "+91-92165-36217", tel: "+919216536217" },
    { label: "Office", number: "+91-92165-36216", tel: "+919216536216" },
    { label: "Landline", number: "+91-161-5036216", tel: "+911615036216" },
  ],
  whatsapp: "919815536216",
  mapsQuery:
    "Bhatia+Auto+Engineers,+Single+Cycle+Road,+Dhandari+Kalan,+Industrial+Area+C,+Ludhiana+141003",
};

export type Product = { name: string; image: string; category: Category };

export const categories = [
  "Springs & Bolts",
  "Bushes",
  "Chassis & Body",
  "Hubs & Axles",
  "Tools & Accessories",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  { name: "Spring Pin Jeep", image: "/products/1.png", category: "Springs & Bolts" },
  { name: "Spring Pin Utility", image: "/products/2.png", category: "Springs & Bolts" },
  { name: "Spring Pin", image: "/products/3.png", category: "Springs & Bolts" },
  { name: "HCV U-Bolt", image: "/products/4.png", category: "Springs & Bolts" },
  { name: "LCV Heavy Duty U-Bolt", image: "/products/5.png", category: "Springs & Bolts" },
  { name: "LCV U-Bolts", image: "/products/6.png", category: "Springs & Bolts" },
  { name: "Spring Bush & Shackle Bush LCV", image: "/products/7.png", category: "Bushes" },
  { name: "Spring Bush & Bell Crank Bush HCV", image: "/products/8.png", category: "Bushes" },
  { name: "HCV Center Bolt", image: "/products/9.png", category: "Springs & Bolts" },
  { name: "Center Bolt", image: "/products/10.png", category: "Springs & Bolts" },
  { name: "Check Nut Jeep", image: "/products/11.png", category: "Springs & Bolts" },
  { name: "Check Nut Max (RT, LT, FT)", image: "/products/12.png", category: "Springs & Bolts" },
  { name: "Silent Block Bush", image: "/products/13.png", category: "Bushes" },
  { name: "Chassis Hanger", image: "/products/14.png", category: "Chassis & Body" },
  { name: "Chassis Hanger (Type 2)", image: "/products/15.png", category: "Chassis & Body" },
  { name: "Big & Small Collar Front Spindle", image: "/products/16.png", category: "Hubs & Axles" },
  { name: "Shackle Bolt", image: "/products/17.png", category: "Springs & Bolts" },
  { name: "Shackle Bolt (Type 2)", image: "/products/18.png", category: "Springs & Bolts" },
  { name: "Shackle Plate", image: "/products/19.png", category: "Chassis & Body" },
  { name: "Solid Type Shackle Plate", image: "/products/20.png", category: "Chassis & Body" },
  { name: "Shocker Plate", image: "/products/21.png", category: "Chassis & Body" },
  {
    name: "Mahindra & Tata LCV Front Brake Disc",
    image: "/products/22.png",
    category: "Hubs & Axles",
  },
  { name: "U J Cross", image: "/products/23.png", category: "Hubs & Axles" },
  { name: "L Type Spanner", image: "/products/24.png", category: "Tools & Accessories" },
  { name: "HCV Spanner", image: "/products/25.png", category: "Tools & Accessories" },
  {
    name: "Lever Type Grease Gun (200 / 300 / 500)",
    image: "/products/26.png",
    category: "Tools & Accessories",
  },
  { name: "Cone Type Front Spacer", image: "/products/27.png", category: "Hubs & Axles" },
  { name: "Ring Type Rear Spacer", image: "/products/28.png", category: "Hubs & Axles" },
  { name: "Half Yoke", image: "/products/29.png", category: "Hubs & Axles" },
  { name: "Half Yoke (Type 2)", image: "/products/30.png", category: "Hubs & Axles" },
  { name: "Big & Small Collar Front Spindle", image: "/products/31.png", category: "Hubs & Axles" },
  { name: "Front Hub", image: "/products/32.png", category: "Hubs & Axles" },
  { name: "Rear Axle", image: "/products/33.png", category: "Hubs & Axles" },
  {
    name: "Hydraulic Bottle Jack (50 / 75 / 100 Ton)",
    image: "/products/34.png",
    category: "Tools & Accessories",
  },
  { name: "Kamani Clamps", image: "/products/35.png", category: "Chassis & Body" },
  { name: "Rivets", image: "/products/36.png", category: "Springs & Bolts" },
  { name: "Hub Bolts", image: "/products/37.png", category: "Hubs & Axles" },
  { name: "Hub Bolts (Type 2)", image: "/products/38.png", category: "Hubs & Axles" },
];

export const values = [
  {
    title: "Our Team",
    body: "We are endeavouring with pride only because of the work done by our employees. It is the way our personnel handle each task that makes us a business worthy of praise in the eyes of our customers.",
  },
  {
    title: "Product Quality",
    body: "Besides telling our customers about our quality, we let the testimony of other customers speak for the products they bought from us. We make sure clients are impressed when the goods arrive.",
  },
  {
    title: "Customer Satisfaction",
    body: "Satisfaction of customers is the single factor that leads a company to win in its markets. If a firm keeps its customers satisfied, there is barely any factor that might result in a loss.",
  },
];

export const whyUs = [
  "Total customer satisfaction as our first commitment",
  "Professional service at every stage of the order",
  "Punctual, reliable delivery in India and overseas",
  "A wide product range across chassis and spring components",
  "Capacity to meet bulk and repeat demand",
  "ISO 9001:2015 certified quality processes",
];

/** `count` animates on scroll; `text` renders as-is. Use one or the other. */
export type Stat = { label: string } & (
  | { count: number; suffix: string; text?: never }
  | { text: string; count?: never; suffix?: never }
);

export const stats: Stat[] = [
  { count: 20, suffix: "+", label: "Years in manufacturing" },
  { count: products.length, suffix: "", label: "Components in the range" },
  { text: "ISO", label: "9001:2015 certified" },
  { text: "Export", label: "India and overseas" },
];
