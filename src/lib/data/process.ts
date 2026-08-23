import type { ProcessStep } from "@/lib/types";

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start with structured stakeholder interviews and a technical audit to define scope, success metrics, and a realistic architecture before any code is written.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Wireframes and interactive Figma prototypes let you validate flows early, so engineering time goes into building the right thing the first time.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Work ships in two-week sprints with a demo at the end of each one — you see progress continuously, not just at the finish line.",
  },
  {
    step: "04",
    title: "QA & Launch",
    description:
      "Automated test suites, cross-browser/device QA, and a staged rollout plan make launch day uneventful in the best possible way.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description:
      "Post-launch, an SLA-backed support retainer covers monitoring, patching, and iteration — your product keeps improving after handoff.",
  },
];
