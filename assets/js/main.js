// AUSWAHL

function myFunc(){

    let a = document.getElementById("jahr").value;

    switch(a){

        case "2020":
        func2020()
        break;

        case "2019":
        func2020()
        break;

        case "2018":
        func2020()
        break;
    } 
}
function func2020(){

    let x = document.getElementById("zve").value;

    if(x < 9408){
        document.getElementById("result").innerHTML="Keine Steuern zu bezahlen";

    } else if (9409 <= x && x <= 14532){

        y=(x - 9408)/10000;
        ergebnis=((972 * y) + 1400)*y;

        document.getElementById("result").innerHTML=ergebnis;

    } else if (14533 <= x && x <= 57051){
        y=(x - 14532)/10000;

        ergebnis=((212.02 * y) + 2397)*y+972.79 ;
        document.getElementById("result").innerHTML=ergebnis ;
    }
    else if (57052 <= x && x <= 270500){

        ergebnis=0.42*x-8963.74;
    }
    else if (270501 <= x){

        
        ergebnis=0.45*x-17078.74;
        result=result.toFixed(2)
        document.getElementById("result").innerHTML=ergebnis ;
            
            
    }
}
// 2018

function func2018(){

    let x=document.getElementById("zve").value;
    
    if (x <= 9000){
        document.write("Keine Einkommensteuer zu begleichen.");
    }
    else if (9001 <= x && x <= 13966){

        y=(x - 9000)/10000;
        ergebnis=((997.80 * y) + 1400)*y;
        document.getElementById("result").innerHTML=ergebnis;
    }
    
    else if (13997 <= x && x <= 54942){
    
        y=(x - 13966)/10000;
        ergebnis=((220.13 * y) + 2397)*y+948.49;
        document.getElementById("result").innerHTML=ergebnis;
    }
    else if (54950 <= x && x <= 260532){
        ergebnis=0.42*x-8621.75;
        document.getElementById("result").innerHTML=ergebnis;
    }
    else if (260533 <= x){
        result=result.toFixed(2)
        ergebnis=0.45*x-16437.70;
        document.getElementById("result").innerHTML=ergebnis;
        
    }
}





// 2019
function func2019(){

let x=document.getElementById("zve").value;

if (x <= 9168){
    document.write("Keine Einkommensteuer zu begleichen.");
}

else if (9169 <= x && x <= 14254){

y=(x - 9168)/10000;
ergebnis=((980.14 * y) + 1400)*y;
document.getElementById("result").innerHTML=ergebnis;

}
else if (14255 <= x && x <= 55960){

 y=(x - 14254)/10000;
  ergebnis=((216.16 * y) + 2397)*y+965.58;

     document.getElementById("result").innerHTML=ergebnis;
   }
else if (55961 <= x && x <= 265326){

      ergebnis=0.42*x-8780.90;
      document.getElementById("result").innerHTML=ergebnis;
 }
else if (265327 <= x){
    result=result.toFixed(2)
      ergebnis=0.45*x-16740.68;
      document.getElementById("result").innerHTML=ergebnis;
 }
}