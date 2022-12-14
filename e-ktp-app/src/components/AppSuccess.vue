<template>
  <div>
    <div class="row justify-content-center my-5">
      <div class="card-body border col-6">
        <h5 class="card-title font-weight-bold">Selamat !</h5>
        <p class="card-text">
          Data berhasil di
          <strong>{{ message }}</strong>
        </p>
        <router-link
          class="btn btn-primary"
          to="/home"
          v-if="message == 'Kirim!'"
        >
          Close
        </router-link>
        <router-link
          class="btn btn-primary"
          to="/home"
          v-else-if="message == 'Diperbarui!'"
        >
          Close
        </router-link>
        <button v-else class="btn btn-primary" @click="reloadPage">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSuccess",
  data() {
    return {
      message: null,
    };
  },

  methods: {
    changeMessage() {
      let route = this.$route.fullPath;
      if (route === "/addKK") {
        this.message = "Kirim!";
      } else if (route === "/home") {
        this.message = "Hapus!";
      } else {
        this.message = "Diperbarui!";
      }
    },
    reloadPage() {
      location.reload();
    },
  },

  mounted() {
    this.changeMessage();
  },
};
</script>

<style>
</style>