PORTFOLIO WEBSITE

Struktur:
- index.html: halaman utama website
- config.js: data profil, project, pengalaman, dan kontak
- assets/: gambar, ikon, dan sertifikat
- cv.pdf: CV yang dapat diunduh

Menjalankan secara lokal:
Buka index.html melalui browser. Untuk hasil yang lebih konsisten, jalankan folder ini menggunakan ekstensi Live Server di Visual Studio Code.

Deploy:
Hubungkan repository GitHub ke Cloudflare Pages dengan pengaturan:
- Framework preset: None
- Build command: kosong
- Build output directory: .
- Root directory: kosong

Pembaruan konten:
Edit data pada config.js. Jangan menghapus elemen atau fungsi pada index.html jika belum memahami ketergantungannya.
