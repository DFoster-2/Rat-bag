function chechpin() {
  var pin = document.getElementById("Pin").value;
  if (pin == "00654"){
    alert("You are loged in");
    window.location.href = "y37364bvbgbbhnhnjmjnjsnnhznhbz67384625bg45234gsnsh46.html"
  }else{
    alert("Wrong pin")
  }
}

function chechadminpin() {
  var pin = document.getElementById("AdminPin").value;
  if (pin == "00789"){
    alert("You are logged in");
    window.location.href = "d46j4dj4j8d8j4y884j8d4y8j4d4y+j484d+j4yd484y48dy44d4d44d4y8u48d4u44ud4u4d8u48d4dh4848s84a88a8.html"
  }else{
    alert("Wrong pin")
    window.location.href = "y37364bvbgbbhnhnjmjnjsnnhznhbz67384625bg45234gsnsh46.html"
  }
}

function lodetimes(){
  const fs = require('fs');
  fs.readFile("times.txt", (err, inputD) => {
    if (err) throw err;
      console.log(inputD.toString());
  })
}
