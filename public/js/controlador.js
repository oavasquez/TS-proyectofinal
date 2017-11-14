$(document).ready(function(){



  $("#slc-pais").mouseover(function(){
  		$.ajax({

         
          url:"/obtenerPaises",
          //Tambien se puede utilizar el siguiente patron:
          //url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
          data:"",
          method:"GET",
          dataType:"json",
          success:function(respuesta){
            //console.log(respuesta)
          //console.log(respuesta);
          		$("#slc-pais").html("");
          	for (var i = 0;i<respuesta.length; i++) {
         		 $("#slc-pais").append('<option value="'+respuesta[i].codigo+'">'+respuesta[i].pais+'</option>');

  			}
  			cargarAnios();
          },
          error:function(err){
            console.log(err);
          } 
        });
  });

  function cargarAnios(){

  		var parametro ="codigo="+$("#slc-pais").val();
  		$.ajax({

         
          url:"/obtenerAnioNatalidad",
          //Tambien se puede utilizar el siguiente patron:
          //url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
          data:parametro,
          method:"GET",
          dataType:"json",
          success:function(respuesta){
            //console.log(respuesta)
          //console.log(respuesta);
          $("#slc-anio").html("");
          	for (var i = 0;i<respuesta.length; i++) {
         		 $("#slc-anio").append('<option value="'+respuesta[i].anio+'">'+respuesta[i].anio+'</option>');

  			}
          		mostrarNatalidad();
  			
          },
          error:function(err){
            console.log(err);
          } 
        });
  }


  $("#slc-anio").click(function(){

  		
          		mostrarNatalidad();
  			
       
  });
  function mostrarNatalidad(){
  		var parametros ="codigo="+$("#slc-pais").val()+"&anio="+$("#slc-anio").val();
  		$.ajax({

         
          url:"/obtenernatalidad",
          //Tambien se puede utilizar el siguiente patron:
          //url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
          data:parametros,
          method:"GET",
          dataType:"json",
          success:function(respuesta){
           console.log(respuesta)
          $("#txt-poblacionInicial").val( parseInt(( respuesta[0].tasa*respuesta[0].poblacion)/1000) );
          		
          },
          error:function(err){
            console.log(err);
          } 
        });
  }



  $("#btn-calcular").click(function(){
    $("#tbl-mostrarDatos").append(
      '<tr>'+
      ' <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      '  <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      '  <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      ' <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      ' <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      '  <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      '  <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      '  <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      '  <td>'+
      '    <input type="text" name="" class="form-control">'+
      '  </td>'+
      '</tr>'

      )
  });

});



function calculandoTablaVida(){

  var poblacionInicial= $("#xt-poblacionInicial").val();
  var arregloTabla=[];
  



}

function contruirTabla(){

}