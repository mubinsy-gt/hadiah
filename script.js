document.getElementById('openButton').addEventListener('click', function() {
    // Animasi tutup kotak terbuka
    document.querySelector('.lid').style.transform = 'rotateX(-90deg)';
    
    // Tampilkan gambar setelah animasi tutup
    setTimeout(function() {
        document.getElementById('giftBox').style.display = 'none';
        document.getElementById('imageContainer').style.display = 'block';
    }, 500); // Sesuaikan durasi animasi tutup
});
