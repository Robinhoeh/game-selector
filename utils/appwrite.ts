import { Client, Databases, Account, OAuthProvider  } from "appwrite"

const url: string = import.meta.env.VITE_APPWRITE_ENDPOINT
const project: string = import.meta.env.VITE_APPWRITE_PROJECT

const client: Client = new Client()

client
	.setEndpoint(url).setProject(project)

export const account: Account = new Account(client)
export const database: Databases = new Databases(client)

account.createOAuth2Session(
    OAuthProvider.Google, // provider
    'https://main--videogame-selector.netlify.app', // redirect here on success
    'https://main--videogame-selector.netlify.app/', // redirect here on failure
[]// scopes (optional)
);