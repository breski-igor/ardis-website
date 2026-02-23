window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    setTimeout(() => {
        document.querySelector('.header').classList.add('compact');
    }, 1500);
});

const translations = {
    hr: {
        home: "Početna",
        about: "O nama",
        contact: "Kontakt",
        "project-type-1": "projekt interijer",
        "project-type-2": "natječaj prvo mjesto",
        "project-type-3": "zgrada mješovite namjene",
        "about-title": "O nama",
        "about-intro": "Ardis je arhitektonski ured posvećen promišljenom i suvremenom oblikovanju prostora. Vjerujemo u arhitekturu koja ne dominira, već suptilno nadopunjuje kontekst.",
        "about-paragraph1": "Naš rad temelji se na jasnoći koncepta, preciznosti detalja i poštovanju materijala. Svaki projekt razvijamo kroz dijalog s investitorom i prostorom, tražeći ravnotežu između funkcije, estetike i trajnosti.",
        "about-paragraph2": "Djelujemo u području stambene, javne i komercijalne arhitekture, od idejnog rješenja do izvedbe. Smatramo da je arhitektura proces — tiha, ali snažna forma koja oblikuje svakodnevni život.",
        "about-paragraph3": "Naš pristup je jednostavan: manje, ali promišljeno.",
        "contact-title": "Kontakt",
        "contact-intro": "Otvoreni smo za suradnje, nove projekte i razgovore o prostoru. Vjerujemo u dijalog kao temelj svake kvalitetne arhitekture.",
        "contact-address-label": "Adresa",
        "contact-address": "Zvonigraska 21\nZagreb, Hrvatska",
        "contact-email-label": "Email",
        "contact-phone-label": "Telefon",
        "project-title": "Beauty salon N",
        "project-subtitle": "Vrbani, Zagreb — 2017",
        "project-description-title": "Opis",
        "project-description-1": "Projekt se bavio uređenjem roh-bau prostora površine svega 33 m², izrazito nepravilnog tlocrta s denivelacijom u jednom dijelu prostora. Unutar zadanih gabarita bilo je potrebno funkcionalno organizirati malu čekaonicu te prostore za pedikuru, manikuru i depilaciju.",
        "project-description-2": "Zbog vrlo ograničenog budžeta, projektna rješenja temeljila su se na racionalnom pristupu i iskorištavanju postojećih materijala. Dio zidova ostavljen je u vidljivom betonu, pod je izveden kao cementni lijevani, dok je spušteni strop predviđen isključivo u dijelu potrebnom za provođenje instalacija.",
        "project-description-3": "Cjelokupan prostor oblikovan je u duhu low-budget estetike, bez suvišnih intervencija. Rezultat je mali, ali maksimalno funkcionalan prostor koji jasno odgovara svim zahtjevima naručitelja.",
        "project-label-project": "Projekt",
        "project-label-year": "Godina",
        "project-label-investor": "Investitor",
        "project-label-investor-type": "Privatni",
        "project-label-location": "Lokacija",
        "bundek-title": "Tematski park Bundek – istok",
        "bundek-subtitle": "Zagreb, Novi Zagreb — 2017",
        "bundek-description-title": "Opis",
        "bundek-description-1": "Prostor novog parka nalazi se između Bundeka, Save i naselja Novog Zagreba te danas djeluje izolirano i sadržajno nepovezano s okolinom. Projektom se park oblikuje kao poveznica između rijeke, jezera i grada, s naglaskom na javni, fleksibilni i fazno izvedivi prostor.",
        "bundek-description-2": "Koncept se temelji na mreži staza i zelenih „otoka“ koji uvažavaju postojeći krajobraz i stvaraju niz mikroambijenata za sport, rekreaciju, odmor i društvena događanja. Park je zamišljen kao dinamičan, prilagodljiv prostor socijalne interakcije, s jasnim zoniranjem sadržaja i naglašenom vizualnom i prostornom povezanošću prema Savi.",
        "bundek-label-project": "Projekt",
        "bundek-label-authors": "Autori",
        "bundek-label-year": "Godina",
        "bundek-label-investor": "Investitor",
        "bundek-label-inestor-type": "Grad Zagreb",
        "bundek-label-location": "Lokacija",
        "complex-title": "Stambeno-poslovni kompleks",
        "complex-subtitle": "Krapinsko-zagorska županija — 2022",
        "complex-description-title": "Opis",
        "complex-description-1": "Idejno rješenje rezultat je suradnje projektantskog tima i naručitelja s ciljem definiranja funkcionalnog i prostornog koncepta stambeno-poslovnog kompleksa na lokaciji postojećeg autobusnog kolodvora.",
        "complex-description-2": "Program je oblikovan prema ekonomskim i javnim interesima te, uz poslovne sadržaje i autobusni kolodvor, uključuje i značajan stambeni dio. Kompleks je zamišljen kao suvremeni, reprezentativni gradski prostor i važan urbani reper – mjesto susreta i okupljanja.",
        "complex-description-3": "Parcela je organizirana u dvije zone: javnu uz kolodvor s peronima, poslovnom zgradom i pješačkim prostorima te mirniju stambenu zonu s hostelom u stražnjem dijelu. Oblikovanje građevina naglašava javni prostor i stvara ugodan, polujavni ambijent s terasama, uz očuvanje intime stanovanja.",
        "complex-label-project": "Projekt",
        "complex-label-project-type": "Stambeno poslovni kompleks, suradnja s Milošem Pecotićem",
        "complex-label-year": "Godina",
        "complex-label-investor": "Investitor",
        "complex-label-investor-type": "Privatni",
        "complex-label-location": "Lokacija",

    },
    en: {
        home: "Home",
        about: "About us",
        contact: "Contact",
        "project-type-1": "interior design project",
        "project-type-2": "awarded first place",
        "project-type-3": "mixed-use building",
        "about-title": "About us",
        "about-intro": "Ardis is an architectural studio dedicated to thoughtful and contemporary space design. We believe in architecture that doesn't dominate, but subtly complements the context.",
        "about-paragraph1": "Our work is based on conceptual clarity, precision of details, and respect for materials. We develop each project through dialogue with the client and the space, seeking a balance between function, aesthetics, and durability.",
        "about-paragraph2": "We operate in the fields of residential, public, and commercial architecture, from conceptual design to execution. We believe architecture is a process — a quiet yet powerful form that shapes everyday life.",
        "about-paragraph3": "Our approach is simple: less, but thoughtful.",
        "contact-title": "Contact",
        "contact-intro": "We are open to collaborations, new projects, and conversations about space. We believe dialogue is the foundation of quality architecture.",
        "contact-address-label": "Address",
        "contact-address": "Zvonigraska 21\nZagreb, Croatia",
        "contact-email-label": "Email",
        "contact-phone-label": "Phone",
        "project-title": "Beauty Salon N",
        "project-subtitle": "Vrbani, Zagreb — 2017",
        "project-description-title": "Description",
        "project-description-1": "The project involved the renovation of a raw 33 m² space with a highly irregular floor plan and a level difference in one part of the interior. Within the given dimensions, it was necessary to functionally organize a small waiting area along with spaces for pedicure, manicure, and depilation.",
        "project-description-2": "Due to a very limited budget, the design solutions were based on a rational approach and the use of existing materials. Parts of the walls were left in exposed concrete, the floor was executed as poured cement, while the suspended ceiling was introduced only in the areas required for installations.",
        "project-description-3": "The entire space was shaped in the spirit of low-budget aesthetics, without unnecessary interventions. The result is a small but highly functional space that clearly meets all the client’s requirements.",
        "project-label-project": "Project",
        "project-label-year": "Year",
        "project-label-investor": "Client",
        "project-label-investor-type": "Private",
        "project-label-location": "Location",
        "bundek-title": "Bundek East Thematic Park",
        "bundek-subtitle": "Zagreb, Novi Zagreb — 2017",
        "bundek-description-title": "Description",
        "bundek-description-1": "The new park site is located between Bundek Lake, the Sava River, and the residential area of New Zagreb, currently acting as an isolated and programmatically disconnected space. The project redefines the park as a link between the river, the lake, and the city, emphasizing a public, flexible, and phasable environment.",
        "bundek-description-2": "The concept is based on a network of paths and green ‘islands’ that respect the existing landscape while creating a series of micro-environments for sports, recreation, relaxation, and social events. The park is conceived as a dynamic and adaptable space of social interaction, with clearly defined zones and strong visual and spatial connections towards the Sava River.",
        "bundek-label-project": "Project",
        "bundek-label-authors": "Authors",
        "bundek-label-year": "Year",
        "bundek-label-investor": "Client",
        "bundek-label-inestor-type": "The City Of Zagreb",
        "bundek-label-location": "Location",
        "complex-title": "Residential and Commercial Complex",
        "complex-subtitle": "Krapina-Zagorje County — 2022",
        "complex-description-title": "Description",
        "complex-description-1": "The conceptual design is the result of collaboration between the design team and the client, aiming to define a functional and spatial concept for a mixed-use residential and commercial complex on the site of the existing bus station.",
        "complex-description-2": "The program responds to both economic and public interests and, alongside commercial facilities and the bus terminal, includes a significant residential component. The complex is envisioned as a contemporary and representative urban space – a landmark and gathering point.",
        "complex-description-3": "The site is organized into two zones: a public zone adjacent to the terminal with platforms, an office building, and pedestrian areas, and a quieter residential zone with a hostel positioned at the rear. The architectural form emphasizes public space while creating a pleasant semi-public environment with terraces, preserving residential privacy.",
        "complex-label-project": "Project",
        "complex-label-project-type": "Residential and Commercial Complex, collaboration with Miloš Pecotić",
        "complex-label-year": "Year",
        "complex-label-investor": "Client",
        "complex-label-investor-type": "Private",
        "complex-label-location": "Location",
        
    }
};

const buttons = document.querySelectorAll('.lang-switch button');
const elements = document.querySelectorAll('[data-key]');

function applyTranslations(lang) {
    elements.forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    buttons.forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.dataset.lang;

        localStorage.setItem('lang', lang);
        applyTranslations(lang);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'hr';
    applyTranslations(savedLang);
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.6) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const body = document.body;

function toggleMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
}

function closeMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('menu-open');
}

hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

const langButtons = document.querySelectorAll('.lang-switch button');
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (window.innerWidth <= 480) {
            closeMenu();
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
        closeMenu();
    }
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 480) {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
            closeMenu();
        }
    }
});