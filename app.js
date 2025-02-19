'use strict'

const { route } = require("./routes/routes")

const express = require("express"),
    app = express(),
    port = 4000,
    routes = require("./routes/routes"),
    viewDir = `${__dirname}/views`,
    publicDir = express.static(`${__dirname}/publics`),
    { connection } = require( './database/db_con' )


    app.set("port",port)//asigna el puerto
        .set( 'view engine','pug' )//motor de vistas
        .set('views',viewDir)//directorio de vistas
        .use( express.json() )//permite convertir los datos del response a json
        .use(express.urlencoded({extended:false}) )// captura las peticiones de la url
        .use(publicDir)//directorio de archivos publicos
        .use(routes)//rutas

        .listen(app.get("port"), //servidor localhost
            ()=>{ 
                console.log(`inciando en el puerto ${app.get('port')}`)
                connection.con()
            }
        )