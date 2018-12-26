import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },

      addPost(state, post) {
        state.loadedPosts.push(post);
      },

      editedPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost
      },

      setToken(state, token) {
        state.token = token
      },

      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-f348d.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },

      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }

        return axios.post(`https://nuxt-blog-f348d.firebaseio.com/posts.json?auth=${vuexContext.state.token}`, createdPost)
          .then(res => {
            vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
          })
          .catch(e => console.log('err', e))
      },

      editPost(vuexContext, editedPost) {
        return axios.put(`https://nuxt-blog-f348d.firebaseio.com/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
          .then(res => {
            vuexContext.commit('editedPost', editedPost)
          })
          .catch(e => console.log('error', e))
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },

      authenticatedUser(vuexContext, authData) {
        let authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbAPIKey}`
        if (!authData.isLogin) {
          authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbAPIKey}`
        }

        return axios
          .post(authURL,
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            }
          )
          .then(result => {
            const { data: { idToken, expiresIn } } = result

            vuexContext.commit('setToken', idToken)

            localStorage.setItem('token', idToken)
            localStorage.setItem('tokenExpiraton', new Date().getTime() + expiresIn * 1000)

            vuexContext.dispatch('setLogoutTimer', expiresIn * 1000)
          })
          .catch(e => console.log("error", e));
      },

      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },

      initAuth(vuexContext) {
        const token = localStorage.getItem('token')
        const expirationDate = localStorage.getItem('tokenExpiration')

        if (new Date().getTime() > +expirationDate || !token) {
          return
        }
        vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
        vuexContext.commit('setToken', token)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },

      isAutheticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
