import { fireEvent, render, screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import GameInput from "./GameInput.vue";
import GameForm from "./GameForm.vue";
import { plugin } from "@formkit/vue";

describe("GameForm", () => {
	test("GameForm should render", async () => {
		await renderSuspended(GameForm, {
			global: {
				plugins: [plugin]
			}
		})
		// const { debug } = render(GameForm)
		// debug()
		expect(screen.queryAllByTestId("game-form")).toBeDefined()
		// expect(screen.queryAllByTestId("game-input")).toBeTruthy()
	})
})

// form should render
// form input should render
// only one input needs to have a value to submit
// when form submits, the input should be cleared
// validation: check if input already exists in list(integration test)
// should probably call an api to return a list of games to choose from
// https://api-docs.igdb.com/#requests
// should display a success message when game is added to list
// should handle errors if submit fails
// should handle error for rate limit 429

