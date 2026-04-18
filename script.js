document.addEventListener("DOMContentLoaded", function() {
    const btnOpen = document.getElementById("btn-open");
    const cover = document.getElementById("cover");
    const song = document.getElementById("song");
    const musicControl = document.getElementById("music-control");
    const vinyl = document.querySelector(".vinyl");

    let isPlaying = false;

    // Aksi saat tombol "Buka Undangan" diklik
    btnOpen.addEventListener("click", function() {
        // 1. Geser cover ke atas
        cover.classList.add("opened");
        
        // 2. Buka kuncian scroll pada body
        document.body.classList.remove("locked-scroll");

        // 3. Tampilkan tombol piringan hitam di pojok
        musicControl.classList.add("visible");

        // 4. Mainkan Lagu
        song.play().then(() => {
            isPlaying = true;
            vinyl.style.animationPlayState = 'running';
        }).catch(err => {
            console.log("Browser memblokir autoplay audio. Pengguna harus mengklik manual.");
        });
    });

    // Aksi play/pause jika piringan hitam diklik
    musicControl.addEventListener("click", function() {
        if (isPlaying) {
            song.pause();
            vinyl.style.animationPlayState = 'paused';
        } else {
            song.play();
            vinyl.style.animationPlayState = 'running';
        }
        isPlaying = !isPlaying;
    });
});

// --- Logika Hitung Mundur (Countdown) ---
// Format: new Date(Tahun, Bulan, Tanggal, Jam, Menit, Detik)
// PENTING: Dalam JavaScript, Bulan dimulai dari 0 (Januari = 0, Desember = 11)
// Contoh di bawah: 26 April 2026, jam 09:00
const weddingDate = new Date(2026, 3, 26, 9, 0, 0).getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Perhitungan waktu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Render ke HTML dan tambahkan angka '0' jika di bawah 10
    document.getElementById("hari").innerText = days < 10 ? '0' + days : days;
    document.getElementById("jam").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("menit").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("detik").innerText = seconds < 10 ? '0' + seconds : seconds;

    // Aksi jika waktu sudah lewat (hari H)
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("hari").innerText = "00";
        document.getElementById("jam").innerText = "00";
        document.getElementById("menit").innerText = "00";
        document.getElementById("detik").innerText = "00";
    }
}, 1000);