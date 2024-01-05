import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import {defineConfig} from "astro/config"
import {loadEnv} from "vite"

const {
    SITE_URL,
} = loadEnv(import.meta.env.MODE, process.cwd(), "")

// https://astro.build/config
export default defineConfig({
    site: SITE_URL,
    trailingSlash: "never",
    integrations: [
        tailwind(),
        sitemap(),
    ],
})
