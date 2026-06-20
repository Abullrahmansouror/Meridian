export type Leader = {
  name: string;
  initials: string;
  role: string;
  tenure: string;
  bio: string;
};

export const leadership: Leader[] = [
  {
    name: "Raymond Okafor",
    initials: "RO",
    role: "Founder & Chief Executive",
    tenure: "Since 1998",
    bio: "Started Meridian with one crew and a flatbed. Still walks every active site at least once a month and reads every incident report personally.",
  },
  {
    name: "Lena Sorensen",
    initials: "LS",
    role: "President & COO",
    tenure: "Since 2006",
    bio: "Runs operations across all three regions. Built the pre-construction discipline that lets Meridian commit to a number and hold it.",
  },
  {
    name: "Daniel Marsh",
    initials: "DM",
    role: "EVP, Field Operations",
    tenure: "Since 2009",
    bio: "Came up through the trades to superintendent to the field's most senior seat. Owns the schedule and the people who build it.",
  },
  {
    name: "Aisha Karim",
    initials: "AK",
    role: "VP, Pre-Construction",
    tenure: "Since 2012",
    bio: "Leads estimating and design-assist. If the budget is going to move, she finds out in week three, not month nine.",
  },
  {
    name: "Victor Reyes",
    initials: "VR",
    role: "Director of Safety",
    tenure: "Since 2014",
    bio: "Architect of the safety program behind a 0.51 EMR. Holds the authority to stop any job, on any site, at any time.",
  },
  {
    name: "Grace Tomlin",
    initials: "GT",
    role: "VP, Civil & Infrastructure",
    tenure: "Since 2016",
    bio: "Heavy-civil and water specialist. Leads the work where tolerances are tight and inspection never stops.",
  },
];

export type Value = {
  index: string;
  title: string;
  body: string;
};

export const values: Value[] = [
  {
    index: "01",
    title: "Set the line, then build to it",
    body: "We commit to a number and a date in pre-construction, and we hold them. Surprises get surfaced early, not buried until they cost more.",
  },
  {
    index: "02",
    title: "Self-perform the critical path",
    body: "We put our own crews on the structural work that decides the schedule. The most important scope is never subcontracted out of our control.",
  },
  {
    index: "03",
    title: "Safety is non-negotiable",
    body: "Every person on every site has the authority to stop work. A 0.51 EMR is not a marketing number — it is how we run the job.",
  },
  {
    index: "04",
    title: "The relationship outlasts the project",
    body: "94% of our work is for clients who have built with us before. We hand over a clean record and stay accountable long after substantial completion.",
  },
];

export type Milestone = {
  year: string;
  title: string;
  detail: string;
};

export const milestones: Milestone[] = [
  {
    year: "1998",
    title: "One crew, one flatbed",
    detail: "Raymond Okafor founds Meridian as a self-perform concrete contractor in Denver.",
  },
  {
    year: "2004",
    title: "First ground-up tower",
    detail: "Meridian moves from subcontractor to general contractor on its first commercial high-rise.",
  },
  {
    year: "2009",
    title: "Civil & infrastructure division",
    detail: "The company takes on its first public water and transportation work.",
  },
  {
    year: "2014",
    title: "0.51 EMR",
    detail: "A rebuilt safety program drives the experience modifier to less than half the industry baseline.",
  },
  {
    year: "2018",
    title: "Three-region footprint",
    detail: "Regional offices open in Salt Lake City and Phoenix to serve the Mountain West.",
  },
  {
    year: "2025",
    title: "240+ projects delivered",
    detail: "Meridian crosses 4.2 million square feet built, with 94% repeat clients.",
  },
];
