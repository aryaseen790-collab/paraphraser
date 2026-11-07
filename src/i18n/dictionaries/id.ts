import type { Dictionary } from "../types";

/** Indonesian. Keywords: humanize ai indonesia, ai humanizer gratis; parafrase online, parafrase, parafrase kalimat. */
export const id: Dictionary = {
  locale: "id",
  tool: {
    numberLocale: "id-ID",
    toolLabel: "Alat parafrase",
    styleLabel: "Gaya",
    outputLanguage: "Bahasa hasil",
    sameAsInput: "Sama dengan teks",
    yourText: "Teks kamu",
    rewrite: "Hasil",
    inputLabel: "Teks yang ingin diparafrase",
    placeholder: "Tempel atau ketik teks di sini, lalu tekan {action}.",
    wordCount: "{count} / {max} kata",
    outputWords: "{count} kata",
    edit: "Ubah",
    clear: "Hapus",
    clickToEdit: "Klik untuk mengubah",
    rewriting: "Sedang menulis ulang…",
    outputPlaceholder: "Teks hasil parafrase akan muncul di sini.",
    showChanges: "Tampilkan perubahan",
    copy: "Salin",
    copied: "Tersalin!",
    tipBefore: "Tips: tekan",
    ctrlKey: "Ctrl",
    tipAfter: "untuk {action}.",
    overLimit: "Persingkat teks kamu menjadi maksimal {max} kata.",
    actionHumanize: "Humanize",
    actionParaphrase: "Parafrase",
    busyHumanize: "Memproses…",
    busyParaphrase: "Memparafrase…",
    modes: {
      standard: { label: "Standar", hint: "Kata baru, makna sama" },
      humanize: { label: "Humanize", hint: "Alami, seperti tulisan manusia" },
      fluent: { label: "Lancar", hint: "Mengalir dan alami" },
      formal: { label: "Formal", hint: "Nada profesional" },
      simple: { label: "Sederhana", hint: "Mudah dibaca" },
      creative: { label: "Kreatif", hint: "Hidup dan ekspresif" },
      shorten: { label: "Ringkas", hint: "Lebih sedikit kata" },
      expand: { label: "Perluas", hint: "Lebih detail" },
    },
    errors: {
      generic: "Terjadi kesalahan. Coba lagi sebentar lagi.",
      invalid: "Permintaan tidak valid.",
      empty: "Masukkan teks yang ingin diparafrase.",
      tooManyWords: "Teks maksimal {max} kata.",
      tooManyChars: "Teks maksimal 12.000 karakter.",
      tooLarge: "Teks kamu terlalu panjang.",
      unknownMode: "Gaya tidak dikenal.",
      unknownLanguage: "Bahasa tidak dikenal.",
      rateLimited: "Kamu mengirim banyak permintaan dalam waktu singkat. Tunggu beberapa menit, lalu coba lagi.",
      botCheck: "Kami tidak bisa memverifikasi browser kamu. Muat ulang halaman, lalu coba lagi.",
      highDemand: "Permintaan sedang sangat tinggi. Coba lagi dalam beberapa menit.",
      refusal: "Teks ini tidak bisa diparafrase. Coba teks lain.",
      truncated: "Hasilnya terpotong. Coba dengan teks yang lebih pendek.",
      network: "Koneksi bermasalah. Periksa internet kamu, lalu coba lagi.",
      copyFailed: "Gagal menyalin otomatis. Pilih teks lalu salin secara manual.",
    },
  },
  chrome: {
    navHumanizer: "AI Humanizer",
    navParaphraser: "Parafrase",
    cta: "Humanize gratis",
    themeToggle: "Ganti mode gelap",
    languageMenu: "Bahasa",
    footerTagline:
      "OG artinya original. AI humanizer dan alat parafrase gratis yang membuat tulisanmu terdengar seperti kamu sendiri. Tanpa daftar, tanpa kuota kredit.",
    footerTools: "Alat",
    footerMore: "Informasi",
    about: "Tentang kami",
    privacy: "Kebijakan privasi",
    terms: "Ketentuan penggunaan",
    contact: "Kontak",
    footerNote: "Gunakan untuk tulisanmu sendiri dan selalu periksa hasilnya sebelum dikirim.",
    adLabel: "Iklan",
    facts: ["Tanpa daftar akun", "Hingga 1.000 kata sekali proses", "Delapan gaya penulisan", "Dua belas bahasa"],
    before: "Sebelum",
    after: "Sesudah",
    otherLanguages: "Bahasa lain",
    englishOnlyNote: "Halaman ini berbahasa Inggris.",
  },
  home: {
    title: "Humanize AI Bahasa Indonesia Gratis",
    description:
      "Humanize AI bahasa Indonesia secara gratis. AI humanizer kami mengubah teks kaku dari ChatGPT menjadi tulisan alami yang terdengar seperti kamu. Tanpa daftar.",
    eyebrow: "AI humanizer gratis · Tanpa daftar",
    h1: ["Humanize teks AI agar terdengar seperti ", "kamu", ""],
    intro:
      "Tempel draf yang terasa seperti hasil mesin produksi. OG Humanizer mengubah ritmenya, membuang kata-kata pengisi, dan mengganti frasa klise dengan bahasa yang jelas dan spesifik, tanpa mengubah fakta di dalamnya.",
    sections: [
      {
        label: "Gagasan",
        title: "Apa arti humanize teks AI?",
        lede: "Alat AI menulis dengan sangat lancar, dan justru di situlah masalahnya: kalimatnya benar, strukturnya rapi, tetapi hasilnya terasa hampa, seperti pidato yang ditulis untuk siapa saja.",
        paragraphs: [
          "Humanize teks AI berarti menutup jarak itu. Caranya, mengambil draf yang secara teknis benar lalu membuatnya terdengar seperti ditulis oleh orang yang punya sudut pandang: orang yang tahu kapan harus singkat, kapan perlu menjelaskan, dan kapan satu kata sederhana lebih kuat daripada tiga kata yang berbelit. Isinya tetap sama; yang berubah adalah cara menyampaikannya.",
          "Itulah fungsi AI humanizer kami. Pilih gaya Humanize, tempel draf kamu, dan dalam beberapa detik kamu mendapat versi dengan ritme yang lebih bervariasi, lebih sedikit frasa klise, dan jauh lebih sedikit basa-basi. Setelah itu, lakukan seperti editor yang baik: simpan bagian yang pas, kembalikan bagian yang lebih kamu sukai, dan tentukan sendiri versi akhirnya.",
        ],
      },
      {
        label: "Yang berubah",
        title: "Enam kebiasaan AI yang diperbaiki humanizer",
        lede: "Teks buatan AI biasanya punya kebiasaan yang sama. Satu per satu memang tidak parah, tetapi kalau digabung, langsung ketahuan.",
        cards: [
          {
            title: "Pembuka basa-basi",
            text: "“Di era digital yang serba cepat ini…”, “Penting untuk dicatat bahwa…”. Kalimat pemanasan yang tidak menyampaikan apa-apa.",
          },
          {
            title: "Ritme seperti metronom",
            text: "Kalimat dengan panjang yang hampir sama, semuanya rapi. Tulisan manusia kadang cepat, kadang lambat. Kadang panjang. Kadang pendek.",
          },
          {
            title: "Kosakata berlebihan",
            text: "Mengoptimalkan, sinergi, krusial, fundamental, signifikan. Terdengar penting, tapi isinya sedikit. Orang biasanya memilih kata yang lebih sederhana.",
          },
          {
            title: "Daftar tiga secara otomatis",
            text: "Efektif, efisien, dan menarik. Kalau setiap ide selalu datang bertiga, tulisan terasa seperti produksi massal.",
          },
          {
            title: "Kesimpulan wajib",
            text: "“Kesimpulannya…” lalu mengulang semua yang baru saja dibaca. Kebanyakan tulisan pendek lebih baik tanpa itu.",
          },
          {
            title: "Terlalu banyak keraguan",
            text: "“Berpotensi dapat membantu meningkatkan…”. Sedikit kehati-hatian itu jujur; ragu di setiap kalimat terdengar tidak yakin.",
          },
        ],
      },
      {
        label: "Contoh",
        title: "Sebelum dan sesudah: teks AI yang sudah di-humanize",
        examples: [
          {
            label: "Email",
            before:
              "Semoga email ini menemukan Anda dalam keadaan baik. Melalui email ini, kami ingin menginformasikan bahwa kami telah mengambil keputusan untuk menunda jadwal proyek. Kami sangat menghargai pengertian Anda dan berharap dapat terus melanjutkan kerja sama kita.",
            after:
              "Kami mau mengabarkan bahwa jadwal proyek kami mundurkan. Terima kasih atas kesabarannya, kami tetap semangat untuk terus bekerja sama.",
          },
          {
            label: "Blog",
            before:
              "Di era digital saat ini, manajemen waktu menjadi lebih penting dari sebelumnya. Dalam artikel ini, kita akan membahas secara mendalam lima strategi efektif yang dapat membantu Anda meningkatkan produktivitas.",
            after:
              "Mengatur waktu sekarang lebih sulit daripada dulu. Berikut lima strategi yang bisa membantu kamu menyelesaikan lebih banyak pekerjaan.",
          },
          {
            label: "Produk",
            before:
              "Botol minum stainless steel yang inovatif ini memadukan gaya dan fungsi dengan sempurna, menjaga minuman tetap dingin hingga 24 jam dengan desain kokoh dan anti bocor.",
            after: "Botol stainless yang keren dan bisa menjaga minuman tetap dingin sampai 24 jam. Dan tidak bocor.",
          },
        ],
      },
      {
        label: "Kegunaan",
        title: "Kapan AI humanizer paling membantu",
        cards: [
          {
            title: "Email dan pesan",
            text: "Kamu minta balasan yang sopan ke chatbot, tapi yang keluar malah seperti siaran pers. Humanize, dan pesannya kembali terdengar seperti kamu.",
          },
          {
            title: "Blog dan artikel",
            text: "AI cukup membantu untuk membuat kerangka, tetapi kurang pandai bercerita. Humanize tulisannya supaya pembaca bertahan lewat paragraf pertama.",
          },
          {
            title: "Surat lamaran kerja",
            text: "Perekrut membaca ratusan surat yang pembukaannya sama. Draf yang di-humanize memberi suratmu peluang, asalkan semua isinya benar.",
          },
          {
            title: "Tugas dan laporan",
            text: "Gunakan untuk merapikan draf milikmu sendiri agar lebih enak dibaca, dan ikuti aturan kampus soal penggunaan AI.",
          },
        ],
      },
      {
        label: "Terus terang",
        title: "Soal pendeteksi AI, kami jujur",
        paragraphs: [
          "Banyak situs humanizer menjanjikan teks yang “100% tidak terdeteksi”. Kami tidak, karena dua alasan. Pertama, pendeteksi AI tidak bisa diandalkan: hasilnya sering berbeda satu sama lain dan kerap menandai tulisan manusia, terutama tulisan orang yang menulis dalam bahasa kedua. Janji yang bergantung pada alat ukur serapuh itu tidak banyak artinya.",
          "Kedua, tujuannya seharusnya bukan untuk menipu siapa pun. Kalau kampus, klien, atau kantor meminta kamu mencantumkan penggunaan AI, cantumkan. Humanizer kami ada untuk membuat tulisanmu lebih jelas dan alami, dan itu tetap berharga, ada yang memeriksa ataupun tidak.",
        ],
      },
    ],
    faqLabel: "Pertanyaan",
    faqTitle: "Pertanyaan umum tentang AI humanizer",
    faq: [
      {
        q: "Apa itu humanize AI?",
        a: "Humanize AI berarti menulis ulang teks buatan mesin supaya terdengar seperti tulisan manusia: kalimat bervariasi, kata-kata sederhana, tanpa basa-basi, dan dengan nada yang pas untuk pembacanya. Idenya tetap; caranya yang berubah.",
      },
      {
        q: "Apakah AI humanizer ini gratis?",
        a: "Ya. Tanpa daftar, tanpa masa uji coba, dan tanpa kredit yang harus dibeli. Kamu bisa memproses hingga 1.000 kata sekali jalan, sesering yang kamu perlukan.",
      },
      {
        q: "Apakah bisa untuk bahasa Indonesia?",
        a: "Bisa. Tempel teks berbahasa Indonesia dan hasilnya tetap dalam bahasa Indonesia. Alat ini juga bisa dipakai untuk bahasa Inggris, Spanyol, Portugis, Prancis, Jerman, dan lainnya.",
      },
      {
        q: "Apakah hasilnya lolos pendeteksi AI?",
        a: "Kami tidak menjanjikan itu, dan sebaiknya waspada terhadap situs yang menjanjikannya. Pendeteksi AI tidak bisa diandalkan dan sering salah menilai tulisan manusia. Yang kami janjikan adalah teks yang enak dibaca.",
      },
      {
        q: "Apa bedanya humanize dengan parafrase?",
        a: "Parafrase mengganti kata-kata; humanize menggantinya dengan tujuan khusus, yaitu membuat tulisan tidak terdengar seperti mesin. Kalau kamu hanya butuh susunan kalimat baru, gunakan alat parafrase online kami.",
      },
      {
        q: "Apakah teks saya disimpan?",
        a: "Tidak dalam bentuk yang bisa dibaca dan tidak dikaitkan dengan kamu. Hasil bisa disimpan hingga tujuh hari agar permintaan yang sama muncul seketika. Jangan menempelkan kata sandi atau data pribadi.",
      },
    ],
    cta: {
      title: ["Tulisan yang terdengar seperti ", "kamu", "."],
      text: "Tempel draf, tekan Humanize, lalu baca lagi. Gratis, selalu, tanpa daftar.",
      button: "Humanize teks saya",
    },
  },
  paraphraser: {
    title: "Parafrase Online Gratis & Otomatis",
    description:
      "Parafrase online gratis untuk kalimat, paragraf, dan teks. Delapan gaya parafrase otomatis, dari formal hingga sederhana, dengan perubahan yang ditandai. Tanpa daftar.",
    eyebrow: "Parafrase gratis · Delapan gaya",
    h1: ["", "Parafrase online", " gratis dalam hitungan detik"],
    intro:
      "Tempel satu kalimat, satu paragraf, atau satu halaman penuh, pilih gaya, dan dapatkan versi baru dalam hitungan detik, lengkap dengan perubahan yang ditandai. Tanpa akun, tanpa kuota kredit, dan tanpa aplikasi tambahan.",
    sections: [
      {
        label: "Kenapa",
        title: "Parafrase: mengatakan hal yang sama dengan lebih baik",
        paragraphs: [
          "Parafrase adalah salah satu keterampilan menulis yang paling berguna: menyampaikan ide yang sama dengan kata-kata lain. Gunanya untuk menghindari pengulangan, menyesuaikan nada dengan pembaca, memenuhi batas jumlah kata, atau menjelaskan hal teknis kepada orang awam. Masalahnya, memparafrase tulisan sendiri itu sulit karena kamu sudah tahu maksudnya, sehingga bagian yang janggal sering terlewat.",
          "Alat parafrase memberimu versi kedua untuk dibandingkan. Kadang kamu memakainya apa adanya; lebih sering kamu mengambil separuhnya, mengembalikan satu-dua kata, dan akhirnya mendapat tulisan yang lebih baik dari keduanya. Itulah fungsinya: bukan menulis untukmu, melainkan menunjukkan cara lain untuk mengatakan hal yang sama.",
        ],
      },
      {
        label: "Gaya",
        title: "Delapan gaya parafrase kalimat",
        lede: "Setiap gaya adalah instruksi yang berbeda. Pilih yang paling cocok untuk pembacamu.",
        cards: [
          { title: "Standar", text: "Pilihan dasar: mengganti kata dan struktur dengan panjang dan nada yang mirip." },
          { title: "Humanize", text: "Untuk draf yang terdengar seperti mesin: ritme lebih hidup, lebih sedikit klise, kata lebih sederhana." },
          { title: "Lancar", text: "Memperbaiki kalimat janggal, kesalahan kecil, dan pengulangan agar teks mengalir." },
          { title: "Formal", text: "Untuk email kerja, lamaran, dan laporan: nada profesional tanpa bahasa gaul." },
          { title: "Sederhana", text: "Kata-kata pendek dan kalimat singkat agar siapa pun langsung paham." },
          { title: "Kreatif", text: "Bahasa yang lebih hidup untuk blog, media sosial, dan deskripsi produk." },
          { title: "Ringkas", text: "Memangkas sepertiga hingga separuh teks tanpa kehilangan poin utama." },
          { title: "Perluas", text: "Mengembangkan catatan atau jawaban yang terlalu singkat, tanpa menambah fakta baru." },
        ],
      },
      {
        label: "Contoh",
        title: "Contoh parafrase",
        examples: [
          {
            label: "Formal",
            before: "Eh, bisa kirim angkanya sebelum Jumat? Aku butuh buat laporan.",
            after: "Mohon kirimkan angkanya sebelum hari Jumat. Saya membutuhkannya untuk menyelesaikan laporan.",
          },
          {
            label: "Sederhana",
            before:
              "Obat ini harus dikonsumsi dua kali sehari, dengan ketentuan tidak timbul reaksi gastrointestinal yang merugikan.",
            after: "Minum obat ini dua kali sehari, selama perutmu tidak bermasalah.",
          },
          {
            label: "Ringkas",
            before:
              "Pada saat ini kami belum berada dalam posisi untuk dapat memberikan pengembalian dana atas barang yang telah Anda beli.",
            after: "Saat ini kami belum bisa mengembalikan dana pembelian Anda.",
          },
        ],
      },
      {
        label: "Tips",
        title: "Cara memparafrase kalimat dengan hasil lebih baik",
        cards: [
          {
            title: "Masukkan ide yang utuh",
            text: "Satu paragraf penuh memberi konteks dan menjaga hubungan antarkalimat. Kalimat tunggal tanpa konteks hasilnya cenderung datar.",
          },
          {
            title: "Pikirkan pembacanya",
            text: "Menulis ke atasan? Formal. Menjelaskan tagihan ke pelanggan? Sederhana. Gaya ditentukan oleh pembaca.",
          },
          {
            title: "Coba beberapa kali",
            text: "Setiap hasil sedikit berbeda. Kalau yang pertama hampir pas, tekan lagi atau coba gaya di sebelahnya.",
          },
          {
            title: "Cek nama dan angka",
            text: "Alat ini diinstruksikan untuk tidak mengubahnya, dan hampir selalu begitu, tetapi yang mengirim teks tetap kamu.",
          },
        ],
      },
      {
        label: "Pakai dengan jujur",
        title: "Parafrase tanpa plagiat",
        paragraphs: [
          "Kalimat yang sudah diparafrase tetap merupakan ide seseorang. Kalau idenya bukan milikmu, tetap harus dikutip, seberapa pun berbedanya kata-katanya. Memparafrase karya orang lain lalu mengakuinya sebagai milik sendiri adalah plagiat, dan situs ini tidak dibuat untuk itu. Gunakan untuk tulisanmu sendiri: draf, catatan, dan email.",
        ],
      },
    ],
    faqLabel: "Pertanyaan",
    faqTitle: "Pertanyaan umum tentang parafrase online",
    faq: [
      {
        q: "Apakah parafrase online ini gratis?",
        a: "Ya, sepenuhnya gratis. Tanpa daftar dan tanpa kuota harian. Setiap permintaan bisa sampai 1.000 kata.",
      },
      {
        q: "Apa itu parafrase?",
        a: "Parafrase adalah menyampaikan isi sebuah teks dengan kata-kata lain tanpa mengubah maknanya. Berguna untuk menghindari pengulangan, mengubah nada, atau meringkas.",
      },
      {
        q: "Apakah makna teks saya akan berubah?",
        a: "Alat ini diinstruksikan untuk mempertahankan makna, fakta, nama, dan angka, dan hasilnya bagus. Tetap baca ulang: kata yang diubah akan ditandai.",
      },
      {
        q: "Apakah bisa untuk parafrase jurnal atau tugas?",
        a: "Bisa untuk tulisanmu sendiri, selama kampus mengizinkan alat bantu menulis. Tetap cantumkan sumber untuk ide orang lain, karena parafrase tanpa sitasi tetap termasuk plagiat.",
      },
      {
        q: "Bahasa apa saja yang didukung?",
        a: "Bahasa Indonesia, Inggris, Spanyol, Portugis, Prancis, Jerman, dan lainnya. Kamu juga bisa memilih bahasa hasil yang berbeda untuk menerjemahkan sekaligus memparafrase.",
      },
    ],
    cta: {
      title: ["Draf berikutnya tinggal ", "satu klik", "."],
      text: "Tempel teks, pilih gaya, dan lihat cara lain untuk menyampaikannya. Gratis, selalu.",
      button: "Parafrase sekarang",
    },
  },
};
