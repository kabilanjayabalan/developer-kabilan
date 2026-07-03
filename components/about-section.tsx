import { profile, languages } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-20 min-h-[100dvh] snap-start flex flex-col justify-center">
      <SectionHeading index="01" title="About me" />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {profile.about.map((paragraph, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Consistently sharpening problem-solving abilities through{" "}
            <a
              href={profile.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              LeetCode
            </a>
            , with a strong focus on Data Structures, Algorithms, and analytical thinking.
          </p>
        </div>
        <dl className="space-y-4 rounded-lg border border-border bg-card p-6">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Name</dt>
            <dd className="mt-1 font-medium">{profile.name}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Role</dt>
            <dd className="mt-1 font-medium">{profile.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Location</dt>
            <dd className="mt-1 font-medium">{profile.location}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Email</dt>
            <dd className="mt-1">
              <a
                href={profile.socials.email}
                className="font-medium text-brand transition-opacity hover:opacity-80"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Phone</dt>
            <dd className="mt-1">
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="font-medium text-brand transition-opacity hover:opacity-80"
              >
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">Languages</dt>
            <dd className="mt-1 font-medium">{languages.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
