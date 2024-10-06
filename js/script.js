let currentIndex = 0;
const images = [
    '/images/aksesoris.jpg',
    '/images/baju.jpg',
    '/images/celana.jpg',
    '/images/sepatu.jpg'
];

function changeImage(direction) {
    currentIndex += direction;

    // Reset index jika mencapai batas
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Kembali ke gambar terakhir
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Kembali ke gambar pertama
    }

    // Ganti gambar
    const heroImage = document.getElementById('hero-image');
    heroImage.src = images[currentIndex];
}
