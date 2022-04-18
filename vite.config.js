import { defineConfig, preview } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components({
    resolvers: [ElementPlusResolver()],
  }),],
  // 配置IP地址
  server: {
    // host: '172.20.10.4', // IP地址
    host: '0.0.0.0', // IP地址
    port: "8090", // 端口设置
    open: "true",
    // https: "true",
    // cors: "true",
    proxy: {
      '/api': {
        target: 'http://192.168.10.1:8090', // 配置后端端口地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'outDir',
    assetsInlineLimit: 4096, // 小于此阀值的资源将内联为Base 64 编码
    cssCodeSplit: true,
    minify: 'esbuild',
    // sourcemap: 'hidden',
    chunkSizeWarningLimit: 200 // Kb单位，超过此阀值文件会警告

  },
  preview: {
    port: 8888
  },
})
