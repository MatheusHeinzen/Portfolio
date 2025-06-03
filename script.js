// Initialize AOS animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Atualiza o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    updateThemeIcon(currentTheme);
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
        updateThemeIcon('');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeIcon('dark-mode');
    }
});

function updateThemeIcon(theme) {
    if (theme === 'dark-mode') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Project details modal
const projectDetailBtns = document.querySelectorAll('.project-detail-btn');
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalCodeLink = document.getElementById('modalCodeLink');

const projects = {
    freela: {
        title: "FreeLa - Plataforma de Freelancers",
        description: "O FreeLa é uma plataforma que conecta freelancers e clientes para projetos de desenvolvimento de software. O projeto está em andamento e está sendo desenvolvido com Flask no backend.",
        features: [
            "Sistema de autenticação de usuários",
            "Painel de controle para freelancers e clientes",
            "Busca de profissionais",
            "Sistema de avaliações"
        ],
        technologies: ["Python", "Flask", "MySQL", "Bootstrap"],
        challenges: [
            "Implementar sistema de autenticação seguro",
            "Criar um sistema de busca eficiente",
            "Garantir boa experiência do usuário"
        ],
        codeUrl: "https://github.com/MatheusHeinzen/Free-La"
    },
    react: {
        title: "Mood Daily",
        description: "Projeto frontend desenvolvido com React para visualização do clima de forma mais interativa.",
        features: [
            "Componentes reutilizáveis",
            "Uso de API de tempo.",
            "Responsividade para mobile"
        ],
        technologies: ["React", "JavaScript", "Bootstrap", "HTML5"],
        challenges: [
            "Aprender os fundamentos do React",
            "Implementar boas práticas de componentização",
            "Gerenciar estado da aplicação"
        ],
        codeUrl: "https://github.com/MatheusHeinzen/Mood-Daily"
    },
    java: {
        title: "Sistema Java",
        description: "Aplicação backend desenvolvida em Java para gestão de artes.",
        features: [
            "CRUD completo",
            "Programação orientada a objetos",
            "Tratamento de exceções"
        ],
        technologies: ["Java", "Swift"],
        challenges: [
            "Dominar conceitos de OOP",
            "Implementar padrões de projeto",
            "Gerenciar interface gráfica no Java",
            "Trabalhar com dados gravados em arquivos"
        ],
        codeUrl: "https://github.com/MatheusHeinzen/ArtDoc"
    }
};

projectDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        const project = projects[projectId];

        modalTitle.textContent = project.title;
        modalCodeLink.href = project.codeUrl;

        let html = `
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Descrição</h6>
                            <p>${project.description}</p>
                            
                            <h6 class="mt-4">Tecnologias</h6>
                            <div class="mb-3">
                `;

        project.technologies.forEach(tech => {
            html += `<span class="badge bg-light text-dark me-2">${tech}</span>`;
        });

        html += `
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h6>Principais Funcionalidades</h6>
                            <ul>
                `;

        project.features.forEach(feature => {
            html += `<li>${feature}</li>`;
        });

        html += `
                            </ul>
                            
                            <h6 class="mt-4">Desafios</h6>
                            <ul>
                `;

        project.challenges.forEach(challenge => {
            html += `<li>${challenge}</li>`;
        });

        html += `
                            </ul>
                        </div>
                    </div>
                `;

        modalBody.innerHTML = html;
        projectModal.show();
    });
});

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar active link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
});