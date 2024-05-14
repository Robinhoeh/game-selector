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
    'videogame-selector.netlify.app',
    'videogame-selector.netlify.app/',
    ['https://www.googleapis.com/auth/userinfo.email']
);
