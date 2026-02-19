// Google Analytics 配置文件
// 将 YOUR_GA_MEASUREMENT_ID 替换为你的 Google Analytics 4 测量 ID
// 格式: G-XXXXXXXXXX

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'YOUR_GA_MEASUREMENT_ID');

// 自定义事件追踪

// 追踪文章阅读进度
function trackReadingProgress(articleId) {
  const articleElement = document.querySelector('.content');
  const progress = (window.scrollY / (articleElement.offsetHeight + articleElement.offsetTop - window.innerHeight)) * 100;

  if (progress > 25) gtag('event', 'reading_progress_25', { 'article_id': articleId });
  if (progress > 50) gtag('event', 'reading_progress_50', { 'article_id': articleId });
  if (progress > 75) gtag('event', 'reading_progress_75', { 'article_id': articleId });
  if (progress > 90) gtag('event', 'reading_progress_90', { 'article_id': articleId });
}

// 追踪工具使用
function trackToolUsage(toolName) {
  gtag('event', 'tool_usage', {
    'tool_name': toolName,
    'event_category': 'Tools',
    'event_label': toolName
  });
}

// 追踪广告点击
function trackAdClick(adSlot) {
  gtag('event', 'ad_click', {
    'ad_slot': adSlot,
    'event_category': 'Monetization'
  });
}

// 追踪外部链接点击
function trackExternalLink(url) {
  gtag('event', 'external_link_click', {
    'link_url': url,
    'event_category': 'Navigation'
  });
}

// 追踪页面加载时间
window.addEventListener('load', function() {
  const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
  gtag('event', 'page_load_time', {
    'value': loadTime,
    'event_category': 'Performance'
  });
});

// 追踪滚动深度
let maxScroll = 0;
window.addEventListener('scroll', function() {
  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  if (scrollPercent > maxScroll) {
    maxScroll = scrollPercent;
    gtag('event', 'scroll_depth', {
      'percent': maxScroll,
      'event_category': 'Engagement'
    });
  }
});

// 追踪返回首页
function trackBackToHome() {
  gtag('event', 'back_to_home', {
    'event_category': 'Navigation'
  });
}
