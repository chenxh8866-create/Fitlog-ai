# FitLog AI 部署说明

## 1. 先处理旧 Key

之前的 DeepSeek Key 曾经直接写在前端文件里，请先在 DeepSeek 控制台撤销旧 Key，再生成一个新的 Key。

## 2. 上传项目

把整个项目上传到 GitHub，确保 `api/chat.js` 和 `index.html` 在同一个项目根目录下。

## 3. 导入 Vercel

在 Vercel 中 Import Git Repository。项目不需要构建命令，保持默认设置即可。

## 4. 添加环境变量

在 Vercel 项目设置的 Environment Variables 中添加：

```text
DEEPSEEK_API_KEY=你的新 DeepSeek Key
```

添加后重新 Deploy。

## 5. 分享链接

把 Vercel 生成的 `https://xxx.vercel.app` 链接发给体验者，不要发送 `index.html` 文件。

## 6. 上线前检查

打开线上页面并按 F12 查看 Network：

- 请求地址应该是 `/api/chat`
- 页面源码和请求头中不应该出现 `sk-...`
- 关闭或撤销旧 Key，避免旧 Key 继续产生费用

