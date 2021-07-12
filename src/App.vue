<template>
  <div id="app" class="container-fluid">
    <div id="nav" class="theme pad-30 bold-link">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --vue-green-color: #42b983;
  --vue-dark-color: #2c3e50;
  --secondary-color: #6c757d;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-wrap: break-word;
}

.margin-bot-10 {
  margin-bottom: 10px;
}

.margin-bot-50 {
  margin-bottom: 50px;
}

.margin-top-50 {
  margin-top: 50px;
}

.title {
  padding: 10px 20px;
  background-color: var(--secondary-color);
  opacity: 0.7;
  color: white;
  font-weight: 700;
  width: 100%;
}

.specialbg {
  background-color: var(--vue-green-color);
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.btn-outline-secondary {
  margin: 20px;
}

.pad-30 {
  padding: 30px;
}

.bold-link a {
  font-weight: bold;
}

.theme a {
  color: var(--vue-dark-color);
}

.theme a.router-link-exact-active,
.theme a:hover {
  color: var(--vue-green-color);
}
</style>
