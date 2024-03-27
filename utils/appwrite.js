import { Client, Account, Databases, ID, Query} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6602292422ff13d3f84d'); // Replace with your project ID

export const account = new Account(client);

export const databases = new Databases(client)

let promise = databases.listDocuments('66022eb2e6430773f2f2', '66036aeb2f267a757a3c', 
[Query.equal('title', 'people')])

// export const promise = databases.createDocument(
// 	'66022eb2e6430773f2f2',
// 	'66036aeb2f267a757a3c',
// 	ID.unique(),
// 	{ "title": "Hamlet"}
// )

promise.then(function(response) {
	console.log(response)
}, function(error) {
	console.log(error)
})

export { ID } from 'appwrite';
