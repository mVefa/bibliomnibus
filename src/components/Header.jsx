import { SearchIcon, FullLogoIcon } from './Icons';

export default function Header({ query, onQueryChange }) {
  return (
    <header className="sticky top-0 z-20 bg-gray-950/85 backdrop-blur-lg border-b border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          {/* Logo & Başlık */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-10 rounded-xl bg-fuchsia-500 flex items-center justify-center shrink-0 shadow-lg shadow-fuchsia-500/30 p-1.5">
              <FullLogoIcon className="w-full h-full text-gray-950" />
            </div>
            {/* İkon ile metin dikey ortada hizalı */}
            <h1 className="flex items-baseline gap-0 leading-none select-none">
              {/* BİBLİO — Playfair Display, italic, açık gri */}
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '1.25rem',   /* 20px — text-xl */
                  color: '#ffffff',      /* neon amber */
                  letterSpacing: '0.01em',
                }}
              >
                BİBLİO
              </span>
              {/* MNİBUS — Inter, bold, neon fuchsia */}
              <span
                style={{
                  fontFamily: "'Inter', ui-sans-serif, sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: '1.25rem',   /* 20px — text-xl */
                  color: '#d946ef',      /* fuchsia-500 */
                  letterSpacing: '-0.02em',
                }}
              >
                MNİBUS
              </span>
            </h1>
          </div>

          {/* Arama Çubuğu */}
          <div className="relative w-full sm:w-72 md:w-80">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={query}
              onChange={e => onQueryChange(e.target.value)}
              placeholder="Kitap adı veya yazar ara…"
              className="w-full bg-gray-900 border border-gray-700 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 rounded-xl py-2.5 pl-10 pr-9 text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-200"
            />
            {query && (
              <button
                onClick={() => onQueryChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300 transition-colors text-base leading-none"
                aria-label="Aramayı temizle"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
