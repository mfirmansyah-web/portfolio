// Navigasi antar section
const links = document.querySelectorAll('.navlist a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const currentActive = document.querySelector('.section.active');
    const nextSection = document.getElementById(targetId);

    if (currentActive === nextSection) return; // Jika klik section yg sama, abaikan

    // Hapus active dari yg sekarang dgn animasi keluar
    currentActive.classList.remove('active');

    // Tambahkan active ke yang baru setelah delay
    setTimeout(() => {
      nextSection.classList.add('active');
    }, 100); // Delay untuk memberi waktu animasi out
  });
});



// Toggle tampilkan/hidden file di folder project
function toggleFiles(folderId) {
  const folder = document.getElementById(folderId);
  const allFolders = document.querySelectorAll('.folder-files');

  allFolders.forEach(f => {
    if (f !== folder) {
      f.style.display = 'none';
    }
  });

  folder.style.display = folder.style.display === 'block' ? 'none' : 'block';
}

// Buka file PDF dalam modal
function openPDF(filePath) {
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('pdfFrame');
  iframe.src = filePath;
  modal.style.display = 'flex';
}

// Tutup modal PDF
function closePDF() {
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('pdfFrame');
  iframe.src = '';
  modal.style.display = 'none';
}
 
function toggleFiles(folderId) {
  const folder = document.getElementById(folderId);
  if (folder.style.display === "flex") {
    folder.style.display = "none";
  } else {
    folder.style.display = "flex";
  }
}

function openPDF(pdfPath) {
  const modal = document.getElementById("pdfModal");
  const frame = document.getElementById("pdfFrame");
  frame.src = pdfPath;
  modal.style.display = "flex";
}

function closePDF() {
  const modal = document.getElementById("pdfModal");
  const frame = document.getElementById("pdfFrame");
  frame.src = "";
  modal.style.display = "none";
}
