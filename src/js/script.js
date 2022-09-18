//JAVASCRIPT ASSOCIADO AO INDEX HTML
//TEM O OBJETIVO DE TORNAR A PÁGINA MAIS DINÂMICA


//addEventListener("mouseover",mudamouse)

//function mudamouse(event){
//    if(event.target.id=="01"){
//        document.body.style.cursor = "wait";
//    }
//}



addEventListener("click",abrelink1);

function abrelink1(event){
    console.log("Clicou!") 
    console.log(event.target) //mostra a tag que foi clicada, por exemplo botão
    console.log(event.type)
    console.log(event.target.id)
    let ident = event.target.id

    switch(ident){
        case "01":
            window.open("https://onepieceex.net/manga-1060/", '_blank');
            break;
        case "02":
            window.open("https://onepieceex.net/opexcast-181-manipulacao-da-verdade/", '_blank');
            break;
        case "03":
            window.open("https://onepieceex.net/filme-one-piece-red-chega-no-brasil-em-3-de-novembro/", '_blank');
            break;
        case "04":
            window.open("https://onepieceex.net/pauta-secreta-178-serafins-capitulo-1059/", '_blank');
            break;
        case "05":
            window.open("https://onepieceex.net/episodio-1032/", '_blank');
            break;
        case "06":
            window.open("https://onepieceex.net/proximos-episodios-1032-1035/", '_blank');
            break;
        case "07":
            window.open("https://onepieceex.net/manga-1059/", '_blank');
            break;
        case "08":
            window.open("https://onepieceex.net/episodio-1031/", '_blank');
            break;
        case "09":
            window.open("https://onepieceex.net/top-wanted/", '_blank');
            break;
                           
    }
    
}