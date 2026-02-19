# GitHub 部署指南

## ✅ 已完成

- ✅ Git 配置完成 (user.name: KK, user.email: admin@openclaw.ai)
- ✅ 仓库已初始化
- ✅ 代码已提交 (commit: bb63dce)
- ✅ 4 个文件已提交:
  - README.md
  - TEST_REPORT.md
  - index.html
  - test.sh

## 📋 下一步操作 (手动完成)

### 方式 1: 使用 GitHub CLI (推荐)

```bash
# 1. 登录 GitHub
gh auth login
# 按照提示选择:
# - GitHub.com
# - HTTPS
# - Login with a web browser

# 2. 创建仓库并推送
gh repo create blog-monetize-helper --public --source=. --remote=origin --push
```

### 方式 2: 手动创建仓库 (备选)

#### 步骤 1: 在 GitHub 创建仓库
1. 访问: https://github.com/new
2. 仓库名称: `blog-monetize-helper`
3. 选择 Public 或 Private
4. 不要初始化 README、.gitignore 或 license (已经有了)
5. 点击 "Create repository"

#### 步骤 2: 推送代码
```bash
cd /home/admin/projects/opencode/blog-monetize-helper

# 添加远程仓库 (替换 YOUR_USERNAME 为你的 GitHub 用户名)
git remote add origin https://github.com/YOUR_USERNAME/blog-monetize-helper.git

# 重命名分支为 main (可选，但推荐)
git branch -M main

# 推送代码
git push -u origin main
```

## 🎯 验证部署

推送完成后，访问你的仓库:
```
https://github.com/YOUR_USERNAME/blog-monetize-helper
```

你应该能看到:
- 4 个文件
- README.md 的预览
- TEST_REPORT.md 的预览
- index.html 的代码

## 📦 下一步: 启用 GitHub Pages

### 方式 1: 通过 GitHub 网页界面
1. 进入仓库 → Settings
2. 左侧菜单 → Pages
3. Source 选择: Deploy from a branch
4. Branch 选择: main / (root)
5. 点击 Save

等待 1-2 分钟，你的网站将在:
```
https://YOUR_USERNAME.github.io/blog-monetize-helper/
```

### 方式 2: 使用 GitHub CLI
```bash
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/YOUR_USERNAME/blog-monetize-helper/pages \
  -f build_type='legacy' \
  -f source[branch]=main
```

## 🔗 当前状态

```bash
# 查看当前状态
cd /home/admin/projects/opencode/blog-monetize-helper
git status
git log --oneline
```

## ⚡ 快速推送 (如果已创建仓库)

```bash
# 替换 YOUR_USERNAME
cd /home/admin/projects/opencode/blog-monetize-helper
git remote add origin https://github.com/YOUR_USERNAME/blog-monetize-helper.git
git branch -M main
git push -u origin main
```

## 📌 注意事项

1. **GitHub Token**: 如果使用 HTTPS，可能需要 Personal Access Token
2. **SSH 方式**: 更安全，推荐配置 SSH key
3. **私有仓库**: 如需私有，在创建时选择 Private

## 🚀 部署后建议

1. 设置自定义域名 (可选)
2. 配置 GitHub Actions 自动化测试
3. 添加 LICENSE 文件
4. 配置 GitHub Topics 标签

---

**准备完成时间**: 2026-02-19 09:35:00
