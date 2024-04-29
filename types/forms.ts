export { }

declare global {
	interface GameData{
		game_title: string
		game_type: 'pcgame1' | 'pcgame2' | 'consolegame'
		pcgame1: string
		pcgame2: string
		consolegame: string
	}


}
