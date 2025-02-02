class FormValidator {
    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    static validatePassword(password) {
        return password.length >= 8;
    }

    static validatePhone(phone) {
        const re = /^\+?[\d\s-]{10,}$/;
        return re.test(phone);
    }

    static showError(inputElement, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        const parent = inputElement.parentElement;
        const existing = parent.querySelector('.error-message');
        if (existing) existing.remove();
        
        parent.appendChild(errorDiv);
        inputElement.classList.add('error');
    }

    static removeError(inputElement) {
        const parent = inputElement.parentElement;
        const error = parent.querySelector('.error-message');
        if (error) error.remove();
        inputElement.classList.remove('error');
    }
} 