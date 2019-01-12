module.exports = {
  title: 'RTLOC documentation',
  description: 'Your guide to our system',
  base: "/docs/",
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Install', link: '/install/' },
        { text: 'API', link: '/api/' },
        { text: 'support', link: 'https://rtloc.com/support' },
      ],
      sidebar: 'auto'
      // sidebar: {
      //     '/install/': [
      //         '',
      //         'Second'
      //     ]
      // }
  },
  plugins: ['@vuepress/pwa']
}