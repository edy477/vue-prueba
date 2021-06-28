<template>
<q-card class='no-shadow no-border'>
 <q-card-section horizontal class='no-shadow no-border overflow-hidden-y'>
   <q-form  class='no-border regform' action="#"   @submit="createStudent" method="post">



         <q-input  borderless class='regform__input' label='Full name' stack-label v-model="fullname" placeholder="Enter your full name"  :dense="dense" />
         <q-input borderless class='regform__input' label='Username(Email Address)' stack-label v-model="email" placeholder="Enter your Email"  :dense="dense" />
         <q-input borderless  class='regform__input' label='Your Password' stack-label v-model="pass" placeholder="Enter your Password"  :dense="dense" />

         <q-input borderless class='regform__input' label='Confirm your Passsword' stack-label v-model="ph" placeholder="Confirm your Password"  :dense="dense" />

         <q-select class="q-mb-sm" v-model="country" :options="options" label="Country" />

       <!-- ... -->

       <q-btn class='regform__submit' label="Submit" type="submit" color="submit text-white"/>


   </q-form>


 </q-card-section>
  <q-card-section horizontal>

  </q-card-section>
</q-card>
</template>

<script>

import AuthService from '../../services/auth-service';
import {ref} from 'vue';
import User from "src/models/user";
export default {


  name: 'SignUp',


  setup(){

    const fullname = ref("");
    const email = ref("");
    const pass = ref("");
    const country = ref("");
    let student;

    function  onSubmit(){
      console.log(fullname.value);

    }
    return{
      fullname,
      email,
      student,
      pass,
      options: [
        'Brasil', 'Mexico', 'Peru','Chile','Bolivia','Argentina', 'Greonlandia'
      ],


      onSubmit2(){


      },
      createStudent(){

        student = {
          username: email.value,
          fullname:fullname.value,
          email: email.value,
          password: pass.value,
          roles: ["ROLE_ADMIN"]

        }

        AuthService.register(student).then(response => {
          console.log(response.data);

          }).catch(e => {
          console.log(e);

        });
      }




    }


  }


  }

</script>

<style scoped>

</style>
