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
    },
    planilhas: {
        title: "Planilhas - Leitor de Planilhas",
        description: "Aplicação desenvolvida em Python para leitura de planilhas e criação de gráficos.",
        features: [
            "Cadastro de Usuário",
            "Cadastro de Abas para gerenciamento de planilhas",
            "Abas personalizadas",
            "Gráficos dinâmicos",
            "Interface gráfica simples e intuitiva"
        ],
        technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
        challenges: [
            "Gerenciar a leitura de arquivos Excel",
            "Transformar dados em gráficos",
            "Simplicar um projeto complexo em uma interface amigável",
            "Persistir dados de diversas planilhas em suas abas"
        ],
        lessons: [
            "Manipulação de arquivos Excel com Panda",
            "Criação de gráficos dinâmicos com Plotly",
            "Desenvolvimento de interfaces com Streamlit"
        ],
        codeUrl: "https://github.com/MatheusHeinzen/Leitor-de-Planilhas",
        demoUrl: "#"
    },
    finanset: {
        title: "Finanset - Gestão de Precatórios",
        description: "Plataforma completa para extração, cálculo e gestão de precatórios, reduzindo o tempo de análise em até 80% e aumentando a precisão das negociações.",
        features: [
            "Extração de processos com atualização em tempo real",
            "Calculadora de valuation com índices regulatórios",
            "Dashboard com filtros avançados e exportação de dados"
        ],
        technologies: ["React", ".NET", "Azure", "Filas"],
        challenges: [
            "Garantir consistência e rastreabilidade ao longo do fluxo de extração e cálculo",
            "Manter atualizações em tempo real com boa performance",
            "Entregar uma experiência de uso rápida em cenários com alto volume de dados"
        ],
        lessons: [
            "Boas práticas de arquitetura para sistemas orientados a eventos",
            "Observabilidade e monitoramento em produção",
            "Evolução incremental de funcionalidades com foco em valor de negócio"
        ],
        codeUrl: "#",
        demoUrl: "https://www.finanset.com.br",
        ctaLabel: "Ver site",
        ctaIconClass: "fas fa-globe",
        ctaUrl: "https://www.finanset.com.br"
    },
    sgsCadi: {
        title: "SGS-CADI - Gestão Social",
        description: "Plataforma para gestão social de uma organização social, centralizando rotinas administrativas e financeiras.",
        features: [
            "Gestão de matrículas",
            "Gestão de colaboradores",
            "Gestão financeira"
        ],
        technologies: ["React", "Spring Boot", "Azure"],
        challenges: [
            "Modelar regras de negócio de áreas diferentes (matrículas, pessoas e finanças)",
            "Garantir segurança e controle de acesso por perfis",
            "Padronizar integrações e validações entre módulos"
        ],
        lessons: [
            "Desenho de módulos e boundaries mais claros",
            "Validação e consistência de dados ao longo do domínio",
            "Deploy e operação de aplicações web na nuvem"
        ],
        codeUrl: "#",
        demoUrl: "https://witty-sky-0acf7c610.2.azurestaticapps.net/",
        ctaLabel: "Ver demo",
        ctaIconClass: "fas fa-link",
        ctaUrl: "https://witty-sky-0acf7c610.2.azurestaticapps.net/"
    }
};

const projectDetailBtns = document.querySelectorAll('.project-detail-btn');
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalCodeLink = document.getElementById('modalCodeLink');
const body = document.body;
let scrollToTopBtn;
const isEnglish = document.documentElement.lang.toLowerCase().startsWith('en');
const uiText = {
    modal: {
        description: isEnglish ? "Description" : "Descricao",
        technologies: isEnglish ? "Technologies" : "Tecnologias",
        challenges: isEnglish ? "Challenges" : "Desafios",
        features: isEnglish ? "Key Features" : "Principais Funcionalidades",
        lessons: isEnglish ? "Lessons Learned" : "Licoes Aprendidas",
        defaultCta: isEnglish ? "Source Code" : "Codigo Fonte"
    },
    contact: {
        sending: isEnglish ? "Sending..." : "Enviando...",
        submit: isEnglish ? "Send Message" : "Enviar Mensagem",
        success: isEnglish
            ? "Message sent successfully! I will get back to you soon."
            : "Mensagem enviada com sucesso! Entrarei em contato em breve.",
        error: isEnglish
            ? "An error occurred while sending your message. Please try again later."
            : "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde."
    },
    scrollTop: isEnglish ? "Back to top" : "Voltar ao topo"
};

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
    const darkEnabled = theme === 'dark-mode';
    themeToggle.setAttribute('aria-pressed', String(darkEnabled));
    if (theme === 'dark-mode') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Load project details into modal
function buildModalList(iconClass, items) {
    const list = document.createElement('ul');
    list.className = 'list-unstyled';
    items.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'mb-2';
        const icon = document.createElement('i');
        icon.className = `${iconClass} text-primary me-2`;
        li.append(icon, document.createTextNode(item));
        list.appendChild(li);
    });
    return list;
}

function addModalSection(container, title, contentNode, withTopMargin) {
    const heading = document.createElement('h6');
    heading.className = withTopMargin ? 'fw-bold mt-4' : 'fw-bold';
    heading.textContent = title;
    container.appendChild(heading);
    container.appendChild(contentNode);
}

projectDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        const project = projects[projectId];

        modalTitle.textContent = project.title;
        const ctaUrl = project.ctaUrl ?? project.codeUrl;
        const ctaLabel = project.ctaLabel ?? uiText.modal.defaultCta;
        const ctaIconClass = project.ctaIconClass ?? "fab fa-github";

        if (!ctaUrl || ctaUrl === "#") {
            modalCodeLink.classList.add('d-none');
        } else {
            modalCodeLink.classList.remove('d-none');
            modalCodeLink.href = ctaUrl;
            modalCodeLink.innerHTML = `<i class="${ctaIconClass} me-2"></i>${ctaLabel}`;
        }

        const row = document.createElement('div');
        row.className = 'row';
        const leftCol = document.createElement('div');
        leftCol.className = 'col-md-6';
        const rightCol = document.createElement('div');
        rightCol.className = 'col-md-6';

        const descriptionText = document.createElement('p');
        descriptionText.textContent = project.description;
        addModalSection(leftCol, uiText.modal.description, descriptionText, false);

        const technologiesWrap = document.createElement('div');
        technologiesWrap.className = 'mb-3';
        project.technologies.forEach((tech) => {
            const badge = document.createElement('span');
            badge.className = 'badge bg-light text-dark me-2 mb-2';
            badge.textContent = tech;
            technologiesWrap.appendChild(badge);
        });
        addModalSection(leftCol, uiText.modal.technologies, technologiesWrap, true);
        addModalSection(leftCol, uiText.modal.challenges, buildModalList('fas fa-check-circle', project.challenges), true);
        addModalSection(rightCol, uiText.modal.features, buildModalList('fas fa-star', project.features), false);
        addModalSection(rightCol, uiText.modal.lessons, buildModalList('fas fa-lightbulb', project.lessons), true);

        row.append(leftCol, rightCol);
        modalBody.replaceChildren(row);
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
let ticking = false;

function handleScroll() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

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

    if (scrollToTopBtn) {
        scrollToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');
let isSubmitting = false;
if (typeof emailjs !== 'undefined') {
    emailjs.init('ogAQD7bIuXmYZ7fdj');
}

function showFormAlert(type, message) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} mt-3`;
    const iconClass = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    alert.innerHTML = `<i class="${iconClass} me-2"></i>${message}`;
    contactForm.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (isSubmitting || typeof emailjs === 'undefined') return;
        isSubmitting = true;
        if (contactSubmitBtn) {
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.textContent = uiText.contact.sending;
        }
        
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
                showFormAlert('success', uiText.contact.success);
                contactForm.reset();
            }, (error) => {
                showFormAlert('danger', uiText.contact.error);
                console.error('EmailJS Error:', error);
            }).finally(() => {
                isSubmitting = false;
                if (contactSubmitBtn) {
                    contactSubmitBtn.disabled = false;
                    contactSubmitBtn.textContent = uiText.contact.submit;
                }
            });
    });
}

// Scroll to top button
scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'btn btn-primary scroll-to-top';
scrollToTopBtn.title = uiText.scrollTop;
document.body.appendChild(scrollToTopBtn);

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

handleScroll();