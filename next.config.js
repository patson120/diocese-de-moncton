import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin(
    "./src/i18n/request.ts"
)

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'build',
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
}

export default withNextIntl(nextConfig)

// Je veux qu'en gardant le même design que dans l'application actuelle je veux que tu me produises une page similaire à celle ci https://www.diocesemoncton.ca/fr/opportunites-demploi avec une bonne structuration du contenu 