document.addEventListener("DOMContentLoaded", function() {
    // Memilih semua elemen yang memiliki class 'animate-on-scroll'
    const elements = document.querySelectorAll('.animate-on-scroll');

    // Konfigurasi Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jika elemen terlihat di viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Animasi berjalan saat 10% elemen sudah terlihat
    });

    // Mulai mengamati setiap elemen
    elements.forEach(element => {
        observer.observe(element);
    });
});