const Actor = require("./table");

exports.createActor = async (actorObject) => {
    try {
        const newActor = await Actor.create(actorObject);
        console.log(newActor.dataValues);
    } catch (error) {
        console.log(error);
    }
}
exports.readActors = async () => {
    try {
        const actors = await Actor.findAll();
        let temp = [];
        actors.forEach(actor => {
            temp.push({name: actor.name, "Starred In": actor.starredIn});
        })
        console.table(temp);
    } catch (error) {
        console.log(error);
    }
}
exports.updateActor = async (newValue, where) => {
    try {
        await Actor.update(newValue, where);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteActor = async (where) => {
    try {
        await Actor.destroy(where);
    } catch (error) {
        console.log(error);
    }
}