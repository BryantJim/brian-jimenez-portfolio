export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      available: 'Available',
      availableFor: 'Available for opportunities',
    },
    hero: {
      available: 'Available for opportunities',
      roles: ['Software Developer', 'Full Stack', 'Systems Engineer'],
      tagline:
        'Building scalable solutions and transforming complex problems into elegant, high-quality software. Passionate about technology, innovation, and continuous improvement.',
      viewProjects: 'View Projects',
      scroll: 'SCROLL',
      stats: [
        { value: '4+', label: 'Years Experience' },
        { value: '10+', label: 'Projects Delivered' },
        { value: '5+', label: 'Technologies' },
        { value: '100%', label: 'Commitment' },
      ],
    },
    about: {
      badge: '01',
      title: 'About Me',
      description: 'Systems Engineer with a passion for building software that makes a difference',
      profileTitle: 'Professional Profile',
      bio: {
        p1a: 'I am a Systems Engineer with proven experience in software development and project management, currently working at',
        p1b: ', where I design and implement enterprise-level solutions for the financial sector.',
        p2: 'My expertise spans across web development, desktop applications, and backend systems. I am passionate about technology and innovation, with strong skills in programming, data analysis, and problem-solving.',
        p3: 'Detail-oriented and results-driven, I am committed to delivering scalable, high-quality solutions that meet business objectives while maintaining clean code practices.',
      },
      location: 'Location',
      locationValue: 'Dominican Republic',
      education: 'Education',
      educationValue: 'B.Sc. Systems Engineering',
      highlights: [
        { title: 'Clean Code', description: 'Writing maintainable, scalable, and well-documented code' },
        { title: 'System Design', description: 'Architecting robust backend systems and databases' },
        { title: 'Web Development', description: 'Building modern, responsive web applications' },
        { title: 'Desktop Apps', description: 'Creating powerful desktop solutions with .NET' },
        { title: 'Problem Solving', description: 'Turning complex challenges into elegant solutions' },
        { title: 'Team Player', description: 'Collaborating effectively with cross-functional teams' },
      ],
    },
    skills: {
      badge: '02',
      title: 'Skills & Technologies',
      description:
        'A comprehensive toolkit built through years of hands-on experience in enterprise software development',
      technologies: 'technologies',
      additionalExpertise: 'Additional Expertise',
      categories: [
        { title: 'Web Development', icon: 'WEB' },
        { title: 'Backend / APIs', icon: 'API' },
        { title: 'Desktop Development', icon: 'APP' },
        { title: 'Databases', icon: 'DB' },
      ],
      additionalSkills: [
        'Agile', 'Scrum', 'NUnit Testing', 'Git',
        'Technical Support', 'Team Collaboration', 'Client Service', 'Excel',
      ],
    },
    projects: {
      badge: '03',
      title: 'Featured Projects',
      description: 'A selection of enterprise solutions and applications I have built throughout my career',
      wantMore: 'Want to see more of my work?',
      viewGitHub: 'View GitHub Profile',
      items: [
        {
          title: 'DGII Tax Payment Platform',
          description:
            "A web application enabling users to pay their taxes to the DGII (Dominican Tax Authority) directly through the institution's banking services.",
          highlights: ['Secure payment processing', 'Real-time tax validation', 'User-friendly interface'],
        },
        {
          title: 'Internal Requirements Management',
          description:
            'A comprehensive internal system to handle development requests with status tracking, file/document management, and workflow visualization.',
          highlights: ['Workflow automation', 'Document management', 'Status tracking dashboard'],
        },
        {
          title: 'Remittance API',
          description:
            'RESTful API allowing clients to receive international payments directly to their debit cards via secure links.',
          highlights: ['Secure transactions', 'Multi-currency support', 'Integration ready'],
        },
        {
          title: 'Sales Dashboard',
          description:
            'A customizable real-time sales analytics dashboard built with Blazor for tracking performance by day, month, or custom date ranges.',
          highlights: ['Real-time analytics', 'Custom date ranges', 'Interactive charts'],
        },
        {
          title: 'Price Scanner App',
          description:
            "A tablet-based application using Xamarin Android that scans barcodes and displays product prices directly from the supermarket's central database.",
          highlights: ['Barcode scanning', 'Real-time pricing', 'Offline capability'],
        },
        {
          title: 'CODIA Nordeste Website',
          description:
            'WordPress-based website with custom modules and dynamic content for the regional engineering guild (Colegio Dominicano de Ingenieros).',
          highlights: ['Custom modules', 'Dynamic content', 'Member portal'],
        },
      ],
    },
    experience: {
      badge: '04',
      title: 'Experience & Education',
      description: 'My professional journey in enterprise software development and continuous learning',
      items: [
        {
          title: 'Software Developer',
          company: 'Asociación Duarte de Ahorros y Préstamos',
          location: 'San Francisco de Macorís',
          period: 'Sep 2023 – Present',
          type: 'work' as const,
          description:
            'Designing and implementing enterprise-level solutions for the financial sector, including RESTful APIs, modern web interfaces, and system integrations.',
          highlights: [
            'Designed and implemented RESTful APIs using C#',
            'Worked with IBM AS/400 systems and SQL Server integration',
            'Developed modern UIs with React, JavaScript, and Tailwind CSS',
            'Delivered DGII Tax Payment Platform and Remittance API',
          ],
        },
        {
          title: 'Software Developer',
          company: 'Soluciones Almonte Gil',
          location: 'San Francisco de Macorís',
          period: 'Sep 2021 – Sep 2023',
          type: 'work' as const,
          description:
            'Developed and maintained web and desktop applications using C# and VB.NET, with experience in Blazor, MAUI, Windows Forms, and Xamarin Android.',
          highlights: [
            'Built Sales Dashboard with Blazor for real-time analytics',
            'Created Price Scanner App using Xamarin Android',
            'Conducted unit testing using NUnit',
            'Participated in full development lifecycle',
          ],
        },
        {
          title: 'Software Development Intern',
          company: 'Soluciones Almonte Gil',
          location: 'San Francisco de Macorís',
          period: 'Mar 2021 – Aug 2021',
          type: 'work' as const,
          description:
            'Supported development of software modules, participated in debugging and testing, and collaborated with senior developers on technical solutions.',
          highlights: [
            'Assisted in building database scripts',
            'Debugged legacy modules for improved performance',
            'Learned enterprise development practices',
          ],
        },
        {
          title: 'B.Sc. in Systems Engineering',
          company: 'Catholic University Nordestana (UCNE)',
          location: 'San Francisco de Macorís',
          period: '2017 – 2022',
          type: 'education' as const,
          description:
            'Comprehensive education in software engineering, systems design, database management, and project management methodologies.',
        },
        {
          title: 'Mobile Programming Diploma (Android)',
          company: 'ITLA',
          location: 'Dominican Republic',
          period: '2024',
          type: 'certification' as const,
          description: 'Advanced mobile development training focused on Android application development.',
        },
      ],
    },
    contact: {
      badge: '05',
      title: 'Get In Touch',
      description: "Have a project in mind or want to collaborate? Let's connect!",
      infoLabels: ['Email', 'Phone', 'Location'],
      sendMessage: 'Send a Message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successMessage: 'Thank you for reaching out. I will get back to you soon.',
      errorMessage: 'Failed to send message. Please try again.',
      networkError: 'Network error. Please check your connection.',
      terminalRole: 'Software Developer @ Asociación Duarte',
      terminalStatus: 'Available for opportunities',
    },
    footer: {
      builtWith: 'Built with',
      using: 'using React & Tailwind CSS',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      available: 'Disponible',
      availableFor: 'Disponible para oportunidades',
    },
    hero: {
      available: 'Disponible para oportunidades',
      roles: ['Desarrollador de Software', 'Full Stack', 'Ingeniero de Sistemas'],
      tagline:
        'Construyendo soluciones escalables y transformando problemas complejos en software elegante y de alta calidad. Apasionado por la tecnología, la innovación y la mejora continua.',
      viewProjects: 'Ver Proyectos',
      scroll: 'SCROLL',
      stats: [
        { value: '4+', label: 'Años de Experiencia' },
        { value: '10+', label: 'Proyectos Entregados' },
        { value: '5+', label: 'Tecnologías' },
        { value: '100%', label: 'Compromiso' },
      ],
    },
    about: {
      badge: '01',
      title: 'Sobre Mí',
      description: 'Ingeniero de Sistemas apasionado por construir software que marca la diferencia',
      profileTitle: 'Perfil Profesional',
      bio: {
        p1a: 'Soy Ingeniero de Sistemas con experiencia comprobada en desarrollo de software y gestión de proyectos, actualmente trabajando en',
        p1b: ', donde diseño e implemento soluciones empresariales para el sector financiero.',
        p2: 'Mi experiencia abarca el desarrollo web, aplicaciones de escritorio y sistemas backend. Soy apasionado de la tecnología y la innovación, con sólidas habilidades en programación, análisis de datos y resolución de problemas.',
        p3: 'Orientado al detalle y a los resultados, estoy comprometido a entregar soluciones escalables y de alta calidad que cumplan los objetivos de negocio manteniendo buenas prácticas de código.',
      },
      location: 'Ubicación',
      locationValue: 'República Dominicana',
      education: 'Educación',
      educationValue: 'Ing. en Sistemas',
      highlights: [
        { title: 'Código Limpio', description: 'Escribiendo código mantenible, escalable y bien documentado' },
        { title: 'Diseño de Sistemas', description: 'Arquitectando sistemas backend y bases de datos robustos' },
        { title: 'Desarrollo Web', description: 'Construyendo aplicaciones web modernas y responsivas' },
        { title: 'Apps de Escritorio', description: 'Creando soluciones de escritorio potentes con .NET' },
        { title: 'Resolución de Problemas', description: 'Convirtiendo desafíos complejos en soluciones elegantes' },
        { title: 'Trabajo en Equipo', description: 'Colaborando efectivamente con equipos multifuncionales' },
      ],
    },
    skills: {
      badge: '02',
      title: 'Habilidades y Tecnologías',
      description:
        'Un conjunto de herramientas completo construido a lo largo de años de experiencia práctica en desarrollo de software empresarial',
      technologies: 'tecnologías',
      additionalExpertise: 'Experiencia Adicional',
      categories: [
        { title: 'Desarrollo Web', icon: 'WEB' },
        { title: 'Backend / APIs', icon: 'API' },
        { title: 'Desarrollo de Escritorio', icon: 'APP' },
        { title: 'Bases de Datos', icon: 'DB' },
      ],
      additionalSkills: [
        'Agile', 'Scrum', 'NUnit Testing', 'Git',
        'Soporte Técnico', 'Trabajo en Equipo', 'Servicio al Cliente', 'Excel',
      ],
    },
    projects: {
      badge: '03',
      title: 'Proyectos Destacados',
      description: 'Una selección de soluciones empresariales y aplicaciones que he construido a lo largo de mi carrera',
      wantMore: '¿Quieres ver más de mi trabajo?',
      viewGitHub: 'Ver Perfil de GitHub',
      items: [
        {
          title: 'Plataforma de Pago de Impuestos DGII',
          description:
            'Aplicación web que permite a los usuarios pagar sus impuestos a la DGII (Autoridad Tributaria Dominicana) directamente a través de los servicios bancarios de la institución.',
          highlights: ['Procesamiento de pagos seguro', 'Validación fiscal en tiempo real', 'Interfaz amigable'],
        },
        {
          title: 'Gestión de Requerimientos Internos',
          description:
            'Sistema interno integral para gestionar solicitudes de desarrollo con seguimiento de estado, gestión de archivos/documentos y visualización de flujo de trabajo.',
          highlights: ['Automatización de flujos', 'Gestión de documentos', 'Dashboard de seguimiento'],
        },
        {
          title: 'API de Remesas',
          description:
            'API RESTful que permite a los clientes recibir pagos internacionales directamente en sus tarjetas de débito mediante enlaces seguros.',
          highlights: ['Transacciones seguras', 'Soporte multi-moneda', 'Lista para integración'],
        },
        {
          title: 'Dashboard de Ventas',
          description:
            'Dashboard de análisis de ventas en tiempo real y personalizable construido con Blazor para monitorear el rendimiento por día, mes o rangos de fechas personalizados.',
          highlights: ['Analíticas en tiempo real', 'Rangos de fechas personalizados', 'Gráficos interactivos'],
        },
        {
          title: 'App Escáner de Precios',
          description:
            'Aplicación para tableta usando Xamarin Android que escanea códigos de barras y muestra los precios de productos directamente desde la base de datos central del supermercado.',
          highlights: ['Escaneo de códigos de barras', 'Precios en tiempo real', 'Capacidad offline'],
        },
        {
          title: 'Sitio Web CODIA Nordeste',
          description:
            'Sitio web basado en WordPress con módulos personalizados y contenido dinámico para el gremio de ingeniería regional (Colegio Dominicano de Ingenieros).',
          highlights: ['Módulos personalizados', 'Contenido dinámico', 'Portal de miembros'],
        },
      ],
    },
    experience: {
      badge: '04',
      title: 'Experiencia y Educación',
      description: 'Mi trayectoria profesional en el desarrollo de software empresarial y aprendizaje continuo',
      items: [
        {
          title: 'Desarrollador de Software',
          company: 'Asociación Duarte de Ahorros y Préstamos',
          location: 'San Francisco de Macorís',
          period: 'Sep 2023 – Presente',
          type: 'work' as const,
          description:
            'Diseño e implementación de soluciones empresariales para el sector financiero, incluyendo APIs RESTful, interfaces web modernas e integraciones de sistemas.',
          highlights: [
            'Diseñé e implementé APIs RESTful usando C#',
            'Trabajé con sistemas IBM AS/400 e integración con SQL Server',
            'Desarrollé interfaces modernas con React, JavaScript y Tailwind CSS',
            'Entregué la Plataforma de Pago DGII y la API de Remesas',
          ],
        },
        {
          title: 'Desarrollador de Software',
          company: 'Soluciones Almonte Gil',
          location: 'San Francisco de Macorís',
          period: 'Sep 2021 – Sep 2023',
          type: 'work' as const,
          description:
            'Desarrollo y mantenimiento de aplicaciones web y de escritorio usando C# y VB.NET, con experiencia en Blazor, MAUI, Windows Forms y Xamarin Android.',
          highlights: [
            'Construí el Dashboard de Ventas con Blazor para analíticas en tiempo real',
            'Creé la App Escáner de Precios usando Xamarin Android',
            'Realicé pruebas unitarias usando NUnit',
            'Participé en el ciclo completo de desarrollo',
          ],
        },
        {
          title: 'Practicante de Desarrollo de Software',
          company: 'Soluciones Almonte Gil',
          location: 'San Francisco de Macorís',
          period: 'Mar 2021 – Ago 2021',
          type: 'work' as const,
          description:
            'Apoyo en el desarrollo de módulos de software, participación en depuración y pruebas, y colaboración con desarrolladores senior en soluciones técnicas.',
          highlights: [
            'Ayudé en la construcción de scripts de base de datos',
            'Depuré módulos heredados para mejorar el rendimiento',
            'Aprendí prácticas de desarrollo empresarial',
          ],
        },
        {
          title: 'Ing. en Sistemas',
          company: 'Universidad Católica Nordestana (UCNE)',
          location: 'San Francisco de Macorís',
          period: '2017 – 2022',
          type: 'education' as const,
          description:
            'Educación integral en ingeniería de software, diseño de sistemas, gestión de bases de datos y metodologías de gestión de proyectos.',
        },
        {
          title: 'Diplomado en Programación Móvil (Android)',
          company: 'ITLA',
          location: 'República Dominicana',
          period: '2024',
          type: 'certification' as const,
          description: 'Formación avanzada en desarrollo móvil enfocada en el desarrollo de aplicaciones Android.',
        },
      ],
    },
    contact: {
      badge: '05',
      title: 'Contáctame',
      description: '¿Tienes un proyecto en mente o quieres colaborar? ¡Conectemos!',
      infoLabels: ['Correo', 'Teléfono', 'Ubicación'],
      sendMessage: 'Enviar un Mensaje',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo',
      emailPlaceholder: 'tu@correo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      successTitle: '¡Mensaje Enviado!',
      successMessage: 'Gracias por contactarme. Te responderé pronto.',
      errorMessage: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
      networkError: 'Error de red. Por favor verifica tu conexión.',
      terminalRole: 'Desarrollador @ Asociación Duarte',
      terminalStatus: 'Disponible para oportunidades',
    },
    footer: {
      builtWith: 'Hecho con',
      using: 'usando React & Tailwind CSS',
    },
  },
};

export type Translations = typeof translations.en;
