
function OrderClick() {
    document.getElementById("lblName").innerHTML = document.getElementById("textName").value;
    document.getElementById("lblDate").innerHTML = document.getElementById("textDate").value;
    document.getElementById("lblDay").innerHTML = document.getElementById("textDay").value;
    document.getElementById("lblPerson").innerHTML = document.getElementById("textPerson").value;
    document.getElementById("lblAmount").innerHTML = document.getElementById("textAmount").value;




    var roomName = "";
    var roomcost = 0;

    var amenitiesName = "";
    var amenitiesCost = 0;

    var total = 0;

    var optDelux = document.getElementById("optDelux");
    var optSuite = document.getElementById("optSuite");
    var roomPic = document.getElementById("roomPic");

    if (optDelux.checked) {
        roomPic.src = "./img/Deluxe img.jpg";
        roomName = optDelux.value;
        roomcost = 2500;
    }
    if (optSuite.checked) {
        roomPic.src = "./img/Suite img.webp";
        roomName = optSuite.value;
        roomcost = 4000;

    }

    var optAc = document.getElementById("optAc");
    var optLocker = document.getElementById("optLocker");
    var roomPic = document.getElementById("roomPic");

    if(optAc.checked) {
        amenitiesName += optAc.value + "<br>";
        amenitiesCost = 1000;
        roomcost +=amenitiesCost;

    }

    if(optLocker.checked) {
        amenitiesName += optLocker.value + "<br>";
        amenitiesCost = 500;
        roomcost +=amenitiesCost;
    }

   

   var person= document.getElementById("textPerson").value;
   var days =document.getElementById("textDay").value;
   var adv = document.getElementById("textAmount").value;
      var total = 0;

      if(person<=2) {
         total = roomcost*days-adv;

     }

      if(person>2) {
         total = roomcost*days-adv+(person-2)*1000 ;
      }

    
    document.getElementById("lblRoom").innerHTML = roomName;
    document.getElementById("lblAmenities").innerHTML = amenitiesName;
    document.getElementById("lblTotal").innerHTML = `<b>&#8377; ${total}</b>`
    document.getElementById("lblTotal").innerHTML = total;
    
}
