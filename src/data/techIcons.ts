import { AudioWaveform, Bot, Clock, Code2, type LucideIcon } from 'lucide-react'
import { skills } from '../utils/Constants'
import { skillAliases } from './portfolio'

export const normalizeTech = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

// Project tech-stack entries that aren't in the skills list.
const extraIcons: Record<string, string> = {
  vite: 'https://cdn.simpleicons.org/vite',
  postgresql: 'https://cdn.simpleicons.org/postgresql',
  reactquery: 'https://cdn.simpleicons.org/reactquery',
  mailgun: 'https://cdn.simpleicons.org/mailgun',
  cloudwaysapi: 'https://cdn.simpleicons.org/cloudways',
  geminiapi: 'https://cdn.simpleicons.org/googlegemini',
  framermotion: 'https://cdn.simpleicons.org/framer/000000',
  wordpress: 'https://cdn.simpleicons.org/wordpress',
  elementor: 'https://cdn.simpleicons.org/elementor',
}

// Concepts without a brand logo get a line icon instead.
const conceptIcons: Record<string, LucideIcon> = {
  humeai: AudioWaveform,
  llmintegration: Bot,
  cronjobs: Clock,
}

export type TechIcon = { kind: 'image'; src: string } | { kind: 'glyph'; Icon: LucideIcon }

export const techIcon = (tech: string): TechIcon => {
  const key = normalizeTech(tech)
  const skill = skills.find(
    (s) => normalizeTech(s.name) === key || skillAliases[s.name]?.includes(key),
  )
  if (skill) return { kind: 'image', src: skill.icon }
  if (extraIcons[key]) return { kind: 'image', src: extraIcons[key] }
  return { kind: 'glyph', Icon: conceptIcons[key] ?? Code2 }
}
