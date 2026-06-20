export type Job = {
  title: string;
  team: string;
  location: string;
  type: string;
  level: string;
};

export const jobs: Job[] = [
  {
    title: "Senior Project Manager — Commercial",
    team: "Operations",
    location: "Denver, CO",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Superintendent — Civil & Infrastructure",
    team: "Field Operations",
    location: "Pueblo, CO",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Estimator II",
    team: "Pre-Construction",
    location: "Denver, CO",
    type: "Full-time",
    level: "Mid",
  },
  {
    title: "Project Engineer",
    team: "Operations",
    location: "Phoenix, AZ",
    type: "Full-time",
    level: "Entry",
  },
  {
    title: "Safety Manager",
    team: "Safety",
    location: "Salt Lake City, UT",
    type: "Full-time",
    level: "Mid",
  },
  {
    title: "Concrete Foreman — Self-Perform",
    team: "Field Operations",
    location: "Denver, CO",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "MEP Coordinator (BIM/VDC)",
    team: "Pre-Construction",
    location: "Denver, CO",
    type: "Full-time",
    level: "Mid",
  },
  {
    title: "Craft Apprentice — Carpentry",
    team: "Field Operations",
    location: "Multiple sites",
    type: "Apprenticeship",
    level: "Entry",
  },
];

export type Benefit = {
  title: string;
  body: string;
};

export const benefits: Benefit[] = [
  {
    title: "Employee ownership",
    body: "Meridian is partly owned by the people who build the work. After year one, you share in what we deliver.",
  },
  {
    title: "Full health & retirement",
    body: "Medical, dental, and vision from day 31, plus a 6% matched retirement plan with immediate vesting.",
  },
  {
    title: "Real career ladders",
    body: "Apprentice to foreman, engineer to project manager. Most of our leadership came up through Meridian.",
  },
  {
    title: "Paid training & certification",
    body: "OSHA, trade certs, and continuing education on the company. We pay you to get better at the work.",
  },
  {
    title: "Safety that means it",
    body: "Every person can stop any job. Our 0.51 EMR is the lowest in our market, and we intend to keep it.",
  },
  {
    title: "Time that's yours",
    body: "Four weeks of paid time off to start, plus the holidays, plus the understanding that life happens.",
  },
];
