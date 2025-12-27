import { betterAuth } from "better-auth"
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@prisma/client'
import { nextCookies } from "better-auth/next-js"

const prisma = new PrismaClient()

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET!, // 👈 REQUIRED
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
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    plugins: [nextCookies()],
})