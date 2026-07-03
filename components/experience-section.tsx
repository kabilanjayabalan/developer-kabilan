import { education, experience } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-y border-border bg-secondary/50 min-h-[100dvh] snap-start flex flex-col justify-center">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <SectionHeading index="04" title="Experience & education" />

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-mono text-base font-medium text-brand">Experience</h3>
              <ol className="relative space-y-8 border-l border-border pl-6">
                {experience.map((item) => (
                  <li key={item.role + item.company} className="relative">
                    <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-brand" />
                    <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
                    <h4 className="mt-1 text-lg font-semibold">{item.role}</h4>
                    <p className="text-base text-brand">{item.company}</p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    {item.tags && (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-md bg-background px-2.5 py-1 font-mono text-sm text-muted-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="mb-6 font-mono text-base font-medium text-brand">Education</h3>
              <ol className="relative space-y-8 border-l border-border pl-6">
                {education.map((item) => (
                  <li key={item.degree} className="relative">
                    <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-brand" />
                    <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
                    <h4 className="mt-1 text-lg font-semibold">{item.degree}</h4>
                    <p className="text-base text-brand">{item.school}</p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
    </section>
  )
}
