/* ============================================================
   ADAPTIVE PORTFOLIO ENGINE
   Dynamically interprets and renders CV data into
   a polished, animated, premium portfolio experience.
   ============================================================ */
((global) => {
  'use strict';

  // ============================================================
  // 1. DATA — Modify this object to adapt the entire portfolio
  // ============================================================
  const DATA = {
    name: "Mohamed Adem BEN MOUSSA",
    role: "Database & Platform Engineer",
    tagline: "PostgreSQL \u2022 Elasticsearch \u2022 Linux \u2022 ETL \u2022 AML/KYC",
    email: "MohamedAdemBenMoussa@gmail.com",
    phone: "+216 27 192 074",
    location: "Tunis, Tunisia (Open to relocate)",
    summary: "Database & Platform Engineer with 5+ years of experience in fintech, ensuring production stability and data integrity for AML/KYC platforms used by 250+ financial institutions across 45+ countries. Specialized in PostgreSQL, ETL pipelines, distributed systems and production infrastructure, with a strong focus on high availability and performance optimization. Resolved 2,000+ production incidents at 93% SLA compliance across 32 environments. Ranked 1st in class (2022\u20132023).",
    skills: {
      "Databases": ["PostgreSQL", "PL/SQL", "MySQL", "Oracle", "SQL Server", "MariaDB"],
      "Search & Analytics": ["Elasticsearch", "Jaspersoft Studio", "Talend ETL"],
      "Infrastructure": ["Linux (RHEL/Ubuntu/CentOS)", "Windows Server", "Apache Tomcat", "Nginx", "Systemd", "High Availability", "Backup/Recovery"],
      "Workflows & Rules": ["Camunda BPMN", "FormIO", "Reis\u2122 Rule Engine", "AML/KYC Workflows"],
      "Security": ["Suricata (IDS)", "Wazuh (SIEM)"],
      "Identity & Access": ["Active Directory", "LDAP", "GLPI"],
      "Scripting & Development": ["Bash", "PowerShell", "JavaScript", "PHP", "Java"],
      "Tools & Platforms": ["JIRA", "Confluence", "Notion", "Postman", "pgAdmin", "DBeaver", "pgtune"]
    },
    experience: [
      {
        title: "Database & Systems Engineer",
        company: "Vneuron",
        location: "Charguia 2, Tunisia",
        date: "Jan 2021 \u2013 Present",
        description: "Lead production stability and data integrity across 32 high-tier financial institutions. Developed PL/SQL batch processing scripts to safely purge 96M+ orphaned records without table locks, reducing execution from hours to under 13 minutes. Resolved 2,000+ production incidents at 93% SLA compliance. Optimized PL/SQL queries and indexing strategies on multi-million row tables. Managed multi-tenant PostgreSQL deployments, maintained Elasticsearch clusters for real-time KYC sanction screening. Designed AML/KYC risk indicator rules, Camunda BPMN workflows, and FormIO forms. Built Talend ETL pipelines and automated monthly Jaspersoft Studio reports. Administered Apache Tomcat and Nginx with SSL and system hardening. Mentored junior engineers and documented procedures in Confluence."
      },
      {
        title: "Software Integration Consultant",
        company: "Vneuron",
        location: "Charguia 2, Tunisia",
        date: "Jul 2020 \u2013 Jan 2021",
        description: "Deployed and configured AML/KYC platforms for new clients including PostgreSQL, Elasticsearch, Apache Tomcat, and Nginx environments. Built Talend ETL pipelines for client data migration. Configured AML risk indicators, Camunda BPMN workflows, and FormIO forms. Developed compliance dashboards with Jaspersoft Studio. Automated PostgreSQL backup processes using Bash and PowerShell. Supported testing, validation, and client acceptance phases. Produced technical documentation for deployed solutions."
      }
    ],
    education: [
      {
        degree: "National Engineering Degree in Computer Science",
        institution: "SESAME University",
        location: "Ariana, Tunisia",
        date: "Oct 2020 \u2013 Sep 2024",
        description: "GPA: 3.5/4.0 \u00b7 Ranked 1st in class, 2022-2023 \u00b7 Final year: 16.86/20 (4.0/4.0). Official equivalence recognized by Ministry of Higher Education (Decision N\u00b01555, Feb 2025). Graduation Project: Securing an AML Suite with an Advanced IDS (Suricata + Wazuh)."
      },
      {
        degree: "Bachelor\u2019s Degree in Computer Science",
        institution: "ISTIC University",
        location: "Borj Cedria, Tunisia",
        date: "Sep 2017 \u2013 Jul 2020",
        description: "Graduation Project: Remote Control Light Switch Using IoT Technology (Arduino, Raspberry Pi)."
      }
    ],
    certifications: [
      "Information Technology Specialist in Databases \u2013 Certiport (Jun 2022)"
    ],
    projects: [
      {
        name: "Automated Apache Tomcat Upgrade & Deployment Script (RHEL)",
        description: "Developed a Bash automation script to install and upgrade Apache Tomcat (9.x) across production servers. Automated configuration migration, permission management, and systemd service updates. Reduced manual deployment effort and minimized configuration drift.",
        technologies: ["Bash", "Apache Tomcat", "RHEL", "Systemd"],
        link: "#"
      },
      {
        name: "Securing an AML/KYC Platform with IDS & SIEM",
        description: "Deployed Suricata (IDS) and Wazuh (SIEM) to secure a financial compliance platform. Configured centralized log collection and correlation across multiple servers for real-time threat detection. Conducted vulnerability analysis and performance testing.",
        technologies: ["Suricata", "Wazuh", "ELK", "Linux"],
        link: "#"
      },
      {
        name: "LightWays \u2013 Full-Stack IoT Lighting Control System",
        description: "Full-stack web IoT system for remote monitoring and control of smart lighting. Back-end with PHP and MySQL on Raspberry Pi. Front-end with HTML5, CSS3, JavaScript, jQuery, AJAX, and UIkit. Device control via IP-based communication with Arduino modules using JSON.",
        technologies: ["PHP", "MySQL", "JavaScript", "Arduino", "Raspberry Pi"],
        link: "#"
      }
    ],
    hackathons: [
      {
        name: "Hacker l'\u00C9pargne",
        organizer: "Enda Inter-Arabe",
        description: "Apr 2026 \u00B7 2nd Place \u00B7 Developed Enda Tao+ with digital savings circle management (Enda Sandouk) and collaborative expense splitting (Enda 50/50). Awarded Prix de la Pers\u00E9v\u00E9rance et de l'Assiduit\u00E9.",
        placement: "2nd Place",
        link: "https://www.endarabe.org.tn/2026/04/03/hackathon-enda/"
      },
      {
        name: "Challenge NEXT",
        organizer: "BH Assurances",
        description: "Aug\u2013Sep 2025 \u00B7 Created a GenAI sales recommendation agent for analyzing customer portfolios and generating personalized sales pitches."
      },
      {
        name: "Hackathon 2.0",
        organizer: "ATLAS Future Leaders \u2013 TBS Chapter",
        description: "Feb 2020 \u00B7 Developed a Scrum Agile-based platform for organizing and prioritizing projects in a flexible manner."
      },
      {
        name: "Municipality Hackathon",
        organizer: "JCI Les Berges du Lac",
        description: "Nov 2019 \u00B7 2nd Place \u00B7 Developed a digital platform for the Municipality of Carthage.",
        placement: "2nd Place"
      },
      {
        name: "Code4Tunisia",
        organizer: "Go My Code",
        description: "Aug 2019 \u00B7 Developed a platform to discover and improve intelligence skills. Partnerships: Jumia, PNUD Tunisie, ULT."
      },
      {
        name: "NIT Day Challenge",
        organizer: "INSAT",
        description: "Apr 2019 \u00B7 2nd Place \u00B7 Built a website helping Alzheimer's patients remember daily duties, managed by a supervisor.",
        placement: "2nd Place"
      },
      {
        name: "Google Hash Code",
        organizer: "ISTIC Google Club",
        description: "Feb 2019 \u00B7 Ranked 25th in Tunisia / 3153rd Worldwide. Solved a technical optimization problem by Google."
      },
      {
        name: "Agil Mobile Application",
        organizer: "Agil",
        description: "Feb 2019 \u00B7 Built a PWA to facilitate oil ordering at depots for Agil service stations."
      },
      {
        name: "Global Game Jam 2K19",
        organizer: "Tek-Up Junior Enterprise",
        description: "Jan 2019 \u00B7 Developed a game using Unity 3D."
      },
      {
        name: "Coding Land V4.0",
        organizer: "ISAMM Microsoft Club",
        description: "Dec 2018 \u00B7 Built a website to host activities and facilitate participation."
      },
      {
        name: "Hackathon 3.0 \u2013 Code your Road",
        organizer: "AIESEC Bardo",
        description: "Dec 2018 \u00B7 Built a platform connecting workers with people needing their services."
      }
    ],
    volunteering: [
      {
        role: "Visual Content Volunteer",
        organization: "Tunisian Red Crescent, Local Committee of Hammam Chatt",
        date: "2020",
        description: "Created promotional posters and awareness materials using Canva to support local humanitarian campaigns."
      }
    ],
    languages: [
      "Arabic (Native)",
      "English (Professional Working)",
      "French (Professional Working)"
    ],
    interests: ["Beekeeping", "Reading", "Traveling"],
    links: {
      github: "https://github.com/Adeeeeem",
      linkedin: "https://linkedin.com/in/mohamedadembenmoussa",
      email: "mailto:MohamedAdemBenMoussa@gmail.com",
      drive: "https://drive.google.com/drive/folders/1ttkY7bSkKpppwAQJKALYBFpRYOE1NgeG?usp=drive_link"
    }
  };

  // ============================================================
  // 2. SCHEMA ANALYZER
  // ============================================================
  const Schema = {
    skipFields: ['name', 'role', 'tagline', 'summary', 'phone', 'email', 'location', 'avatar', 'photo', 'image'],

    humanize(str) {
      if (!str) return '';
      return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/[_\-]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();
    },

    humanKey(key) {
      const special = {
        skills: 'Skills & Technologies', experience: 'Experience',
        education: 'Education', projects: 'Projects',
        certifications: 'Certifications', links: 'Connect',
        social: 'Connect', publications: 'Publications',
        awards: 'Awards', languages: 'Languages',
        interests: 'Interests', volunteer: 'Volunteer Work',
        summary: 'About', overview: 'Overview',
        drive: 'Certificates & Diplomas'
      };
      return special[key.toLowerCase()] || this.humanize(key);
    },

    isDateLike(str) {
      if (typeof str !== 'string') return false;
      return [/\b\d{4}\b/, /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        /present/i, /current/i, /\b\d{1,2}\/\d{4}\b/, /-\s*\d{4}/]
        .some((p) => p.test(str));
    },

    isUrl(str) {
      return typeof str === 'string' && /^(https?:\/\/|mailto:|tel:)/i.test(str);
    },

    detectSectionType(value, key) {
      if (value == null) return null;
      if (Array.isArray(value)) {
        if (value.length === 0) return null;
        if (typeof value[0] === 'string') return 'skill-tags';
        if (typeof value[0] === 'object' && value[0] !== null) {
          const dateKeys = ['date', 'period', 'duration', 'timeframe', 'year', 'dates', 'tenure'];
          const titleKeys = ['title', 'name', 'degree', 'position', 'project', 'course', 'event'];
          const hasDate = value.some((item) => dateKeys.some((k) => item[k]) || Object.values(item).some((v) => this.isDateLike(String(v))));
          const hasTitle = value.some((item) => titleKeys.some((k) => item[k]));
          if (hasDate && hasTitle) return 'timeline';
          if (hasTitle) return 'card-grid';
          return 'card-grid';
        }
        return null;
      }
      if (typeof value === 'object' && value !== null) {
        const vals = Object.values(value);
        if (vals.every((v) => Array.isArray(v))) return 'skill-categories';
        if (vals.some((v) => this.isUrl(v))) return 'links';
        return 'info-block';
      }
      return (typeof value === 'string' && value.length > 0) ? 'highlight' : null;
    },

    analyze(data) {
      const sections = [], meta = {};
      for (const [key, value] of Object.entries(data)) {
        if (this.skipFields.includes(key.toLowerCase())) { meta[key] = value; continue; }
        const type = this.detectSectionType(value, key);
        if (type) sections.push({ key, value, type });
      }
      return { meta, sections };
    },

    generateUVP(role) {
      if (!role) return '';
      const templates = [
        (r) => `Building Scalable, High-Performance ${r.replace(/engineer/i, '').trim() || 'Infrastructure'}`,
        (r) => `Crafting Resilient ${r.includes('Database') ? 'Data' : 'Platform'} Solutions at Scale`,
        (r) => `Engineering Reliable, Performant ${r.includes('Platform') ? 'Platforms' : 'Systems'} for Modern Business`,
        (r) => `Driving Innovation Through ${r.includes('Data') ? 'Data Architecture' : 'Platform Engineering'}`
      ];
      return templates[Math.floor(Math.random() * templates.length)](role);
    }
  };

  // ============================================================
  // 3. DOM BUILDER
  // ============================================================
  const Builder = {
    _(tag, attrs = {}, ...children) {
      const el = document.createElement(tag);
      for (const [key, val] of Object.entries(attrs)) {
        if (key === 'className') el.className = val;
        else if (key.startsWith('on')) el.addEventListener(key.slice(2).toLowerCase(), val);
        else el.setAttribute(key, val);
      }
      const flat = children.flat(Infinity);
      for (const child of flat) {
        if (child == null || child === false) continue;
        el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
      }
      return el;
    },

    icon(name) {
      const icons = {
        github: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
        linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
        email: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
        globe: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
        arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
        mapPin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        calendar: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
        external: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
        download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        phone: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        folder: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
      };
      const wrapper = document.createElement('span');
      wrapper.innerHTML = icons[name] || '';
      wrapper.style.cssText = 'display:inline-flex;align-items:center;justify-content:center';
      return wrapper;
    },

    // --- Navigation ---
    buildNav(sections, data) {
      const navItems = sections.map((s) => ({ id: `section-${s.key}`, label: Schema.humanKey(s.key) }));
      const links = navItems.map((item) =>
        this._('a', { href: `#${item.id}`, className: 'nav-link', dataset: { section: item.id } }, item.label)
      );
      const nameParts = (data.name || '').split(' ');
      const firstName = nameParts.slice(0, 2).join(' ');
      const lastName = nameParts.slice(2).join(' ');
      const brand = this._('a', { href: '#hero', className: 'nav-brand' },
        firstName ? `${firstName} ` : '',
        lastName ? this._('span', {}, lastName) : ''
      );
      const themeBtn = this._('button', { className: 'theme-toggle', 'aria-label': 'Toggle theme', dataset: { action: 'theme' } });
      themeBtn.innerHTML = '<span style="display:inline-flex">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon-light"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon-dark" style="display:none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></span>';
      const menuBtn = this._('button', { className: 'mobile-menu-btn', 'aria-label': 'Toggle menu', dataset: { action: 'menu' } }, this._('span'), this._('span'), this._('span'));
      const linksWrap = this._('div', { className: 'nav-links' }, ...links);
      const right = this._('div', { style: 'display:flex;align-items:center;gap:4px' }, themeBtn, menuBtn);
      const inner = this._('div', { className: 'nav-inner container' }, brand, linksWrap, right);
      return { nav: this._('nav', { className: 'nav', role: 'navigation', 'aria-label': 'Main navigation' }, inner), links: navItems };
    },

    // --- Hero ---
    buildHero(data) {
      const bg = this._('div', { className: 'hero-bg' },
        this._('div', { className: 'hero-bg-gradient' }),
        this._('div', { className: 'hero-bg-gradient' }),
        this._('div', { className: 'hero-bg-gradient' })
      );
      const badge = this._('div', { className: 'hero-badge' }, this._('span', { className: 'hero-badge-dot' }), 'Available for opportunities');
      const nameParts = (data.name || '').split(' ');
      const firstName = nameParts.slice(0, 2).join(' ');
      const lastName = nameParts.slice(2).join(' ');
      const nameEl = this._('h1', { className: 'hero-name' }, firstName ? `${firstName} ` : '', lastName ? this._('span', {}, lastName) : '');
      const roleEl = this._('p', { className: 'hero-role' }, data.role || '');
      const taglineEl = data.tagline ? this._('p', { className: 'hero-tagline' }, data.tagline) : null;
      const uvp = Schema.generateUVP(data.role);
      const uvpEl = this._('p', { className: 'hero-uvp' }, uvp);
      const summaryEl = data.summary ? this._('p', { className: 'hero-summary' }, data.summary) : null;
      const contactItems = [];
      if (data.email) contactItems.push(this._('a', { href: `mailto:${data.email}`, className: 'hero-contact' }, this.icon('email'), data.email));
      if (data.phone) contactItems.push(this._('span', { className: 'hero-contact' }, this.icon('phone'), data.phone));
      if (data.location) contactItems.push(this._('span', { className: 'hero-contact' }, this.icon('mapPin'), data.location));
      const contactEl = contactItems.length ? this._('div', { className: 'hero-contacts' }, ...contactItems) : null;
      const actions = this._('div', { className: 'hero-actions' },
        this._('a', { href: '#section-projects', className: 'btn btn-primary' }, 'View Projects', this.icon('arrowRight')),
        data.links?.email ? this._('a', { href: data.links.email, className: 'btn btn-secondary' }, 'Get in Touch') : null,
        this._('a', { href: 'Mohamed_Adem_BEN_MOUSSA_Resume_EN.pdf', className: 'btn btn-ghost', target: '_blank', rel: 'noopener noreferrer' }, this.icon('download'), 'Resume')
      );
      const content = this._('div', { className: 'container' }, this._('div', { className: 'hero-grid' }, badge, nameEl, roleEl, taglineEl, uvpEl, summaryEl, contactEl, actions));
      const scroll = this._('div', { className: 'scroll-indicator' }, 'Scroll', this._('div', { className: 'scroll-indicator-line' }));
      return this._('section', { id: 'hero', className: 'hero', 'aria-label': 'Hero' }, bg, content, scroll);
    },

    // --- Timeline ---
    buildTimeline(items, key) {
      if (!items || items.length === 0) return null;
      const titleKeys = ['title', 'name', 'degree', 'position', 'role', 'course'];
      const subtitleKeys = ['company', 'institution', 'organization', 'school', 'university', 'employer', 'org'];
      const dateKeys = ['date', 'period', 'duration', 'years', 'timeframe'];
      const descKeys = ['description', 'summary', 'details', 'body'];
      const locationKeys = ['location', 'place', 'city', 'country'];

      const itemsEl = items.map((item) => {
        const title = titleKeys.reduce((f, k) => f || item[k], '') || '';
        const subtitle = subtitleKeys.reduce((f, k) => f || item[k], '') || '';
        const date = dateKeys.reduce((f, k) => f || item[k], '') || '';
        const desc = descKeys.reduce((f, k) => f || item[k], '') || '';
        const location = locationKeys.reduce((f, k) => f || item[k], '') || '';
        const meta = [];
        if (date) meta.push(this._('span', { className: 'timeline-meta-item' }, this.icon('calendar'), date));
        if (location) meta.push(this._('span', { className: 'timeline-meta-item' }, this.icon('mapPin'), location));
        const card = this._('div', { className: 'timeline-card' },
          date ? this._('div', { className: 'timeline-date' }, date) : null,
          title ? this._('h3', { className: 'timeline-title' }, title) : null,
          subtitle ? this._('p', { className: 'timeline-subtitle' }, subtitle) : null,
          meta.length ? this._('div', { className: 'timeline-meta' }, ...meta) : null,
          desc ? this._('p', { className: 'timeline-desc' }, desc) : null
        );
        return this._('li', { className: 'timeline-item reveal' }, this._('div', { className: 'timeline-dot' }, this._('div', { className: 'timeline-dot-inner' })), card);
      });

      const title = Schema.humanKey(key);
      const header = this._('div', { className: 'section-header reveal' },
        this._('span', { className: 'section-label' }, title),
        this._('h2', { className: 'section-title' }, title)
      );
      return this._('section', { id: `section-${key}`, className: 'section', 'aria-label': title },
        this._('div', { className: 'container container-narrow' }, header, this._('ul', { className: 'stagger-children' }, ...itemsEl))
      );
    },

    // --- Card Grid ---
    buildCardGrid(items, key) {
      if (!items || items.length === 0) return null;
      const nameKeys = ['name', 'title', 'project'];
      const subtitleKeys = ['organizer', 'company', 'institution', 'organization', 'school', 'university', 'employer', 'org'];
      const descKeys = ['description', 'summary', 'details', 'body', 'overview'];
      const techKeys = ['technologies', 'tech', 'stack', 'tools', 'techStack', 'skills', 'libraries', 'tags'];
      const linkKeys = ['link', 'url', 'website', 'href', 'demo', 'github'];
      const cards = items.map((item) => {
        const name = nameKeys.reduce((f, k) => f || item[k], '') || '';
        const subtitle = subtitleKeys.reduce((f, k) => f || item[k], '') || '';
        const desc = descKeys.reduce((f, k) => f || item[k], '') || '';
        const techs = techKeys.reduce((f, k) => f || item[k], null) || [];
        const link = linkKeys.reduce((f, k) => f || item[k], '') || '';
        const techTags = Array.isArray(techs) ? techs.map((t) => this._('span', { className: 'project-card-tech-tag' }, String(t))) : [];
        const linkEl = link ? this._('a', { href: link, className: 'project-card-link', target: '_blank', rel: 'noopener noreferrer' }, 'View Project', this.icon('external')) : null;
        return this._('div', { className: 'project-card reveal reveal-scale' },
          name ? this._('h3', { className: 'project-card-title' }, name) : null,
          subtitle ? this._('p', { className: 'project-card-subtitle' }, subtitle) : null,
          desc ? this._('p', { className: 'project-card-desc' }, desc) : null,
          techTags.length ? this._('div', { className: 'project-card-tech' }, ...techTags) : null, linkEl
        );
      });
      const title = Schema.humanKey(key);
      const header = this._('div', { className: 'section-header reveal' },
        this._('span', { className: 'section-label' }, title),
        this._('h2', { className: 'section-title' }, title)
      );
      return this._('section', { id: `section-${key}`, className: 'section', 'aria-label': title },
        this._('div', { className: 'container' }, header, this._('div', { className: 'cards-grid stagger-children' }, ...cards))
      );
    },

    // --- Skill Tags ---
    buildSkillTags(items, key) {
      if (!items || items.length === 0) return null;
      const tags = items.map((s) => this._('span', { className: 'skill-tag reveal' }, String(s)));
      const title = Schema.humanKey(key);
      const header = this._('div', { className: 'section-header reveal' },
        this._('span', { className: 'section-label' }, title),
        this._('h2', { className: 'section-title' }, title)
      );
      return this._('section', { id: `section-${key}`, className: 'section', 'aria-label': title },
        this._('div', { className: 'container' }, header, this._('div', { className: 'skills-cloud stagger-children' }, ...tags))
      );
    },

    // --- Links ---
    buildLinks(links, key) {
      if (!links || Object.keys(links).length === 0) return null;
      const knownIcons = { github: 'github', linkedin: 'linkedin', email: 'email', drive: 'folder' };
      const items = Object.entries(links).map(([k, v]) => {
        const label = Schema.humanize(k);
        const displayLabel = k.toLowerCase() === 'email' ? (v.replace('mailto:', '') || label) : label;
        return this._('a', { href: v, className: 'link-card reveal', target: '_blank', rel: 'noopener noreferrer', 'aria-label': label },
          this.icon(knownIcons[k.toLowerCase()] || 'globe'), displayLabel
        );
      });
      const title = Schema.humanKey(key);
      const header = this._('div', { className: 'section-header reveal' },
        this._('span', { className: 'section-label' }, title),
        this._('h2', { className: 'section-title' }, title)
      );
      return this._('section', { id: `section-${key}`, className: 'section', 'aria-label': title },
        this._('div', { className: 'container' }, header, this._('div', { className: 'links-grid stagger-children' }, ...items))
      );
    },

    // --- Categorized Skills ---
    buildSkillCategories(categories, key) {
      if (!categories || Object.keys(categories).length === 0) return null;
      const groups = Object.entries(categories).map(([cat, items], i) => {
        const tags = items.map((s) => this._('span', { className: 'skill-tag reveal' }, String(s)));
        return this._('div', { className: `skill-group reveal reveal-delay-${Math.min(i + 1, 6)}` },
          this._('h3', { className: 'skill-group-title' }, Schema.humanize(cat)),
          this._('div', { className: 'skills-cloud stagger-children' }, ...tags)
        );
      });
      const title = Schema.humanKey(key);
      const header = this._('div', { className: 'section-header reveal' },
        this._('span', { className: 'section-label' }, title),
        this._('h2', { className: 'section-title' }, title)
      );
      return this._('section', { id: `section-${key}`, className: 'section', 'aria-label': title },
        this._('div', { className: 'container' }, header, ...groups)
      );
    },

    // --- Info Block ---
    buildInfoBlock(obj, key) {
      if (!obj || Object.keys(obj).length === 0) return null;
      const cards = Object.entries(obj).map(([k, v]) => {
        const isUrl = Schema.isUrl(v);
        const valEl = isUrl
          ? this._('a', { href: v, className: 'info-card-value url', target: '_blank', rel: 'noopener noreferrer' }, v)
          : this._('p', { className: 'info-card-value' }, String(v));
        return this._('div', { className: 'info-card reveal' }, this._('span', { className: 'info-card-key' }, Schema.humanize(k)), valEl);
      });
      const title = Schema.humanKey(key);
      const header = this._('div', { className: 'section-header reveal' },
        this._('span', { className: 'section-label' }, title),
        this._('h2', { className: 'section-title' }, title)
      );
      return this._('section', { id: `section-${key}`, className: 'section', 'aria-label': title },
        this._('div', { className: 'container' }, header, this._('div', { className: 'info-grid stagger-children' }, ...cards))
      );
    },

    // --- Footer ---
    buildFooter() {
      return this._('footer', { className: 'footer', role: 'contentinfo' },
        this._('div', { className: 'container' },
          this._('p', { className: 'footer-text' },
            `© ${new Date().getFullYear()} ${(DATA.name || '').split(' ')[0] || 'Portfolio'}. Built with the Adaptive Portfolio Engine.`
          )
        )
      );
    }
  };

  // ============================================================
  // 4. MOTION ENGINE
  // ============================================================
  const Motion = {
    observer: null, magBoundEls: [],

    init() {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        document.querySelectorAll('.reveal, .reveal-scale, .stagger-children').forEach((el) => el.classList.add('visible'));
        return;
      }
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.reveal, .reveal-scale, .stagger-children').forEach((el) => this.observer.observe(el));
      this.initMagneticButtons();
    },

    initMagneticButtons() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      document.querySelectorAll('.btn-primary, .btn-secondary, .link-card').forEach((btn) => {
        const bound = { el: btn, x: 0, y: 0, active: false };
        btn.addEventListener('mouseenter', () => { bound.active = true; });
        btn.addEventListener('mousemove', (e) => {
          if (!bound.active) return;
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const dist = Math.sqrt(x * x + y * y);
          const strength = Math.min(1, (100 - Math.min(dist, 100)) / 100);
          bound.x = x * 0.15 * strength;
          bound.y = y * 0.15 * strength;
          btn.style.transform = `translate(${bound.x}px, ${bound.y}px)`;
        });
        btn.addEventListener('mouseleave', () => { bound.active = false; btn.style.transform = ''; });
        this.magBoundEls.push(bound);
      });
    }
  };

  // ============================================================
  // 5. THEME MANAGER
  // ============================================================
  const Theme = {
    key: 'portfolio-theme',
    init() {
      const saved = localStorage.getItem(this.key);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.set(saved || 'light');
      document.querySelector('[data-action="theme"]')?.addEventListener('click', () => this.toggle());
    },
    set(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      const btn = document.querySelector('[data-action="theme"]');
      if (btn) {
        const lightIcon = btn.querySelector('.theme-icon-light');
        const darkIcon = btn.querySelector('.theme-icon-dark');
        if (lightIcon && darkIcon) {
          lightIcon.style.display = theme === 'dark' ? 'inline' : 'none';
          darkIcon.style.display = theme === 'light' ? 'inline' : 'none';
        }
      }
      localStorage.setItem(this.key, theme);
    },
    toggle() { this.set(this.get() === 'dark' ? 'light' : 'dark'); },
    get() { return document.documentElement.getAttribute('data-theme') || 'light'; }
  };

  // ============================================================
  // 6. NAVIGATION MANAGER
  // ============================================================
  const Nav = {
    links: [], ticking: false,
    init(links) {
      this.links = links;
      document.querySelectorAll('.nav-link').forEach((el) => {
        el.addEventListener('click', (e) => {
          const href = el.getAttribute('href');
          if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            document.querySelector('.nav-links')?.classList.remove('open');
            document.querySelector('.mobile-menu-btn')?.classList.remove('active');
          }
        });
      });
      document.querySelector('[data-action="menu"]')?.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.toggle('open');
        document.querySelector('.mobile-menu-btn')?.classList.toggle('active');
      });
      document.addEventListener('scroll', () => {
        if (!this.ticking) {
          requestAnimationFrame(() => { this.updateActive(); this.handleNavBg(); this.ticking = false; });
          this.ticking = true;
        }
      }, { passive: true });
      this.handleNavBg();
      this.updateActive();
    },
    updateActive() {
      const scrollY = window.scrollY + 120;
      let activeId = this.links[0]?.id || '';
      for (const link of this.links) {
        if (document.getElementById(link.id)?.offsetTop <= scrollY) activeId = link.id;
      }
      document.querySelectorAll('.nav-link').forEach((el) => el.classList.toggle('active', el.dataset.section === activeId));
    },
    handleNavBg() { document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 50); }
  };

  // ============================================================
  // 7. APP BOOTSTRAP
  // ============================================================
  const App = {
    init() {
      const root = document.getElementById('app');
      if (!root) return;
      const { meta, sections } = Schema.analyze(DATA);
      const allData = { ...meta, ...Object.fromEntries(sections.map((s) => [s.key, s.value])) };
      const { nav, links: navLinks } = Builder.buildNav(sections, meta);
      root.appendChild(nav);
      root.appendChild(Builder.buildHero(allData));
      sections.forEach(({ key, value, type }) => {
        const map = { timeline: 'buildTimeline', 'card-grid': 'buildCardGrid', 'skill-tags': 'buildSkillTags', 'skill-categories': 'buildSkillCategories', links: 'buildLinks', 'info-block': 'buildInfoBlock' };
        const method = map[type];
        const el = method ? Builder[method](value, key) : null;
        if (el) root.appendChild(el);
      });
      root.appendChild(Builder.buildFooter());
      Nav.init(navLinks);
      Theme.init();
      Motion.init();
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          document.querySelector('.nav-links')?.classList.remove('open');
          document.querySelector('.mobile-menu-btn')?.classList.remove('active');
        }
      });
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => App.init());
  else App.init();
  global.App = App;
})(window);
