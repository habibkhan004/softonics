import Image from "next/image";
import MotionReveal from "@/components/ui/MotionReveal";
import { team } from "@/lib/data/team";
import type { TeamMember } from "@/lib/types";
import SectionLabel from "@/components/ui/SectionLabel";

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function TeamCard({ member, ariaHidden = false }: { member: TeamMember; ariaHidden?: boolean }) {
  return (
    <article
      aria-hidden={ariaHidden}
      className="group/card relative aspect-[3/4] w-[300px] shrink-0 overflow-hidden bg-[#0e1a2e] sm:w-[360px] lg:w-[400px]"
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 360px, 300px"
          className="object-cover grayscale transition-transform duration-500 group-hover/card:scale-105"
        />
      ) : (
        /* No portrait on file — a monogram tile stands in rather than a stock face. */
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute h-48 w-48 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #65df80, transparent 70%)" }}
          />
          <span className="font-hero relative text-[4.5rem] text-white/15">{member.initials}</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a2e] via-[#0e1a2e]/20 to-transparent" />

      {/* Bio reveals on hover / focus, sitting under the name row. */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#080f1a]/95 p-6 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 group-focus-within/card:opacity-100">
        <p className="text-center text-[15px] leading-relaxed text-white sm:text-[16px]">{member.bio}</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 p-5">
        <span className="font-mono text-[15px] leading-tight text-accent-indigo sm:text-[17px]">
          {member.name}
          <span className="mt-1.5 block text-[12px] text-white/45">{member.role}</span>
        </span>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          tabIndex={ariaHidden ? -1 : undefined}
          className="shrink-0 text-accent-indigo transition-opacity hover:opacity-75"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </div>
    </article>
  );
}

function TeamRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-4" aria-hidden={ariaHidden}>
      {team.map((member) => (
        <TeamCard key={member.name} member={member} ariaHidden={ariaHidden} />
      ))}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="app-container">
        <MotionReveal>
          <SectionLabel>Our Team</SectionLabel>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <h2 className="font-hero mt-6 text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem]">
            <span className="text-white">Meet The </span>
            <span className="text-accent-indigo">Team</span>
          </h2>
        </MotionReveal>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <MotionReveal delay={0.14}>
            <p className="max-w-[460px] text-[15px] leading-[1.6] text-foreground-muted sm:text-[17px]">
              We like creating together, communicating directly, and iterating on your vision.
            </p>
          </MotionReveal>

        </div>
      </div>

      {/* Auto-scrolling row; pauses on hover so a bio can be read. */}
      <div className="group mt-12 overflow-hidden sm:mt-16">
        <div className="flex w-max animate-marquee gap-4">
          <TeamRow />
          <TeamRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
