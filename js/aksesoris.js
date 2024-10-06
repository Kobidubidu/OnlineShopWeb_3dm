function showQRCode(qrCodeSrc) {
    const popup = document.getElementById('qrcode-popup');
    const qrcodeImage = document.getElementById('qrcode-image');
    
    // Mengatur sumber gambar QR code
    qrcodeImage.src = qrCodeSrc;
    popup.style.display = 'flex'; // Menampilkan popup
}

// Fungsi untuk menutup popup
function closeQRCode() {
    const popup = document.getElementById('qrcode-popup');
    popup.style.display = 'none'; // Menyembunyikan popup
}