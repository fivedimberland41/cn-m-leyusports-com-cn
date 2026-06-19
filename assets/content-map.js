const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["乐鱼体育", "首页推荐", "热门赛事"],
      keywords: ["乐鱼体育", "体育赛事", "直播"],
      content: "欢迎来到乐鱼体育平台，获取最新体育资讯。"
    },
    {
      id: "sports",
      title: "体育赛事",
      tags: ["乐鱼体育", "足球", "篮球", "网球"],
      keywords: ["乐鱼体育", "足球联赛", "NBA", "网球公开赛"],
      content: "涵盖各类体育赛事，提供实时比分和赛程。"
    },
    {
      id: "news",
      title: "新闻资讯",
      tags: ["乐鱼体育", "体育新闻", "行业动态"],
      keywords: ["乐鱼体育", "转会消息", "赛事回顾"],
      content: "第一时间获取体育界最新新闻与深度报道。"
    },
    {
      id: "live",
      title: "直播中心",
      tags: ["乐鱼体育", "直播", "高清直播"],
      keywords: ["乐鱼体育", "赛事直播", "高清信号"],
      content: "高清直播各类体育赛事，不错过任何精彩瞬间。"
    }
  ],
  siteUrl: "https://cn-m-leyusports.com.cn"
};

function searchSections(query) {
  if (!query || typeof query !== "string") {
    return [];
  }
  const lowerQuery = query.toLowerCase().trim();
  const results = [];
  for (const section of contentMap.sections) {
    const matchTitle = section.title.toLowerCase().includes(lowerQuery);
    const matchTags = section.tags.some((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );
    const matchKeywords = section.keywords.some((keyword) =>
      keyword.toLowerCase().includes(lowerQuery)
    );
    if (matchTitle || matchTags || matchKeywords) {
      results.push(section);
    }
  }
  return results;
}

function getSectionById(id) {
  if (!id || typeof id !== "string") {
    return null;
  }
  for (const section of contentMap.sections) {
    if (section.id === id) {
      return section;
    }
  }
  return null;
}

function listAllTags() {
  const tagsSet = new Set();
  for (const section of contentMap.sections) {
    for (const tag of section.tags) {
      tagsSet.add(tag);
    }
  }
  return Array.from(tagsSet);
}

function listAllKeywords() {
  const keywordsSet = new Set();
  for (const section of contentMap.sections) {
    for (const keyword of section.keywords) {
      keywordsSet.add(keyword);
    }
  }
  return Array.from(keywordsSet);
}

export { contentMap, searchSections, getSectionById, listAllTags, listAllKeywords };