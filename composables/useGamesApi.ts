import { ID, Query, Databases,  type Models } from "appwrite"
// import { database } from '@/utils/appwrite';
const database = new Databases(import.meta.env.VITE_APPWRITE_ENDPOINT)

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

	const countLoadingState = ref<Array<boolean>>([])
	const setCountLoadingState = (id: string, value: boolean) => {
		countLoadingState.value[id] = value
	}


// Update the count by incrementing it
	const updateCount = async (documentId: string, gameType: 'pcgame1' | 'pcgame2' | 'consolegame') => {
	console.log(documentId)
    let collectionId = '';
    switch (gameType) {
        case 'pcgame1':
            collectionId = gameCollectionId;
            break;
        case 'pcgame2':
            collectionId = pcGames2CollectionId;
            break;
        case 'consolegame':
            collectionId = consoleGamesCollectionId;
            break;
    }

    try {
		// Fetch the current document to get the current count
		setCountLoadingState(documentId, true)
        const document = await database.getDocument(gamesDatabaseId, collectionId, documentId);
        const newCount = (document.count || 0) + 1;

        // Update the document with the new count
		await database.updateDocument(gamesDatabaseId, collectionId, documentId, { count: newCount });
		// setCountLoadingState(documentId, false)
        console.log('Document updated with new count:', newCount);

        // Optionally, refresh or display the updated data
		fetch(gameType);
		setCountLoadingState(documentId, false)
    } catch (error) {
        console.error('Failed to update count:', error);
    }
}
	// loading states for each row id
const removeLoadingStates = ref<Array<boolean>>([])

// Function to set loading state for a specific row id
const setRemoveLoadingState = (id: string, value: boolean) => {
    removeLoadingStates.value[id] = value
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
		
		 setRemoveLoadingState(id, true)
		await database.deleteDocument(gamesDatabaseId, collectionId, id)
		if (gameType === 'pcgame1') {
			await fetch('pcgame1') // refresh games to ensure we have 10 items
		}
		if (gameType === 'pcgame2') {
			await fetch('pcgame2') // refresh games to ensure we have 10 items
		}
		if (gameType === 'consolegame') {
			await fetch('consolegame') // refresh games to ensure we have 10 items
		}
		 setRemoveLoadingState(id, false)
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
		updateCount,
		countLoadingState,
		removeLoadingStates,
		remove,
	}
}