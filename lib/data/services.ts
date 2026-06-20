export type Service = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  sectors: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "commercial",
    index: "01",
    name: "Commercial",
    tagline: "Office, retail, healthcare & hospitality",
    description:
      "Ground-up and tenant-improvement work for buildings that have to perform the day they open. We run the schedule around your opening date and protect it.",
    capabilities: [
      "High-rise & mid-rise office",
      "Healthcare & life sciences",
      "Hospitality & mixed-use",
      "Retail & tenant fit-out",
      "Structural concrete & steel",
      "Building envelope & curtain wall",
    ],
    sectors: ["Office", "Healthcare", "Hospitality", "Retail"],
    image: "1486406146926-c627a92ad1ab",
  },
  {
    slug: "civil",
    index: "02",
    name: "Civil & Infrastructure",
    tagline: "Water, transportation & site development",
    description:
      "Public and private infrastructure where tolerances are tight and inspection is constant. We build to the spec, document everything, and hand over a clean record.",
    capabilities: [
      "Water & wastewater treatment",
      "Roadway & interchange",
      "Mass excavation & earthwork",
      "Utilities & deep foundations",
      "Bridges & structures",
      "Stormwater & detention",
    ],
    sectors: ["Water", "Transportation", "Utilities", "Sitework"],
    image: "1429497419816-9ca5cfb4571a",
  },
  {
    slug: "industrial",
    index: "03",
    name: "Industrial & Energy",
    tagline: "Distribution, manufacturing & power",
    description:
      "Heavy, fast, and built around uptime. We deliver distribution, manufacturing, and energy facilities with the structural capacity and MEP backbone they run on.",
    capabilities: [
      "Distribution & logistics",
      "Advanced manufacturing",
      "Cold storage & food processing",
      "Power & substations",
      "Tilt-up & pre-engineered metal",
      "Process & heavy MEP",
    ],
    sectors: ["Logistics", "Manufacturing", "Energy", "Cold storage"],
    image: "1504307651254-35680f356dfd",
  },
  {
    slug: "preconstruction",
    index: "04",
    name: "Pre-Construction & Design-Build",
    tagline: "Estimating, planning & single-source delivery",
    description:
      "The work that decides whether a project succeeds before a shovel is in the ground. We price reality, surface risk early, and carry one accountable line from design to handover.",
    capabilities: [
      "Conceptual & hard-bid estimating",
      "Constructability review",
      "Design-build & design-assist",
      "Value engineering",
      "Scheduling & phasing",
      "Procurement & long-lead strategy",
    ],
    sectors: ["Design-build", "CM at-risk", "Estimating", "Planning"],
    image: "1503387762-592deb58ef4e",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
