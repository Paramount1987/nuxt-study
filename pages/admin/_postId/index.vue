<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Maximilian',
        title: 'My awesome post',
        content: 'Super amazing, thankr for that!',
        thumbnailLink: 'https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/46884614_1384686148334577_4282906027105452032_n.jpg?_nc_cat=109&_nc_ht=scontent.fhrk1-1.fna&oh=6bf69c6419ab415dfb8c6aa839414d74&oe=5C9032FA'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
