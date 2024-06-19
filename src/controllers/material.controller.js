const { Material } = require("../models");

const listMaterial = async(req, res) => {
    const { id_sub_bab } = req.query;

    if(!id_sub_bab){
        return res.status(400).send({
            message: "id subbab diperlukan",
            data: null,
        });
    }

    try {
        const materiData = await Material.findAll({
            where: {
                id_sub: id_sub_bab,
            }
        });

        if(!materiData.length){
            return res.status(404).send({
                message: "Data material tidak ada!",
                data: [],
            });
        }

        return res.status(200).send({
            message: "Berhasil",
            data: materiData,
        });
    } catch (error) {
        console.error("Error fetching material:", error);
        return res.status(500).send({
            message: "Internal server error",
            data: null,
        });
    }
}

module.exports = { listMaterial }