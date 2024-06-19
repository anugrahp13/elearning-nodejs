const {ModePembelajaranKelas, MataPelajaran} = require("../models");

const listMataPelajaran = async (req, res) => {
    const { id_kelas, id_mode_pembelajaran } = req.query;

    if(!id_kelas || !id_mode_pembelajaran) {
        return res.status(400).send({
            message: "id kelas dan id mode pembelajaran diperlukan",
            data : null,
        });
    }

    try {
        const mpkData = await ModePembelajaranKelas.findOne({
            where: {
                id_kelas,
                id_mode: id_mode_pembelajaran,
            },
        });
        
        console.log("Mode Pembelajaran Kelas:", mpkData);

        if(!mpkData){
            return res.status(404).send({
                message: "data mode pembelajaran kelas tidak ada!",
                data: null,
            });
        }

        const mpl = await MataPelajaran.findAll({
            where: {
                id_mpk: mpkdata.id,
            },
            attributes: ["nama_pelajaran"],
        });

        if(!mpl.length){
            return res.status(404).send({
                message: "data mata pelajaran tidak ada!",
                data: [],
            });
        }
        
        return res.status(200).send({
            message: "data mata pelajaran ada",
            data: mpl,
        });
    } catch (error) {
        console.log("Ada kesalahan ketika ambil data mata pelajaran", error);
        return res.status(500).send({
            message: "Ada kesalahan di server",
            data: null,
        });
    }
};

module.exports = {listMataPelajaran}