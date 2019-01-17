module.exports = {
  title: "RTLOC documentation",
  description: "Your guide to our system",
  base: "",
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ["meta", { name: "theme-color", content: "#0c5a9e" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ["meta", { name: "msapplication-TileColor", content: "#0c5a9e" }]
  ],
  // theme: '@vuepress/vue',
  themeConfig: {
    // repo: "RT_LOC/docs", // Shows link in top nav bar
    // editLinks: true,
    // displayAllHeaders: true, // Default: false
    nav: [
      { text: "Home", link: "/" },
      { text: "Install", link: "/install/" },
      { text: "System guide", link: "/guide/" },
      { text: "API", link: "/api/" },
      { text: "Support", link: "https://rtloc.com/customer-support" }
    ],
    // sidebar: 'auto'
    sidebar: {
      "/install/": getInstallSidebar(),
      "/guide/": getGuideSidebar(),
      "/api/": getAPISidebar()
    }
  },
  plugins: [
    '@vuepress/plugin-pagination',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-search',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-last-updated',
        // '@vuepress/pwa',
  ]
};

function getInstallSidebar() {
  return [
    {
      title: "Install guide",
      collapsable: true,
      children: [["hw", "Deploying hardware"], ["sw", "Software setup"]]
    },
    {
      title: "Initial tests",
      collapsable: true,
      children: []
    }
  ];
}

function getGuideSidebar() {
  return [
    {
      title: "PC Software",
      collapsable: true,
      children: [
        ["cxRTLS", "Introduction"],
        ["cxRTLS_concepts", "Concepts"],
        ["cxRTLS_config", "Config"],
        ["cxRTLS_cross", "Cross"],
        ["cxRTLS_fwup", "Firmware Update"],
        ["cxRTLS_license", "License"],
        ["cxRTLS_logconn", "LogConn"],
        ["cxRTLS_replay", "Replay"],
        ["cxRTLS_actions", "Actions"],
        ["cxRTLS_rfprofile", "RF Profile"]
      ]
    },
    {
      title: "Web portal",
      collapsable: true,
      children: [["web", "Set up"]]
    }
  ];
}

function getAPISidebar() {
  return [
    {
      title: "Developer API's",
      collapsable: true,
      children: [""]
    }
  ];
}
