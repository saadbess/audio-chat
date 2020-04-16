<template>
  <div>
    <h3>Home</h3>
    <User v-slot:user="{ user }">
      <div v-if="user">
        <UserProfile :user="user" />

        <ChatList :uid="user.uid" />
      </div>

      <Login v-else />
    </User>
  </div>
</template>

<script>
import Login from "../components/Login";
import User from "../components/User";
import UserProfile from "../components/UserProfile";
import ChatList from "../components/ChatList";
export default {
  name: "Home",
  components: {
    Login,
    User,
    UserProfile,
    ChatList
  }
};
</script>