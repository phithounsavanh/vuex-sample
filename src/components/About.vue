<template>
  <div>
    <Navbar />
    <h1>About page</h1>
    <h2>Count: {{ getCount }}</h2>
    <h2>Default Count + 4: {{ getCountPlusTwo(4) }}</h2>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["getCount", "getCountPlusTwo"]),
  },
};
</script>

<style scoped></style>
