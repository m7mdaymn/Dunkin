document.addEventListener('DOMContentLoaded', () => {
    // Select all menu items
    const menuItems = document.querySelectorAll('.menu-item');

    // Add click event listeners to each menu item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the target section from the data-target attribute
            const target = item.getAttribute('data-target');
            if (target) {
                // Navigate to the target section
                window.location.href = target;
            }
        });
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');

    hamburger.addEventListener('click', () => {
        navLeft.classList.toggle('active');
        navRight.classList.toggle('active');
        // Optional: Toggle the hamburger icon between bars and close (X)
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close the menu when clicking a nav item (on mobile)
    const navItems = document.querySelectorAll('.nav-item, .dunkin-section');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                navLeft.classList.remove('active');
                navRight.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // Console log to confirm script loaded
    console.log('Dunkin\' website script loaded successfully.');
});