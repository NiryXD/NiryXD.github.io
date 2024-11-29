document.addEventListener('DOMContentLoaded', () => {
    gsap.from('header', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.hero h1', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 1 });
    gsap.from('.cta', { opacity: 0, scale: 0.8, duration: 1, delay: 1.5 });

    gsap.utils.toArray('.service-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.3,
        });
    });
});
