<template>
  <div>
    <div>
      <Navbar />
      <h1>Profile page</h1>
      <h2>Count: {{ getCount }}</h2>
    </div>
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
    ...mapGetters(["getCount"]),
  },
};
</script>

<style scoped></style>
