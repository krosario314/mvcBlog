const { User } = require('../models/User');

const userData = [
    {
        username: "john_doe",
        twitter: "jDoe",
        github: "jDoe",
        email: "jDoe@gmail.com",
        password: "password1"
    },
    {
        username: "Jane_doe",
        twitter: "janedoe_",
        github: "jadoe",
        email: "jane_doe@gmail.com",
        password: "password2"
    },
    {
        username: "kayla_r",
        twitter: "kayla_r",
        github: "kaylar",
        email: "kayla__r@gmail.com",
        password: "password3"
    },
    {
        username: "b_colson",
        twitter: "colson_b",
        github: "bakerC",
        email: "colson.baker@gmail.com",
        password: "password4"
    },
    {
        username: "JennalynGee",
        twitter: "JennalynGee",
        github: "JennalynGee",
        email: "j_gee@gmail.com",
        password: "password5"
    },
    {
        username: "Gracie_mach",
        twitter: "Gracie_mach",
        github: "Gracie_mach",
        email: "graciemach6@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;