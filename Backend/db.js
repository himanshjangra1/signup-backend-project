const mongoose = require('mongoose');
const Sechema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const user = {
    email = "String",
    password = "String",
    name = "String"
}

const UserModel = mongoose.model("users", user);

module.exports({
    UserModel : UserModel
})