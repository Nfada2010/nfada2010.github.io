const indexContainer = document.querySelector(".index_container")

let aboutMeButton = document.querySelector(".about_me_button")
// let skillButton = document.querySelector(".skill_button")
// let websiteButton = document.querySelector(".website_button")
// let projectButton = document.querySelector(".project_button")
// let homeButton = document.querySelector(".home_button")

const aboutMe = () =>{
    
if (indexContainer.firstChild){
    indexContainer.innerHTML = ""
}
const aboutMeCard = document.createElement("div")
const aboutMeAnchor = document.createElement("div")
aboutMeAnchor.classList.add("about_me_anchor")
aboutMeAnchor.classList.add("about_me_card")
indexContainer.appendChild(aboutMeAnchor)
aboutMeAnchor.appendChild(aboutMeCard)
aboutMeCard.innerHTML = `<header class="header">
About Me
</header>

<div class="aboutMeContainer">
<h1>
    Where I am From
</h1>
<title>
    About Me
</title>

<body class="bodyText skillText1">
    -Born and raised in Cleveland Ohio. I love The Browns, Coleslaw on hamburgers, and i believe there are only two
    seasons Winter and Construction.
    I grew up in the Shipping industry going to my families warehouse after school and helping around the dock.
    I have spent the last few years starting and growing my own Shipping company in Columbus.
    While the business matured I took on more roles to meet the new demands.
    Technology quickly became my number one focus, the more i learned, the more i wanted to learn.
    What started out as a way to troubleshoot printer problems became a new medium for me to enhance and further
    develop my business as well as myself.

</body>

<h2>
    Interests
</h2>

<title>
    Pc Gaming
</title>

<body class="aboutMeCont skillText1">

    - I am mainly a solo gamer, but i do play League of Legends and Rocket League competatively as well.
    -I Twitch stream and moderate several Discord Channels.

    <main>
        <img src="../Images/discord-logo-logodownload-download-logotipos-1.png" alt="Discord logo" width="100px"
            height="100px">
        <img src="../Images/twitch-app-logo-png-3.png" alt="Twitch logo" width="100px" height="100px">
    </main>


</body>

<title>
    Animals
</title>

<body>
    - 3 pets: -Bella 6 years old black lab- | -Akko 1 year old Rottweiler Mastiff Mix- | -Circe 3 years old Scardy
    Cat- |
</body>

<main class="main_photos">
    <img src="../Images/IMG_7064.jpg" alt="bella" width="250" height="250" border-radus="20px">
    <img src="../Images/IMG_6833-ANIMATION.gif" alt="akko" width="250" height="250">
    <img src="../Images/IMG_7197.jpg" alt="circe cella" width="250" height="250" v>

</main>


<title>
    Music
</title>

<body>
    -I play the guitar and bass, always interested in playing with others.
</body>
<main>
    <img src="../Images/Guitar-Transparent-Background-PNG-1.png" alt="guitar" width=auto height="150">
    <img src="../Images/bass guitar.png" alt="bass guitar" width=auto height="150">

</main>

<title>
    Sports
</title>

<body>
    -I am a Die-hard Browns fan and Commissioner in multiple leagues of Fantasy Football
</body>

<main>
    <img src="../Images/cleveland-browns-logo-transparent.png" alt="browns logo" width="100px" height="100px">
</main>






</div>
<footer class="footer">

<button class="button">

    <p><a href="Skills.html"> Skills </a> </p>
</button>

<button class="button">

    <p><a href="Projects.html"> Projects </a> </p>
</button>

<button class="button">

    <p><a href="Websites.html"> Websites </a> </p>
</button>
<button class="button">

    <p><a href="index.html"> Back to the Main Page </a> </p>
</button>
</footer>`
}


// const skill = () =>{

// }

// const website = () =>{

// }

// const project = () => {

// }

// const home = () =>{

// }


aboutMeButton.addEventListener("click",aboutMe)
// skillButton.addEventListener("click",skill)
// websiteButton.addEventListener("click",website)
// projectButton.addEventListener("click",project)
// homeButton.addEventListener("click",home)