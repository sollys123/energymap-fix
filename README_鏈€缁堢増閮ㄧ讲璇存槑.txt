电力市场热力图 - 稳定静态版

首发部署：把整个文件夹上传到 GitHub Pages 仓库。

以后更新：
1. 打开网页进入编辑模式。
2. 修改完内容后，点击“发布数据”或弹窗里的“导出发布数据（site-data.js）”。
3. 把导出的 site-data.js 覆盖仓库里的 data/site-data.js。
4. 不需要改 index.html / app.js / styles.css / vendor / maps。

备份与恢复：
- 导出备份 JSON：留档或跨设备迁移。
- 导入数据：支持 JSON 备份和 site-data.js。
- 恢复到已发布版本：清空当前浏览器草稿并回到 data/site-data.js。

结构说明：
- index.html：入口页面
- styles.css：已编译好的样式
- app.js：已编译好的主逻辑
- data/site-data.js：你后续唯一需要替换的发布文件
- vendor/：本地化依赖（React / ReactDOM / ECharts）
- maps/：本地化全国/省级地图文件

这版已经去掉了线上不稳定的关键来源：
- 不再依赖远程 CDN
- 不再在浏览器端运行 Babel
- 不再通过 fetch 在线拉地图
- 本地和 GitHub Pages 都走同一套静态文件
