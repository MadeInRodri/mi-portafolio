import "./style.css";
import "devicon/devicon.min.css";

document.querySelector("#app").innerHTML = `
  <header>
      <div class="logo">Made In Rodri</div>
      <nav>
        <ul class="nav-links">
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="sobre-mi" class="hero-section">
        <h2 class="section-title">¿Quien soy yo?</h2>

        <div class="hero-container">
          <div class="hero-image">
            <img src="./src/images/avatar.png" alt="Avatar Rodrigo" />
          </div>

          <div class="hero-content">
            <div class="terminal-card">
              <p>
                Mi nombre es Rodrigo Mejía, soy un estudiante de ingeniería en
                ciencias de la computación además de un programador web, mi
                pasión, además de mi hobby es la programación y las matemáticas,
                bienvenido a mi portafolio, te invito a navegar por mis
                proyectos y mi perfil de github, ¡será un placer trabajar para
                usted!
              </p>
            </div>
            <div class="hero-buttons">
              <a
                href="./src/assets/CV_Rodrigo_Alexis_Mejia_Rivas.pdf"
                download="CV_Rodrigo_Mejia.pdf"
                class="btn primary"
                >Descargar CV</a
              >
              <a href="mailto:tuemail@gmail.com" class="btn primary">Gmail</a>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" class="projects-section">
        <h2 class="section-title">Mis proyectos</h2>

        <div class="projects-grid">
          <article class="project-card">
            <a
              href="https://myblogevangelion.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./src/images/simple-blog.png"
                alt="Proyecto Simple Blog"
              />
            </a>
            <div class="project-info">
              <h3>Simple Blog</h3>
              <p>Blog minimalista realizado para un proyecto de universidad.</p>
            </div>
          </article>

          <article class="project-card">
            <a
              href="https://l1nkup.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./src/images/social-media.png"
                alt="Proyecto Social Media"
              />
            </a>
            <div class="project-info">
              <h3>Social Media</h3>
              <p>Plataforma social interactiva.</p>
            </div>
          </article>

          <article class="project-card">
            <a
              href="https://milistadecompra.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./src/images/list-app.png" alt="Proyecto List App" />
            </a>
            <div class="project-info">
              <h3>List App</h3>
              <p>Aplicación de gestión de tareas.</p>
            </div>
          </article>

          <article class="project-card">
            <a
              href="https://rodricalculator.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./src/images/calculator.png"
                alt="Proyecto Calculator"
              />
            </a>
            <div class="project-info">
              <h3>Calculator</h3>
              <p>Calculadora funcional web.</p>
            </div>
          </article>

          <article class="project-card">
            <a
              href="https://xilotepecoffee.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./src/images/xilotepec.png"
                alt="Proyecto Calculator"
              />
            </a>
            <div class="project-info">
              <h3>Coffee Shop Landing Page</h3>
              <p>Página principal y menú interactivo de una cafetería.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="habilidades" class="skills-section">
        <h2 class="section-title">Habilidades</h2>
        <h3 class="sub-section-title">Tecnologías</h3>
        <div class="skills-container">
          <i class="devicon-python-plain colored" title="Python"></i>
          <i class="devicon-javascript-plain colored" title="JavaScript"></i>
          <i class="devicon-php-plain colored" title="PHP"></i>
          <i class="devicon-react-original colored" title="React"></i>
          <i class="devicon-arduino-plain colored" title="Arduino"></i>
          <i class="devicon-mysql-original colored" title="MySql"></i>
        </div>

        <h3 class="sub-section-title">Diseño</h3>
        <div class="skills-container">
          <i class="devicon-bootstrap-plain colored" title="Bootstrap"></i>
          <i
            class="devicon-tailwindcss-original colored"
            title="Tailwind CSS"
          ></i>
          <i class="devicon-figma-plain colored" title="Figma"></i>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-content">
        <p>¡Gracias por visitar!</p>

        <div class="social-media">
          <span>Social Media</span>
          <div class="social-icons">
            <a href="https://github.com/MadeInRodri" aria-label="Github">
              <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="#0077b5" width="24" height="24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
            <a href="mailto:rivasalexis1820@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="#EA4335" width="24" height="24">
                <path
                  d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-6.575 7.171h20.886l-6.575-7.171z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
`;
