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
      { text: 'System guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Support', link: 'https://rtloc.com/customer-support' },
    ],
    // sidebar: 'auto'
    sidebar: {
      
        '/install/':  getInstallSidebar('Install'),
        '/guide/': getGuideSidebar('cxRTLS'),
        '/api/': getAPISidebar('API'),
        // '/guide/': 
        // {
        //   title: 'cxRTLS',
        //   collapsable: false,
        //   children: [
        //       '',
        //       // '/test'
        //       ['cxRTLS', 'Basics'],
        //       ['cxRTLS_actions', 'Actions'],
        //       ['cxRTLS_concepts', 'Concepts'],
        //       ['cxRTLS_config', 'Config'],
        //       ['cxRTLS_cross', 'Cross'],
        //       ['cxRTLS_fwup', 'Firmware Update'],
        //       ['cxRTLS_license', 'License'],
        //       ['cxRTLS_logconn', 'LogConn'],
        //       ['cxRTLS_replay', 'Replay'],
        //       ['cxRTLS_setup', 'Setup']
        //   ]
        // },

        // {
        //   title: 'Group 1',
        //   collapsable: false,
        //   children: [
        //       '',
        //       // '/test'
        //       ['hw', 'Deploying hardware'],
        //       ['sw', 'Software setup']
        //   ]
        // }
        // '/api/': [
        //   ''
        // ],
    }
  },
  plugins: ['@vuepress/pwa', '@vuepress/pagination', '@vuepress/back-to-top', '@vuepress/search', '@vuepress/medium-zoom']
}

// function getGuideSidebar (groupA, groupB) {
//   return [
//     {
//       title: groupA,
//       collapsable: false,
//       children: 
//       [
//       ['hw', 'Deploying hardware'],
//       ['sw', 'Software setup']
//       ]
//     },
//     {
//       title: groupB,
//       collapsable: false,
//       children: [
//         'frontmatter',
//         'permalinks',
//         'markdown-slot',
//         'global-computed'
//       ]
//     }
//   ]
// }
function getInstallSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: 
      [
      ['hw', 'Deploying hardware'],
      ['sw', 'Software setup']
      ]
    }
  ]
}

function getGuideSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: 
      [
        ['cxRTLS', 'Basics'],
        ['cxRTLS_actions', 'Actions'],
        ['cxRTLS_concepts', 'Concepts'],
        ['cxRTLS_config', 'Config'],
        ['cxRTLS_cross', 'Cross'],
        ['cxRTLS_fwup', 'Firmware Update'],
        ['cxRTLS_license', 'License'],
        ['cxRTLS_logconn', 'LogConn'],
        ['cxRTLS_replay', 'Replay'],
        ['cxRTLS_setup', 'Setup']
      ]
    }
  ]
}

function getAPISidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: 
      [
        ''
      ]
    }
  ]
}