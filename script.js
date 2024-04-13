//---------------------
// Active Nav Bar Links
//---------------------
function addActiveClassToNavLinksOnScroll() {
  let navLinks = document.querySelectorAll('#nav-bar #navbarNav li a');

  window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + (window.innerHeight / 2);

    navLinks.forEach(link => {
      let sectionId = link.getAttribute('href').substring(1);
      let section = document.getElementById(sectionId);

      if (section) {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

        if (fromTop >= sectionTop && fromTop <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });
}

// Call the function to activate the behavior
addActiveClassToNavLinksOnScroll();

//---------------------------------
// When scroll animate about header
//---------------------------------
$(document).on('scroll', function(){
    $('#about .content h1').css("left", Math.max(1100 - 0.35*window.scrollY)+ "px");
});

//-----------------
// Read More Button
//-----------------
function addReadMoreListener() {
  btn = document.getElementById('button');

  if(btn.innerHTML == "Read More"){
    document.getElementById('span').style.display='initial';
    btn.innerHTML="Read Less";
    document.getElementById('button').style.marginTop='2%';
  }else{
    document.getElementById('span').style.display='none';
    btn.innerHTML="Read More";
    document.getElementById('button').style.marginTop='0%';
  }
}

//----------------------------------------
// When scroll animate skills progress bar
//----------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector('#skills ul');
    const progressLines = document.querySelectorAll('.line');

    function showProgress(){
        progressLines.forEach(progressLines => {
            const value = progressLines.dataset.progress;
            progressLines.style.opacity = 1;
            progressLines.style.width = `${value}%`;
        });
    }

    function hideProgress() {
        progressLines.forEach(progressLine => {
          progressLine.style.opacity = 0;
          progressLine.style.width = '0%';
        });
      }

    window.addEventListener('scroll', () => {
      const skillsPos1 = skillsSection.getBoundingClientRect().top;
      const skillsPos2 = skillsSection.getBoundingClientRect().bottom;
      const screenPos = (window.innerHeight / 4)*3;

      if (skillsPos1 < screenPos) {
          showProgress();
        } else if (skillsPos2 < screenPos) {
          showProgress();
        } else {
          hideProgress();
        }
    });
});

//----------------------------------------
// When scroll animate projects images bar
//----------------------------------------
window.addEventListener("load", eventListener);
window.addEventListener("scroll", eventListener);

function eventListener() {
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
}

function revealOnScroll() {
    const projectSection = document.querySelector("#projects");
    let windowHeight = window.innerHeight;
    let sectionRecTop = projectSection.getBoundingClientRect().top;
    let revealPoint = -250;

    if (sectionRecTop < windowHeight - revealPoint) {
        projectSection.classList.add("active");
        revealCards(projectSection);
    }
    else{
      projectSection.classList.remove("active");
    }
}

function revealCards(projectSection) {
    let reveals = projectSection.querySelectorAll(".reveal");

    reveals.forEach((reveal, index) => {
        const delay = 600;
        setTimeout(() => {
            reveal.classList.add("active");
        }, index * delay);
    });
}



//---------------------------------
// Sending Email in Hire Me Section
//---------------------------------
function sendEmail() {
  const params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
  };

  const serviceID = "service_36kvrtb";
  const templateID = "template_j2vogqo";

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          document.getElementById('name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('message').value = "";
          Swal.fire({
              title: 'Success!',
              text: 'Your email has been sent successfully.',
              icon: 'success',
              confirmButtonText: 'Cool'
          });
      })
      .catch(err => {
          console.log(err);
          Swal.fire({
              title: 'Error!',
              text: 'Failed to send email. Please try again later.',
              icon: 'error',
              confirmButtonText: 'OK'
          });
      });
}

