let overlay = document.getElementsByClassName("overlay")[0];
let template = document.querySelector("template").content.querySelector("div");
let card_con = document.getElementsByClassName("card-container")[0];

overlay.addEventListener("click", (e) => {
    if (e.target.className == "overlay") {
        overlay.style.display = "none";
    }
})

let info = [
    ["tilte1", "mainbody1", "cat1.jpg", "white"],
    ["tilte2", "mainbody2", "cat2.jpg", "blue"],
    ["tilte3", "mainbody3", "cat3.jpg", "yellow"],
    ["tilte4", "mainbody4", "cat4.jpg", "salmon"]
]

window.onload = () => {
    console.log(info);
    

    for(let i = 0; i < info.length; i++) {
        let clone = template.cloneNode(true);
        clone.querySelector("p").textContent = i;
        clone.querySelector("img").src = info[i][2];
        clone.querySelector("img").alt = info[i][2];
        clone.style.background = info[i][3];

        clone.addEventListener("click", (event) => {
            let id = event.target.parentElement.querySelector("p").textContent;

            overlay.querySelector("header").textContent = info[id][0];
            overlay.querySelector("main").textContent = info[id][1];
            overlay.style.display = "flex";
        });
        
        card_con.appendChild(clone);
        console.log(info[i]);
    }
}
