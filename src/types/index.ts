import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

export interface NavItem {
  path: string
  label: string
  icon: LucideIcon
}

export interface SocialLinkProps {
  href: string
  icon: ReactNode
}

export interface ButtonProps {
  href?: string
  children: ReactNode
  onClick?: () => void
}

export interface Project {
  title: string
  description: string
  image: string
  liveLink: string
}

export interface Skill {
  name: string
  icon: string
}

export interface Education {
  period: string
  degree: string
  institution: string
}

export interface Experience {
  period: string
  title: string
  company?: string
  description?: string
}
