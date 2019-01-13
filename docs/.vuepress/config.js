module.exports = {
  title: 'RTLOC documentation',
  description: 'Your guide to our system',
  base: "/docs/",
  head: [
    // ['link', { rel: 'icon', href: `/logo.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0c5a9e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#0c5a9e' }]
  ],
  // theme: '@vuepress/vue',
  themeConfig: {
    repo: 'RT_LOC/docs',
    editLinks: true,
    // docsDir: 'packages/docs/docs',
    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null
  },
  themeConfig: {
    displayAllHeaders: true, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Install', link: '/install/' },
      { text: 'Learn', link: '/learn/' },
      { text: 'System guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Support', link: 'https://rtloc.com/customer-support' },
    ],
    // sidebar: 'auto'
    sidebar: {
        '/install/': [
            '',
            // '/test'
            ['hw', 'Deploying hardware'],
            ['sw', 'Software setup']
        ],
        '/guide/': [
          ''
        ],
        '/api/': [
          ''
        ]
    }
  },
  plugins: ['@vuepress/pwa', '@vuepress/pagination', '@vuepress/back-to-top', '@vuepress/search', '@vuepress/medium-zoom']
}