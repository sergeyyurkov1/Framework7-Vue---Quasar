<template>
  <f7-app v-bind="f7params">
    <!-- Left Panel with "cover" effect -->
    <f7-panel left cover>
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block>
            <p>Here comes the left panel text</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Right Panel with "reveal" effect -->
    <f7-panel right reveal>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>
            <p>Here comes the right panel text</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Main view-->
    <f7-view main>
      <f7-page>
        <f7-navbar title="Awesome App"></f7-navbar>
        <!-- Page content -->
        <f7-block>
          <p>Here comes main view page text</p>
        </f7-block>
        <!-- Buttons to open panels -->
        <f7-row>
          <f7-col>
            <f7-button panel-open="left">Left Panel</f7-button>
          </f7-col>
          <f7-col>
            <f7-button panel-open="right">Right Panel</f7-button>
          </f7-col>
        </f7-row>
        <!-- Button to open popup -->
        <f7-button popup-open="#my-popup">Open Popup</f7-button>
      </f7-page>
    </f7-view>

    <!-- Popup. All modals should be outside of Views -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <!-- Link to close popup -->
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Here comes popup text</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
  </f7-app>
</template>

<script>
import { f7ready } from "framework7-vue";
import { useQuasar } from "quasar";

export default {
  name: "MainLayout",
  setup() {
    const $q = useQuasar();

    let theme = $q.platform.is.mobile ? "ios" : "aurora";

    return {
      theme,
    };
  },
  mounted() {
    f7ready((f7) => {
      f7.dialog.alert("Component mounted");
    });
  },
  data() {
    return {
      f7params: {
        name: "My App",
        id: "com.myapp.test",
        // md, auto, ios, aurora
        theme: this.theme,
        // routes: [
        //   {
        //     path: "/about/",
        //     component: AboutPage,
        //   },
        //   {
        //     path: "/services/",
        //     component: ServicesPage,
        //   },
        // ],
      },
    };
  },
};
</script>
