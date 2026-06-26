# Panduan Sistem Desain (DESIGN.md) - Radcliffe Portfolio

Dokumen ini mendefinisikan prinsip desain, arsitektur visual, skema warna, tipografi, tata letak, komponen UI, serta perilaku interaksi untuk projek **Radcliffe Portfolio**. Dokumen ini bertujuan untuk memastikan konsistensi tampilan antarmuka (UI) dan pengalaman pengguna (UX) pada pengembangan fitur-fitur di masa mendatang.

---

## 1. Filosofi & Karakter Desain
Aplikasi ini dirancang sebagai portofolio pengembang perangkat lunak profesional dengan pendekatan **Dark Theme Minimalist**. Karakter visualnya bersih, elegan, dan fokus pada konten, dengan sentuhan warna oranye menyala sebagai aksen utama untuk menarik perhatian pengguna pada elemen interaktif.

- **Tema Utama**: Gelap secara penuh (*Pure Black* `#000000` sebagai basis latar belakang).
- **Aksen Utama**: Oranye menyala (*Primary Orange*) untuk status aktif, border sorot, hover, dan tombol penting.
- **Transisi**: Animasi transisi yang halus (*Smooth Clip-Path Transitions* dan *Parallax Scrolling*) untuk memberikan kesan premium dan dinamis.

---

## 2. Token Desain (Design Tokens)

### A. Palet Warna (Tailwind & CSS Variables)
Warna didefinisikan menggunakan HSL CSS Variables di `src/styles/globals.css` dengan variasi tema gelap yang dominan:

| Kunci Token | Nilai Warna (HSL / Hex) | Penggunaan |
| :--- | :--- | :--- |
| `--background` | `20 14.3% 4.1%` (Dark Charcoal) | Warna latar belakang sekunder / kontainer gelap |
| `--foreground` | `60 9.1% 97.8%` (Off-white) | Warna teks utama |
| `--primary` | `20.5 90.2% 48.2%` (`#e05615` / `#f97316`) | Warna aksen, tombol utama, border sorot, status aktif |
| `--card` | `20 14.3% 4.1%` | Latar belakang Card komponen |
| `--border` | `12 6.5% 15.1%` (Dark Gray) | Warna border standar komponen |
| `--muted` | `12 6.5% 15.1%` | Elemen dekoratif atau dinonaktifkan |
| `--muted-foreground`| `24 5.4% 63.9%` (Muted Gray) | Warna teks deskripsi atau label sekunder |

*Catatan:* Latar belakang dasar `body` diatur secara keras ke warna hitam pekat (`background: #000;`) di `globals.css`.

### B. Tipografi
- **Font Utama**: `Figtree`, sans-serif (diimpor dari Google Fonts).
- **Konfigurasi Global**: Diaplikasikan pada semua elemen menggunakan selektor global `* { font-family: "Figtree", sans-serif; }`.
- **Hierarki Teks**:
  - **Hero Title**: `text-6xl` hingga `text-8xl` (`font-bold`) untuk memberikan impresi visual yang kuat.
  - **Section Title**: `text-2xl` hingga `text-5xl` (`font-bold`).
  - **Body / Deskripsi**: `text-base` atau `text-lg` (`font-semibold` / `text-gray-400` atau `text-gray-200`).
  - **Muted Label / Meta-info**: `text-xs` hingga `text-sm` (`text-muted-foreground`).

### C. Radius Sudut (Border Radius)
- Menggunakan radius standar dari Shadcn UI:
  - `lg`: `var(--radius)` (0.5rem)
  - `md`: `calc(var(--radius) - 2px)`
  - `sm`: `calc(var(--radius) - 4px)`

---

## 3. Tata Letak (Layout) & Struktur Grid

### A. Layout Utama (`HomepageLayout`)
Setiap halaman dibungkus oleh `HomepageLayout` untuk memastikan struktur tata letak yang konsisten:
1. **Sidebar Sosial Media (`ListSosmedComponent`)**:
   - Di desktop (`md:flex`), melayang di sebelah kiri (`fixed top-0 left-0 h-screen min-w-44`).
   - Di mobile (`md:hidden`), ditampilkan secara horizontal di bagian bawah halaman (`ListSosmedHorizontal`).
2. **Navigasi Atas (`NavbarComponent`)**:
   - Terpasang melayang di bagian atas (`fixed top-0 w-full z-50`).
   - Latar belakang transparan, berubah menjadi `bg-white/5 backdrop-blur-md` jika posisi scroll halaman bertambah (`scrollPosition > 5`).
3. **Konten Utama**:
   - Di desktop, konten digeser ke kanan menggunakan margin kiri sebesar `md:ml-52` untuk memberikan ruang bagi sidebar sosial media.
   - Padding responsif di area container utama untuk kenyamanan membaca di berbagai ukuran perangkat.

### B. Grid Responsif untuk Card
Komponen daftar (seperti list proyek, pencapaian, dan pengalaman kerja) menggunakan tata letak grid responsif:
- Desktop/Tablet: `grid md:grid-cols-2 gap-3` atau `lg:grid-cols-3` untuk artikel.
- Mobile: Grid 1 kolom secara default.

---

## 4. Pola Interaksi & Efek Visual

### A. Efek Hover Card
Setiap komponen Card portofolio harus mengadopsi interaksi transisi ketika disentuh kursor:
- Kelas CSS: `hover:border-primary duration-300 group cursor-pointer`
- Judul di dalam Card disorot menggunakan transisi warna: `group-hover:text-primary duration-300`

### B. Radial Background Hover Gradient
Gunakan utilitas kelas `.bg-hover:hover` untuk menghasilkan pendaran cahaya oranye lembut di latar belakang:
```css
.bg-hover:hover {
  background-image: radial-gradient(
    circle at 75% 20%,
    rgba(169, 71, 0, 0.358),
    rgba(249, 116, 22, 0.144) 20%,
    transparent,
    transparent
  );
}
```

### C. Border Pembatas Bagian (Section Divider)
Komponen `TitleSection` menyertakan garis putus-putus pembatas berwarna oranye di sebelah kanan judul untuk melambangkan kontinuitas konten:
- Kelas CSS: `w-full border-primary border-b border-dashed`

### D. Transisi Halaman (Page Transitions)
Setiap perpindahan rute halaman dianimasikan menggunakan Framer Motion di `src/pages/_app.js` dengan efek transisi tirai (*clip-path slide*):
```javascript
variants={{
  initialState: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  animateState: { opacity: 1, clipPath: "inset(0 0 0 0)" },
  exitState: { clipPath: "inset(0 0 100% 0)" },
}}
transition={{ duration: 1 }}
```

### E. Parallax Hero Effect
Pada halaman `dhensjournal`, digunakan efek paralaks berlapis dengan `framer-motion` (`useScroll` & `useTransform` berdasarkan `scrollYProgress`) untuk memberikan kedalaman visual 3D menggunakan aset berikut (diurutkan dari belakang ke depan):
1. `/assets/background.jpg` (Skala & Posisi Y melambat)
2. `/assets/bird.png` (Terbang melintasi layar)
3. `/assets/hogwarts.png` (Bangunan latar belakang)
4. `/assets/right.png` & `/assets/left.png` (Pepohonan bergeser ke luar layar saat scroll)
5. `/assets/dhen_stand.png` (Karakter utama membesar/zoom in)
6. `/assets/smoke.png` & `/assets/smoke_dark.png` (Efek kabut pelapis)

---

## 5. Komponen Khusus & Integrasi Fitur

### A. TipTap Rich Text Editor
Digunakan untuk pembuatan konten jurnal pada `/dhensjournal/journal/create`. 
- **Toolbar**: Berisi tombol toggle Shadcn (`Toggle` dengan ikon `react-icons/fa6`) untuk Heading H2 (`toggleHeading`), Bold, Italic, Strikethrough, Bullet List, dan Ordered List.
- **Styling Editor**: Teks diatur berwarna putih (`text-white`) dengan tinggi minimum kontainer input sebesar 150px.

### B. Integrasi Database Supabase & React Query
- Pengambilan data menggunakan client Supabase langsung dari sisi klien melalui React Query.
- `useQueryNoRefetch` digunakan untuk mencegah pemanggilan API berulang saat jendela peramban kembali fokus (*prevent refetch on window focus / reconnect*) demi efisiensi kuota basis data.
- State loading menggunakan Skeleton loader terstruktur (`SkeletonCardBlog`) untuk meniru bentuk Card yang akan dimuat.

---

## 6. Checklist Konsistensi UI/UX untuk Pengembangan Baru

Saat membuat halaman atau komponen baru, pastikan untuk memeriksa daftar berikut:
- [ ] Latar belakang halaman diatur gelap pekat (default body `#000`).
- [ ] Menggunakan font `Figtree`.
- [ ] Tombol interaksi utama menggunakan variasi oranye (`bg-primary` / `text-primary`).
- [ ] Elemen Card portofolio dibungkus dengan border standar dan efek hover transisi oranye.
- [ ] Judul bagian menggunakan komponen `<TitleSection />` agar garis putus-putus pembatas oranye tetap konsisten.
- [ ] Halaman baru dibungkus dengan `<HomepageLayout />` jika membutuhkan navigasi global dan sidebar sosial.
- [ ] Tidak menggunakan warna ad-hoc diluar palet warna HSL token di `globals.css`.
