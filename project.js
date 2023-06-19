let projectData = [
    {
        image: 'img/cidade.jpg',
        name: 'Buscador de Cep',
        detail: 'Projeto feito com o uso de uma APi, no qual te retorna dados sobre o cep digitado',
        github: 'https://github.com/niltoncesar3/buscadorCep',
        live: 'https://niltoncesar3.github.io/buscadorCep/',
        tags: '#buscador de cep'
    },
    {
        image: 'img/email.jpg',
        name: 'Login de usuário',
        detail: 'Email : (Digite qualquer e-mail) <br> Senha precisa ser : 123456. <br> Se a senha for outra, um erro será exibido',
        github: 'https://github.com/niltoncesar3/form-login',
        live: 'https://niltoncesar3.github.io/form-login/',
        tags: '#login email e senha'
    },
    {
        image: 'img/word (2).jpg',
        name: 'Adivinhe a palavra',
        detail: 'Projeto de adivinhar a palavra, se você errar o jogo será reiniciado.',
        github: 'https://github.com/niltoncesar3/guessTheWord',
        live: 'https://niltoncesar3.github.io/guessTheWord/',
        tags: '#adivinhe a palavra'
    },
    {
        image: 'img/avião.jpg',
        name: 'Landing page',
        detail: 'Landing page sobre um site de compra de destinos para viagem.',
        github: 'https://github.com/niltoncesar3/travelProject',
        live: 'https://niltoncesar3.github.io/travelProject/#travel',
        tags: '#landing page'
    },
    {
        image: 'img/project-5.png',
        name: 'project five',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#fullstack'
    },
    {
        image: 'img/project-6.png',
        name: 'project six',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#css'
    },
    {
        image: 'img/project-7.png',
        name: 'project seven',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript'
    },
    {
        image: 'img/project-8.png',
        name: 'project eight',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#css'
    },
]

// creating project cards in frontend

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
    <div class="project-card" data-tags = "${data.tags}">
            <div class="project-wrapper">
              <div class="project-thumbnail">
                <img src="img/close.png" class="close-btn" alt="">
                <img src="${data.image}" class="project-img" alt="">
                <span class="tags">${data.tags}</span>
              </div>

              <div class="project-body">
                <h1 class="project-name">${data.name}</h1>
                <p class="project-detail">${data.detail}</p>
                <a href="${data.github}" target='_blank' class="btn">GitHub</a>
                <a href="${data.live}" target= '_blank' class="btn">Ver Site</a>
              </div>
            </div>
    </div>
    `
}

projectData.forEach(data=>createProjectCards(data))
