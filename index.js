
function classToggle() {
    $('.Navbar__Link-toggle').click(function() {
        $('.drop-down-nav').toggleClass('Navbar__ToggleShow');
    });
}

const project = [
    {
        name: 'Avengers Quiz App',
        info: 'A quiz to test your knowdlege abour Avengers: Infinity War movie. Take the quiz and see how well you do :-).',
        about: "I built this app because I'm a big Marvel fan.",
        skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        demo: 'https://ekora87.github.io/Quizz-App-Full/',
        code: 'https://github.com/ekora87/Quizz-App-Full.git',
        image: 'quiz-app.png'
    },

    {
        name: 'Space Project',
        info: 'This app utilize NASA API and SpaceX API (unofficial) to display SpaceX Missions details, NASA Astronomy picture of the day and NASA rovers details.',
        about: 'I love space. There is so much to explore.',
        skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        demo: 'https://ekora87.github.io/Space-Project/',
        code: 'https://github.com/ekora87/Space-Project.git',
        image: 'https://user-images.githubusercontent.com/16996692/58388094-8fe38d00-7fdf-11e9-9f9d-75d5cfd273f0.PNG'
    }
]

function renderProjects(list) {
    for (let i=0; i<list.length; i++) {
        $('.project-main').append(`<section class="project" role="region">
                    <div class="project-container">
                    <h3>${list[i].name}</h3>
                    <p>${list[i].info}</p>
                    <p>${list[i].about}</p>
                    <h4>Technologies Used</h4>
                    <div class="technologies">
                        <button class="tech-btn" type="button">${list[i].skills[0]}</button>
                        <button class="tech-btn" type="button">${list[i].skills[1]}</button>
                        <button class="tech-btn" type="button">${list[i].skills[2]}</button>
                        <button class="tech-btn" type="button">${list[i].skills[3]}</button>
                    </div>
                    <a class="project-btn" href="${list[i].demo}" target="_blank">View Demo</a>
                    <a class="project-btn" href="${list[i].code}" target="_blank">View Code</a>
                    </div>
                    <a class="project-pic-link" href="${list[i].demo}" target="_blank">
                        <img class="project-pic" src="${list[i].image}" alt="avenger quiz app screen shot">
                    </a></section><hr>
                    `)
    }
}


classToggle();
renderProjects(project);