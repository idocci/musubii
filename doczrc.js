import pkg from "./package.json"
import pjt from "./project.json"

export default {
  dest: "./public",
  files: "./docs/**/*.{md,markdown,mdx}",
  title: pjt.name + " v" + pkg.version,
  description: pjt.description,
  menu: [
    {
      name: "Guide",
      menu: ["Intro", "Support"]
    },
    {
      name: "Install",
      menu: ["npm", "Nuxt", "Gridsome", "Gatsby", "gulp", "CDN"]
    }
  ]
}
