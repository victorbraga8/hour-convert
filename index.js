	
    function gerenciaHora(horaBase){    
        // Formato recebido: 8:30 am - 1:00 pm
        hora = horaBase.split("-");                
        console.log(hora);
        horaFinal = [];
        for(i=0; i<=hora.length-1; i++){            
            if(hora[i].includes("pm")){
                horaConv = hora[i].split(":");
                horaConvFinal = Number(horaConv[0])+12;
                horaConvFinal = `${horaConvFinal}:${horaConv[1].replace("pm","")}`;                
                horaFinal.push(horaConvFinal);                       
            }else{
                horaFinal.push(hora[i].replace("am",""));
            }
        }
        return horaFinal;                
	}
    horaBase = "8:30 am - 4:00 pm";    
    console.log(gerenciaHora(horaBase));