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
const currentPcGames2 = ref<Game[] | null>(null)
const currentConsoleGames = ref<Game[] | null>(null)

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
				break
		}
		const response = await database.listDocuments(
			gamesDatabaseId,
			collectionId,
			[Query.orderDesc("$createdAt"), Query.limit(queryLimit)]
		)
		gameType === 'pcgame1' ? current.value = response.documents as Game[] : ''
		gameType === 'pcgame2' ? currentPcGames2.value = response.documents as Game[] : ''
		gameType === 'consolegame' ? currentConsoleGames.value = response.documents as Game[] : ''
	}

	// Add new game to the DB
	// Change the value of the current object
	const addGame = async (game: Game, form: GameData) => {
		let collectionId = ''
		switch(form.value.game_type) {
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
		try {
			const response = await database.createDocument(
				gamesDatabaseId,
				collectionId,
				ID.unique(),
				game
			)
			collectionId === gameCollectionId ? current.value = [response, ...current.value as Game[]].slice(0, 10) as Game[] : ''
			collectionId === pcGames2CollectionId ? currentPcGames2.value = [response, ...currentPcGames2.value as Game[]].slice(0, 10) as Game[] : ''
			collectionId === consoleGamesCollectionId ? currentConsoleGames.value = [response, ...currentConsoleGames.value as Game[]].slice(0, 10) as Game[] : ''			
		} 
		catch(error) {
			console.log('error', error)
		}
	}
	const remove = async (id: string, gameType: 'pcgame1' | "pcgame2" | "consolegame") => {
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
		await fetch('pcgame1') // refresh games to ensure we have 10 items
		await fetch('pcgame2')
		await fetch('consolegame')
	}
	
	fetch('pcgame1')
	fetch('pcgame2')
	fetch('consolegame')
	
	return {
		addGame,
		current,
		currentPcGames2,
		currentConsoleGames,
		fetch,
		remove,
	}
}