let methods = require("./Connection")

let {get, insert, update, deleteOne} = methods

//FIND ALL
get().then(pets => console.log(pets))


//INSERT PET
let petInsert = {
    name: "Max",
    breed: "Dalmata",
    age: 1,
}

insert(petInsert)


//UPDATE PET
let nameUpdatePet = {nombre: "Max"}

let newPetUpdate = {$set: {name: "Maxi"}}

update(nameUpdatePet, newPetUpdate)

//DELETE PET

let petInsertDelte = {

    name: "Dogi",
    breed: "Husky",
    age: 2
}

let nameDeleteDocument = {nombre: "Dogi"}

deleteOne(nameDeleteDocument)
