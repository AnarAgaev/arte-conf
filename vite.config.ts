import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': '/src/Components/',
			'@helpers': '/src/Helpers/',
			'@hooks': '/src/Hooks/',
			'@store': '/src/Store/',
			'@types': '/src/Types/',
			'@sass': '/src/Sass/',
		},
	},
})
