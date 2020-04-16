<template>
  <div id="app">
    <Card>
      <header>
        <h1>Audio Chat</h1>
        <p>Realtime Voice Chat App</p>
      </header>

      <router-view></router-view>
    </Card>
  </div>
</template>

<script>
// import { auth } from "./firebase";
import Card from "./components/Card";
export default {
  name: "App",
  components: {
    Card
  }
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #e2e1e0;

  header {
    margin-bottom: 2rem;
  }
}
</style>
