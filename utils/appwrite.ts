import { Client, Account, OAuthProvider } from "appwrite";

console.log(OAuthProvider)
const url = import.meta.env.VITE_APPWRITE_ENDPOINT;
const project = import.meta.env.VITE_APPWRITE_PROJECT;

const client = new Client();

client
    .setEndpoint(url)
    .setProject(project);

export const account = new Account(client);

account.createOAuth2Session(
    OAuthProvider.Google,
	'https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/660b4ac43ffdd541fbfe',
	'https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/660b4ac43ffdd541fbfe',
);
