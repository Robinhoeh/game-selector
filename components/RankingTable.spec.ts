import RankingTable from './RankingTable.vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen, fireEvent, render } from '@testing-library/vue'

const mockRowData = [
	{
		id: 1,
		title: "John Doe",
	},
	{
		id: 2,
		title: "Jane Doe",
	}

]

describe("RankingTable", () => {
	test("RankingTable should render", async () => {
		await render(RankingTable)
		expect(await screen.findByTestId("ranking-table")).toBeDefined()
	})

	// test("RankingTable should render with data", async () => {
	// 	await render(RankingTable, {
	// 		props: {
	// 			rows: mockRowData
	// 		}
	// 	})
	// 	expect(await screen.findByText("John Doe")).toBeDefined()
	// 	expect(await screen.findByText("Jane Doe")).toBeDefined()
	// })
})

// ensure when vote icon is clicked, it calls a function
