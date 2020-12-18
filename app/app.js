const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

let state = {
    "to": "first",
    "from": "first"
}

let options = {
    threshold: 0.7
  }

function nav(entries, observer) {
    entries.forEach(entry => {
        const active = document.querySelector(`nav [data-page=${entry.target.className}]`);
        if(entry.isIntersecting) {
            active.classList.add("bubble")
            render(entry.target.className)
        } else {
            active.classList.remove("bubble") 
        }
    
    });
}

let observer = new IntersectionObserver(nav, options);

sections.forEach((section) => {
    observer.observe(section);
});

function render(className) {
    state.to = className
    history.pushState(null, null, "index.html"+"#"+className)
}