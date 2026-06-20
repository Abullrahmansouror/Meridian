export type ProjectSector =
  | "Commercial"
  | "Civil"
  | "Industrial"
  | "Residential";

export type Project = {
  slug: string;
  name: string;
  sector: ProjectSector;
  service: string;
  location: string;
  year: number;
  value: string;
  area: string;
  duration: string;
  delivery: string;
  client: string;
  coordinates: string;
  summary: string;
  image: string;
  featured?: boolean;
  overview: string[];
  scope: string[];
  outcomes: { value: string; label: string }[];
  gallery: string[];
};

export const sectors: ProjectSector[] = [
  "Commercial",
  "Civil",
  "Industrial",
  "Residential",
];

export const projects: Project[] = [
  {
    slug: "cascade-exchange",
    name: "Cascade Exchange",
    sector: "Commercial",
    service: "Commercial",
    location: "Denver, CO",
    year: 2024,
    value: "$184M",
    area: "612,000 sq ft",
    duration: "31 months",
    delivery: "CM at-risk",
    client: "Halcyon Real Estate Partners",
    coordinates: "N 39°45′ · W 104°59′",
    summary: "A 28-story mixed-use tower anchoring Denver's Union Station district.",
    image: "1486406146926-c627a92ad1ab",
    featured: true,
    overview: [
      "Cascade Exchange replaced a half-block surface lot with a 28-story tower of Class-A office, ground-floor retail, and 140 residences — built over an active transit easement that could not be interrupted.",
      "We sequenced a top-down foundation against a four-level below-grade structure, then turned the tower at a floor every six days. The opening date held to the week it was set in pre-construction.",
    ],
    scope: [
      "Top-down deep foundation over transit easement",
      "Post-tensioned concrete superstructure",
      "Unitized curtain-wall envelope",
      "Core-and-shell plus office and residential fit-out",
      "Two-level retail concourse",
    ],
    outcomes: [
      { value: "612K", label: "Square feet delivered" },
      { value: "6 days", label: "Per typical floor cycle" },
      { value: "On time", label: "Held the opening date" },
    ],
    gallery: ["1449157291145-7efd050a4d0e", "1487958449943-2429e8be8625", "1565793298595-6a879b1d9492"],
  },
  {
    slug: "front-range-logistics-hub",
    name: "Front Range Logistics Hub",
    sector: "Industrial",
    service: "Industrial & Energy",
    location: "Aurora, CO",
    year: 2023,
    value: "$96M",
    area: "1,050,000 sq ft",
    duration: "14 months",
    delivery: "Design-build",
    client: "Continental Freightways",
    coordinates: "N 39°43′ · W 104°49′",
    summary: "A million-square-foot cross-dock distribution center delivered in 14 months.",
    image: "1504307651254-35680f356dfd",
    featured: true,
    overview: [
      "A regional distribution operator needed a million square feet of cross-dock capacity online before peak season. We took the project design-build to compress the schedule and self-performed the tilt-up to control it.",
      "Eighty-foot tilt panels went up in a 19-day cycle while the slab cured behind them. The building was weather-tight a full month ahead of the contract date.",
    ],
    scope: [
      "Mass grading across 62 acres",
      "Self-performed concrete tilt-up, 312 panels",
      "Super-flat slab for automated racking",
      "Cross-dock with 180 dock positions",
      "Heavy electrical service and yard utilities",
    ],
    outcomes: [
      { value: "1.05M", label: "Square feet" },
      { value: "30 days", label: "Ahead of schedule" },
      { value: "312", label: "Tilt panels self-performed" },
    ],
    gallery: ["1531834685032-c34bf0d84c77", "1485083269755-a7b559a4fe5e", "1541888946425-d81bb19240f5"],
  },
  {
    slug: "highline-water-facility",
    name: "Highline Water Reclamation Facility",
    sector: "Civil",
    service: "Civil & Infrastructure",
    location: "Pueblo, CO",
    year: 2024,
    value: "$142M",
    area: "24 MGD capacity",
    duration: "38 months",
    delivery: "CM at-risk",
    client: "Southern Front Range Water Authority",
    coordinates: "N 38°15′ · W 104°36′",
    summary: "A 24-million-gallon-per-day reclamation plant kept fully operational during construction.",
    image: "1429497419816-9ca5cfb4571a",
    featured: true,
    overview: [
      "The authority needed to nearly double treatment capacity without ever taking the existing plant offline. We built the new trains alongside live process, then cut over basin by basin on scheduled windows.",
      "Every tie-in was rehearsed, permitted, and inspected before it happened. The plant never dropped below permit through 38 months of construction.",
    ],
    scope: [
      "Cast-in-place process structures and basins",
      "Phased tie-ins to live treatment trains",
      "Deep utility and yard piping",
      "Blower and headworks buildings",
      "SCADA and process integration",
    ],
    outcomes: [
      { value: "24 MGD", label: "New capacity" },
      { value: "Zero", label: "Permit exceedances" },
      { value: "100%", label: "Uptime maintained" },
    ],
    gallery: ["1473445730015-841f29a9490b", "1581092160562-40aa08e78837", "1503387837-b154d5074bd2"],
  },
  {
    slug: "summit-medical-pavilion",
    name: "Summit Medical Pavilion",
    sector: "Commercial",
    service: "Commercial",
    location: "Phoenix, AZ",
    year: 2023,
    value: "$78M",
    area: "210,000 sq ft",
    duration: "22 months",
    delivery: "Design-assist",
    client: "Sonoran Health Network",
    coordinates: "N 33°30′ · W 112°02′",
    summary: "An outpatient surgery and imaging pavilion built to OSHPD-grade standards.",
    image: "1487958449943-2429e8be8625",
    overview: [
      "A six-story outpatient pavilion with surgical suites, imaging, and clinic floors — every system held to healthcare inspection standards and infection-control protocol.",
      "We ran ICRA barriers from day one and commissioned each floor as a complete, inspected unit so the network could open clinics as they finished rather than waiting on the whole building.",
    ],
    scope: [
      "Structural steel with vibration-isolated imaging slabs",
      "Surgical suites and sterile processing",
      "Medical gas and emergency power",
      "Infection-control risk assessment throughout",
      "Floor-by-floor commissioning and handover",
    ],
    outcomes: [
      { value: "210K", label: "Square feet" },
      { value: "6", label: "Floors phased open" },
      { value: "Full", label: "OSHPD-grade compliance" },
    ],
    gallery: ["1565793298595-6a879b1d9492", "1541976590-713941681591", "1486406146926-c627a92ad1ab"],
  },
  {
    slug: "kestrel-ridge-residences",
    name: "Kestrel Ridge Residences",
    sector: "Residential",
    service: "Commercial",
    location: "Boulder, CO",
    year: 2022,
    value: "$64M",
    area: "286 units",
    duration: "26 months",
    delivery: "CM at-risk",
    client: "Arête Living",
    coordinates: "N 40°00′ · W 105°16′",
    summary: "A 286-unit terraced multifamily community stepped into a hillside grade.",
    image: "1508450859948-4e04fabaa4ea",
    overview: [
      "A terraced apartment community that steps 70 feet down a constrained hillside site, with structured parking tucked beneath the podium and amenity decks on the roof.",
      "Tight access and steep grade drove a just-in-time delivery plan — material hit the site the morning it was placed, with no laydown room to spare.",
    ],
    scope: [
      "Shored hillside excavation and retention",
      "Two-level post-tensioned parking podium",
      "Five-story wood-frame residential over podium",
      "Amenity decks and rooftop structures",
      "Full site and landscape build-out",
    ],
    outcomes: [
      { value: "286", label: "Units delivered" },
      { value: "70 ft", label: "Of grade managed" },
      { value: "0", label: "Lost-time incidents" },
    ],
    gallery: ["1564013799919-ab600027ffc6", "1600585154340-be6161a56a0c", "1512917774080-9991f1c4c750"],
  },
  {
    slug: "ironwood-distribution-center",
    name: "Ironwood Distribution Center",
    sector: "Industrial",
    service: "Industrial & Energy",
    location: "Phoenix, AZ",
    year: 2022,
    value: "$58M",
    area: "740,000 sq ft",
    duration: "12 months",
    delivery: "Design-build",
    client: "Saguaro Industrial Trust",
    coordinates: "N 33°27′ · W 112°04′",
    summary: "A speculative big-box logistics building turned and leased within the year.",
    image: "1531834685032-c34bf0d84c77",
    overview: [
      "A speculative big-box building delivered to a leasing deadline, with a shell flexible enough to suit a tenant that had not yet signed when we broke ground.",
      "We pre-engineered the dock and electrical capacity for the most demanding likely tenant, so the eventual fit-out was a matter of weeks rather than months.",
    ],
    scope: [
      "Concrete tilt-up shell, 36-foot clear",
      "Super-flat slab and ESFR fire protection",
      "Speculative office and dock packages",
      "Oversized electrical and yard capacity",
      "Tenant-improvement fit-out",
    ],
    outcomes: [
      { value: "740K", label: "Square feet" },
      { value: "12 mo", label: "Ground to lease" },
      { value: "36 ft", label: "Clear height" },
    ],
    gallery: ["1485083269755-a7b559a4fe5e", "1504307651254-35680f356dfd", "1541888946425-d81bb19240f5"],
  },
  {
    slug: "confluence-civic-center",
    name: "Confluence Civic Center",
    sector: "Commercial",
    service: "Commercial",
    location: "Salt Lake City, UT",
    year: 2023,
    value: "$121M",
    area: "340,000 sq ft",
    duration: "29 months",
    delivery: "Design-build",
    client: "City of Salt Lake",
    coordinates: "N 40°45′ · W 111°53′",
    summary: "A civic assembly and events center with a long-span clear-span hall.",
    image: "1494522855154-9297ac14b55f",
    overview: [
      "A public assembly building with a column-free hall, a public commons, and back-of-house that has to turn over between events in hours, not days.",
      "The long-span roof was assembled at grade and lifted in a single coordinated pick — a planned closure that came and went in one Sunday.",
    ],
    scope: [
      "Long-span steel roof, ground-assembled and lifted",
      "Column-free assembly hall",
      "Public commons and civic plaza",
      "Acoustic and AV integration",
      "Phased site and streetscape work",
    ],
    outcomes: [
      { value: "340K", label: "Square feet" },
      { value: "1 lift", label: "For the long-span roof" },
      { value: "LEED", label: "Gold certified" },
    ],
    gallery: ["1449157291145-7efd050a4d0e", "1460472178825-e5240623afd5", "1565793298595-6a879b1d9492"],
  },
  {
    slug: "foundry-lofts",
    name: "The Foundry Lofts",
    sector: "Residential",
    service: "Commercial",
    location: "Denver, CO",
    year: 2024,
    value: "$47M",
    area: "168 units",
    duration: "24 months",
    delivery: "CM at-risk",
    client: "Ironline Development",
    coordinates: "N 39°46′ · W 105°00′",
    summary: "An adaptive reuse turning a 1920s foundry into 168 timber-and-brick lofts.",
    image: "1590725140246-20acdee442be",
    overview: [
      "A century-old foundry on the National Register, reborn as residential lofts with the original heavy-timber structure and masonry left exposed and load-bearing.",
      "We documented and shored the existing frame, surgically reinforced it to current code, and threaded new systems through a building that was never drawn for them.",
    ],
    scope: [
      "Historic structural assessment and shoring",
      "Heavy-timber and masonry restoration",
      "Seismic and gravity reinforcement",
      "New MEP woven through existing structure",
      "168 residential units and amenities",
    ],
    outcomes: [
      { value: "168", label: "Loft units" },
      { value: "1923", label: "Structure preserved" },
      { value: "Register", label: "Historic tax credits secured" },
    ],
    gallery: ["1503387762-592deb58ef4e", "1512917774080-9991f1c4c750", "1564013799919-ab600027ffc6"],
  },
  {
    slug: "meridian-crossing-interchange",
    name: "Meridian Crossing Interchange",
    sector: "Civil",
    service: "Civil & Infrastructure",
    location: "Colorado Springs, CO",
    year: 2021,
    value: "$88M",
    area: "3.2 mi corridor",
    duration: "33 months",
    delivery: "CM/GC",
    client: "Colorado DOT",
    coordinates: "N 38°50′ · W 104°49′",
    summary: "A diverging-diamond interchange rebuilt under live interstate traffic.",
    image: "1473445730015-841f29a9490b",
    overview: [
      "A failing interchange rebuilt as a diverging-diamond configuration across a 3.2-mile corridor — all of it under live interstate and arterial traffic that never closed for more than a night.",
      "We staged the work in 14 traffic phases, each one modeled and signed before it opened, so 120,000 vehicles a day kept moving through an active heavy-civil site.",
    ],
    scope: [
      "Two replacement bridge structures",
      "Diverging-diamond geometry and signals",
      "3.2 miles of reconstructed mainline",
      "Retaining walls and drainage",
      "14-phase traffic management",
    ],
    outcomes: [
      { value: "3.2 mi", label: "Corridor rebuilt" },
      { value: "120K", label: "Vehicles/day maintained" },
      { value: "2", label: "Bridges replaced" },
    ],
    gallery: ["1581092160562-40aa08e78837", "1429497419816-9ca5cfb4571a", "1503387837-b154d5074bd2"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
