export type Certification = {
  abbr: string;
  name: string;
  detail: string;
};

export const certifications: Certification[] = [
  {
    abbr: "AGC",
    name: "Associated General Contractors",
    detail: "Member in good standing",
  },
  {
    abbr: "OSHA",
    name: "OSHA 30 Workforce",
    detail: "100% field certified",
  },
  {
    abbr: "LEED",
    name: "USGBC LEED",
    detail: "Accredited professionals on staff",
  },
  {
    abbr: "DBIA",
    name: "Design-Build Institute",
    detail: "Certified design-build delivery",
  },
  {
    abbr: "ISO 9001",
    name: "Quality Management",
    detail: "Certified quality system",
  },
  {
    abbr: "ENR 400",
    name: "ENR Top Contractors",
    detail: "Ranked top-400 nationally",
  },
];
