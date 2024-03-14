export { };

declare global {
	interface Columns {
	key: string
	label: string
  }

  interface PcGames1 {
    id: number
	  title: string
	  count: number
  }

  interface PcGames2 {
    id: number
    title: string
  }

  interface ConsoleGames {
    id: number
    title: string
  }
}
