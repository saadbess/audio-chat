<template>
  <div>
    <h3>Home</h3>
    <User v-slot:user="{ user }">
      <div v-if="user">
        <UserProfile :user="user" />
      </div>

      <Login v-else />
    </User>
  </div>
</template>

<script>
import Login from "../components/Login";
import User from "../components/User";
import UserProfile from "../components/UserProfile";
export default {
  name: "Home",
  components: {
    Login,
    User,
    UserProfile
  }
};
</script>