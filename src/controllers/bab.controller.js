const { bab } = require("../models");

const listBab = async (req, res) => {
    const { id_mata_pelajaran } = req.query;

    if(!id_mata_pelajaran) {
        return res.status(400).send({
            message: "id mata pelajaran diperlukan",
            data: null,
        });
    }

    try {
        const babData = await bab.findAll({
            where: {
                id_pelajaran: id_mata_pelajaran,
            },
        });

        if(!babData.length){
            return res.status(404).send({
                message: "Data bab tidak ada!",
                data: [],
            });
        }

        return res.status(200).send({
            message: "Berhasil",
            data: babData,
        });
    } catch (error) {
        console.log("Ada kesalahan ketika ambil data bab", error);
        return res.status(500).send({
            message: "Ada kesalahan di server",
            data: null,
        });
    }
}

module.exports = {listBab}