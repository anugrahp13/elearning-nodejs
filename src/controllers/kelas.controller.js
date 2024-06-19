const { Kelas, ModePembelajaran } = require("../models");

const listKelas = async (_req, res) => {
    try {
        const kelas = await Kelas.findAll({
            include: [
                {
                    model: ModePembelajaran,
                    as: "modepembelajarans",
                    attributes: ["nama_mode"],
                    through: { attributes: [] },
                }
            ],
            attributes: ['nama_kelas'],
        });

        if(!kelas.length){
            return res.status(404).send({
                message: "Data kelas tidak ada!",
            });
        }

        const data = kelas.map((kelas) => ({
            nama_kelas: kelas.nama_kelas,
            modepembelajarans: kelas.modepembelajarans.map((mode) => mode.nama_mode)
        }))

        return res.status(200).send({
            message: "Berhasil",
            data: data,
        });
    } catch (error) {
        console.log("Ada kesalahan ketika ambil data kelas", error);
        return res.status(500).send({
            message: "Ada kesalahan di server",
            data: null,
        })
    }
}

module.exports = {listKelas}