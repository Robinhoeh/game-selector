import { defineVitestConfig } from '@nuxt/test-utils/config'
import vue from '@vitejs/plugin-vue'

export default defineVitestConfig({
	test: {
		environment: "nuxt",
		// include: ["**/*.{test, spec}.?(c|m)[jt]s?(x)"],
		
		//No need to import descibe, it, expect, etc...
		globals: true,
	},
})