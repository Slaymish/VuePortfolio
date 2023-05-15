<template>
  <div class="authBox">
    <div v-if="user">
      <p>Hello {{ user.displayName }}!</p>
      <button @click="authSignOut()">Sign out</button>
    </div>
    <div v-else>
      <p>Not logged in</p>
      <button @click="signInWithGoogle()">Sign in with Google</button>
    </div>
  </div>
</template>

<script lang="ts">
import { OAuthProvider, ProviderId, signInWithPopup, signOut } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { useCurrentUser } from 'vuefire'

export default {
  name: 'AuthComponent',
  setup() {
    const user = useCurrentUser()
    const auth = useFirebaseAuth()

    // make provider
    const provider = new OAuthProvider(ProviderId.GOOGLE)

    // sign in method

    function signInWithGoogle() {
      console.log('signing in')
      if (!auth) return
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    // sign out method
    function authSignOut() {
      if (!auth) return
      signOut(auth)
        .then(() => {
          console.log('signed out')
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return {
      user,
      auth,
      signInWithGoogle,
      authSignOut
    }
  }
}
</script>

<style scoped>
@import '../assets/theme.css';
.authBox {
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem;
  z-index: 100;
}

.authBox button {
  background-color: var(--background-color);
  border: none;
  border-radius: 50%;
  padding: 1rem;
  transition: margin 0.2s ease-in-out;
}

.authBox button p {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: var(--main-color);
}

.authBox button:hover {
  margin-right: 1.5rem;
}
</style>
