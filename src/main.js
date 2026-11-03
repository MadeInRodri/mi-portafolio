import "./style.css";
import "devicon/devicon.min.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#inicio" aria-label="Made In Rodri, inicio">
      <span class="wordmark-mark" aria-hidden="true">R</span>
      <span>Made In Rodri</span>
    </a>
    <nav aria-label="Navegación principal">
      <ul class="nav-links">
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
      </ul>
    </nav>
  </header>

  <main id="inicio">
    <section id="sobre-mi" class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="hero-intro">Hola, soy Rodrigo Mejía.</p>
        <h1 id="hero-title">Estudio ingeniería. <span>Desarrollo para la web.</span></h1>
        <p class="hero-description">
          Soy estudiante de Ingeniería en Ciencias de la Computación y desarrollador web.
          Aquí reúno proyectos que nacieron de aprender, resolver problemas y convertir
          ideas en algo que se pueda usar.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#proyectos">Ver proyectos</a>
          <a
            class="button button-secondary"
            href="/assets/CV_Rodrigo_Alexis_Mejia_Rivas.pdf"
            download="CV_Rodrigo_Mejia.pdf"
          >Descargar CV</a>
        </div>
      </div>
      <div class="portrait-wrap">
        <span class="portrait-caption" aria-hidden="true">Rodrigo / desarrollo web</span>
        <button class="portrait-button" id="avatar-button" type="button" aria-label="Animar el retrato de Rodrigo">
          <img src="/images/avatar.png" alt="" />
        </button>
        <span class="portrait-index" aria-hidden="true">MX</span>
      </div>
    </section>

    <section id="proyectos" class="projects-section" aria-labelledby="projects-title">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Trabajo seleccionado</p>
          <h2 id="projects-title">Proyectos</h2>
        </div>
        <p class="section-note">Ideas que tomaron forma en la web.</p>
      </div>

      <div class="projects-grid">
        <article class="project-card">
          <a class="project-image-link" href="https://myblogevangelion.netlify.app" target="_blank" rel="noopener noreferrer" aria-label="Visitar Simple Blog, se abre en una pestaña nueva">
            <img src="/images/simple-blog.png" alt="Vista previa del proyecto Simple Blog" loading="lazy" />
          </a>
          <div class="project-info">
            <h3><a href="https://myblogevangelion.netlify.app" target="_blank" rel="noopener noreferrer">Simple Blog</a></h3>
            <p>Un blog minimalista creado como proyecto universitario.</p>
          </div>
        </article>

        <article class="project-card">
          <a class="project-image-link" href="https://l1nkup.netlify.app" target="_blank" rel="noopener noreferrer" aria-label="Visitar Social Media, se abre en una pestaña nueva">
            <img src="/images/social-media.png" alt="Vista previa del proyecto Social Media" loading="lazy" />
          </a>
          <div class="project-info">
            <h3><a href="https://l1nkup.netlify.app" target="_blank" rel="noopener noreferrer">Social Media</a></h3>
            <p>Una plataforma social interactiva.</p>
          </div>
        </article>

        <article class="project-card">
          <a class="project-image-link" href="https://milistadecompra.netlify.app" target="_blank" rel="noopener noreferrer" aria-label="Visitar List App, se abre en una pestaña nueva">
            <img src="/images/list-app.png" alt="Vista previa del proyecto List App" loading="lazy" />
          </a>
          <div class="project-info">
            <h3><a href="https://milistadecompra.netlify.app" target="_blank" rel="noopener noreferrer">List App</a></h3>
            <p>Una aplicación para organizar tareas y pendientes.</p>
          </div>
        </article>

        <article class="project-card">
          <a class="project-image-link" href="https://rodricalculator.netlify.app" target="_blank" rel="noopener noreferrer" aria-label="Visitar Calculator, se abre en una pestaña nueva">
            <img src="/images/calculator.png" alt="Vista previa del proyecto Calculator" loading="lazy" />
          </a>
          <div class="project-info">
            <h3><a href="https://rodricalculator.netlify.app" target="_blank" rel="noopener noreferrer">Calculator</a></h3>
            <p>Una calculadora funcional hecha para la web.</p>
          </div>
        </article>

        <article class="project-card">
          <a class="project-image-link" href="https://xilotepecoffee.netlify.app" target="_blank" rel="noopener noreferrer" aria-label="Visitar Xilotepec Coffee, se abre en una pestaña nueva">
            <img src="/images/xilotepec.png" alt="Vista previa del sitio de Xilotepec Coffee" loading="lazy" />
          </a>
          <div class="project-info">
            <h3><a href="https://xilotepecoffee.netlify.app" target="_blank" rel="noopener noreferrer">Xilotepec Coffee</a></h3>
            <p>Una página y menú interactivo para una cafetería.</p>
          </div>
        </article>

        <article class="project-card">
          <a class="project-image-link" href="https://leo-and-rodri-solutions.infinityfreeapp.com" target="_blank" rel="noopener noreferrer" aria-label="Visitar Leo's and Rodri's Solutions, se abre en una pestaña nueva">
            <img src="/images/service-catalog.png" alt="Vista previa del catálogo de servicios web" loading="lazy" />
          </a>
          <div class="project-info">
            <h3><a href="https://leo-and-rodri-solutions.infinityfreeapp.com" target="_blank" rel="noopener noreferrer">Leo's &amp; Rodri's Solutions</a></h3>
            <p>Un catálogo de servicios web con tienda, desarrollado en PHP.</p>
          </div>
        </article>
      </div>
    </section>

    <section id="habilidades" class="skills-section" aria-labelledby="skills-title">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Herramientas de trabajo</p>
          <h2 id="skills-title">Habilidades</h2>
        </div>
        <p class="section-note">Tecnologías y herramientas que uso para crear.</p>
      </div>

      <div class="skills-groups">
        <div class="skill-group">
          <h3>Desarrollo</h3>
          <ul class="skills-list">
            <li><i class="devicon-python-plain colored" aria-hidden="true"></i><span>Python</span></li>
            <li><i class="devicon-javascript-plain colored" aria-hidden="true"></i><span>JavaScript</span></li>
            <li><i class="devicon-php-plain colored" aria-hidden="true"></i><span>PHP</span></li>
            <li><i class="devicon-react-original colored" aria-hidden="true"></i><span>React</span></li>
            <li><i class="devicon-arduino-plain colored" aria-hidden="true"></i><span>Arduino</span></li>
            <li><i class="devicon-mysql-original colored" aria-hidden="true"></i><span>MySQL</span></li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>Diseño</h3>
          <ul class="skills-list">
            <li><i class="devicon-bootstrap-plain colored" aria-hidden="true"></i><span>Bootstrap</span></li>
            <li><i class="devicon-tailwindcss-original colored" aria-hidden="true"></i><span>Tailwind CSS</span></li>
            <li><i class="devicon-figma-plain colored" aria-hidden="true"></i><span>Figma</span></li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>¿Tienes un proyecto en mente? <a href="mailto:rivasalexis1820@gmail.com">Hablemos</a>.</p>
    <div class="footer-links">
      <a href="https://github.com/MadeInRodri" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="mailto:rivasalexis1820@gmail.com">Correo</a>
    </div>
  </footer>
`;

const avatarButton = document.querySelector("#avatar-button");
avatarButton.addEventListener("click", () => {
  avatarButton.classList.remove("shake-active");
  void avatarButton.offsetWidth;
  avatarButton.classList.add("shake-active");
});

avatarButton.addEventListener("animationend", () => {
  avatarButton.classList.remove("shake-active");
});
