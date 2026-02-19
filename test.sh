#!/bin/bash

echo "========================================="
echo "🧪 博客变现助手 - 自动化测试"
echo "========================================="
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 测试计数
TOTAL=0
PASSED=0
FAILED=0

# 测试函数
test_case() {
    TOTAL=$((TOTAL + 1))
    local name=$1
    local command=$2
    local expected=$3

    echo -n "测试 $TOTAL: $name ... "
    if eval "$command" | grep -q "$expected"; then
        echo -e "${GREEN}✅ 通过${NC}"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}❌ 失败${NC}"
        FAILED=$((FAILED + 1))
    fi
}

echo "📋 基础结构测试"
echo "----------------------------------------"

test_case "HTML DOCTYPE 声明" "curl -s http://127.0.0.1:8081/" "<!DOCTYPE html>"

test_case "HTML lang 属性" "curl -s http://127.0.0.1:8081/" 'lang="zh-CN"'

test_case "meta charset" "curl -s http://127.0.0.1:8081/" '<meta charset="UTF-8">'

test_case "viewport meta 标签" "curl -s http://127.0.0.1:8081/" 'name="viewport"'

test_case "页面标题" "curl -s http://127.0.0.1:8081/" "博客变现助手"

test_case "Open Graph 标签" "curl -s http://127.0.0.1:8081/" 'property="og:title"'

test_case "Twitter Card 标签" "curl -s http://127.0.0.1:8081/" 'twitter:card'

echo ""
echo "🎨 CSS 样式测试"
echo "----------------------------------------"

test_case "CSS 基础样式" "curl -s http://127.0.0.1:8081/" "<style>"

test_case "渐变背景" "curl -s http://127.0.0.1:8081/" "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"

test_case "响应式媒体查询" "curl -s http://127.0.0.1:8081/" "@media"

echo ""
echo "🔧 功能模块测试"
echo "----------------------------------------"

test_case "导航栏" "curl -s http://127.0.0.1:8081/" 'class="nav"'

test_case "Hero 区域" "curl -s http://127.0.0.1:8081/" 'class="hero"'

test_case "工具网格" "curl -s http://127.0.0.1:8081/" 'class="tools-grid"'

test_case "文本处理工具" "curl -s http://127.0.0.1:8081/" 'id="input-text"'

test_case "SEO 工具" "curl -s http://127.0.0.1:8081/" 'id="seo-title-input"'

test_case "AdSense 配置" "curl -s http://127.0.0.1:8081/" 'id="adsense-code"'

test_case "资源区域" "curl -s http://127.0.0.1:8081/" 'class="resources-grid"'

test_case "Footer" "curl -s http://127.0.0.1:8081/" 'class="footer"'

echo ""
echo "⚡ JavaScript 功能测试"
echo "----------------------------------------"

test_case "Storage 对象" "curl -s http://127.0.0.1:8081/" 'const Storage ='

test_case "processText 函数" "curl -s http://127.0.0.1:8081/" 'function processText()'

test_case "generateSEO 函数" "curl -s http://127.0.0.1:8081/" 'function generateSEO()'

test_case "saveAdCode 函数" "curl -s http://127.0.0.1:8081/" 'function saveAdCode()'

test_case "window.onload 事件" "curl -s http://127.0.0.1:8081/" 'window.onload'

echo ""
echo "🔍 SEO 优化测试"
echo "----------------------------------------"

test_case "meta description" "curl -s http://127.0.0.1:8081/" 'name="description"'

test_case "meta keywords" "curl -s http://127.0.0.1:8081/" 'name="keywords"'

test_case "标题标签" "curl -s http://127.0.0.1:8081/" "<title>"

echo ""
echo "📱 响应式设计测试"
echo "----------------------------------------"

test_case "移动端媒体查询" "curl -s http://127.0.0.1:8081/" "@media (max-width: 768px)"

test_case "平板媒体查询" "curl -s http://127.0.0.1:8081/" "@media (max-width: 480px)"

echo ""
echo "========================================="
echo "📊 测试结果汇总"
echo "========================================="
echo -e "总测试数: $TOTAL"
echo -e "${GREEN}✅ 通过: $PASSED${NC}"
echo -e "${RED}❌ 失败: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 所有测试通过！${NC}"
    exit 0
else
    echo -e "${RED}⚠️  有 $FAILED 个测试失败${NC}"
    exit 1
fi
