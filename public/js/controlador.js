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
           //console.log(respuesta)
          $("#txt-poblacionInicial").val( parseInt(( respuesta[0].tasa*respuesta[0].poblacion)/1000) );
          		
          },
          error:function(err){
            console.log(err);
          } 
        });
  }



  $("#btn-calcular").click(function(){
     $("#tbl-mostrarDatos").html(
        '<thead style="text-align: center;">'+
        '  <th>Edad</th>'+
        '  <th>Ix</th>'+
        '  <th>lx</th>'+
        '  <th>dx</th>'+
        '  <th>qx</th>'+
        '  <th>Lx</th>'+
        '  <th>Tx</th>'+
        '  <th>ex</th>'+
        '</thead>'+
        '<tbody>   '+     
        '</tbody>');

    var parametros ="codigo="+$("#slc-pais").val()+"&anio="+$("#slc-anio").val();
      $.ajax({

         
          url:"/obtenerMortalidad",
          //Tambien se puede utilizar el siguiente patron:
          //url:"/mensajes/"+$("#slc-usuario").val()+"/"+codigoContacto,
          data:parametros,
          method:"GET",
          dataType:"json",
          success:function(respuesta){
           console.log(respuesta)

          var cantidadProblacional =$("#txt-poblacionInicial").val()
          var cantidadProblacionalEstatica =$("#txt-poblacionInicial").val()
           

           for(var i=0;i<respuesta.length;i++){


           

               if(cantidadProblacional<0){
                    cantidadProblacional=0;
                  }



            $("#tbl-mostrarDatos").append(
            '<tr>'+
            ' <td style="width: 110px" id="indice-'+i+'">'+
            '    '+ respuesta[i].edadInicial+'-'+respuesta[i].edadFinal+
            '  </td>'+
            '  <td >'+
            '    <input type="text" name="" class="form-control" id="ix-'+i+'">'+
            
            '  </td>'+
            ' <td >'+
            '    <input type="text" name="" class="form-control" id="lx-'+i+'">'+
            '  </td>'+
            '  <td >'+
            '    <input type="text" name="" class="form-control" id="dx-'+i+'">'+
            '  </td>'+
            ' <td >'+
            '    <input type="text" name="" class="form-control" id="qx-'+i+'">'+
            '  </td>'+
            '  <td>'+
            '     <input type="text" name="" class="form-control" id="LLx-'+i+'">'+
            '  </td>'+
            '  <td>'+
             '     <input type="text" name="" class="form-control" id="Tx-'+i+'">'+
            '  </td>'+
            '  <td>'+
            '     <input type="text" name="" class="form-control" id="ex-'+i+'">'+
            '  </td>'+
            
            '</tr>'

            )
            $('#ix-'+i).val(cantidadProblacional)

            //console.log(parseFloat($("#ix-"+i)));
            $("#lx-"+i).val( parseFloat($("#ix-"+i).val())/cantidadProblacionalEstatica);

            
           // $('#qx-'+(i-1)).val(  parseInt($("#dx-"+(i-1)).val())/ $('#lx-'+(i-1)).val());



             if(cantidadProblacional==0){
             break;
               }
            cantidadProblacional=cantidadProblacional-respuesta[i].cantidadDefuncion;



               
          }

          calculandoDx(respuesta.length);
          calculandoqx(respuesta.length);
          calculandoLx(respuesta.length);
          calculandoTx(respuesta.length);
          calculandoex(respuesta.length);

              
          },
          error:function(err){
            console.log(err);
          } 
        });
 








   
  });


/*

  $("#btn-calcularAleatorio").click(function(){
     $("#tbl-mostrarDatos").html(
        '<thead style="text-align: center;">'+
        '  <th>Edad</th>'+
        '  <th>Ix</th>'+
        '  <th>lx</th>'+
        '  <th>dx</th>'+
        '  <th>qx</th>'+
        '  <th>Lx</th>'+
        '  <th>Tx</th>'+
        '  <th>ex</th>'+
        '</thead>'+
        '<tbody>   '+     
        '</tbody>');

    

          var cantidadProblacional =$("#txt-poblacionInicial").val()
          var cantidadProblacionalEstatica =$("#txt-poblacionInicial").val()
           
           var minMuertes=$("#txt-MaxMuertes").val()
           var maxMuertes=$("#txt-MinMuertes").val()


           for(var i=0;i<respuesta.length;i++){


           

               if(cantidadProblacional<0){
                    cantidadProblacional=0;
                  }



            $("#tbl-mostrarDatos").append(
            '<tr>'+
            ' <td style="width: 110px" id="indice-'+i+'">'+
            '    '+ respuesta[i].edadInicial+'-'+respuesta[i].edadFinal+
            '  </td>'+
            '  <td >'+
            '    <input type="text" name="" class="form-control" id="ix-'+i+'">'+
            
            '  </td>'+
            ' <td >'+
            '    <input type="text" name="" class="form-control" id="lx-'+i+'">'+
            '  </td>'+
            '  <td >'+
            '    <input type="text" name="" class="form-control" id="dx-'+i+'">'+
            '  </td>'+
            ' <td >'+
            '    <input type="text" name="" class="form-control" id="qx-'+i+'">'+
            '  </td>'+
            '  <td>'+
            '     <input type="text" name="" class="form-control" id="LLx-'+i+'">'+
            '  </td>'+
            '  <td>'+
             '     <input type="text" name="" class="form-control" id="Tx-'+i+'">'+
            '  </td>'+
            '  <td>'+
            '     <input type="text" name="" class="form-control" id="ex-'+i+'">'+
            '  </td>'+
            
            '</tr>'

            )
            $('#ix-'+i).val(cantidadProblacional)

            //console.log(parseFloat($("#ix-"+i)));
            $("#lx-"+i).val( parseFloat($("#ix-"+i).val())/cantidadProblacionalEstatica);

            
           // $('#qx-'+(i-1)).val(  parseInt($("#dx-"+(i-1)).val())/ $('#lx-'+(i-1)).val());



             if(cantidadProblacional==0){
             break;
               }
            cantidadProblacional=cantidadProblacional-(Math.floor(Math.random() * (maxMuertes - minMuertes + 1)) + minMuertes);



               
          }

          calculandoDx(respuesta.length);
          calculandoqx(respuesta.length);
          calculandoLx(respuesta.length);
          calculandoTx(respuesta.length);
          calculandoex(respuesta.length);

              
          },
          error:function(err){
            console.log(err);
          } 
        });
 








   
  });*/

});


function calculandoDx(contador){

  for(var i=0;i<contador;i++){
  $("#dx-"+(i)).val( parseInt($("#ix-"+(i)).val())-parseInt($("#ix-"+(i+1)).val())  )


  if($("#ix-"+i).val()==0){
      $("#dx-"+(i)).val(0);
      }
              

    }
  }
function calculandoqx(contador){
  for(var i=0;i<contador;i++){
    $('#qx-'+i).val(  parseInt($("#dx-"+(i)).val())/ $('#ix-'+(i)).val());

    if($("#ix-"+i).val()==0){
      $("#dx-"+(i)).val(0);
      }


  }

}

function calculandoLx(contador){
  for(var i=0;i<contador;i++){
    $('#LLx-'+i).val(  (parseInt($("#ix-"+(i)).val()) + $('#ix-'+(i+1)).val())/2);

    if($("#ix-"+i).val()==0){
      $("#dx-"+(i)).val(0);
      }


  }

}

function calculandoTx(contador){
  var sumatoriaLx=0
    for(var i=0;i<contador;i++){
      sumatoriaLx=0;
        for(var j=i;j<contador-2;j++){
              if ($("#LLx-"+j).val()=='NaN') {
                sumatoriaLx = sumatoriaLx + 0;
              //console.log(parseFloat($("#Lx-"+j).val()));
              }else{
                console.log(parseFloat($("#LLx-"+j).val()));
              sumatoriaLx = parseFloat(sumatoriaLx) + parseFloat($("#LLx-"+j).val());
              }

      


      } 
      $("#Tx-"+i).val(sumatoriaLx);

    }
  } 



function calculandoex(contador){
  for(var i=0;i<contador;i++){
    $('#ex-'+i).val(  $("#Tx-"+(i)).val() / $('#ix-'+(i)).val());

    if($("#ix-"+i).val()==0){
      $("#ex-"+(i)).val(0);
      }


  }

}
  


function calculandoTablaVida(){

  var poblacionInicial= $("#xt-poblacionInicial").val();
  var arregloTabla=[];
  



}

function contruirTabla(){

}