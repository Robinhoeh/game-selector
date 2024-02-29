import RankingTable from './RankingTable.vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen, fireEvent, render } from '@testing-library/vue'

describe("RankingTable", () => {
	test("RankingTable should render", async () => {
		await render(RankingTable)
		expect(await screen.findByTestId("ranking-table")).toBeDefined()
	})

	test("arrow icon button calls a function", async () => {
		await render(RankingTable)
		// call function when arrow icon is clicked

		
	})
})

// ensure when vote icon is clicked, it calls a function
