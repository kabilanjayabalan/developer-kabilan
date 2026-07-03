"use client"

import { useState } from "react"
import { ArrowUpRight, Clock } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { projects } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function ProjectsSection() {
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const handleInProgressClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setToastMessage("This project link is currently in progress!")
    setTimeout(() => setToastMessage(null), 3000)
  }

  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-20 min-h-[100dvh] snap-start flex flex-col justify-center relative">
      {toastMessage && (
        <div className="fixed top-24 right-4 z-[9999] rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium shadow-lg animate-page-transition">
          {toastMessage}
        </div>
      )}
      <SectionHeading
        index="03"
        title="Featured projects"
        subtitle="A selection of things I've designed, built, and shipped."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            </div>
            <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target={project.liveUrl !== "#" ? "_blank" : undefined}
                  rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                  onClick={project.liveUrl === "#" ? handleInProgressClick : undefined}
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
