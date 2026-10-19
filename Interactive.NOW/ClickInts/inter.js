let resp = document.getElementById("Response")
let left = document.getElementById("Left")

let CorrectClicked = 4

document.querySelectorAll(".Correct").forEach(element => {
    element.addEventListener("click", ev=>{
        CorrectClicked -= 1
        element.remove()
        left.innerHTML = CorrectClicked.toString()
        resp.innerHTML = element.getAttribute("txt")
        resp.style.color = "green"
        if (CorrectClicked == 0) {
            setInterval(ev=>{
                resp.innerHTML = "Well Done - You found all of the integers!"
                resp.style.color = "green"
            }, 400)
        }
    })
});

document.querySelectorAll(".Incorrect").forEach(element => {
    element.addEventListener("click", ev=>{
        resp.innerHTML = element.getAttribute("txt")
        resp.style.color = "red"
    })
});