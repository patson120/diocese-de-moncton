"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MoonStar, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/shared/button"

const products = [
  {
    title: "Nos Produits",
    href: "/products",
    description: "Découvrez notre gamme complète de produits",
  },
  {
    title: "Nouveautés",
    href: "/products/new",
    description: "Les dernières innovations et nouveaux produits",
  },
  {
    title: "Promotions",
    href: "/products/deals",
    description: "Offres spéciales et réductions",
  },
  {
    title: "Collections",
    href: "/products/collections",
    description: "Nos collections exclusives",
  },
]

const services = [
  {
    title: "Conseil",
    href: "/services/consulting",
    description: "Services de conseil personnalisé",
  },
  {
    title: "Installation",
    href: "/services/installation",
    description: "Service d'installation professionnel",
  },
  {
    title: "Maintenance",
    href: "/services/maintenance",
    description: "Services de maintenance et support",
  },
  {
    title: "Formation",
    href: "/services/training",
    description: "Programmes de formation",
  },
]

const company = [
  {
    title: "À propos",
    href: "/about",
    description: "Notre histoire et nos valeurs",
  },
  {
    title: "Carrières",
    href: "/careers",
    description: "Rejoignez notre équipe",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Contactez-nous",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Actualités et articles",
  },
]

export default function Navigation() {
  const { setTheme } = useTheme()

  return (
    <div className="fixed w-full top-0 z-50 border-b bg-background">
      <div className="container flex justify-between items-center py-2 border border-red-500">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Produits</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {products.map((product) => (
                    <ListItem
                      key={product.title}
                      title={product.title}
                      href={product.href}
                    >
                      {product.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Entreprise</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {company.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme("light")}
          >
            <Sun className="h-5 w-5" />
            <span className="sr-only">Thème clair</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme("dark")}
          >
            <MoonStar className="h-5 w-5" />
            <span className="sr-only">Thème sombre</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme("system")}
          >
            <Laptop className="h-5 w-5" />
            <span className="sr-only">Thème système</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"