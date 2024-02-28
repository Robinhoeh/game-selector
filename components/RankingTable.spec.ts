import RankingTable from './RankingTable.vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen, fireEvent, render } from '@testing-library/vue'

describe("RankingTable", () => {
	test("RankingTable should render", async () => {
		await render(RankingTable)
		expect(await screen.findByTestId("ranking-table")).toBeDefined()
	})
})

// ensure when vote icon is clicked, it calls a function
