<template>
  <div class="container theme">
    <h1>JSON to Table</h1>
    <p class="p">
      This website transforms ugly JSON into pretty, readable tables. Best viewed on desktop.<br />
      This project is open source and the code is
      <a href="https://github.com/huishun98/json-table" target="_blank"
        >available on Github</a
      >.
    </p>
    <p class="p">
      To use this tool, either: <br />
      1. Enter the JSON API endpoint in the input field below and convert, or <br />
      2. Prepend "https://huishun98.github.io/json-table/" to the JSON API endpoint and search using the web browser's address bar.
    </p>
    <b-form-input
      v-model="queryUrl"
      placeholder="Enter json url"
    ></b-form-input>
    <b-button squared variant="outline-secondary" @click="enter">Convert</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloW orld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      queryUrl: "",
    };
  },
  methods: {
    enter() {
      if (this.queryUrl.length > 0) {
        this.$router.push({ name: "Url", params: { queryUrl: this.queryUrl } });
      } else {
        alert("Please enter a URL!");
      }
    },
  },
};
</script>
