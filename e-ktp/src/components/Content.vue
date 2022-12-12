<template>
  <body>
    <div>
      <h2 class="mt-3">Homepage</h2>
      <div class="containerr">
        <div class="box d-flex mt-3">
          <div class="jumlahKK d-flex">
              <h1>0</h1>
          </div>
          <div class="jumlahWarga">
              <h1>0</h1>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "ContentComponent",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.jumlahKK {
  width: 300px;
  height: 150px;
  background-color: blue;
  margin-right: 20px;
}
.jumlahWarga {
  width: 300px;
  background-color: red;
}
</style>