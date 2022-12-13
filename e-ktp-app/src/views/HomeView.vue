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
    <section class="content-header">
      <div class="container-fluid px-lg-4">
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Jumlah Kartu Keluarga</h4>
                <h1 class="card-text">0</h1>
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
        <h2 class="text-center">Data Kartu Keluarga</h2>
        <table
          class="table table-striped table-hover bg-white border border-rounded"
        >
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nomor KK</th>
              <th scope="col">Alamat</th>
              <th scope="col">Kota</th>
              <th scope="col">Kode Pos</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <router-link
                  to="/detailKK"
                  type="submit"
                  class="btn btn-warning mr-1 text-white"
                >
                  Detail
                </router-link>
                <button type="submit" class="btn btn-danger">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
