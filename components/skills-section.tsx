import { skills } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSpringboot,
  SiPostman,
  SiGithub,
  SiGit,
  SiJsonwebtokens
} from "react-icons/si"
import { FaJava, FaDatabase } from "react-icons/fa"
import { TbApi } from "react-icons/tb"

function getSkillIcon(skillName: string) {
  switch (skillName) {
    case "Java": return FaJava
    case "Spring Boot": return SiSpringboot
    case "SQL": return FaDatabase
    case "HTML": return SiHtml5
    case "CSS": return SiCss
    case "JavaScript": return SiJavascript
    case "Git": return SiGit
    case "GitHub": return SiGithub
    case "Postman": return SiPostman
    case "RESTful APIs": return TbApi
    case "JWT / OAuth2": return SiJsonwebtokens
    default: return null
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border bg-secondary/50 min-h-[100dvh] snap-start flex flex-col justify-center">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <SectionHeading
          index="02"
          title="Skills & Tech stack"
          subtitle="The tools and technologies I reach for when building across the stack."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:scale-105 hover:border-brand hover:shadow-lg">
              <h3 className="font-mono text-sm font-medium text-brand">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => {
                  const Icon = getSkillIcon(item)
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
