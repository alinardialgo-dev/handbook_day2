
import React from 'react';
import { SlideContent } from './types';
import { 
  BookOpen, 
  Target, 
  Search, 
  Lightbulb, 
  Star, 
  Code, 
  Layout, 
  Calculator, 
  Puzzle, 
  Monitor, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  Zap,
  GraduationCap
} from 'lucide-react';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    title: "Tujuan Handbook",
    subtitle: "Mengapa Anda harus menguasai materi ini?",
    category: 'intro',
    points: [
      { label: "Kunci Keberhasilan Training Day 2", description: "Materi ini adalah landasan untuk sesi praktik simulasi presentasi di hadapan 'orang tua'.", icon: 'Target' },
      { label: "Membangun Kepercayaan Diri", description: "Memahami 'apa' yang dijual membuat Anda lebih tenang saat menghadapi pertanyaan kritis.", icon: 'ShieldCheck' },
      { label: "Peran Anda", description: "Bukan sekadar sales, Anda adalah Consultant Educator yang membantu masa depan anak.", icon: 'GraduationCap' }
    ]
  },
  {
    id: 2,
    title: "Gambaran Singkat Algonova",
    subtitle: "Digital School untuk Pemimpin Masa Depan",
    category: 'intro',
    points: [
      { label: "Bagian dari Algorithmics Global", description: "Jaringan pendidikan internasional di 90+ negara dengan kurikulum berstandar dunia.", icon: 'Star' },
      { label: "Positioning Kita", description: "Kita tidak hanya mengajar 'cara pakai alat', tapi 'cara berpikir logis & kreatif'.", icon: 'Target' },
      { label: "Fokus Utama", description: "Mengubah anak dari 'konsumen teknologi' menjadi 'pencipta teknologi'.", icon: 'Lightbulb' }
    ]
  },
  {
    id: 3,
    title: "Masalah Umum Anak & Orang Tua",
    subtitle: "Apa yang membuat mereka khawatir?",
    category: 'problem',
    points: [
      { label: "Kecanduan Gadget Pasif", description: "Anak hanya main game/nonton YouTube berjam-jam tanpa hasil nyata.", icon: 'Monitor' },
      { label: "Trauma Matematika", description: "Matematika dianggap membosankan, menakutkan, dan hanya soal hafalan rumus.", icon: 'Calculator' },
      { label: "Ketidakpastian Masa Depan", description: "Orang tua sadar dunia berubah, tapi sekolah tidak membekali skill digital yang cukup.", icon: 'Search' }
    ]
  },
  {
    id: 4,
    title: "Solusi Algonova (Big Picture)",
    subtitle: "Pendekatan Belajar Modern",
    category: 'solution',
    points: [
      { label: "Project-Based Learning", description: "Setiap teori langsung dipraktikkan menjadi karya nyata (game, web, aplikasi).", icon: 'Layout' },
      { label: "Gamifikasi & Fun", description: "Belajar terasa seperti bermain petualangan, menghilangkan rasa takut salah.", icon: 'Star' },
      { label: "Personalized Approach", description: "Setiap anak punya kecepatan belajar sendiri yang didukung oleh platform pintar.", icon: 'Target' }
    ]
  },
  {
    id: 5,
    title: "Benefit Utama Algonova",
    subtitle: "7 Alasan Kenapa Memilih Kami",
    category: 'solution',
    points: [
      { label: "Kurikulum Internasional", description: "Materi yang relevan dengan kebutuhan industri masa depan.", icon: 'Star' },
      { label: "Platform IT Canggih", description: "Akses materi & latihan 24/7 di mana saja.", icon: 'Monitor' },
      { label: "Soft Skill Development", description: "Melatih logika, kreativitas, dan public speaking.", icon: 'MessageSquare' },
      { label: "Project Portfolio", description: "Anak punya hasil karya nyata untuk ditunjukkan.", icon: 'Layout' },
      { label: "Mentor Berkualitas", description: "Dibimbing oleh pengajar yang dilatih secara profesional.", icon: 'ShieldCheck' },
      { label: "Komunitas Global", description: "Bisa berbagi karya dengan anak-anak dari seluruh dunia.", icon: 'Star' },
      { label: "Monitoring Orang Tua", description: "Laporan progres yang jelas dan transparan.", icon: 'Search' }
    ]
  },
  {
    id: 6,
    title: "Benefit Coding & Design",
    subtitle: "Membentuk Kreator Digital",
    category: 'coding',
    points: [
      { label: "Tujuan Belajar", description: "Menguasai bahasa masa depan: Logika Algoritma.", icon: 'Code' },
      { label: "Skill yang Didapat", description: "Computational thinking, 3D design, Python coding, Game development.", icon: 'Puzzle' },
      { label: "Dampak Jangka Panjang", description: "Anak terbiasa menyelesaikan masalah kompleks dengan cara yang sistematis.", icon: 'TrendingUp' }
    ]
  },
  {
    id: 7,
    title: "Struktur Course Coding & Design",
    subtitle: "Perjalanan Menuju Profesional",
    category: 'coding',
    points: [
      { label: "Level Pemula (Ages 5-7)", description: "Coding Knight: Logika dasar melalui visual blok yang seru.", icon: 'Star' },
      { label: "Level Menengah (Ages 8-12)", description: "Mars Academy & Graphic Design: Membuat proyek luar angkasa & aset visual.", icon: 'Layout' },
      { label: "Level Lanjut (Ages 12-17)", description: "Python Pro & Unity: Memasuki dunia profesional coding & VR development.", icon: 'Code' },
      { label: "Output Nyata", description: "Setiap level diakhiri dengan 'Final Project Presentation'.", icon: 'MessageSquare' }
    ]
  },
  {
    id: 8,
    title: "Benefit Math Program",
    subtitle: "Matematika Bukan Sekadar Hitung-Hitungan",
    category: 'math',
    points: [
      { label: "Pendekatan Visual", description: "Memahami 'mengapa' sebuah rumus ada, bukan cuma hafal 'cara pakai'.", icon: 'Search' },
      { label: "Berpikir Kritis", description: "Melatih otak untuk mencari solusi alternatif, bukan cuma satu jawaban benar.", icon: 'Lightbulb' },
      { label: "Bebas Stress", description: "Interaksi dengan karakter lucu & skenario menarik di dalam platform.", icon: 'Star' }
    ]
  },
  {
    id: 9,
    title: "Struktur Course Math",
    subtitle: "Fokus pada Pemahaman Konsep",
    category: 'math',
    points: [
      { label: "Kurikulum Adaptif", description: "Materi menyesuaikan dengan kemampuan anak saat itu juga.", icon: 'Puzzle' },
      { label: "Skenario Kehidupan Nyata", description: "Soal cerita yang berhubungan dengan keseharian agar terasa manfaatnya.", icon: 'Target' },
      { label: "Latihan Intensif", description: "Tugas cerdas yang otomatis mengevaluasi kelemahan anak.", icon: 'Zap' }
    ]
  },
  {
    id: 10,
    title: "Platform Belajar Algonova",
    subtitle: "Laboratorium Digital Anak",
    category: 'solution',
    points: [
      { label: "Smart Task", description: "Jika anak salah, platform memberikan petunjuk, bukan jawaban langsung.", icon: 'Zap' },
      { label: "Sosial & Kolaborasi", description: "Anak bisa melihat & memberi 'like' pada proyek teman di galeri global.", icon: 'MessageSquare' },
      { label: "Akses 24/7", description: "Belajar tidak terbatas di jam kelas saja, bisa dilanjutkan di rumah.", icon: 'Monitor' }
    ]
  },
  {
    id: 11,
    title: "Nilai Tambah untuk Orang Tua",
    subtitle: "Investasi yang Terukur",
    category: 'solution',
    points: [
      { label: "Laporan Berkala", description: "Feedback mendalam dari guru setelah sesi presentasi proyek.", icon: 'MessageSquare' },
      { label: "Transparansi Hasil", description: "Orang tua bisa melihat langsung game atau aplikasi buatan anak.", icon: 'Layout' },
      { label: "Pendampingan", description: "Kami membantu orang tua memahami minat dan bakat anak melalui teknologi.", icon: 'GraduationCap' }
    ]
  },
  {
    id: 12,
    title: "Talking Points untuk Praktik",
    subtitle: "Apa yang Harus Diucapkan?",
    category: 'closing',
    points: [
      { label: "The Shift", description: "'Daripada anak cuma main game seharian, di sini dia kita ajarkan cara bikin gamenya sendiri.'", icon: 'MessageSquare' },
      { label: "The Logic", description: "'Matematika di Algonova bukan soal cepat-cepatan hitung, tapi soal anak paham logika pemecahan masalah.'", icon: 'Calculator' },
      { label: "The Future", description: "'Digital skill sekarang bukan lagi pilihan, tapi kewajiban agar anak tidak tertinggal di masa depan.'", icon: 'TrendingUp' }
    ]
  },
  {
    id: 13,
    title: "Strategi Negosiasi",
    subtitle: "Problem → Solusi",
    category: 'closing',
    points: [
      { label: "Keluhan: 'Biayanya mahal'", description: "Fokus pada: Ini bukan les, tapi investasi skill masa depan (high return).", icon: 'ShieldCheck' },
      { label: "Keluhan: 'Anak sudah sibuk sekolah'", description: "Fokus pada: Belajar di sini justru refreshing karena metodenya seru & gamified.", icon: 'Star' },
      { label: "Keluhan: 'Anak saya belum bisa komputer'", description: "Fokus pada: Kita mulai dari paling dasar (visual blocks), tidak perlu pengalaman.", icon: 'GraduationCap' }
    ]
  },
  {
    id: 14,
    title: "3 Alasan Kuat Algonova",
    subtitle: "WAJIB DIINGAT!",
    category: 'closing',
    points: [
      { label: "Metodologi Global", description: "Teruji di jutaan anak di seluruh dunia (Algorithmics).", icon: 'Star' },
      { label: "Ekosistem Lengkap", description: "Mentor expert + Platform pintar + Komunitas global.", icon: 'Layout' },
      { label: "Hasil Nyata", description: "Anak punya portfolio karya, bukan cuma sertifikat kosong.", icon: 'Target' }
    ]
  },
  {
    id: 15,
    title: "Penutup & Mindset",
    subtitle: "Siap Menghadapi Training Day 2?",
    category: 'closing',
    points: [
      { label: "You are an Educator", description: "Niatkan untuk membantu masa depan anak tersebut.", icon: 'GraduationCap' },
      { label: "Listen First", description: "Dengarkan kekhawatiran orang tua sebelum memberikan solusi.", icon: 'Search' },
      { label: "Semangat!", description: "Keyakinan Anda pada value produk adalah 50% kemenangan negosiasi.", icon: 'Zap' }
    ]
  }
];

export const getIcon = (name?: string) => {
  switch (name) {
    case 'BookOpen': return <BookOpen className="w-6 h-6" />;
    case 'Target': return <Target className="w-6 h-6" />;
    case 'Search': return <Search className="w-6 h-6" />;
    case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
    case 'Star': return <Star className="w-6 h-6" />;
    case 'Code': return <Code className="w-6 h-6" />;
    case 'Layout': return <Layout className="w-6 h-6" />;
    case 'Calculator': return <Calculator className="w-6 h-6" />;
    case 'Puzzle': return <Puzzle className="w-6 h-6" />;
    case 'Monitor': return <Monitor className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    case 'MessageSquare': return <MessageSquare className="w-6 h-6" />;
    case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
    default: return <Star className="w-6 h-6" />;
  }
};
