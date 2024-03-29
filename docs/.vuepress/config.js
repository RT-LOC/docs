const path = require("path");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { VuetifyLoaderPlugin } = require('vuetify-loader')


const plugins = [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new VuetifyLoaderPlugin()

];

module.exports = {
    title: "RTLOC Documentation",
    description: "Your guide to RTLOC's location intelligence IoT solutions",
    // base: "/docs/",
    head: [
        ["link", { rel: "icon", href: `/img/logo.png` }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["meta", { name: "theme-color", content: "#095A9E" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" }
        ],
        [
            "link",
            { rel: "apple-touch-icon", href: `/icons/apple-touch-icon.png` }
        ],
        [
            "link",
            {
                rel: "mask-icon",
                href: "/icons/safari-pinned-tab.svg",
                color: "#095A9E"
            }
        ],
        [
            "meta",
            {
                name: "msapplication-TileImage",
                content: "/icons/mstile-150x150.png"
            }
        ],
        ["meta", { name: "msapplication-TileColor", content: "#000000" }],
        [
            "script",
            {},
            `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
    analytics.load("6B7vSa8ecCLBUEiWTPbvB5xNfm9aMMSE");
    analytics.page();
    }}();`
        ]
    ],
    plugins: [
        // ["@vuepress/plugin-back-to-top", true],
        ["@vuepress/plugin-back-to-top"],
        [
            "@vuepress/pwa",
            {
                serviceWorker: true,
                updatePopup: true
                    // updatePopup: {
                    //   message: "New content is available.",
                    //   buttonText: "Refresh"
                    // }
            }
        ],
        // ["@vuepress/plugin-pagination", true],
        // ["@vuepress/search", true],
        [
            "@vuepress/search",
            {
                searchMaxSuggestions: 10
            }
        ],
        ["@vuepress/plugin-medium-zoom"],
        ["@vuepress/last-updated"],
        [
            "sitemap",
            {
                hostname: "https://docs.rtloc.com"
            }
        ]
    ],
    // theme: '@vuepress/vue',
    themeConfig: {
        // repo: "RT-LOC/docs", // Shows link in top nav bar
        editLinks: true,
        docsDir: "docs",
        docsBranch: "master",
        // displayAllHeaders: true, // Default: false
        lastUpdated: "Last Updated", // string | boolean
        sidebarDepth: 3,
        nav: [
            // { text: "Get Started", link: "/getstarted/" },
            { text: "Distancing", link: "/distancing/" },
            { text: "Positioning", link: "/positioning/" },
            {
                text: "Software",
                items: [
                    { text: "Introduction", link: "/guide/" },
                    {
                        // text: "Components",
                        items: [
                            { text: "Desktop", link: "/hub/" }, // TODO
                            { text: "Engine / cxRTLS", link: "/manager/" },
                            { text: "Web", link: "/web/" },
                            // { text: "Mobile", link: "/mobile/" },
                            { text: "Devices", link: "/embedded/" }
                        ]
                    }
                    // {
                    //   text: "Other",
                    //   items: [
                    //     { text: "Reference", link: "/reference/" },
                    //     { text: "FAQ", link: "/faq/" },
                    //     { text: "Troubleshoot", link: "/troubleshoot/" }
                    //   ]
                    // }
                    // { text: 'cxRTLS',link: '/cxRTLS/'},
                    // { text: 'Web',link: '/web/'},
                    // { text: 'Embedded/Hardware', link: '/embedded/'},
                    // { text: 'Reference', link: '/reference/'},
                    // { text: 'PC', items: [
                    //   { text: 'cxRTLS', link: '/cxRTLS/' },
                    //   // { text: '', link: '/guide/' }
                    //   ]
                    // }
                    // items: [
                    //   { text: 'Interfaces', link: '/embedded/hw_interfaces' },
                    //   { text: 'Flashing Boards', link: '/embedded/flashing/hw_flashing' }
                    //   ]
                    // }
                ]
            },
            { text: "APIs", link: "/api/" },
            // { text: "API", link: "/api/" },
            {
                text: "Learn more",
                items: [
                    { text: "System Reference", link: "/reference/" },
                    { text: "FAQ", link: "/faq/faq_general" },
                    // { text: "API", link: "/api/" },
                    { text: "Troubleshoot", link: "/troubleshoot/" }
                ]
            },
            { text: "Support", link: "https://rtloc.com/tickets" }
        ],
        // sidebar: 'auto'
        sidebar: {
            // "/getstarted/": getInstallSidebar(),
            "/distancing/": getDistancingSidebar(),
            "/positioning/": getPositioningSidebar(),
            "/mobile/": getMobileSidebar(),
            "/manager/": getcxRTLSSidebar(),
            "/embedded/": getHardwareSidebar(),
            "/api/": getAPISidebar(),
            "/hub/": [{
                title: "Desktop",
                collapsable: false,
                // children: [
                //     ["installation", "Installation"],
                //     ["configuration", "Configuration"],
                //     // ["apps", "App management"],
                //     // ["firmware", "Firmware management"],
                //     // ["license", "License management"]
                // ]
            }],
            "/web/": getWebSidebar(),
            // "/system/web": getWebSidebar(),
            // "/web/": webSideBar,
            // "/api/": getAPISidebar(),
            "/reference/": getReferenceSidebar(),
            "/faq/": getFAQSidebar(),
            "/troubleshoot/": getTroubleshootSidebar()
        }
    },
    evergreen: true,
    configureWebpack: {
        // devtool: devtool,
        plugins: plugins,
        resolve: {
            alias: {
                "@shared": path.join(__dirname, "../../../backend/shared"),
                "@shared-front": path.join(__dirname, "../../../frontends/shared-frontend"),
            }
        },
        module: {
            // rules: [{
            //     test: /\.s(c|a)ss$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         {
            //             loader: 'sass-loader',
            //             // Requires sass-loader@^7.0.0
            //             options: {
            //                 implementation: require('sass'),
            //                 indentedSyntax: true // optional
            //             },
            //             // Requires >= sass-loader@^8.0.0
            //             options: {
            //                 implementation: require('sass'),
            //                 sassOptions: {
            //                     indentedSyntax: true // optional
            //                 },
            //             },
            //         },
            //     ],
            // }, ],
        }
    }
}

// function getInstallSidebar() {
//   return [
//     {
//       title: "Full RTLS setup",
//       collapsable: true,
//       children: [
//         // ["pro_positioning_introduction", "Introduction"],
//         ["pro_positioning_getting_started", "Getting Started"],
//         ["trying_demo_replays", "Demo Replays"],
//         // ["firststeps", "First steps"],
//       ]
//     },
//     {
//       title: "Basic positioning",
//       collapsable: true,
//       children: [
//         // ["distance_tracking_getting_started", "Getting Started"],
//         ["basic_positioning_introduction", "Introduction"],
//         ["basic_positioning_getting_started", "Initial Setup"],
//         ["basic_positioning_next", "What's Next"],

//         // ["firststeps", "First steps"]
//         // ["anchor_placement", "Anchor Placement"]
//       ]
//     },
//     {
//       title: "Distance Tracking",
//       collapsable: true,
//       children: [
//         ["distance_tracking_introduction", "Introduction"],
//         ["distance_tracking_getting_started", "Getting Started"],
//         // ["firststeps", "First steps"]
//         // ["anchor_placement", "Anchor Placement"]
//       ]
//     },
//   ];
// }
function getMobileSidebar() {
    return [{
        title: "Mobile app",
        collapsable: false,
        children: [
            ["connecting", "Connecting devices"],
            ["sending-data", "Sending Data"],
            ["firmware", "Firmware update"],
            ["characteristics", "Device configuration"],
            ["viewing-data", "Viewing data"]
        ]
    }]
}

function getDistancingSidebar() {
    return [
        // {
        //   title: "Getting started",
        //   collapsable: true,
        //   children: [
        //     ["distance_intro_setup", "Device set up"],
        //     ["accessing_data", "Accessing data"],
        //   ]
        // },
        ["getting_started", "Getting started"],
        ["distancing_lib", "Library"],
        {
            title: "APIs",
            collapsable: true,
            children: [
                ["ble_api", "Tag BLE API"],
                ["gateway_desktop", "Gateway backhaul"]
                // ["gateway_raw", "Gateway data"],
            ]
        },
        ["theory", "Theoretical remarks"]
        // ["software_guide", "Software guide"]
    ]
}

function getPositioningSidebar() {
    return [
        // {
        //   title: "Basic positioning",
        //   collapsable: true,
        //   children: [
        //     // ["distance_tracking_getting_started", "Getting Started"],
        //     ["basic_positioning_introduction", "Introduction"],
        //     ["basic_positioning_getting_started", "Initial Setup"],
        //     ["basic_positioning_next", "What's Next"],

        //     // ["firststeps", "First steps"]
        //     // ["anchor_placement", "Anchor Placement"]
        //   ]
        // },
        ["1_positioning_getting_started", "1. Getting started"],
        ["2_configuration", "2. Configuration"],
        // {
        //   title: "Initial testing",
        //   collapsable: false,
        //   children: [
        //     ["positioning_getting_started", "Getting Started"],
        //     ["trying_demo_replays", "Demo Replays"],
        //   ]
        // },
        {
            title: "Setup finetuning",
            collapsable: true,
            children: [
                ["anchor_placement", "Anchor Placement"],
                ["redundancy", "Redundancy"],
                ["updaterate", "On update Rate"]
            ]
        },
        // {
        //     title: "APIs",
        //     collapsable: true,
        //     children: [
        //         ["apis_overview", "APIs overview"],
        //         ["json_apis", "JSON over Websocket/MQTT"],
        //         ["binary_apis", "Binary socket connection"]
        //     ]
        // },
        ["rtls_remarks", "Theoretical remarks"],
        ["software_guide", "Software guide"]
    ]
}

function getcxRTLSSidebar() {
    return [
        // ['', 'Main functionality'],
        {
            title: "Main functionality",
            collapsable: true,
            children: [
                ["cxRTLS_layout", "Program layout"],
                ["cxRTLS_config", "Config"],
                ["cxRTLS_cross", "Cross"],
                ["cxRTLS_fwup", "Firmware Update"],
                ["cxRTLS_logconn", "Connection log"],
                ["using_replays", "Using Replays"]
                // ["cxRTLS_replay", "Recording Replays"]
                // ["cxRTLS_adhoc", "Adhoc"]
            ]
        },
        {
            title: "Advanced",
            collapsable: true,
            children: [
                ["cxRTLS_license", "License"],
                ["cxRTLS_actions", "Actions"],
                ["cxRTLS_console", "Console"],
                ["cxRTLS_engine", "Engine"],
                ["cxRTLS_tasks", "Tasks"],
                ["cxRTLS_concepts", "Concepts"],
                ["cxRTLS_rfprofile", "RF Profile"]
            ]
        }
    ]
}

function getTroubleshootSidebar() {
    return [{
        title: "Troubleshooting",
        collapsable: true,
        children: [
            ["/troubleshoot/troubleshoot_enet", "Ethernet"],
            ["/troubleshoot/troubleshoot_embedded", "Firmware"]
            // ["/faq/faq_rf", "RF"],
        ]
    }]
}

function getFAQSidebar() {
    return [{
        title: "FAQs",
        collapsable: true,
        children: [
            ["/faq/faq_general", "General"],
            ["/faq/faq_sensors", "Sensors"],
            ["/faq/faq_network", "Network"]
            // ["/faq/faq_rf", "RF"],
        ]
    }]
}

function getAPISidebar() {
    return [{
            title: "Live data interfaces",
            collapsable: false,
            children: [
                ["/api/api_engine_local_bin", "Local Binary data (TCP & UDP)"],
                ["/api/api_engine_local_mqtt", "Local JSON data (MQTT)"],
                ["/api/api_engine_cloud_mqtt", "Cloud JSON data (MQTT)"],
                // ["/api/api_local", "Local connection"],
                // ["/api/api_cloud", "Cloud live data"],
                // ["/api/api_web", "MQTT JSON packets"],
                // ["/api/api_application", "TCP Binary packets"],
                // ["/api/api_conns", "Connection types"]
            ]
        },
        // {
        //     title: "Meta data",
        //     collapsable: false,
        //     children: [["/api/api_rest", "REST (meta data) API"]]
        // },
        // {
        {
            title: "Device interfaces",
            collapsable: false,
            children: [
                ["/api/api_uart", "Serial (UART)"],
                ["/api/api_console", "Console (CLI)"],
                ["/api/api_firmware", "Firmware library"],
                ["/api/api_ble", "BLE service(s)"]
            ]
        }
    ]
}

// const webSideBar = [
function getWebSidebar() {
    return [
        ["", "Web portal"],
        {
            title: "Configuration",
            collapsable: false,
            children: [
                // ['', 'Introduction'],
                // ["user", "User accounts"],
                ["client", "Clients and projects"],
                ["data", "Live data"],
                ["devices_assets", "Devices and Assets"]
                // ["/web/viewer", "Viewer"],
                // ["/web/data", "Data control"]
            ]
        },
        {
            title: "Functionality",
            collapsable: false,
            children: [
                ["viewer", "Local positions"],
                // ["viewer", "Proximity ranging"],
            ]
        },
        // {
        //     title: "BLE",
        //     collapsable: false,
        //     children: [
        //         ["ble_introduction", "Introduction"]
        //         // ["ble_monitor", "Monitor"],
        //         // ["ble_visualise", "Visualise"],
        //         // ["ble_configure", "Configure"],
        //         // ["data", "Data control"],
        //     ]
        // }
    ]
}

function getHardwareSidebar() {
    return [{
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
    ]
}

// function getReferenceSidebar() {
//   return [
//     {
//       title: "Reference",
//       collapsable: false,
//       children: [
//         ["terminology", "Terminology"],
//         ["updaterate", "Update Rate"],
//         ["anchor_placement", "Anchor Placement"],
//         ["redundancy", "Redundancy"]
//       ]
//     }
//   ];
// }

function getReferenceSidebar() {
    return [{
            title: "Technology details",
            collapsable: true,
            children: [
                ["rf", "UWB and other RF"],
                ["algorithms", "Positioning algorithms"]
            ]
        },
        // {
        //   title: "Setup reference",
        //   collapsable: true,
        //   children: [
        //     ["anchor_placement", "Anchor Placement"],
        //     ["redundancy", "Redundancy"],
        //     ["updaterate", "Update Rate: a note"]
        //   ]
        // },
        {
            title: "Software reference",
            collapsable: true,
            children: [
                ["fwupdate", "Updating firmware"]
            ]
        },
        {
            title: "Hardware reference",
            collapsable: true,
            children: [
                ["pinouts", "Pinout"],
                ["leds", "LED Patterns"]
            ]
        },
        ["terminology", "Terminology"]
    ]
}