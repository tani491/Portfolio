// ========================================
// CONFIGURATION
// ========================================

const WHATSAPP_NUMBER = '221773615944';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// ========================================
// BASE DE CONNAISSANCES DU CHATBOT
// ========================================

const chatbotKnowledge = {
    // ========================================
    // SALUTATIONS
    // ========================================
    greetings: {
        patterns: ['salut', 'bonjour', 'hello', 'hey', 'coucou', 'hi', 'bonsoir', 'bonjours', 'slt'],
        responses: [
            "Bonjour ! 👋 Bienvenue ! Je suis l'assistante virtuelle. Comment puis-je vous aider aujourd'hui ?",
            "Salut ! 🌟 Ravie de vous accueillir ! Que puis-je faire pour vous ?",
            "Hello ! 👋 Super de vous voir ! Vous avez un projet en tête ?",
            "Bonjour et bienvenue ! 🎉 Je suis là pour répondre à toutes vos questions !"
        ]
    },
    
    // ========================================
    // SITES WEB - DÉTAILS PAR TYPE
    // ========================================
    siteTypes: {
        // Site E-commerce
        ecommerce: {
            patterns: ['e-commerce', 'ecommerce', 'boutique en ligne', 'site vente', 'site marchand', 'shop en ligne', 'site e-commerce', 'site ecommerce', 'je veut un site e-commerce', 'je veux un site e-commerce', 'site de vente'],
            response: `🛒 **Site E-commerce - Boutique en Ligne**

**Ce qui est inclus :**
✅ Design moderne et responsive
✅ Catalogue produits illimité
✅ Panier et checkout sécurisé
✅ Intégration paiement (Wave, Orange Money, cartes)
✅ Gestion des commandes et stocks
✅ Compte client personnalisé
✅ Notifications automatiques
✅ Tableau de bord administrateur

**Délai de livraison :** 2 à 4 semaines
**Accompagnement :** Formation incluse

💡 *Parfait pour vendre vos produits en ligne 24h/24 !*

📱 **Pour un devis personnalisé, contactez-nous :**
👉 WhatsApp : **77 361 59 44**`
        },
        
        // Site Vitrine
        vitrine: {
            patterns: ['vitrine', 'site vitrine', 'site professionnel', 'site pour entreprise', 'site présentation', 'je veut un site vitrine', 'je veux un site vitrine', 'site pour mon entreprise'],
            response: `🌐 **Site Vitrine - Présence Professionnelle**

**Ce qui est inclus :**
✅ Design élégant et moderne
✅ Pages : Accueil, À propos, Services, Contact
✅ Formulaire de contact
✅ Intégration réseaux sociaux
✅ Optimisation SEO
✅ Design 100% responsive (mobile-friendly)
✅ Vitesse de chargement optimisée
✅ Certificat SSL sécurisé

**Délai de livraison :** 1 à 2 semaines
**Accompagnement :** Support après livraison

💡 *Idéal pour présenter votre entreprise et attirer de nouveaux clients !*

📱 **Pour un devis personnalisé, contactez-nous :**
👉 WhatsApp : **77 361 59 44**`
        },
        
        // Landing Page
        landing: {
            patterns: ['landing page', 'landing', 'page de vente', 'page d\'atterrissage', 'one page', 'site one page'],
            response: `🚀 **Landing Page - Page de Conversion**

**Ce qui est inclus :**
✅ Design haute conversion
✅ Structure persuasive (AIDA)
✅ Formulaire de capture
✅ Call-to-action optimisés
✅ Animations engageantes
✅ Intégration avec vos outils
✅ A/B testing possible
✅ Analytics intégré

**Délai de livraison :** 3 à 7 jours
**Accompagnement :** Conseils marketing inclus

💡 *Parfait pour vos campagnes publicitaires et lancements !*

📱 **Pour un devis personnalisé, contactez-nous :**
👉 WhatsApp : **77 361 59 44**`
        },
        
        // Site avec Dashboard / Statistiques
        dashboard: {
            patterns: ['dashboard', 'tableau de bord', 'statistique', 'stats', 'site avec stats', 'site avec statistiques', 'site administratif', 'backoffice'],
            response: `📊 **Dashboard & Statistiques**

**Ce qui est inclus :**
✅ Interface d'administration
✅ Graphiques et visualisations
✅ Gestion des utilisateurs
✅ Rapports personnalisés
✅ Export de données (PDF, Excel)
✅ Alertes et notifications
✅ Multi-niveaux d'accès
✅ Données en temps réel

**Délai de livraison :** 2 à 4 semaines
**Accompagnement :** Formation complète incluse

💡 *Idéal pour piloter votre activité avec des données !*

📱 **Pour un devis personnalisé, contactez-nous :**
👉 WhatsApp : **77 361 59 44**`
        },
        
        // Application Web
        application: {
            patterns: ['application web', 'web app', 'plateforme', 'portail', 'système en ligne', 'logiciel en ligne'],
            response: `💻 **Application Web Sur Mesure**

**Ce qui est inclus :**
✅ Analyse de vos besoins
✅ Design UX/UI personnalisé
✅ Développement full-stack
✅ Base de données sécurisée
✅ Authentification utilisateurs
✅ API et intégrations
✅ Tests et débogage
✅ Maintenance et support

**Délai de livraison :** Selon la complexité (4 à 12 semaines)
**Accompagnement :** Suivi projet complet

💡 *Une solution adaptée à vos processus métier !*

📱 **Pour discuter de votre projet, contactez-nous :**
👉 WhatsApp : **77 361 59 44**`
        },
        
        // Site Immobilier
        immobilier: {
            patterns: ['immobilier', 'site immobilier', 'agence immobilière', 'site location', 'site vente immobilière'],
            response: `🏠 **Site Immobilier**

**Ce qui est inclus :**
✅ Catalogue de biens
✅ Recherche avancée (filtres)
✅ Galeries photos/vidéos
✅ Formulaire de contact
✅ Gestion des agents
✅ Carte interactive
✅ Alertes nouveautés
✅ Espace membre

**Délai de livraison :** 2 à 3 semaines

💡 *Présentez vos biens de manière professionnelle !*

📱 **Pour un devis, contactez-nous :**
👉 WhatsApp : **77 361 59 44**`
        },
        
        // Site Restaurant
        restaurant: {
            patterns: ['restaurant', 'site restaurant', 'menu en ligne', 'site café', 'site bar'],
            response: `🍽️ **Site Restaurant**

**Ce qui est inclus :**
✅ Menu digital interactif
✅ Système de réservation
✅ Commande en ligne
✅ Galerie photos appétissante
✅ Localisation Google Maps
✅ Avis clients
✅ Horaires d'ouverture
✅ Intégration réseaux sociaux

**Délai de livraison :** 1 à 2 semaines

💡 *Attirez plus de clients avec votre menu en ligne !*

📱 **Pour un devis, contactez-nous :**
👉 WhatsApp : **77 361 59 44**`
        }
    },
    
    // ========================================
    // AUTRES SERVICES
    // ========================================
    services: {
        // UX/UI Design
        design: {
            patterns: ['design', 'ux', 'ui', 'maquette', 'figma', 'interface', 'designer', 'ux/ui'],
            response: `🎨 **Service UX/UI Design**

**Ce qui est inclus :**
✅ Recherche utilisateur
✅ Wireframes et prototypes
✅ Maquettes Figma haute fidélité
✅ Design System complet
✅ Tests d'utilisabilité
✅ Animations et micro-interactions
✅ Guide de style
✅ Fichiers sources livrés

**Délai :** 1 à 3 semaines selon le projet

💡 *Un bon design augmente vos conversions !*

📱 **Pour discuter de votre projet design :**
👉 WhatsApp : **77 361 59 44**`
        },
        
        // Community Management
        community: {
            patterns: ['community', 'réseaux sociaux', 'social media', 'facebook', 'instagram', 'gestion page'],
            response: `📱 **Community Management**

**Offres disponibles :**
✅ Création de contenu
✅ Planification des posts
✅ Gestion des commentaires
✅ Réponse aux messages
✅ Stories et Reels
✅ Rapports mensuels
✅ Stratégie de croissance
✅ Publicités (option)

**À partir de 50 000 FCFA/mois**

💡 *Développez votre communauté et engagement !*

📱 **Pour en savoir plus :**
👉 WhatsApp : **77 361 59 44**`
        },
        
        // Automatisation IA
        ia: {
            patterns: ['ia', 'chatbot', 'intelligence artificielle', 'automatisation', 'bot', 'robot', 'assistant virtuel'],
            response: `🤖 **Automatisation IA - Chatbots**

**Solutions disponibles :**
✅ Chatbots WhatsApp
✅ Chatbots site web
✅ Réceptionniste virtuel
✅ Support client 24/7
✅ Qualification de leads
✅ Prise de rendez-vous
✅ Réponses automatiques
✅ Intégration CRM

**Avantages :**
- Disponible 24h/24
- Réponses instantanées
- Économie de temps
- Satisfaction client accrue

💡 *Automatisez votre service client !*

📱 **Pour une démo, contactez-nous :**
👉 WhatsApp : **77 361 59 44**`
        }
    },
    
    // ========================================
    // LOCALISATION
    // ========================================
    location: {
        patterns: ['localisation', 'où', 'adresse', 'situe', 'situé', 'dakar', 'agence', 'bureau', 'ou se trouve', 'où se trouve', 'localiser'],
        response: `📍 **Notre Localisation**

Nous sommes situés à :
🏢 **Rue Marsat, Dakar Plateau**
Sénégal 🇸🇳

**Horaires :**
📅 Lundi - Vendredi : 9h - 18h
📅 Samedi : 9h - 13h

**Comment nous joindre :**
📱 WhatsApp : **77 361 59 44**
📞 Téléphone : **77 361 59 44**
📧 Email : contact@monportfolio.com

💡 *Nous travaillons aussi à distance avec des clients dans toute l'Afrique et à l'international !*

🚀 **Prenez rendez-vous pour nous visiter :**
👉 WhatsApp : **77 361 59 44**`
    },
    
    // ========================================
    // TARIFS
    // ========================================
    pricing: {
        patterns: ['tarif', 'prix', 'coût', 'combien', 'budget', 'payer', 'facture', 'cher', 'pas cher'],
        response: `💰 **Grille Tarifaire Indicative**

🌐 **Sites Web :**
• Landing Page : nous consulter
• Site Vitrine : nous consulter  
• E-commerce : nous consulter
• Application web : sur devis

🎨 **Design UX/UI :**
• Maquettes : nous consulter

📱 **Community Management :**
• À partir de 50 000 FCFA/mois

🤖 **Chatbot IA :**
• À partir de 150 000 FCFA

✨ *Chaque projet est unique ! Le prix dépend de vos besoins spécifiques.*

📱 **Pour un devis gratuit et personnalisé :**
👉 WhatsApp : **77 361 59 44**`
    },
    
    // ========================================
    // DÉLAIS ET PROCESSUS
    // ========================================
    process: {
        patterns: ['délai', 'temps', 'quand', 'livraison', 'durée', 'rapidement', 'long', 'combien de temps', 'processus', 'comment ça marche'],
        response: `⏱️ **Délais & Processus**

**Délais moyens :**
• Landing Page : 3-7 jours
• Site Vitrine : 1-2 semaines
• E-commerce : 2-4 semaines
• Application web : 4-12 semaines

**Notre processus :**
1️⃣ **Discussion** - Comprendre vos besoins
2️⃣ **Proposition** - Devis détaillé gratuit
3️⃣ **Design** - Maquettes et validation
4️⃣ **Développement** - Création du site
5️⃣ **Livraison** - Tests et mise en ligne
6️⃣ **Support** - Accompagnement continu

💡 *Besoin d'une livraison express ? On s'adapte !*

📱 **Parlons de votre projet :**
👉 WhatsApp : **77 361 59 44**`
    },
    
    // ========================================
    // CONTACT WHATSAPP
    // ========================================
    whatsapp: {
        patterns: ['whatsapp', 'contact', 'appeler', 'téléphone', 'numéro', 'joindre', 'appel', 'tel'],
        response: `📱 **Contactez-nous sur WhatsApp !**

Pour une réponse rapide et personnalisée :

👉 **Cliquez ici :** [Contacter sur WhatsApp](${WHATSAPP_LINK})

📞 **Ou appelez directement :** **77 361 59 44**

⏰ **Disponibilité :**
- Lundi - Vendredi : 9h - 18h
- Samedi : 9h - 13h
- Réponse sous 24h garantie !

💡 *N'hésitez pas, je suis là pour vous aider !* 🚀`
    },
    
    // ========================================
    // PORTFOLIO
    // ========================================
    portfolio: {
        patterns: ['portfolio', 'projet', 'réalisation', 'exemple', 'travail', 'vos projets', 'réalisations'],
        response: `🎨 **Nos Réalisations**

Nous avons réalisé plus de **20 projets** pour des clients satisfaits :

✅ Sites e-commerce
✅ Applications web
✅ Dashboards analytiques
✅ Landing pages conversion
✅ Sites vitrines professionnels
✅ Chatbots IA

🏆 **100% satisfaction client !**

👉 *Scrollez la section "Portfolio" sur le site pour voir nos créations !*

📱 **Vous avez un projet similaire ? Discutons-en :**
👉 WhatsApp : **77 361 59 44**`
    },
    
    // ========================================
    // À PROPOS
    // ========================================
    about: {
        patterns: ['à propos', 'qui êtes', 'parlez', 'vous êtes', 'présente', 'qui est', 'équipe'],
        response: `👩‍💻 **À Propos**

Je suis une créatrice web passionnée, basée à **Dakar, Sénégal** 🇸🇳

**Mon parcours :**
✅ 2+ ans d'expérience
✅ 20+ projets livrés
✅ 100% satisfaction client
✅ Clients en Afrique et à l'international

**Mes expertises :**
• Création de sites web modernes
• UX/UI Design
• Community Management
• Automatisation IA (Chatbots)

💡 *Je combine créativité et expertise technique pour donner vie à vos projets digitaux !*

📱 **Envie de collaborer ?**
👉 WhatsApp : **77 361 59 44**`
    },
    
    // ========================================
    // HÉBERGEMENT & DOMAINE
    // ========================================
    hosting: {
        patterns: ['hébergement', 'hebergement', 'domaine', 'nom de domaine', 'serveur', '.com', '.sn', 'nom domaine'],
        response: `🌐 **Hébergement & Domaine**

**Ce que nous proposons :**
✅ Achat du nom de domaine (.com, .sn, etc.)
✅ Hébergement sécurisé
✅ Certificat SSL (HTTPS)
✅ Emails professionnels
✅ Sauvegardes automatiques
✅ Support technique

**Options disponibles :**
• Hébergement partagé
• Serveur dédié
• Cloud hosting

💡 *Nous nous occupons de tout, vous n'avez rien à gérer !*

📱 **Pour plus d'infos :**
👉 WhatsApp : **77 361 59 44**`
    },
    
    // ========================================
    // RÉPONSES PAR DÉFAUT
    // ========================================
    default: [
        "Je ne suis pas sûre de bien comprendre... 🤔 Pourriez-vous reformuler votre question ?\n\nVous pouvez me demander sur :\n• Sites web (e-commerce, vitrine...)\n• Design UX/UI\n• Chatbots IA\n• Nos tarifs\n• Notre localisation",
        "Hmm, je n'ai pas bien saisi... 😅 N'hésitez pas à être plus précis(e) !\n\n💡 Je peux vous renseigner sur :\n• Types de sites web\n• Services proposés\n• Délais et processus\n• Tarifs",
        "Je ne trouve pas de réponse exacte... 🧐\n\n💡 Pas de panique ! Contactez directement notre équipe pour une aide personnalisée :\n📱 WhatsApp : **77 361 59 44**"
    ],
    
    // ========================================
    // REMERCIEMENTS
    // ========================================
    thanks: {
        patterns: ['merci', 'thanks', 'thank you', 'cool', 'super', 'génial', 'parfait', 'excellent', 'top'],
        responses: [
            "Avec plaisir ! 😊 Y a-t-il autre chose que je puisse faire pour vous ?",
            "Merci à vous ! 🌟 N'hésitez pas si vous avez d'autres questions !",
            "Je vous en prie ! 💫 Je suis là pour vous aider !"
        ]
    },
    
    // ========================================
    // AU REVOIR
    // ========================================
    goodbye: {
        patterns: ['au revoir', 'bye', 'à bientôt', 'ciao', 'adieu', 'a plus'],
        responses: [
            "Au revoir ! 👋 N'hésitez pas à revenir. Bonne continuation !",
            "À bientôt ! 🌟 J'espère vous avoir aidé(e). Contactez-nous sur WhatsApp pour votre projet !",
            "Merci de votre visite ! 🙌 N'oubliez pas : **77 361 59 44** pour démarrer votre projet. À vite !"
        ]
    },
    
    // ========================================
    // CTA - APPEL À L'ACTION
    // ========================================
    cta: {
        patterns: ['devis', 'projet', 'commencer', 'démarrer', 'collaborer', 'travailler', 'je veut', 'je veux'],
        response: `🚀 **Démarrons Votre Projet !**

**Comment procéder :**

1️⃣ **Décrivez votre projet** sur WhatsApp
2️⃣ **Recevez un devis gratuit** sous 24h
3️⃣ **Validez** et lancez votre projet !

📱 **Contactez-nous maintenant :**
👉 WhatsApp : **77 361 59 44**
📞 Téléphone : **77 361 59 44**

⏰ Réponse garantie sous 24h !

💡 *Tous nos projets incluent un accompagnement personnalisé !*`
    }
};

// ========================================
// FONCTIONS UTILITAIRES
// ========================================

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatMessage(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="underline text-accent-500 hover:text-accent-600">$1</a>');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ========================================
// FONCTION PRINCIPALE DE RÉPONSE
// ========================================

function getBotResponse(message) {
    const msg = message.toLowerCase().trim();
    
    // Vérifier les salutations
    if (chatbotKnowledge.greetings.patterns.some(p => msg.includes(p))) {
        return getRandomItem(chatbotKnowledge.greetings.responses);
    }
    
    // Vérifier les remerciements
    if (chatbotKnowledge.thanks.patterns.some(p => msg.includes(p))) {
        return getRandomItem(chatbotKnowledge.thanks.responses);
    }
    
    // Vérifier les au revoir
    if (chatbotKnowledge.goodbye.patterns.some(p => msg.includes(p))) {
        return getRandomItem(chatbotKnowledge.goodbye.responses);
    }
    
    // Vérifier les types de sites web
    for (const [key, siteType] of Object.entries(chatbotKnowledge.siteTypes)) {
        if (siteType.patterns.some(p => msg.includes(p))) {
            return siteType.response;
        }
    }
    
    // Vérifier les autres services
    for (const [key, service] of Object.entries(chatbotKnowledge.services)) {
        if (service.patterns.some(p => msg.includes(p))) {
            return service.response;
        }
    }
    
    // Vérifier la localisation
    if (chatbotKnowledge.location.patterns.some(p => msg.includes(p))) {
        return chatbotKnowledge.location.response;
    }
    
    // Vérifier les tarifs
    if (chatbotKnowledge.pricing.patterns.some(p => msg.includes(p))) {
        return chatbotKnowledge.pricing.response;
    }
    
    // Vérifier les délais/processus
    if (chatbotKnowledge.process.patterns.some(p => msg.includes(p))) {
        return chatbotKnowledge.process.response;
    }
    
    // Vérifier WhatsApp/contact
    if (chatbotKnowledge.whatsapp.patterns.some(p => msg.includes(p))) {
        return chatbotKnowledge.whatsapp.response;
    }
    
    // Vérifier portfolio
    if (chatbotKnowledge.portfolio.patterns.some(p => msg.includes(p))) {
        return chatbotKnowledge.portfolio.response;
    }
    
    // Vérifier à propos
    if (chatbotKnowledge.about.patterns.some(p => msg.includes(p))) {
        return chatbotKnowledge.about.response;
    }
    
    // Vérifier hébergement/domaine
    if (chatbotKnowledge.hosting.patterns.some(p => msg.includes(p))) {
        return chatbotKnowledge.hosting.response;
    }
    
    // Vérifier CTA
    if (chatbotKnowledge.cta.patterns.some(p => msg.includes(p))) {
        return chatbotKnowledge.cta.response;
    }
    
    // Réponse par défaut
    return getRandomItem(chatbotKnowledge.default);
}

// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initDarkMode();
    initScrollAnimations();
    initChatbot();
    initContactForm();
    initSmoothScroll();
});

// ========================================
// NAVIGATION
// ========================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('bg-white/90', 'dark:bg-gray-900/90', 'backdrop-blur-lg', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-white/90', 'dark:bg-gray-900/90', 'backdrop-blur-lg', 'shadow-lg');
        }
    });
}

// ========================================
// MENU MOBILE
// ========================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    let isOpen = false;
    
    mobileMenuBtn.addEventListener('click', function() {
        isOpen = !isOpen;
        mobileMenu.classList.toggle('hidden');
        menuIcon.setAttribute('d', isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16');
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            isOpen = false;
        });
    });
}

// ========================================
// DARK MODE
// ========================================

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    
    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    
    darkModeToggle.addEventListener('click', toggleDarkMode);
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
}

// ========================================
// ANIMATIONS AU SCROLL
// ========================================

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        revealElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 150) {
                element.classList.add('active');
            }
        });
    }
    
    checkReveal();
    window.addEventListener('scroll', checkReveal);
}

// ========================================
// SCROLL FLUIDE
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// CHATBOT
// ========================================

function initChatbot() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const chatIconOpen = document.getElementById('chatIconOpen');
    const chatIconClose = document.getElementById('chatIconClose');
    const chatBadge = document.getElementById('chatBadge');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const quickActions = document.querySelectorAll('.quick-action');
    
    let isFirstOpen = true;
    
    // Toggle chat
    chatToggle.addEventListener('click', function() {
        chatWindow.classList.toggle('hidden');
        chatIconOpen.classList.toggle('hidden');
        chatIconClose.classList.toggle('hidden');
        
        if (isFirstOpen) {
            setTimeout(() => {
                addBotMessage(getRandomItem(chatbotKnowledge.greetings.responses));
                chatBadge.classList.add('hidden');
            }, 500);
            isFirstOpen = false;
        }
    });
    
    // Envoyer un message
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = chatInput.value.trim();
        
        if (message) {
            addUserMessage(message);
            chatInput.value = '';
            
            showTyping();
            
            setTimeout(() => {
                hideTyping();
                const response = getBotResponse(message);
                addBotMessage(response);
            }, 800 + Math.random() * 800);
        }
    });
    
    // Quick actions
    quickActions.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            addUserMessage(action);
            
            showTyping();
            
            setTimeout(() => {
                hideTyping();
                
                let response = '';
                const actionLower = action.toLowerCase();
                
                if (actionLower.includes('site')) {
                    response = `🌐 **Types de Sites Web Disponibles :**

• **E-commerce** - Boutique en ligne
• **Vitrine** - Site professionnel
• **Landing Page** - Page de conversion
• **Dashboard** - Tableau de bord
• **Application Web** - Sur mesure

💡 *Dites-moi quel type de site vous intéresse !*

📱 **Ou contactez-nous :**
👉 WhatsApp : **77 361 59 44**`;
                } else if (actionLower.includes('whatsapp')) {
                    response = chatbotKnowledge.whatsapp.response;
                } else if (actionLower.includes('localisation') || actionLower.includes('localisation')) {
                    response = chatbotKnowledge.location.response;
                }
                
                addBotMessage(response);
            }, 600);
        });
    });
}

// Ajouter un message utilisateur
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message flex justify-end';
    messageDiv.innerHTML = `
        <div class="max-w-[80%] bg-accent-500 text-white px-4 py-3 rounded-2xl rounded-br-md">
            <p class="text-sm">${escapeHtml(message)}</p>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Ajouter un message du bot
function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message flex items-start gap-2';
    messageDiv.innerHTML = `
        <div class="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-sm">🤖</span>
        </div>
        <div class="max-w-[85%] bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md">
            <p class="text-sm">${formatMessage(message)}</p>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Afficher l'indicateur de typing
function showTyping() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'chat-message flex items-start gap-2';
    typingDiv.innerHTML = `
        <div class="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-sm">🤖</span>
        </div>
        <div class="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md">
            <div class="flex gap-1">
                <span class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></span>
                <span class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></span>
                <span class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
}

// Masquer l'indicateur de typing
function hideTyping() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) typingIndicator.remove();
}

// Scroller vers le bas
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ========================================
// FORMULAIRE DE CONTACT
// ========================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const message = formData.get('message');
        
        const whatsappMessage = `Bonjour ! 👋\n\nJe suis ${name}.\n\n📧 Email: ${email}\n🎯 Service: ${service}\n\n📝 Message:\n${message}`;
        
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        
        alert('Merci pour votre message ! Vous allez être redirigé vers WhatsApp.');
        form.reset();
    });
}