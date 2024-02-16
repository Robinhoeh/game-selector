import { fireEvent, render, screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { mount } from "@vue/test-utils"
// import GameInput from "./GameInput.vue";
import GameForm from "./GameForm.vue";
import { plugin } from "@formkit/vue";
import config from '../formkit.config'

// describe("GameForm", () => {
// 	test("GameForm should render", async () => {
// 		mount(
// 			{
// 				template: '<GameForm />',
// 			},
// 			{
// 				global: {
// 					plugins: [[plugin, config]],
// 				},
// 			}
// 		)
// 		// const { debug } = render(GameForm)
// 		// debug()
// 		// expect(screen.getByTestId("game-form")).toBeDefined()
// 		expect(GameForm).toBeTruthy()
// 		// expect(screen.getAllByTestId("game-form")).toBeTruthy()
// 		// expect(screen.queryAllByTestId("game-input")).toBeTruthy()
// 	})
// })

describe("GameForm", () => {
	test("GameForm should render", async () => {
		const wrapper = mount(GameForm, {
			global: {
				plugins: [[plugin, config]],
			},
		})
			
		
		// const { debug } = render(GameForm)
		// debug()
		// expect(screen.getByTestId("game-form")).toBeDefined()
		expect(wrapper.find('[data-test-id="game-form"]').exists()).toBe(true)
		// expect(screen.getAllByTestId("game-form")).toBeTruthy()
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

