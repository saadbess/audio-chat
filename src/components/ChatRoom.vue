<template>
  <main>
    <h3>Welcome to ChatRoom {{ chatId }}</h3>

    <User #user="{ user }">
      <div v-if="user">
        <ul>
          <li v-for="message of messages" :key="message.id">{{ message.text }}</li>
        </ul>

        <input v-model="newMessageText" />

        <button
          :disabled="!newMessageText || loading"
          type="text"
          @click="addMessage(user.uid)"
        >Send</button>
      </div>
      <Login v-else />
    </User>

    <router-link to="/">Back</router-link>
  </main>
</template>

<script>
import User from "./User";
import Login from "./Login";
import { db } from "../firebase";
export default {
  components: {
    User,
    Login
  },
  data() {
    return {
      newMessageText: "",
      loading: false,
      messages: []
    };
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messageCollection() {
      return db.doc(`chats/${this.chatId}`).collection("messages");
    }
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy("createAt").limitToLast(10)
    };
  },
  methods: {
    async addMessage(uid) {
      this.loading = true;

      const { id: messageId } = this.messagesCollection.doc();

      await this.messagesCollection.doc(messageId).set({
        text: this.newMessageText,
        sender: uid,
        createdAt: Date.now()
      });

      this.loading = false;
      this.newMessagetext = "";
    }
  }
};
</script>