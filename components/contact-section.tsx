"use client"

import { useState } from "react"
import { CheckCircle2, Mail, Send } from "lucide-react"
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { useForm, ValidationError } from "@formspree/react"

export function ContactSection() {
  const [state, handleSubmit, reset] = useForm("xjgqjywg")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const playSendSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio playback failed", e)
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    playSendSound()
    handleSubmit(e)
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-secondary/50 min-h-[100dvh] snap-start flex flex-col justify-center">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <SectionHeading
            index="06"
            title="Get in touch"
            subtitle="Have an opportunity, question, or just want to say hi? I'd love to hear from you."
          />

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                I&apos;m currently open to internships, entry-level roles, and freelance
                projects. The fastest way to reach me is by email, but the form works too.
              </p>
              <div className="space-y-3">
                <a
                  href={profile.socials.email}
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-brand"
                >
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  {profile.email}
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-brand"
                >
                  <GithubIcon className="h-5 w-5 text-muted-foreground" />
                  GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-brand"
                >
                  <LinkedinIcon className="h-5 w-5 text-muted-foreground" />
                  LinkedIn
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-brand"
                >
                  <InstagramIcon className="h-5 w-5 text-muted-foreground" />
                  Instagram
                </a>
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-brand"
                >
                  <TwitterIcon className="h-5 w-5 text-muted-foreground" />
                  Twitter
                </a>
              </div>
            </div>

            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-brand" />
                <h3 className="mt-4 text-lg font-semibold">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    reset()
                    setForm({ name: "", email: "", message: "" })
                  }}
                  className="mt-6 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 rounded-lg border border-border bg-card p-6"
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                    placeholder="Your name"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                    placeholder="you@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                    placeholder="Tell me a bit about what you have in mind..."
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {state.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
    </section>
  )
}

