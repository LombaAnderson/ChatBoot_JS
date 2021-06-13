function getBotResponse(input){

    if(input == "pedra"){
        return "papel";
    } else if (input == "papel"){
        return "tesoura";
    } else if(input == "tesoura"){
        return "pedra";
    }


// Respostas simples
if(input == "Oie") {
    return "Olá!";
}else if (input == "até logo"){
    return "Falo com você mais tarde!";
}else {
    return "Tente perguntar outra coisa!";
}

}
