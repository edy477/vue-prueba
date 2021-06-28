<template>
  <p1>sdasdas</p1>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" class='register'  style="max-width: 1500px;width:1000px;height:900px" @hide="onDialogHide">
    <q-card class="register__card" style="max-width: 1500px;max-height:900px">



      <div class="q-pa-md">
        <q-stepper
          v-model="step"
          ref="stepper"
          contracted
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Select campaign settings"
            icon="settings"
            :done="step > 1"
          >

            <q-card-section horizontal class='no-shadow no-border'>
              <q-form  class='no-border ' action="#"   ref="step1form" @submit="handleEnrollment" method="post">


        <div class="row">
          <div class="col">
            <q-input class='regform__input'  filled v-model="date" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date">
                      <div class="row items-center justify-end">

                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col">

            <q-input borderless class='regform__input' label='Gender' stack-label v-model="gender" placeholder=""  :dense="dense" />

          </div>


        </div>

                <div class="row">
                  <div class="col">
                  <q-input borderless class='regform__input' label='Address' stack-label v-model="address" placeholder=""  :dense="dense" />
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                  <q-input borderless class='regform__input' label='Phone Number' stack-label v-model="phone" placeholder=""  :dense="dense" />
                  </div>
                  </div>



                <div class="row">
                  <div class="col">
                    <q-input borderless class='regform__input' label='Prefered Language' stack-label v-model="language" placeholder=""  :dense="dense" />
                  </div>
                  <div class="col">

                    <div class="q-pa-md" style="max-width: 300px">
                      <div class="q-gutter-md">

                        <q-select filled v-model="education" class='regform__input'  :options="options" stack-label label="Education" :dense="dense" />
                      </div>
                    </div>

                  </div>


                </div>

              </q-form>
              </q-card-section>
            <q-stepper-navigation>
              <q-btn  @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
              <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Next" />

            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Create an ad group"
            caption="Optional"
            icon="create_new_folder"
            :done="step > 2"
          >
          <div>
            <div class="row">

              <div class="col">
                <q-card class="column  content-center items-center" v-model="plan" v-bind:value="1">




                  <span>PIF (pay in Full)</span>
                  <span>
 $6,795</span>
                  <span>
  $4,795</span>
                  <div class="separator">

                  </div>
                  <span>
                       Save $1500 in tuition No processing fees
                  </span>



                </q-card>

              </div>
              <div class="col">
                <q-card class="column  content-center items-center" v-model="plan" v-bind:value="2">

                  <span>16 installments</span>
                  <span>
 of $399 / Month </span>

                  <div class="separator">

                  </div>
                  <span>
                    Save $500 in tuition
No processing fees
0% interest rate
                  </span>



                </q-card>

              </div>
            </div>
            <div class="row">

              <div class="col">
                <q-card class="column  content-center items-center" v-model="plan" v-bind:value="3">

                  <span> 24 installments</span>
                  <span>
 of $299 / Month</span>

                  <div class="separator">

                  </div>
                  <span>
                   Save $250 in tuition
No processing fees
5.99% interest rate
                  </span>



                </q-card>
              </div>
              <div class="col">


                <q-card class="column  content-center items-center" v-model="plan" v-bind:value="4">

                  <span>48 installments</span>
                  <span>
of $199 / Month </span>

                  <div class="separator">

                  </div>
                  <span>
             No processing fees
11.99% interest rate
                  </span>



                </q-card>

              </div>

              </div>
            </div>
            <q-stepper-navigation>
              <q-btn  @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
              <q-btn @click="handleEnroll" color="primary" label="Submit" />

            </q-stepper-navigation>

          </q-step>





        </q-stepper>
      </div>



      <!--
        ...content
        ... use q-card-section for it?
      -->

      <!-- buttons example -->

    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'
import UserService from "src/services/UserService";
class   Enrollment {


  constructor(dateofbirth,gender,address, phone,language,education) {

    this.dateofbirth =new Date(dateofbirth);
    this.gender = gender;
    this.phone = phone;
    this.language = language;
    this.education = education;

  }

};
/* <q-stepper-navigation>
              <q-btn  @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
              <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Next" />

            </q-stepper-navigation>
*
*      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
* */
import { ref } from 'vue'
console.log("Loaded")
export default {

  components: {  },
  props: {
    idcourse: String,
    name: String
    //idcourse: this.idcourse,
    // ...your custom props
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  ],

  setup (props) {


    const gender = ref("");
    const address = ref("");
    const phone = ref("");
    const language = ref("");
    const date = ref("1960/01/01");
    const education = ref("");
    const step = ref(1);
    const done1 = ref(false);
    const plan = ref(false)
    const step1formv =ref(null);


    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome
    model: ref(null);
    return {
      step,
      step1formv,
      done1,
     gender ,
      education,
       address,
       phone,
       language,
      date,

      panel: ref('mails'),

      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      options: [
        'Graduate', 'Undergraduate', 'Masters Degree'
      ],
      dialogRef,
      onDialogHide,

      handleEnroll(){
        let  enroll = new Enrollment(date.value.toString(),gender.value,address.value,phone.value,language.value,education.value,)

        UserService.enrollCourse(enroll,props.idcourse);

        /*console.log(gender.value);
        console.log(address.value);
        console.log(date.value.toString());
        console.log(phone.value);
        console.log(education.value);
        console.log(language.value);*/

      },

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick () {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK()
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel
    }
  }
}

/*
*  <q-bar class="bar_a">
        <span>Start: May '21 | Graduation: Dec. '21</span>
      </q-bar>

      <div class="column bar_b">
        <q-bar>
          Payment Plan
        </q-bar>
        <q-bar>
          Have questions about the application? Want some more info? Call us!  65170024
        </q-bar>
      </div>
*
* */
</script>
