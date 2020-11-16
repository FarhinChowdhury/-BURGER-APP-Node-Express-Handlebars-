const orm = require( '../config/orm' )
//shows all available burgers
async function Available(){
    const response = await orm.allBurgers()
    if(!response){
        return []
    }
    return response.filter( item=>item.is_devoured == false )
}
//shows all devoured burgers
async function Devoured(){
    const response = await orm.allBurgers()
    if(!response){
        return []
    }
    
    return response.filter( item=>item.is_devoured == true )
}
//function helps add a new burger
async function add( name ){
    const response = await orm.newBurger( name )
    if(!response){
        return []
    }
       return response
}
// function updates burgers to devoured
async function devour( id ){
    const response = await orm.updateOne( id,"is_devoured",true )
    return response
}
module.exports = {
    Available, Devoured, add, devour,
}