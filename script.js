// Project details data
const projects = {
    freela: {
        title: "FreeLa - Plataforma de Freelancers",
        description: "O FreeLa é uma plataforma que conecta freelancers e clientes para projetos de desenvolvimento de software. O projeto está em andamento e está sendo desenvolvido com Flask no backend.",
        features: [
            "Sistema de autenticação de usuários com Flask-Login",
            "Painel de controle para freelancers e clientes",
            "Sistema de busca avançada com filtros",
            "Avaliações e reputação de usuários",
            "Integração com serviços de pagamento"
        ],
        technologies: ["Python", "Flask", "MySQL", "Bootstrap", "Jinja2"],
        challenges: [
            "Implementar sistema de autenticação seguro com hash de senhas",
            "Desenvolver um sistema de busca eficiente com múltiplos filtros",
            "Garantir boa experiência do usuário em diferentes dispositivos",
            "Implementar sistema de notificações em tempo real"
        ],
        lessons: [
            "Melhores práticas de estruturação de projetos Flask",
            "Gerenciamento de sessões de usuário",
            "Otimização de consultas ao banco de dados",
            "Princípios de design responsivo"
        ],
        codeUrl: "https://github.com/MatheusHeinzen/Free-La",
        demoUrl: "#"
    },
    react: {
        title: "Mood Daily - Aplicativo de Clima",
        description: "Aplicativo web desenvolvido com React para visualização do clima de forma interativa e intuitiva, consumindo dados de API meteorológica.",
        features: [
            "Visualização em tempo real das condições climáticas",
            "Previsão para os próximos 5 dias",
            "Sistema de favoritos para locais",
            "Tema escuro/claro",
            "Responsivo para mobile"
        ],
        technologies: ["React", "JavaScript", "CSS3", "OpenWeather API", "Context API"],
        challenges: [
            "Gerenciamento de estado com Context API",
            "Consumo eficiente de API externa",
            "Implementação de sistema de favoritos",
            "Criação de componentes reutilizáveis"
        ],
        lessons: [
            "Fundamentos do React e hooks",
            "Boas práticas de componentização",
            "Gerenciamento de estado global",
            "Tratamento de erros em chamadas API"
        ],
        codeUrl: "https://github.com/MatheusHeinzen/Mood-Daily",
        demoUrl: "#"
    },
    java: {
        title: "ArtDoc - Gestão de Arte Digital",
        description: "Aplicação desktop desenvolvida em Java para organização e catalogação de arte digital, com sistema de tags e busca avançada.",
        features: [
            "CRUD completo para itens de arte",
            "Sistema de categorização com tags",
            "Busca avançada com múltiplos critérios",
            "Exportação/importação de dados",
            "Interface gráfica com Java Swing"
        ],
        technologies: ["Java", "Swing", "JDBC", "SQLite"],
        challenges: [
            "Dominar conceitos de programação orientada a objetos",
            "Implementar padrões de projeto MVC",
            "Gerenciar interface gráfica no Java Swing",
            "Trabalhar com persistência de dados"
        ],
        lessons: [
            "Princípios SOLID",
            "Padrão MVC na prática",
            "Serialização de objetos",
            "Tratamento de exceções"
        ],
        codeUrl: "https://github.com/MatheusHeinzen/ArtDoc",
        demoUrl: "#"
    }
};

const projectDetailBtns = document.querySelectorAll('.project-detail-btn');
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalCodeLink = document.getElementById('modalCodeLink');
const body = document.body;

// Initialize AOS animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Atualiza o ano no footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    updateThemeIcon(currentTheme);
}

if (themeToggle) {
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
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'dark-mode') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Load project details into modal
projectDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        const project = projects[projectId];

        modalTitle.textContent = project.title;
        modalCodeLink.href = project.codeUrl;

        let html = `
            <div class="row">
                <div class="col-md-6">
                    <h6 class="fw-bold">Descrição</h6>
                    <p>${project.description}</p>
                    
                    <h6 class="fw-bold mt-4">Tecnologias</h6>
                    <div class="mb-3">
        `;

        project.technologies.forEach(tech => {
            html += `<span class="badge bg-light text-dark me-2 mb-2">${tech}</span>`;
        });

        html += `
                    </div>
                    
                    <h6 class="fw-bold mt-4">Desafios</h6>
                    <ul class="list-unstyled">
        `;

        project.challenges.forEach(challenge => {
            html += `<li class="mb-2"><i class="fas fa-check-circle text-primary me-2"></i>${challenge}</li>`;
        });

        html += `
                    </ul>
                </div>
                <div class="col-md-6">
                    <h6 class="fw-bold">Principais Funcionalidades</h6>
                    <ul class="list-unstyled">
        `;

        project.features.forEach(feature => {
            html += `<li class="mb-2"><i class="fas fa-star text-primary me-2"></i>${feature}</li>`;
        });

        html += `
                    </ul>
                    
                    <h6 class="fw-bold mt-4">Lições Aprendidas</h6>
                    <ul class="list-unstyled">
        `;

        project.lessons.forEach(lesson => {
            html += `<li class="mb-2"><i class="fas fa-lightbulb text-primary me-2"></i>${lesson}</li>`;
        });

        html += `
                    </ul>
                </div>
            </div>
            
            <div class="mt-4 text-center">
                <a href="${project.codeUrl}" class="btn btn-primary" target="_blank">
                    <i class="fab fa-github me-2"></i>Código Fonte
                </a>
            </div>
        `;

        modalBody.innerHTML = html;
        projectModal.show();
    });
});

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Update URL without page refresh
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
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

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Initialize EmailJS
        emailjs.init('ogAQD7bIuXmYZ7fdj'); // Substitua pelo seu User ID do EmailJS
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Send email
        emailjs.send('service_qdgmsjy', 'template_0dqgbb3', formData) // Substitua pelos seus IDs
            .then(() => {
                // Show success message
                const alert = document.createElement('div');
                alert.className = 'alert alert-success mt-3';
                alert.innerHTML = `
                    <i class="fas fa-check-circle me-2"></i>
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                `;
                contactForm.appendChild(alert);
                
                // Reset form
                contactForm.reset();
                
                // Remove alert after 5 seconds
                setTimeout(() => {
                    alert.remove();
                }, 5000);
            }, (error) => {
                // Show error message
                const alert = document.createElement('div');
                alert.className = 'alert alert-danger mt-3';
                alert.innerHTML = `
                    <i class="fas fa-exclamation-circle me-2"></i>
                    Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.
                `;
                contactForm.appendChild(alert);
                
                console.error('EmailJS Error:', error);
            });
    });
}

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'btn btn-primary scroll-to-top';
scrollToTopBtn.title = 'Voltar ao topo';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Tooltip initialization
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Load GitHub stats with light/dark theme support
function updateGitHubStatsTheme() {
    const isDarkMode = body.classList.contains('dark-mode');
    const statsImages = document.querySelectorAll('.github-stats');
    
    statsImages.forEach(img => {
        const src = img.src;
        const newSrc = isDarkMode ? 
            src.replace('theme=default', 'theme=dark') :
            src.replace('theme=dark', 'theme=default');
        
        if (src !== newSrc) {
            img.src = newSrc;
        }
    });
}

// Observe theme changes
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
            updateGitHubStatsTheme();
        }
    });
});

observer.observe(body, {
    attributes: true
});

// Initialize with correct theme
updateGitHubStatsTheme();

// Add animation to elements when they become visible
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('[data-aos]').forEach(el => {
    animateOnScroll.observe(el);
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('loaded');
            setTimeout(() => {
                preloader.remove();
            }, 1000);
        }, 500);
    }
});