<template>
  <div>
    <Navbar> </Navbar>
    <h1>Home page</h1>
    <h2>Count: {{ getCount }}</h2>
    <button v-on:click="increment(2)">Increment</button>
    <button v-on:click="decrement(2)">Decrement</button>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar: Navbar,
  },
  computed: {
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
  },
};
</script>

<style scoped></style>
