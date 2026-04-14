"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Building2,
  Flower2,
  Heart,
  Menu,
  PartyPopper,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { services, type ServiceSlug } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: Record<ServiceSlug, typeof Heart> = {
  wedding: Heart,
  "bar-mitzvah": Star,
  "bat-mitzvah": Sparkles,
  henna: Flower2,
  "private-events": PartyPopper,
  corporate: Building2,
};

export function Navbar() {
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const scrollSmooth = useSpring(scrollY, { stiffness: 320, damping: 34, mass: 0.35 });

  const blurPx = useTransform(scrollSmooth, [0, 96], [0, 18]);
  const bgAlpha = useTransform(scrollSmooth, [0, 96], [0, 0.58]);
  const lineAlpha = useTransform(scrollSmooth, [0, 96], [0, 0.14]);
  const shadowStrength = useTransform(scrollSmooth, [0, 96], [0, 0.35]);

  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;
  const backgroundColor = useMotionTemplate`rgba(9, 9, 11, ${bgAlpha})`;
  const borderColor = useMotionTemplate`rgba(255, 255, 255, ${lineAlpha})`;
  const boxShadow = useMotionTemplate`0 18px 48px rgba(0, 0, 0, ${shadowStrength})`;

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-transparent"
      style={{
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        backgroundColor,
        borderBottomColor: borderColor,
        boxShadow,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="block text-[0.65rem] font-black uppercase tracking-[0.35em] text-foreground transition-colors group-hover:text-neon-purple sm:text-xs">
            OMER MIZRAHI
          </span>
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu className="max-w-max">
            <NavigationMenuList className="flex-wrap justify-center gap-0.5">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/#hero"
                  closeOnClick
                  className="text-muted-foreground hover:text-foreground"
                >
                  ראשי
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/#about"
                  closeOnClick
                  className="text-muted-foreground hover:text-foreground"
                >
                  מי אני
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground data-open:text-foreground">
                  שירותים
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0">
                  <div className="grid w-[min(42rem,calc(100vw-2rem))] gap-2 p-3 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                      const Icon = SERVICE_ICONS[service.slug];
                      return (
                        <NavigationMenuLink
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          closeOnClick
                          className="group/link flex flex-col gap-2 rounded-xl border border-transparent bg-muted/20 p-4 hover:border-neon-purple/25 hover:bg-muted/40"
                        >
                          <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple/25 to-electric-blue/25 text-neon-purple ring-1 ring-white/10 transition group-hover/link:ring-neon-purple/30">
                            <Icon className="size-5" aria-hidden />
                          </span>
                          <span className="text-base font-semibold text-foreground">
                            {service.title}
                          </span>
                          <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {service.description}
                          </span>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/#gallery"
                  closeOnClick
                  className="text-muted-foreground hover:text-foreground"
                >
                  גלריה
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/#studio"
                  closeOnClick
                  className="text-muted-foreground hover:text-foreground"
                >
                  האולפן
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/#testimonials"
                  closeOnClick
                  className="text-muted-foreground hover:text-foreground"
                >
                  המלצות
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            nativeButton={false}
            render={<a href="tel:0547672082" />}
            className={cn(
              "hidden h-9 gap-2 rounded-full border-0 bg-gradient-to-l from-neon-purple to-electric-blue px-5 text-sm font-semibold text-white shadow-md shadow-neon-purple/25 sm:inline-flex",
              "hover:brightness-110 focus-visible:ring-neon-purple/50"
            )}
          >
            <Phone className="size-4 opacity-90" aria-hidden />
            054-767-2082
          </Button>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "md:hidden text-foreground"
              )}
              aria-label="פתח תפריט"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-background/95 backdrop-blur-xl"
              showCloseButton
            >
              <SheetHeader className="border-b border-white/10 text-start">
                <SheetTitle className="font-black uppercase tracking-[0.25em] text-foreground">
                  תפריט
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4" aria-label="ניווט מובייל">
                <MobileNavLink href="/#hero" onNavigate={() => setSheetOpen(false)}>
                  ראשי
                </MobileNavLink>
                <MobileNavLink href="/#about" onNavigate={() => setSheetOpen(false)}>
                  מי אני
                </MobileNavLink>
                <div className="py-2">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    שירותים
                  </p>
                  <div className="flex max-h-[40vh] flex-col gap-1 overflow-y-auto border-s border-white/10 ps-3">
                    {services.map((service) => (
                      <MobileNavLink
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onNavigate={() => setSheetOpen(false)}
                        className="text-sm"
                      >
                        {service.title}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>
                <MobileNavLink href="/#gallery" onNavigate={() => setSheetOpen(false)}>
                  גלריה
                </MobileNavLink>
                <MobileNavLink href="/#studio" onNavigate={() => setSheetOpen(false)}>
                  האולפן
                </MobileNavLink>
                <MobileNavLink
                  href="/#testimonials"
                  onNavigate={() => setSheetOpen(false)}
                >
                  המלצות
                </MobileNavLink>
                <Link
                  href="tel:0547672082"
                  onClick={() => setSheetOpen(false)}
                  className={cn(
                    "mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-l from-neon-purple to-electric-blue text-sm font-semibold text-white shadow-md shadow-neon-purple/25"
                  )}
                >
                  <Phone className="size-4 opacity-90" aria-hidden />
                  054-767-2082
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

function MobileNavLink({
  href,
  children,
  onNavigate,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition hover:bg-white/5",
        className
      )}
    >
      {children}
    </Link>
  );
}
