<template>
  <div>
    <section class="content-header">
      <div class="container">
        <div class="row mb-5">
          <div class="col-sm-6">
            <h1>Daftar Anggota Keluarga</h1>
          </div>
        </div>
        <div class="mb-5">
          <router-link to="/home" type="submit" class="btn btn-info mr-2"
            >Back</router-link
          >
          <router-link to="/listAnggota" type="submit" class="btn btn-primary"
            >Tambah Anggota Keluarga</router-link
          >
        </div>
        <table
          class="table table-striped table-hover bg-white border border-rounded"
        >
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">NIK</th>
              <th scope="col">Nama</th>
              <th scope="col">Jenis Kelamin</th>
              <th scope="col">Kepala Keluarga</th>
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
export default {};
</script>

<style>
</style>