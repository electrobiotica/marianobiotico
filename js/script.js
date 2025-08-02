   
  // Get API key from environment variables or display error
    async function getApiKey() {
  throw new Error("API key no se usa en frontend. La llamada se maneja desde Flask.");
}

      
      // Try to get from a config endpoint (you'll need to create this)
      try {
        const response = await fetch('/api/config.json');
        if (response.ok) {
          const config = await response.json();
          return config.openaiApiKey;
        }
      } catch (error) {
        console.warn('Could not fetch API key from server - using temporary key for testing');
      }
      
      // Temporary fallback for local testing
      return TEMP_API_KEY;
   

    const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

    // === APPS DATA ===
    const apps = [
      { 
        nombre: "Terapeuta-AI",
        desc: "Asistente psicológico configurable por enfoque terapéutico. Herramienta de autoconocimiento y apoyo emocional.",
        link: "https://terapeuta-ai.onrender.com",
        icon: "🧠",
        img: "./images/tuterapiaai-c.webp",
        category: "salud",
        tags: ["IA", "Psicología", "Flask", "GPT"],
        status: "online"
      },
      { 
        nombre: "Te Lo Resumo AI Nomás",
        desc: "Resumí textos, artículos o links automáticamente. Procesamiento inteligente de información.",
        link: "https://teloresumoainomas.onrender.com",
        icon: "📝",
        img: "./images/teloresumo-c.webp",
        category: "ia",
        tags: ["IA", "NLP", "Productividad"],
        status: "online"
      },
      { 
        nombre: "News Analyzer AI",
        desc: "Análisis de sesgo político en medios digitales. Transparencia informativa con IA.",
        link: "https://news-analyzer-ai.onrender.com",
        icon: "📰",
        img: "./images/newsanalyzerai-c.webp",
        category: "ia",
        tags: ["IA", "Análisis", "Medios"],
        status: "online"
      },
      { 
        nombre: "MultiContratos",
        desc: "Analizador legal para contratos de alquiler, trabajo, música. Empoderamiento ciudadano.",
        link: "https://multicontratos.onrender.com",
        icon: "📋",
        img: "./images/multicontratos-c.webp",
        category: "legal",
        tags: ["Legal", "IA", "Contratos"],
        status: "online"
      },
      { 
        nombre: "Lyric Explainer AI",
        desc: "Interpretá letras de canciones con IA. Análisis cultural y literario de música.",
        link: "https://lyricexplainerai.onrender.com",
        icon: "🎵",
        img: "./images/lyric-c.webp",
        category: "cultura",
        tags: ["IA", "Música", "Análisis"],
        status: "online"
      },
      { 
        nombre: "Examnia",
        desc: "Generador de exámenes en PDF y DOCX. Herramienta educativa inteligente.",
        link: "https://examnia.onrender.com",
        icon: "📚",
        img: "./images/examgen-c.webp",
        category: "educacion",
        tags: ["Educación", "PDF", "IA"],
        status: "online"
      },
      { 
        nombre: "DR.AI Argentina",
        desc: "Agente médico experimental con análisis sintomático local. Salud accesible.",
        link: "https://dr-ai-ar.onrender.com",
        icon: "⚕️",
        img: "./images/drai-c.webp",
        category: "salud",
        tags: ["Salud", "IA", "Argentina"],
        status: "online"
      },
      { 
        nombre: "INpulsa Fest",
        desc: "Sitio oficial de organización y multimedia del evento. Gestión cultural integral.",
        link: "#",
        icon: "🎪",
        img: "./images/inpulsa.jpg",
        category: "cultura",
        tags: ["Eventos", "Gestión", "Cultura"],
        status: "offline"
      }
    ];

    // === MARIANO'S UPDATED CONTEXT FOR AI ===
const marianoContext = `Eres MarianoGPT, el asistente personal de Mariano Zuccarello. Respondes como si fueras él mismo, usando un tono casual argentino, inteligente y directo.

INFORMACIÓN SOBRE MARIANO ZUCCARELLO:

👨‍💻 CONSULTOR CREATIVO | DESARROLLADOR IA | REALIZADOR AUDIOVISUAL | PRODUCTOR MUSICAL:
- Se especializa en desarrollo de aplicaciones con IA, dirección de proyectos audiovisuales con IA, y creación de experiencias inmersivas
- Concepto "electrobiotica": puente entre inteligencia natural y artificial, lo analógico y digital, interfaz y experiencia sensible
- Trabajo con artistas, instituciones y festivales

🚀 SERVICIOS QUE OFRECE:
1. Consultoría creativa y tecnológica: Workshops, asesoramiento en IA, dirección de proyectos
2. Desarrollo de apps con IA: OpenAI, OCR, TTS, RAG, visión computacional, análisis semántico
3. Producción musical DAW + IA: Ableton Live, Pro Tools, FL Studio, Cubase, Logic Pro, Reason + Suno, Udio, MusicGen, ElevenLabs
4. Animación por encargo con IA: +60 videoclips con DALL·E, Veo, Runway, ComfyUI, AnimateDiff
5. Shows inmersivos e interactivos: DMX, sensores, mapping, interfaces corporales
6. Producción de eventos: INpulsa Fest, dirección artística y logística

🧠 STACK TECNOLÓGICO:
Texto/Lenguaje: GPT-4o, Claude, Gemini, Qwen, Mistral, Llama 3, LM Studio, Ollama
Audio/Música: Ableton Live, Pro Tools, Cubase, FL Studio, Logic, Reason, Suno, Udio, MusicGen, ElevenLabs
Imagen: Stable Diffusion, DALL·E, Midjourney, Leonardo AI, ControlNet
Video: Runway, Veo, Sora, Pika, AnimateDiff, Kaiber
Código: Python, Flask, JavaScript, HTML, Tailwind, APIs REST, OCR, PDF, TTS, RAG
Audiovisual/Interactivo: TouchDesigner, Max/MSP, MadMapper, Resolume, Adobe Suite, OBS Studio

🎯 LOGROS DESTACADOS:
- +60 videoclips con IA y 100% calificaciones positivas en Fiverr
- Fundador de INpulsa Fest (evento cultural autogestivo)
- Proyectos premiados: SOMA CIUDADANA (98.5%), ARCA LEX (100%)
- Creador de music@senlinea (red independiente)
- Compromiso social: charlas vecinales, asesoramiento ciudadano
- 8+ apps desarrolladas activas

APPS PRINCIPALES:
1. Terapeuta-AI: Asistente psicológico configurable
2. MultiContratos: Analizador legal para contratos
3. News Analyzer AI: Análisis de sesgo en medios
4. Te Lo Resumo AI: Procesamiento inteligente de textos
5. DR.AI Argentina: Agente médico experimental
6. Lyric Explainer AI: Interpretación cultural de música
7. Examnia: Generador de exámenes educativos

🌍 DISPONIBILIDAD:
Abierto a colaboraciones freelance o institucionales, remota o presencial, proyectos nacionales o globales.

PERSONALIDAD:
- Casual pero profesional, argentino
- Apasionado por la electrobiotica y el impacto social
- Experimental e innovador
- Combina arte, tecnología y experiencias inmersivas

Respondé siempre como Mariano, en primera persona, con conocimiento detallado de sus proyectos y filosofía electrobiotica.`;

    // === GLOBAL STATE ===
    let filteredApps = [...apps];
    let chatHistory = [];

    // === OPENAI API CALL (vía Flask backend) ===
async function callOpenAI(userMessage) {
  try {
    const messages = [
      { role: "system", content: marianoContext },
      ...chatHistory,
      { role: "user", content: userMessage }
    ];

    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: JSON.stringify(messages)
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error llamando a OpenAI desde el servidor:", error);
    throw error;
  }
}


    // === PROGRESS BAR ===
    function updateProgressBar() {
      const progressBar = document.getElementById('progress-bar');
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    }

    // === THEME TOGGLE ===
    function initThemeToggle() {
      const toggle = document.getElementById('theme-toggle');
      let isDark = true; // Default dark theme

      toggle.addEventListener('click', () => {
        isDark = !isDark;
        
        if (isDark) {
          document.documentElement.style.setProperty('--bg-primary', '#0a0a0a');
          document.documentElement.style.setProperty('--bg-secondary', '#111111');
          document.documentElement.style.setProperty('--text-primary', '#ffffff');
          document.documentElement.style.setProperty('--text-secondary', '#a0a0a0');
          document.documentElement.style.setProperty('--glass', 'rgba(255, 255, 255, 0.05)');
          document.documentElement.style.setProperty('--border', 'rgba(255, 255, 255, 0.1)');
          toggle.textContent = '🌙';
        } else {
          document.documentElement.style.setProperty('--bg-primary', '#ffffff');
          document.documentElement.style.setProperty('--bg-secondary', '#f8f9fa');
          document.documentElement.style.setProperty('--text-primary', '#111111');
          document.documentElement.style.setProperty('--text-secondary', '#666666');
          document.documentElement.style.setProperty('--glass', 'rgba(0, 0, 0, 0.05)');
          document.documentElement.style.setProperty('--border', 'rgba(0, 0, 0, 0.1)');
          toggle.textContent = '☀️';
        }
      });
    }

    // === NAVIGATION ===
    function initNavigation() {
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
          
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        });
      });

      // Update nav on scroll
      window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          const id = section.getAttribute('id');
          
          if (scrollPos >= top && scrollPos <= bottom) {
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              }
            });
          }
        });
      });
    }

    // === SEARCH & FILTER ===
    function initSearchAndFilter() {
      const searchInput = document.getElementById('search-input');
      const filterTags = document.querySelectorAll('.filter-tag');

      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterApps(query, getActiveFilter());
      });

      filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
          filterTags.forEach(t => t.classList.remove('active'));
          tag.classList.add('active');
          
          const filter = tag.getAttribute('data-filter');
          const query = searchInput.value.toLowerCase();
          filterApps(query, filter);
        });
      });
    }

    function getActiveFilter() {
      const activeTag = document.querySelector('.filter-tag.active');
      return activeTag ? activeTag.getAttribute('data-filter') : 'all';
    }

    function filterApps(query = '', filter = 'all') {
      filteredApps = apps.filter(app => {
        const matchesSearch = !query || 
          app.nombre.toLowerCase().includes(query) ||
          app.desc.toLowerCase().includes(query) ||
          app.tags.some(tag => tag.toLowerCase().includes(query));
        
        const matchesFilter = filter === 'all' || app.category === filter;
        
        return matchesSearch && matchesFilter;
      });

      renderApps();
    }

    // === APPS RENDERING ===
    function renderApps() {
      const grid = document.getElementById("apps-grid");
      grid.innerHTML = "";
      
      filteredApps.forEach((app, index) => {
        const card = document.createElement("div");
        card.className = "app-card";
        
        card.innerHTML = `
          <div class="app-image">
            <img src="${app.img}" alt="${app.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="app-fallback" style="display:none;">${app.icon}</div>
          </div>
          <div class="app-content">
            <div class="app-header">
              <h3 class="app-title">${app.nombre}</h3>
              <span class="app-category">${app.category.toUpperCase()}</span>
            </div>
            <p class="app-description">${app.desc}</p>
            <div class="app-tags">
              ${app.tags.map(tag => `<span class="app-tag">${tag}</span>`).join('')}
            </div>
            <div class="app-footer">
              <a href="${app.link}" target="_blank" class="app-link cursor-hover">
                Ver app →
              </a>
              <div class="app-status">
                <div class="status-dot ${app.status}"></div>
                <span>${app.status === 'online' ? 'Online' : 'Offline'}</span>
              </div>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    // === PREMIUM VISUAL EXPERIENCE ===
    function initCustomCursor() {
      const cursor = document.querySelector('.custom-cursor');
      const follower = document.querySelector('.custom-cursor-follower');

      if (!cursor || !follower) return;

      let mouseX = 0, mouseY = 0;
      let followerX = 0, followerY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        cursor.classList.add('active');
        follower.classList.add('active');
      });

      // Smooth follower animation
      function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
      }
      animateFollower();

      // Hide cursor when leaving window
      document.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');
      });

      // Hover effects
      document.querySelectorAll('.cursor-hover').forEach(el => {
        el.addEventListener('mouseenter', () => {
          el.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
          el.classList.remove('cursor-hover');
        });
      });
    }

    function initDynamicGlassmorphism() {
      const glassElements = document.querySelectorAll('.glass-dynamic');
      
      document.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        glassElements.forEach(el => {
          const elementTop = el.offsetTop;
          const elementHeight = el.offsetHeight;
          const windowHeight = window.innerHeight;
          
          if (scrolled > elementTop - windowHeight && scrolled < elementTop + elementHeight) {
            const intensity = Math.min(20, (scrolled - elementTop + windowHeight) / 50);
            el.style.backdropFilter = `blur(${intensity}px)`;
          }
        });
      });
    }

    function initScrollIndicator() {
      const dots = document.querySelectorAll('.scroll-dot');
      const sections = document.querySelectorAll('section[id]');

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const sectionId = dot.getAttribute('data-section');
          const section = document.getElementById(sectionId);
          
          if (section) {
            triggerPageTransition(() => {
              section.scrollIntoView({ behavior: 'smooth' });
            });
          }
        });
      });

      // Update active dot on scroll
      window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach((section, index) => {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          
          if (scrollPos >= top && scrollPos <= bottom) {
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[index]) dots[index].classList.add('active');
          }
        });
      });
    }

    function triggerPageTransition(callback) {
      const transition = document.querySelector('.page-transition');
      
      transition.classList.add('active');
      
      setTimeout(() => {
        if (callback) callback();
        transition.classList.add('exit');
        transition.classList.remove('active');
        
        setTimeout(() => {
          transition.classList.remove('exit');
        }, 600);
      }, 300);
    }

    function initLazyLoading() {
      const lazyImages = document.querySelectorAll('.image-lazy');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const skeleton = img.parentElement.querySelector('.skeleton');
            
            img.onload = () => {
              img.classList.add('loaded');
              if (skeleton) skeleton.style.display = 'none';
            };
            
            img.onerror = () => {
              img.classList.add('error');
              if (skeleton) skeleton.style.display = 'none';
            };
            
            // Start loading
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    }

    function initScrollParallax() {
      const floatingElements = document.querySelectorAll('.float-bg-element');
      
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((el, index) => {
          const speed = 0.5 + (index * 0.2);
          const yPos = -(scrolled * speed);
          el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
      });
    }

    function initSectionEnhancement() {
      const sections = document.querySelectorAll('.section-enhanced');
      
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, {
        threshold: 0.3
      });

      sections.forEach(section => {
        sectionObserver.observe(section);
      });
    }

    // === FLOATING PARTICLES ===
    function createFloatingParticles() {
      const container = document.getElementById('floating-particles');
      if (!container) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
      }
    }
// === 🎪 EFECTO MAGNÉTICO MEJORADO - MÁS SUTIL ===

// Actualizar la función del efecto magnético en AdvancedButtonManager
function updateMagneticEffect() {
  if (window.advancedButtonManager) {
    // Reducir significativamente la intensidad
    advancedButtonManager.magneticStrength = 0.08; // Reducido de 0.3
    
    // Sobrescribir el método con versión más sutil
    advancedButtonManager.initMagneticEffect = function(button) {
      if (window.innerWidth <= 768) return; // Skip en móvil
      
      // Excluir contact-links del efecto magnético completo
      if (button.classList.contains('contact-link') || 
          button.classList.contains('suggestion-bubble')) {
        return;
      }
      
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Movimiento mucho más sutil
        const moveX = x * this.magneticStrength;
        const moveY = y * this.magneticStrength;
        
        // Limitar el movimiento máximo
        const maxMove = 3; // Máximo 3px de movimiento
        const clampedX = Math.max(-maxMove, Math.min(maxMove, moveX));
        const clampedY = Math.max(-maxMove, Math.min(maxMove, moveY));
        
        button.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
      });
    };
    
    // Re-aplicar a botones existentes con la nueva configuración
    document.querySelectorAll('.cta-button').forEach(button => {
      // Limpiar listeners anteriores clonando el elemento
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);
      
      // Aplicar nuevo efecto magnético solo a CTA buttons
      advancedButtonManager.initMagneticEffect(newButton);
    });
  }
}

// Función para desactivar completamente el magnético si molesta
function disableMagneticEffect() {
  const style = document.createElement('style');
  style.textContent = `
    .btn-magnetic {
      transform: none !important;
    }
    .btn-premium:hover {
      transform: translateY(-1px) scale(1.01) !important;
    }
    .contact-link.btn-premium:hover {
      transform: translateY(-1px) !important;
    }
  `;
  document.head.appendChild(style);
  
  if (window.toastManager) {
    toastManager.info('Efecto magnético desactivado para mejor fluidez');
  }
}

// Aplicar mejoras cuando esté listo
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    updateMagneticEffect();
    console.log('🎪 Magnetic effect updated - more subtle now!');
  }, 1000);
});

// Opción para desactivar completamente si sigue molestando
// Descomenta la siguiente línea si prefieres sin magnético:
// setTimeout(() => disableMagneticEffect(), 1500);
    // === MAGNETIC EFFECT FOR BUTTONS ===
    function initMagneticEffect() {
      const magneticElements = document.querySelectorAll('.cta-button, .contact-link');
      
      magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'translate(0, 0)';
        });
      });
    }

    // === ENHANCED HOVER EFFECTS ===
    function initEnhancedHoverEffects() {
      // Cards tilt effect
      const cards = document.querySelectorAll('.app-card, .role-card');
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
      });
    }

    // === METRICS COUNTER ===
    function animateCounters() {
      const counters = document.querySelectorAll('.metric-number');
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.floor(current);
        }, 30);
      });
    }

    // === CHAT FUNCTIONALITY ===
    function initChatSuggestions() {
      const suggestions = document.querySelectorAll('.suggestion-bubble');
      const chatInput = document.getElementById('chat-input');
      const suggestionsContainer = document.getElementById('chat-suggestions');

      suggestions.forEach(bubble => {
        bubble.addEventListener('click', () => {
          const suggestion = bubble.getAttribute('data-suggestion');
          chatInput.value = suggestion;
          
          // Mark as used and hide
          bubble.classList.add('used');
          
          // Auto-send the suggestion
          setTimeout(() => {
            sendMessage();
            // Hide suggestions after first use
            setTimeout(() => {
              suggestionsContainer.classList.add('hidden');
            }, 1000);
          }, 200);
        });
      });

      // Hide suggestions when user starts typing
      chatInput.addEventListener('input', () => {
        if (chatInput.value.length > 0) {
          suggestionsContainer.classList.add('hidden');
        } else {
          suggestionsContainer.classList.remove('hidden');
        }
      });
    }

    async function sendMessage() {
      const input = document.getElementById('chat-input');
      const messages = document.getElementById('chat-messages');
      const sendButton = document.getElementById('chat-send');
      const text = input.value.trim();
      
      if (!text) return;

      // Disable input and button
      input.disabled = true;
      sendButton.disabled = true;
      sendButton.textContent = 'Enviando...';

      // User message
      const userMsg = document.createElement('div');
      userMsg.className = 'message user';
      userMsg.textContent = text;
      messages.appendChild(userMsg);

      // Loading message
      const loadingMsg = document.createElement('div');
      loadingMsg.className = 'message bot loading';
      loadingMsg.textContent = 'Mariano está escribiendo...';
      messages.appendChild(loadingMsg);

      messages.scrollTop = messages.scrollHeight;
      input.value = '';

      try {
        // Get AI response
        const aiResponse = await callOpenAI(text);
        
        // Remove loading message
        messages.removeChild(loadingMsg);
        
        // Bot response
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';
        botMsg.innerHTML = aiResponse.replace(/\n/g, '<br>');
        messages.appendChild(botMsg);
        
      } catch (error) {
        // Remove loading message
        messages.removeChild(loadingMsg);
        
        // Error response
        const errorMsg = document.createElement('div');
        errorMsg.className = 'message bot';
        errorMsg.innerHTML = '¡Uy! Tuve un problema técnico. Probá de nuevo o escribime a marianobiotico@gmail.com 😊';
        messages.appendChild(errorMsg);
      }

      // Re-enable input and button
      input.disabled = false;
      sendButton.disabled = false;
      sendButton.textContent = 'Enviar';
      input.focus();
      
      messages.scrollTop = messages.scrollHeight;
    }

    // === INITIALIZATION ===
    document.addEventListener('DOMContentLoaded', () => {
      initThemeToggle();
      initNavigation();
      initSearchAndFilter();
      
      // Premium Visual Experience
      initCustomCursor();
      initDynamicGlassmorphism();
      initScrollIndicator();
      initLazyLoading();
      initScrollParallax();
      initSectionEnhancement();
      
      // Original features
      createFloatingParticles();
      initMagneticEffect();
      initEnhancedHoverEffects();
      renderApps();

      // Enhanced intersection observer
      const advancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            const children = entry.target.querySelectorAll('.stagger-animation');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, index * 150);
            });
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .timeline-item').forEach((el) => {
        advancedObserver.observe(el);
      });

      // Timeline visibility fix
      setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach(item => {
          item.classList.add('visible');
        });
      }, 500);

      // Scroll event listeners
      window.addEventListener('scroll', updateProgressBar);

      // Metrics animation
      const metricsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            metricsObserver.unobserve(entry.target);
          }
        });
      });

      const metricsSection = document.querySelector('.metrics-grid');
      if (metricsSection) {
        metricsObserver.observe(metricsSection);
      }

      // Chat functionality
      const chatInput = document.getElementById('chat-input');
      const chatSend = document.getElementById('chat-send');

      initChatSuggestions();
      chatSend.addEventListener('click', sendMessage);
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      });

      console.log('🚀 marianobiotico.systems loaded with PREMIUM VISUAL EXPERIENCE!');
    });
    // === 🎪 MICRO-INTERACCIONES PREMIUM - RIPPLE EFFECTS ===

function initAdvancedRippleEffects() {
  const rippleElements = document.querySelectorAll('.ripple');
  
  rippleElements.forEach(element => {
    element.addEventListener('click', function(e) {
      // Crear elemento ripple dinámico
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = size + 'px';
      ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple-effect');
      
      // Remover ripples anteriores
      const oldRipples = this.querySelectorAll('.ripple-effect');
      oldRipples.forEach(oldRipple => oldRipple.remove());
      
      // Agregar nuevo ripple
      this.appendChild(ripple);
      
      // Remover el ripple después de la animación
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// CSS dinámico para el ripple effect
const rippleCSS = `
  .ripple-effect {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
    z-index: 1;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

// Inyectar CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Inicializar en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initAdvancedRippleEffects();
  console.log('🎪 Ripple Effects initialized!');
});
// === 🎪 MICRO-INTERACCIONES PREMIUM - TOAST NOTIFICATIONS ===

class ToastManager {
  constructor() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.createContainer();
    }
  }

  createContainer() {
    this.container = document.createElement('div');
    this.container.id = 'toast-container';
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  }

  show(message, type = 'info', title = '', duration = 4000) {
    const toast = this.createToast(message, type, title, duration);
    this.container.appendChild(toast);

    // Mostrar toast
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto-remover
    setTimeout(() => {
      this.removeToast(toast);
    }, duration);

    return toast;
  }

  createToast(message, type, title, duration) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };

    const titles = {
      success: title || '¡Éxito!',
      error: title || 'Error',
      warning: title || 'Atención',
      info: title || 'Info'
    };

    toast.innerHTML = `
      <div class="toast-icon">${icons[type] || icons.info}</div>
      <div class="toast-content">
        <div class="toast-title">${titles[type]}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" onclick="toastManager.removeToast(this.parentElement)">×</button>
      <div class="toast-progress"></div>
    `;

    return toast;
  }

  removeToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 400);
  }

  // Métodos de conveniencia
  success(message, title) {
    return this.show(message, 'success', title);
  }

  error(message, title) {
    return this.show(message, 'error', title);
  }

  warning(message, title) {
    return this.show(message, 'warning', title);
  }

  info(message, title) {
    return this.show(message, 'info', title);
  }
}

// Instancia global
let toastManager;

// Inicializar toast manager
function initToastNotifications() {
  toastManager = new ToastManager();
  
  // Agregar toasts a eventos existentes
  addToastEvents();
  
  console.log('🎪 Toast Notifications initialized!');
}

// Agregar toasts a eventos específicos
function addToastEvents() {
  // Toast al hacer click en contactar
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
      toastManager.info('¡Scrolleando a la sección de contacto!', 'Navegación');
    });
  });

  // Toast al hacer click en links de contacto
  document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const text = link.querySelector('strong')?.textContent || 'Contacto';
      if (link.href.includes('mailto:')) {
        toastManager.success(`Abriendo cliente de email para ${text}`, '📧 Email');
      } else if (link.href.includes('wa.me')) {
        toastManager.success(`Abriendo WhatsApp para chatear`, '💬 WhatsApp');
      } else if (link.href.includes('github.com')) {
        toastManager.info(`Visitando repositorio en GitHub`, '🐙 GitHub');
      } else if (link.href.includes('instagram.com')) {
        toastManager.info(`Abriendo perfil de Instagram`, '📸 Instagram');
      } else if (link.href.includes('cafecito.app')) {
        toastManager.success(`¡Gracias por apoyar el proyecto!`, '☕ Cafecito');
      }
    });
  });

  // Toast al enviar mensaje en chat
  const originalSendMessage = window.sendMessage;
  if (originalSendMessage) {
    window.sendMessage = function() {
      toastManager.info('Enviando mensaje a MarianoGPT...', '🤖 Chat');
      return originalSendMessage.apply(this, arguments);
    };
  }

  // Toast al copiar texto (si alguien selecciona y copia)
  document.addEventListener('copy', () => {
    toastManager.success('Texto copiado al portapapeles', '📋 Copiado');
  });
}

// Inicializar en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initToastNotifications();
});
// === 🎪 MICRO-INTERACCIONES PREMIUM - TYPING ANIMATION ===

class TypingAnimator {
  constructor() {
    this.isTyping = false;
  }

  // Typing básico letra por letra
  typeText(element, text, speed = 50, callback = null) {
    if (this.isTyping) return;
    
    this.isTyping = true;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--accent)';
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        // Mantener cursor parpadeando por un momento
        setTimeout(() => {
          element.style.borderRight = 'none';
          this.isTyping = false;
          if (callback) callback();
        }, 1000);
      }
    }, speed);
  }

  // Typing con múltiples textos (rotación)
  typeMultipleTexts(element, texts, speed = 100, pauseBetween = 2000) {
    let currentIndex = 0;
    
    const typeNext = () => {
      const text = texts[currentIndex];
      this.typeText(element, text, speed, () => {
        setTimeout(() => {
          this.eraseText(element, speed / 2, () => {
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(typeNext, 500);
          });
        }, pauseBetween);
      });
    };
    
    typeNext();
  }

  // Borrar texto
  eraseText(element, speed = 30, callback = null) {
    const text = element.textContent;
    let i = text.length;
    
    element.style.borderRight = '2px solid var(--accent)';
    
    const timer = setInterval(() => {
      if (i > 0) {
        element.textContent = text.substring(0, i - 1);
        i--;
      } else {
        clearInterval(timer);
        if (callback) callback();
      }
    }, speed);
  }

  // Typing con efecto de aparición letra por letra
  animateLetters(element, delay = 100) {
    const text = element.textContent;
    element.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      span.style.animationDelay = `${i * delay}ms`;
      element.appendChild(span);
    }
  }

  // Typing con efecto glitch
  glitchType(element, text) {
    element.setAttribute('data-text', text);
    element.className += ' typing-glitch';
    this.typeText(element, text, 80);
  }
}

// Instancia global
let typingAnimator;

// Función para inicializar typing animations
function initTypingAnimations() {
  typingAnimator = new TypingAnimator();
  
  // Aplicar typing animation al título principal después de un delay
  setTimeout(() => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
      const originalText = heroTitle.textContent;
      heroTitle.textContent = '';
      typingAnimator.typeText(heroTitle, originalText, 100, () => {
        // Mostrar toast de bienvenida después del typing
        if (window.toastManager) {
          toastManager.success('¡Bienvenido al portfolio de Mariano!', '👋 Hola');
        }
      });
    }
  }, 1500);

  // Typing para el subtítulo del chat
  const chatSubtitle = document.querySelector('.chat-header .section-subtitle');
  if (chatSubtitle) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const originalText = entry.target.textContent;
          entry.target.textContent = '';
          typingAnimator.typeText(entry.target, originalText, 60);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(chatSubtitle);
  }

  // Typing para elementos con clase especial
  document.querySelectorAll('.typing-on-scroll').forEach(element => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const originalText = entry.target.textContent;
          entry.target.textContent = '';
          typingAnimator.typeText(entry.target, originalText, 80);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(element);
  });

  console.log('🎪 Typing Animations initialized!');
}

// Función para agregar typing a cualquier elemento
function addTypingEffect(selector, texts = null, options = {}) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    if (texts && Array.isArray(texts)) {
      // Múltiples textos rotando
      typingAnimator.typeMultipleTexts(element, texts, options.speed || 100, options.pause || 2000);
    } else {
      // Texto único
      const text = texts || element.textContent;
      element.textContent = '';
      typingAnimator.typeText(element, text, options.speed || 100);
    }
  });
}

// Función para typing en tiempo real (útil para chat)
function typeInRealTime(element, text, speed = 30) {
  return new Promise((resolve) => {
    element.textContent = '';
    let i = 0;
    
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

// Inicializar en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initTypingAnimations();
});
// === 🎪 MICRO-INTERACCIONES PREMIUM - ADVANCED BUTTON STATES ===

class AdvancedButtonManager {
  constructor() {
    this.clickCounts = new Map();
    this.magneticStrength = 0.3;
  }

  // Convertir botón a estado loading
  setLoading(button, text = null) {
    if (!button) return;
    
    button.disabled = true;
    button.classList.add('btn-loading');
    
    if (text) {
      button.setAttribute('data-original-text', button.textContent);
      button.textContent = text;
    }
  }

  // Quitar estado loading
  removeLoading(button) {
    if (!button) return;
    
    button.disabled = false;
    button.classList.remove('btn-loading');
    
    const originalText = button.getAttribute('data-original-text');
    if (originalText) {
      button.textContent = originalText;
      button.removeAttribute('data-original-text');
    }
  }

  // Convertir a estado success
  setSuccess(button, duration = 2000) {
    if (!button) return;
    
    const originalText = button.textContent;
    button.classList.add('btn-success');
    button.textContent = '';
    
    setTimeout(() => {
      button.classList.remove('btn-success');
      button.textContent = originalText;
    }, duration);
  }

  // Convertir a estado error
  setError(button, duration = 2000) {
    if (!button) return;
    
    button.classList.add('btn-error');
    
    setTimeout(() => {
      button.classList.remove('btn-error');
    }, duration);
  }

  // Efecto magnético avanzado
  initMagneticEffect(button) {
    if (window.innerWidth <= 768) return; // Skip en móvil
    
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = x * this.magneticStrength;
      const moveY = y * this.magneticStrength;
      
      button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0) scale(1)';
    });
  }

  // Contador de clicks
  initClickCounter(button) {
    const id = button.id || `btn_${Math.random().toString(36).substr(2, 9)}`;
    this.clickCounts.set(id, 0);
    
    button.addEventListener('click', () => {
      const count = this.clickCounts.get(id) + 1;
      this.clickCounts.set(id, count);
      button.setAttribute('data-clicks', count);
      
      // Efecto de incremento
      button.style.transform = 'scale(1.1)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    });
  }

  // Efecto de ondas al hacer click
  createWaveEffect(button, e) {
    const wave = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    wave.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: wave 0.6s ease-out;
      pointer-events: none;
    `;
    
    button.appendChild(wave);
    
    setTimeout(() => {
      wave.remove();
    }, 600);
  }

  // Validación con feedback visual
  validateAndFeedback(button, isValid, successMsg, errorMsg) {
    if (isValid) {
      this.setSuccess(button);
      if (window.toastManager && successMsg) {
        toastManager.success(successMsg);
      }
    } else {
      this.setError(button);
      if (window.toastManager && errorMsg) {
        toastManager.error(errorMsg);
      }
    }
  }

  // Progreso en botón (para uploads, etc.)
  setProgress(button, percentage) {
    if (!button.querySelector('.progress-bar')) {
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: var(--accent);
        width: 0%;
        transition: width 0.3s ease;
      `;
      button.appendChild(progressBar);
    }
    
    const progressBar = button.querySelector('.progress-bar');
    progressBar.style.width = `${percentage}%`;
    
    if (percentage >= 100) {
      setTimeout(() => {
        progressBar.remove();
        this.setSuccess(button);
      }, 300);
    }
  }
}

// Instancia global
let advancedButtonManager;

// Inicializar advanced button states
function initAdvancedButtonStates() {
  advancedButtonManager = new AdvancedButtonManager();
  
  // Aplicar efectos a botones existentes
  enhanceExistingButtons();
  
  // Agregar CSS de ondas
  addWaveCSS();
  
  console.log('🎪 Advanced Button States initialized!');
}

function enhanceExistingButtons() {
  // Efecto magnético para botones principales
  document.querySelectorAll('.cta-button, .contact-link').forEach(button => {
    advancedButtonManager.initMagneticEffect(button);
    
    button.addEventListener('click', (e) => {
      advancedButtonManager.createWaveEffect(button, e);
    });
  });

  // Loading state para botón de chat
  const chatSend = document.getElementById('chat-send');
  if (chatSend) {
    const originalSendMessage = window.sendMessage;
    if (originalSendMessage) {
      window.sendMessage = async function() {
        advancedButtonManager.setLoading(chatSend, 'Enviando...');
        
        try {
          await originalSendMessage.apply(this, arguments);
          advancedButtonManager.removeLoading(chatSend);
          advancedButtonManager.setSuccess(chatSend, 1000);
        } catch (error) {
          advancedButtonManager.removeLoading(chatSend);
          advancedButtonManager.setError(chatSend);
        }
      };
    }
  }

  // Contador de clicks para elementos interactivos
  document.querySelectorAll('.suggestion-bubble').forEach(bubble => {
    advancedButtonManager.initClickCounter(bubble);
  });

  // Efecto especial para botón de cafecito
  const cafecitoButton = document.querySelector('a[href*="cafecito.app"]');
  if (cafecitoButton) {
    cafecitoButton.classList.add('btn-pulse-glow');
  }

  // Gradiente animado para botones principales
  document.querySelectorAll('.cta-button').forEach(button => {
    button.classList.add('btn-gradient-animated');
  });
}

function addWaveCSS() {
  const waveCSS = `
    @keyframes wave {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = waveCSS;
  document.head.appendChild(style);
}

// Funciones de utilidad para usar en eventos
function simulateButtonLoading(selector, duration = 2000) {
  const button = document.querySelector(selector);
  if (button) {
    advancedButtonManager.setLoading(button, 'Procesando...');
    setTimeout(() => {
      advancedButtonManager.removeLoading(button);
      advancedButtonManager.setSuccess(button);
    }, duration);
  }
}

function simulateButtonProgress(selector, duration = 3000) {
  const button = document.querySelector(selector);
  if (button) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      advancedButtonManager.setProgress(button, progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, duration / 10);
  }
}

// Inicializar en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initAdvancedButtonStates();
});
<!-- LazySizes Script para lazy loading de videos -->

// Funcionalidad "Ver Más Videos"
document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.getElementById('load-more-videos');
  const showLessBtn = document.getElementById('show-less-videos');
  const additionalVideos = document.getElementById('additional-videos');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // Mostrar videos adicionales
      additionalVideos.classList.remove('hidden');
      additionalVideos.classList.add('loading');
      
      // Scroll suave hacia los nuevos videos
      setTimeout(() => {
        additionalVideos.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        additionalVideos.classList.remove('loading');
        additionalVideos.classList.add('loaded');
      }, 300);
      
      // Cambiar botones
      loadMoreBtn.classList.add('hidden');
      showLessBtn.classList.remove('hidden');
      
      // Toast notification
      if (window.toastManager) {
        toastManager.success('¡Videos adicionales cargados!', '🎬 Portfolio');
      }
    });
  }
  
  if (showLessBtn) {
    showLessBtn.addEventListener('click', function() {
      // Ocultar videos adicionales
      additionalVideos.classList.add('hidden');
      additionalVideos.classList.remove('loaded');
      
      // Scroll hacia arriba
      document.getElementById('featured-videos').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Cambiar botones
      showLessBtn.classList.add('hidden');
      loadMoreBtn.classList.remove('hidden');
      
      // Toast notification
      if (window.toastManager) {
        toastManager.info('Videos minimizados', '📱 Vista');
      }
    });
  }
});
