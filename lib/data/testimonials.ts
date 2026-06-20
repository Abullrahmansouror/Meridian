export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Meridian gave us a number in pre-construction and held it through 31 months and a tower full of surprises. The opening date never moved. That is rarer than it should be.",
    author: "Dana Whitfield",
    role: "Managing Director",
    company: "Halcyon Real Estate Partners",
    project: "Cascade Exchange",
  },
  {
    quote:
      "They built a million square feet alongside our peak season and handed it over a month early. The schedule was never a mystery — we always knew exactly where we stood.",
    author: "Marcus Reyes",
    role: "VP of Operations",
    company: "Continental Freightways",
    project: "Front Range Logistics Hub",
  },
  {
    quote:
      "Doubling plant capacity without a single permit exceedance took a contractor who treats process water like we do. Every tie-in was rehearsed before it happened.",
    author: "Priya Nandakumar",
    role: "District Engineer",
    company: "Southern Front Range Water Authority",
    project: "Highline Water Reclamation Facility",
  },
  {
    quote:
      "We opened clinics floor by floor as they finished instead of waiting on the whole building. That phasing decision, made in pre-construction, paid for itself many times over.",
    author: "Dr. Alan Brecht",
    role: "Chief Facilities Officer",
    company: "Sonoran Health Network",
    project: "Summit Medical Pavilion",
  },
  {
    quote:
      "120,000 cars a day kept moving through an active heavy-civil site for almost three years. Meridian's traffic phasing was modeled to the hour, and it showed.",
    author: "Eleanor Cho",
    role: "Program Manager",
    company: "Colorado DOT",
    project: "Meridian Crossing Interchange",
  },
];
