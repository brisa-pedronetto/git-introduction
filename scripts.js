/**
 * A polite function that says hello in multiple languages
 * @param {String} language
 */
function sayHello(language) {
    
    // Defaults to Icelandic
    if (!language) {
        language = 'is';
    }
    
    // Built-in dictionary
    var localized = {
        'is': 'Hæ',
        'en': 'Hello',
        'pt': 'Oi',
        'de': 'Guten Tag',
    };
    
    // Handle non-existing languages
    if (!(language in localized)) {
        alert('There is no support for : "' + language + '", but in Iceland we say ' + localized['is']);
        return;
    }
    
    alert(localized[language]);
    
}

/**
 * Create our event handler after the DOM is loaded
 * (otherwise it the script would not find the button or the language menu)
 */
window.onload = function () {
    
    var button = document.getElementById('sayHelloBtn'),
        languageMenu = document.getElementById('languageMenu');
    
    // When clicked, say Hello in selected language
    button.addEventListener('click', function () {
        sayHello(languageMenu.value);
    });
    
}