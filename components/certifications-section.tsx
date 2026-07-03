"use client"

import { useState } from "react"
import { Award, BookOpen, Sparkles, ArrowUpRight, Clock } from "lucide-react"
import { achievements, publications, highlights } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function CertificationsSection() {
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const handleInProgressClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setToastMessage("Link in progress try again later")
    setTimeout(() => setToastMessage(null), 3000)
  }

  return (
    <section id="certifications" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-20 min-h-[100dvh] snap-start flex flex-col justify-center relative">
      {toastMessage && (
        <div className="fixed top-24 right-4 z-[9999] rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium shadow-lg animate-page-transition">
          {toastMessage}
        </div>
      )}
      <SectionHeading
        index="05"
        title="Achievements & certifications"
        subtitle="Milestones and credentials I've earned along the way."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item) => {
          const CardWrapper = item.url ? "a" : "div"
          return (
            <CardWrapper
              key={item.title}
              href={item.url}
              target={item.url && item.url !== "#" ? "_blank" : undefined}
              rel={item.url && item.url !== "#" ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/20 hover:bg-accent/50 cursor-pointer"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-brand transition-colors group-hover:bg-brand/10">
                <Award className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-medium leading-snug">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.issuer} · {item.year}
                    </p>
                  </div>
                  {item.url && (
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors shrink-0">
                      View
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </CardWrapper>
          )
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
            <BookOpen className="h-4 w-4 text-brand" />
            Publications
          </h3>
          <ul className="mt-4 space-y-4">
            {publications.map((pub) => (
              <li key={pub.title}>
                <p className="text-pretty font-medium leading-snug">{pub.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {pub.venue} · {pub.year}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pub.scopusUrl && (
                    <a
                      href={pub.scopusUrl}
                      target={pub.scopusUrl !== "#" ? "_blank" : undefined}
                      rel={pub.scopusUrl !== "#" ? "noopener noreferrer" : undefined}
                      onClick={pub.scopusUrl === "#" ? handleInProgressClick : undefined}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      Scopus
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                  {pub.ieeeUrl && (
                    <a
                      href={pub.ieeeUrl}
                      target={pub.ieeeUrl !== "#" ? "_blank" : undefined}
                      rel={pub.ieeeUrl !== "#" ? "noopener noreferrer" : undefined}
                      onClick={pub.ieeeUrl === "#" ? handleInProgressClick : undefined}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      IEEE Xplore
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
            <Sparkles className="h-4 w-4 text-brand" />
            Presentation & participation
          </h3>
          <ul className="mt-4 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
