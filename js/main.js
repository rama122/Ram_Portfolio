// navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >=offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        }
    });

//  sticky header   
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // menubar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
var nav = document.getElementById("navbar")
var navlinks= nav.getElementsByClassName("nav-link")
for (var i=0;i<navlinks.length;i++){
    navlinks[i].addEventListener('click', function() {
        var current =document.getElementsByClassName("active")
        current[0].className=current[0].className.replace("active")
        this.className +=" active";
    })
}
// skill
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots *marked/100);
    var points = "";
    var rotate = 360 / dots;
    for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points; 
    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})

// contact
const form = document.getElementById('form');
const rname = document.getElementById('name');
const remail = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('message');
var a = 0;
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    if (a == 4) {
        alert('Message Sent Successful');
        
    } else {
        a = 0;
    }
});
function checkInputs() {
    const nameValue = rname.value.trim();
    const emailValue = remail.value.trim();
    const msgValue = msg.value.trim();
    const phoneValue = phone.value.trim();

    if (nameValue === '') {
        setErrorFor(rname, 'Name need to fill')
    }
    else {
        setSuccessFor(rname);
    }

    if (emailValue === '') {
        setErrorFor(remail, 'Email cannot be blank')
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(remail, 'Invalid email')
    }
    else {
        setSuccessFor(remail)

    }
    if (msgValue === '') {
        setErrorFor(msg, 'Message connot be blank')
    }
    else {
        setSuccessFor(msg)
    }

    if (phoneValue === '') {
        setErrorFor(phone, 'Phone no connot be blank')
    }
    else if (phoneValue.length != 10) {
        setErrorFor(phone, 'Number should be 10 digits')
    }
    else {
        setSuccessFor(phone)

    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'error input';
    small.innerText = message;
}

function setSuccessFor(input) {
    a += 1;
    const formControl = input.parentElement;
    formControl.className = 'success input';
}

function isEmail(remail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(remail);
}
