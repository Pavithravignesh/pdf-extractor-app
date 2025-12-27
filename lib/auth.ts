import { betterAuth } from "better-auth"
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@prisma/client'
import { nextCookies } from "better-auth/next-js"

const prisma = new PrismaClient()

if (!process.env.BETTER_AUTH_SECRET) {
    throw new Error("BETTER_AUTH_SECRET is not set in environment variables")
}

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL!, // 👈 CRITICAL for production
    trustedOrigins: [
        process.env.BETTER_AUTH_URL!,
        "https://pdf-extractor-app-rytp.vercel.app/", // 👈 Add your production domain
    ],
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            // No hardcoded redirectURI - let it use baseURL
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            // No hardcoded redirectURI - let it use baseURL
        },
    },
    advanced: {
        useSecureCookies: process.env.NODE_ENV === "production", // 👈 true for production
    },
    plugins: [nextCookies()],
})