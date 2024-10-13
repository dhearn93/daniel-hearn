const projects = [
    {
        title: "Conscious Effort",
        description: "This is my main project - building simulated consciousness and the most advanced AI architecture.",
        technologies: ["Python", "Pytorch"],
        imageUrl: "images/ce-logo.png",
        url: "https://consciouseffort.dev"
    },
    {
        title: "IDK (I Do Know)",
        description: "A web app that uses real-time transcription of a conversation so you will <i>always</i> know the correct answer in an interview.",
        technologies: ["AssemblyAI", "ChatGPT", "NextJS"],
        imageUrl: "images/idk-logo.png",
        url: "https://idoknow.info"
    },
    {
        title: "vent.zone",
        description: "A simple and anonymous way to vent about anything.",
        technologies: ["NextJS", "TailwindCSS", "Supabase"],
        imageUrl: "images/ventzone.png",
        url: "https://vent.zone"
    }
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-image-container">
            <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
        </div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        <a href="${project.url}" class="read-more" target="_blank">Go to project <i class="fas fa-arrow-right"></i></a>
    `;
    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-list');
    projects.forEach(project => {
        projectsContainer.appendChild(createProjectCard(project));
    });
});