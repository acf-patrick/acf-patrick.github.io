/* function observe(target, threshold, callback) {
    const observer = new IntersectionObserver(
        (entries, obs) => { entries.forEach(entry => { callback(entry); }); 
    });
    observer.observe(target, { threshold: threshold });
}

/* ["card", "name", "firstname"].forEach(c => {
    observe(document.querySelector('.'+c), 1, (entry) => {
        entry.target.classList.toggle("animate-"+c, entry.isIntersecting);
    });
});
 */

/* all time units are in milliseconds */ 

let fill_duration = 700;

let slide_delay = 750, slide_duration = 1000;
let global_delay = (slide_delay+slide_duration)*0.75;

let card = document.querySelector(".card");
observe(card, 1, (entry) => {
    let line = document.querySelector(".card__greeting::after");
    let name = document.getElementsByClassName(".name");
    let firstname = document.querySelector(".firstname");
    if (entry.isIntersecting) {
        card.style.animation = `card-slide ${slide_duration}ms ${slide_delay}ms cubic-bezier(0,.66,1,1.01) backwards,
            blur ${fill_duration}ms ${global_delay+fill_duration}ms forwards`;
        // line.style.animation = `animation: fill ${fill_duration}ms ${global_delay+fill_duration}ms backwards`;
        name.style.animation = `animation: name-slide ${fill_duration}ms ${global_delay}ms cubic-bezier(.63,0,.23,1.32) backwards`;
        firstname.style.animation = `animation: name-slide ${fill_duration}ms ${global_delay+100}ms cubic-bezier(.63,0,.23,1.32) backwards`;
    } else {
        card.style.animation = "";
        // line.style.animation = "";
        name.style.animation = "";
        firstname.style.animation = "";
    }
});
 */