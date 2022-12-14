import http from "@/http-common";

class kartuKeluargaService {

    getAllKK() {
        return http.get("kartuKeluarga/getAllKK");
    }

    addKK(data) {
        return http.post("kartuKeluarga/addKK", data);

    }

    updateKK(id, data) {
        return http.put(`kartuKeluarga/updateKK/${id}`, data);

    }

    deleteKK(id) {
        return http.delete(`kartuKeluarga/deleteKK/${id}`);

    }

    getKK(id) {
        return http.get(`kartuKeluarga/getKK/${id}`);
    }
}

export default new kartuKeluargaService();