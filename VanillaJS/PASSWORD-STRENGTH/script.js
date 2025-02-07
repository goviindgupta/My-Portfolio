var strengthMeter = document.getElementById('strength-meter');
var passwordInput = document.getElementById('password-input');
var reasonsContainer = document.getElementById('reasons');

passwordInput.addEventListener('input', updateStrengthMeter);
updateStrengthMeter();

function updateStrengthMeter() {
    const weaknesses = calculatePasswordStrength(passwordInput.value);
    let strength = 100;
    reasonsContainer.innerHTML = '';
    
    weaknesses.forEach(weakness => {
        if (weakness == null) return;  // Skip if there's no weakness
        strength -= weakness.deduction;
        const messageElement = document.createElement('div');
        messageElement.innerText = weakness.message;
        reasonsContainer.appendChild(messageElement);
    });
    
    strengthMeter.style.setProperty('--strength', strength);
}

function calculatePasswordStrength(password) {  
    const weaknesses = [];
    weaknesses.push(lengthWeakness(password));
    weaknesses.push(lowercaseWeakness(password));
    weaknesses.push(uppercaseWeakness(password));
    weaknesses.push(numberWeakness(password)); // New number weakness check
    return weaknesses;
}

function lengthWeakness(password) {
    const length = password.length;
    if (length <= 5) {
        return {
            message: 'Your password is too short',
            deduction: 40
        };
    }
    if (length <= 10) {
        return {
            message: 'Your password could be longer',
            deduction: 15
        };
    }
    return null; // No weakness
}

function lowercaseWeakness(password) {
    return characterTypeWeakness(password, /[a-z]/g, 'lowercase letters');
}

function uppercaseWeakness(password) {
    return characterTypeWeakness(password, /[A-Z]/g, 'uppercase letters');
}

function numberWeakness(password) {
    return characterTypeWeakness(password, /[0-9]/g, 'numbers');
}

function characterTypeWeakness(password, regex, type) {
    const matches = password.match(regex) || [];
    if (matches.length === 0) {
        return {
            message: `Your password has no ${type}`,
            deduction: 20
        };
    }
    if (matches.length <= 2) {
        return {
            message: `Your password could use more ${type}`,
            deduction: 5
        };
    }
    return null;
}
