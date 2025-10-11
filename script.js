function home() {
    var home = document.getElementById("home");
    home.scrollIntoView({behavior : "smooth",
                         block: "center"});

    document.getElementById("about").classList.remove("active1");
    document.getElementById("project").classList.remove("active2");
    document.getElementById("contact").classList.remove("active3");
    document.getElementById("welcome").classList.remove("active4");
    document.getElementById("identit").classList.remove("active5");

    setTimeout(() => {
        document.getElementById("welcome").classList.add("active4");
        document.getElementById("identit").classList.add("active5");
    }, 300)
}

function about() {
    var about = document.getElementById("about");
    about.scrollIntoView({behavior : "smooth",
                         block: "center"});

    document.getElementById("about").classList.remove("active1");
    document.getElementById("project").classList.remove("active2");
    document.getElementById("contact").classList.remove("active3")
    document.getElementById("welcome").classList.remove("active4");
    document.getElementById("identit").classList.remove("active5");

    setTimeout(() => {
        document.getElementById("about").classList.add("active1");
    }, 300)
}

function project() {
    var project = document.getElementById("project");
    project.scrollIntoView({behavior : "smooth",
                         block: "center"});

    document.getElementById("about").classList.remove("active1");
    document.getElementById("project").classList.remove("active2");
    document.getElementById("contact").classList.remove("active3");
    document.getElementById("welcome").classList.remove("active4");
    document.getElementById("identit").classList.remove("active5");

    setTimeout(() => {
        document.getElementById("project").classList.add("active2");
    }, 300)
}

function contact() {
    var contact = document.getElementById("contact");
    contact.scrollIntoView({behavior : "smooth",
                         block: "center"});

    document.getElementById("about").classList.remove("active1");
    document.getElementById("project").classList.remove("active2");
    document.getElementById("contact").classList.remove("active3");
    document.getElementById("welcome").classList.remove("active4");
    document.getElementById("identit").classList.remove("active5");

    setTimeout(() => {
        document.getElementById("contact").classList.add("active3");
    }, 300)
}

function scrooooler(selector, animator = 'slide-in', threshold = 0.3) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animator);
            }
            else{
                entry.target.classList.remove(animator);
            }
        });
    }, {
        threshold: threshold
    });

    elements.forEach(el => observer.observe(el));
}

scrooooler('.about');
scrooooler('.project');
scrooooler('.contact');
scrooooler('.welcome');
scrooooler('.identity');

document.addEventListener("keydown", function(event){
    const scrollunit = 500;

    switch (event.key) {
        case "ArrowUp":
            window.scrollBy({ top: -scrollunit, behavior: "smooth"});
            break;
        case "ArrowDown":
            window.scrollBy({ top: scrollunit, behavior: "smooth"});
            break;
    }
});

window.addEventListener('scroll', () => {
    var scrolly = window.scrollY;
    var back = document.getElementById('body');
    back.style.backgroundPositionY = `${scrolly * 0.5}px`;
})

document.querySelectorAll('.project-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

const createParticle = () => {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = `rgba(0, ${Math.random() * 255}, 255, 0.6)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-10px';
    particle.style.zIndex = '0';
    particle.style.boxShadow = '0 0 10px currentColor';

    document.body.appendChild(particle);

    let yPos = -10;
    let xPos = parseFloat(particle.style.left);
    let xVel = (Math.random() - 0.5) * 2;

    const animate = () => {
        yPos += 2;
        xPos += xVel;
        particle.style.top = yPos + 'px';
        particle.style.left = xPos + 'px';
        particle.style.opacity = 1 - (yPos / window.innerHeight);

        if (yPos < window.innerHeight) {
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    };

    animate();
};

setInterval(createParticle, 300);

document.querySelectorAll('.navbar>ul>li').forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});
