const translations = {
    el: {
        web_title: "Ψηφιακές Υπηρεσίες Τελετών",
        search_btn: "Αναζήτηση Υπηρεσιών",
        nav_services: "Οι Υπηρεσίες μας",
        nav_contact: "Επικοινωνήστε μαζί μας",
        hero_title: "Ψηφιακές Υπηρεσίες Τελετών",
        hero_desc: "Καλωσορίσατε στις ψηφιακές υπηρεσίες τελετών. Παρέχουμε μια σειρά επιλογών για όσους και όσες επιθυμούν να τιμήσουν τους αγαπημένους τους με σύγχρονο τρόπο.",
        services_title: "Οι Υπηρεσίες Μας",
        srv_basic_title: "Βασικό Πακέτο",
        srv_basic_desc: "Βασικές υπηρεσίες για όσους αναζητούν έναν απλό και αξιοπρεπή αποχαιρετισμό",
        srv_premium_title: "Πλήρες Πακέτο",
        srv_premium_desc: "Αναβαθμισμένες υπηρεσίες για όσους επιθυμούν έναν πιο περίτεχνο και εξατομικευμένο αποχαιρετισμό",
        srv_exclusive_title: "Πολυτελές Πακέτο",
        srv_exclusive_desc: "Πολυτελείς υπηρεσίες για όσους αναζητούν έναν μοναδικό και αξιομνημόνευτο αποχαιρετισμό",
        price_label: "Τιμή",
        form_title: "Επικοινωνήστε μαζί μας",
        form_name: "Ονοματεπώνυμο:",
        form_phone: "Αριθμός Τηλεφώνου:",
        form_choose: "Επιλέξτε Υπηρεσία:",
        opt_basic: "Βασικό",
        opt_premium: "Πλήρες",
        opt_exclusive: "Πολυτελείας",
        form_date: "Ημερομηνία Τελετής:",
        form_msg: "Μήνυμα:",
        form_submit: "Πληρωμή Τώρα"
    },
    en: {
        web_title: "Digital Funeral Services",
        search_btn: "Search Services",
        nav_services: "Our Services",
        nav_contact: "Contact Us",
        hero_title: "Digital Funeral Services",
        hero_desc: "Welcome to our digital funeral services. We provide a range of options for those looking to honor their loved ones in a modern way.",
        services_title: "Our Services",
        srv_basic_title: "Basic",
        srv_basic_desc: "Basic funeral services for those seeking a simple and respectful farewell.",
        srv_premium_title: "Premium",
        srv_premium_desc: "Premium funeral services for those wanting a more elaborate and personalized tribute.",
        srv_exclusive_title: "Exclusive",
        srv_exclusive_desc: "Exclusive funeral services for those seeking a unique and memorable farewell.",
        price_label: "Price",
        form_title: "Contact Us",
        form_name: "Full Name:",
        form_phone: "Phone Number:",
        form_choose: "Choose Service:",
        opt_basic: "Basic",
        opt_premium: "Premium",
        opt_exclusive: "Exclusive",
        form_date: "Service Date:",
        form_msg: "Message:",
        form_submit: "Pay Now"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('selectedLanguage', lang);
}

// Φόρτωση της προτιμώμενης γλώσσας
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);
});