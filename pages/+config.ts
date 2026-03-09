import vikeReact from 'vike-react/config'
import type { Config } from 'vike/types'

export default {
  // https://vike.dev/vike-react
  extends: vikeReact,
  title: 'MiniMüslin',
  ssr: true,
  prerender: true
} satisfies Config
