// Funktion zum Anwenden der Richtungsklasse basierend auf dem `dir`-Attribut
function applyDirectionClass() {
    const dir = document.documentElement.getAttribute('dir');
    if (dir === 'rtl') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
    } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
    }
}

// Initiales Anwenden der Richtungsklasse
applyDirectionClass();

// Sicherheitsüberprüfung, um sicherzustellen, dass kein injizierter Code vorhanden ist
function sanitizeText(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    return doc.body.textContent || "";
}

// Event Listener für den Button zur Leserichtungsänderung
document.getElementById('toggleDirection').addEventListener('click', function() {
    var currentDir = document.documentElement.getAttribute('dir');
    if (currentDir === 'rtl') {
        document.documentElement.setAttribute('dir', 'ltr');
    } else {
        document.documentElement.setAttribute('dir', 'rtl');
    }
    // Nach dem Umschalten der Richtung das Anwenden der Richtungsklasse aktualisieren
    applyDirectionClass();
});


function genderizeTexts() {
    const rules = {
        "Der Administrator": "Die Administratorin oder der Administrator",
        "Der Benutzer": "Die Benutzerin oder der Benutzer",
        "der User": "die Userin oder der User",
        "Der Entwickler": "Die Entwicklerin oder der Entwickler",    
        "Der Anwender": "Die Anwenderin oder der Anwender",
        "der Techniker": "die Technikerin oder der Techniker",
        "Der Organisator": "Die Organisatorin oder der Organisator",
        "Jeder Teilnehmer": "Jede Teilnehmerin oder jeder Teilnehmer",
        };
    function replaceText(text) {
        for (const [key, value] of Object.entries(rules)) {
            text = text.replace(new RegExp(key, 'g'), value);
        }
        return text;
    }
    const textElements = document.querySelectorAll('.genderize-text');
    textElements.forEach(element => {
        let originalText = element.innerHTML;
        let newText = replaceText(originalText);
        element.innerHTML = newText;
    });
}

