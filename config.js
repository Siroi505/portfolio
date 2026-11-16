/* =====================================================================
   KONFIGURASI PORTOFOLIO — edit HANYA file ini, kode desain tidak perlu disentuh.

   DUA BAHASA: teks yang tampil di website boleh ditulis { id: "...", en: "..." }.
     Kalau ditulis teks biasa saja ("..."), teks yang sama dipakai di kedua bahasa.
   CARA MENAMBAH PROJECT  : salin satu blok { ... } di "projects", lalu ganti isinya.
   CARA MENAMBAH ORGANISASI: salin satu blok { ... } di "orgs", lalu ganti isinya.
   CARA MENAMBAH TECH STACK: tambah { name: "Nama", icon: "assets/icons/file.svg" } di "stack".
     (atau icon: "react" untuk memakai ikon dari https://devicon.dev, butuh internet)
   FOTO / SERTIFIKAT / THUMBNAIL: taruh gambar di folder "assets/", lalu isi path-nya.
   CV: taruh file PDF bernama cv.pdf di folder yang sama dengan index.html.
   ===================================================================== */
window.SITE = {
  name: "Matthew Kenzo Ananta",
  handle: "kenzo",                    // tampil sebagai "kenzo.dev"
  role: ["Frontend", "Developer"],    // kata ke-2 tampil abu/outline
  tagline: {
    id: "Mahasiswa Teknik Informatika UDINUS Kediri yang tertarik membangun website, desain visual, dan konten digital.",
    en: "Informatics student at UDINUS Kediri who enjoys building websites, visual design, and digital content."
  },
  photo: "assets/foto.jpg",           // foto di kartu ID (alternatif: "assets/foto-formal.jpg")
  cutout: "assets/foto-cutout-warna.webp",  // foto tanpa latar untuk bagian About (versi hitam-putih: "assets/foto-cutout.webp")
  qr: "assets/qr-wa.png",             // QR WhatsApp di belakang kartu ID (klik kartu untuk membalik)
  cv: "cv.pdf",

  about: {
    id: "Mahasiswa semester 1 Teknik Informatika UDINUS Kediri yang tertarik pada pengembangan website, desain visual, dan konten digital. Saya sudah membangun beberapa website sebagai latihan dan terus belajar hal baru untuk siap menghadapi dunia profesional.",
    en: "First-semester Informatics Engineering student at UDINUS Kediri with an interest in website development, visual design, and digital content. I have built several websites as practice and keep learning new things to prepare for the professional world."
  },
  quote: {
    id: "Desain yang baik terasa sederhana, tetapi dibangun dengan teliti.",
    en: "Good design feels simple, but is built with care."
  },

  projects: [
    {
      title: "Wingzkay Dance",
      github: "https://github.com/Siroi505/wingzkay",
      url: "https://wingzkay.pages.dev",
      desc: {
        id: "Website personal branding untuk dancer dan pengajar dance di Kediri: kelas Modern Dance dan K-pop.",
        en: "Personal branding website for a dancer and dance instructor in Kediri: Modern Dance and K-pop classes."
      },
      long: {
        id: "Website promosi statis satu halaman untuk dancer dan pengajar dance Wingzkay di Kediri. Pengunjung bisa mengenal kelas Modern Dance dan K-pop, menonton video, lalu langsung memesan lewat WhatsApp.",
        en: "A one-page static promotional website for Wingzkay, a dancer and dance instructor in Kediri. Visitors can explore the Modern Dance and K-pop classes, watch videos, and book directly via WhatsApp."
      },
      features: {
        id: ["Dua bahasa (ID/EN) dengan tombol pengganti bahasa", "Galeri video YouTube dan video lokal dengan lightbox", "Tombol WhatsApp di setiap bagian untuk booking kelas", "Tampilan responsif dan SEO dasar"],
        en: ["Two languages (ID/EN) with a language switch", "YouTube and local video gallery with a lightbox", "WhatsApp buttons in every section for class booking", "Responsive layout and basic SEO"]
      },
      tech: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
      thumb: "assets/wingzkay.jpg",
      embed: true                     // isi false jika website memblokir iframe
    },
    {
      title: "KDR Restaurant",
      github: "https://github.com/Siroi505/kdr-restaurant",
      url: "https://kdr-restaurant.pages.dev",
      desc: {
        id: "Website menu restoran bertema gelap dengan pencarian menu, keranjang, dan pemesanan lewat WhatsApp.",
        en: "Dark-themed restaurant menu website with menu search, a cart, and ordering via WhatsApp."
      },
      long: {
        id: "Website restoran bergaya fine-dining yang menampilkan menu lengkap, lalu memungkinkan pengunjung memesan makanan dan membuat reservasi meja secara online.",
        en: "A fine-dining style restaurant website that shows the full menu and lets visitors order food and reserve a table online."
      },
      features: {
        id: ["Menu dengan filter, pencarian, urutan, dan filter harga", "Keranjang pesanan (slide-in) yang tersimpan di browser", "Pesanan dikirim ke kasir lewat link WhatsApp", "Formulir reservasi meja"],
        en: ["Menu with filters, search, sorting, and a price filter", "Slide-in order cart saved in the browser", "Orders sent to the cashier through a WhatsApp link", "Table reservation form"]
      },
      tech: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
      thumb: "assets/kdr.jpg",
      embed: true
    },
    {
      title: "Aruna Grand Hotel",
      github: "https://github.com/Siroi505/aruna-grand-hotel",
      url: "https://aruna-grand-hotel.pages.dev",
      desc: {
        id: "Website demo hotel bintang lima dengan cek ketersediaan kamar, reservasi lewat WhatsApp, dan panel admin.",
        en: "Demo website for a five-star hotel with room availability search, WhatsApp reservations, and an admin panel."
      },
      long: {
        id: "Website demo hotel bintang lima bergaya elegan di Jakarta, dibuat sebagai latihan merancang tampilan premium. Pengunjung bisa melihat kamar, restoran, dan fasilitas, mengecek ketersediaan kamar, lalu mengirim permintaan reservasi lewat WhatsApp. Foto yang dipakai hanya contoh untuk presentasi.",
        en: "A demo website for an elegant five-star hotel in Jakarta, built as practice in designing a premium look. Visitors can browse rooms, dining, and facilities, check room availability, then send a reservation request via WhatsApp. The photos are samples for presentation only."
      },
      features: {
        id: ["Cek ketersediaan: tanggal menginap, tipe kamar, dan jumlah tamu", "Formulir reservasi yang menyusun pesan WhatsApp otomatis, plus tombol salin pesan", "Bagian kamar & suite, restoran, dan fasilitas hotel", "Dua bahasa (ID/EN) dan halaman panel admin"],
        en: ["Availability check: stay dates, room type, and number of guests", "Reservation form that composes the WhatsApp message automatically, plus a copy button", "Rooms & suites, dining, and hotel facilities sections", "Two languages (ID/EN) and an admin panel page"]
      },
      tech: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
      thumb: "assets/aruna.jpg",
      embed: true
    }
  ],

  // IMPACT: tampil di bawah kartu project (tab Projects). Semua teks bisa { id, en }.
  // Cara menambah: salin satu blok { icon, title, desc, projects } di "items".
  // icon yang tersedia: "chat", "clock", "check", "globe". "projects" = nama singkat project yang terkait.
  // Catatan: sengaja berisi dampak kualitatif (fungsi website). Kalau kamu punya angka asli
  // (mis. jumlah pesanan/pengunjung), tambahkan ke desc agar lebih meyakinkan.
  impact: {
    label: "Impact",
    title: { id: "Dampak dari website yang saya buat", en: "The impact of the websites I build" },
    intro: {
      id: "Setiap project dibuat untuk membantu pemilik usaha dan pengunjungnya terhubung dengan lebih cepat dan jelas.",
      en: "Each project is built to help business owners and their visitors connect faster and more clearly."
    },
    items: [
      { icon: "chat",
        title: { id: "Kontak jadi satu langkah", en: "Contact in one step" },
        desc: { id: "Pesanan, reservasi, dan booking kelas dikirim lewat WhatsApp dengan pesan yang sudah tersusun, jadi calon pelanggan tidak perlu mengetik dari nol.",
                en: "Orders, reservations, and class bookings go through WhatsApp with a ready-made message, so customers don’t have to type from scratch." },
        projects: ["Wingzkay", "KDR", "Aruna"] },
      { icon: "clock",
        title: { id: "Informasi tersedia kapan saja", en: "Information available anytime" },
        desc: { id: "Menu, kelas, kamar, dan fasilitas bisa dilihat kapan saja dari HP atau laptop, sehingga pemilik usaha tidak perlu menjelaskan hal yang sama berulang kali.",
                en: "Menus, classes, rooms, and facilities can be viewed anytime from a phone or laptop, so owners don’t have to explain the same things again and again." },
        projects: ["Wingzkay", "KDR", "Aruna"] },
      { icon: "check",
        title: { id: "Permintaan lebih jelas", en: "Clearer requests" },
        desc: { id: "Filter, pencarian, keranjang, dan cek ketersediaan membantu pengunjung memilih sendiri lebih dulu, sehingga pesan yang masuk lebih lengkap dan jelas.",
                en: "Filters, search, a cart, and availability checks let visitors decide on their own first, so incoming requests are more complete and clear." },
        projects: ["KDR", "Aruna"] },
      { icon: "globe",
        title: { id: "Menjangkau pengunjung lokal & asing", en: "Reaching local & international visitors" },
        desc: { id: "Pilihan bahasa Indonesia dan Inggris membuat informasi mudah dipahami oleh pengunjung lokal maupun mancanegara.",
                en: "Indonesian and English options make the information easy to understand for local and international visitors alike." },
        projects: ["Wingzkay", "KDR", "Aruna"] }
    ]
  },

  orgs: [
    // cert = gambar sertifikat (klik untuk memperbesar), certThumb = versi kecil untuk kartu, certPdf = file PDF hasil scan
    { role: { id: "Anggota OSIS UKS", en: "OSIS UKS Member" },
      org: "OSIS SMA Katolik St. Augustinus · Sekbid 8 UKS & Adiwiyata", period: "2023 – 2024",
      duty: { id: "Terlibat dalam program kesehatan sekolah dan kegiatan Adiwiyata.", en: "Took part in school health programs and Adiwiyata activities." },
      cert: "assets/cert-anggota.jpg", certThumb: "assets/cert-anggota-s.jpg", certPdf: "assets/cert-anggota.pdf" },
    { role: { id: "Ketua OSIS UKS", en: "OSIS UKS Head" },
      org: "OSIS SMA Katolik St. Augustinus · Sekbid 8 UKS & Adiwiyata", period: "2024 – 2025",
      duty: { id: "Mengoordinasikan kegiatan Unit Kesehatan Sekolah bersama anggota dan guru pembina.", en: "Coordinated the School Health Unit’s activities together with its members and advisor teachers." },
      cert: "assets/cert-ketua.jpg", certThumb: "assets/cert-ketua-s.jpg", certPdf: "assets/cert-ketua.pdf" },
    { role: { id: "Bendahara PMR", en: "PMR Treasurer" },
      org: "PMR Wira SMA Katolik St. Augustinus", period: "2023 – 2024",
      duty: { id: "Mengelola kas dan laporan keuangan kegiatan PMR.", en: "Managed the cash and financial reports of PMR activities." },
      cert: "assets/cert-bendahara.jpg", certThumb: "assets/cert-bendahara-s.jpg", certPdf: "assets/cert-bendahara.pdf" },
    { role: { id: "Sie Publikasi, Desain & Dokumentasi", en: "Publication, Design & Documentation Division" },
      org: "PMR Wira SMA Katolik St. Augustinus", period: "2024 – 2025",
      duty: { id: "Mendokumentasikan kegiatan lewat foto dan video, membantu penyuntingan video, dan menyusun materi publikasi.", en: "Documented activities through photos and videos, helped edit videos, and prepared publication materials." },
      cert: "assets/cert-pdd.jpg", certThumb: "assets/cert-pdd-s.jpg", certPdf: "assets/cert-pdd.pdf" }
  ],

  education: [
    { title: "Universitas Dian Nuswantoro (UDINUS) Kediri",
      sub: { id: "Teknik Informatika, Fakultas Ilmu Komputer", en: "Informatics Engineering, Faculty of Computer Science" },
      period: { id: "2026 – Sekarang", en: "2026 – Present" } },
    { title: "SMA Katolik St Augustinus Kediri",
      sub: { id: "Peminatan Sains (MIPA) · rata-rata kelulusan 87,24", en: "Science Major (MIPA) · graduation average 87.24" },
      period: "2023 – 2026" },
    { title: "SMP Petra Kediri",
      sub: { id: "Sekolah Menengah Pertama", en: "Junior High School" }, period: "2020 – 2023" },
    { title: "SD Santa Maria Kediri",
      sub: { id: "Sekolah Dasar", en: "Elementary School" }, period: "2014 – 2020" },
    { title: "TK Santa Maria Kediri",
      sub: { id: "Taman Kanak-kanak", en: "Kindergarten" }, period: "2012 – 2014" }
  ],

  experience: [
    { title: { id: "Staf Penjualan & Pembuat Konten", en: "Sales Staff & Content Creator" }, sub: "Hiewan Lily Kediri",
      period: "Apr – Jul 2026",
      desc: { id: "Melayani pelanggan, mendesain poster promosi di Canva, dan membuat 4 video promosi dengan CapCut.", en: "Served customers, designed promotional posters in Canva, and produced 4 promo videos with CapCut." } },
    { title: { id: "Operator LED & Kamera Video", en: "LED & Video Camera Operator" },
      sub: { id: "Tim Multimedia Gereja Isa Almasih", en: "Multimedia Team, Gereja Isa Almasih" },
      period: { id: "Jun 2020 – Sekarang", en: "Jun 2020 – Present" },
      desc: { id: "Mengoperasikan kamera dan sistem LED untuk menampilkan lirik, presentasi, dan video selama ibadah.", en: "Operates cameras and the LED system to show lyrics, presentations, and videos during services." } },
    { title: { id: "Tim Sosial Media", en: "Social Media Team" }, sub: "Badan Musyawarah Antar Gereja (BAMAG)",
      period: { id: "2026 – Sekarang", en: "2026 – Present" },
      desc: { id: "Mendesain logo dan flyer di Canva serta mendokumentasikan kegiatan lewat foto dan video.", en: "Designs logos and flyers in Canva and documents activities through photos and videos." } }
  ],

  skills: [
    { label: "Web", items: ["HTML", "CSS", "JavaScript"] },
    { label: "Tools", items: ["Canva", "CapCut", "Microsoft Office"] },
    { label: { id: "Keterampilan", en: "Strengths" }, items: {
        id: ["Kerja sama tim", "Komunikasi", "Manajemen waktu", "Disiplin & tanggung jawab", "Adaptif", "Konten digital", "Desain visual", "Dokumentasi foto & video"],
        en: ["Teamwork", "Communication", "Time management", "Discipline & responsibility", "Adaptability", "Digital content", "Visual design", "Photo & video documentation"] } },
    { label: { id: "Bahasa", en: "Languages" }, items: {
        id: ["Indonesia (fasih)", "Inggris (dasar)"], en: ["Indonesian (fluent)", "English (basic)"] } }
  ],

  stack: [
    { name: "HTML", icon: "assets/icons/html5.svg" }, { name: "CSS", icon: "assets/icons/css3.svg" },
    { name: "JavaScript", icon: "assets/icons/javascript.svg" }, { name: "Cloudflare Pages", icon: "cloudflare" },
    { name: "Canva", icon: "assets/icons/canva.svg" }, { name: "CapCut", icon: "assets/icons/capcut.png" },
    { name: "MS Office", icon: "assets/icons/office.png" }
  ],

  contact: {                          // isi username saja (tanpa @ / URL); kosong = disembunyikan
    email: "matthewkenzo57@gmail.com",
    whatsapp: "6281231501360",        // format internasional, tanpa + dan 0 di depan
    instagram: "kenzouuuuu_uuuuuu", github: "", linkedin: ""
  }
};
