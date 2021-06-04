function life() {
    var year = document.getElementById("years");
    var month = document.getElementById("months");
    var day = document.getElementById("days");
    var hour = document.getElementById("hours");
    var min = document.getElementById("mins");
    var second = document.getElementById("seconds");
    var millisecond = document.getElementById("milliseconds");


    date_value = localStorage["date_value"]

    window.onunload = function () {
        localStorage.removeItem("date_value")
    }


    now = new Date()
    then = new Date(date_value)
    month_ms_now = 0
    month_ms_then = 0

    mn = now.getMonth()+1
    mt = then.getMonth()+1

    if(mn==1 || mn==3 || mn==5 || mn==7 || mn==8 || mn==10 || mn==12){
        month_ms_now = mn * 31*24*3600000
    }
    if(mt==1 || mt==3 || mt==5 || mt==7 || mt==8 || mt==10 || mt==12){
        month_ms_then = mt * 31*24*3600000
    }
    if(mn==4 || mn==6 || mn==9 || mn==11){
        month_ms_now = mn * 30*24*3600000
    }
    if(mt==4 || mt==6 || mt==9 || mt==11){
        month_ms_then = mt * 30*24*3600000
    }
    if(mn == 2){
        now_year = now.getFullYear();
        if(isLeapYear(now_year)){
            month_ms_now = mn * 29*24*3600000
        }else{
            month_ms_now = mn * 28*24*3600000
        }
    }
    if(mt == 2){
        then_year = then.getFullYear();
        if(isLeapYear(then_year)){
            month_ms_now = mn * 29*24*3600000
        }else{
            month_ms_now = mn * 28*24*3600000
        }
    }

    // 1, 3, 5, 7, 8, 10, 12 - 31
    //  4, 6, 9, 11 - 30
    // 2 - 29 or 28


    time1 = now.getFullYear()*365*24*3600000 + month_ms_now + now.getDate()*24*3600000 + now.getHours()*3600000 + now.getMinutes()*60000 + (now.getSeconds())*1000 + now.getMilliseconds();
    time2 = then.getFullYear()*365*24*3600000 + month_ms_then + then.getDate()*24*3600000 + then.getHours()*3600000 + then.getMinutes()*60000 + then.getSeconds()*1000 + then.getMilliseconds();

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

function isLeapYear(year){
    if((year % 4) == 0){
        if((year % 100) == 0){
            if((year % 400) == 0){
                return true
            }else{
                return false
            } 
        }else{
            return true
        }
    }else{
        return false
    }
}

setInterval(life, 0)