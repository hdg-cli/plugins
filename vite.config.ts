import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		styleImport({
			libs: [
				{
					libraryName: 'vant',
					esModule: true,
					resolveStyle: (name) => `vant/es/${name}/style`,
				},
			],
		}),
	],
	base: './',
	resolve: {
		alias: {
			// 如果报错__dirname找不到，需要安装node，执行npm install @types/node --save-dev
			'@': path.resolve(__dirname, 'src')
		}
	},
	build: {
		outDir: 'dist',
	},
	server: {
		https: false,
		port: '8080',
		open: true,
		proxy: {
			
		}
	},
	// 引入第三方的配置
	optimizeDeps: {
		include: []
	}
})
