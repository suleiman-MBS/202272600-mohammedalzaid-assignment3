document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DYNAMIC GREETING (User Interaction) ---
    const greetingMsg = document.getElementById('greeting');
    const hour = new Date().getHours();
    let welcomeText = "";

    if (hour < 12) welcomeText = "Good Morning";
    else if (hour < 18) welcomeText = "Good Afternoon";
    else welcomeText = "Good Evening";

    // Updates content dynamically based on time of day
    greetingMsg.innerText = `${welcomeText}, I'm Mohammed Alzaid`;


    // --- 2. DARK MODE & LOCAL STORAGE (Data Handling) ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.documentElement; // Targets <html> to apply data-theme

    // Check if user has a preference saved in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        themeBtn.innerText = savedTheme === 'dark' ? "☀️ Light" : "🌙 Dark";
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme); // Save preference
        
        // Update button text
        themeBtn.innerText = newTheme === 'dark' ? "☀️ Light" : "🌙 Dark";
    });


    // --- 3. FORM VALIDATION & FEEDBACK (Error Handling) ---
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameValue = document.getElementById('userName').value;

        // Simple validation: Check if name is too short
        if (nameValue.length < 2) {
            feedback.innerText = "❌ Please enter a valid name.";
            feedback.style.color = "red";
        } else {
            // Success Feedback
            feedback.innerText = `✅ Thank you, ${nameValue}! Your message has been sent.`;
            feedback.style.color = "green";
            contactForm.reset(); // Clear the form fields
        }
    });

    console.log("Portfolio Assignment 2 Interactive Features Loaded.");
});
