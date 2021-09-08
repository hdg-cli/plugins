import { createStore } from 'vuex'

let modules = {}

// 导入 modules 下面的 所有 .ts文件
const modulesFiles = import.meta.globEager("./modules/*.ts")

for(const path in modulesFiles) {
	const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
	modules = {...modules, [moduleName]:modulesFiles[path].default}
}

// console.log('modules', modules)

export default createStore({
    state: {},
		mutations: {},
		actions: {},
    modules: modules
})

