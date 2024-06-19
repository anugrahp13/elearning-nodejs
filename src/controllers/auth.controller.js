const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/");

const login = async (req, res, _next) => {
    const { email, password } = re.body;

    try {
        if(!email || !password){
            return res.status(400).send({
                message: "Masukan email dan password",
                data: null,
            });
        }

        const user = await User.findOne({
            attributes: ["id", "fullname", "username", "password", "email"],
            where: { email },
        });

        if(!user){
            return res.status(401).send({
                message: "User tidak ditemukan",
                data: null,
            });
        }

        const passwordValid = await bcrypt.compare(password, user.password);
        if(!passwordValid){
            console.log("Password salah");
            return res.status(401).send({
                message: "Password salah, silahkan coba lagi",
                data: null,
            });
        }

        const token = jwt.sign({
            id: user.id, fullname: user.fullname, username: user.username, email: user.email
            }, process.env.JWT_SECRET
        );

        return res.send({
            message: "Login berhasil",
            data: { token },
        });
    } catch (error) {
        return res.status(500).send({
            message: "Internal server error",
            data: null,
        });
    }
};

const register = async(req, res, _next) => {
    const { fullname, username, password, email } = req.body;

    try {
        if(!fullname || !username || !password || !email){
            return res.status(400).send({
                message: "Masukan fullname, username, password dan email",
                data: null,
            });
        }

        const existingUser = await User.findOne({
            where: {
                email
            }
        });
        
        if(existingUser){
            return res.status(409).send({
                message: "Email sudah terdaftar",
                data: null,
            });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await User.create({
            fullname,
            username,
            password: passwordHash,
            email,
        });

        return res.status(201).send({
            message: "Berhasil registrasi",
            data: {
                id_user: user.id_user,
                fullname: user.fullname,
                username: user.username,
                email: user.email, 
            },
        });
    } catch (error) {
        return res.status(500).send({
            message: "Internal server error",
        });
    }
}

module.exports = {login, register}