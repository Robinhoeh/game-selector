import { ID, Query,  type Models } from "appwrite"
import { database } from "~/utils/appwrite"

const gamesDatabaseId: string = import.meta.env.VITE_DATABASE_ID
const gameCollectionId: string = import.meta.env.VITE_COLLECTION_ID
const queryLimit: number = 10

interface Game extends Models.Document {
	id: number
	game_title: string
	count: number
}

const current = ref<Game[] | null >(null)

export const useGamesApi = () => {
	console.log('is this running gameApi')
	const  data  = async() => {
		const response = await database.listDocuments(
			gamesDatabaseId,
			gameCollectionId,
			[query.orderDesc("$createdAt"), Query.limit(queryLimit)]
		)
		current.value = response.documents as Game[]
	}

	// Add new game to the DB
	// Change the value of the current object
	const addGame = async(game: Game) => {
		const response = await database.createDocument(
			gamesDatabaseId,
			gameCollectionId,
			ID.unique(),
			game
		)
		current.value = [response, ...current.value as Game[]].slice(0, 10) as Game[]
	}
		
		// const { remove } = await useAsyncData('removegames', (id: string) => {
		// 	await database.deleteDocument(gamesDatabaseId, gameCollectionId, id)
		// 	await data() // refresh games to ensure we have 10 items
		// })
	

	return {
		addGame,
		data
	}
}