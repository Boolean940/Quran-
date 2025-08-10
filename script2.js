  const surahs = [
    ["ٱلْفَاتِحَة", "Al-Fatihah", 7],
    ["ٱلْبَقَرَة", "Al-Baqarah", 286],
    ["آل عمران", "Aal-Imran", 200],
    ["ٱلنِّسَاء", "An-Nisa", 176],
    ["ٱلْمَائِدَة", "Al-Ma'idah", 120],
    ["ٱلْأَنْعَام", "Al-An'am", 165],
    ["ٱلْأَعْرَاف", "Al-A'raf", 206],
    ["ٱلْأَنْفَال", "Al-Anfal", 75],
    ["ٱلتَّوْبَة", "At-Tawbah", 129],
    ["يُونُس", "Yunus", 109],
    ["هُود", "Hud", 123],
    ["يُوسُف", "Yusuf", 111],
    ["ٱلرَّعْد", "Ar-Ra'd", 43],
    ["إِبْرَاهِيم", "Ibrahim", 52],
    ["ٱلْحِجْر", "Al-Hijr", 99],
    ["ٱلنَّحْل", "An-Nahl", 128],
    ["ٱلْإِسْرَاء", "Al-Isra", 111],
    ["ٱلْكَهْف", "Al-Kahf", 110],
    ["مَرْيَم", "Maryam", 98],
    ["طٰهٰ", "Ta-Ha", 135],
    ["ٱلْأَنْبِيَاء", "Al-Anbiya", 112],
    ["ٱلْحَجّ", "Al-Hajj", 78],
    ["ٱلْمُؤْمِنُون", "Al-Mu'minun", 118],
    ["ٱلنُّور", "An-Nur", 64],
    ["ٱلْفُرْقَان", "Al-Furqan", 77],
    ["ٱلشُّعَرَاء", "Ash-Shu'ara", 227],
    ["ٱلنَّمْل", "An-Naml", 93],
    ["ٱلْقَصَص", "Al-Qasas", 88],
    ["ٱلْعَنْكَبُوت", "Al-Ankabut", 69],
    ["ٱلرُّوم", "Ar-Rum", 60],
    ["لُقْمَان", "Luqman", 34],
    ["ٱلسَّجْدَة", "As-Sajdah", 30],
    ["ٱلْأَحْزَاب", "Al-Ahzab", 73],
    ["سَبَأ", "Saba", 54],
    ["فَاطِر", "Fatir", 45],
    ["يٰسٓ", "Ya-Sin", 83],
    ["ٱلصَّافَّات", "As-Saffat", 182],
    ["ص", "Sad", 88],
    ["ٱلزُّمَر", "Az-Zumar", 75],
    ["غَافِر", "Ghafir", 85],
    ["فُصِّلَت", "Fussilat", 54],
    ["ٱلشُّورىٰ", "Ash-Shura", 53],
    ["ٱلزُّخْرُف", "Az-Zukhruf", 89],
    ["ٱلدُّخَان", "Ad-Dukhan", 59],
    ["ٱلْجَاثِيَة", "Al-Jathiyah", 37],
    ["ٱلْأَحْقَاف", "Al-Ahqaf", 35],
    ["مُحَمَّد", "Muhammad", 38],
    ["ٱلْفَتْح", "Al-Fath", 29],
    ["ٱلْحُجُرَات", "Al-Hujurat", 18],
    ["ق", "Qaf", 45],
    ["ٱلذَّارِيَات", "Adh-Dhariyat", 60],
    ["ٱلطُّور", "At-Tur", 49],
    ["ٱلنَّجْم", "An-Najm", 62],
    ["ٱلْقَمَر", "Al-Qamar", 55],
    ["ٱلرَّحْمَٰن", "Ar-Rahman", 78],
    ["ٱلْوَاقِعَة", "Al-Waqi'ah", 96],
    ["ٱلْحَدِيد", "Al-Hadid", 29],
    ["ٱلْمُجَادِلَة", "Al-Mujadila", 22],
    ["ٱلْحَشْر", "Al-Hashr", 24],
    ["ٱلْمُمْتَحَنَة", "Al-Mumtahanah", 13],
    ["ٱلصَّفّ", "As-Saff", 14],
    ["ٱلْجُمُعَة", "Al-Jumu'ah", 11],
    ["ٱلْمُنَافِقُون", "Al-Munafiqun", 11],
    ["ٱلتَّغَابُن", "At-Taghabun", 18],
    ["ٱلطَّلَاق", "At-Talaq", 12],
    ["ٱلتَّحْرِيم", "At-Tahrim", 12],
    ["ٱلْمُلْك", "Al-Mulk", 30],
    ["ٱلْقَلَم", "Al-Qalam", 52],
    ["ٱلْحَاقَّة", "Al-Haqqah", 52],
    ["ٱلْمَعَارِج", "Al-Ma'arij", 44],
    ["نُوح", "Nuh", 28],
    ["ٱلْجِنّ", "Al-Jinn", 28],
    ["ٱلْمُزَّمِّل", "Al-Muzzammil", 20],
    ["ٱلْمُدَّثِّر", "Al-Muddaththir", 56],
    ["ٱلْقِيَامَة", "Al-Qiyamah", 40],
    ["ٱلْإِنسَان", "Al-Insan", 31],
    ["ٱلْمُرْسَلَات", "Al-Mursalat", 50],
    ["ٱلنَّبَأ", "An-Naba", 40],
    ["ٱلنَّازِعَات", "An-Nazi'at", 46],
    ["عَبَس", "Abasa", 42],
    ["ٱلتَّكْوِير", "At-Takwir", 29],
    ["ٱلْإِنفِطَار", "Al-Infitar", 19],
    ["ٱلْمُطَفِّفِين", "Al-Mutaffifin", 36],
    ["ٱلْإِنشِقَاق", "Al-Inshiqaq", 25],
    ["ٱلْبُرُوج", "Al-Buruj", 22],
    ["ٱلطَّارِق", "At-Tariq", 17],
    ["ٱلْأَعْلَى", "Al-A'la", 19],
    ["ٱلْغَاشِيَة", "Al-Ghashiyah", 26],
    ["ٱلْفَجْر", "Al-Fajr", 30],
    ["ٱلْبَلَد", "Al-Balad", 20],
    ["ٱلشَّمْس", "Ash-Shams", 15],
    ["ٱلَّيْل", "Al-Layl", 21],
    ["ٱلضُّحَىٰ", "Ad-Duhaa", 11],
    ["ٱلشَّرْح", "Ash-Sharh", 8],
    ["ٱلتِّين", "At-Tin", 8],
    ["ٱلْعَلَق", "Al-Alaq", 19],
    ["ٱلْقَدْر", "Al-Qadr", 5],
    ["ٱلْبَيِّنَة", "Al-Bayyina", 8],
    ["ٱلزَّلْزَلَة", "Az-Zalzalah", 8],
    ["ٱلْعَادِيَات", "Al-Adiyat", 11],
    ["ٱلْقَارِعَة", "Al-Qari'ah", 11],
    ["ٱلتَّكَاثُر", "At-Takathur", 8],
    ["ٱلْعَصْر", "Al-Asr", 3],
    ["ٱلْهُمَزَة", "Al-Humazah", 9],
    ["ٱلْفِيل", "Al-Fil", 5],
    ["قُرَيْش", "Quraysh", 4],
    ["ٱلْمَاعُون", "Al-Ma'un", 7],
    ["ٱلْكَوْثَر", "Al-Kawthar", 3],
    ["ٱلْكَافِرُون", "Al-Kafirun", 6],
    ["ٱلنَّصْر", "An-Nasr", 3],
    ["ٱلْمَسَد", "Al-Masad", 5],
    ["ٱلْإِخْلَاص", "Al-Ikhlas", 4],
    ["ٱلْفَلَق", "Al-Falaq", 5],
    ["ٱلنَّاس", "An-Nas", 6]
  ];

  const container = document.querySelector('.container');
  const popup = document.getElementById('popup');
  let currentTranslationsVisible = false;

  function renderSurahs() {
    container.innerHTML = '';
    surahs.forEach((surah, i) => {
      const box = document.createElement('div');
      box.className = 'surah-box';
      box.title = `${surah[0]} - ${surah[1]} (${surah[2]} آيات)`;
      box.onclick = () => showAyahs(i + 1, surah[0]);
      box.innerHTML = `
        <div>
          <div class="name">${surah[0]}</div>
          <div class="english-name">${surah[1]}</div>
          <div class="ayahs-count">عدد الآيات: ${surah[2]}</div>
        </div>
        <span class="number">${i + 1}</span>
      `;
      container.appendChild(box);
    });
  }

  function showAyahs(surahNumber, surahName) {
    popup.innerHTML = `<h2>جاري تحميل الآيات ...</h2>`;
    popup.style.display = 'block';
    currentTranslationsVisible = false;

    const urlArabic = `https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`;
    const urlEnglish = `https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`;

    Promise.all([
      fetch(urlArabic).then(res => res.json()),
      fetch(urlEnglish).then(res => res.json())
    ]).then(([arabicData, englishData]) => {
      if (arabicData.code !== 200 || englishData.code !== 200) {
        popup.innerHTML = `<h2>حدث خطأ أثناء تحميل الآيات</h2>`;
        return;
      }

      const ayahsArabic = arabicData.data.ayahs;
      const ayahsEnglish = englishData.data.ayahs;

      let content = `<h2>${surahName}</h2>`;
      content += `<button class="translate-btn" id="toggleTranslationBtn">عرض الترجمة / Show Translation</button>`;

      ayahsArabic.forEach((ayah, index) => {
        const translationText = ayahsEnglish[index]?.text || '';
        content += `
          <p class="ayah">${ayah.text} <sup>${ayah.numberInSurah}</sup></p>
          <p class="translation">${translationText}</p>
        `;
      });

      content += `<button class="close-btn" id="closePopupBtn">إغلاق</button>`;

      popup.innerHTML = content;

      document.getElementById('closePopupBtn').onclick = () => {
        popup.style.display = 'none';
      };

      const toggleBtn = document.getElementById('toggleTranslationBtn');
      toggleBtn.onclick = () => {
        currentTranslationsVisible = !currentTranslationsVisible;
        const translations = popup.querySelectorAll('.translation');
        translations.forEach(tr => {
          tr.style.display = currentTranslationsVisible ? 'block' : 'none';
        });
        toggleBtn.textContent = currentTranslationsVisible ? 'إخفاء الترجمة / Hide Translation' : 'عرض الترجمة / Show Translation';
      };
    }).catch(() => {
      popup.innerHTML = `<h2>حدث خطأ في الاتصال بالخادم</h2>`;
    });
  }

  renderSurahs();
