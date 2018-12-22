<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link :to="'/posts/' + 1" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            style="background-image: url(https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/46884614_1384686148334577_4282906027105452032_n.jpg?_nc_cat=109&_nc_ht=scontent.fhrk1-1.fna&oh=6bf69c6419ab415dfb8c6aa839414d74&oe=5C9032FA)"
          />
          <div class="post-content">
            <h2>Post Title</h2>
            <p>Text preview</p>
          </div>
        </article>
      </nuxt-link>

      <nuxt-link :to="'/posts/' + 2" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            style="background-image: url(https://scontent.fhrk1-1.fna.fbcdn.net/v/t1.0-9/38935487_1307290946074098_9049361952253411328_n.jpg?_nc_cat=101&_nc_ht=scontent.fhrk1-1.fna&oh=2a5d142ba04c6b298f1721973bfd3b59&oe=5C914B8C)"
          />
          <div class="post-content">
            <h2>Post Title 2</h2>
            <p>Text preview 2</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
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

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
