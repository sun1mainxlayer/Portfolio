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


// here we are adding scroll by arrow key :)

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


