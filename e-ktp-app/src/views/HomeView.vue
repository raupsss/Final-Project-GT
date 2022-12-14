<template>
  <div class="home">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </section>
    <app-success v-show="success" />
    <div v-show="!success">
      <section class="content-header">
        <div class="container-fluid px-lg-4">
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Jumlah Kartu Keluarga</h4>
                  <h1 class="card-text">{{ dataKK.length }}</h1>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Jumlah Seluruh Warga</h4>
                  <h1 class="card-text">0</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-header mt-5">
        <div class="container-fluid px-lg-4">
          <h2 class="text-center mb-5">Data Kartu Keluarga</h2>
          <table
            class="
              table table-striped table-hover
              bg-white
              border border-rounded
            "
          >
            <thead class="text-center text-nowrap">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nomor KK</th>
                <th scope="col">Alamat</th>
                <th scope="col">Kota</th>
                <th scope="col">Kode Pos</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody
              v-for="(item, index) in dataKK"
              :key="index"
              class="text-center"
            >
              <tr>
                <th scope="row">{{ (index += 1) }}</th>
                <td>{{ item.nomor_kk }}</td>
                <td class="text-left">
                  {{
                    item.alamat +
                    ", " +
                    item.desa_kelurahan +
                    ", " +
                    item.kecamatan
                  }}
                </td>
                <td class="text-left">{{ item.kabupaten_kota }}</td>
                <td>{{ item.kode_pos }}</td>
                <td class="text-nowrap">
                  <router-link
                    :to="{ path: '/detailKK/' + item.id }"
                    type="submit"
                    class="btn btn-warning mr-1 text-white"
                  >
                    Detail
                  </router-link>
                  <button
                    type="submit"
                    class="btn btn-danger"
                    @click.prevent="deleteKK(item.id)"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import kartuKeluargaService from "@/services/kartuKeluargaService";

export default {
  name: "HomeView",
  data() {
    return {
      dataKK: [],
      success: false,
    };
  },
  components: {},
  methods: {
    getAllKK() {
      kartuKeluargaService
        .getAllKK()
        .then((response) => {
          this.dataKK = response.data;
          console.log(this.dataKK);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteKK(id) {
      if (
        confirm("Apakah Anda akan menghapus data KK ini beserta anggotanya ?")
      ) {
        kartuKeluargaService
          .deleteKK(id)
          .then((response) => {
            console.log(response.data);
            this.success = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },

  mounted() {
    this.getAllKK();
  },
};
</script>
