const boredElement = document.getElementById("bored")

fetch("https://www.boredapi.com/api/activity")
.then((response)=>response.json())
.then((obj)=>{
    const {activity, type}  = obj
    boredElement.textContent = `${activity} ${type}`
    
})
