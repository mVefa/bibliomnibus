// ── Tüm SVG ikon bileşenleri merkezi olarak burada toplanmıştır.

// ─────────────────────────────────────────────────────────────
// Potrace bıyık verileri
// Orijinal viewBox: 0 0 1280 640
// Dönüşüm: translate(0,640) scale(0.1,-0.1)  → y ekseni çevrilmiş koordinatlar
// Bıyık, viewport koordinatlarında y ≈ 145–390 arasında yer alır.
// MustacheIcon ve FullLogoIcon'da bu bölge crop edilerek kullanılır.
// ─────────────────────────────────────────────────────────────
const MUSTACHE_TRANSFORM = "translate(0,640) scale(0.1,-0.1)";

// Gerçek bıyık aralığı (path analizi): endpoint y=144–492, ctrl noktaları y=136–502
// ViewBox 4:1 korunuyor (pillarbox yok), ancak endpoint'ler y=430'un ötesine geçiyor.
// overflow="visible" ile nested <svg> bu fazlayı (y=430–492) overflow alanında render eder.
// Bu fazla ~4.87 nested SVG birimi = ~1.6px görsel — bıyık kıvrım uçları, düzgün görünür.
const MUSTACHE_CROP_VIEWBOX = "0 110 1280 320";

// Tek path — temiz potrace çıktısı (1 kapalı şekil)
const MUSTACHE_PATH =
  "M5065 4954 c-277 -32 -403 -60 -615 -136 -197 -71 -456 -222 -660" +
  "-384 -176 -140 -451 -430 -770 -809 -395 -470 -612 -682 -853 -831 -222 -138" +
  "-443 -221 -717 -271 -141 -25 -421 -23 -556 5 -258 52 -417 140 -480 264 -76" +
  " 150 -70 337 15 461 61 89 186 167 267 167 85 0 149 -79 180 -222 10 -43 22" +
  "-78 27 -78 18 0 0 209 -24 285 -77 248 -256 300 -547 159 -157 -76 -253 -197" +
  "-304 -381 -28 -101 -30 -338 -4 -451 112 -501 487 -885 1077 -1105 617 -231" +
  " 1395 -245 2479 -46 282 52 463 96 695 170 656 210 1291 540 1743 906 115 93" +
  " 283 261 337 336 22 31 43 56 46 57 3 0 22 -24 43 -54 48 -70 247 -266 366" +
  "-361 527 -420 1357 -815 2065 -984 270 -64 747 -143 1055 -175 607 -63 1139" +
  "-36 1552 80 709 198 1168 616 1294 1176 26 113 24 350 -4 451 -51 184 -147" +
  " 305 -304 381 -122 59 -203 80 -293 74 -79 -5 -116 -21 -164 -70 -70 -71 -109" +
  "-184 -118 -340 -7 -129 6 -142 31 -30 42 195 136 261 276 196 230 -107 308" +
  "-373 179 -615 -89 -167 -382 -272 -759 -273 -353 0 -675 94 -989 289 -221 137" +
  "-468 376 -821 795 -536 636 -788 875 -1131 1072 -524 302 -1174 381 -1664 201" +
  "-197 -73 -364 -183 -515 -340 l-100 -103 -100 103 c-282 293 -656 441 -1100" +
  " 435 -58 0 -118 -3 -135 -4z";

export function YouTubeSVG({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

export function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" />
      <path d="M15 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L21 3" strokeLinecap="round" />
    </svg>
  );
}

export function PlaceholderBookIcon() {
  return (
    <svg viewBox="0 0 64 80" className="w-14 h-14 opacity-25" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="4" width="44" height="72" rx="4" />
      <rect x="6" y="4" width="8" height="72" fill="currentColor" opacity="0.2" rx="2" />
      <line x1="20" y1="20" x2="44" y2="20" strokeWidth="1.5" />
      <line x1="20" y1="28" x2="44" y2="28" strokeWidth="1.5" />
      <line x1="20" y1="36" x2="36" y2="36" strokeWidth="1.5" />
    </svg>
  );
}

export function LogoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-950" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

export function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function BookOpenIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// MustacheIcon — sadece bıyık (favicon / küçük ikon için)
//
// viewBox MUSTACHE_CROP_VIEWBOX: "0 155 1280 90"
// → bıyığın bulunduğu viewport bölgesini kırpar, bıyık tam dolar
// ─────────────────────────────────────────────────────────────
export function MustacheIcon({ className }) {
  return (
    <svg
      viewBox={MUSTACHE_CROP_VIEWBOX}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bıyık ikonu"
    >
      <g transform={MUSTACHE_TRANSFORM} fill="currentColor">
        <path d={MUSTACHE_PATH} />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// FullLogoIcon — gözlük + bıyık + sakal üçlüsü (tam logo)
//
// viewBox "0 0 100 100" — kompakt kare, overflow="visible" kesilmeyi önler
//   Tüm içerik <g translate(0,2)> ile konumlandırılmıştır.
//   Koordinatlar (viewBox birimi):
//   • Gözlük üstü : y = 2+2  =  4  (4 birim üst boşluk)
//   • Gözlük altı : y = 2+38 = 40
//   • Bıyık box   : y = 2+45 = 47 → 2+70 = 72  (curl overflow → 76.9)
//   • Sakal üstü  : y = 2+8+67 = 77
//   • Sakal ucu   : y = 2+8+87 = 97  (3 birim alt boşluk, overflow ile güvende ✓)
//   h-10 container (28px inner): sakal 27.2px, 0.84px boşluk — overflow=visible kurtarır
// ─────────────────────────────────────────────────────────────
export function FullLogoIcon({ className }) {
  return (
    <svg
      viewBox="0 0 100 100"
      overflow="visible"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ESG logo — gözlük, bıyık ve sakal"
    >
      {/* Tüm öğeler 2 birim aşağı kaydırılmıştır — kompakt, ortalanmış:
          üstte 4 birim | altta 3 birim (sakal overflow=visible ile güvende) */}
      <g transform="translate(0, 2)">

        {/* ── Gözlük çerçeveleri
              fillRule="evenodd": her çift subpath bir "delik" oluşturur
              → cam alanları tamamen şeffaf kalır, her arka plan renginde çalışır */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={
            'M 7,2 H 43 C 45.2,2 47,3.8 47,6 V 34 C 47,36.2 45.2,38 43,38 H 7 C 4.8,38 3,36.2 3,34 V 6 C 3,3.8 4.8,2 7,2 Z ' +
            'M 10,8 H 40 C 41.1,8 42,8.9 42,10 V 30 C 42,31.1 41.1,32 40,32 H 10 C 8.9,32 8,31.1 8,30 V 10 C 8,8.9 8.9,8 10,8 Z ' +
            'M 57,2 H 93 C 95.2,2 97,3.8 97,6 V 34 C 97,36.2 95.2,38 93,38 H 57 C 54.8,38 53,36.2 53,34 V 6 C 53,3.8 54.8,2 57,2 Z ' +
            'M 60,8 H 90 C 91.1,8 92,8.9 92,10 V 30 C 92,31.1 91.1,32 90,32 H 60 C 58.9,32 58,31.1 58,30 V 10 C 58,8.9 58.9,8 60,8 Z'
          }
        />

        {/* Köprü — iki lensi birleştiren yatay parça */}
        <rect x="47" y="16" width="6" height="6" rx="3" />

        {/* Sol kol */}
        <path d="M 3,20 C 1,21 0,23 0,25" stroke="currentColor" strokeWidth="4.5" fill="none" strokeLinecap="round" />

        {/* Sağ kol */}
        <path d="M 97,20 C 99,21 100,23 100,25" stroke="currentColor" strokeWidth="4.5" fill="none" strokeLinecap="round" />

        {/* ── Bıyık — potrace single path, nested SVG ile bıyık bölgesi kırpılıp yerleştirildi
             Gerçek endpoint aralığı: SVG y=144 – y=492 (path analizi ile doğrulandı)
             MUSTACHE_CROP_VIEWBOX "0 110 1280 420" → y=110..530, endpoint'ler dahil.
             overflow="visible": bezier kontrol noktaları viewport dışına çıksa bile kesmez */}
        <svg
          x="0"
          y="45"
          width="100"
          height="25"
          viewBox={MUSTACHE_CROP_VIEWBOX}
          preserveAspectRatio="xMidYMid meet"
          overflow="visible"
        >
          <g transform={MUSTACHE_TRANSFORM} fill="currentColor" overflow="visible">
            <path d={MUSTACHE_PATH} />
          </g>
        </svg>

        {/* ── Sakal (keçi sakalı)
             Base path: y=67–87. translate(0,8) ile y=75–95'e taşındı.
             Dış translate(0,2) ile nihai görsel: y=77–97. viewBox=100'ün içinde. */}
        <g transform="translate(0, 8)">
          <path d="M 44,72 C 44,69 47,67 50,67 C 53,67 56,69 56,72 C 56,77 53,84 50,87 C 47,84 44,77 44,72 Z" />
        </g>

      </g>
    </svg>
  );
}
