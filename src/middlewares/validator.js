const validRegister = async(req, res, next) => {
    const { fullname, username, password, email } = req.body;

    if(!fullname || !username || !password || !email){
        return res.status(400).send({
            message: "Gagal diperlukan",
            data: null,
        });
    }

    if(!isEmail(email)){
        return res.status(400).send({
            message: "Email salah",
            data: null,
        });
    }

    if(!isPasswordStrong(password, {
        minLength: 4,
        minLowecase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
    })
    ) {
        return res.status(400).send({
            message: "Password terlalu lemah",
            data: null,
        });
    }

    const emailCheck = await UserModel.findOne({
        where: { email },
    });
    if(emailCheck){
        return res.status(400).send({
            message: "Email sudah terdaftar",
            data: null,
        });
    }

    next();
};

const validatorLogin = (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).send({
            message: "Permintaan buruk",
            data: null,
        });
    }

    next();
};

module.exports = { validRegister, validatorLogin }