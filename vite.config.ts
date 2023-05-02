import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import path from 'path';

export default defineConfig({
	plugins: [
		svelte({ hot: !process.env.VITEST }),
	],
	test: {
		environment: 'jsdom',
		globals: true
	},
	resolve: {
		alias: {
			// $src: resolve('./src/'),
			$lib: resolve('./src/lib/'),
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
		},
		rollupOptions: {
		  // make sure to externalize deps that shouldn't be bundled
		  // into your library
		  external: ['svelte'],
		  output: {
			// Provide global variables to use in the UMD build
			// for externalized deps
			globals: {
			  svelte: 'Svelte'
			}
		  }
		}
	  }
})