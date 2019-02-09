module.exports = {
  title: "Documentation",
  description: "Your guide to our system",
  base: "",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
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
  // theme: 'vue',
  // serviceWorker: true,
  themeConfig: {
    // repo: "RT-LOC/docs", // Shows link in top nav bar
    editLinks: true,
    docsDir: "docs",
    docsBranch: "master",
    // displayAllHeaders: true, // Default: false
    lastUpdated: "Last Updated", // string | boolean
    sidebarDepth: 3,
    nav: [
      { text: "Home", link: "/" },
      { text: "Install", link: "/install/" },
      {
        text: "System guide",
        items: [
          { text: "Introduction", link: "/guide/" },
          {
            text: "Core",
            items: [
              { text: "cxRTLS", link: "/cxRTLS/" },
              { text: "Web", link: "/web/" },
              { text: "Embedded/Hardware", link: "/hardware/" }
            ]
          },
          {
            text: "Other",
            items: [
              { text: "Reference", link: "/reference/" },
              { text: "FAQ", link: "/faq/" },
              { text: "Troubleshoot", link: "/troubleshoot/" }
            ]
          }
          // { text: 'cxRTLS',link: '/cxRTLS/'},
          // { text: 'Web',link: '/web/'},
          // { text: 'Embedded/Hardware', link: '/hardware/'},
          // { text: 'Reference', link: '/reference/'},
          // { text: 'PC', items: [
          //   { text: 'cxRTLS', link: '/cxRTLS/' },
          //   // { text: '', link: '/guide/' }
          //   ]
          // }
          // items: [
          //   { text: 'Interfaces', link: '/hardware/hw_interfaces' },
          //   { text: 'Flashing Boards', link: '/hardware/flashing/hw_flashing' }
          //   ]
          // }
        ]
      },
      { text: "API", link: "/api/" },
      { text: "Support", link: "https://rtloc.com/customer-support" }
    ],
    // sidebar: 'auto'
    sidebar: {
      "/install/": getInstallSidebar(),
      "/cxRTLS/": getcxRTLSSidebar(),
      "/hardware/": getHardwareSidebar(),
      "/web/": getWebSidebar(),
      "/api/": getAPISidebar(),
      "/reference/": getReferenceSidebar(),
      "/faq/": getFAQSidebar(),
      "/troubleshoot/": getTroubleshootSidebar()
    }
  },
  plugins: [
    ["@vuepress/medium-zoom", true],
    ["@vuepress/plugin-pagination", true],
    ["@vuepress/plugin-back-to-top", true],
    ["@vuepress/search", true],
    ["@vuepress/medium-zoom", true],
    ["@vuepress/last-updated", true]
    // '@vuepress/pwa',
  ],
  evergreen: true
};

function getInstallSidebar() {
  return [
    {
      title: "Adhoc Distance System",
      collapsable: true,
      children: [
        ["adhoc_getting_started", "Getting Started"],
        ["firststeps", "First steps"],
        // ["anchor_placement", "Anchor Placement"]
      ]
    },
    {
      title: "Positioning System",
      collapsable: true,
      children: [
        ["getting_started", "Getting Started"],
        ["firststeps", "First steps"],
        ["anchor_placement", "Anchor Placement"]
      ]
    }
  ];
}

function getcxRTLSSidebar() {
  return [
    {
      title: "Pages",
      collapsable: true,
      children: [
        ["cxRTLS_config", "Config"],
        ["cxRTLS_cross", "Cross"],
        ["cxRTLS_fwup", "Firmware Update"],
        ["cxRTLS_license", "License"],
        ["cxRTLS_logconn", "LogConn"],
        ["cxRTLS_replay", "Replay"],
        ["cxRTLS_actions", "Actions"],
        ["cxRTLS_adhoc", "Adhoc"]
      ]
    },
    {
      title: "Concepts",
      collapsable: true,
      children: [
        ["cxRTLS_concepts", "Concepts"],
        ["cxRTLS_rfprofile", "RF Profile"]
      ]
    },
    {
      title: "Other",
      collapsable: true,
      children: [
        ["cxRTLS_console", "Console"],
        ["cxRTLS_engine", "Engine"],
        ["cxRTLS_tasks", "Tasks"]
      ]
    }
  ];
}

function getTroubleshootSidebar() {
  return [
    {
      title: "Troubleshoots",
      collapsable: true,
      children: [
        ["/troubleshoot/troubleshoot_enet", "Ethernet"],
        ["/troubleshoot/troubleshoot_embedded", "Embedded"]
        // ["/faq/faq_rf", "RF"],
      ]
    }
  ];
}

function getFAQSidebar() {
  return [
    {
      title: "FAQs",
      collapsable: true,
      children: [
        ["/faq/faq_general", "General"],
        ["/faq/faq_sensors", "Sensors"],
        ["/faq/faq_network", "Network"]
        // ["/faq/faq_rf", "RF"],
      ]
    }
  ];
}

function getAPISidebar() {
  return [
    {
      title: "External (Position data) API's",
      collapsable: true,
      children: [
        ["/api/api_application", "Application"],
        ["/api/api_web", "Web"]
      ]
    },
    {
      title: "Internal API's",
      collapsable: true,
      children: [
        ["/api/api_console", "Console"],
        ["/api/api_firmware", "Firmware"],
        ["/api/api_ble", "BLE"]
      ]
    }
  ];
}

function getWebSidebar() {
  return [
    {
      title: "Web portal",
      collapsable: true,
      children: [["web", "Set up"]]
    }
  ];
}

function getHardwareSidebar() {
  return [
    {
      title: "Building & Flashing",
      collapsable: true,
      // children: [["hardware/flashing/hw_flashing", "Flashing Boards"]]
      children: [
        ["flashing/hw_building", "Building"],
        ["flashing/hw_flashing", "Flashing"],
        ["hw_boards", "Boards"]
      ]
    },
    {
      title: "Interfaces",
      collapsable: true,
      children: [
        ["hw_interface_ble", "BLE"],
        ["hw_interface_usb", "USB"],
        ["hw_interface_uart", "UART"],
        ["hw_interface_can", "CAN"],
        ["hw_interface_sniffer", "Sniffer"]
      ]
    }
  ];
}

function getReferenceSidebar() {
  return [
    {
      title: "Reference",
      collapsable: true,
      children: [
        ["leds", "LED Patterns"],
        ["pinouts", "Pinout"],
        ["glossary", "Glossary"],
        ["algorithms", "Algorithms"],
        ["rf", "RF"],
        ["updaterate", "Update Rate"]
      ]
    }
  ];
}
