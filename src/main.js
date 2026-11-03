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

      <div class="projects-grid" id="projects-grid" aria-live="polite" aria-busy="true">
        <p class="project-load-message">Cargando proyectos…</p>
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

const projectsGrid = document.querySelector("#projects-grid");

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const imageLink = document.createElement("a");
  imageLink.className = "project-image-link";
  imageLink.href = project.url;
  imageLink.target = "_blank";
  imageLink.rel = "noopener noreferrer";
  imageLink.setAttribute(
    "aria-label",
    `Visitar ${project.title}, se abre en una pestaña nueva`,
  );

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.imageAlt;
  image.loading = "lazy";
  imageLink.append(image);

  const info = document.createElement("div");
  info.className = "project-info";

  const heading = document.createElement("h3");
  const titleLink = document.createElement("a");
  titleLink.href = project.url;
  titleLink.target = "_blank";
  titleLink.rel = "noopener noreferrer";
  titleLink.textContent = project.title;
  heading.append(titleLink);

  const description = document.createElement("p");
  description.textContent = project.description;
  const projectFooter = document.createElement("div");
  projectFooter.className = "project-footer";

  const repositoryLink = document.createElement("a");
  repositoryLink.className = "project-repository";
  repositoryLink.href = project.repositoryUrl;
  repositoryLink.target = "_blank";
  repositoryLink.rel = "noopener noreferrer";
  repositoryLink.setAttribute(
    "aria-label",
    `Ver el repositorio de ${project.title}, se abre en una pestaña nueva`,
  );
  repositoryLink.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.51-1.29-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.22 2.45 2.5 1.92.1-.73.39-1.23.7-1.52-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
    </svg>
    <span>Ver repositorio</span>
  `;
  projectFooter.append(repositoryLink);
  info.append(heading, description, projectFooter);
  article.append(imageLink, info);

  return article;
}

async function loadProjects() {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}projects.json`);
    if (!response.ok) {
      throw new Error(`No se pudo cargar projects.json (HTTP ${response.status})`);
    }

    const projects = await response.json();
    if (
      !Array.isArray(projects) ||
      projects.some(
        (project) =>
          typeof project.title !== "string" ||
          typeof project.description !== "string" ||
          typeof project.url !== "string" ||
          typeof project.repositoryUrl !== "string" ||
          typeof project.image !== "string" ||
          typeof project.imageAlt !== "string",
      )
    ) {
      throw new Error("projects.json debe ser una lista de proyectos con todos sus campos.");
    }

    projectsGrid.replaceChildren(
      ...projects.map((project) => createProjectCard(project)),
    );
    projectsGrid.setAttribute("aria-busy", "false");
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
    const message = document.createElement("p");
    message.className = "project-load-message";
    message.textContent =
      "No se pudieron cargar los proyectos. Revisa el archivo projects.json y vuelve a intentarlo.";
    projectsGrid.replaceChildren(message);
    projectsGrid.setAttribute("aria-busy", "false");
  }
}

loadProjects();
