# Könyvtárak

Alább látható a gépen található, a kivetítés szempontjából lényeges mappaszerkezet.

<div class="chart" id="folder_structure_container"></div>
<script>
    // ps = new PerfectScrollbar("#folder-structure-container");
    var w = 0;
    new Treant(chart_config);
    window.onload = function() {
        w = window.innerWidth;
    }
    window.onresize = function() {
        // This is not very smooth but works
        // (not suitable for people who resizes their browser window like a maniac)
        if (w != window.innerWidth) {
            new Treant(chart_config);
            w = window.innerWidth;
            // document.querySelector(".content").style.backgroundColor = "red";
            // setTimeout(function(){document.querySelector(".content").style.backgroundColor = "white";}, 200);
        }
    };
</script>

## C:\Users\bpaki\Documents\Google Drive

A BPA Kivetítés teljes Drive-ját a Google Backup and Sync alkalmazással szinkronizáltuk a `C:\Users\bpaki\Documents\Google Drive` mappába. Ez azt jelenti, hogy bármilyen módosítás a felhőben letöltődik és érvényesül a gépen is, és fordítva (persze ehhez szükséges internetkapcsolat).<sup id="fb_dropbox">[\[1\]](#f_dropbox)</sup>

### C:\Users\bpaki\Documents\Google Drive\BPApresentation

A Drive-ban található egy `BPApresentation` mappa, ami az aktuális vetítős anyagokat, valamint a ProPresenter összes dokumentumát tartalmazza.<sup id="fb_drive_folders">[\[2\]](#f_drive_folders)</sup> Ezt megosztottuk a bpa-presentation-team Google csoporttal, így aki ebben benne van, az Google Drive segítségével elérheti és szerkesztheti. Ez kifejezetten hasznos akkor, amikor megkapjuk a kivetítési anyagokat egy eseményhez, fel akarjuk másolni a vetítős gépre, de az nincs nálunk. Ilyenkor ezeket feltölthetjük a Drive-ba, és legközelebb, amikor a vetítős gépet bekapcsoljuk (és van internete), automatikusan letöltődnek.

#### BPApresentation\ProPresenter

Itt találhatóak a ProPresenter saját fájljai, amik legtöbb beállítást és dokumentumot tartalmazzák, amit a programban beállítottunk, illetve létrehoztunk. Célszerűen ezeket is szinkronizáljuk, hogy könnyű legyen megosztani, és más gépről is pontosan ugyanúgy nézhessen ki a program, mint a vetítős gépen. Sajnos nem minden adat van itt, vannak még a programnak fájljai a személyes [AppData](#TODO) mappában is.

A ProPresenter mappa az alábbi almappákat tartalmazza.

| Mappa         | Tartalom                                                                                                                                                                                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration | Különféle konfigurációs adatok, mint például az időzítők és órák beállításai, szerkezeti egységek (csoportok), címkék, üzenetek, a stage display elrendezések és a felhasználói felület elrendezése.                                                                         |
| Libraries     | A prezentációkat tartalmazó könyvtárak.                                                                                                                                                                                                                                      |
| Media         | A ProPresenter-ben cache-elt képek és videók. Itt ne tároljunk fontos dokumentumokat, helyette az arra kijelölt mappákat használjuk (aktuális dokumentumok, archív dokumentumok, hátterek, visszaszámlálók).                                                                 |
| Playlists     | A prezentációs, a média és az audió lejátszási listák. Innen a listák külön-külön nem megoszthatóak, mint régen, mert most már egyetlen (illetve kategóriánként egy) fájlba vannak összesűrítve. Helyette a programból lehet ezt megtenni az [exportálás](#TODO) funkcióval. |
| Presets       | Elmentett képátmenetek és effektusok.                                                                                                                                                                                                                                        |
| Themes        | Témák (korábbi néven sablonok).                                                                                                                                                                                                                                              |

##### Libraries

A könyvtár két dolgot is jelent, a programbeli könyvtárakat és a fájlrendszerbelieket. Szerencsére a ProPresenter-es könyvtáraknak megvan a fájlrendszerbeli könyvtár megfelelőjük. Ezekben találhatóak a prezentációk, amelyeknek `.pro` a kiterjesztésük (a 6-os verzióban még `.pro6` volt). A prezentációk létrehozásáról és szerkesztéséről bővebben [itt](#TODO).

A **Songs** könyvtárban találhatóak a BPA istentiszteletein és egyéb alkalmain (KIT, ifi, ApCsel, dicsőítő alkalmak) énekelt dalok prezentációi. Az a cél, hogy itt meglegyen az összes dal, ami ezeken az alkalmakon előfordulhat. Mivel ezt gyakran használjuk, ezért elvárjuk, hogy megfelelő formátumban benne legyenek a dalok. Ez azt jelenti, hogy mind a meglévő dalok szerkesztésekor, mind új dalok bevitelekor szem előtt kell tartani a [dalszövegekre vonatkozó irányelveket](#TODO).

A **Slideshows** könyvtárban találhatóak az igehirdetések, előadások, bizonyságok prezentációi, valamint a gyülekező és hirdetés slideshow-k, vagyis minden olyan prezentáció, ami nem dalszöveg. A lejárt prezentációkat [archiváljuk](#TODO), vagy frissítsük a következő alkalomra, hogy mindig csak az aktuális dolgok szerepeljenek itt.

Ezen kívül külsős eseményekhez (Dics-suli, Felház, kisebb alkalmak) érdemes létrehozni új könyvtárat, hogy egy helyen legyenek. Ezt meg lehet tenni a programból is és a fájlkezelőből is, ez utóbbi esetben viszont újra kell indítani a programot, hogy a változás látsszon.

##### Themes

Itt találhatók a témák vagy korábbi nevén sablonok (template). Ha meg akarsz osztani egy témát, vagy kaptál egy témát, amit akarsz használni a programban, akkor itt találod, illetve ide kell bemásolni. Egy téma csoporthoz egy mappa tartozik a téma nevével. A témacsoporton belül a témák külön nem kezelhetőek a fájlrendszerben, csak ProPresenter-ben (ez érthető, hiszen egy témacsoport gyakorlatilag egy diasor és az egyes témák a diák). A megosztás másik módja az [exportálás](#TODO). A témákról bővebben [itt](#TODO).

#### BPApresentation\Aktuális dokumentumok

Itt találhatók az aktuális képek, videók, pptx prezentációk és egyebek. Minden, ami éppen aktuális és nem ProPresenter-es fájl, az itt van és csak itt. A jobb átláthatóság kedvéért létrehozhatsz ezen belül almappát egy-egy alkalomhoz. A ProPresenter-ben beállítottunk egy Smart Playlist-et erre a mappára, tehát minden változtatás a fájlkezelőben rögtön megjelenik a programban is és fordítva (a Smart Playlist-ekről bővebben itt TODO). Azt is megoldottuk, hogy a bpakivetites@gmail.com címre érkező csatolmányok is automatikusan bekerüljenek ide. Fontos, hogy ami biztosan elavult, azt helyezd át az archívumba, hogy itt mindig friss információ legyen.

---

<sup id="f_dropbox">1</sup> Régen Dropbox-ot használtunk, de annak az ingyenes verziója csak 2 GB tárhelyet tett elérhetővé, míg a Google-nél ez 15 GB. A Backup and Sync működése egyébként teljesen azonos a Dropbox-éval. [Vissza](#fb_dropbox)

<sup id="f_drive_folders">2</sup> Igazából a `BPApresentation` mappán kívül nincs semmi a Drive-ban. Azért van ez így, mert a teljes Drive-ot nem lehet megosztani, csak mappákat és fájlokat, és így csak egyetlen mappát kell megosztani. [Vissza](#fb_drive_folders)
