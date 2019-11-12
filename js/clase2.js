function funcionDiaSemana() {
  let dialogo = document.getElementById("diaSemana");
  //   console.log(dialogo.value);
  switch (dialogo.value) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
      console.log("Es un dia habil");
      break;
    case "Sabado":
    case "Domingo":
      console.log("Es fin de semana");
      break;
    default:
      console.log("No es un dia valido");
      console.log("HOL COMO ESTAS ");
      break;
  }
}

//ott.federico@hotmail.com
//santinomolinasvarre@gmail.com
//nico.cordeiro@gmail.com
//alansantagada9@gmail.com
//praszekagustin@gmail.com
