const db = require( './connection.js' );


//show all burgers

function allBurgers(){
    const response = db.query(`SELECT * FROM burgers`)
    return response
}
//inserts a new burger
function newBurger(burgerName){
    const response = db.query(`INSERT INTO burgers (burger_name, is_devoured)VALUES('${burgerName}', false)`)
    return response
}
//changes is_devoured to true
function updateOne( id, field, value ){
    return db.query( "UPDATE burgers SET ? WHERE id=?", 
        [ { [field]: value}, id ] )
}

function closeORM(){
    return db.query.close()
}


module.exports={allBurgers, newBurger,closeORM, updateOne}
