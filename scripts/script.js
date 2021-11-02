/* function observe(target, threshold, callback) {
    const observer = new IntersectionObserver(
        (entries, observer) => { entries.forEach(entry => { callback(entry); }); 
    });
    observer.observe(target, { threshold: threshold });
}

["card", "name", "firstname"].forEach(c => {
    observe(document.querySelector('.'+c), 1, (entry) => {
        entry.target.classList.toggle("animate-"+c, entry.isIntersecting);
    });
}); */