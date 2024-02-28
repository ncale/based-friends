import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createAppClient, viemConnector } from "@farcaster/auth-client";
import { NextApiRequest, NextApiResponse } from "next";
import { DOMAIN } from "@/utils/config";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	return await NextAuth(req, res, {
		providers: [
			CredentialsProvider({
				name: "Sign in with Farcaster",
				credentials: {
					message: {
						label: "Message",
						type: "text",
						placeholder: "0x0",
					},
					signature: {
						label: "Signature",
						type: "text",
						placeholder: "0x0",
					},
					// In a production app with a server, these should be fetched from
					// your Farcaster data indexer rather than have them accepted as part
					// of credentials.
					name: {
						label: "Name",
						type: "text",
						placeholder: "0x0",
					},
					pfp: {
						label: "Pfp",
						type: "text",
						placeholder: "0x0",
					},
				},
				async authorize(credentials) {
					const {
						body: { csrfToken },
					} = req;

					const appClient = createAppClient({
						ethereum: viemConnector(),
					});

					const verifyResponse = await appClient.verifySignInMessage({
						message: credentials?.message as string,
						signature: credentials?.signature as `0x${string}`,
						domain: DOMAIN,
						nonce: csrfToken,
					});
					const { success, fid } = verifyResponse;

					if (!success) {
						return null;
					}

					return {
						id: fid.toString(),
						name: credentials?.name,
						image: credentials?.pfp,
					};
				},
			}),
		],
	});
}