import getConfig from "next/config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username",type: "text", placeholder: "username" },
                password: { label: "Password", type: "password", placeholder: "password" },
            }, 
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const { publicRuntimeConfig } = getConfig();

                const res = await fetch(`${publicRuntimeConfig.API_URL}/api/member/login/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password,
                    }),
                });
                const user = await res.json();

                if (res.status == 200) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;    
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },      
        async session({ session, token, user }) {
            console.log("HAHAH")
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: '/auth/login',
    },
});