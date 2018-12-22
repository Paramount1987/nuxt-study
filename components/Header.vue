<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts">Posts</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
  }

  .nav-items {
    width: 80%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
