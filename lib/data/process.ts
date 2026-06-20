export type Phase = {
  index: string;
  name: string;
  duration: string;
  summary: string;
  deliverables: string[];
};

export const phases: Phase[] = [
  {
    index: "01",
    name: "Pre-Construction",
    duration: "Weeks 1–8",
    summary:
      "We price the project against reality, not optimism. Estimating, constructability, and risk review happen before commitments are made — so the budget you approve is the budget we build to.",
    deliverables: [
      "Conceptual & detailed estimates",
      "Constructability review",
      "Risk register & contingency plan",
      "Site logistics study",
    ],
  },
  {
    index: "02",
    name: "Design & Estimating",
    duration: "Weeks 6–20",
    summary:
      "Working alongside the design team, we value-engineer the right scope in and the wrong cost out, locking the budget as drawings progress instead of discovering surprises at bid.",
    deliverables: [
      "Design-assist coordination",
      "Value-engineering log",
      "GMP development",
      "Long-lead procurement plan",
    ],
  },
  {
    index: "03",
    name: "Permitting & Procurement",
    duration: "Weeks 16–28",
    summary:
      "Permits, subcontracts, and long-lead orders move in parallel so nothing waits on paper. We buy out the project to the estimate and hold the schedule before mobilization.",
    deliverables: [
      "Permit strategy & submittals",
      "Trade buy-out to budget",
      "Long-lead releases",
      "Baseline CPM schedule",
    ],
  },
  {
    index: "04",
    name: "Construction",
    duration: "Core delivery",
    summary:
      "Field execution with a superintendent who owns the line. Daily coordination, weekly look-ahead, and transparent cost reporting keep the project on schedule and on budget in plain sight.",
    deliverables: [
      "Self-performed structural scopes",
      "Weekly schedule & cost reporting",
      "Quality & safety program",
      "Owner dashboards",
    ],
  },
  {
    index: "05",
    name: "Commissioning",
    duration: "Final 8–12 weeks",
    summary:
      "Every system is tested, balanced, and proven before handover. We commission against design intent and document it, so the building performs the day you take the keys.",
    deliverables: [
      "Systems testing & balancing",
      "Functional performance tests",
      "Punch list to zero",
      "As-built documentation",
    ],
  },
  {
    index: "06",
    name: "Handover & Warranty",
    duration: "Year one and beyond",
    summary:
      "We hand over a clean, complete record and stay accountable. An 11-month walk catches anything before warranty closes, because the relationship is the point, not the substantial-completion date.",
    deliverables: [
      "O&M manuals & training",
      "Digital project record",
      "11-month warranty walk",
      "Responsive warranty service",
    ],
  },
];
