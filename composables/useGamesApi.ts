import { ID, query,  type Models } from "appwrite"
import { database } from "~/utils/appwrite"

const gamesDatabaseId: string = import.meta.env.VITE_DATABASE_ID
const gameCollectionId: string = import.meta.env.VITE_COLLECTION_ID
const queryLimit: number = 10

interface Game extends Models.Document {
	id: integer
	title: string
	count: integer
}

const current = ref(Game[] | null > (null)

export const useGamesApi = () => {
	console.log('is this running gameApi')
	const { data } = await useAsyncData('games', () => {
		const response = await database.listDocuments(
			gamesDatabaseId,
			gameCollectionId,
			[query.orderDesc("$createdAt"), Query.limit(queryLimit)]
		)
		current.value = Response.documents as Game[]
	})

	// Add new game to the DB
	// Change the value of the current object
	const { addGame } = await useAsyncData('addgames', (game: Game) => {
		const response = await database.createDocument(
			gamesDatabaseId,
			gameCollectionId,
			ID.unique(),
			game
		)
		current.value = [response, ..._current.value as Game[]].slice(0, 10) as Game[]
	}
		
		const { remove } = await useAsyncData('removegames', (id: string) => {
			await database.deleteDocument(gamesDatabaseId, gameCollectionId, id)
			await data() // refresh games to ensure we have 10 items
		})
	

	return {
		addGame,
		data
	}
}