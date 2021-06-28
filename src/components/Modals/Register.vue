<template>

  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" class='register'  style="max-width: 1500px;width:1000px;height:900px" @hide="onDialogHide">
    <q-card class="register__card" style="max-width: 1500px;max-height:900px">
    <q-card-section class="row inline header-card">
      <q-card-actions align="left">
        <q-btn color="primary" label="X" @click="onCancelClick" />
      </q-card-actions>
      <div class="row inline no-wrap items-center" align="center">

         <div class='row inline  items-center'>
           <span>
             Login or Sign Up
           </span>
         </div>
      </div>
    </q-card-section>

      <q-card-section>

        <div class='row inline column items-center'>

          <span class="text-blue-grey-10  text-h5 q-mb-sm">Register as New Student</span>
        <div>
<div>

  <q-btn-toggle
    v-model="panel"
    spread
    class="my-custom-toggle"
    no-caps
    rounded
    unelevated
    toggle-color="grey-12"
    color="grey-1"
    toggle-text-color="blue-grey-10"

    text-color="blue-grey-10"
    :options="[
          {label: 'Option 1', value: 'mails'},
          {label: 'Option 2', value: 'alarms'}
        ]"
  />

</div>



          <q-tab-panels v-model="panel" animated class="no-shadow no-border">
            <q-tab-panel   name="mails">

              <SignUp></SignUp>
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <Login></Login>

            </q-tab-panel>

          </q-tab-panels>
        </div>

        </div>



      </q-card-section>

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
import SignUp from 'components/Modals/SignUp';
import Login from 'components/Modals/Login';
import { ref } from 'vue'
console.log("Loaded")
export default {

  components: { Login, SignUp },
  props: {
    // ...your custom props
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  ],

  setup () {

    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome
  /*  <q-card-actions align="right">
      <q-btn color="primary" label="OK" @click="onOKClick" />
      <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>*/
    return {
      panel: ref('mails'),
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

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
</script>
