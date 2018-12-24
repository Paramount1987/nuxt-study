<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm
        @submit="onSubmitted"
      />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      axios.post('https://nuxt-blog-f348d.firebaseio.com/posts.json', postData)
        .then(res => console.log('res', res))
        .catch(e => console.log('err', e))
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
