const { SubBab } = require("../models");

const listSubBab = async (req, res)  => {
    const { id_bab } = req.query;

    if(!id_bab){
        return res.status(400).send({
            message: "id bab diperlukan",
            data: null,
        });
    }

    try {
        const subBabData = await SubBab.findAll({
            where: {
                id_bab: id_bab,
            }
        });

        if(!subBabData.length){
            return res.status(404).send({
                message: "Data subbab tidak ada!",
                data: [],
            });
        }

        return res.status(200).send({
            message: "Berhasil",
            data: subBabData,
        });
    } catch (error) {
        console.log("Ada kesalahan ketika ambil data subbab", error);
        return res.status(500).send({
            message: "Ada kesalahan di server",
            data: null,
        });
    }
}

module.exports = {listSubBab}