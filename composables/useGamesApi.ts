import { ID, Query, type Models } from "appwrite"
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
	// add one to count
	// Change the value of the current object
	const getDocumentIdAndUpdateCount = async (gameType: 'pcgame1' | 'pcgame2' | 'consolegame', uniqueAttribute: string) => {
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
        // Fetch the document by a unique attribute, for example, the game title
        const result = await database.listDocuments(gamesDatabaseId, collectionId, [Query.equal('game_title', uniqueAttribute)]);
        if (result.documents.length === 0) {
            console.error("No document found with the identifier:", uniqueAttribute);
            return;
        }

        // Get the first document found
		const document = result.documents[0];
		console.log('document', document)
        
        // Now that we have the document, update its count
        updateCount(document.$id, gameType);
    } catch (error) {
        console.error('Failed to fetch document:', error);
    }
}

// Update the count by incrementing it
const updateCount = async (documentId: string, gameType: 'pcgame1' | 'pcgame2' | 'consolegame') => {
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
        const document = await database.getDocument(gamesDatabaseId, collectionId, documentId);
        const newCount = (document.count || 0) + 1;

        // Update the document with the new count
        await database.updateDocument(gamesDatabaseId, collectionId, documentId, { count: newCount });
        console.log('Document updated with new count:', newCount);

        // Optionally, refresh or display the updated data
        fetch(gameType);
    } catch (error) {
        console.error('Failed to update count:', error);
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
		updateCount,
		getDocumentIdAndUpdateCount,
		remove,
	}
}