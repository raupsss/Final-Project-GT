<template>
  <body>
    <div class="sidebar mr-4">
      <div class="header">
        <div class="text-center">
          <h1 class="mb-3 mt-5">E-KTP APP</h1>
          <center>
            <hr style="background-color: white; height: 2px; width: 60%" />
          </center>
        </div>
      </div>

      <div class="main mt-3">
        <div class="list-item">
          <router-link to="/" style="text-decoration: none">
            <h5 class="text-white">Home</h5>
          </router-link>
        </div>
        <div class="list-item mt-3">
          <router-link to="/" style="text-decoration: none">
            <h5 class="text-white">Tambah KK</h5>
          </router-link>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.sidebar {
  background-color: #82c3ec;
  width: 260px;
  padding: 0px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-height: 100vh;
  border-radius: 10px;
  text-decoration: none;
  margin: 5px;
}

.list-item {
  padding: 10px;
}

.list-item:hover {
  background-color: #009eff;
}
</style>