function getMyDateTime(){
    myDate = document.getElementById("myDate").value;
    myTime = document.getElementById("myTime").value;
    myDateTime = myDate + " " + myTime + ":00:00";
    now = new Date()
    then = new Date(myDateTime)


    if(date_validator(then, now)){ //valid date input
        localStorage["date_value"] = myDateTime;
        window.location.replace("index.html");
    }else{
        document.getElementById("error").innerHTML = "Invalid birth details!"
    }
}

function date_validator(then, now){
    
    time1 = now.getFullYear()*365*24*3600000 + now.getMonth()*(365/12)*24*60*60*1000 
            + now.getDate()*24*3600000 + now.getHours()*3600000 
            + now.getMinutes()*60000 + now.getSeconds()*1000 + now.getMilliseconds()
    time2 = then.getFullYear()*365*24*3600000 + then.getMonth()*(365/12)*24*60*60*1000 
            + then.getDate()*24*3600000 + then.getHours()*3600000 
            + then.getMinutes()*60000 + then.getSeconds()*1000 + then.getMilliseconds()

    if(time1 > time2){
        return true
    }else{
        return false
    }

}