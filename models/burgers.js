const orm = require( '../config/orm' )

async function Available(){
    const response = await orm.allBurgers()
    return response.filter( item=>item.is_devoured == false )
}

async function Devoured(){
    const response = await orm.allBurgers()
    return response.filter( item=>item.is_devoured == true )
}

async function add( name ){
    const response = await orm.newBurger( name )
       return response
}

async function devour( id ){
    const response = await orm.updateOne( id,"is_devoured",true )
    return response
}
module.exports = {
    Available, Devoured, add, devour
}