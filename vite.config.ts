import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTest.js']
	},
	resolve: {
		alias: {
			// $src: resolve('./src/'),
			$lib: resolve('./src/lib/')
			// $components: resolve('./src/lib/components/'),
			// $config: resolve('./src/lib/config/'),
			// $enums: resolve('./src/lib/enums')
			// $utils: resolve('./src/lib/utils/'),
			// $static: resolve('./static')
		}
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, './src/lib/index.js'),
			name: 'lbi-common',
			fileName: (format) => `lbi-common.${format}.js`
		}
	}
});
