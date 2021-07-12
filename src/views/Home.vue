<template>
  <div class="container theme">
    <h1>Json to Table</h1>
    <p>
      This website transforms ugly JSON into pretty, readable tables. <br />
      This project is open source and the code is
      <a href="https://github.com/huishun98/json-table" target="_blank"
        >available on Github</a
      >.
    </p>
    <b-form-input
      v-model="queryUrl"
      placeholder="Enter json url"
      class="margin-bot-10"
    ></b-form-input>
    <b-button pill variant="outline-secondary" @click="enter">Convert</b-button>
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
