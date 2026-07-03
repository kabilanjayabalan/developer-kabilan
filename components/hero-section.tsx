import { ArrowRight, Download, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { SiLeetcode } from "react-icons/si"
import { profile } from "@/lib/portfolio-data"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 min-h-[100dvh] snap-start flex flex-col justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col justify-center items-start">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:whitespace-nowrap">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-base text-brand sm:text-lg">{profile.role}</p>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.tagline} I care about performance, accessibility, and building things
            that make people&apos;s lives a little easier.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-accent"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.email}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            {profile.socials.leetcode && (
              <a
                href={profile.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LeetCode"
              >
                <SiLeetcode className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div className="relative shrink-0 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] mx-auto xl:mr-8">
          {/* Glowing background */}
          <div className="absolute inset-0 rounded-full bg-brand/30 blur-3xl animate-pulse" />

          {/* Glowing border frame */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand/60 via-brand/20 to-transparent p-1 shadow-[0_0_30px_rgba(var(--brand),0.3)]">
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background bg-card">
              <Image
                src="/developer-kabilan/Photo-bg.png"
                alt={profile.name}
                fill
                className="object-cover scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
