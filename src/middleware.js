import createMiddleware from "next-intl/middleware"

export default createMiddleware({
    // Alist of all locales that are supported 
    locales: ['en', 'fr'],

    // Use when no locale matches
    defaultLocale: 'en'
})


export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|fr)/:path*']
}