var express =require("express");
var mysql =require("mysql");

app=express();
app.use(express.static("public"))


var conexion = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"esperanzaVidaBD"
});


app.use(express.static("public"));


app.get('/favicon.ico', function(req, res) {
    res.status(204);
});



app.get("/obtenerPaises",function(peticion,respuesta){
	//console.log(peticion.query.codigoPlanEstudio);
	conexion.query(
			'SELECT idPais as codigo, nombrePais as pais FROM tblPais',
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
			}
		);

	
});

app.get("/obtenerAnioNatalidad",function(peticion,respuesta){
	//console.log(peticion.query.codigoPlanEstudio);
	conexion.query(
			'SELECT anioNatalidad as anio FROM tblNatalidad WHERE idPais=? ORDER BY anioNatalidad DESC',
			[peticion.query.codigo],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
			}
		);

	
});

app.get("/obtenernatalidad",function(peticion,respuesta){
	//console.log(peticion.query.codigoPlanEstudio);
	conexion.query(
			'SELECT tasaNatalidad as tasa, totalPoblacion as poblacion FROM tblNatalidad WHERE anioNatalidad=? and idPais=?',
			[peticion.query.anio,peticion.query.codigo],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
			}
		);

	
});

app.get("/obtenerMortalidad",function(peticion,respuesta){
	//console.log(peticion.query.codigoPlanEstudio);
	conexion.query(
			'SELECT cantidadDefuncion, edadInicial,edadFinal FROM tblMortalidad WHERE anioMortalidad=? AND idPais=? Order by ABS(edadInicial)',
			[peticion.query.anio,peticion.query.codigo],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
			}
		);

	
});

app.listen(3001,function() {
	console.log("Servidor iniciado en el puerto 3001")
})