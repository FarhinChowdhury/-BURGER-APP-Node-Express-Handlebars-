const burger = require("../models/burgers");

function router( app ){
    app.get("/", async function(req, res) {
        console.log( `[GET] getting list of burgers`)
        const available = await burger.Available()
        const devoured = await burger.Devoured() 

        res.render( 'index', { available: available, devoured: devoured })
    })

    app.get("/devour/:id", async function(req, res) {
        const result = await burger.devour( req.params.id )
        res.render('index', {devour:result})

        res.redirect("/");
    })

    // get route -> index
    app.post("/", async function(req, res) {
        console.log( `[POST] we received this data:`, req.body )
        const response = await burger.add( req.body.burger )
        res.render( 'index', { available: response})
        res.redirect("/");
    });
}

module.exports = router
