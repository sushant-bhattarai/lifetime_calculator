function getMyDateTime(){
    myDate = document.getElementById("myDate").value;
    myTime = document.getElementById("myTime").value;
    myDateTime = myDate.toString() + " " + myTime.toString();

    d1 = new Date(myDateTime)
    d2 = new Date()

    if(d1 < d2){ //valid date input
        localStorage["date_value"] = myDateTime;
        window.location.replace("index.html");
    }else{
        document.getElementById("error").innerHTML = "Invalid birth details!"
    }
}