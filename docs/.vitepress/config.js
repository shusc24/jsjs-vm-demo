

module.exports = {
  title: 'vm机制',
  description: 'vm机制',
  repo: '',
  ignoreDeadLinks: true,
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    lastUpdatedText: '更新时间',
    siteTitle: 'vm机制',
    outlineTitle: '目录',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Yinzhuo19970516/vue-template' }],
    sidebar: {
      '/page/': [
        {
          text: '文档',
          items: [
            {
              text: 'checkList',
              link: '/page/checkList',
            },
            {
              text: "机制说明",
              items: [
                {
                  text: '声明机制',
                  link: '/page/声明机制',
                },
                {
                  text: 'scope',
                  link: '/page/scope',
                }
              ]
            },
          ],
        },
      ],
    },
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    lineNumbers: true,
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    config:(md)=>{
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-task-lists'))
    }
  }
};
