const baseCors = require("cors");

const whitelistOrigins = ["http://localhost:3000"];
const cors = baseCors({
    origin: "*",
    credentials: true,
});

module.exports = { cors };
