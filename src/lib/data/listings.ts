/**
 * Active listings, typed catalog used by /listings, /listings/[slug],
 * and the Home featured strip. Six listings per design spec.
 *
 * `toneClass` is a Tailwind gradient (used until photography lands).
 * `photoCount` is the gallery placeholder count shown on the detail page.
 */

export type Segment =
  | "Select Service"
  | "Full Service"
  | "Resort"
  | "Lifestyle"
  | "Boutique"
  | "Extended Stay";

export type Status = "available" | "under-contract";

export type Listing = {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  region: "Texas" | "Southeast" | "Midwest" | "West" | "Northeast";
  segment: Segment;
  brand: string;
  status: Status;
  keys: number;
  yearBuilt: number;
  yearRenovated?: number;
  askingPrice: string;
  adr?: string;
  revpar?: string;
  occupancy?: string;
  callForOffersDate?: string;
  encumbrance: string;
  brokerSlugs: string[];
  /**
   * Whether this listing has a full editorial detail page at /listings/[slug].
   * Defaults to true. Lite listings (set to false) appear on the index grid
   * but rely on `omUrl` for the click target — no internal detail page is
   * generated and the entry is skipped from the sitemap.
   */
  hasDetail?: boolean;
  /** Optional. When unset, the card and detail hero render the toneClass
   *  gradient as a placeholder until photography lands. */
  photo?: string;
  /**
   * Optional gallery of full-size photo URLs. When present, the detail-page
   * gallery renders one tile per entry instead of repeating `photo` six times.
   * `photo` (the hero) should be the first entry of this array when both are set.
   */
  photos?: string[];
  photoCount: number;
  /**
   * Direct link to a hosted Offering Memorandum. When set, the "Request OM"
   * CTA on the listing detail and broker rail becomes "View OM" and opens
   * this URL in a new tab. Falls back to the contact-form mailto when unset.
   */
  omUrl?: string;
  summary: string;
  bullets: string[];
  toneClass: string;
};

// Four reusable gradient placeholders, match the Home page tones so the
// listings feel like the same family of photography until real images land.
const TONE = {
  navy: "from-[#0a1226] to-[#1a3a6b]",
  blue: "from-[#0066cc] to-[#1a56db]",
  midnight: "from-[#0e1a34] to-[#1a3a6b]",
  graphite: "from-[#1d1d1f] to-[#2c2c2e]",
} as const;

export const listings: Listing[] = [
  {
    slug: "walden-retreats-hill-country",
    name: "Walden Retreats Hill Country",
    address: "5101 Miller Creek Loop",
    city: "Johnson City",
    state: "TX",
    region: "Texas",
    segment: "Boutique",
    brand: "Independent",
    status: "available",
    keys: 15,
    yearBuilt: 2020,
    yearRenovated: 2022,
    askingPrice: "Upon Request",
    adr: "$612",
    revpar: "$465",
    occupancy: "76%",
    callForOffersDate: "March 14, 2026",
    encumbrance: "Unencumbered",
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    photo: "/listings/walden-retreats-hill-country.jpg",
    photoCount: 28,
    omUrl: "https://walden-retreats-om.vercel.app/",
    toneClass: TONE.navy,
    summary:
      "Walden Retreats is a 15-key luxury glamping resort on 96 acres in the Texas Hill Country, twenty-five minutes from downtown Fredericksburg and ninety minutes from Austin. The asset opened in 2020, expanded its food and beverage program in 2022, and trades at the highest ADR of any independent resort in its competitive set.\n\nThe offering is unencumbered with no debt, no franchise, and no management contract. A successor sponsor inherits a stabilized cash flow with embedded upside from cabin expansion (entitled for 24 additional units), wedding venue activation, and a wellness layer the current owner has not pursued.",
    bullets: [
      "Trophy land basis. 96 contiguous acres in Blanco County with creek frontage.",
      "Top-of-set ADR. $612 trailing-twelve, 38% premium to nearest comp.",
      "Expansion entitled. 24 additional cabin pads approved through 2027.",
      "Unencumbered. No debt, no franchise, no management contract.",
      "Repeat guest base. 41% repeat rate inside 18 months, driven by wedding bookings.",
    ],
  },
  {
    slug: "hampton-inn-shelbyville",
    name: "Hampton Inn Shelbyville",
    address: "59 E Rampart St",
    city: "Shelbyville",
    state: "IN",
    region: "Midwest",
    segment: "Select Service",
    brand: "Hampton by Hilton",
    status: "available",
    keys: 57,
    yearBuilt: 1999,
    yearRenovated: 2025,
    askingPrice: "$6,400,000",
    adr: "$136.16",
    revpar: "$94.84",
    occupancy: "69.7%",
    encumbrance: "Hilton franchise, 15-year license extension",
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    photoCount: 12,
    toneClass: TONE.midnight,
    summary:
      "A 57-key Hampton Inn in Shelbyville, Indiana, southeast of Indianapolis with direct access to Interstate 74. The asset combines stabilized in-place cash flow with a fresh 15-year Hilton license extension and a 2025 renovation already scheduled, removing the two underwriting questions buyers ask first.\n\nDemand draws from a diversified base. Manufacturing employers Knauf Insulation and Ryobi Die Casting anchor weekday compression. Indiana Grand Racing & Casino drives leisure on weekends. Indianapolis demand generators including the Indiana Convention Center, Lucas Oil Stadium, Eli Lilly, and Salesforce sit within commuting distance and overflow to the Shelbyville sub-market when the urban core sells out.\n\nGuidance is $6.4M, 3.47x trailing-twelve room revenue.",
    bullets: [
      "57 keys, upper-midscale, three stories, interior corridor.",
      "Fresh 15-year Hilton license extension. 2025 renovation scheduled.",
      "2024 projected: 69.7% occupancy, $136.16 ADR, $94.84 RevPAR.",
      "Pricing $6.4M, $112K per key, $196 per SF (32,516 SF on 1.99 acres).",
      "Diversified demand: Knauf, Ryobi, Indiana Grand Casino, Indianapolis spillover.",
      "Amenities: fitness, pool, event space, hot breakfast, meeting rooms, pet friendly, digital key.",
    ],
  },
  /* --------------------------------------------------------------------------
   * Extended hospitality bench, sourced from matthews.com listings as of
   * 2026-05-16. Each listing renders a full internal detail page with hero,
   * stats, narrative summary, real photo gallery, and broker rail when the
   * listing broker is on our team.
   * ------------------------------------------------------------------------ */
  {
    slug: "comfort-suites-daytona-beach",
    name: "Comfort Suites Daytona Beach",
    address: "2900 W International Speedway Blvd",
    city: "Daytona Beach",
    state: "FL",
    region: "Southeast",
    segment: "Select Service",
    brand: "Comfort Suites",
    status: "available",
    keys: 64,
    yearBuilt: 2020,
    askingPrice: "$8,250,000",
    occupancy: "73%",
    encumbrance: "See OM",
    brokerSlugs: ["francisco-nacorda", "mitchell-glasson", "mabelle-perez", "david-loving", "julio-leyva"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Comfort-Suites-Daytona-Beach-2900-International-Speedway-I-95-Daytona-Beach-FL-pic-1.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/04/Comfort-Suites-Daytona-Beach-2900-International-Speedway-I-95-Daytona-Beach-FL-pic-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Comfort-Suites-Daytona-Beach-2900-International-Speedway-I-95-Daytona-Beach-FL-pic-2.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Comfort-Suites-Daytona-Beach-2900-International-Speedway-I-95-Daytona-Beach-FL-pic-3.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.navy,
    summary:
      "Modern 64-key Comfort Suites completed in 2020, offering minimal capital expenditure requirements and operational upside. Located in the prime Speedway Corridor with strong leisure, event, and corporate demand. An adjacent hotel is available for optional portfolio expansion and operating efficiencies.",
    bullets: [
      "2020 construction. Minimal CapEx required for a modern asset.",
      "Efficient 64-key layout ideal for private or regional operators.",
      "Turnkey asset with performance improvement potential through active management.",
      "RevPAR gap versus competitive set indicates revenue growth opportunity.",
      "Prime Speedway Corridor location with strong leisure and event demand.",
      "Florida tax advantage. No state income tax for out-of-state buyers.",
    ],
  },
  {
    slug: "super-8-wyndham-kinder",
    name: "Super 8 by Wyndham",
    address: "12312 Highway 165",
    city: "Kinder",
    state: "LA",
    region: "Southeast",
    segment: "Select Service",
    brand: "Super 8",
    status: "available",
    keys: 56,
    yearBuilt: 1998,
    yearRenovated: 2025,
    askingPrice: "$2,350,000",
    encumbrance: "20-year Wyndham franchise license",
    brokerSlugs: ["youssef-alkalabani", "mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Super-8-By-Wyndham-12312-Highway-165-Kinder-LA-pic-3.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/04/Super-8-By-Wyndham-12312-Highway-165-Kinder-LA-pic-3.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Super-8-By-Wyndham-12312-Highway-165-Kinder-LA-pic-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Super-8-By-Wyndham-12312-Highway-165-Kinder-LA-pic-2.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Super-8-By-Wyndham-12312-Highway-165-Kinder-LA-pic-4-WM-scaled.jpg",
    ],
    photoCount: 4,
    toneClass: TONE.midnight,
    summary:
      "Fully renovated 56-room Super 8 strategically positioned one mile from Coushatta Casino Resort, the largest casino in Louisiana. The property offers a 9.61% cap rate with strong in-place cash flow, benefiting from casino-driven demand plus proximity to regional sporting events and Lake Charles Regional Airport.",
    bullets: [
      "Fully renovated 2025 with no outstanding property improvement plan items.",
      "Long-term 20-year Wyndham franchise license provides brand stability.",
      "Casino-driven demand from Coushatta Casino Resort supports consistent occupancy.",
      "Efficient 56-key interior corridor design ideal for owner-operators.",
      "Limited new supply in the submarket supports long-term occupancy stability.",
      "Proximity to Lake Charles Regional Airport and regional sporting venues.",
    ],
  },
  {
    slug: "microtel-wyndham-sidney",
    name: "Microtel Inn & Suites by Wyndham",
    address: "1500 S Central Ave",
    city: "Sidney",
    state: "MT",
    region: "West",
    segment: "Select Service",
    brand: "Microtel",
    status: "available",
    keys: 76,
    yearBuilt: 2012,
    askingPrice: "$1,750,000",
    encumbrance: "See OM",
    brokerSlugs: ["andrew-senatore"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Microtel-Inn-Suites-By-Wyndham-1500-S-Central-Ave-Sidney-MT-pic-1.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/04/Microtel-Inn-Suites-By-Wyndham-1500-S-Central-Ave-Sidney-MT-pic-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Microtel-Inn-Suites-By-Wyndham-1500-S-Central-Ave-Sidney-MT-pic-2.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Microtel-Inn-Suites-By-Wyndham-1500-S-Central-Ave-Sidney-MT-pic-3-scaled.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.blue,
    summary:
      "76-unit limited-service hotel built in 2012 on Sidney's primary commercial corridor. The property has demonstrated strong recent operating momentum with significant revenue growth and benefits from demand tied to Williston Basin oil and gas activity plus recurring regional business travel.",
    bullets: [
      "Newer 2012 hospitality asset with minimal anticipated near-term capital requirements.",
      "Strong recent operating momentum, significant revenue growth over the past two years.",
      "Limited-service model supports lower expense structure and durable cash flow.",
      "Prime location on Sidney's main commercial corridor with strong visibility.",
      "Demand supported by established oil and gas activity and regional business travel.",
      "Low acquisition basis with in-place cash flow and a clear path to value enhancement.",
    ],
  },
  {
    slug: "quality-inn-blytheville",
    name: "Quality Inn Blytheville",
    address: "1520 E Main St",
    city: "Blytheville",
    state: "AR",
    region: "Southeast",
    segment: "Select Service",
    brand: "Quality Inn",
    status: "available",
    keys: 105,
    yearBuilt: 1965,
    yearRenovated: 2025,
    askingPrice: "$2,150,000",
    encumbrance: "Quality Inn franchise",
    brokerSlugs: ["chris-beavers", "mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/04/001_WebPhoto-1.png",
    photos: ["https://cms.matthews.com/wp-content/uploads/2026/04/001_WebPhoto-1.png"],
    photoCount: 1,
    toneClass: TONE.graphite,
    summary:
      "105-key Quality Inn built in 1965 with renovations completed in 2025, located on Main Street with I-55 visibility in Blytheville, Arkansas. The property has generated consistent revenue exceeding $1.2 million annually and sits in a steel manufacturing and logistics hub. Attractive valuation metrics at 2.85x room revenue multiple with conversion optionality given its five-acre footprint.",
    bullets: [
      "Consistent $1.2M plus annual revenue with attractive price per key.",
      "2.85x all-in room revenue multiple inclusive of investment upgrades.",
      "Reinforced concrete construction provides durability and guest comfort.",
      "Main Street with I-55 visibility, five acres enabling brand conversion.",
      "Within a major steel manufacturing hub. Nucor, Big River, and eight others.",
      "Regional logistics and distribution center supporting industrial transport.",
    ],
  },
  {
    slug: "americas-best-value-inn-caldwell",
    name: "Americas Best Value Inn Caldwell",
    address: "1108 W Highway 21",
    city: "Caldwell",
    state: "TX",
    region: "Texas",
    segment: "Select Service",
    brand: "Americas Best Value Inn",
    status: "available",
    keys: 52,
    yearBuilt: 1980,
    yearRenovated: 2010,
    askingPrice: "$1,410,000",
    encumbrance: "See OM",
    brokerSlugs: ["alfonso-garcia", "mitchell-glasson", "ryan-kawai-sanchez"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Americas-Best-Value-Inn-Caldwell-1108-W-Highway-21-Caldwell-TX-pic-1-1.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/04/Americas-Best-Value-Inn-Caldwell-1108-W-Highway-21-Caldwell-TX-pic-1-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Americas-Best-Value-Inn-Caldwell-1108-W-Highway-21-Caldwell-TX-pic-2-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Americas-Best-Value-Inn-Caldwell-1108-W-Highway-21-Caldwell-TX-pic-3-1.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.navy,
    summary:
      "52-key budget hotel in Caldwell, TX, positioned between College Station and Austin along TX-21. Currently absentee-owned with strong owner-operator upside potential. The asset benefits from proximity to Texas A&M University and regional demand generators with limited competitive new supply.",
    bullets: [
      "Offered at approximately $27K per key, well below current development costs.",
      "20 miles from Texas A&M University, one of the largest universities in the US.",
      "Between College Station and Austin captures pass-through and business demand.",
      "Stable drivers include university systems, food processing, and research.",
      "No new hotel developments planned in Caldwell. Protected occupancy.",
      "Absentee ownership opens hands-on operator upside on efficiency and revenue.",
    ],
  },
  {
    slug: "hampton-by-hilton-akron",
    name: "Hampton by Hilton Akron",
    address: "80 Springside Dr",
    city: "Akron",
    state: "OH",
    region: "Midwest",
    segment: "Select Service",
    brand: "Hampton by Hilton",
    status: "available",
    keys: 63,
    yearBuilt: 1996,
    yearRenovated: 2025,
    askingPrice: "$6,500,000",
    occupancy: "62.7%",
    encumbrance: "Hampton by Hilton franchise",
    brokerSlugs: ["luke-whittaker", "mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/04/001_Webfolder-26-scaled.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/04/001_Webfolder-26-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/002_Webfolder-18-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/003_Webfolder-2-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/004_Webfolder-7-scaled.png",
    ],
    photoCount: 4,
    toneClass: TONE.midnight,
    summary:
      "63-key Hampton by Hilton in Akron, Ohio. Completed a full renovation in 2025, with updated guest rooms, bathrooms, lobby, and technology systems. Located off I-77 in Fairlawn, the hotel serves diverse demand from leisure, retail, healthcare, and university markets. Limited-service operations enable efficient management with strong cash return potential.",
    bullets: [
      "Recently completed full renovation, no outstanding PIP items.",
      "New case goods, soft goods, bedding, lighting, and technology throughout.",
      "Strategic Fairlawn location off I-77 with leisure, retail, healthcare access.",
      "Limited-service model supports lower opex and higher cash returns.",
      "Adjacent 1.0-acre parcel included with the property, expansion optionality.",
      "Minimal change-of-ownership capital improvements expected.",
    ],
  },
  {
    slug: "springhill-suites-pittsburgh-washington",
    name: "SpringHill Suites Pittsburgh Washington",
    address: "16 Trinity Point Dr",
    city: "Washington",
    state: "PA",
    region: "Northeast",
    segment: "Select Service",
    brand: "SpringHill Suites",
    status: "available",
    keys: 86,
    yearBuilt: 2000,
    askingPrice: "$5,500,000",
    occupancy: "52%",
    encumbrance: "See OM",
    brokerSlugs: ["mabelle-perez"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Springhill-Suites-Pittsburgh-Washington-16-Trinity-Point-Dr-Washington-PA-pic-1.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/04/Springhill-Suites-Pittsburgh-Washington-16-Trinity-Point-Dr-Washington-PA-pic-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Springhill-Suites-Pittsburgh-Washington-16-Trinity-Point-Dr-Washington-PA-pic-2.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/04/Springhill-Suites-Pittsburgh-Washington-16-Trinity-Point-Dr-Washington-PA-pic-3-scaled.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.blue,
    summary:
      "86-room SpringHill Suites built in 2000 in the Trinity Point commercial node near Washington, PA. Features recently completed guestroom and exterior improvements with significant upside potential from a RevPAR gap of $15.41 relative to competitors and proximity to major demand generators including Hollywood Casino and Tanger Outlets.",
    bullets: [
      "RevPAR gap of $15.41 vs comp set, approximately $480K in potential revenue upside.",
      "Approximately $180K to $300K NOI growth, over $3M value creation at 8.5% cap.",
      "Guestroom and exterior improvements completed with minimal disruption.",
      "Near Hollywood Casino (3M annual visitors) and Tanger Outlets (3.5M).",
      "Opportunity to expand fitness or breakfast areas, or repurpose pool space.",
      "Proposed 30,000 SF event center within 3 to 5 minutes supports demand.",
    ],
  },
  {
    slug: "la-quinta-wyndham-lumberton",
    name: "La Quinta Inn & Suites by Wyndham Lumberton",
    address: "104 North LHS Drive",
    city: "Lumberton",
    state: "TX",
    region: "Texas",
    segment: "Select Service",
    brand: "La Quinta by Wyndham",
    status: "available",
    keys: 0,
    yearBuilt: 2009,
    yearRenovated: 2025,
    askingPrice: "$5,180,000",
    encumbrance: "La Quinta franchise",
    brokerSlugs: ["alfonso-garcia", "mitchell-glasson", "ryan-kawai-sanchez"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/03/La-Quinta-Inn-Suites-By-Wyndham-Lumberton-104-North-LHS-Drive-Lumberton-TX-pic-2-scaled.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/03/La-Quinta-Inn-Suites-By-Wyndham-Lumberton-104-North-LHS-Drive-Lumberton-TX-pic-2-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/03/La-Quinta-Inn-Suites-By-Wyndham-Lumberton-104-North-LHS-Drive-Lumberton-TX-pic-1-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/03/La-Quinta-Inn-Suites-By-Wyndham-Lumberton-104-North-LHS-Drive-Lumberton-TX-pic-3-scaled.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.graphite,
    summary:
      "Recently renovated La Quinta property adjacent to Atrius Lumberton Hospital, positioned to capture steady demand from healthcare staff and patients. The hotel has demonstrated consistent performance with $1.45M average annual room revenue over four years, supported by regional energy, healthcare, and industrial tenants. Lumberton has no new hotels in development, providing protection from competitive pressure.",
    bullets: [
      "All guestrooms recently updated, minimal near-term capital expenditures.",
      "Adjacent to a major hospital. Reliable healthcare-worker and family demand.",
      "Proven revenue stability, $1.45M average annual room revenue over four years.",
      "Diverse tenant base across energy, healthcare, and industrial businesses.",
      "No new hotel construction planned in Lumberton. Protected from competition.",
    ],
  },
  {
    slug: "fox-river-resort-sheridan",
    name: "Fox River Resort at Sheridan",
    address: "2558 N 3653 Road",
    city: "Sheridan",
    state: "IL",
    region: "Midwest",
    segment: "Resort",
    brand: "Independent",
    status: "available",
    keys: 332,
    yearBuilt: 1995,
    askingPrice: "$2,000,000",
    encumbrance: "Vacant & Unencumbered",
    brokerSlugs: ["luke-whittaker", "mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Fox-River-Resort-At-Sheridan-2558-N.-3653-Road-Sheridan-IL-pic-5-scaled.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/03/Fox-River-Resort-At-Sheridan-2558-N.-3653-Road-Sheridan-IL-pic-5-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Fox-River-Resort-At-Sheridan-2558-N.-3653-Road-Sheridan-IL-pic-4-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Fox-River-Resort-At-Sheridan-2558-N.-3653-Road-Sheridan-IL-pic-3-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Fox-River-Resort-At-Sheridan-2558-N.-3653-Road-Sheridan-IL-pic-1-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Fox-River-Resort-At-Sheridan-2558-N.-3653-Road-Sheridan-IL-pic-2-scaled.jpg",
    ],
    photoCount: 5,
    toneClass: TONE.navy,
    summary:
      "332-unit extended-stay hospitality resort spanning 164.86 acres and 851,123 SF in Sheridan, Illinois. Features an indoor waterpark, par-3 golf course, fishing lake, and comprehensive recreational amenities. Offered vacant and unencumbered with an attractive mix of studios and two-bedroom units.",
    bullets: [
      "332 units with extended-stay layouts, fully equipped kitchens, studios + 2BR.",
      "Indoor waterpark, outdoor pool, par-3 nine-hole golf course, 7-acre fishing lake.",
      "Movie theater, arcade, sports courts, and BBQ areas.",
      "164.86 acres with 851,123 SF including sales preview and member services.",
      "Offered vacant and unencumbered. Established infrastructure for repositioning.",
    ],
  },
  {
    slug: "hotel-pad-site-morrisville",
    name: "Hotel Pad Site Morrisville",
    address: "902 Church Street",
    city: "Morrisville",
    state: "NC",
    region: "Southeast",
    segment: "Select Service",
    brand: "Pad Site",
    status: "available",
    keys: 138,
    yearBuilt: 0,
    askingPrice: "$4,000,000",
    encumbrance: "See OM",
    brokerSlugs: ["mabelle-perez"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/03/001-Web-Photo.png",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/03/001-Web-Photo.png",
      "https://cms.matthews.com/wp-content/uploads/2026/03/002-Web-Photo-.png",
      "https://cms.matthews.com/wp-content/uploads/2026/03/003-Map-1-scaled.jpeg",
    ],
    photoCount: 3,
    toneClass: TONE.midnight,
    summary:
      "Approved 138-key hotel pad site on 2 acres, featuring a 7-story development with ground-floor retail, rooftop restaurant, and structured parking. The fully approved site plans include 90 structured parking spaces adjacent to luxury condominiums. Located in Morrisville, NC with comprehensive development entitlements ready for construction.",
    bullets: [
      "Approved for 138-key, 7-story hotel development on 2 acres.",
      "Approximately 5,000 SF of ground-floor retail space.",
      "Approximately 8,500 SF rooftop restaurant with panoramic views.",
      "90 structured parking spaces. Adjacent luxury condominiums.",
      "Fully titled and approved site plans ready for development.",
    ],
  },
  {
    slug: "quality-inn-johnson-city",
    name: "Quality Inn Johnson City",
    address: "119 Pinnacle Dr",
    city: "Johnson City",
    state: "TN",
    region: "Southeast",
    segment: "Select Service",
    brand: "Quality Inn",
    status: "available",
    keys: 60,
    yearBuilt: 1997,
    yearRenovated: 2025,
    askingPrice: "$3,700,000",
    occupancy: "63.8%",
    encumbrance: "Quality Inn franchise",
    brokerSlugs: ["chris-beavers", "mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Quality-Inn-119-Pinnacle-Dr-Johnson-City-TN-pic-1.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/03/Quality-Inn-119-Pinnacle-Dr-Johnson-City-TN-pic-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Quality-Inn-119-Pinnacle-Dr-Johnson-City-TN-pic-2.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Quality-Inn-119-Pinnacle-Dr-Johnson-City-TN-pic-3-scaled.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.blue,
    summary:
      "60-key Quality Inn on Johnson City's primary commercial corridor with immediate Interstate 26 access. Built in 1997 with a planned 2025 renovation, the property shows revenue growth and qualifies for SBA 504 financing. Offered at 3.50x room revenue multiple with minimal change-of-ownership requirements.",
    bullets: [
      "Demonstrated YoY revenue growth, strengthening market positioning.",
      "Compelling 3.50x room revenue multiple with conservative entry metrics.",
      "Limited brand-imposed PIP. Post-inspection QA scores of 88.1%.",
      "Retail corridor with proximity to national retailers, dining, and healthcare.",
      "Johnson City growth, healthcare and education driving demand.",
      "SBA 504 loan eligible. Quality Inn brand affiliation.",
    ],
  },
  {
    slug: "days-inn-wyndham-del-rio",
    name: "Days Inn by Wyndham Del Rio",
    address: "2005 Veterans Blvd",
    city: "Del Rio",
    state: "TX",
    region: "Texas",
    segment: "Select Service",
    brand: "Days Inn",
    status: "available",
    keys: 101,
    yearBuilt: 1965,
    yearRenovated: 2024,
    askingPrice: "$4,200,000",
    encumbrance: "Days Inn franchise",
    brokerSlugs: ["alfonso-garcia", "mitchell-glasson", "ryan-kawai-sanchez"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Days-Inn-website-1.avif",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/03/Days-Inn-website-1.avif",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Days-Inn-website-2.avif",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Days-Inn-wesbite-3.avif",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Days-Inn-22.avif",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Days-Inn-25.webp",
      "https://cms.matthews.com/wp-content/uploads/2026/03/Days-Inn-27.webp",
    ],
    photoCount: 6,
    toneClass: TONE.graphite,
    summary:
      "Fully renovated 101-room Days Inn on Veterans Boulevard in Del Rio, with immediate access to Amistad Lake and Laughlin Air Force Base. The property averaged $1.2M in room revenue over three years and was extensively updated in 2024 with over $1M in capital improvements. Strategic positioning near the upcoming Amistad Dam remediation and growing cross-border trade creates strong demand drivers.",
    bullets: [
      "All 101 guest rooms fully renovated in 2024. $1M plus capital invested.",
      "Three-year average room revenue of $1.2M. Stable operating history.",
      "Amistad Dam remediation brings 300 plus skilled workers, extended-stay demand.",
      "Near Laughlin Air Force Base, retail corridors, and major highway access.",
      "Operational upside through revenue management and expense control.",
      "Growing US-Mexico cross-border trade sustains business and transit demand.",
    ],
  },
  {
    slug: "fairfield-inn-suites-monaca",
    name: "Fairfield Inn & Suites Monaca",
    address: "1438 Brodhead Road",
    city: "Monaca",
    state: "PA",
    region: "Northeast",
    segment: "Select Service",
    brand: "Fairfield by Marriott",
    status: "available",
    keys: 82,
    yearBuilt: 2014,
    yearRenovated: 2024,
    askingPrice: "$7,900,000",
    occupancy: "64%",
    encumbrance: "Fairfield by Marriott franchise",
    brokerSlugs: ["luke-whittaker", "mitchell-glasson", "ritik-patel"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Fairfield-Inn-Suites-1438-Brodhead-Road-Monaca-PA-pic-1.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/02/Fairfield-Inn-Suites-1438-Brodhead-Road-Monaca-PA-pic-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/02/Fairfield-Inn-Suites-1438-Brodhead-Road-Monaca-PA-pic-2-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/02/Fairfield-Inn-Suites-1438-Brodhead-Road-Monaca-PA-pic-3-scaled.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.navy,
    summary:
      "Turnkey Fairfield Inn & Suites in Monaca, PA with 82 rooms and a recent 2024 renovation. Positioned near the Shell Polymers manufacturing complex and I-376, capturing demand from corporate, industrial, and leisure travelers. Current absentee ownership presents operational upside opportunities for hands-on management.",
    bullets: [
      "Recently renovated. Turnkey acquisition with minimal capital needs.",
      "Strong Marriott brand recognition across corporate, industrial, leisure travel.",
      "Off I-376 near Shell Polymers complex and Pittsburgh International Airport.",
      "Nearby Hampton Inn losing brand flag. Opportunity to capture displaced demand.",
      "Modern amenities. Indoor pool, restaurant, meeting space, fitness center.",
      "Absentee ownership. Upside through active management and revenue optimization.",
    ],
  },
  {
    slug: "sinclair-gas-hotel-bluff",
    name: "Sinclair Gas Station + Hotel",
    address: "161 US-191",
    city: "Bluff",
    state: "UT",
    region: "West",
    segment: "Boutique",
    brand: "Sinclair",
    status: "available",
    keys: 26,
    yearBuilt: 1989,
    yearRenovated: 2024,
    askingPrice: "$2,400,000",
    encumbrance: "See OM",
    brokerSlugs: [],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Sinclair-Gas-Station-26-Room-Hotel-161-US-191-Bluff-UT-pic-1.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/02/Sinclair-Gas-Station-26-Room-Hotel-161-US-191-Bluff-UT-pic-1.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/02/Sinclair-Gas-Station-26-Room-Hotel-161-US-191-Bluff-UT-pic-2.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/02/Sinclair-Gas-Station-26-Room-Hotel-161-US-191-Bluff-UT-pic-3.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.midnight,
    summary:
      "26-room hotel and Sinclair gas station on US-191 offering dual income streams from fuel retail and lodging operations on 9.37 acres. Built in 1989 with recent 2024 renovations including new fiberglass tanks. The property combines highway frontage with potential for operational improvements and value-add opportunities.",
    bullets: [
      "New 15,000-gallon double-wall fiberglass tank installed in 2024.",
      "Diversified revenue from convenience retail and 26-room hotel operations.",
      "Potential 100% bonus depreciation available through fee simple ownership.",
      "Prime US-191 location serving regional, commercial, and tourist traffic.",
      "Value-add upside through merchandising, food service, and dynamic pricing.",
      "Owner-operator opportunity for inventory and supplier contract optimization.",
    ],
  },
  {
    slug: "econo-lodge-suburban-studios-daytona",
    name: "Econo Lodge & Suburban Studios",
    address: "2904 W International Speedway Blvd",
    city: "Daytona Beach",
    state: "FL",
    region: "Southeast",
    segment: "Select Service",
    brand: "Econo Lodge",
    status: "available",
    keys: 163,
    yearBuilt: 1972,
    askingPrice: "$8,000,000",
    occupancy: "56.31%",
    encumbrance: "See OM",
    brokerSlugs: ["francisco-nacorda", "mitchell-glasson", "mabelle-perez", "david-loving", "julio-leyva"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Econo-Lodge-Suburban-Studios-2904-W-International-Speedway-Blvd-Daytona-Beach-FL-pic-1-scaled.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/02/Econo-Lodge-Suburban-Studios-2904-W-International-Speedway-Blvd-Daytona-Beach-FL-pic-1-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/02/Econo-Lodge-Suburban-Studios-2904-W-International-Speedway-Blvd-Daytona-Beach-FL-pic-2-scaled.jpg",
    ],
    photoCount: 2,
    toneClass: TONE.blue,
    summary:
      "163-key Econo Lodge and Suburban Studios in Daytona Beach offers compelling valuation at approximately $49K per key with a 10.78% cap rate. The asset benefits from proximity to major transportation corridors and year-round tourism demand while maintaining an efficient operating model suited for economy and extended-stay formats.",
    bullets: [
      "Priced at $8M, significant discount to replacement cost and submarket comps.",
      "Economy and extended-stay formats support lean staffing and low opex.",
      "Near I-95, I-4, Daytona International Airport, and Daytona Speedway.",
      "Current occupancy at 56.31% with $760,634 NOI. Operational upside.",
      "Adjacent Comfort Suites available for portfolio expansion and synergies.",
    ],
  },
  {
    slug: "place-in-the-sun-palm-springs",
    name: "A Place in the Sun Garden Hotel",
    address: "754 E San Lorenzo",
    city: "Palm Springs",
    state: "CA",
    region: "West",
    segment: "Boutique",
    brand: "Independent",
    status: "available",
    keys: 17,
    yearBuilt: 1951,
    askingPrice: "$5,750,000",
    encumbrance: "See OM",
    brokerSlugs: ["ryan-kawai-sanchez", "mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/02/001-cover--scaled.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/02/001-cover--scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/02/002-second--scaled.jpeg",
    ],
    photoCount: 2,
    toneClass: TONE.graphite,
    summary:
      "Mid-century boutique hotel in Palm Springs featuring 17 rentable units across a spacious 1.05-acre garden setting, approximately 1.5 miles from Downtown Palm Springs. The property includes twelve apartment-style villas with full kitchens and three units currently offline, presenting immediate revenue upside. Strong 11.31% cap rate with $650,427 NOI.",
    bullets: [
      "1.05-acre lot with central garden oasis. Significantly larger than area peers.",
      "Twelve apartment-style villas with full kitchens enabling higher ADR.",
      "Three units offline for personal use. Turnkey path to immediate revenue growth.",
      "1.5 miles from Downtown Palm Springs and Agua Caliente Casino.",
      "11.31% cap rate with $650,427 net operating income.",
      "20 total units with 17 currently generating revenue.",
    ],
  },
  {
    slug: "red-roof-inn-somerset",
    name: "Red Roof Inn Somerset",
    address: "220 Waterworks Rd",
    city: "Somerset",
    state: "PA",
    region: "Northeast",
    segment: "Select Service",
    brand: "Red Roof Inn",
    status: "available",
    keys: 94,
    yearBuilt: 1990,
    yearRenovated: 2024,
    askingPrice: "$2,400,000",
    encumbrance: "Red Roof Inn franchise",
    brokerSlugs: ["ritik-patel", "mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/02/002_WebPhoto-10.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/02/002_WebPhoto-10.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/02/001_WebPhoto-11.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/02/003_WebPhoto-8.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.navy,
    summary:
      "94-unit Red Roof Inn positioned at an I-76 Pennsylvania Turnpike gate with daily exposure to 32,000 vehicles. Recently renovated in 2024 with 4.4-star Google reviews, the property benefits from diverse demand drivers including turnpike traffic, healthcare activity, and regional employers. Priced below stabilized comparables with strong cash-flow potential.",
    bullets: [
      "Prime I-76 Turnpike gate location, immediate access, 32K daily vehicles.",
      "Recently renovated in 2024 with 4.4-star guest satisfaction ratings.",
      "Diversified demand. Turnpike, UPMC healthcare, employers, Flight 93 Memorial.",
      "Recession-resistant economy lodging captures trade-down demand.",
      "Pro forma cap rate of 13.65% with upside as ADR and occupancy stabilize.",
      "Exterior-corridor layout suited for owner-operators seeking durable yields.",
    ],
  },
  {
    slug: "apple-mountain-resort-clarkesville",
    name: "Former Apple Mountain Resort (For Auction)",
    address: "200 Apple Seed Ct",
    city: "Clarkesville",
    state: "GA",
    region: "Southeast",
    segment: "Resort",
    brand: "Independent",
    status: "available",
    keys: 96,
    yearBuilt: 1999,
    askingPrice: "Upon Request",
    occupancy: "71.1%",
    encumbrance: "See OM",
    brokerSlugs: ["mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/01/001_WebPhoto-8-1-scaled.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/01/001_WebPhoto-8-1-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/01/003_WebPhoto-6-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/01/002_WebPhoto-7-scaled.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.midnight,
    summary:
      "96-unit hospitality property built in 1999 featuring 72 lodge suites and 24 presidential suites across eight buildings totaling 90,960 square feet. Located in Clarkesville, Georgia, the resort maintains approximately 71% average occupancy and offers all two-bedroom units equipped with king beds, kitchens, and modern amenities. The property is being offered for auction through Matthews Real Estate Investment Services.",
    bullets: [
      "96 units in eight buildings. 72 lodge suites at 826 SF, 24 president at 1,312 SF.",
      "Strong three-year occupancy average of 71.5% from 2022 through 2024.",
      "Projected annual rents of $1,350 for lodge and $1,450 for president suites.",
      "All two-bedroom units feature equipped kitchens, king beds, Wi-Fi, TVs.",
      "Central HVAC system with individual hot water heaters throughout.",
      "Copper wiring with PVC sewer mains and original roofs since establishment.",
    ],
  },
  {
    slug: "best-western-plus-fresno",
    name: "Best Western Plus Fresno Inn",
    address: "480 E Shaw Ave",
    city: "Fresno",
    state: "CA",
    region: "West",
    segment: "Select Service",
    brand: "Best Western Plus",
    status: "available",
    keys: 55,
    yearBuilt: 0,
    askingPrice: "$7,665,000",
    occupancy: "68.84%",
    encumbrance: "Best Western Plus franchise",
    brokerSlugs: ["ryan-kawai-sanchez", "mitchell-glasson"],
    photo: "https://cms.matthews.com/wp-content/uploads/2026/01/001_WebPhoto-7-1-scaled.jpg",
    photos: [
      "https://cms.matthews.com/wp-content/uploads/2026/01/001_WebPhoto-7-1-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/01/003_WebPhoto-1-1-scaled.jpg",
      "https://cms.matthews.com/wp-content/uploads/2026/01/002_WebPhoto-3-1-scaled.jpg",
    ],
    photoCount: 3,
    toneClass: TONE.blue,
    summary:
      "55-unit Best Western Plus in Fresno, CA listed at $7.665M with demonstrated outperformance versus the competitive set. Strategically positioned near State Route 99 with strong brand support and diversified demand from healthcare, agriculture, government, and logistics sectors. Capital improvements completed 2019 through 2025.",
    bullets: [
      "Best Western Plus brand provides strong reservation channels and customer appeal.",
      "Strategic freeway location near State Route 99 with excellent visibility.",
      "2025 STR data shows consistent occupancy and RevPAR outperformance.",
      "Fresno's diversification across healthcare, education, government, agriculture.",
      "Ongoing capital improvements completed over six-year period.",
    ],
  },
];


export const listingSlugs = listings.map((l) => l.slug);

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
