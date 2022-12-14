package com.example.backend_ektp.repository.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.backend_ektp.model.AnggotaKeluarga;
import com.example.backend_ektp.repository.IAnggotaKeluargaRepo;

@Repository
public class AnggotaKeluargaRepo implements IAnggotaKeluargaRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public AnggotaKeluarga addAnggota(AnggotaKeluarga anggotaKeluarga) {

        String query = "INSERT INTO tb_anggota_keluarga(alamat, id_kk, jenis_kelamin, kepala_keluarga, nama, nik, pendidikan, tanggal_lahir, tempat_lahir)"
                + "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return null;
    }

    @Override
    public List<AnggotaKeluarga> getAllAnggota() {

        return null;
    }

    @Override
    public AnggotaKeluarga updateAnggota(int id, AnggotaKeluarga anggotaKeluarga) {

        return null;
    }

    @Override
    public AnggotaKeluarga deleteAnggota(int id) {

        return null;
    }

    @Override
    public AnggotaKeluarga getAnggota(int id) {

        return null;
    }

}
