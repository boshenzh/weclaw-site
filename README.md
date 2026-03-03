# SetupClaw 中文版（模板）

一个面向中文用户的 OpenClaw 上手/引导站点模板（Next.js + Tailwind）。目标是像 https://setupclaw.com/ 一样：
- 简洁落地页
- 清晰的上手步骤
- FAQ
- 未来可扩展 docs/案例/入口

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 部署到 Vercel（通过 GitHub）

1. 在 GitHub 新建仓库（例如 `setupclaw-cn`）
2. 把本项目 push 上去
3. Vercel 选择 **New Project** → 选择该仓库 → Deploy

## 可改的地方

- `src/app/page.tsx`：首页内容
- `src/app/docs/page.tsx`：文档占位页
- `src/app/layout.tsx`：站点 title/description

## 下一步建议

- 增加 `/docs/get-started`、`/docs/calendar`、`/docs/messaging` 等中文教程
- 加入 analytics（Vercel Analytics / Plausible）
- 加入表单（收集邮箱/微信）和 CTA
