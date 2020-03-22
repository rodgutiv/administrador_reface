<template >
  <v-app id="inspire">
    <Toolbar />
    <!--<v-container grid-list-md r>-->
      <router-view />
    <!--</v-container>-->
  </v-app>
</template>
<script>
import Toolbar from "@/components/Layout/ToolbarApplication";
export default {
  components: {
    Toolbar
  }
};
</script>