const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function applyTheme(theme) {
  if (theme === 'red') {
    body.classList.add('red-theme');
  } else {
    body.classList.remove('red-theme');
  }
}

themeToggle.addEventListener('click', () => {
  document.body.classList.add('theme-transitioning');
  body.classList.toggle('red-theme');
  let currentTheme = body.classList.contains('red-theme') ? 'red' : 'blue';
  localStorage.setItem('theme', currentTheme);
  setTimeout(() => {
    document.body.classList.remove('theme-transitioning');
  }, 300);
});

const savedTheme = localStorage.getItem('theme') || 'blue';
applyTheme(savedTheme);

const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.querySelectorAll('.language-option');
const downloadCVBtn = document.getElementById('downloadCVBtn');

const cvLinks = {
  en: "https://drive.usercontent.google.com/download?id=1_3bCetGKRwJ09s9OVnJydr7e_70_lwGh&export=download",
  fr: "https://drive.usercontent.google.com/download?id=1bN4yI3pFlTqcEVrEwQpuVhYiBOBb81xF&export=download",
  ar: "https://drive.usercontent.google.com/download?id=1_4rc0WnRXUyfsb_PDvmNyyd8n4PDKuTJ&export=download"
};

const translations = {
  "About": {
    en: "About",
    fr: "À Propos",
    ar: "عني"
  },
  "Contact Me": {
    en: "Contact Me",
    fr: "Contactez-moi",
    ar: "اتصل بي"
  },
  "Download CV (PDF)": {
    en: "Download CV (PDF)",
    fr: "Télécharger CV (PDF)",
    ar: "تحميل السيرة الذاتية (PDF)"
  },
  "I’m Abdelwahed Abdellaoui, a 22-year-old technology enthusiast from Aït Ourir, Morocco. My fascination with technology began the day I discovered what a mobile phone could do — long before I knew what programming really meant. Since then, I’ve been passionately exploring the digital world, driven by curiosity and a desire to create.": {
    en: "I’m Abdelwahed Abdellaoui, a 22-year-old technology enthusiast from Aït Ourir, Morocco. My fascination with technology began the day I discovered what a mobile phone could do — long before I knew what programming really meant. Since then, I’ve been passionately exploring the digital world, driven by curiosity and a desire to create.",
    fr: "Je suis Abdelwahed Abdellaoui, un passionné de technologie de 22 ans originaire d'Aït Ourir, Maroc. Ma fascination pour la technologie a commencé le jour où j'ai découvert ce qu'un téléphone portable pouvait faire — bien avant de savoir ce que signifiait réellement la programmation. Depuis, j'explore avec passion le monde numérique, animé par la curiosité et le désir de créer.",
    ar: "أنا عبدالواحد عبدلاوي، شاب أبلغ من العمر 22 عامًا، من آيت ورير، المغرب، ومتحمس للتكنولوجيا بجميع أشكالها. بدأ افتتاني بالتكنولوجيا في اليوم الذي اكتشفت فيه ما يمكن للهاتف المحمول فعله — قبل وقت طويل من معرفتي بما تعنيه البرمجة حقًا. ومنذ ذلك الحين، وأنا أستكشف العالم الرقمي بشغف، مدفوعًا بالفضول والرغبة في الإبداع."
  },
  "Rather than focusing on just one area, I aim to build a strong foundation in multiple fields of tech, from design to development. Currently, I’m learning the core building blocks of the web — HTML, CSS — and gradually expanding to JavaScript and modern tools like React.": {
    en: "Rather than focusing on just one area, I aim to build a strong foundation in multiple fields of tech, from design to development. Currently, I’m learning the core building blocks of the web — HTML, CSS — and gradually expanding to JavaScript and modern tools like React.",
    fr: "Plutôt que de me concentrer sur un seul domaine, mon objectif est de bâtir une base solide dans plusieurs domaines technologiques, du design au développement. Actuellement, j'apprends les éléments fondamentals du web — HTML, CSS — et j'élargis progressivement mes compétences à JavaScript et aux outils modernes comme React.",
    ar: "بدلاً من التركيز على مجال واحد فقط، أهدف إلى بناء أساس قوي في مجالات متعددة من التكنولوجيا، من التصميم إلى التطوير. حاليًا، أتعلم اللبنات الأساسية للويب — HTML، CSS — وأتوسع تدريجيًا إلى JavaScript والأدوات الحديثة مثل React."
  },
  "In addition to programming, I’ve worked as a private tutor teaching essential subjects to elementary and middle school students. I’ve also had a practical job experience where I was responsible for handling service payments, managing money carefully, tracking totals, and ensuring everything was well organized.": {
    en: "In addition to programming, I’ve worked as a private tutor teaching essential subjects to elementary and middle school students. I’ve also had a practical job experience where I was responsible for handling service payments, managing money carefully, tracking totals, and ensuring everything was well organized.",
    fr: "En plus de la programmation, j'ai travaillé comme tuteur privé enseignant des matières essentielles aux élèves du primaire et du collège. J'ai également eu une expérience professionnelle pratique où j'étais responsable de la gestion des paiements de services, de la gestion minutieuse de l'argent, du suivi des totaux et de la garantie que tout était bien organisé.",
    ar: "بالإضافة إلى البرمجة، عملت كمدرس خاص لتدريس المواد الأساسية لطلاب المرحلة الابتدائية والإعدادية. كما كانت لدي خبرة عملية في وظيفة كنت فيها مسؤولاً عن التعامل مع مدفوعات الخدمات، وإدارة الأموال بعناية، وتتبع الإجماليات، والتأكد من أن كل شيء منظم بشكل جيد."
  },
  "My goal is to join a dynamic team where I can grow as a web developer, keep learning, and contribute to real solutions that improve everyday life.": {
    en: "My goal is to join a dynamic team where I can grow as a web developer, keep learning, and contribute to real solutions that improve everyday life.",
    fr: "Mon objectif est de rejoindre une équipe dynamique où je pourrai évoluer en tant que développeur web, continuer à apprendre et contribuer à des solutions concrètes qui améliorent la vie quotidienne.",
    ar: "هدفي هو الانضمام إلى فريق ديناميكي حيث يمكنني النمو كمطور ويب، ومواصلة التعلم، والمساهمة في حلول حقيقية تحسن الحياة اليومية."
  },
  "Education": {
    en: "Education",
    fr: "Éducation",
    ar: "التعليم"
  },
  "Technical Diploma in Software Development": {
    en: "Technical Diploma in Software Development",
    fr: "Diplôme Technique en Développement Logiciel",
    ar: "دبلوم تقني في تطوير البرمجيات"
  },
  "ESET Institute": {
    en: "ESET Institute",
    fr: "Institut ESET",
    ar: "معهد ESET"
  },
  "Oct 2024 - 2026 (Year 1)": {
    en: "Oct 2024 - 2026 (Year 1)",
    fr: "Oct. 2024 - 2026 (Année 1)",
    ar: "أكتوبر 2024 - 2026 (السنة الأولى)"
  },
  "Started in October 2024, finishing in 2026 (currently completing Year 1)": {
    en: "Started in October 2024, finishing in 2026 (currently completing Year 1)",
    fr: "Commencé en octobre 2024, fin en 2026 (actuellement en première année)",
    ar: "بدأت في أكتوبر 2024، تنتهي في 2026 (حالياً أكمل السنة الأولى)"
  },
  "University Studies – Geography": {
    en: "University Studies – Geography",
    fr: "Études Universitaires – Géographie",
    ar: "دراسات جامعية – جغرافيا"
  },
  "University": {
    en: "University",
    fr: "Université",
    ar: "الجامعة"
  },
  "Completed two years": {
    en: "Completed two years",
    fr: "Deux années complétées",
    ar: "أكملت سنتين"
  },
  "Completed two years before shifting to tech": {
    en: "Completed two years before shifting to tech",
    fr: "Complété deux années avant de me diriger vers la technologie",
    ar: "أكملت سنتين قبل التحول إلى التكنولوجيا"
  },
  "High School Diploma in Humanities": {
    en: "High School Diploma in Humanities",
    fr: "Diplôme du Baccalauréat en Sciences Humaines",
    ar: "شهادة البكالوريا في العلوم الإنسانية"
  },
  "High School": {
    en: "High School",
    fr: "Lycée",
    ar: "الثانوية"
  },
  "2022, with distinction": {
    en: "2022, with distinction",
    fr: "2022, avec mention",
    ar: "2022، مع مرتبة الشرف"
  },
  "Awarded with distinction": {
    en: "Awarded with distinction",
    fr: "Décerné avec mention",
    ar: "مُنحت بامتياز"
  },
  "Additional Courses (Online & Self-Learning)": {
    en: "Additional Courses (Online & Self-Learning)",
    fr: "Cours Complémentaires (En Ligne & Auto-Apprentissage)",
    ar: "دورات إضافية (عبر الإنترنت والتعلم الذاتي)"
  },
  "Various Online Platforms": {
    en: "Various Online Platforms",
    fr: "Diverses Plateformes En Ligne",
    ar: "منصات متنوعة عبر الإنترنت"
  },
  "English language course": {
    en: "English language course",
    fr: "Cours de langue anglaise",
    ar: "دورة في اللغة الإنجليزية"
  },
  "Python programming course": {
    en: "Python programming course",
    fr: "Cours de programmation Python",
    ar: "دورة في برمجة بايثون"
  },
  "French language course": {
    en: "French language course",
    fr: "Cours de langue française",
    ar: "دورة في اللغة الفرنسية"
  },
  "Graphic design: image editing, logos, ads": {
    en: "Graphic design: image editing, logos, ads",
    fr: "Design graphique : retouche d'images, logos, publicités",
    ar: "تصميم جرافيك: تحرير الصور، الشعارات، الإعلانات"
  },
  "Adobe Photoshop": {
    en: "Adobe Photoshop",
    fr: "Adobe Photoshop",
    ar: "أدوبي فوتوشوب"
  },
  "Mobile app development using Sketchware": {
    en: "Mobile app development using Sketchware",
    fr: "Développement d'applications mobiles avec Sketchware",
    ar: "تطوير تطبيقات الهاتف باستخدام Sketchware"
  },
  "Digital marketing": {
    en: "Digital marketing",
    fr: "Marketing digital",
    ar: "التسويق الرقمي"
  },
  "Other diverse courses (some completed, some still in progress)": {
    en: "Other diverse courses (some completed, some still in progress)",
    fr: "Autres cours divers (certains terminés, d'autres en cours)",
    ar: "دورات متنوعة أخرى (بعضها مكتمل، وبعضها مازال قيد الإنجاز)"
  },
  "Experience": {
    en: "Experience",
    fr: "Expérience",
    ar: "الخبرة"
  },
  "Service Payment Assistant": {
    en: "Service Payment Assistant",
    fr: "Assistant de Paiement de Services",
    ar: "مساعد دفع الخدمات"
  },
  "Private Business": {
    en: "Private Business",
    fr: "Entreprise Privée",
    ar: "مؤسسة خاصة"
  },
  "2023 to 2025": {
    en: "2023 to 2025",
    fr: "2023 à 2025",
    ar: "2023 إلى 2025"
  },
  "Managed client payments": {
    en: "Managed client payments",
    fr: "Géré les paiements des clients",
    ar: "إدارة مدفوعات العملاء"
  },
  "Tracked totals, submitted reports": {
    en: "Tracked totals, submitted reports",
    fr: "Suivi des totaux, soumission de rapports",
    ar: "تتبع الإجماليات، تقديم التقارير"
  },
  "Handled cash carefully and ensured everything was well organized": {
    en: "Handled cash carefully and ensured everything was well organized",
    fr: "Géré l'argent avec soin et assuré une bonne organisation",
    ar: "التعامل مع النقدية بعناية وضمان التنظيم الجيد"
  },
  "Private Tutor": {
    en: "Private Tutor",
    fr: "Tuteur Privé",
    ar: "مدرس خاص"
  },
  "Self-Employed": {
    en: "Self-Employed",
    fr: "Indépendant",
    ar: "عمل حر"
  },
  "2022–2023": {
    en: "2022–2023",
    fr: "2022–2023",
    ar: "2022-2023"
  },
  "Taught up to 20 students from primary and middle school in core subjects": {
    en: "Taught up to 20 students from primary and middle school in core subjects",
    fr: "Enseigné jusqu'à 20 élèves du primaire et du collège dans les matières principales",
    ar: "تدريس ما يصل إلى 20 طالبًا من المرحلتين الابتدائية والإعدادية في المواد الأساسية"
  },
  "English Language Instructor": {
    en: "English Language Instructor",
    fr: "Instructeur de Langue Anglaise",
    ar: "مدرب لغة إنجليزية"
  },
  "Community Program": {
    en: "Community Program",
    fr: "Programme Communautaire",
    ar: "برنامج مجتمعي"
  },
  "2023": {
    en: "2023",
    fr: "2023",
    ar: "2023"
  },
  "Taught small groups (3–4 children) basic vocabulary and communication": {
    en: "Taught small groups (3–4 children) basic vocabulary and communication",
    fr: "Enseigné à de petits groupes (3-4 enfants) le vocabulaire de base et la communication",
    ar: "تدريس مجموعات صغيرة (3-4 أطفال) المفردات الأساسية والتواصل"
  },
  "Small Business Experience": {
    en: "Small Business Experience",
    fr: "Expérience en Petite Entreprise",
    ar: "خبرة في الأعمال الصغيرة"
  },
  "Entrepreneurial Venture": {
    en: "Entrepreneurial Venture",
    fr: "Projet Entrepreneurial",
    ar: "مشروع ريادي"
  },
  "Had a short experience in product buying/selling (small trading)": {
    en: "Had a short experience in product buying/selling (small trading)",
    fr: "Courte expérience dans l'achat/vente de produits (petit commerce)",
    ar: "كان لدي خبرة قصيرة في شراء/بيع المنتجات (تجارة صغيرة)"
  },
  "Electronics Repair Enthusiast": {
    en: "Electronics Repair Enthusiast",
    fr: "Passionné de Réparation Électronique",
    ar: "هاوي إصلاح الإلكترونيات"
  },
  "Hobbyist": {
    en: "Hobbyist",
    fr: "Hobbyiste",
    ar: "هاوٍ"
  },
  "Since childhood": {
    en: "Since childhood",
    fr: "Depuis l'enfance",
    ar: "منذ الطفولة"
  },
  "Passionate about fixing phones and electronic devices (hardware/software)": {
    en: "Passionate about fixing phones and electronic devices (hardware/software)",
    fr: "Passionné par la réparation de téléphones et d'appareils électroniques (matériel/logiciel)",
    ar: "شغوف بإصلاح الهواتف والأجهزة الإلكترونية (عتاد/برمجيات)"
  },
  "Driver's License": {
    en: "Driver's License",
    fr: "Permis de Conduire",
    ar: "رخصة القيادة"
  },
  "Category B": {
    en: "Category B",
    fr: "Catégorie B",
    ar: "فئة ب"
  },
  "Valid since 2022": {
    en: "Valid since 2022",
    fr: "Valide depuis 2022",
    ar: "صالحة منذ 2022"
  },
  "Obtained Category B Driver's License": {
    en: "Obtained Category B Driver's License",
    fr: "Obtenu le permis de conduire Catégorie B",
    ar: "حاصل على رخصة القيادة من الفئة ب"
  },
  "Skills": {
    en: "Skills",
    fr: "Compétences",
    ar: "المهارات"
  },
  "Practical Knowledge": {
    en: "Practical Knowledge",
    fr: "Connaissances Pratiques",
    ar: "المعرفة العملية"
  },
  "Responsive Web Design": {
    en: "Responsive Web Design",
    fr: "Conception Web Réactive",
    ar: "تصميم الويب المتجاوب"
  },
  "Sketchware (3 mobile apps)": {
    en: "Sketchware (3 mobile apps)",
    fr: "Sketchware (3 applications mobiles)",
    ar: "Sketchware (3 تطبيقات هاتف)"
  },
  "Beginner Level": {
    en: "Beginner Level",
    fr: "Niveau Débutant",
    ar: "مستوى مبتدئ"
  },
  "React – Practical beginner level. Used in small projects and hands-on tests": {
    en: "React – Practical beginner level. Used in small projects and hands-on tests",
    fr: "React – Niveau débutant pratique. Utilisé dans de petits projets et des tests pratiques",
    ar: "React – مستوى مبتدئ عملي. استخدم في مشاريع صغيرة واختبارات عملية"
  },
  "Digital Marketing": {
    en: "Digital Marketing",
    fr: "Marketing Digital",
    ar: "التسويق الرقمي"
  },
  "Languages": {
    en: "Languages",
    fr: "Langues",
    ar: "اللغات"
  },
  "Arabic: Native": {
    en: "Arabic: Native",
    fr: "Arabe : Langue maternelle",
    ar: "العربية: لغتي الأم"
  },
  "English: Advanced level. Able to write, speak, and understand complex content. I use English daily for learning, coding, and communication": {
    en: "English: Advanced level. Able to write, speak, and understand complex content. I use English daily for learning, coding, and communication",
    fr: "Anglais : Niveau avancé. Capable d’écrire, de parler et de comprendre du contenu complexe. J’utilise l’anglais quotidiennement pour l’apprentissage, la programmation et la communication.",
    ar: "الإنجليزية: مستوى متقدم. قادر على الكتابة والتحدث وفهم المحتوى المعقد. أستخدم الإنجليزية يوميًا للتعلم والبرمجة والتواصل"
  },
  "French: Beginner level, currently improving through focused daily learning. I aim to reach an advanced level within the next year": {
    en: "French: Beginner level, currently improving through focused daily learning. I aim to reach an advanced level within the next year",
    fr: "Français : Niveau débutant, en cours d'amélioration grâce à un apprentissage quotidien ciblé. Je vise à atteindre un niveau avancé au cours de la prochaine année",
    ar: "الفرنسية: مستوى مبتدئ، أعمل حاليًا على تحسينها من خلال التعلم اليومي المركز. أهدف للوصول إلى مستوى متقدم خلال العام القادم"
  },
  "Soft Skills": {
    en: "Soft Skills",
    fr: "Compétences Non Techniques",
    ar: "المهارات الشخصية"
  },
  "Arabic–English translation": {
    en: "Arabic–English translation",
    fr: "Traduction arabe-anglais",
    ar: "الترجمة من العربية إلى الإنجليزية"
  },
  "Teaching & explanation": {
    en: "Teaching & explanation",
    fr: "Enseignement et explication",
    ar: "التدريس والشرح"
  },
  "Basic accounting & organization": {
    en: "Basic accounting & organization",
    fr: "Comptabilité et organisation de base",
    ar: "المحاسبة الأساسية والتنظيم"
  },
  "Self-learning & problem-solving": {
    en: "Self-learning & problem-solving",
    fr: "Auto-apprentissage et résolution de problèmes",
    ar: "التعلم الذاتي وحل المشكلات"
  },
  "Applications": {
    en: "Applications",
    fr: "Applications",
    ar: "التطبيقات"
  },
  "Office & Productivity": {
    en: "Office & Productivity",
    fr: "Bureautique et Productivité",
    ar: "المكتب والإنتاجية"
  },
  "Design & Creative": {
    en: "Design & Creative",
    fr: "Design et Création",
    ar: "التصميم والإبداع"
  },
  "Development Environment": {
    en: "Development Environment",
    fr: "Environnement de Développement",
    ar: "بيئة التطوير"
  },
  "Projects": {
    en: "Projects",
    fr: "Projets",
    ar: "المشاريع"
  },
  "All": {
    en: "All",
    fr: "Tous",
    ar: "الكل"
  },
  "Completed Projects": {
    en: "Completed Projects",
    fr: "Projets Terminés",
    ar: "مشاريع مكتملة"
  },
  "Projects in Progress": {
    en: "Projects in Progress",
    fr: "Projets en Cours",
    ar: "مشاريع قيد الاشتغال عليها"
  },
  "Other": {
    en: "Other",
    fr: "Autre",
    ar: "أخرى"
  },
  "Testimonials": {
    en: "Testimonials",
    fr: "Témoignages",
    ar: "الشهادات"
  },
  "This section is empty": {
    en: "This section is empty",
    fr: "Cette section est vide",
    ar: "هذا القسم فارغ"
  },
  "Contact": {
    en: "Contact",
    fr: "Contact",
    ar: "الاتصال"
  },
  "Email": {
    en: "Email",
    fr: "E-mail",
    ar: "البريد الإلكتروني"
  },
  
  "Phone": {
    en: "Phone",
    fr: "Téléphone",
    ar: "الهاتف"
  },
  "Name": {
    en: "Name",
    fr: "Nom",
    ar: "الاسم"
  },
  "Your Name": {
    en: "Your Name",
    fr: "Votre Nom",
    ar: "اسمك"
  },
  "Message": {
    en: "Message",
    fr: "Message",
    ar: "الرسالة"
  },
  "Your Message": {
    en: "Your Message",
    fr: "Votre Message",
    ar: "رسالتك"
  },
  "Send Message": {
    en: "Send Message",
    fr: "Envoyer le Message",
    ar: "إرسال الرسالة"
  },
  "Get a Flower": {
    en: "Get a Flower",
    fr: "Obtenir une Fleur",
    ar: "احصل على زهرة"
  },
  "© 2023 Abdelwahed Abdellaoui. All rights reserved.": {
    en: "© 2023 Abdelwahed Abdellaoui. All rights reserved.",
    fr: "© 2023 Abdelwahed Abdellaoui. Tous droits réservés.",
    ar: "© 2023 عبدالواحد عبدلاوي. جميع الحقوق محفوظة."
  },
  "Sent Successfully!": {
    en: "Sent Successfully!",
    fr: "Envoyé avec succès !",
    ar: "تم الإرسال بنجاح!"
  },
  "Thank you, your message has been received and we will get back to you soon.": {
    en: "Thank you, your message has been received and we will get back to you soon.",
    fr: "Merci, votre message a bien été reçu et nous vous contacterons bientôt.",
    ar: "شكرًا لك، لقد تم استلام رسالتك وسنعاود الاتصال بك قريبًا."
  },
  "OK": {
    en: "OK",
    fr: "OK",
    ar: "موافق"
  },
  "Error!": {
    en: "Error!",
    fr: "Erreur !",
    ar: "خطأ!"
  },
  "Sorry, we could not send your message. Please try again later.": {
    en: "Sorry, we could not send your message. Please try again later.",
    fr: "Désolé، nous n'avons pas pu envoyer votre message. Veuillez réessayer plus tard.",
    ar: "عذرًا، لم نتمكن من إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقًا."
  },
  "Ambitious Web Developer | Teacher | Translator | Passionate about building innovative solutions": {
    en: "Ambitious Web Developer | Teacher | Translator | Passionate about building innovative solutions",
    fr: "Développeur Web Ambitieux | Enseignant | Traducteur | Passionné par la création de solutions innovantes",
    ar: "مطور ويب طموح | مدرس | مترجم | شغوف ببناء حلول مبتكرة"
  },
  "Developer | Teacher | Translator | Passionate about building innovative solutions": {
    en: "Developer | Teacher | Translator | Passionate about building innovative solutions",
    fr: "Développeur | Enseignant | Traducteur | Passionné par la création de solutions innovantes",
    ar: "مطور | مدرس | مترجم | شغوف ببناء حلول مبتكرة"
  },
  "Arabic:": {
    en: "Arabic:",
    fr: "Arabe :",
    ar: "العربية:"
  },
  "Practical Knowledge": {
    en: "Practical Knowledge",
    fr: "Connaissances Pratiques",
    ar: "المعرفة العملية"
  },
  "Beginner Level": {
    en: "Beginner Level",
    fr: "Niveau Débutant",
    ar: "مستوى مبتدئ"
  },
  "Languages": {
    en: "Languages",
    fr: "Langues",
    ar: "اللغات"
  },
  "Soft Skills": {
    en: "Soft Skills",
    fr: "Compétences Non Techniques",
    ar: "المهارات الشخصية"
  },
  "Office & Productivity": {
    en: "Office & Productivity",
    fr: "Bureautique et Productivité",
    ar: "المكتب والإنتاجية"
  },
  "Design & Creative": {
    en: "Design & Creative",
    fr: "Design et Création",
    ar: "التصميم والإبداع"
  },
  "Development Environment": {
    en: "Development Environment",
    fr: "Environnement de Développement",
    ar: "بيئة التطوير"
  },
  "Live Demo": {
    en: "Live Demo",
    fr: "Démo en direct",
    ar: "عرض حي"
  },
  "Source Code": {
    en: "Source Code",
    fr: "Code source",
    ar: "التعليمات البرمجية المصدرية"
  },
  "Interactive CV Website": {
    en: "Interactive CV Website",
    fr: "Site Web de CV Interactif",
    ar: "موقع سيرة ذاتية تفاعلي"
  },
  "E-commerce Store": {
    en: "E-commerce Store",
    fr: "Boutique en Ligne",
    ar: "متجر الكتروني"
  },
  "Daily Task Reminder App": {
    en: "Daily Task Reminder App",
    fr: "Application de Rappel de Tâches",
    ar: "تطبيق تذكير بالمهام اليومية"
  },
  "Auto-Skip App": {
    en: "Auto-Skip App",
    fr: "Application de Saut Automatique",
    ar: "تطبيق التخطي التلقائي"
  },
  "Coming Soon": {
    en: "Coming Soon",
    fr: "Bientôt disponible",
    ar: "قريباً"
  },
  "This feature is under development and will be available soon.": {
    en: "This feature is under development and will be available soon.",
    fr: "Cette fonctionnalité est en cours de développement et sera bientôt disponible.",
    ar: "هذه الميزة قيد التطوير وستكون متاحة قريبًا."
  }
};

function setLanguage(lang) {
  languageOptions.forEach(opt => {
    opt.classList.remove('active');
    if (opt.dataset.lang === lang) {
      opt.classList.add('active');
    }
  });
  document.querySelector('.language-text').textContent = lang.toUpperCase();
  if (downloadCVBtn && cvLinks[lang]) {
    downloadCVBtn.href = cvLinks[lang];
  }
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en], [data-fr], [data-ar]').forEach(element => {
    const key = element.dataset.en || element.dataset.fr || element.dataset.ar || element.textContent.trim();
    if (translations[key] && translations[key][lang]) {
      if (element.innerHTML.includes('<strong>') || element.innerHTML.includes('<b>')) {
        element.innerHTML = translations[key][lang];
      } else {
        element.textContent = translations[key][lang];
      }
    }
  });
  document.querySelectorAll('.translatable-text[data-key]').forEach(element => {
    const key = element.dataset.key;
    if (translations[key] && translations[key][lang]) {
      element.textContent = translations[key][lang];
    }
  });
  document.querySelectorAll('[data-en-placeholder], [data-fr-placeholder], [data-ar-placeholder]').forEach(element => {
    if (lang === 'en' && element.dataset.enPlaceholder) {
      element.placeholder = element.dataset.enPlaceholder;
    } else if (lang === 'fr' && element.dataset.frPlaceholder) {
      element.placeholder = element.dataset.frPlaceholder;
    } else if (lang === 'ar' && element.dataset.arPlaceholder) {
      element.placeholder = element.dataset.arPlaceholder;
    }
  });
  const aboutMeTitle = document.querySelector('#about h2 .translatable-text');
  if (aboutMeTitle && translations["About Me"] && translations["About Me"][lang]) {
    aboutMeTitle.textContent = translations["About Me"][lang];
  }
  localStorage.setItem('selectedLanguage', lang);
  renderProjects(document.querySelector('.filter-btn.active').dataset.filter);
}
const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
languageToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  languageDropdown.classList.toggle('show');
});
document.addEventListener('click', () => {
  languageDropdown.classList.remove('show');
});
languageOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = option.dataset.lang;
    setLanguage(lang);
    languageDropdown.classList.remove('show');
  });
});
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});
sections.forEach(section => {
  observer.observe(section);
});
const contactForm = document.getElementById('contactForm');
const customAlertOverlay = document.getElementById('customAlertOverlay');
const customAlertTitle = document.getElementById('customAlertTitle');
const customAlertMessage = document.getElementById('customAlertMessage');
const customAlertClose = document.getElementById('customAlertClose');
const sendButton = contactForm.querySelector('button[type="submit"]');

(function() {
  emailjs.init({
    publicKey: "uOJbd3J6lW0fD1x-i",
  });
})();

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const serviceID = 'abdellwahed-alo';
  const templateID = 'template_gl5tj2l';

  const originalButtonText = sendButton.innerHTML;
  const currentLang = localStorage.getItem('selectedLanguage') || 'en';
  let sendingText = "Sending...";
  if (currentLang === 'fr') sendingText = "Envoi en cours...";
  if (currentLang === 'ar') sendingText = "جارٍ الإرسال...";
  sendButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${sendingText}`;
  sendButton.disabled = true;

  emailjs.sendForm(serviceID, templateID, this).then((response) => {
    sendButton.innerHTML = originalButtonText;
    sendButton.disabled = false;
    customAlertTitle.textContent = translations["Sent Successfully!"][currentLang];
    customAlertMessage.textContent = translations["Thank you, your message has been received and we will get back to you soon."][currentLang];
    customAlertOverlay.classList.add('visible');
    contactForm.reset();
  }, (err) => {
    sendButton.innerHTML = originalButtonText;
    sendButton.disabled = false;
    customAlertTitle.textContent = translations["Error!"][currentLang];
    customAlertMessage.textContent = translations["Sorry, we could not send your message. Please try again later."][currentLang];
    customAlertOverlay.classList.add('visible');
  });
});

customAlertClose.addEventListener('click', () => {
  customAlertOverlay.classList.remove('visible');
});
customAlertOverlay.addEventListener('click', (e) => {
  if (e.target === customAlertOverlay) {
    customAlertOverlay.classList.remove('visible');
  }
});
const hamburger = document.getElementById('hamburger');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavCloseBtn = document.getElementById('mobileNavCloseBtn');

function openMobileMenu() {
  hamburger.classList.add('active');
  mobileNavOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  hamburger.classList.remove('active');
  mobileNavOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', () => {
  if (mobileNavOverlay.classList.contains('active')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});
if (mobileNavCloseBtn) {
  mobileNavCloseBtn.addEventListener('click', closeMobileMenu);
}
mobileNavOverlay.addEventListener('click', (e) => {
  if (e.target === mobileNavOverlay) {
    closeMobileMenu();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
    closeMobileMenu();
  }
});

const projectsData = [{
  id: "interactive-cv",
  title: "Interactive CV Website",
  category: "completed",
  image: "picture/project2.webp",
  image_alt: "Screenshot of Interactive CV Website",
  description: {
    en: "Interactive and Responsive CV Website: This project is the result of my design and functional vision, developed in collaboration with AI tools that helped implement and improve the technical aspects. The site is built using HTML for content organization, CSS for a responsive and beautiful design, and JavaScript to add dynamic interactions like dark/light mode switching and scroll effects. My goal was to achieve a balance between aesthetics and high performance, and I succeeded in building a professional platform that highlights my frontend capabilities and my ability to direct advanced technologies.",
    fr: "Site CV Interactif et Réactif : Ce projet est le fruit de ma vision conceptuelle et fonctionnelle, développé en collaboration avec des outils d'IA qui ont aidé à mettre en œuvre et à améliorer les aspects techniques. Le site est construit en HTML pour l'organisation du contenu, en CSS pour un design réactif et esthétique, et en JavaScript pour ajouter des interactions dynamiques telles que le changement de mode sombre/clair et les effets de défilement. Mon objectif était d'atteindre un équilibre entre l'esthétique et la haute performance, et j'ai réussi à construire une plateforme professionnelle qui met en valeur mes compétences en développement frontend et ma capacité à diriger des technologies avancées.",
    ar: "موقع سيرة ذاتية تفاعلي ومتجاوب: هذا المشروع هو نتاج رؤيتي وأفكاري التصميمية والوظيفية، حيث قمت بتطويره بالتعاون مع أدوات الذكاء الاصطناعي التي ساعدت في تطبيق وتحسين الجوانب التقنية. الموقع مبني باستخدام HTML لتنظيم المحتوى، CSS لتصميم متجاوب وجميل، وجافا سكريبت لإضافة تفاعلات ديناميكية مثل تبديل الوضع الداكن/الفاتح وتأثيرات التمرير. هدفي كان تحقيق توازن بين الجمالية والأداء العالي، وقد نجحت في بناء منصة احترافية تبرز قدراتي في الواجهة الأمامية وفي توجيه التقنيات المتقدمة."
  },
  tags: ["HTML", "CSS", "JavaScript", "Ai ools"],
  demo: "https://abdelwahed-alw.github.io/abdellwahedabdellaoui/",
  code: "https://github.com/abdelwahed-alw/abdellwahedabdellaoui"
}, {
  id: "ecommerce-store",
  title: "E-commerce Store",
  category: "completed",
  image: "picture/project1.webp",
  image_alt: "Screenshot of E-commerce Store UI",
  description: {
    en: "Traditional Sales Platform with a Modern Twist: This project embodies my vision of integrating Moroccan heritage with modern web technologies. I designed and developed the site using HTML for structured content, CSS for an attractive and responsive interface, and JavaScript to enable interactive features like a shopping cart, dark mode, and full responsiveness across devices. The project reflects my ability to build a seamless and clear user experience, and I also utilized some AI tools to improve performance and browsing experience. Through Zayna Marketplace, I aimed to present a model for an e-commerce site that respects local character and is built on modern web design and development concepts.",
    fr: "Plateforme de Vente Traditionnelle avec une Touche Moderne : Ce projet incarne ma vision d'intégrer le patrimoine marocain aux technologies web modernes. J'ai conçu et développé le site en utilisant HTML pour un contenu structuré, CSS pour une interface attrayante et réactive, et JavaScript pour activer des fonctionnalités interactives comme le panier d'achat, le mode sombre et une réactivité complète sur tous les appareils. Le projet reflète ma capacité à créer une expérience utilisateur fluide et claire, et j'ai également utilisé des outils d'IA pour améliorer les performances et l'expérience de navigation. À travers Zayna Marketplace, j'ai cherché à présenter un modèle de site e-commerce qui respecte le caractère local et repose sur des concepts modernes de conception et de développement web.",
    ar: "منصة بيع تقليدية بلمسة عصرية: هذا المشروع يُجسد رؤيتي في دمج التراث المغربي مع تقنيات الويب الحديثة. قمت بتصميم وتطوير الموقع باستخدام HTML لتقسيم المحتوى بشكل منظم، وCSS لإنشاء واجهة جذابة ومتجاوبة، بالإضافة إلى JavaScript لتفعيل ميزات تفاعلية مثل عربة التسوق، الوضع الداكن، والتجاوب الكامل مع مختلف الأجهزة. المشروع يعكس قدرتي على بناء تجربة مستخدم سلسة وواضحة، كما استعنت ببعض أدوات الذكاء الاصطناعي لتحسين الأداء وتجربة التصفح. من خلال Zayna Marketplace, سعيت إلى تقديم نموذج لموقع تجارة إلكترونية يحترم الطابع المحلي ويعتمد في بنيته على مفاهيم حديثة في تصميم وتطوير الويب."
  },
  tags: ["Html", "Css", "JavaScript", "Ai Tools"],
  demo: "https://abdelwahed-alw.github.io/zayna/#",
  code: "https://github.com/abdelwahed-alw/zayna"
}, {
  id: "task-reminder-app",
  title: "Daily Task Reminder App",
  category: "in-progress",
  image: "picture/project3.webp",
  image_alt: "Screenshot of Task Reminder App",
  description: {
    en: "Auto Reminder Project (In Progress) – An Innovative Visual Alerts App: This project represents a new idea I am developing as a dedicated smartphone app. The app is based on the principle of gentle reminders through a virtual cat or pet that moves across the screen at specific times, alerting the user in a visual and friendly way instead of traditional notifications. My goal is to improve the daily reminder experience, especially for simple tasks, using interactive animations with a user-friendly interface. The project is currently in the initial design and research phase, and I plan to use technologies like Flutter or React Native for the final version, along with AI tools to customize content and interactive behavior. This project shows my inclination towards building apps that combine fun with practical functionality.",
    fr: "Projet de Rappel Automatique (En Cours) – Une Application d'Alertes Visuelles Innovante : Ce projet représente une nouvelle idée que je développe en tant qu'application dédiée pour smartphone. L'application repose sur le principe de rappels doux via un chat ou un animal de compagnie virtuel qui se déplace sur l'écran à des moments précis, alertant l'utilisateur de manière visuelle et amicale au lieu des notifications traditionnelles. Mon objectif est d'améliorer l'expérience de rappel quotidien, en particulier pour les tâches simples, en utilisant des animations interactives avec une interface conviviale. Le projet est actuellement en phase de conception initiale et de recherche, et je prévois d'utiliser des technologies comme Flutter ou React Native pour la version finale, ainsi que des outils d'IA pour personnaliser le contenu et le comportement interactif. Ce projet montre mon penchant pour la création d'applications qui allient plaisir et fonctionnalité pratique.",
    ar: "مشروع التذكير التلقائي (قيد التنفيذ) – تطبيق تنبيهات مرئية مبتكر: هذا المشروع يُمثل فكرة جديدة أعمل на تطويرها كتطبيق مخصص للهواتف الذكية. يقوم التطبيق على مبدأ التذكير اللطيف من خلال ظهور قطة أو حيوان أليف افتراضي يتحرك على الشاشة في أوقات محددة، لتنبيه المستخدم بطريقة مرئية وودية بدلاً من الإشعارات التقليدية. أهدف من خلاله إلى تحسين تجربة التذكير اليومي خاصة في المهام البسيطة، باستخدام رسوم متحركة تفاعلية مع واجهة سهلة الاستخدام. المشروع حاليًا في مرحلة التصميم الأولي والبحث، وأخطط لاستخدام تقنيات مثل Flutter أو React Native في النسخة النهائية، إلى جانب أدوات الذكاء الاصطناعي لتخصيص المحتوى والسلوك التفاعلي. هذا المشروع يُظهر توجهي نحو بناء تطبيقات تجمع بين الطرافة والوظيفة العملية."
  },
  tags: ["..."],
  demo: "#",
  code: "#"
}, {
  id: "auto-skip-app",
  title: "Auto-Skip App",
  category: "in-progress",
  image: "picture/project3.webp",
  image_alt: "Screenshot of Auto-Skip App",
  description: {
    en: "Auto Skip (In Progress) – A Smart App to Automatically Skip Sections on PC and Phone: Auto Skip is a multi-platform project I am developing to improve the experience of watching videos or listening to podcasts on both smartphones and computers. The app analyzes content to automatically skip unwanted sections, such as ads, long intros, or repetitive breaks, saving the user's time and increasing their focus on the main content. I am currently studying the possible technical aspects for its implementation using technologies like Python for the desktop application, and Flutter or React Native for the mobile app, with the potential to integrate AI tools to improve detection accuracy. The project aims to provide a smart, simple, and convenient user experience.",
    fr: "Auto Skip (En Cours) – Une Application Intelligente pour Sauter Automatiquement des Sections sur PC et Téléphone : Auto Skip est un projet multiplateforme que je développe pour améliorer l'expérience de visionnage de vidéos ou d'écoute de podcasts sur les smartphones et les ordinateurs. L'application analyse le contenu pour sauter automatiquement les sections indésirables, telles que les publicités, les longues intros ou les pauses répétitives, ce qui fait gagner du temps à l'utilisateur et augmente sa concentration sur le contenu principal. J'étudie actuellement les aspects techniques possibles pour sa mise en œuvre en utilisant des technologies comme Python pour l'application de bureau, et Flutter ou React Native pour l'application mobile, avec la possibilité d'intégrer des outils d'IA pour améliorer la précision de la détection. Le projet vise à offrir une expérience utilisateur intelligente, simple et pratique.",
    ar: "Auto Skip (قيد التنفيذ) – تطبيق ذكي لتخطي المقاطع تلقائيًا على الحاسوب والهاتف: Auto Skip هو مشروع متعدد المنصات أعمل على تطويره لتحسين تجربة مشاهدة الفيديوهات أو الاستماع إلى البودكاست على كل من الهواتف الذكية وأجهزة الحاسوب. يقوم التطبيق بتحليل المحتوى لتخطي المقاطع غير المرغوب فيها تلقائيًا، مثل الإعلانات، المقدمات الطويلة، أو الفواصل التكرارية، مما يوفر وقت المستخدم ويزيد من تركيزه على المحتوى الأساسي. أعمل حاليًا على دراسة الجوانب التقنية الممكنة لتنفيذه باستخدام تقنيات مثل Python لتطبيق سطح المكتب، وFlutter أو React Native لتطبيق الهاتف، مع إمكانية دمج أدوات ذكاء اصطناعي لتحسين دقة الاكتشاف. يهدف المشروع إلى تقديم تجربة استخدام ذكية، بسيطة، ومريحة."
  },
  tags: ["..."],
  demo: "#",
  code: "#"
}];

function renderProjects(filter = 'all') {
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.innerHTML = '';
  const projectFilters = document.querySelector('.project-filters');
  if (projectFilters) {
    projectFilters.style.display = 'flex';
  }
  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(project => project.category === filter || (filter === 'other' && !['completed', 'in-progress'].includes(project.category)));
  filteredProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.id = `project-${project.id}`;
    projectCard.dataset.category = project.category;
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    const translatedTitle = translations[project.title]?.[currentLang] || project.title;
    const translatedDescription = project.description[currentLang] || project.description['en'];
    const linksHTML = project.category === 'in-progress' ? `
            <a href="#" class="btn btn-outline project-link-btn" data-coming-soon="true" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                <i class="fas fa-external-link-alt"></i> <p>${translations["Live Demo"][currentLang]}</p>
            </a>
            <a href="#" class="btn btn-outline project-link-btn" data-coming-soon="true" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                <i class="fab fa-github"></i> <p>${translations["Source Code"][currentLang]}</p>
            </a>
        ` : `
            <a href="${project.demo}" target="_blank" class="btn btn-outline project-link-btn" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                <i class="fas fa-external-link-alt"></i> <p>${translations["Live Demo"][currentLang]}</p>
            </a>
            <a href="${project.code}" target="_blank" class="btn btn-outline project-link-btn" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                <i class="fab fa-github"></i> <p>${translations["Source Code"][currentLang]}</p>
            </a>
        `;
    projectCard.innerHTML = `
          <div class="project-image">
            <img src="${project.image}" alt="${project.image_alt}" loading="lazy">
          </div>
          <div class="project-content">
            <h3 class="project-title">${translatedTitle}</h3>
            <p class="project-description">${translatedDescription}</p>
            <div class="project-tech">
              ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
              ${linksHTML}
            </div>
          </div>
        `;
    projectsGrid.appendChild(projectCard);
  });
  document.querySelectorAll('.project-link-btn[data-coming-soon="true"]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const currentLang = localStorage.getItem('selectedLanguage') || 'en';
      customAlertTitle.textContent = translations["Coming Soon"][currentLang];
      customAlertMessage.textContent = translations["This feature is under development and will be available soon."][currentLang];
      customAlertOverlay.classList.add('visible');
    });
  });
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
}
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

function loadFonts() {
  const fontUrls = [{
    name: 'Tajawal',
    url: 'https://fonts.gstatic.com/s/tajawal/v9/Iurf6YBj_oCad4k1l_6gLrZjiY.woff2'
  }, {
    name: 'Courier Prime',
    url: 'https://fonts.gstatic.com/s/courierprime/v1/HI_KiYtLzOqQo7jCg5cxHvKqg_M.woff2'
  }, {
    name: 'Poppins',
    url: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8PHlEeNjjjFcZfS.woff2'
  }];
  fontUrls.forEach(fontFamily => {
    if (typeof FontFace !== 'undefined') {
      const font = new FontFace(fontFamily.name, `url(${fontFamily.url})`);
      font.load().then(() => {
        document.fonts.add(font);
        if (fontFamily.name === 'Tajawal') {
          document.body.style.fontFamily = "'Tajawal', sans-serif";
        }
      }).catch(error => console.error(`Error loading ${fontFamily.name} font:`, error));
    } else {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.name.replace(' ', '+')}:wght@400;500;700&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  });
}

function lazyLoad() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '200px'
  });
  lazyImages.forEach(img => observer.observe(img));
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav-item');
let lastScrollPosition = window.scrollY;
let ticking = false;
let isScrollingDown = false;

function updateNavVisibility() {
  const currentScrollPosition = window.scrollY;
  isScrollingDown = currentScrollPosition > lastScrollPosition;
  if (isScrollingDown && currentScrollPosition > 100) {
    nav.classList.add('hidden');
  } else {
    nav.classList.remove('hidden');
  }
  lastScrollPosition = currentScrollPosition;
}

function updateActiveSection() {
  const sections = document.querySelectorAll('section');
  let currentSection = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.getAttribute('id');
    }
  });
  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const target = link.getAttribute('href').substring(1);
    if (target === currentSection) {
      item.classList.add('active');
      link.classList.add('active');
      if (isScrollingDown) {
        item.style.animation = 'navItemSlide 0.5s ease forwards';
      }
    } else {
      item.classList.remove('active');
      link.classList.remove('active');
      item.style.animation = '';
    }
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    const target = link.getAttribute('href').substring(1);
    if (target === currentSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateNavVisibility();
      updateActiveSection();
      ticking = false;
    });
    ticking = true;
  }
});
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active');
        item.closest('.nav-item').classList.remove('active');
      });
      document.querySelectorAll('.mobile-nav-link').forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
      if (this.classList.contains('nav-link')) {
        this.closest('.nav-item').classList.add('active');
      }
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
      if (mobileNavOverlay.classList.contains('active')) {
        closeMobileMenu();
      }
    }
  });
});
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const icon = link.querySelector('i');
    if (icon) {
      icon.style.transform = 'scale(1.2)';
    }
  });
  link.addEventListener('mouseleave', () => {
    const icon = link.querySelector('i');
    if (icon) {
      icon.style.transform = 'scale(1)';
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const getFlowerBtn = document.getElementById('getFlowerBtn');
  if (getFlowerBtn) {
    getFlowerBtn.addEventListener('click', () => {
      const roseContainer = document.createElement('div');
      roseContainer.id = 'rose-animation-container';
      roseContainer.style.position = 'fixed';
      roseContainer.style.top = '0';
      roseContainer.style.left = '0';
      roseContainer.style.width = '100%';
      roseContainer.style.height = '100%';
      roseContainer.style.backgroundColor = 'rgba(15, 23, 42, 0.5)';
      roseContainer.style.display = 'flex';
      roseContainer.style.flexDirection = 'column';
      roseContainer.style.justifyContent = 'center';
      roseContainer.style.alignItems = 'center';
      roseContainer.style.zIndex = '9999';
      roseContainer.style.backdropFilter = 'blur(2px)';
      roseContainer.innerHTML = `
            <button class="rose-close-btn" id="roseCloseBtn" aria-label="Close rose animation">
              <i class="fas fa-times"></i> Close
            </button>
            <div class="magic-rose-container show" id="roseContainerInner">
              <div class="rose-aura"></div>
              <div class="rose-wrapper">
                <div class="container show" id="rose">
                  <div class="rose-leaves">
                    <div>
                      <div class="thorn"></div>
                      <div class="thorn"></div>
                      <div class="thorn"></div>
                    </div>
                    <div></div>
                  </div>
                  <div class="rose-petals">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="sparkles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          `;
      document.body.appendChild(roseContainer);
      document.body.style.overflow = 'hidden';
      const roseCloseBtn = roseContainer.querySelector('#roseCloseBtn');
      roseCloseBtn.addEventListener('click', () => {
        document.body.removeChild(roseContainer);
        document.body.style.overflow = 'auto';
      });

      function createMagicEffects() {
        createFloatingPetals();
        createMagicDust();
        createLightBeams();
      }

      function createFloatingPetals() {
        const colors = ['var(--color-primary-highlight)', '#7dd3fc', '#1e88e5', '#1565c0', '#2196f3'];
        for (let i = 0; i < 15; i++) {
          const petal = document.createElement('div');
          petal.className = 'floating-petal';
          petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          petal.style.width = Math.random() * 20 + 15 + 'px';
          petal.style.height = Math.random() * 15 + 10 + 'px';
          petal.style.left = Math.random() * 100 + 'vw';
          petal.style.top = Math.random() * 100 + 'vh';
          roseContainer.appendChild(petal);
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          const xMovement = (Math.random() - 0.5) * 200;
          const yMovement = Math.random() * 100 + 50;
          petal.style.animation = `
                floatUp ${duration}s ease-in-out ${delay}s infinite,
                fadeInOut ${duration}s ease-in-out ${delay}s infinite
              `;
          petal.style.setProperty('--x-movement', xMovement + 'px');
          petal.style.setProperty('--y-movement', -yMovement + 'px');
          const keyframes = `
                @keyframes floatUp {
                  0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0;
                  }
                  20% {
                    opacity: 0.8;
                  }
                  100% {
                    transform: translate(var(--x-movement), var(--y-movement)) rotate(360deg);
                    opacity: 0;
                  }
                }
                @keyframes fadeInOut {
                  0%, 100% { opacity: 0; }
                  20%, 80% { opacity: 0.8; }
                }
              `;
          const styleElement = document.createElement('style');
          styleElement.innerHTML = keyframes;
          document.head.appendChild(styleElement);
        }
      }

      function createMagicDust() {
        const container = roseContainer.querySelector('#roseContainerInner');
        for (let i = 0; i < 50; i++) {
          const dust = document.createElement('div');
          dust.className = 'magic-dust';
          dust.style.width = Math.random() * 4 + 2 + 'px';
          dust.style.height = dust.style.width;
          dust.style.left = Math.random() * 100 + 'vw';
          dust.style.top = Math.random() * 100 + 'vh';
          container.appendChild(dust);
          const duration = Math.random() * 5 + 5;
          const delay = Math.random() * 3;
          const x = (Math.random() - 0.5) * 300;
          const y = (Math.random() - 0.5) * 300;
          dust.style.animation = `
                magicFloat ${duration}s ease-in-out ${delay}s infinite,
                magicFade ${duration}s ease-in-out ${delay}s infinite
              `;
          dust.style.setProperty('--tx', x + 'px');
          dust.style.setProperty('--ty', y + 'px');
          const keyframes = `
                @keyframes magicFloat {
                  0% {
                    transform: translate(0, 0);
                  }
                  100% {
                    transform: translate(var(--tx), var(--ty));
                  }
                }
                @keyframes magicFade {
                  0%, 100% { opacity: 0; }
                  50% { opacity: 0.8; }
                }
              `;
          const styleElement = document.createElement('style');
          styleElement.innerHTML = keyframes;
          document.head.appendChild(styleElement);
        }
      }

      function createLightBeams() {
        const container = roseContainer.querySelector('#roseContainerInner');
        const angles = [0, 45, 90, 135, 180, 225, 270, 315];
        angles.forEach(angle => {
          const beam = document.createElement('div');
          beam.className = 'light-beam';
          beam.style.transform = `rotate(${angle}deg)`;
          beam.style.left = '50%';
          beam.style.bottom = '50%';
          container.appendChild(beam);
          const duration = 3;
          const delay = Math.random() * 2;
          beam.style.animation = `beamGrow ${duration}s ease-out ${delay}s infinite`;
          const keyframes = `
                @keyframes beamGrow {
                  0% {
                    height: 0;
                    opacity: 0;
                  }
                  20% {
                    opacity: 0.6;
                  }
                  80% {
                    height: 300px;
                    opacity: 0.6;
                  }
                  100% {
                    height: 300px;
                    opacity: 0;
                  }
                }
              `;
          const styleElement = document.createElement('style');
          styleElement.innerHTML = keyframes;
          document.head.appendChild(styleElement);
        });
      }
      createMagicEffects();
    });
    getFlowerBtn.addEventListener('mouseenter', () => {
      const icon = getFlowerBtn.querySelector('i');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
      }
    });
    getFlowerBtn.addEventListener('mouseleave', () => {
      const icon = getFlowerBtn.querySelector('i');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const introOverlay = document.getElementById('introOverlay');
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.querySelector('.progress-text');
  const particlesContainer = document.querySelector('.particles-container');
  const mainContent = document.getElementById('main-content');
  const footer = document.querySelector('footer');
  document.body.style.overflow = 'hidden';
  loadFonts();
  setLanguage(savedLanguage);
  const loadingMessages = ["Loading Portfolio...", "Initializing creative assets...", "Preparing digital experience...", "Compiling components...", "Rendering visual effects...", "Almost there..."];

  function createParticles() {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 8 + 2;
      const posX = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 15 + 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particlesContainer.appendChild(particle);
    }
  }

  function removeFloatingElements() {
    const floatingElementsContainer = document.querySelector('.floating-elements');
    if (floatingElementsContainer) {
      floatingElementsContainer.remove();
    }
  }

  function startLoading() {
    let progress = 0;
    let messageIndex = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 4 + 1;
      if (progress >= 100) {
        progress = 100;
        progressText.textContent = "Ready!";
        clearInterval(interval);
        progressText.style.animation = "flicker 1s infinite";
        setTimeout(() => {
          introOverlay.classList.add('hidden');
          introOverlay.addEventListener('transitionend', function handler() {
            introOverlay.removeEventListener('transitionend', handler);
            introOverlay.remove();
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto';
            mainContent.offsetHeight;
            mainContent.style.opacity = '1';
            if (footer) {
              footer.style.display = 'block';
              setTimeout(() => {
                footer.style.opacity = '1';
              }, 50);
            }
            window.scrollTo(0, 0);
            if (!window.location.hash) {
              const aboutLink = document.querySelector('.nav-link[href="#about"]');
              if (aboutLink) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.nav-item').forEach(li => li.classList.remove('active'));
                aboutLink.classList.add('active');
                aboutLink.closest('.nav-item').classList.add('active');
              }
              const aboutMobileLink = document.querySelector('.mobile-nav-link[href="#about"]');
              if (aboutMobileLink) {
                document.querySelectorAll('.mobile-nav-link').forEach(l => l.classList.remove('active'));
                aboutMobileLink.classList.add('active');
              }
            } else {
              const currentHash = window.location.hash;
              const correspondingNavLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
              if (correspondingNavLink) {
                correspondingNavLink.classList.add('active');
                correspondingNavLink.closest('.nav-item').classList.add('active');
              }
              const correspondingMobileNavLink = document.querySelector(`.mobile-nav-link[href="${currentHash}"]`);
              if (correspondingMobileNavLink) {
                correspondingMobileNavLink.classList.add('active');
              }
              const targetElement = document.querySelector(currentHash);
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }
            window.dispatchEvent(new Event('scroll'));
          }, {
            once: true
          });
        }, 800);
      }
      progressBar.style.width = `${progress}%`;
      if (progress % 20 < 2 && progress < 95) {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        progressText.textContent = loadingMessages[messageIndex];
      }
    }, 100);
  }

  function initIntro() {
    createParticles();
    removeFloatingElements();
    setTimeout(startLoading, 2000);
    setTimeout(() => {
      const letters = document.querySelectorAll('.letter');
      letters.forEach((letter) => {
        letter.addEventListener('mouseover', () => {
          letter.style.transform = 'translateY(-10px)';
          letter.style.textShadow = `0 0 20px ${letter.style.color}`;
        });
        letter.addEventListener('mouseout', () => {
          letter.style.transform = 'translateY(0)';
          letter.style.textShadow = '0 0 15px rgba(56, 189, 248, 0.5)';
        });
      });
    }, 2500);
  }
  initIntro();
});
