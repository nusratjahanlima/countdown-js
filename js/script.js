const offerEnds = "5 Nov 2024"

function countdown(){
    const offerDate = new Date(offerEnds)
    const currentDate = new Date()

    const totalSeconds = (offerDate - currentDate) / 1000
    
    const days = Math.floor(totalSeconds / (24*60*60))
    const hours = Math.floor(totalSeconds % (3600*24)/3600)
    const minutes = Math.floor(totalSeconds % 3600 / 60)
    const seconds = Math.floor(totalSeconds % 60)
 

    console.log("Days:", days, "Hours:", hours, "Minutes: ",minutes,"Seconds: ", seconds);

    document.getElementById('days').innerText = formatTime(days)
    document.getElementById('hours').innerText = formatTime(hours)
    document.getElementById('minutes').innerText = formatTime(minutes)
    document.getElementById('seconds').innerText = formatTime(seconds)
}  

function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}

countdown()
setInterval(countdown, 1000)