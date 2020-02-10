const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br/>Is<br/>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br/>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

navBar.forEach(element =>{
  element.style.color = 'green';
})

const home = document.createElement('a');
home.textContent = "Home";
home.style.color = "green";
const navBeg = document.querySelector('nav');
navBeg.prepend(home);

const support = document.createElement('a');
support.textContent = "Support";
support.style.color = "green";
navBeg.appendChild(support);

const header1 = document.querySelector('h1');
header1.innerHTML = siteContent["cta"]["h1"];

const btn = document.querySelector('button');
btn.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const titles = document.querySelectorAll('h4');
titles[0].textContent = siteContent["main-content"]["features-h4"];
titles[1].textContent = siteContent["main-content"]["about-h4"];
titles[2].textContent = siteContent["main-content"]["services-h4"];
titles[3].textContent = siteContent["main-content"]["product-h4"];
titles[4].textContent = siteContent["main-content"]["vision-h4"];
titles[5].textContent = siteContent["contact"]["contact-h4"];

const filler = document.querySelectorAll('p');
filler[0].textContent = siteContent["main-content"]["features-content"];
filler[1].textContent = siteContent["main-content"]["about-content"];
filler[2].textContent = siteContent["main-content"]["services-content"];
filler[3].textContent = siteContent["main-content"]["product-content"];
filler[4].textContent = siteContent["main-content"]["vision-content"];
filler[5].innerHTML = siteContent["contact"]["address"];
filler[6].textContent = siteContent["contact"]["phone"];
filler[7].textContent = siteContent["contact"]["email"];
filler[8].textContent = siteContent["footer"]["copyright"];