/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in"
  },
  providers: [
    Credentials({
      name: "Sign-in",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(cred) {
        if (cred?.password && cred?.email) {
          const password = cred?.password;
          const email = cred?.email;

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
            {
              method: "POST",
              body: new URLSearchParams({ identifier: email, password })
            }
          );

          const data = await response.json();

          if (data.user) {
            return { ...data.user, jwt: data.jwt };
          }
        }

        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, user, token }) {
      const newSession = { ...session } as any;

      if (user) {
        newSession.jwt = token.jwt;
        newSession.id = token.id;
      }

      return Promise.resolve(newSession);
    },
    async jwt({ user, token }) {
      if (user) {
        const newUser = user as any;
        token.id = newUser.id;
        token.email = newUser.email;
        token.name = newUser.username;
        token.jwt = newUser.jwt;
      }

      return Promise.resolve(token);
    }
  }
});
