

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Government-style information strip */}
      <div className="fixed inset-x-0 top-0 z-[60] border-b border-border bg-muted/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] sm:px-6 sm:text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="hidden sm:inline">
              CivicX | Smart Civic Governance Platform
            </span>
            <span className="sm:hidden">CivicX</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#services"
              className="hidden transition-colors hover:text-foreground sm:inline"
            >
              Citizen Services
            </a>

            <span className="hidden h-3 w-px bg-border sm:block" />

            <LanguageToggle showIcon={false} />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="fixed inset-x-0 top-[33px] z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-[68px] items-center justify-between gap-5">
            {/* Logo */}
            <a
              href="#top"
              aria-label="CivicX home"
              className="flex shrink-0 items-center"
            >
              <BrandLogo
                eager
                className="h-9 w-auto object-left sm:h-11"
              />
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center lg:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative px-4 py-6 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}

                  <span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              ))}

              {/* More menu */}
              <button
                type="button"
                className="group flex items-center gap-1 px-4 py-6 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                More
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {/* Platform button */}
              <Link
                to="/access"
                className="ml-3 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Enter Platform
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile navigation */}
          {open && (
            <div className="border-t border-border py-3 lg:hidden">
              <div className="flex flex-col">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="my-2 border-t border-border" />

                <div className="flex items-center justify-between px-3 py-3">
                  <span className="text-sm text-muted-foreground">
                    Language
                  </span>

                  <LanguageToggle showIcon={false} />
                </div>

                <Link
                  to="/access"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-md bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                >
                  Enter Platform
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
