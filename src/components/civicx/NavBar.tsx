
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";
import { LanguageToggle } from "./LanguageToggle";

const links = [
  { label: "Home", href: "#top" },
  { label: "Citizen Services", href: "#services" },
  { label: "Civic Map", href: "#live-world" },
  { label: "Missions", href: "#missions" },
  { label: "Updates", href: "#updates" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const ids = [
      "top",
      "services",
      "live-world",
      "missions",
      "updates",
    ];

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (visible) {
          setActiveId(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Government information strip */}
      <div className="fixed inset-x-0 top-0 z-[60] border-b border-border bg-muted/95 backdrop-blur">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="hidden sm:inline">
              CivicX | Smart Civic Governance Platform
            </span>

            <span className="sm:hidden">
              CivicX
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#services"
              className="hidden text-[11px] text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Citizen Services
            </a>

            <span className="hidden h-3 w-px bg-border sm:block" />

            <LanguageToggle
              showIcon={false}
              className="text-[11px]"
            />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={cn(
          "fixed inset-x-0 top-8 z-50 border-b transition-all duration-300",
          scrolled || open
            ? "border-border bg-background/98 shadow-sm backdrop-blur-md"
            : "border-transparent bg-background/95",
        )}
      >
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto max-w-7xl px-4 sm:px-6"
        >
          <div className="flex h-[68px] items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#top"
              aria-label="CivicX home"
              className="flex min-w-0 shrink-0 items-center"
            >
              <BrandLogo
                eager
                className={cn(
                  "w-auto object-left transition-all duration-300",
                  scrolled
                    ? "h-9 sm:h-10"
                    : "h-10 sm:h-11",
                )}
              />
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center lg:flex">
              {links.map((link) => {
                const isActive =
                  activeId === link.href;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "group relative px-4 py-6 text-sm font-medium transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}

                    <span
                      className={cn(
                        "absolute inset-x-4 bottom-0 h-0.5 origin-left bg-primary transition-transform duration-200",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </a>
                );
              })}

              {/* More */}
              <button
                type="button"
                className="group flex items-center gap-1 px-4 py-6 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                More
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Language */}
              <LanguageToggle className="ml-1" />

              {/* Platform */}
              <Link
                to="/access"
                className="ml-4 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                Enter Platform
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={
                open
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={open}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-muted lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="overflow-hidden border-t border-border lg:hidden"
              >
                <div className="flex flex-col gap-1 py-3">
                  {links.map((link) => {
                    const isActive =
                      activeId === link.href;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() =>
                          setOpen(false)
                        }
                        className={cn(
                          "rounded-md px-3 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                        )}
                      >
                        {link.label}
                      </a>
                    );
                  })}

                  <div className="my-2 border-t border-border" />

                  <div className="flex items-center justify-between px-3 py-3">
                    <span className="text-sm text-muted-foreground">
                      Language
                    </span>

                    <LanguageToggle
                      showIcon={false}
                    />
                  </div>

                  <Link
                    to="/access"
                    onClick={() => setOpen(false)}
                    className="mt-1 rounded-md bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                  >
                    Enter Platform
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
}

