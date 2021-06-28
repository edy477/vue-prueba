<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="row inline justify-between  no-wrap bg-header text-header "  color="header"  height-hint="98">

      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <h1>Logo</h1>
          </q-avatar>
          Logo
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/user/:name/mycourses" label="Available Courses" />
        <q-route-tab to="/page2" label="Continuing Education" />
        <q-route-tab to="/user/:name/mycourses" label="My Courses" />
        <q-route-tab to="/page3" label="Commmunity" />
      </q-tabs>


        <div v-if="loggedIn" class="navbar-nav ml-auto">
          <q-btn color="login" text-color="white" label="Logout" @click="logOut"></q-btn>
        </div>

      <q-toolbar>
        <div v-if="!loggedIn" class="navbar-nav ml-auto">
        <q-btn color="login" text-color="white" label="Login" @click="openDialog"></q-btn>
        </div>
      </q-toolbar>

    </q-header>

    <q-page-container>

      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import  { useQuasar } from 'quasar';
import Register from '../components/Modals/Register';
import {computed} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name: 'HomeLayout',


  setup(){
    const $q = useQuasar();
    const $store = useStore();
    const loggedIn = computed(() => $store.state.auth.status.loggedIn);
    const router = useRouter();
    return{
      loggedIn,
      $store,
      router,

      openDialog(){

        $q.dialog({

          component:Register,
          class: "register",


          // props forwarded to your custom component

        }).onOk(() => {
          console.log('OK')
        }).onCancel(() => {
          console.log('Cancel')
        }).onDismiss(() => {
          console.log('Called on OK or Cancel')
        })

      },
      logOut(){

        $store.dispatch('auth/logout');
        router.push('/');
      }

      }




  }
  /*,
  methods:{

    openDialog(){



      $q.dialog({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        component:Register
      })

    }
  }*/
}

</script>

<style scoped>

</style>
