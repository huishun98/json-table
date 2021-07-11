<template>
  <div id="app" class="container-fluid">
    <div id="nav">
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
