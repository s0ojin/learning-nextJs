import { connectDB } from "@/utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "10c341e5634e889eac7f",
      clientSecret: "ec91a9a0f76e35e17f747442115fb26ce8c292e8",
    }),
  ],
  secret: "onepst9704",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
