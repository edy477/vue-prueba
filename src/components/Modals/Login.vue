<template>
  <q-card class='no-shadow no-border'>
    <q-card-section horizontal class='no-shadow no-border'>
      <q-form  class='no-border regform' action="#"   @submit="handleLogin" method="post">



        <q-input borderless class='regform__input' label='Username(Email Address)' stack-label v-model="username" placeholder="Enter your Email"  :dense="dense" />

        <q-input borderless class='regform__input' label='Confirm your Passsword' stack-label v-model="password" placeholder="Confirm your Password"  :dense="dense" />



        <!-- ... -->

        <q-btn class='regform__submit' label="Submit" type="submit" color="submit text-white"/>


      </q-form>


    </q-card-section>

    <q-card-section horizontal>


    </q-card-section>
  </q-card>
</template>

<script>
import User from "src/models/user";
import {ref, computed} from 'vue';
import { useStore } from 'vuex';

import { useRouter } from 'vue-router';

export default {
  name: 'Login',

  setup() {
    const $store = useStore();
    const username = ref("");
    const password = ref("");

   /* const $loggedIn = computed({
      get: () => $store.state.auth.status.loggedIn
    })*/

    const loggedIn = computed(() => $store.state.auth.status.loggedIn);
    const router = useRouter();

    return {
    $store,
      router,
      loggedIn,
      username,
      password,


      handleLogin() {
        const user = new User(username.value, password.value);
        console.log(user);

        if (user.username && user.password) {
          $store.dispatch('auth/login', user).then(
            () => {
              router.push("/user/:"+user.username);
              console.log("Success");
              // this.$router.push('/profile');
            },
            error => {

              console.log(error.toString());
              //this.loading = false;
              // this.message =
              //  (error.response && error.response.data) ||
              //  error.message ||
              //  error.toString();
            }
          );
        }

      }
    }
  }}




</script>

<style scoped>

</style>
