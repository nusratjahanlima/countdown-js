var offerEnds = "5 Nov 2024"

function countdown(){
    const offerDate = new Date(offerEnds)
    const currentDate = new Date()

    const totalSeconds = (offerDate - currentDate) / 1000
    
    const days = Math.floor(totalSeconds / (24*60*60))
    const hours = Math.floor(totalSeconds % (24*60*60)/60*60)
    console.log(hours);

}   

countdown()