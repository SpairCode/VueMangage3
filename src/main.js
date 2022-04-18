import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Setting, Location, Document, Menu as IconMenu } from '@element-plus/icons-vue'  // 图标需要分开导入，按需导入图标
import router from './router'
import App from './App.vue'


const app = createApp(App)

// 注册需要使用的图标组件
// app.component("menu", Menu)
app.component("IconMenu", IconMenu)
app.component("setting", Setting)
app.component("location", Location)
app.component("document", Document)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
