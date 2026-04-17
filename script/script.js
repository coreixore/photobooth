// --- AMBIL ELEMEN BARU ---
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const editControls = document.getElementById('edit-controls'); // Tambahkan ini
const brightnessSlider = document.getElementById('brightness'); // Tambahkan ini

// --- FUNGSI YANG SUDAH ADA (Modifikasi sedikit) ---
async function startCamera() {
    // ... (kode startCamera kamu tetap sama) ...
}

function capturePhoto() {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    photo.src = canvas.toDataURL('image/png');
    
    // --- TAMBAHAN BARU DI SINI ---
    // Setelah foto diambil, munculkan kontrol edit dan reset filter ke Normal
    editControls.style.display = 'block'; 
    applyFilter('none'); 
    brightnessSlider.value = 100; // Reset slider kecerahan ke tengah
}

// --- FUNGSI BARU UNTUK EDIT FOTO ---

// Fungsi 1: Menerapkan Filter Warna (Hitam Putih, Sepia, dll)
function applyFilter(filterValue) {
    // Kita terapkan CSS filter langsung ke elemen <img> hasil foto
    photo.style.filter = filterValue;
    
    // Reset slider kecerahan ke 100% agar tidak tumpang tindih secara aneh
    if (filterValue !== 'none') {
        brightnessSlider.value = 100;
    }
}

// Fungsi 2: Mengatur Kecerahan lewat Slider
function adjustBrightness() {
    const brightnessValue = brightnessSlider.value;
    // Terapkan filter kecerahan (misal: brightness(150%))
    photo.style.filter = `brightness(${brightnessValue}%)`;
}