<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview
        id="1"
        title="Title 1"
        previewText="preview text 1"
        thumbnail="https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/46884614_1384686148334577_4282906027105452032_n.jpg?_nc_cat=109&_nc_ht=scontent.fhrk1-1.fna&oh=6bf69c6419ab415dfb8c6aa839414d74&oe=5C9032FA"
      />
      <PostPreview
        id="2"
        title="Title 2"
        previewText="preview text 2"
        thumbnail="https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/46884614_1384686148334577_4282906027105452032_n.jpg?_nc_cat=109&_nc_ht=scontent.fhrk1-1.fna&oh=6bf69c6419ab415dfb8c6aa839414d74&oe=5C9032FA"
      />
      <PostPreview
        id="3"
        title="Title 3"
        previewText="preview text 3"
        thumbnail="https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/46884614_1384686148334577_4282906027105452032_n.jpg?_nc_cat=109&_nc_ht=scontent.fhrk1-1.fna&oh=6bf69c6419ab415dfb8c6aa839414d74&oe=5C9032FA"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
