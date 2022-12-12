<template>
  <div class="containerr">
    <SidebarComponent />
    <ContentComponent />
  </div>
</template>

<script>
import SidebarComponent from "@/components/Sidebar.vue";
import ContentComponent from "@/components/Content.vue";
export default {
  name: "HomePage",
  components: {
    SidebarComponent,
    ContentComponent,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.containerr {
  display: flex;
  min-height: 100vh;
}
</style>