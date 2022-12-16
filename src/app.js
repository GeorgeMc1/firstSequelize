const yargs = require("yargs");
const {openSequelizeConnection} = require("./db/connection");
const {createMovie, readMovies, updateMovie, deleteMovie} = require("./movie/function");
const {createActor, readActors, updateActor, deleteActor} = require("./actor/function");
const {createUser, readUsers, updateUser, deleteUser} = require("./user/function");
const Movie = require("./movie/table");
const User = require("./user/table");
require("./associations");

const app = async (input) => {
    await openSequelizeConnection.sync();
    if(input.create){
        console.log("Entering Create");
        // put code to add a movie here
        if (input.table == "actor"){
            await createActor({name: input.name});
        } else if (input.table == "user"){
            await createUser({firstName: input.firstName, lastName: input.lastName});
        } else {
            await createMovie({title: input.title, actor: input.actor, director: input.director, rating: input.rating});
        }
    } else if(input.read){
        console.log("Entering Read");
        //put code to list movies here
        if (input.table == "actor"){
            await readActors();
        } else if (input.table == "user"){
            await readUsers();
        } else {
            await readMovies();
        }
    } else if(input.update){
        console.log("Entering Update");
        //put code to update a movie here
        if (input.table == "actor"){
            switch (input.update){
                case "name":
                    updateActor({name: input.new}, {where: {name: input.where}});
                    break;
            }
        } else if (input.table == "user"){
            switch (input.update){
                case "firstName":
                    updateUser({firstName: input.new}, {where: {id: input.where}});
                    break;
                case "lastName":
                    updateUser({lastName: input.new}, {where: {id: input.where}});
                    break;
                case "favMovies":
                    let user = await User.findOne({where: {id: input.where}});
                    let temp = user.favMovies;
                    temp.trim();
                    if(input.add){
                        updateUser({favMovies: `${temp} ${input.add}`}, {where: {id: input.where}});
                    } else if (input.remove){
                        temp = temp.split(" ");
                        console.log(temp);
                        let index = temp.indexOf(input.remove);
                        temp.splice(index, 1);
                        temp = temp.join(" ");
                        updateUser({favMovies: temp}, {where: {id: input.where}});
                    }
            }
        } else {
            switch (input.update){
                case "title":
                    updateMovie({title: input.new}, {where: {title: input.where}});
                    break;
                case "actor":
                    updateMovie({actor: input.new}, {where: {title: input.where}});
                    break;
                case "director":
                    updateMovie({director: input.new}, {where: {title: input.where}});
                    break;
                case "rating":
                    updateMovie({rating: input.new}, {where: {title: input.where}});
                    break;
            }
        }
    } else if(input.delete){
        console.log("Entering Delete");
        //put code to delete a movie here
        if (input.table == "actor"){
            deleteActor({where: {name: input.delete}});
        } else if (input.table == "user"){
            deleteUser({where: {id: input.delete}});
        } else {
            deleteMovie({where: {title: input.delete}});
        }
    } else {
        console.log("Unrecognized command");
    }
}
app(yargs.argv);