const User = require("./table");

exports.createUser = async (userObject) => {
    try {
        const newUser = await User.create(userObject);
        console.log(newUser);
    } catch (error) {
        console.log(error);
    }
}
exports.readUsers = async () => {
    try {
        const users = await User.findAll();
        let temp = [];
        users.forEach(user => {
            temp.push({id: user.id, "First Name": user.firstName, "Last Name": user.lastName, "Favourite Movies": user.favMovies});
        })
        console.table(temp);
    } catch (error) {
        console.log(error);
    }
}
exports.updateUser = async (newValue, where) => {
    try {
        await User.update(newValue, where);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteUser = async (where) => {
    try {
        await User.destroy(where);
    } catch (error) {
        console.log(error);
    }
}