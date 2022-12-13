<template>
  <div>
    <section class="content-header">
      <div class="container">
        <div class="row mb-5">
          <div class="col-sm-6">
            <h1>Detail Kartu Keluarga</h1>
          </div>
        </div>
        <div class="">
          <router-link to="/" type="submit" class="btn btn-info"
            >Back</router-link
          >
          <router-link
            to="/"
            type="submit"
            class="btn btn-warning mx-5 text-white"
            >Update Kartu Keluarga</router-link
          >
          <router-link to="/listAnggota" type="submit" class="btn btn-primary"
            >Lihat Anggota Keluarga</router-link
          >
        </div>
        <form action="" class="border p-5 my-5" style="background-color: white">
          <div class="row d-flex justify-content-between">
            <div class="col-6">
              <div class="form-group row">
                <label for="nomor_kk" class="col-md-6 col-sm-2 col-form-label"
                  >Nomor Kartu Keluarga</label
                >
                <div class="col-md-6 col-sm-10">
                  <input
                    disabled
                    type="number"
                    class="form-control"
                    id="nomor_kk"
                    placeholder="Nomor Kartu Keluarga"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="alamat" class="col-md-6 col-sm-2 col-form-label"
                  >Alamat</label
                >
                <div class="col-md-6 col-sm-10">
                  <textarea
                    disabled
                    name="alamat"
                    id="alamat"
                    class="form-control"
                    rows="3"
                    placeholder="Alamat Lengkap"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label for="rt" class="col-md-6 col-sm-2 col-form-label"
                  >RT</label
                >
                <div class="col-md-6 col-sm-10">
                  <input
                    disabled
                    type="number"
                    class="form-control"
                    id="rt"
                    placeholder="RT"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="rw" class="col-md-6 col-sm-2 col-form-label"
                  >RW</label
                >
                <div class="col-md-6 col-sm-10">
                  <input
                    disabled
                    type="number"
                    class="form-control"
                    id="rw"
                    placeholder="RW"
                  />
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group row">
                <label
                  for="desa_kelurahan"
                  class="col-md-6 col-sm-2 col-form-label"
                  >Desa / Kelurahan</label
                >
                <div class="col-md-6 col-sm-10">
                  <input
                    disabled
                    type="text"
                    class="form-control"
                    id="desa_kelurahan"
                    placeholder="Desa / Kelurahan"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="kecamatan" class="col-md-6 col-sm-2 col-form-label"
                  >Kecamatan</label
                >
                <div class="col-md-6 col-sm-10">
                  <input
                    disabled
                    type="text"
                    class="form-control"
                    id="kecamatan"
                    placeholder="Kecamatan"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="kabupaten_kota"
                  class="col-md-6 col-sm-2 col-form-label"
                  >Kabupaten / Kota</label
                >
                <div class="col-md-6 col-sm-10">
                  <input
                    disabled
                    type="text"
                    class="form-control"
                    id="kabupaten_kota"
                    placeholder="Kabupaten / Kota"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="provinsi" class="col-md-6 col-sm-2 col-form-label"
                  >Provinsi</label
                >
                <div class="col-md-6 col-sm-10">
                  <input
                    disabled
                    type="text"
                    class="form-control"
                    id="provinsi"
                    placeholder="Provinsi"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="kode_pos" class="col-md-6 col-sm-2 col-form-label"
                  >Kode Pos</label
                >
                <div class="col-md-6 col-sm-10">
                  <input
                    disabled
                    type="kode_pos"
                    class="form-control"
                    id="kode_pos"
                    placeholder="Kode Pos"
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-danger mt-5 mr-2">Cancel</button>
          <button type="submit" class="btn btn-success mt-5">Update</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DetailView",
};
</script>

<style>
</style>