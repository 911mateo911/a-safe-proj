import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        const providedEmail = credentials?.email;
        const providedPassword = credentials?.password;

        if (!providedEmail || !providedPassword) {
          return null;
        };

        if (
          providedEmail === process.env.EXAMPLE_USER_EMAIL &&
          providedPassword === process.env.EXAMPLE_USER_PASSWORD
        ) {
          return {
            id: process.env.EXAMPLE_USER_ID || '',
            email: providedEmail,
            name: process.env.EXAMPLE_USER_NAME
          }
        };

        return null;
      }
    })
  ]
};

const handler = NextAuth(authOptions);

export {
  handler as GET,
  handler as POST
}
