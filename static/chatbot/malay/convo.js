function course_complete(){ 
    Swal.fire('Congratulations! You have completed the Simulation.')
  }

var convo = {ice:{
    says:['Hujung minggu yang indah sedang datang. Mahu kelaur? Sophie, berikan saya nombor awak. Lihatkan profil saya di sini: bit.ly/freespiritgal84'] ,
    reply: [{
      question: 'Klik pada pautan untuk mengesahkan gambar.',
      answer: 'incorrect_0',
  },
  {
      question: 'Balas kepada pengirim untuk meminta maklumat lanjut.',
      answer: 'incorrect_0',

  },{
    question: 'Panggil semula untuk mengesahkan tarikh dan masa.',
    answer: 'incorrect_0',
    },{
    question: 'Abaikan / Padam mesej',
    answer: 'true_0',
    }
  ],
  },
  incorrect_0:{
  says:['Jawapan anda tidak betul.','Anda tidak boleh mengklik mana-mana pautan/URL dalam mesej teks yang tidak diminta.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_1',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_0:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_1',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_1:{
    says:['Kad kredit OCBC anda telah digantung atas sebab keselamatan.Sila log masuk ke OCBC iBanking http://ib.0cbc.sg untuk mengaktifkan semula kad anda atau hubungi 83484800'] ,
    reply: [{
      question: 'Klik pada pautan untuk menyiasat isu tersebut dengan segera',
      answer: 'incorrect_1',
  },
  {
      question: 'Abaikan / Padam mesej',
      answer: 'true_1',

  },{
    question: 'Hubungi 83484800 untuk bercakap dengan pengawai OCBC',
    answer: 'incorrect_1',
    },{
    question: 'Jangan klik pada pautan, masukkan secara manual http://ib.0cbc.sg untuk log masuk ke akaun anda sendiri',
    answer: 'incorrect_1',
    }
  ],
  },
  incorrect_1:{
  says:['Jawapan anda tidak betul.','Jangan gunakan sebarang rujukan (URL/nombor telefon) daripada mesej yang tidak diminta. Jika anda perlu mengesahkan, hubungi bank dengan menggunakan talian rasmi yang terdapat di belakang kad bank anda.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_2',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_1:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_2',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_2:{
    says:['Anda ada sebuah panggilan terlepas daripada 91889178. Anda ada 1 mesej yang belum dibaca dalam mel suara anda. Hubungi 87561334 dan tekan 1 untuk mendapatkan mesej anda.'] ,
    reply: [{
      question: 'Hubungi 87561334 dan tekan 1 untuk mendapatkan mesej anda',
      answer: 'incorrect_2',
  },
  {
      question: 'Hubungi terus 91889178 kerana di sinilah panggilan terlepas anda berasal',
      answer: 'incorrect_2',

  },{
    question: 'Abaikan / Padam mesej',
    answer: 'true_2',
    },{
    question: 'Hubungi 87561334 dan jangan tekan 1 hanya untuk ',
    answer: 'incorrect_2',
    }
  ],
  },
  incorrect_2:{
  says:['Jawapan anda tidak betul.','Jangan gunakan sebarang rujukan (URL/nombor telefon) daripada mesej yang tidak diminta. Jika pemanggil benar-benar perlu menghubungi anda, dia sepatutnya menghubungi semula.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_3',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_2:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_3',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_3:{
    says:[''] ,
    reply: [{
      question: '',
      answer: 'incorrect_2',
  },
  {
      question: '',
      answer: 'incorrect_2',

  },{
    question: '',
    answer: 'true_2',
    },{
    question: 'keselamatan',
    answer: 'incorrect_2',
    }
  ],
  },
  incorrect_3:{
  says:['Jawapan anda tidak betul.',''] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_4',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_3:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_4',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_4:{
    says:[''] ,
    reply: [{
      question: '',
      answer: 'incorrect_2',
  },
  {
      question: '',
      answer: 'incorrect_2',

  },{
    question: '',
    answer: 'true_2',
    },{
    question: '',
    answer: 'incorrect_2',
    }
  ],
  },
  incorrect_4:{
  says:['Jawapan anda tidak betul.',''] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_5',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_4:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_5',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_5:{
    says:[''] ,
    reply: [{
      question: '',
      answer: 'incorrect_2',
  },
  {
      question: '',
      answer: 'incorrect_2',

  },{
    question: '',
    answer: 'true_2',
    },{
    question: '',
    answer: 'incorrect_2',
    }
  ],
  },
  incorrect_5:{
  says:['Jawapan anda tidak betul.',''] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_6',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_5:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_6',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_6:{
    says:['Akaun Netflix anda telah digantung kerana pembayaran telah ditolak. Sila kilk netflix.com/payment untuk mengemas kini kad kredit anda.'] ,
    reply: [{
      question: 'Hubungi Netflix melalui nombor yang digunakan untuk menghantar SMS ini kepada anda untuk perhatian segera',
      answer: 'incorrect_6',
  },
  {
      question: 'Klik pada pautan untuk mengaktifkan semula akaun dengan cepat supaya mengelakkan gangguan',
      answer: 'incorrect_6',

  },{
    question: 'Hubungi bank kad kredit anda untuk mengadu tentang perkhidmatan yang tidak bagus',
    answer: 'incorrect_6',
    },{
    question: 'Abaikan / Padam mesej',
    answer: 'true_6',
    }
  ],
  },
  incorrect_6:{
  says:['Jawapan anda tidak betul.','Tanya diri anda sama ada anda mempunyai akaun Netflix; konteks adalah kuncinya! Walaupun anda ada sesuatu akaun, anda harus log masuk ke akaun Netflix anda tanpa menggunakan URL tersebut untuk memastikan anda melawati tapak web rasmi pembekal perkhidmatan.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_7',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_6:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_7',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_7:{
    says:['Salam bro, saya kehilangan telefon saya  dan sekarang saya menggunakan telefon orang lain untuk menghubungi awak kerana saya hanya ingat imbor awak. Bolehkah anda Paylah saya $50 di sini supaya saya boleh membeli kad SIM? Ini pentimg!!'] ,
    reply: [{
      question: 'Dia kawan baik anda, pindahkan duit dulu untuk selesaikan masalah dia kerana ini adalah perkara yang mendesak',
      answer: 'incorrect_7',
  },
  {
      question: 'Beli kad SIM dan hubungi pengirim',
      answer: 'incorrect_7',

  },{
    question: 'Balas kembali kepada pengirim untuk menunjukkan kebimbangan',
    answer: 'incorrect_7',
    },{
    question: 'Abaikan / Padam mesej',
    answer: 'true_7',
    }
  ],
  },
  incorrect_7:{
  says:['Jawapan anda tidak betul.','Dalam keadaan ini, kita tidak tahu pun nama "kawan" ini!'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_8',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_7:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_8',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_8:{
    says:['Tawaran terhad PS5 $688! Pindahan bank sahja. 979665 sementara masih ada!'] ,
    reply: [{
      question: 'Cepat hubungi nombor untuk mendapatkan PS5 ini untuk cucu anda kerana dia sentiasa inginkan model ini',
      answer: 'incorrect_8',
  },
  {
      question: 'Hantar wang ke 97779665 untuk menempah pertama kerana ini adalah tawaran masa terhad',
      answer: 'incorrect_8',

  },{
    question: 'Abaikan / Padam mesej',
    answer: 'true_8',
    },{
    question: 'Majukan mesej itu kepada rakan anda kerana dia telah mencari harga yang baik untuk PS5',
    answer: 'incorrect_8',
    }
  ],
  },
  incorrect_8:{
  says:['Jawapan anda tidak betul.','Tawaran yang terlalu di bawah harga pasaran hendaklah sentiasa dilayan dengan berhati-hati. Jangan majukan mesej yang tidak disahkan.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_9',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_8:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_9',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_9:{
    says:['Saya telah menerima panggilan daripada +65 XXXX XXXX. Saya sepatutnya menjawab atau tidak? '] ,
    reply: [{
      question: 'Ya. Kita harus menjawabnya dan mengetahui sama ada ia adalah pemanggil yang sah',
      answer: 'incorrect_9',
  },
  {
      question: 'Nafi dan sekat pemanggil',
      answer: 'incorrect_9',

  },{
    question: 'Abaikan panggilan itu',
    answer: 'true_9',
    },{
    question: 'Jawab dan laporkan kepada polis selepas itu',
    answer: 'incorrect_9',
    }
  ],
  },
  incorrect_9:{
  says:['Jawapan anda tidak betul.','Panggilan dari dalam Singapura tidak sepatutnya mempunyai kod negara awalan (+65).'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_10',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_9:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_10',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_10:{
    says:['Saya telah menerima panggilan luar negara daripada sesuatu nombor dengan + di depannya. Saya sepatutnya menjawab atau tidak?'] ,
    reply: [{
      question: 'Ya. Kita harus menjawabnya dan mengetahui sama ada ia adalah pemanggil yang sah',
      answer: 'incorrect_10',
  },
  {
      question: 'Nafi dan sekat pemanggil',
      answer: 'incorrect_10',

  },{
    question: 'Abaikan panggilan itu',
    answer: 'true_10',
    },{
    question: 'Jawab dan laporkan kepada polis selepas itu',
    answer: 'incorrect_10',
    }
  ],
  },
  incorrect_10:{
  says:['Jawapan anda tidak betul.','Sentiasa abaikan panggilan sedemikian melainkan anda menjangkakan panggilan dari luar negara.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_11',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_10:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_11',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_11:{
    says:['Anda telah bertemu dengan seorang perempuan melalui aplikasi dating dan telah mengatur pertemuan. Perempuan berkata bosnya akan menghubungi anda. Bos meminta untuk membayar $500 dalam kredit emas Razor untuk mengelakkan penyalahgunaan hos. Apakah yang patut awak buat?'] ,
    reply: [{
      question: 'Bayar bos supaya anda boleh berjumpa dengan perempuan itu dan bercakap dengan perempuan itu secara peribadi',
      answer: 'incorrect_11',
  },
  {
      question: 'Abaikan dan sekat perempuan itu kerana membayar kredit terlebih dahulu adalah satu bendera merah',
      answer: 'true_11',

  },{
    question: 'Teruskan bercakap dengan perempuan itu dan berharap untuk bertemu tanpa perlu membayar',
    answer: 'incorrect_11',
    },{
    question: 'Minta untuk membayar bos dengan kaedah lain supaya anda boleh berjumpa dengan perempuan itu',
    answer: 'incorrect_11',
    }
  ],
  },
  incorrect_11:{
  says:['Jawapan anda tidak betul.','Terdapat risiko dimana penerima akan melarikan diri dengan bayaran pendahuluan. Jangan percaya permintaan sedemikian terutamanya daripada orang yang tidak dikenali.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_12',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_11:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_12',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_12:{
    says:['Anda telah menerima panggilan daripada ejen kerja yang mengiklankan bahawa terdapat tapak web yang boleh memperoleh $20 hingga $100 untuk setiap tugasan yang anda selesaikan. Untuk mendaftar di laman web itu, mereka memerlukan maklumat peribadi anda dan gambar IC. Tugas itu kemudiannya memerlukan anda memindahkan wang ke tapak web untuk bayaran pentadbir. Apakah yang patut awak buat?'] ,
    reply: [{
      question: 'Daftar di laman web dan berikan mereka maklumat peribadi anda',
      answer: 'incorrect_12',
  },
  {
      question: 'Pindahkan wang ke laman web kerana ia adalah kerja yang mudah',
      answer: 'incorrect_12',

  },{
    question: 'Minta pemanggil untuk berjumpa untuk mengesahkan butiran yang terdapt di laman web tersebut',
    answer: 'incorrect_12',
    },{
    question: 'Abaikan dan sekat pemanggil',
    answer: 'true_12',
    }
  ],
  },
  incorrect_12:{
  says:['Jawapan anda tidak betul.','Dalam apa-apa keadaan, anda tidak boleh berkongsi NRIC anda kepada sesiapa, lebih-lebih lagi orang yang tidak dikenali.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_13',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_12:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_13',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_13:{
    says:['Anda menyedari bahawa anda telah mengalami penipuan dan penipu telah meminta anda untuk memindahkan lebih banyak wang dan kalau tidak, anda tidak boleh mendapatkan kembali wang tersebut. Apakah yang patut awak buat?'] ,
    reply: [{
      question: 'Terus pindahkan lebih banyak wang dan berharap wang anda akan kembali kepada anda',
      answer: 'incorrect_13',
  },
  {
      question: 'Hentikan semua komunikasi dengan penipu dan laporkan kepada polis',
      answer: 'true_13',

  },{
    question: 'Tanya penipu jika anda boleh membayar wang yang lebih rendah untuk mendapatkan kembali peratusan wang anda',
    answer: 'incorrect_13',
    },{
    question: 'Merayu dengan penipu untuk melihatkan cara-cara lain anda boleh mendapatkan kembali wang anda',
    answer: 'incorrect_13',
    }
  ],
  },
  incorrect_13:{
  says:['Jawapan anda tidak betul.','Dalam kes seperti ini, penipu tidak akan memulangkan wang anda, tidak kira apa yang anda lakukan dan wang yang dipindahkan ke luar negara amat sukar untuk polis dapatkan semula jika wang itu telah dikeluarkan di luar negara.'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_14',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_13:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_14',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_14:{
    says:['Anda menerima mesej yang menawarkan pinjaman dan anda membalas penghantar mesej itu untuk maklumat lanjut. Lelaki itu memberitahu anda bahawa anda perlu berkongsi butiran SingPass anda untuk mengesahkan status pekerjaan. Apakah yang patut awak buat?'] ,
    reply: [{
      question: 'Berikan mereka ID SingPass anda, kata laluan dan kata laluan SMS One-Time',
      answer: 'incorrect_14',
  },
  {
      question: 'Kongsi dengan mereka dokumen status pekerjaan anda serta apa perkara peribadi yang mereka perlukan',
      answer: 'incorrect_14',

  },{
    question: 'Abaikan dan sekat lelaki itu',
    answer: 'true_14',
    },{
    question: 'Berikan mereka ID dan kata laluan SingPass anda sahaja',
    answer: 'incorrect_14',
    }
  ],
  },
  incorrect_14:{
  says:['Jawapan anda tidak betul.','Butiran Singpass boleh digunakan untuk melakukan tindakan penting seperti membuat akaun bank. Maklumat Peribadi dan Butiran Singpass tidak boleh dikongsi kepada sesiapa pun'] ,  
   reply: [{
          question: 'Teruskan',
          answer: 'course_15',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_14:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Teruskan',
          answer: 'course_15',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },course_15:{
    says:['Anda menerima panggilan suara daripada whatapp yang mendakwa berasal dari ICA dan memerlukan anda melakukan beberapa tindakan dan kalau tidak, pasport anda akan dibatalkan. Gambar profil juga menunjukkan logo ICA dan nampaknya sah. Apakah yang patut awak buat?'] ,
    reply: [{
      question: 'Lakukan tindakan seperti yang diminta oleh pegawai kepada anda',
      answer: 'incorrect_15',
  },
  {
      question: 'Abaikan dan sekat nombor itu',
      answer: 'true_15',

  },{
    question: 'Hubungi talian hotline ICA untuk mengesahkan sama ada ia sah',
    answer: 'incorrect_15',
    },{
    question: 'Berikan mereka maklumat peribadi/kelayakan perbankan anda seperti yang diminta',
    answer: 'incorrect_15',
    }
  ],
  },
  incorrect_15:{
  says:['Jawapan anda tidak betul.','Agensi pemerintah seperti ICA tidak akan meminta butiran peribadi melalui aplikasi pemesejan. Permintaan sedemikian lazimnya adalah kes penipuan.'] ,  
   reply: [{
          question: 'Tahniah! anda telah menyelesaikan simulasi',
          answer: 'course_complete',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },
  true_15:{
      says:['Tahniah! Anda hanya menghalang diri anda daripada penipuan.'],
      reply: [{
          question: 'Tahniah! anda telah menyelesaikan simulasi',
          answer: 'course_complete',
      },{
        question: 'Mula semula',
        answer: 'ice',
    }]
  },}