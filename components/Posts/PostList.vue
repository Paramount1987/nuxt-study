<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="Title 1"
      previewText="preview text 1"
      thumbnail="https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/46884614_1384686148334577_4282906027105452032_n.jpg?_nc_cat=109&_nc_ht=scontent.fhrk1-1.fna&oh=6bf69c6419ab415dfb8c6aa839414d74&oe=5C9032FA"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Title 2"
      previewText="preview text 2"
      thumbnail="https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/46884614_1384686148334577_4282906027105452032_n.jpg?_nc_cat=109&_nc_ht=scontent.fhrk1-1.fna&oh=6bf69c6419ab415dfb8c6aa839414d74&oe=5C9032FA"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Title 3"
      previewText="preview text 3"
      thumbnail="https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/46884614_1384686148334577_4282906027105452032_n.jpg?_nc_cat=109&_nc_ht=scontent.fhrk1-1.fna&oh=6bf69c6419ab415dfb8c6aa839414d74&oe=5C9032FA"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
