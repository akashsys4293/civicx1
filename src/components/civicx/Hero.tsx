```tsx
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Bell,
  FileText,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Counter } from "./Counter";
import { BrandLogo } from "./BrandLogo";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      {/* Government-style top strip */}
      <div className="border-b border-border bg-muted/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>
              CivicX | Smart Civic Governance Platform
            </span>
          </div>

          <div className="hidden items-center gap-4 sm:flex">
            <a
              href="#services"
              className="transition-colors hover:text-primary"
            >
              Citizen Services
            </a>
            <a
              href="#updates"
              className="transition-colors hover:text-primary"
            >
              Important Updates
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="shrink-0">
            <BrandLogo
              eager
              className="h-auto w-36 object-left sm:w-44"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a
              href="#top"
              className="text-primary"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#live-world"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Civic Map
            </a>
            <a
              href="#missions"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Missions
            </a>
            <a
              href="#updates"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Updates
            </a>
          </nav>

          <a
            href="#launch"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Login
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero banner */}
      <div className="relative border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <motion.div
            initial={
              reduced
                ? false
                : { opacity: 0, y: 20 }
            }
            animate={
              reduced
                ? undefined
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              SMART CIVIC GOVERNANCE
            </div>

            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building Better Communities Through
              <span className="block text-primary">
                Citizen Participation
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              CivicX connects citizens, government, universities and
              industry to identify civic challenges, prioritize them
              using AI, and turn real-world problems into measurable
              solutions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#launch"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Report a Civic Issue
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#live-world"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 font-medium transition-colors hover:bg-muted"
              >
                <MapPin className="h-4 w-4 text-primary" />
                Explore Civic Map
              </a>
            </div>

            {/* Statistics */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-border py-5">
              <div className="border-r border-border px-4 first:pl-0">
                <p className="text-2xl font-bold sm:text-3xl">
                  <Counter value={2847} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Issues Reported
                </p>
              </div>

              <div className="border-r border-border px-4">
                <p className="text-2xl font-bold sm:text-3xl">
                  <Counter value={1842} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Issues Resolved
                </p>
              </div>

              <div className="px-4">
                <p className="text-2xl font-bold sm:text-3xl">
                  <Counter value={126} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Active Missions
                </p>
              </div>
            </div>
          </motion.div>

          {/* Government-style service panel */}
          <motion.div
            initial={
              reduced
                ? false
                : { opacity: 0, x: 25 }
            }
            animate={
              reduced
                ? undefined
                : { opacity: 1, x: 0 }
            }
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="rounded-xl border border-border bg-card shadow-sm"
          >
            <div className="border-b border-border bg-muted/30 px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">
                    Citizen Services
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Access CivicX services
                  </p>
                </div>

                <Bell className="h-5 w-5 text-primary" />
              </div>
            </div>

            <div id="services" className="grid grid-cols-2 gap-px bg-border">
              <a
                href="#launch"
                className="group bg-card p-5 transition-colors hover:bg-muted/50"
              >
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">
                  Report an Issue
                </h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Submit a civic problem with location and evidence.
                </p>
              </a>

              <a
                href="#live-world"
                className="group bg-card p-5 transition-colors hover:bg-muted/50"
              >
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">
                  Civic Map
                </h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Explore reported issues and active civic signals.
                </p>
              </a>

              <a
                href="#missions"
                className="group bg-card p-5 transition-colors hover:bg-muted/50"
              >
                <Search className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">
                  Find Missions
                </h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Discover challenges that can become solution missions.
                </p>
              </a>

              <a
                href="#updates"
                className="group bg-card p-5 transition-colors hover:bg-muted/50"
              >
                <Bell className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">
                  Important Updates
                </h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  View important civic announcements and activities.
                </p>
              </a>
            </div>

            <div className="flex items-center justify-between border-t border-border px-5 py-4">
              <span className="text-xs text-muted-foreground">
                Serving citizens through CivicX
              </span>

              <a
                href="#services"
                className="text-xs font-medium text-primary hover:underline"
              >
                View all services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```
