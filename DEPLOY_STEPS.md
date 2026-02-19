# 部署步骤指南

## 1️⃣ 启用 GitHub Pages (手动操作)

由于 API 权限限制，请手动在 GitHub 网页上操作：

### 步骤：

1. **访问设置页面**
   - 打开浏览器，访问:
   - https://github.com/Katherine1919/Blog/settings/pages

2. **配置 Pages**
   - **Source** 选择: `Deploy from a branch`
   - **Branch** 选择: `main`
   - **Folder** 选择: `/ (root)`
   - 点击 **Save**

3. **等待部署**
   - 等待 1-2 分钟
   - 网站将在以下地址上线:
   - https://katherine1919.github.io/Blog/

4. **验证部署**
   - 访问上面的链接
   - 你应该能看到"博客变现助手"网站

### 完成标志
当你看到绿色的 "✓ Your site is live at..." 提示时，说明部署成功。

---

## 2️⃣ 配置 Vercel 部署

Vercel 比 GitHub Pages 更快，提供更好的 CDN。

### 安装 Vercel CLI

```bash
npm i -g vercel
```

### 登录 Vercel

```bash
vercel login
# 选择:
# - Log in with GitHub
# - 在浏览器中授权
```

### 部署到 Vercel

```bash
cd /home/admin/projects/opencode/blog-monetize-helper
vercel --prod
```

按照提示操作:
- Link to existing project? → `No`
- Project name → `blog-monetize-helper` (或自定义)
- Directory → `./`
- Override settings? → `No`

部署完成后，Vercel 会给你一个类似这样的 URL:
```
https://blog-monetize-helper.vercel.app
```

---

## 3️⃣ 第一篇博客文章

创建一个文章页面，介绍博客变现工具。

### 文章文件

创建 `/home/admin/projects/opencode/blog-monetize-helper/article-001.html`:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>如何使用博客变现工具开始赚钱 - 博客变现助手</title>
  <meta name="description" content="详细介绍如何使用博客变现助手工具，通过 Google AdSense 实现博客变现。包含 SEO 优化、文本处理、广告配置等完整指南。">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      color: #333;
      line-height: 1.8;
      padding: 20px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.1);
    }
    .back-link {
      display: inline-block;
      margin-bottom: 20px;
      color: #667eea;
      text-decoration: none;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 20px;
      color: #333;
    }
    .meta {
      color: #666;
      margin-bottom: 30px;
      font-size: 0.9em;
    }
    .content {
      line-height: 1.8;
      color: #444;
    }
    .content h2 {
      font-size: 1.8em;
      margin: 40px 0 20px;
      color: #333;
    }
    .content h3 {
      font-size: 1.4em;
      margin: 30px 0 15px;
      color: #444;
    }
    .content p {
      margin-bottom: 20px;
    }
    .content ul, .content ol {
      margin: 20px 0;
      padding-left: 30px;
    }
    .content li {
      margin-bottom: 10px;
    }
    .content code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: #e74c3c;
    }
    .ad-placeholder {
      background: linear-gradient(135deg, #e5e7eb 0%, #d4d8dd 100%);
      border-radius: 8px;
      padding: 40px;
      color: white;
      text-align: center;
      margin: 40px 0;
    }
    .cta {
      background: #667eea;
      color: white;
      padding: 16px 32px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-block;
      margin-top: 20px;
    }
    .cta:hover {
      background: #764ba2;
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="index.html" class="back-link">← 返回首页</a>

    <h1>如何使用博客变现工具开始赚钱</h1>

    <div class="meta">
      发布日期: 2026-02-19 | 阅读时间: 5 分钟 | 分类: 博客变现
    </div>

    <div class="content">
      <p>你是否有一个博客，但不知道如何变现？Google AdSense 是最简单、最直接的变现方式之一。本文将详细介绍如何使用<strong>博客变现助手</strong>工具，一步步实现你的博客变现梦想。</p>

      <h2>什么是博客变现助手？</h2>
      <p>博客变现助手是一个一站式工具平台，专门为内容创作者和博主设计。它提供了以下核心功能:</p>
      <ul>
        <li><strong>文本处理工具</strong> - 字数统计、标题生成、关键词提取</li>
        <li><strong>SEO 优化工具</strong> - 标题优化、描述优化、Meta 标签生成</li>
        <li><strong>格式化工具</strong> - Markdown 预览、HTML 预览</li>
        <li><strong>AdSense 配置</strong> - 广告代码管理、预览和部署</li>
        <li><strong>博客资源</strong> - 申请指南、优化技巧、变现策略</li>
      </ul>

      <h2>第一步：优化你的博客内容</h2>
      <p>在申请 AdSense 之前，你需要确保你的博客内容质量足够高。使用我们的<strong>SEO 优化工具</strong>来优化每一篇文章:</p>
      <ol>
        <li>在标题输入框中输入你的文章标题</li>
        <li>点击"生成 SEO 建议"</li>
        <li>系统会自动给出:
          <ul>
            <li>优化后的标题 (50-60 字符)</li>
            <li>优化的 Meta 描述 (130-160 字符)</li>
            <li>关键词建议</li>
            <li>完整的 Meta 标签代码</li>
          </ul>
        </li>
      </ol>

      <h2>第二步：撰写高质量内容</h2>
      <p>使用<strong>文本处理工具</strong>来检查你的文章:</p>
      <ul>
        <li><strong>字数统计</strong> - 确保文章长度适中 (建议 800-2000 字)</li>
        <li><strong>关键词密度</strong> - 自然地使用关键词，不要堆砌</li>
        <li><strong>可读性</strong> - 使用短句、分段、标题提高可读性</li>
      </ul>

      <h3>AdSense 内容要求</h3>
      <p>Google AdSense 有明确的内容要求:</p>
      <ul>
        <li>原创内容 (不要复制粘贴)</li>
        <li>有价值、有用的信息</li>
        <li>完整的文章 (不要只有几句话)</li>
        <li>定期更新 (保持博客活跃)</li>
      </ul>

      <h2>第三步：申请 Google AdSense</h2>
      <p>当你有至少 10-15 篇高质量文章后，就可以申请 AdSense 了:</p>
      <ol>
        <li>访问 <a href="https://www.google.com/adsense" target="_blank">Google AdSense</a></li>
        <li>点击"立即注册"</li>
        <li>使用你的 Google 账号登录</li>
        <li>填写网站信息和付款信息</li>
        <li>提交申请</li>
      </ol>

      <div class="ad-placeholder">
        <h3>📢 Google AdSense 广告位</h3>
        <p>申请通过后，你的广告将显示在这里</p>
      </div>

      <h2>第四步：配置广告代码</h2>
      <p>AdSense 审核通过后，你需要添加广告代码到你的网站:</p>
      <ol>
        <li>登录 AdSense 控制台</li>
        <li>创建新的广告单元</li>
        <li>复制广告代码</li>
        <li>使用博客变现助手的<strong>AdSense 配置工具</strong>:
          <ul>
            <li>粘贴广告代码</li>
            <li>点击"保存代码"</li>
            <li>点击"预览效果"</li>
          </ul>
        </li>
        <li>将生成的代码添加到你的博客 HTML 中</li>
      </ol>

      <h2>第五步：优化广告收益</h2>
      <p>AdSense 只是开始，真正的变现需要持续优化:</p>
      <h3>CPM 和 RPM 优化</h3>
      <ul>
        <li><strong>CPM</strong> (Cost Per Mille) - 每 1000 次展示的广告收入</li>
        <li><strong>RPM</strong> (Revenue Per Mille) - 每 1000 次展示的总收入</li>
      </ul>
      <p>提高 RPM 的方法:</p>
      <ul>
        <li>优化广告位置 (顶部、侧边栏、文章中)</li>
        <li>使用响应式广告 (自动适应设备)</li>
        <li>提高页面加载速度</li>
        <li>增加有机流量 (SEO 是关键)</li>
        <li>创建高价值内容 (吸引高 CPC 广告)</li>
      </ul>

      <h2>常见问题解答</h2>

      <h3>Q: 申请 AdSense 需要多长时间？</h3>
      <p>A: 通常 1-2 天，但也可能长达 1-2 周。确保你的博客有高质量内容会加速审核。</p>

      <h3>Q: 被拒绝了怎么办？</h3>
      <p>A: 仔细阅读拒绝原因，通常是内容不足或页面质量问题。继续创作高质量内容，1 个月后可以再次申请。</p>

      <h3>Q: 需要多少流量才能赚钱？</h3>
      <p>A: 这取决于你的博客主题和广告出价。一般来说，1000 日访客可以带来 $10-50 的月收入。随着流量增长，收入会显著提高。</p>

      <h3>Q: AdSense 是唯一的变现方式吗？</h3>
      <p>A: 不是。还有其他方式:
        <ul>
          <li>联盟营销 (Amazon Associates)</li>
          <li>赞助内容</li>
          <li>数字产品销售</li>
          <li>在线课程</li>
          <li>会员订阅</li>
        </ul>
      </p>

      <h2>总结</h2>
      <p>博客变现是一个长期的过程，需要持续的内容创作和 SEO 优化。使用<strong>博客变现助手</strong>工具可以大大简化这个过程，让你专注于创作高质量内容。</p>

      <p>立即开始使用博客变现助手，迈出变现的第一步:</p>

      <a href="index.html" class="cta">🚀 开始使用工具</a>

      <h2>相关资源</h2>
      <ul>
        <li><a href="#">AdSense 官方文档</a></li>
        <li><a href="#">Google 搜索中心</a></li>
        <li><a href="#">SEO 最佳实践指南</a></li>
      </ul>
    </div>
  </div>

  <script>
    // 文章阅读进度追踪
    document.addEventListener('scroll', function() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // 可以将阅读进度发送到 Google Analytics
      console.log('阅读进度:', progress.toFixed(2) + '%');
    });

    // 文章加载时间统计
    const loadTime = window.performance.timing;
    const pageLoadTime = loadTime.loadEventEnd - loadTime.navigationStart;
    console.log('页面加载时间:', pageLoadTime + 'ms');
  </script>
</body>
</html>
```

### 部署第一篇文章

```bash
cd /home/admin/projects/opencode/blog-monetize-helper
git add article-001.html
git commit -m "Add first article: How to monetize your blog"
git push origin main
```

---

## ✅ 完成检查清单

- [ ] GitHub Pages 已启用
- [ ] Vercel 已部署
- [ ] 第一篇文章已发布
- [ ] 网站可以正常访问
- [ ] AdSense 已申请 (可选)

---

**最后更新**: 2026-02-19
