import { ID, Query,  type Models } from "appwrite"
import { database } from "~/utils/appwrite"


const gamesDatabaseId: string = import.meta.env.VITE_DATABASE_ID
let gameCollectionId: string = import.meta.env.VITE_COLLECTION_ID
let pcGames2CollectionId: string = import.meta.env.VITE_PC_GAMES2_COLLECTION_ID
let consoleGamesCollectionId: string = import.meta.env.VITE_COLLECTION_ID_CONSOLE_GAMES
const queryLimit: number = 10

interface Game extends Models.Document {
	id: number
	game_title: string
	count: number
	userId: string
}

const current = ref<Game[] | null>(null)

export const useGamesApi = () => {
	
	const fetch = async (gameType: 'pcgame1' | "pcgame2" | "consolegame"): Promise<void> => {
		let collectionId = ''
		switch(gameType) {
			case 'pcgame1':
				collectionId = gameCollectionId
				break
			case 'pcgame2':
				collectionId = pcGames2CollectionId
				break
			case 'consolegame':
				collectionId = consoleGamesCollectionId
				console.log('collectionId', collectionId)
				break
		}
		const response = await database.listDocuments(
			gamesDatabaseId,
			collectionId,
			[Query.orderDesc("$createdAt"), Query.limit(queryLimit)]
		)
		current.value = response.documents as Game[]
	}

	// Add new game to the DB
	// Change the value of the current object
	const addGame = async (game: Game, form: GameData) => {
		console.log('form', form)
		let collectionId = ''
		switch(form.game_type) {
			case 'pcgame1':
				collectionId = gameCollectionId
				break
			case 'pcgame2':
				collectionId = pcGames2CollectionId
				break
			case 'consolegame':
				collectionId = gameCollectionId
				console.log('collectionId', collectionId)
				break
		}
		try {
			console.log(collectionId)
			const response = await database.createDocument(
				gamesDatabaseId,
				collectionId,
				ID.unique(),
				game
			)
			console.log('good', response)
			current.value = [response, ...current.value as Game[]].slice(0, 10) as Game[]
		} 
		catch(error) {
			console.log('error', error)
		}
	}
		
	const remove = async (id: string, game: Game, gameType: 'pcgame1' | "pcgame2" | "consolegame") => {
		let collectionId = ''
		switch(gameType) {
			case 'pcgame1':
				collectionId = gameCollectionId
				break
			case 'pcgame2':
				collectionId = pcGames2CollectionId
				break
			case 'consolegame':
				collectionId = consoleGamesCollectionId
				break
		}

		await database.deleteDocument(gamesDatabaseId, collectionId, id)
		await fetch(gameType) // refresh games to ensure we have 10 items
	}
	
	fetch('pcgame2')
	
	return {
		addGame,
		current,
		fetch,
		remove,
			
	}
}