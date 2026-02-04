import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });

                if (!user || !user.password) {
                    throw new Error('Invalid credentials');
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);

                if (!isValid) {
                    throw new Error('Invalid credentials');
                }

                return user;
            }
        }),
        // GoogleProvider({
        //   clientId: process.env.GOOGLE_CLIENT_ID,
        //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // }),
        // Add other providers here
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }: any) {
            console.log('NextAuth JWT Callback - User:', user);
            if (user) {
                token.role = user.role;
            }
            console.log('NextAuth JWT Callback - Token:', token);
            return token;
        },
        async session({ session, token }: any) {
            console.log('NextAuth Session Callback - Token:', token);
            if (session.user) {
                (session.user as any).role = token.role;
            }
            console.log('NextAuth Session Callback - Session:', session);
            return session;
        }
    }
})

export { handler as GET, handler as POST }
