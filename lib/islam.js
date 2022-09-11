const islam = (prefix, OwnerNumber) => { 
	return `╭───────────────────
│ *「 Islam Menu 」*
│
│ Owner: wa.me/${OwnerNumber}
├──────────────────
│➻ ${prefix}tahlil
│➻ ${prefix}iqra
│➻ ${prefix}quran
│➻ ${prefix}alquran
│➻ ${prefix}juzamma
│➻ ${prefix}hadist
│➻ ${prefix}listsurah
│➻ ${prefix}tafsirsurah
│➻ ${prefix}quransurah
│➻ ${prefix}quranaudio
│➻ ${prefix}niatsholat
│➻ ${prefix}doaharian
│➻ ${prefix}ayatkursi
│➻ ${prefix}kisahnabi
│➻ ${prefix}jadwalsholat
│➻ ${prefix}bacaansholat
│➻ ${prefix}asmaulhusna
╰──────────────────`
}
exports.islam = islam

// doa harian
const doaharian = (prefix) => {
return `=================
*Nama Doa :* Doa Sebelum Makan
*Arab :* اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ
*Latin :* Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar
*Translation :* Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka
=================
*Nama Doa :* Doa Sesudah Makan
*Arab :* اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ
*Latin :* Alhamdu lillaahil ladzii ath'amanaa wa saqoonaa wa ja'alnaa muslimiin
*Translation :* Segala puji bagi Allah yang telah memberi makan kami dan minuman kami, serta menjadikan kami sebagai orang-orang islam
=================
*Nama Doa :* Doa Sesudah  Minum
*Arab :* اَلْحَمْدُ ِللهِ الَّذِىْ جَعَلَهُ عَذْبًا فُرَاتًا بِرَحْمَتِهِ وَلَمْ يَجْعَلْهُ مِلْحًا اُجَاجًا بِذُنُوْبِنَا
*Latin :* Alhamdu lillaahil ladzi ja'alahuu 'adzbam furootam birohmatihii wa lamyaj'alhu milhan ujaajam bidzunuubinaa
*Translation :* Segala puji bagi Allah yang telah menjadikan air ini (minuman) segar dan menggiatkan dengan rahmat-Nya dan tidak menjadikan air ini (minuman) asin lagi pahit karena dosa-dosa kami
=================
*Nama Doa :* Doa Ketika Makan Lupa Membaca Doa
*Arab :* بِسْمِ اللهِ فِىِ أَوَّلِهِ وَآخِرِهِ
*Latin :* Bismillaahi fii awwalihi wa aakhirihi
*Translation :* Dengan menyebut nama Allah pada awal dan akhirnya
=================
*Nama Doa :* Doa Sebelum Tidur
*Arab :* بِسْمِكَ اللّٰهُمَّ اَحْيَا وَاَمُوْتُ
*Latin :* Bismikallohumma ahya wa amuutu
*Translation :* Dengan menyebut nama-Mu ya Allah, aku hidup dan aku mati
=================
*Nama Doa :* Doa Ketika Mimpi Buruk
*Arab :* اَللّٰهُمَّ إِنّىِ أَعُوْذُ بِكَ مِنْ عَمَلِ الشَّيْطَانِ وَسَيِّئاَتِ اْلأَحْلاَمِ
*Latin :* Allaahumma innii a'uudzubika min 'amalisy syaithaani wa sayyiaatil ahlami
*Translation :* Ya Allah, sesungguhnya aku mohon perlindungan kepada Engkau dari perbuatan setan dan dari mimpi-mimpi yang buruk
=================
*Nama Doa :* Doa Ketika Mendapat Mimpi Baik
*Arab :* اَلْحَمْدُ ِللهِ الَّذِيْ قَطْلَ الْحَاجَتِ
*Latin :* Alhamdulillahil ladzii qodzoo haajaati
*Translation :* Segala puji bagi Allah yang telah memberi hajatku
=================
*Nama Doa :* Doa Bangun Tidur
*Arab :* اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ
*Latin :* Alhamdu lillahil ladzii ahyaanaa ba'da maa amaa tanaa wa ilahin nusyuuru
*Translation :* Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan
=================
*Nama Doa :* Doa Masuk Kamar Mandi Atau Toilet
*Arab :* اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ
*Latin :* Alloohumma Innii a'uudzubika minal khubutsi wal khoaaitsi
*Translation :* Ya Allah, aku berlindung pada-Mu dari godaan syetan  laki-laki dan setan perempuan
=================
*Nama Doa :* Doa Istinja
*Arab :* اَللّٰهُمَّ حَسِّنْ فَرْجِىْ مِنَ الْفَوَاخِشِ وَظَهِّرْ قَلْبِيْ مِنَ النِّفَاقِ
*Latin :* Alloohumma thahhir qolbii minan nifaaqi wa hashshin fajrii minal fawaahisyi
*Translation :* Wahai Tuhanku, sucikanlah hatiku dari sifat kepura-puraan (munafiq) serta peliharalah kemaluanku dari perbuatan keji
=================
*Nama Doa :* Doa Keluar Kamar Mandi Atau Toilet
*Arab :* غُفْرَانَكَ الْحَمْدُ ِللهِ الَّذِىْ اَذْهَبَ عَنّى اْلاَذَى وَعَافَانِىْ
*Latin :* Ghufraanaka. Alhamdulillaahil ladzii adzhaba ‘annjil adzaa wa’aafaanii
*Translation :* Dengan mengharap ampunanMu, segala puji milik Allah yang telah menghilangkan kotoran dari badanku dan yang telah menyejahterakan
=================
*Nama Doa :* Doa Menjelang Sholat Shubuh
*Arab :* اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ
*Latin :* Alloohumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati
*Translation :* Ya Allah, Sesungguhnya aku berlindung kepada-Mu dari kesempitan dunia dan kesempitan hari kiamat. (HR. Abu Daud)
=================
*Nama Doa :* Doa Menyambut Pagi hari
*Arab :* اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ
*Latin :* Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru
*Translation :* Ya Allah, karena Engkau kami mengalami waktu pagi dan waktu petang, dan karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali
=================
*Nama Doa :* Doa Menyambut Sore Hari
*Arab :* اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ
*Latin :* Alloohumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir
*Translation :* Ya Allah, karena Engkau kami mengalami waktu petang dan waktu pagi, karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali
=================
*Nama Doa :* Doa Ketika Bercermin
*Arab :* اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ  فَحَسِّـنْ خُلُقِىْ
*Latin :* Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii
*Translation :* Segala puji bagi Allah, baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku
=================
*Nama Doa :* Doa Masuk Rumah
*Arab :* اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا
*Latin :* Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa
*Translation :* Ya Allah, sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk, dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakkal
=================
*Nama Doa :* Doa Keluar Rumah / Doa Bepergian
*Arab :* بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله
*Latin :* Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi
*Translation :* Dengan menyebut nama Allah aku bertawakal kepada Allah, tiada daya kekuatan melainkan dengan pertologan Allah
=================
*Nama Doa :* Doa Memakai Pakaian
*Arab :* بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ
*Latin :* Bismillaahi, Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu
*Translation :* Dengan nama-Mu yaa Allah akku minta kepada Engkau kebaikan pakaian ini dan kebaikan apa yang ada padanya, dan aku berlindung kepada Engkau dari kejahatan pakaian ini dan kejahatan yang ada padanya
=================
*Nama Doa :* Doa Memakai Pakaian Baru
*Arab :* اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ
*Latin :* Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin
*Translation :* Segala puji bagi Allah yang memberi aku pakaian ini dan memberi rizeki dengan tiada upaya dan kekuatan dariku
=================
*Nama Doa :* Doa Melepas Pakaian
*Arab :* بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ
*Latin :* Bismillaahil ladzii laa ilaaha illaa huwa
*Translation :* Dengan nama Allah yang tiada Tuhan selain-Nya
=================
*Nama Doa :* Doa Memohon Ilmu Yang Bermanfaat
*Arab :* اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً
*Latin :* Alloohumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan
*Translation :* Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik Diterima. (H.R. Ibnu Majah)
=================
*Nama Doa :* Doa Sebelum Belajar
*Arab :* يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا
*Latin :* Yaa robbi zidnii 'ilman warzuqnii fahmaa
*Translation :* Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman
=================
*Nama Doa :* Doa Sesudah Belajar
*Arab :* اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ
*Latin :* Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin
*Translation :* Ya Allah, sesungguhnya aku menitipkan kepada Engkau ilmu-ilmu yang telah Engkau ajarkan kepadaku, dan kembalikanlah kepadaku sewaktu aku butuh kembali dan janganlah Engkau lupakan aku kepada ilmu itu wahai Tuhan seru sekalian alam
=================
*Nama Doa :* Doa Berpergian
*Arab :* اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ
*Latin :* Alloohumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli
*Translation :* Ya Allah, mudahkanlah kami berpergian ini, dan dekatkanlah kejauhannya. Ya Allah yang menemani dalam berpergian, dan Engkau pula yang melindungi keluarga
=================
*Nama Doa :* Doa Naik Kendaraan
*Arab :* سُبْحَانَ الَّذِىْ سَخَّرَلَنَا هَذَا وَمَاكُنَّالَهُ مُقْرِنِيْنَ وَاِنَّآ اِلَى رَبِّنَا لَمُنْقَلِبُوْنَ
*Latin :* Subhaanalladzii sakkhara lanaa hadza wama kunna lahu muqriniin wa-inna ilaa rabbina lamunqalibuun.
*Translation :* Maha suci Allah yang telah menundukkan untuk kami (kendaraan) ini. padahal sebelumnya kami tidak mampu untuk menguasainya, dan hanya kepada-Mu lah kami akan kembali 
=================
*Nama Doa :* Doa Naik Kapal
*Arab :* بِسْمِ اللهِ مَجْرَهَا وَمُرْسَهَآاِنَّ رَبِّىْ لَغَفُوْرٌرَّحِيْمٌ
*Latin :* Bismillaahi majrahaa wa mursaahaa inna robbii laghofuurur rohiim
*Translation :* Dengan nama Allah yang menjalankan kendaraan ini berlayar dan berlabuh, sesungguhnya Tuhanku benar-benar Maha Pengampun lagi Maha Penyayang
=================
*Nama Doa :* Doa Ketika Sampai di Tempat Tujuan
*Arab :* اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ
*Latin :* Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi
*Translation :* Segala puji bagi Allah, yang telah menyelamatkan akau dan yang telah melindungiku dan yang mengumpulkanku dengan keluargaku
=================
*Nama Doa :* Doa Ketika Menuju Masjid
*Arab :* اَللّٰهُمَّ اجْعَلْ فِىْ قَلْبِى نُوْرًا وَفِى لِسَانِىْ نُوْرًا وَفِىْ بَصَرِىْ نُوْرًا وَفِىْ سَمْعِىْ نُوْرًا وَعَنْ يَسَارِىْ نُوْرًا وَعَنْ يَمِيْنِىْ نُوْرًا وَفَوْقِىْ نُوْرًا وَتَحْتِىْ نُوْرًا وَاَمَامِىْ نُوْرًا وَخَلْفِىْ نُوْرًا وَاجْعَلْ لِّىْ نُوْرًا
*Latin :* Alloohummaj-'al fii qolbhii nuuroon wa fii lisaanii nuuroon wa fii bashorii nuuroon wa fii sam'ii nuuroon wa'an yamiinii nuuroon wa'an yasaarii nuuroon wa fauqii nuuroo wa tahtii nuuroo wa amaamii nuuroon wa khofii nuuroon waj-'al lii nuuroon
*Translation :* Ya Allah, jadikanlah dihatiku cahaya, pada lisanku cahaya dipandanganku cahaya, dalam pendengaranku cahaya, dari kananku cahaya, dari kiriku cahaya, dari atasku cahaya, dari bawahku cahaya, dari depanku cahaya, belakangku cahaya, dan jadikanlah untukku cahaya (H.R. Bukhari dan Muslim)
=================
*Nama Doa :* Doa Masuk Masjid
*Arab :* اَللّٰهُمَّ افْتَحْ لِيْ اَبْوَابَ رَحْمَتِكَ
*Latin :* Allahummaf tahlii abwaaba rohmatik
*Translation :* Ya Allah, bukalah untukku pintu-pintu rahmat-Mu
=================
*Nama Doa :* Doa Keluar Masjid
*Arab :* اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ فَضْلِكَ
*Latin :* Allahumma innii asaluka min fadlik
*Translation :* Ya Allah, sesungguhnya aku memohon keutamaan dari-Mu
=================
*Nama Doa :* Doa Akan Membaca Al-Qur'an
*Arab :* اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ
*Latin :* Alloohummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi
*Translation :* Ya Allah bukakanlah hikmahMu padaku, bentangkanlah rahmatMu padaku dan ingatkanlah aku terhadap apa yang aku lupa, wahai Dzat yang memiliki keagungan dan kemuliaan
=================
*Nama Doa :* Doa Setelah Membaca Al-Qur'an
*Arab :* اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ
*Latin :* Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.
*Translation :* Ya Allah, rahmatilah aku dengan Al-Quran yang agung, jadikanlah ia bagiku ikutan cahaya petunjuk rahmat. Ya Allah, ingatkanlah apa yang telah aku lupa dan ajarkan kepadaku apa yang tidak aku ketahui darinya, anugerahkanlah padaku kesempatan membacanya pada sebagian malam dan siang, jadikanlah ia hujjah yang kuat bagiku, wahai Tuhan seru sekalian alam
=================
*Nama Doa :* Doa Niat Wudhu
*Arab :* نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى
*Latin :* Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa
*Translation :* Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala
=================
*Nama Doa :* Doa Setelah Wudhu
*Arab :* اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ
*Latin :* Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina
*Translation :* Aku bersaksi, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah, jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh
=================
*Nama Doa :* Doa akan Mandi
*Arab :* اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ
*Latin :* Alloohummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii
*Translation :* Ya Allah ampunilah dosa kesalahanku dan berilah keluasaan di rumahku serta berkahilah pada rezekiku
=================
`
}
exports.doaharian = doaharian

// ayat kursi
const ayatkursi = (prefix) => {
return `➸ *Arab :* اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ  لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ
*➸ Latin :* Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.
*➸ Arti :* Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun tentang ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi, Mahabesar.
*➸ Tafsir :* Allah adalah Tuhan Yang Maha Esa, tidak ada tuhan selain Dia, dan hanya Dia yang berhak untuk disembah. Adapun tuhan-tuhan yang lain yang disembah oleh sebagian manusia dengan alasan yang tidak benar, memang banyak jumlahnya. Akan tetapi Tuhan yang sebenarnya hanyalah Allah. Hanya Dialah Yang hidup abadi, yang ada dengan sendiri-Nya, dan Dia pulalah yang selalu mengatur makhluk-Nya tanpa ada kelalaian sedikit pun.

Kemudian ditegaskan lagi bahwa Allah tidak pernah mengantuk. Orang yang berada dalam keadaan mengantuk tentu hilang kesadarannya, sehingga dia tidak akan dapat melakukan pekerjaannya dengan baik, padahal Allah swt senantiasa mengurus dan memelihara makhluk-Nya dengan baik, tidak pernah kehilangan kesadaran atau pun lalai.

Karena Allah tidak pernah mengantuk, sudah tentu Dia tidak pernah tidur, karena mengantuk adalah permulaan dari proses tidur. Orang yang tidur lebih banyak kehilangan kesadaran daripada orang yang mengantuk.

Sifat Allah yang lain yang disebutkan dalam ayat ini ialah bahwa Dialah yang mempunyai kekuasaan dan yang memiliki apa yang ada di langit dan di bumi. Dialah yang mempunyai kekuatan dan kekuasaan yang tak terbatas, sehingga Dia dapat berbuat apa yang dikehendaki-Nya. Semuanya ada dalam kekuasaan-Nya, sehingga tidak ada satu pun dari makhluk-Nya termasuk para nabi dan para malaikat yang dapat memberikan pertolongan kecuali dengan izin-Nya, apalagi patung-patung yang oleh orang-orang kafir dianggap sebagai penolong mereka.

Yang dimaksud dengan "pertolongan" atau "syafaat" dalam ayat ini ialah pertolongan yang diberikan oleh para malaikat, nabi dan orang-orang saleh kepada umat manusia pada hari kiamat untuk mendapatkan keringanan atau kebebasan dari hukuman Allah. Syafaat itu akan terjadi atas izin Allah. Dalam hadis disebutkan :

Nabi Saw bersabda, "¦Kemudian Allah berfirman, "Para Malaikat memberikan syafaat, para Nabi memberikan syafaat, dan orang-orang mukmin juga memberikan syafaat. (Riwayat Ahmad dan Muslim dari Abu Sa'id al-Khudri)

Sifat Allah yang lain yang disebutkan dalam ayat ini ialah: bahwa Allah senantiasa mengetahui apa saja yang terjadi di hadapan dan di belakang makhluk-Nya, sedang mereka tidak mengetahui sesuatu pun dari ilmu Allah, melainkan sekadar apa yang dikehendaki-Nya untuk mereka ketahui. Kursi Allah mencakup langit dan bumi. Allah tidak merasa berat sedikit pun dalam memelihara makhluk-Nya yang berada di langit dan di bumi, dan di semua alam ciptaan-Nya. Allah Mahatinggi lagi Mahabesar.

Mereka tidak mengetahui ilmu Allah, kecuali apa yang telah dikehendaki-Nya untuk mereka ketahui. Dengan demikian, yang dapat diketahui oleh manusia hanyalah sekadar apa yang dapat dijangkau oleh pengetahuan yang telah dikaruniakan Allah kepada mereka, dan jumlahnya amat sedikit dibanding dengan ilmu-Nya yang luas. Hal ini ditegaskan Allah dalam firman-Nya:

"¦ Sedangkan kamu diberi pengetahuan hanya sedikit." (al-Isra'/17:85)
`
}
exports.ayatkursi = ayatkursi

// niat sholat
const niatsholat = (prefix) => {
return `=================
*Sholat :* Niat Sholat Subuh
*Arab :* اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Latin :* Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala
*Terjemah :* Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala
=================
*Sholat :* Niat Sholat Dzuhur
*Arab :* اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Latin :* Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala
*Terjemah :* Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala
=================
*Sholat :* Niat Sholat Ashar
*Arab :* اُصَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Latin :* Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala
*Terjemah :* Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala
=================
*Sholat :* Niat Sholat Maghrib
*Arab :* اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Latin :* Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala
*Terjemah :* Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala
=================
*Sholat :* Niat Sholat Isya
*Arab :* اُصَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Latin :* Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala
*Terjemah :* Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala
=================
`
}
exports.niatsholat = niatsholat

// bacaan sholat
const bacaansholat = (prefix) => {
return `=================
*Bacaan :* Bacaan Iftitah
*Arab :* اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ
*Latin :* Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin
*Terjemah :* Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri
=================
*Bacaan :* Al Fatihah
*Arab :* بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧
*Latin :* 1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin
*Terjemah :* 1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat
=================
*Bacaan :* Bacaan Ruku
*Arab :* (3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ
*Latin :* Subhana Rabbiyal Adzimi Wabihamdih (3x)
*Terjemah :* Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya
=================
*Bacaan :* Bacaan Sujud
*Arab :* (3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ
*Latin :* Subhaana robbiyal a'la wabihamdih (3x)
*Terjemah :* Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya
=================
*Bacaan :* Bacaan Duduk Diantara Dua Sujud
*Arab :* رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ
*Latin :* Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii
*Terjemah :* Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku
=================
*Bacaan :* Duduk Tasyahud Awal
*Arab :* اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ
*Latin :* Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad
*Terjemah :* Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad
=================
*Bacaan :* Duduk Tasyahud Akhir
*Arab :* اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ
*Latin :* Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid
*Terjemah :* Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung
=================
*Bacaan :* Salam
*Arab :* اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
*Latin :* Assalamualaikum Warohmatullahi Wabarokatuh
*Terjemah :* Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian.
=================
`
}
exports.bacaansholat = bacaansholat

// asmaulhusna
const asmaulhusna = (prefix) => {
return `=================
*Nomor:* : 1
*Latin :* Ar Rahman
*Arab :* الرَّحْمَنُ
*Translate Indo :* Yang Memiliki Mutlak sifat Pemurah
*Translate English :* The All Beneficent
=================
*Nomor:* : 2
*Latin :* Ar Rahiim
*Arab :* الرَّحِيمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Penyayang
*Translate English :* The Most Merciful
=================
*Nomor:* : 3
*Latin :* Al Malik
*Arab :* الْمَلِكُ
*Translate Indo :* Yang Memiliki Mutlak sifat Merajai/Memerintah
*Translate English :* The King, The Sovereign
=================
*Nomor:* : 4
*Latin :* Al Quddus
*Arab :* الْقُدُّوسُ
*Translate Indo :* Yang Memiliki Mutlak sifat Suci
*Translate English :* The Most Holy
=================
*Nomor:* : 5
*Latin :* As Salaam
*Arab :* السَّلاَمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Memberi Kesejahteraan
*Translate English :* Peace and Blessing
=================
*Nomor:* : 6
*Latin :* Al Mu’min
*Arab :* الْمُؤْمِنُ
*Translate Indo :* Yang Memiliki Mutlak sifat Memberi Keamanan
*Translate English :* The Guarantor
=================
*Nomor:* : 7
*Latin :* Al Muhaimin
*Arab :* الْمُهَيْمِنُ
*Translate Indo :* Yang Memiliki Mutlak sifat Pemelihara
*Translate English :* The Guardian, the Preserver
=================
*Nomor:* : 8
*Latin :* Al ‘Aziiz
*Arab :* الْعَزِيزُ
*Translate Indo :* Yang Memiliki Mutlak Kegagahan
*Translate English :* The Almighty, the Self Sufficient
=================
*Nomor:* : 9
*Latin :* Al Jabbar
*Arab :* الْجَبَّارُ
*Translate Indo :* Yang Memiliki Mutlak sifat Perkasa
*Translate English :* The Powerful, the Irresistible
=================
*Nomor:* : 10
*Latin :* Al Mutakabbir
*Arab :* الْمُتَكَبِّرُ
*Translate Indo :* Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran
*Translate English :* The Tremendous
=================
*Nomor:* : 11
*Latin :* Al Khaliq
*Arab :* الْخَالِقُ
*Translate Indo :* Yang Memiliki Mutlak sifat Pencipta
*Translate English :* The Creator
=================
*Nomor:* : 12
*Latin :* Al Baari’
*Arab :* الْبَارِئُ
*Translate Indo :* Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)
*Translate English :* The Maker
=================
*Nomor:* : 13
*Latin :* Al Mushawwir
*Arab :* الْمُصَوِّرُ
*Translate Indo :* Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)
*Translate English :* The Fashioner of Forms
=================
*Nomor:* : 14
*Latin :* Al Ghaffaar
*Arab :* الْغَفَّارُ
*Translate Indo :* Yang Memiliki Mutlak sifat Pengampun
*Translate English :* The Ever Forgiving
=================
*Nomor:* : 15
*Latin :* Al Qahhaar
*Arab :* الْقَهَّارُ
*Translate Indo :* Yang Memiliki Mutlak sifat Memaksa
*Translate English :* The All Compelling Subduer
=================
*Nomor:* : 16
*Latin :* Al Wahhaab
*Arab :* الْوَهَّابُ
*Translate Indo :* Yang Memiliki Mutlak sifat Pemberi Karunia
*Translate English :* The Bestower
=================
*Nomor:* : 17
*Latin :* Ar Razzaaq
*Arab :* الرَّزَّاقُ
*Translate Indo :* Yang Memiliki Mutlak sifat Pemberi Rejeki
*Translate English :* The Ever Providing
=================
*Nomor:* : 18
*Latin :* Al Fattaah
*Arab :* الْفَتَّاحُ
*Translate Indo :* Yang Memiliki Mutlak sifat Pembuka Rahmat
*Translate English :* The Opener, the Victory Giver
=================
*Nomor:* : 19
*Latin :* Al ‘Aliim
*Arab :* اَلْعَلِيْمُ
*Translate Indo :* Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)
*Translate English :* The All Knowing, the Omniscient
=================
*Nomor:* : 20
*Latin :* Al Qaabidh
*Arab :* الْقَابِضُ
*Translate Indo :* Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)
*Translate English :* The Restrainer, the Straightener
=================
*Nomor:* : 21
*Latin :* Al Baasith
*Arab :* الْبَاسِطُ
*Translate Indo :* Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)
*Translate English :* The Expander, the Munificent
=================
*Nomor:* : 22
*Latin :* Al Khaafidh
*Arab :* الْخَافِضُ
*Translate Indo :* Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)
*Translate English :* The Abaser
=================
*Nomor:* : 23
*Latin :* Ar Raafi’
*Arab :* الرَّافِعُ
*Translate Indo :* Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)
*Translate English :* The Exalter
=================
*Nomor:* : 24
*Latin :* Al Mu’izz
*Arab :* الْمُعِزُّ
*Translate Indo :* Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)
*Translate English :* The Giver of Honor
=================
*Nomor:* : 25
*Latin :* Al Mudzil
*Arab :* المُذِلُّ
*Translate Indo :* Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)
*Translate English :* The Giver of Dishonor
=================
*Nomor:* : 26
*Latin :* Al Samii’
*Arab :* السَّمِيعُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mendengar
*Translate English :* The All Hearing
=================
*Nomor:* : 27
*Latin :* Al Bashiir
*Arab :* الْبَصِيرُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Melihat
*Translate English :* The All Seeing
=================
*Nomor:* : 28
*Latin :* Al Hakam
*Arab :* الْحَكَمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Menetapkan
*Translate English :* The Judge, the Arbitrator
=================
*Nomor:* : 29
*Latin :* Al ‘Adl
*Arab :* الْعَدْلُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Adil
*Translate English :* The Utterly Just
=================
*Nomor:* : 30
*Latin :* Al Lathiif
*Arab :* اللَّطِيفُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Lembut
*Translate English :* The Subtly Kind
=================
*Nomor:* : 31
*Latin :* Al Khabiir
*Arab :* الْخَبِيرُ
*Translate Indo :* Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia
*Translate English :* The All Aware
=================
*Nomor:* : 32
*Latin :* Al Haliim
*Arab :* الْحَلِيمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Penyantun
*Translate English :* The Forbearing, the Indulgent
=================
*Nomor:* : 33
*Latin :* Al ‘Azhiim
*Arab :* الْعَظِيمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Agung
*Translate English :* The Magnificent, the Infinite
=================
*Nomor:* : 34
*Latin :* Al Ghafuur
*Arab :* الْغَفُورُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pengampun
*Translate English :* The All Forgiving
=================
*Nomor:* : 35
*Latin :* As Syakuur
*Arab :* الشَّكُورُ
*Translate Indo :* Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)
*Translate English :* The Grateful
=================
*Nomor:* : 36
*Latin :* Al ‘Aliy
*Arab :* الْعَلِيُّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Tinggi
*Translate English :* The Sublimely Exalted
=================
*Nomor:* : 37
*Latin :* Al Kabiir
*Arab :* الْكَبِيرُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Besar
*Translate English :* The Great
=================
*Nomor:* : 38
*Latin :* Al Hafizh
*Arab :* الْحَفِيظُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Menjaga
*Translate English :* The Preserver
=================
*Nomor:* : 39
*Latin :* Al Muqiit
*Arab :* المُقيِت
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan
*Translate English :* The Nourisher
=================
*Nomor:* : 40
*Latin :* Al Hasiib
*Arab :* الْحسِيبُ
*Translate Indo :* Yang Memiliki Mutlak sifat MahaMembuat Perhitungan
*Translate English :* The Reckoner
=================
*Nomor:* : 41
*Latin :* Al Jaliil
*Arab :* الْجَلِيلُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mulia
*Translate English :* The Majestic
=================
*Nomor:* : 42
*Latin :* Al Kariim
*Arab :* الْكَرِيمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pemurah
*Translate English :* The Bountiful, the Generous
=================
*Nomor:* : 43
*Latin :* Ar Raqiib
*Arab :* الرَّقِيبُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mengawasi
*Translate English :* The Watchful
=================
*Nomor:* : 44
*Latin :* Al Mujiib
*Arab :* الْمُجِيبُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mengabulkan
*Translate English :* The Responsive, the Answerer
=================
*Nomor:* : 45
*Latin :* Al Waasi’
*Arab :* الْوَاسِعُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Luas
*Translate English :* The Vast, the All Encompassing
=================
*Nomor:* : 46
*Latin :* Al Hakiim
*Arab :* الْحَكِيمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maka Bijaksana
*Translate English :* The Wise
=================
*Nomor:* : 47
*Latin :* Al Waduud
*Arab :* الْوَدُودُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pencinta
*Translate English :* The Loving, the Kind One
=================
*Nomor:* : 48
*Latin :* Al Majiid
*Arab :* الْمَجِيدُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mulia
*Translate English :* The All Glorious
=================
*Nomor:* : 49
*Latin :* Al Baa’its
*Arab :* الْبَاعِثُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Membangkitkan
*Translate English :* The Raiser of the Dead
=================
*Nomor:* : 50
*Latin :* As Syahiid
*Arab :* الشَّهِيدُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Menyaksikan
*Translate English :* The Witness
=================
*Nomor:* : 51
*Latin :* Al Haqq
*Arab :* الْحَقُّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Benar
*Translate English :* The Truth, the Real
=================
*Nomor:* : 52
*Latin :* Al Wakiil
*Arab :* الْوَكِيلُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Memelihara
*Translate English :* The Trustee, the Dependable
=================
*Nomor:* : 53
*Latin :* Al Qawiyyu
*Arab :* الْقَوِيُّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Kuat
*Translate English :* The Strong
=================
*Nomor:* : 54
*Latin :* Al Matiin
*Arab :* الْمَتِينُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Kokoh
*Translate English :* The Firm, the Steadfast
=================
*Nomor:* : 55
*Latin :* Al Waliyy
*Arab :* الْوَلِيُّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Melindungi
*Translate English :* The Protecting Friend, Patron, and Helper
=================
*Nomor:* : 56
*Latin :* Al Hamiid
*Arab :* الْحَمِيدُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Terpuji
*Translate English :* The All Praiseworthy
=================
*Nomor:* : 57
*Latin :* Al Mushii
*Arab :* الْمُحْصِي
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mengkalkulasi
*Translate English :* The Accounter, the Numberer of All
=================
*Nomor:* : 58
*Latin :* Al Mubdi’
*Arab :* الْمُبْدِئُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Memulai
*Translate English :* The Producer, Originator, and Initiator of all
=================
*Nomor:* : 59
*Latin :* Al Mu’iid
*Arab :* الْمُعِيدُ
*Translate Indo :* Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan
*Translate English :* The Reinstater Who Brings Back All
=================
*Nomor:* : 60
*Latin :* Al Muhyii
*Arab :* الْمُحْيِي
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Menghidupkan
*Translate English :* The Giver of Life
=================
*Nomor:* : 61
*Latin :* Al Mumiitu
*Arab :* اَلْمُمِيتُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mematikan
*Translate English :* The Bringer of Death, the Destroyer
=================
*Nomor:* : 62
*Latin :* Al Hayyu
*Arab :* الْحَيُّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Hidup
*Translate English :* The Ever Living
=================
*Nomor:* : 63
*Latin :* Al Qayyuum
*Arab :* الْقَيُّومُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mandiri
*Translate English :* The Self Subsisting Sustainer of All
=================
*Nomor:* : 64
*Latin :* Al Waajid
*Arab :* الْوَاجِدُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Penemu
*Translate English :* The Perceiver, the Finder, the Unfailing
=================
*Nomor:* : 65
*Latin :* Al Maajid
*Arab :* الْمَاجِدُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mulia
*Translate English :* The Illustrious, the Magnificent
=================
*Nomor:* : 66
*Latin :* Al Wahiid
*Arab :* الْواحِدُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Tunggal
*Translate English :* The One, The Unique, Manifestation of Unity
=================
*Nomor:* : 67
*Latin :* Al ‘Ahad
*Arab :* اَلاَحَدُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Esa
*Translate English :* The One, the All Inclusive, the Indivisible
=================
*Nomor:* : 68
*Latin :* As Shamad
*Arab :* الصَّمَدُ
*Translate Indo :* Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta
*Translate English :* The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting
=================
*Nomor:* : 69
*Latin :* Al Qaadir
*Arab :* الْقَادِرُ
*Translate Indo :* Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan
*Translate English :* The All Able
=================
*Nomor:* : 70
*Latin :* Al Muqtadir
*Arab :* الْمُقْتَدِرُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Berkuasa
*Translate English :* The All Determiner, the Dominant
=================
*Nomor:* : 71
*Latin :* Al Muqaddim
*Arab :* الْمُقَدِّمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mendahulukan
*Translate English :* The Expediter, He who brings forward
=================
*Nomor:* : 72
*Latin :* Al Mu’akkhir
*Arab :* الْمُؤَخِّرُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mengakhirkan
*Translate English :* The Delayer, He who puts far away
=================
*Nomor:* : 73
*Latin :* Al Awwal
*Arab :* الأوَّلُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Awal
*Translate English :* The First
=================
*Nomor:* : 74
*Latin :* Al Aakhir
*Arab :* الآخِرُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Akhir
*Translate English :* The Last
=================
*Nomor:* : 75
*Latin :* Az Zhaahir
*Arab :* الظَّاهِرُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Nyata
*Translate English :* The Manifest; the All Victorious
=================
*Nomor:* : 76
*Latin :* Al Baathin
*Arab :* الْبَاطِنُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Ghaib
*Translate English :* The Hidden; the All Encompassing
=================
*Nomor:* : 77
*Latin :* Al Waali
*Arab :* الْوَالِي
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Memerintah
*Translate English :* The Patron
=================
*Nomor:* : 78
*Latin :* Al Muta’aalii
*Arab :* الْمُتَعَالِي
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Tinggi
*Translate English :* The Self Exalted
=================
*Nomor:* : 79
*Latin :* Al Barri
*Arab :* الْبَرُّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Penderma
*Translate English :* The Most Kind and Righteous
=================
*Nomor:* : 80
*Latin :* At Tawwaab
*Arab :* التَّوَابُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Penerima Tobat
*Translate English :* The Ever Returning, Ever Relenting
=================
*Nomor:* : 81
*Latin :* Al Muntaqim
*Arab :* الْمُنْتَقِمُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Penuntut Balas
*Translate English :* The Avenger
=================
*Nomor:* : 82
*Latin :* Al Afuww
*Arab :* العَفُوُّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pemaaf
*Translate English :* The Pardoner, the Effacer of Sins
=================
*Nomor:* : 83
*Latin :* Ar Ra'uuf
*Arab :* الرَّؤُوفُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pengasih
*Translate English :* The Compassionate, the All Pitying
=================
*Nomor:* : 84
*Latin :* Malikul Mulk
*Arab :* مَالِكُ الْمُلْكِ
*Translate Indo :* Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)
*Translate English :* The Owner of All Sovereignty
=================
*Nomor:* : 85
*Latin :* Dzul JalaaliWal Ikraam
*Arab :* ذُوالْجَلاَلِوَالإكْرَامِ
*Translate Indo :* Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan
*Translate English :* The Lord of Majesty and Generosity
=================
*Nomor:* : 86
*Latin :* Al Muqsith
*Arab :* الْمُقْسِطُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Adil
*Translate English :* The Equitable, the Requiter
=================
*Nomor:* : 87
*Latin :* Al Jamii’
*Arab :* الْجَامِعُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mengumpulkan
*Translate English :* The Gatherer, the Unifier
=================
*Nomor:* : 88
*Latin :* Al Ghaniyy
*Arab :* الْغَنِيُّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Berkecukupan
*Translate English :* The All Rich, the Independent
=================
*Nomor:* : 89
*Latin :* Al Mughnii
*Arab :* الْمُغْنِي
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Memberi Kekayaan
*Translate English :* The Enricher, the Emancipator
=================
*Nomor:* : 90
*Latin :* Al Maani
*Arab :* اَلْمَانِعُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Mencegah
*Translate English :* The Withholder, the Shielder, the Defender
=================
*Nomor:* : 91
*Latin :* Ad Dhaar
*Arab :* الضَّارَّ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Memberi Derita
*Translate English :* The Distressor, the Harmer
=================
*Nomor:* : 92
*Latin :* An Nafii’
*Arab :* النَّافِعُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Memberi Manfaat
*Translate English :* The Propitious, the Benefactor
=================
*Nomor:* : 93
*Latin :* An Nuur
*Arab :* النُّورُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)
*Translate English :* The Light
=================
*Nomor:* : 94
*Latin :* Al Haadii
*Arab :* الْهَادِي
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk
*Translate English :* The Guide
=================
*Nomor:* : 95
*Latin :* Al Baadii
*Arab :* الْبَدِيعُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pencipta
*Translate English :* Incomparable, the Originator
=================
*Nomor:* : 96
*Latin :* Al Baaqii
*Arab :* اَلْبَاقِي
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Kekal
*Translate English :* The Ever Enduring and Immutable
=================
*Nomor:* : 97
*Latin :* Al Waarits
*Arab :* الْوَارِثُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pewaris
*Translate English :* The Heir, the Inheritor of All
=================
*Nomor:* : 98
*Latin :* Ar Rasyiid
*Arab :* الرَّشِيدُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Pandai
*Translate English :* The Guide, Infallible Teacher, and Knower
=================
*Nomor:* : 99
*Latin :* As Shabuur
*Arab :* الصَّبُورُ
*Translate Indo :* Yang Memiliki Mutlak sifat Maha Sabar
*Translate English :* The Patient
=================
`
}
exports.asmaulhusna = asmaulhusna

// tahlil
const tahlil = (prefix) => {
return `=================
*Title :* Pengantar Al-Fatihah
*Arab :* اِلَى حَضْرَةِ النَّبِيِّ صَلَّى اللهُ عَلَيهِ وَسَلَّمَ وَاَلِهِ وصَحْبِهِ شَيْءٌ لِلهِ لَهُمُ الْفَاتِحَةُ
*Terjemah :* Dengan nama Allah yang maha pengasih lagi maha penyayang. Untuk yang terhormat Nabi Muhammad SAW, segenap keluarga, dan para sahabatnya. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah…
=================
*Title :* Al-Fatihah
*Arab :* بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . اَلْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ . اَلرَّحْمَنِ الرَّحِيْمِ. مَالِكِ يَوْمِ الدِّيْنِ . اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ . اِهْدِنَا الصِّرَاطَ الَّمُسْتَقِيْمَ . صِرَاطَ الَّذِ يْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ . اَمِينْ
*Terjemah :* Aku berlindung kepada Allah dari setan yang terlontar. Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang maha pengasih lagi maha penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah. Hanya kepada-Mu pula kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus, yaitu jalan orang-orang yang telah Kauanugerahi nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Semoga Kau kabulkan permohonan kami
=================
*Title :* Surat Al-Ikhlas (3 kali)
*Arab :* بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . قُلْ هُوَ اللهُ اَحَدٌ . اَللهُ الصَّمَدُ . لَمْ يَلِدْ وَلَمْ يُوْلَدْ . وَلَمْ يَكٌنْ لَهُ كُفُوًا اَحَدٌ
*Terjemah :* Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, ‘Dialah yang maha esa. Allah adalah tuhan tempat bergantung oleh segala sesuatu. Dia tidak beranak dan tidak diperanakkan. Dan tidak ada seorangpun yang setara dengan-Nya’. (3 kali)
=================
*Title :* Tahlil dan Takbir
*Arab :* لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ
*Terjemah :* Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar
=================
*Title :* Surat Al-Falaq
*Arab :* بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَاثاتِ فِى الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ
*Terjemah :* Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, ‘Aku berlindung kepada tuhan yang menguasai waktu subuh dari kejahatan makhluk-Nya. Dari kejahatan malam apabila telah gelap gulita. Dan dari kejahatan wanita-wanita tukang sihir yang mengembus nafasnya pada buhul-buhul. Dan dari kejahatan orang-orang yang dengki apabila ia mendengki.’
=================
*Title :* Tahlil dan Takbir
*Arab :* لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ
*Terjemah :* Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar
=================
*Title :* Surat An-Nas
*Arab :* بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. قُلْ اَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. اِلَهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِى يُوَسْوِسُ فِى صُدُوْرِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ
*Terjemah :* Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, ‘Aku berlindung kepada tuhan manusia, raja manusia. Sesembahan manusia, dari kejahatan bisikan setan yang biasa bersembunyi. Yang membisikkan kejahatan ke dalam dada manusia. Dari setan dan manusia.’
=================
*Title :* Tahlil dan Takbir
*Arab :* لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ
*Terjemah :* Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar
=================
*Title :* Al-Fatihah
*Arab :* بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . اَلْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ . اَلرَّحْمَنِ الرَّحِيْمِ. مَالِكِ يَوْمِ الدِّيْنِ . اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ . اِهْدِنَا الصِّرَاطَ الَّمُسْتَقِيْمَ . صِرَاطَ الَّذِ يْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ . اَمِينْ
*Terjemah :* Aku berlindung kepada Allah dari setan yang terlontar. Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang maha pengasih lagi maha penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah. Hanya kepada-Mu pula kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus, yaitu jalan orang-orang yang telah Kauanugerahi nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Semoga Kau kabulkan permohonan kami
=================
*Title :* Awal Surat Al-Baqarah
*Arab :* بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. المّ. ذَلِكَ الكِتابُ لاَرَيْبَ فِيْهِ هُدَى لِلْمُتَّقِيْنَ. الَّذِيْنَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيْمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ. وَالَّذِيْنَ يُؤْمِنُونَ بِمَا اُنْزِلَ اِلَيْكَ وَمَا اُنْزِلَ مِن قَبْلِكَ وَبِالْاَخِرَةِ هُمْ يُوقِنُونَ. اُولَئِكَ عَلَى هُدًى مِّن رَّبِّهِمْ، وَاُولَئِكَ هُمُ الْمُفْلِحُونَ
*Terjemah :* Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Alif lam mim. Demikian itu kitab ini tidak ada keraguan padanya. Sebagai petunjuk bagi mereka yang bertakwa. Yaitu mereka yang beriman kepada yang ghaib, yang mendirikan shalat, dan menafkahkan sebagian rezeki yang kami anugerahkan kepada mereka. Dan mereka yang beriman kepada kitab Al-Qur’an yang telah diturunkan kepadamu (Muhammad SAW) dan kitab-kitab yang telah diturunkan sebelumnya, serta mereka yakin akan adanya kehidupan akhirat. Mereka itulah yang tetap mendapat petunjuk dari tuhannya. Merekalah orang orang yang beruntung
=================
*Title :* Surat Al-Baqarah ayat 163
*Arab :* وَاِلَهُكُمْ اِلَهٌ وَّاحِدٌ لاَ اِلَهَ اِلاَّ هُوَ الرَّحْمَنُ الرَّحِيمُ
*Terjemah :* Dan Tuhan kalian adalah Tuhan yang maha esa. Tiada tuhan yang layak disembah kecuali Dia yang maha pengasih lagi maha penyayang
=================
*Title :* Ayat Kursi (Surat Al-Baqarah ayat 255)
*Arab :* اللهُ لاَ اِلَهَ اِلاَّ هُوَ الْحَىُّ الْقَيُّومُ، لاَ تَاْ خُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَّهُ مَا فِى السَّمَوَاتِ وَمَا فِى الْاَرْضِ، مَنْ ذَا الَّذِى يَشْفَعُ عِنْدَهُ اِلاَّ بِاِذْنِهِ، يَعْلَمُ مَا بَينَ اَيْدِيْهِمِ وَمَا خَلْفَهُمْ، وَلاَ يُحْيِطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ اِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالْاَرْضَ، وَلاَ يَئُودُهُ حِفْظُهُمُا، وَهُوَ الْعَلِىُّ الْعَظِيْمُ
*Terjemah :* Allah, tiada yang layak disembah kecuali Dia yang hidup kekal lagi berdiri sendiri. Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tiada yang dapat memberikan syafa’at di sisi-Nya kecuali dengan izin-Nya. Dia mengetahui apa yang ada di hadapan dan di belakang mereka. Mereka tidak mengetahui sesuatu dari ilmu-Nya kecuali apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat menjaga keduanya. Dia maha tinggi lagi maha agung
=================
*Title :* Surat Al-Baqarah ayat 284-286
*Arab :* لِلَّهِ مَا فِى السَّمَوَاتِ وَمَا فِى الْاَرْضِ. وَاِنْ تُبْدُوْا مَا فِى اَنْفُسِكُمْ اَوْ تَخْفُوْهُ يُحَاسِبْكُمْ بِهِ اللهُ. فَيَغْفِرُ لَمِنْ يَّشَاءُ وَيُعْذِّبُ مَنْ يَّشَاءُ. وَاللهُ عَلَى كُلِّ شَىْءٍ قَدِيْرٌ. اَمَنَ الرَّسُوْلُ بِمَا اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهِ وَالْمُؤْمِنُوْنَ. كُلٌّ اَمَنَ بِاللهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ. لَانًفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهِ. وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ. لَا يُكَلِّفُ اللهُ نَفْسًا اِلَّا وُسْعَهَا. لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكَتْسَبَتْ. رَبَّنَا لَا تُؤَاخِذْنَا اِنْ نَسِيْنَا اَوْ اَخْطَاْنَا. رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا اِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا. رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ. وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا اَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِيْنَ
*Terjemah :* Hanya milik Allah segala yang ada di langit dan yang ada di bumi. Jika kamu menyatakan atau merahasiakan apa saja yang di hatimu, maka kamu dengan itu semua tetap akan diperhitungkan oleh Allah. Dia akan mengampuni dan menyiksa orang yang dikehendaki. Allah maha kuasa atas segala sesuatu. Rasulullah dan orang-orang yang beriman mempercayai apa saja yang diturunkan kepadanya dari Tuhannya. Semuanya beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, dan kepada para utusan-Nya. ‘Kami tidak membeda-bedakan seorang rasul dari lainnya.’ Mereka berkata, ‘Kami mendengar dan kami menaati. Ampunan-Mu, wahai Tuhan kami, yang kami harapkan. Hanya kepada-Mu tempat kembali.’ Allah tidak membebani seseorang kecuali dengan kemampuannya. Ia mendapat balasan atas apa yang dia perbuat dan siksaan dari apa yang dia lakukan. ‘Tuhan kami, janganlah Kau siksa kami jika kami terlupa atau salah. Tuhan kami, jangan Kau tanggungkan pada kami dengan beban berat sebagaimana Kaubebankan kaum sebelum kami. Jangan pula Kaubebankan pada kami sesuatu yang kami tidak mampu. Ampunilah kami. Kasihanilah kami. Kau pemimpin kami. Tolonglah kami menghadapi golongan kafir
=================
*Title :* Surat Hud ayat 73 (3 kali)
*Arab :* ارْحَمْنَا، يَا اَرْحَمَ الرَّاحِمِيْنَ
*Terjemah :* Kasihani kami, wahai Tuhan yang maha kasih. (3 kali)
=================
*Title :* Surat Hud ayat 73
*Arab :* رَحْمَتُ اللهِ وَبَرَكَاتُهُ عَلَيْكُمْ اَهْلَ الْبَيْتِ اِنَّهُ حَمِيْدٌ مَّجِيْدٌ
*Terjemah :* Dan rahmat Allah serta berkah-Nya (kami harapkan) melimpah di atas kamu sekalian wahai ahlul bait. Sungguh Dia maha terpuji lagi maha pemurah
=================
*Title :* Surat Al-Ahzab ayat 33
*Arab :* اِنَّمَا يُريِدُ اللهُ لِيُذْهِبَ عَنْكُمُ الرِّجْسَ اَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيْرًا
*Terjemah :* Sungguh Allah berkehendak menghilangkan segala kotoran padamu, wahai ahlul bait, dan menyucikanmu sebersih-bersihnya
=================
*Title :* Surat Al-Ahzab ayat 56
*Arab :* اِنَّ اللهَ وَمَلاَئِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ، يَا أَيُّهَا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوا تَسْلِيْمًا
*Terjemah :* Sungguh Allah dan para malaikat-Nya bershalawat untuk nabi. Wahai orang-orang yang beriman, bacalah shalawat untuknya dan ucapkanlah salam penghormatan kepadanya
=================
*Title :* Shalawat Nabi (3 kali)
*Arab :* اَلَّلهُمَّ صَلِّ أَفْضَلَ صَلَاةٍ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ
*Terjemah :* Ya Allah, tambahkanlah rahmat dan kesejahteraan untuk pemimpin dan tuan kami Nabi Muhammad SAW, serta keluarganya, sebanyak pengetahuan-Mu dan sebanyak tinta kalimat-kalimat-Mu pada saat zikir orang-orang yang ingat dan pada saat lengah orang-orang yang lalai berzikir kepada-Mu
=================
*Title :* Salam Nabi
*Arab :* وَسَلِّمْ وَرَضِيَ اللهُ تَعَالَى عَنْ اَصْحَابِ سَيِّدِنَا رَسُوْلِ اللهِ اَجْمَعِيْنَ
*Terjemah :* Semoga Allah yang maha suci dan tinggi meridhai para sahabat dari pemimpin kami (Rasulullah)
=================
*Title :* Surat Ali Imran ayat 173 dan Surat Al-Anfal ayat 40
*Arab :* حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ. نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ
*Terjemah :* Cukup Allah bagi kami. Dia sebaik-baik wakil. (Surat Ali Imran ayat 173). Dia sebaik-baik pemimpin dan penolong,” (Surat Al-Anfal ayat 40)
=================
*Title :* Hauqalah
*Arab :* وَلَاحَوْلَ وَلَا قُوَّةَ اِلَّا بِاللهِ العَلِيِّ الْعَظِيْمِ
*Terjemah :* Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah yang maha tinggi dan agung
=================
*Title :* Istighfar (3 kali)
*Arab :* اَسْتَغْفِرُاللهَ الْعَظِيْمَ
*Terjemah :* Saya mohon ampun kepada Allah yang maha agung.” (3 kali). (Allah) yang tiada tuhan selain Dia yang maha hidup, lagi terjaga. Aku bertobat kepada-Nya
=================
*Title :* Hadits Keutamaan Tahlil
*Arab :* الَّذِيْ لَا اِلَهَ اِلَّا هُوَ الحَيُّ القَيُّوْمُ وَأَتُوْبُ إِلَيْهِ، اَفْضَلُ الذِّكْرِ فَاعْلَمْ اَنَّهُ لَااِلَهَ اِلَّا اللهُ، حَيٌّ مَوْجُوْدٌ
*Terjemah :* Sebaik-baik zikir–ketahuilah–adalah lafal ‘La ilāha illallāh’, tiada tuhan selain Allah, zat yang hidup dan ujud
=================
*Title :* Hadits Keutamaan Tahlil
*Arab :* لَااِلَهَ اِلَّا اللهُ، حَيٌّ مَعْبُوْدٌ
*Terjemah :* Tiada tuhan selain Allah, zat yang hidup dan disembah
=================
*Title :* Hadits Keutamaan Tahlil
*Arab :* لَااِلَهَ اِلَّا اللهُ، حَىٌّ بَاقٍ الَّذِيْ لَا يَمُوْتُ
*Terjemah :* Tiada tuhan selain Allah, zat kekal yang takkan mati
=================
*Title :* Tahlil 160 kali
*Arab :* لَااِلَهَ اِلَّا اللهُ
*Terjemah :* Tiada tuhan selain Allah.” (160 kali)
=================
*Title :* Dua Kalimat Syahadat
*Arab :* لَا اِلَهَ اِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ
*Terjemah :* Tiada tuhan selain Allah. Nabi Muhammad SAW utusan-Nya
=================
*Title :* Doa Tahlil
*Arab :* الْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ حَمْدًا يُّوَافِى نِعَمَهُ وَيُكَافِىءُ مَزِيْدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ، سُبْحَانَكَ لَا نُحْصِى ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ، فَلَكَ الحَمْدُ قَبْلَ الرِّضَى وَلَكَ الحَمْدُ بَعْدَ الرِّضَى وَلَكَ الحَمْدُ إِذَا رَضِيْتَ عَنَّا دَائِمًا أَبَدًا
*Terjemah :* Aku berlindung kepada Allah dari setan yang dilontar. Dengan nama Allah yang maha pengasih, lagi maha penyayang. Segala puji bagi Allah, Tuhan seru sekalian alam sebagai pujian orang yang bersyukur, pujian orang yang memperoleh nikmat sama memuji, pujian yang memadai nikmat-Nya, dan pujian yang memungkinkan tambahannya. Tuhan kami, hanya bagi-Mu segala puji sebagaimana pujian yang layak bagi kemuliaan dan keagungan kekuasaan-Mu. Maha suci Engkau, kami tidak (dapat) menghitung pujian atas diri-Mu sebagaimana Kaupuji diri sendiri. Hanya bagi-Mu pujian sebelum ridha. Hanya bagi-Mu pujian setelah ridha. Hanya bagi-Mu pujian ketika Kau meridhai kami selamanya
=================
*Title :* Shalawat Zat Mukammalah
*Arab :* اللَّهُمَّ صَلِّ علَى الذَّاتِ المُكَمَّلَةِ وَالرَّحْمَةِ المُنَزَّلَةِ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلِّمْ
*Terjemah :* Ya Allah, limpahkan shalawat dan salam untuk zat yang disempurnakan dan rahmat yang diturunkan, yaitu Nabi Muhammad SAW, keluarga, dan sahabatnya
=================
*Title :* Shalawat Zat Mukammalah
*Arab :* وَصَلِّ اللَّهُمَّ عَلَيْهِ يَا ذَا البَهَاءِ وَالجَلَالِ بُكْرَةً وَأَصِيْلًا
*Terjemah :* Ya Allah, wahai zat yang indah dan agung, limpahkanlah shalawat kepada Nabi Muhammad SAW pada pagi dan sore hari
=================
*Title :* Doa Kebaikan Lahir dan Batin
*Arab :* اللَّهُمَّ كَمَا خَصَّصْتَنَا بِكِتَابِكَ الكَرِيْمِ وَهَدَيْتَنَا إِلَى صِرَاطكَ المُسْتَقِيْمِ، وأَصْلِحْ بِهِ مِنَّا جَمِيْعَ مَا فَسَدَ، وَطَهِّرْ بِهِ مِنَّا مَا ظَهَرَ وَمَا بَطَنَ
*Terjemah :* Ya Allah, sebagaimana Kaumuliakan kami dengan Kitab suci-Mu yang mulia dan Kautunjuki kami ke jalan yang lurus, maka berikanlah kemaslahatan untuk kami sebagai pengganti mafsadat dan sucikan kami dari kotoran yang tampak dan tersembunyi
=================
*Title :* Doa Keberkahan Al-Qur‘an
*Arab :* اللَّهُمَّ اشْرَحْ بِالقُرْآنِ صُدُوْرَنَا وَيَسِّرْ بِهِ أُمُوْرَنَا وَعَظِّمْ بِهِ أُجُوْرَنَا وَحَسِّنْ بِهِ أَخْلَاقَنَا وَوَسِّعْ بِهِ أَرْزَاقَنَا وَنَوِّرْ بِهِ قُبُوْرَنَا
*Terjemah :* Ya Allah, dengan Al-Qur’an lapangkanlah hati kami, mudahkan urusan kami, lipatgandakanlah pahala kami, perbaiki akhlak kami, luaskan rezeki kami, dan terangilah kubur kami
=================
*Title :* Doa Wahbah untuk Para Sahabat Rasul dan Wali Allah
*Arab :* اللَّهُمَّ اجْعَلْ ثَوَاَبَ مَا قَرَأْنَاهُ وَبَرَكَةَ مَا تَلَوْنَاهُ وَصَلَّيْنَاهُ عَلَى نَبِيِّكَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَمَا هَلَلْنَا هَدِيَّةً بَالِغَةً وَرَحْمَةً مِنْكَ نَازِلَةً نُقَدِّمُهَا وَنُهْدِيْهَا اِلَى حَضَرَاتِ النَّبِيِّ الأَكْرَمِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، ثُمَّ اِلَى أَرْوَاحِ آبَائِهِ وَإِخْوَانِهِ مِنَ النَّبِيِّيْنَ وَالمُرْسَلِيْنَ وَإِلَى مَلَائِكَةِ اللهِ الْمُقَرَّبِيْنَ وَالكَرُّوْبِيِّيْنَ، وَاِلَى أَرْوَاحِ سَادَاتِنَا أَبِي بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَإِلَى البَقِيَّةِ العَشْرَةِ المُبَشَّرَةِ بِالجَنَّةِ وَسَائِرِ الصَّحَابَةِ وَالقَرَابَةِ وَالتَّابِعِيْنَ وَإِلَى أَرْوَاحِ الحَسَنِ وَالحُسَيْنِ وَأُمِّهِمَا سَيِّدَتِنَا فَاطِمَةَ الزَّهْرَاءِ وَسَيِّدَتِنَا خَدِيْجَةَ الكُبْرَى وَسَيِّدِنَا حَمْزَةَ وَالعَبَّاسِ وَالشُّهَدَاءِ البَدْرِيِّيْنَ وَالأُحُدِيِّيْنَ وَإِلَى أَرْوَاحِ الخِضْرِ وَإِلْيَاسَ وَسَيِّدِنَا عَبْدِ اللهِ ابْنِ عَبَّاسٍ وَإِلَى أَرْوَاحِ الأَرْبَعَةِ الأَئِمَّةِ المُجْتَهِدِيْنَ وَمُقَلِّدِيْهِمْ فِي الدِّيْنِ وَإِلَى أَرْوَاحِ العُلَمَاءِ العَامِلِيْنَ وَالقُرَّاءِ وَأَئِمَّةِ الحَدِيْثِ وَالمُفَسِّرِيْنَ وَسَادَاتِنَا الصُّوْفِيَّةِ المُحَقِّقِيْنَ وَإِلَى رُوْحِ القُطْبِ الرَّبَّانِيِّ وَالعَارِفِ الصَّمَدَانِيِّ سَيِّدِيْ عَبْدِ القَادِرِ الجَيْلَانِيّ وَسَيِّدِيْ أَحْمَدَ البَدَوِيِّ وَسَيِّدِيْ أَحْمَدَ الرِّفَاعِيِّ وَسَيِّدِيْ إِبْرَاهِيْمَ الدَّسُوْقِيِّ وَسَيِّدِيْ أَبِي القَاسِمِ الجُنَيْدِ البَغْدَادِيِّ وَسَيِّدِيْ أَحْمَدَ ابْنِ عَلْوَانَ وَسَيِّدِيْ أَبِي طَالِبٍ المَكِّيِّ وَإِلَى أَرْوَاحِ كُلِّ وَلِيٍّ وَوَلِيَّةٍ لِلهِ مِنْ مَشَارِقِ الأَرْضِ وَمَغَارِبِهَا بَرِّهَا وَبَحْرِهَا أَيْنَمَا كَانُوْا وَكَانَ الكَائِنُ فِي عِلْمِكَ وَحَلَّتْ أَرْوَاحُهُمْ يَا رَبَّ العَالَمِيْنَ
*Terjemah :* Ya Allah, jadikanlah pahala dan keberkahan bacaan kami, shalawat kami, dan tahlil kami sebagai hadiah yang sampai dan rahmat-Mu yang turun, yang kami persembahkan dan hadiahkan untuk Nabi Muhammad SAW termulia, arwah bapak moyangnya, saudaranya dari kalangan para nabi dan rasul, malaikat muqarrabin dan karubiyyin, pemimpin kami Abu Bakar RA, Umar RA, Ustman RA, Ali RA, sepuluh sahabat yang dijanjikan masuk surge, seluruh sahabat, kerabat, tabi‘in, arwah Hasan, Husein, Ibu keduanya yaitu Sayyidah Fathimah Az-Zahra, Sayyidah Khadijah Al-Kubra, Sayyidina Hamzah, Abbas RA, syuhada Badar dan Uhud, arwah Khidhir, Ilyas, Sayyidina Abdullah bin Abbas RA, arwah empat imam mujtahid dan pengikut mereka perihal agama, arwah ulama, ahli qira‘ah, imam hadits, mufasir, pemuka sufi ahli hakikat, roh quthub rabbani dan arif as-shamadani Syekh Abdul Qadir Al-Jailani, Sayyid Ahmad Badawi, Sayyid Ahmad Ar-Rifa‘i, Sayyid Ibrahim Ad-Dasuqi, Sayyid Abul Qasim Al-Junaid Al-Baghdadi, Sayyid Ahmad bin Alwan, Sayyid Abu Thalib Al-Makki, seluruh wali Allah baik laki-laki dan perempuan dari Timur ke Barat baik di daratan maupun di lautan; di mana saja mereka dan roh mereka berada. Sementara semua yang ada berada dalam pengetahuan-Mu, waha Tuhan sekalian alam
=================
*Title :* Doa untuk Arwah Penghuni Makam Mualla, Syubaikah, Baqi‘, dan Mereka yang Tidak Pernah Diziarahi
*Arab :* وَإِلَى أَرْوَاحِ سَادَاتِنَا أَهْلِ المُعَلَّا وَالشُّبَيْكَةِ وَالبَقِيْعِ وَأَمْوَاتِ المُسْلِمِيْنَ كَافَّةً عَامَّةً وَفِي صَحَائِفِ مَنْ لَا زَائِرَ لَهُ وَلَا ذَاكِرَ لَهُ عُمَّ الجَمِيْعَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ
*Terjemah :* Dan kepada arwah pemimpin kami, yaitu ahli kubur Mualla, Syubaikah, Baqi‘, semua arwah umat Islam, dan pada lembaran ahli kubur yang tidak diziarahi dan tidak diingat, ratakanlah semuanya dengan rahmat-Mu, wahai zat yang maha penyayang
=================
*Title :* Doa Permohonan Rahmat Berkah Al-Qur’an
*Arab :* اللَّهُمَّ ارْحَمْهُ بِالقُرْآنِ العَظِيْمِ رَحْمَةً وَاسِعَةً، وَاغْفِرْ لَهُ مَغْفِرَةً جَامِعَةً يَا مَالِكَ الدُّنْيَا وَالآخِرَةِ يَا رَبَّ العَالَمِيْنَ
*Terjemah :* Ya Allah, turunkanlah rahmat yang luas kepadanya (arwah ahli kubur) dengan berkat Al-Qur’an yang agung, ampunilah ia dengan ampunan yang luas, wahai Penguasa dunia dan akhirat, Tuhan sekalian alam
=================
*Title :* Doa Ketenteraman untuk Ahli Kubur
*Arab :* اللَّهُمَّ أَنْزِلْ فِيْ قَبْرِهِ الرَّحْمَةَ وَالضِّيَاءَ وَالنُّوْرَ، وَالبَهْجَةَ وَالرَوْحَ وَالرَيْحَانَ وَالسُّرُوْرَ، مِنْ يَوْمِنَا هَذَا إِلَى يَوْمِ البَعْثِ وَالنُّشُوْرِ، إِنَّكَ مَلِكٌ رَبٌّ غَفُوْرٌ
*Terjemah :* Ya Allah, turunkanlah di kuburnya (almarhum fulan) rahmat, sinar, cahaya, kegembiraan, kesenangan, keharuman, dan kebahagiaan sejak hari ini hingga hari kebangunan dan kebangkitan. Sungguh, Kau penguasa, tuhan yang maha pengampun
=================
*Title :* Doa Meminta Syafa‘at Al-Qur’an
*Arab :* اللَّهُمَّ اجْعَلِ القُرْآنَ العَظِيْمَ فِي قَبْرِهِ مُؤْنِسًا، وَفِي القِيَامَةِ شَافِعًا، وَفِي الحَشْرِ ضِيَاءً وَظِلًّا وَدَلِيْلًا، وَفِي المِيْزَانِ رَاجِحًا، وَعَلَى الصِّرَاطِ نُوْرًا وَقَائِدًا، وَعَنِ النَّارِ سِتْرًا وَحِجَابًا، وَفِي الجَنَّةِ رَفِيْقًا
*Terjemah :* Ya Allah, jadikanlah Al-Qur’an di kuburnya sebagai teman, di Hari Kiamat sebagai pemberi syafaat, di tempat berkumpul (mahsyar) kelak sebagai sinar, naungan, dan petunjuk, di mizan sebagai pemberat timbangan amal baik, di sirath sebagai cahaya dan penuntun, dari api neraka sebagai tabir dan hijab, dan di surga sebagai kawan
=================
*Title :* Doa Pengantar untuk Penghuni Baru Kubur
*Arab :* اللَّهُمَّ عَبْدُكَ وَابْنَ عَبْدَيْكَ خَرَجَ مِنْ رَّوْحِ الدُّنْيَا وَسَعَتِهَا وَمَحْبُوْبِهِ وَاَحِبَّائِهِ فِيْهَا اِلَى ظـُـلْمَةِ اْلقَبْرِ وَمَا هُوَ لَا قِيْهِ كـَانَ يَشْهَـدُ اَنْ لَا اِلَهَ اِلَّا اَنْتَ وَاَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلـُـكَ وَاَنْتَ اَعْلَمُ بِهِ
*Terjemah :* Ya Allah, ini hamba-Mu dan anak dari kedua hamba-Mu. Ia keluar dari kebahagiaan dan keluasan dunia, orang yang dicintai, dan para kekasihnya di dunia menuju kegelapan kubur dan apa yang akan ia jumpai di dalamnya. Ia dulu pernah bersaksi bahwa tiada tuhan selain Engkau dan Nabi Muhammad SAW adalah hamba dan utusan-Mu. Kau pun lebih tahu akan hal ini
=================
*Title :* Doa Kelapangan Kubur
*Arab :* اللَّهُمَّ اِنَّهُ نَزَلَ بِكَ وَاَنْتَ خَيْرُ مَنْزُوْلٍ بِهِ وَاَصْبَحَ فـَـقِـيْرًا اِلـَى رَحْمَتِكَ، وَاَنْتَ غَنِيٌّ عَنْ عَذَابِهِ وَقـَـدْ جِئْنَاكَ رَاغِبِيْنَ اِلـَـيْكَ شُفـَـعَاءَ لـَـهُ، اللـّٰهُمَّ اِنْ كَانَ مُحْسِنًا فَزِدْ فِيْ اِحْسَانِهِ وَاِنْ كـَانَ مُسِيْئًا فَتَجَاوَزْ عَنْهُ وَلـَـقـِّـهِ بِرَحْمَتِكَ رِضَاكَ وَقِهِ فِتْنَةَ اْلقـَـبْرِ وَعَــَذابَهُ وَافْسَحْ لـَـهُ فِيْ قـَــبْرِهِ وَجَافِ اْلاَرْضَ عَنْ جَنْبَيْهِ وَلـَــقـِّـهِ بِرَحْمَتِكَ اْلاَمْنَ مِنْ عَذَابِكَ حَتَّى تَبْعَثَــهُ آمِنًا اِلـَى جَنَّتِكَ بِرَحْمَتِكَ يَااَرْحَمَ الرَّاحِمِيْنَ
*Terjemah :* Ya Allah, dia kembali kepada-Mu. Engkau adalah sebaik-baik tempat kembali. Ia membutuhkan rahmat-Mu. Sementara Engkau tidak perlu menyiksanya. Kami mendatangi-Mu seraya mengharap kepada-Mu agar dapat memberikan syafa’at baginya. Ya Allah, jika ia orang baik, maka tambahkanlah kebaikannya. Jika ia orang jahat, maka maafkanlah keburukannya. Pertemukan ia dan ridha-Mu berkat rahmat-Mu. Peliharalah ia dari fitnah dan azab kubur. Lapangkanlah kuburnya. Jauhkanlah dinding bumi dari kedua sisi badannya. Pertemukanlah ia dan keamanan berkat rahmat-Mu dari azab-Mu hingga Engkau membangkitkannya dalam keadaan aman menuju surga-Mu berkat rahmat-Mu, wahai Zat Yang Maha Pengasih
=================
*Title :* Doa untuk Ahli Kubur (laki-laki)
*Arab :* اللهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ يَا رَبَّ العَالَمِيْنَ
*Terjemah :* Ya Allah, ampunilah dirinya, kasihanilah dirinya, afiatkan dirinya, dan maafkanlah dirinya, wahai Tuhan sekalian alam
=================
*Title :* Doa untuk Ahli Kubur (perempuan)
*Arab :* اللهُمَّ اغْفِرْ لَها وَارْحَمْها وَعَافِها وَاعْفُ عَنْها يَا رَبَّ العَالَمِيْنَ
*Terjemah :* Ya Allah, ampunilah dirinya (perempuan), kasihanilah dirinya, afiatkan dirinya, dan maafkanlah dirinya, wahai Tuhan sekalian alam
=================
*Title :* Doa Khusus untuk Ahli Kubur yang Diziarahi
*Arab :* وَاجْعَلِ اللهُمَّ ثَوَابًا مِثْلَ ثَوَابِ ذَالِكَ فِي صَحَائِفِنَا وَفِي صَحَائِفِ وَالِدِيْنَا وَمَشَائِخِنَا وَالسَّادَاتِ الحَاضِرِيْنَ وَوَالِدِيْهِمْ وَمَشَائِخِهِمْ خَاصَّةً وَإِلَى أَمْوَاتِ المُسْلِمِيْنَ عَامَّةً
*Terjemah :* Ya Allah, jadikanlah pahala ini sebagaimana pahala demikian yang tercatat pada lembaran kami, lembaran orang tua kami, guru kami, para pemuka yang hadir, orang tua mereka, dan guru mereka khususnya, dan arwah umat Islam secara umum
=================
*Title :* Doa agar Ingat dan Paham Al-Qur’an
*Arab :* اللهُمَّ ذَكِّرْنَا مِنْهُ مَا نَسِيْنَا وَعَلِّمْنَاهُ مَا جَهِلْنَا وَارْزُقْنَا تِلَاوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ، وَاجْعَلْهُ حُجَّةً لَّنَا وَلَا تَجْعَلْهُ حُجَّةً عَلَيْنَا
*Terjemah :* Ya Allah, ingatkan kami ayat-ayat Al-Qur‘an yang kami terlupa. Beritahukan kami sesuatu yang kami tidak ketahui. Anugerahkan kami kesempatan untuk membacanya sepanjang malam dan di tepi-tepi siang. Jadikanlah Al-Qur‘an sebagai pembela kami. Jangan jadikan Al-Qur‘an sebagai penghujat kami kelak
=================
*Title :* Doa Kemurahan dan Keridhaan Allah
*Arab :* اللهُمَّ بِفَضْلِكَ عُمَّنَا، وَبِلُطْفِكَ حُفَّنَا، وَعَلَى الإِسْلَامِ وَالإِيْمَانِ جَمْعًا تَوَفَّنَا وَأَنْتَ رَاضٍ عَنَّا، وَاخْتِمْ بِالصَّالِحَاتِ أَعْمَالَنَا. رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ، وَالحَمْدُ لِلهِ رَبِّ العَالَمِيْنَ
*Terjemah :* Ya Allah, ratakanlah keutamaan-Mu. Selimuti kami dengan kelembutan-Mu. Atas Islam dan iman sekaligus, matikanlah kami sementara Kaumeridhai kami. Akhiri amal kami dengan kesalehan. Tuhan kami, berikanlah kami kebaikan di dunia, dan kebaikan di akhirat. Lindungilah kami dari siksa neraka, dengan rahmat-Mu wahai Tuhan maha penyayang. Segala puji bagi Allah, Tuhan sekalian alam
=================
`
}
exports.tahlil = tahlil
