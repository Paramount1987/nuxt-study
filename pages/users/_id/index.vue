<template>
  <h1>A single user, with ID {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate({ params, query }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
