<template>
  <q-page class="flex flex-center">


      <div class="allcoureses">
        <q-intersection
          v-for="course in refCourse"
          :key="course.id"
          class="courses"
        >
          <q-card class="course">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section class="xl">
              <div class="text-h6">Card #{{ course.category }}</div>
              <div class="text-subtitle2">{{ course.courseName }}</div>
              <div class="text-subtitle2">{{ course.description }}</div>
              <q-badge color="white" class="q-pl-none">

                <q-avatar size="16px">

                  <img src="../../assets/start.svg" width="16px" height="15px">

                </q-avatar>
                <span class="text-black">4.5</span>
                <span class="text-black">(422)</span>
              </q-badge>

              <br/>
              <q-badge color="white" class="q-pl-none text-bold">

                <q-avatar size="16px">

                  <img src="../../assets/clock.png" width="16px" height="15px">

                </q-avatar>
                <span class="text-black">{{secondsToHms(course.duration).toString()}}</span>

              </q-badge>


              <q-toolbar>
                <q-btn color="enroll__button " text-color="black"  label="Enroll" @click="openDialog(course.id,course.courseName)"></q-btn>
              </q-toolbar>

            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
  </q-page>

</template>

<script>
import {defineComponent, ref} from 'vue';
import {api} from "boot/axios";
import secondsToHms from  '../../services/timestamp-helper';
import {useQuasar} from "quasar";
import Enroll from "components/User/Enroll";
import Register from "components/Modals/Register";

export default defineComponent({
  name: 'UserIndex',

  setup()
  {
    const $q = useQuasar()

    const refCourse = ref(null);
    let allCourses = [];
    allCourses = api.get("/courses");

    /* api.get("/courses").then(response =>{
       console.log(response.data);
         allCourses  = response.data;
         console.log(allCourses)
     });*/
    //  console.log(allCourses);
    function loadData(){
      api.get("/courses").then(response =>{

        refCourse.value  = response.data;
        allCourses = response.data;
        console.log(allCourses)
      }) .catch((e) => {

        console.log(e);
      });
    }

    loadData();

    // allCourses.map(item => console.log(item.nameCourse));
    // refCourse = allCourses
    return{
      refCourse,
      allCourses,
      secondsToHms,

       openDialog(item,name){
         $q.dialog({

           component:Enroll,
           class: "enroll",

           componentProps: {
             idcourse:  item,
             name: name

             // ...more..props...
           },


           // props forwarded to your custom component

         }).onOk(() => {
           console.log('OK')
         }).onCancel(() => {
           console.log('Cancel')
         }).onDismiss(() => {
           console.log('Called on OK or Cancel')
         })

       }


    }



  }
})
</script>
