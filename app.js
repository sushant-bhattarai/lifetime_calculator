function life() {
    var year = document.getElementById("years");
    var month = document.getElementById("months");
    var day = document.getElementById("days");
    var hour = document.getElementById("hours");
    var min = document.getElementById("mins");
    var second = document.getElementById("seconds");
    var millisecond = document.getElementById("milliseconds");


    date_value = localStorage["date_value"]

    // window.onbeforeunload = function () {
    //     localStorage.removeItem("date_value")
    // }


    now = new Date();
    then = new Date(date_value)

    // for(let i=0; i<11; i=i+2){
    //     if(now.getMonth()==i)
    // }
    time1 = now.getFullYear()*365*24*3600000 + (now.getMonth()+1)*365/12*24*3600000 + now.getDate()*24*3600000 + now.getHours()*3600000 + now.getMinutes()*60000 + now.getSeconds()*1000 + now.getMilliseconds();
    time2 = then.getFullYear()*365*24*3600000 + (then.getMonth()+1)*365/12*24*3600000 + then.getDate()*24*3600000 + then.getHours()*3600000 + then.getMinutes()*60000 + then.getSeconds()*1000 + then.getMilliseconds();

    milliseconds = time1 - time2;

    actual_years = (milliseconds / (12*(365/12)*24*60*60*1000));
    years = parseInt(actual_years);
    rem_years = actual_years - years;
    milliseconds = rem_years * 12*(365/12)*24*60*60*1000;
    
    actual_months = (milliseconds / ((365/12)*24*60*60*1000));
    months = parseInt(actual_months);
    rem_months = actual_months - months;
    milliseconds = rem_months * (365/12)*24*60*60*1000;

    actual_days = (milliseconds / (24*60*60*1000));
    days = parseInt(actual_days);
    rem_days = actual_days - days;
    milliseconds = rem_days * 24*60*60*1000;

    actual_hours = (milliseconds / (60*60*1000));
    hours = parseInt(actual_hours);
    rem_hours = actual_hours - hours;
    milliseconds = rem_hours * 60*60*1000;

    actual_mins = (milliseconds / (60*1000));
    mins = parseInt(actual_mins);
    rem_mins = actual_mins - mins;
    milliseconds = rem_mins * 60*1000;

    actual_seconds = (milliseconds / 1000);
    seconds = parseInt(actual_seconds);
    rem_seconds = actual_seconds - seconds;
    milliseconds = parseInt(rem_seconds * 1000);
    


    years = years < 10 ? "0" + years : years;
    months = months < 10 ? "0" + months : months;
    days = days < 10 ? "0" + days : days;

    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    milliseconds = milliseconds.toString()
    if(milliseconds.length == 1){
        milliseconds = "00" + milliseconds
    }else if(milliseconds.length == 2){
        milliseconds = "0" + milliseconds
    }else{
        milliseconds = milliseconds;
    }


    year.innerHTML = years;
    month.innerHTML = months;
    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = mins;
    second.innerHTML = seconds;
    millisecond.innerHTML = milliseconds;

}

setInterval(life, 0)