/**
 * navbar.js — Shared Navigation Bar
 * Auto-injects the navbar into any page that includes this script.
 *
 * Usage: Add the following two lines inside <head>:
 *   <link rel="stylesheet" href="navbar.css">
 *   <script src="navbar.js" defer></script>
 *
 * The script will insert a <header> with the navbar before the <body>'s
 * first child, and will automatically mark the correct link as "active"
 * based on the current page filename.
 */

(function () {
    /* ── 1. Detect current page ─────────────────────────────── */
    let page = window.location.pathname.split('/').pop().toLowerCase();
    if (!page) {
        page = 'portf.html';
    }

    /* ── 2. Build the navbar HTML ───────────────────────────── */
    const header = document.createElement('header');
    header.innerHTML = `
        <nav class="navbar" aria-label="Main navigation">

            <!-- Logo -->
            <a href="portf.html" class="logo">MEGHA.</a>

            <!-- Nav Links -->
            <ul class="nav-links">
                <li><a href="portf.html"   id="nav-home"     >Home</a></li>
                <li><a href="About.html"    id="nav-about"    >About</a></li>
                <li><a href="skills.html"   id="nav-skills"   >Skills</a></li>
                <li><a href="Projects.html" id="nav-projects" >Projects</a></li>
                <li><a href="Contact.html"  id="nav-contact"  >Contact</a></li>
            </ul>

            <!-- Mobile Toggle Button -->
            <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <!-- Resume Button -->
            <a href="Megha_Chaudhary_Resume.pdf" target="_blank" class="resume-btn">Resume</a>

        </nav>
    `;

    /* ── 3. Mark active link ────────────────────────────────── */
    const activeMap = {
        'portf.html'    : 'nav-home',
        'about.html'    : 'nav-about',
        'skills.html'   : 'nav-skills',
        'projects.html' : 'nav-projects',
        'contact.html'  : 'nav-contact',
    };

    const activeId = activeMap[page];
    if (activeId) {
        const activeLink = header.querySelector('#' + activeId);
        if (activeLink) activeLink.classList.add('active');
    }

    /* ── 4. Mobile menu logic ────────────────────────────────── */
    const toggleBtn = header.querySelector('.nav-toggle');
    const navLinks = header.querySelector('.nav-links');
    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            toggleBtn.setAttribute('aria-expanded', !isExpanded);
            toggleBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    /* ── 5. Inject before first body child ──────────────────── */
    document.body.insertBefore(header, document.body.firstChild);
})();
