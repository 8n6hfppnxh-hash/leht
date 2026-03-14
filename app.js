document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    
    // Case-insensitive check to avoid mobile capitalization issues
    if (usernameInput.toLowerCase() === 'olen' && passwordInput.toLowerCase() === 'nunnu') {
        const loginView = document.getElementById('login-view');
        const landingView = document.getElementById('landing-view');
        
        loginView.classList.remove('active');
        
        setTimeout(() => {
            loginView.style.display = 'none';
            landingView.style.display = 'block';
            
            setTimeout(() => {
                landingView.classList.add('active');
            }, 50);
        }, 600);
    } else {
        // Visual feedback for error
        const card = document.querySelector('.login-card');
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
        
        // Optional: show alert if they really can't figure it out
        // alert('Vale kasutajanimi või parool!');
    }
});

// Background subtle movement
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const activeCard = document.querySelector('.view.active .glass-card');
    if (activeCard) {
        activeCard.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});
