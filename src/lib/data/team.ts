import type { TeamMember } from "@/lib/types";

/**
 * Placeholder portraits. These are stock photos of unrelated people and must be swapped
 * for real headshots before the site goes public.
 */
function portrait(id: string) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=700&auto=format&fit=crop`;
}

export const team: TeamMember[] = [
  {
    name: "Marcus Chen",
    role: "Co-Founder & CEO",
    initials: "MC",
    bio: "Marcus co-founded Desynt after a decade of watching good products stall in bad delivery processes. He still sits in on every scoping call, and would rather cut a feature than ship a deadline nobody believes in.",
    linkedin: "https://linkedin.com",
    photo: portrait("1500648767791-00dcc994a43e"),
  },
  {
    name: "Aisha Kapoor",
    role: "Co-Founder & CTO",
    initials: "AK",
    bio: "Aisha owns the technical direction across every engagement. She has spent fifteen years untangling legacy systems, and has strong, well-earned opinions about what belongs in a database.",
    linkedin: "https://linkedin.com",
    photo: portrait("1494790108377-be9c29b29330"),
  },
  {
    name: "Liam O'Brien",
    role: "Head of Engineering",
    initials: "LO",
    bio: "Liam runs delivery for the engineering team. He is the reason our sprints end with a working demo instead of a status update, and he reviews more pull requests than anyone here.",
    linkedin: "https://linkedin.com",
    photo: portrait("1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Yuki Tanaka",
    role: "Head of Platform",
    initials: "YT",
    bio: "Yuki builds the infrastructure everything else stands on — pipelines, environments, and the monitoring that wakes us up before it wakes up a client. Boring releases are the goal.",
    linkedin: "https://linkedin.com",
    photo: portrait("1438761681033-6461ffad8d80"),
  },
  {
    name: "Sofia Alvarez",
    role: "Head of Design",
    initials: "SA",
    bio: "Sofia leads product and interface design. She starts every project by interviewing the people who will actually use the thing, which is why our interfaces tend to survive contact with real users.",
    linkedin: "https://linkedin.com",
    photo: portrait("1472099645785-5658abf4ff4e"),
  },
  {
    name: "Owen Reyes",
    role: "Head of Growth & SEO",
    initials: "OR",
    bio: "Owen treats search as an engineering problem. He works alongside the build team from day one so performance, structure, and content are not bolted on after launch.",
    linkedin: "https://linkedin.com",
    photo: portrait("1544005313-94ddf0286df2"),
  },
  {
    name: "Grace Kim",
    role: "Director of Engagement",
    initials: "GK",
    bio: "Grace makes sure scopes are honest and expectations are shared. If a project is drifting, you will hear it from her early — in plain language, with options attached.",
    linkedin: "https://linkedin.com",
    photo: portrait("1506794778202-cad84cf45f1d"),
  },
  {
    name: "Noah Bennett",
    role: "Principal WordPress Engineer",
    initials: "NB",
    bio: "Noah builds WordPress the way it should be built: custom themes, clean blocks, and no plugin sprawl. Editors can actually edit, and the site still scores well on Core Web Vitals.",
    linkedin: "https://linkedin.com",
    photo: portrait("1534528741775-53994a69daeb"),
  },
];

/** Pull quote shown alongside the team. */
export const teamQuote = {
  quote:
    "The people who scope your project are the same people who build it. No handoffs, no account layer in between — that is the whole model.",
  author: "Aisha Kapoor",
  role: "Co-Founder & CTO",
};
