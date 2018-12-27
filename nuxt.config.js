const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  env: {
    fbAPIKey: 'AIzaSyA6Ytu881VFC0iX2a6NQqOXNu-sb7PGKeM',
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // router: {
  //   middleware: 'log'
  // },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],

  generate: {
    routes: function() {
      return axios.get('https://nuxt-blog-f348d.firebaseio.com/posts.json')
        .then(res => {
          const routes = []
          for (const key in res.data) {
            routes.push({
              route: `/posts/${key}`,
              payload: {postData: res.data[key]}
            })
          }
          return routes
        })
    }
  }
}
