document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor')
    const cursorRing = document.querySelector('.cursor-ring');

    // Set the position of the cursor
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Set the position of the cursor ring after a slight delay
    setTimeout(() => {
        cursorRing.style.left = `${e.clientX}px`;
        cursorRing.style.top = `${e.clientY}px`;
    }, 100); // Adjust the delay time as needed


    // Function to add or remove the 'hovered' class when hovering over a link or button
    function handleHover(element) {
        element.addEventListener('mouseenter', () => {
            cursorRing.classList.add('hovered');
        });
        element.addEventListener('mouseleave', () => {
            cursorRing.classList.remove('hovered');
        });
    }

    
    // Apply the effect to links and buttons
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    const aboutLinks = document.querySelectorAll('.tab-links');
    const servicesList = document.querySelectorAll('.services-list div');
    const inputs = document.querySelectorAll('input');
    const textAreas = document.querySelectorAll('textarea');

    links.forEach(link => {
        handleHover(link);
    });
    buttons.forEach(button => {
        handleHover(button);
    });
    aboutLinks.forEach(aboutLink => {
        handleHover(aboutLink);
    });
    servicesList.forEach(service => {
        handleHover(service);
    });
    inputs.forEach(input => {
        handleHover(input);
    });
    textAreas.forEach(textarea => {
        handleHover(textarea);
    });
});

