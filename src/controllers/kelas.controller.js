const {Kelas, ModePembelajaran} = require("../models");

const listKelas = async (_req, res) => {
    try {
        const kelas = await Kelas.findAll({
            attributes: ['nama_kelas'],
            include: [
                {
                    model: ModePembelajaran,
                    as: "modepembelajarans",
                    attributes: ["nama_mode"],
                }
            ]
        });

        if(!kelas.length){
            return res.status(404).send({
                message: "datanya tidak ada!"
            })
        }

        const data = kelas.map((kelas) => ({
            nama_kelas: kelas.nama_kelas,
            modepembelajarans: kelas.modepembelajarans.map((mode) => mode.nama_mode)
        }))

        return res.status(200).send({
            message: "datanya ada",
            data: data
        })
    } catch (error) {
        console.log("Ada kesalahan ketika ambil data", error);
        return res.status(500).send({
            message: "Ada kesalahan",
            data: null
        })
    }
}

module.exports = {listKelas}