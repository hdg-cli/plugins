import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'

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
		legacy({ // 解决浏览器兼容
			targets: ['defaults', 'not IE 11']
		}),
		AutoImport({
			imports: ['vue', 'vuex', 'vue-router'], // 自动导入vue和vue-router相关函数
			eslintrc: {
				enabled: true, // Default `false`
				filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
			dts: true // 生成 `auto-import.d.ts` 全局声明
		})
	],
	css: {
		postcss: {
			plugins: [
				require('autoprefixer')
			]
		}
	},
	base: './',
	resolve: {
		alias: {
			// 如果报错__dirname找不到，需要安装node，执行npm install @types/node --save-dev
			'@': path.resolve(__dirname, 'src')
		}
	},
	build: { // 生产环境打包配置
		outDir: 'dist',
	},
	server: { // vite开发服务器配置
		https: false,
		port: 8080,
		open: true,
		proxy: {
			'/api': {
				target: 'http://xxx.xxx.xx',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	// 引入第三方的配置
	optimizeDeps: {
		include: []
	}
})
