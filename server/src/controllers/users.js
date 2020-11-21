const mongoose = require("mongoose")
const model = require("../models/users")

function run_db() {
    return mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}


module.exports = {
    getAllUsers : async (req,res) => {
        try {
            await run_db()
                .then(() => console.log("Db open"))
                .catch((err) => res.send(err))
            
            const data = await model.find({});
            if(!data) return res.status(404).send("users not found")

            mongoose.connection.close()
                .then(() => console.log("Db closed"));
            
                res.status(200).send(data)
        } catch (error) {
            res.status(400).send(error)
        }
    },
}