export const company = {
  name: "Meridian Build Group",
  shortName: "Meridian",
  mark: "MERIDIAN",
  founded: 1998,
  tagline: "We build the structures that last.",
  positioning:
    "A commercial, civil, and industrial general contractor delivering complex projects on schedule, on budget, and to the line.",
  description:
    "Meridian Build Group is a general contractor and construction manager delivering commercial, civil, and industrial projects across the Mountain West. Since 1998 we have set the line and built to it.",
  license: "GC-LIC #0427-118",
  emr: "0.51",
  coordinates: "N 39°44′21″ · W 104°59′25″",
} as const;

export const yearsInBusiness = new Date().getFullYear() - company.founded;

export const contact = {
  phone: "+1 (303) 555-0142",
  phoneHref: "tel:+13035550142",
  email: "build@meridiangroup.co",
  emailHref: "mailto:build@meridiangroup.co",
  careersEmail: "people@meridiangroup.co",
  hours: "Mon–Fri · 7:00–18:00 MT",
} as const;

export type Office = {
  city: string;
  role: string;
  address: string[];
  coordinates: string;
};

export const offices: Office[] = [
  {
    city: "Denver",
    role: "Headquarters",
    address: ["1840 Blake Street, Suite 400", "Denver, CO 80202"],
    coordinates: "N 39°44′ · W 104°59′",
  },
  {
    city: "Salt Lake City",
    role: "Regional Office",
    address: ["215 South State Street, Suite 720", "Salt Lake City, UT 84111"],
    coordinates: "N 40°45′ · W 111°53′",
  },
  {
    city: "Phoenix",
    role: "Field Office",
    address: ["2390 East Camelback Road, Suite 210", "Phoenix, AZ 85016"],
    coordinates: "N 33°30′ · W 112°01′",
  },
];

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  detail: string;
};

export const headlineStats: Stat[] = [
  {
    value: yearsInBusiness,
    suffix: " yrs",
    label: "On the ground",
    detail: "Building continuously since 1998",
  },
  {
    value: 240,
    suffix: "+",
    label: "Projects delivered",
    detail: "Across commercial, civil & industrial",
  },
  {
    value: 4.2,
    suffix: "M",
    decimals: 1,
    label: "Sq ft completed",
    detail: "From tenant fit-outs to plants",
  },
  {
    value: 0.51,
    decimals: 2,
    label: "EMR safety rating",
    detail: "Well below the 1.0 industry baseline",
  },
];

export const socialProof = {
  repeatClients: 94,
  onTimeDelivery: 97,
  selfPerform: 35,
} as const;
