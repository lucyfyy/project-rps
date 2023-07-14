var menu_btn = document.querySelector("#menu-btn")
var sidebar = document.querySelector("#sidebar")
menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav")
});

var home = document.querySelector("#home-nav")
home.addEventListener("click", () => {
    sidebar.classList.remove("active-nav")
})

document.querySelectorAll(".nav-item").forEach((ele) =>
ele.addEventListener("click", function (event) {
    event.preventDefault();
    document
        .querySelectorAll(".nav-item")
        .forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active")
})
);

// let over = false

// menu_btn.addEventListener('mouseover',()=> {
//     console.log('over')
//     over = true
// })

// menu_btn.addEventListener('mouseleave',()=> {
//     over=false
// })

// window.addEventListener('click',() => {
    
//     console.log('click')
//     if (sidebar.classList.contains('active-nav') && !over) {
//         sidebar.classList.remove('active-nav')
//     }
// })
