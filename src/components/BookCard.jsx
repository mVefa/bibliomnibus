import { useState, memo } from 'react';
import { PlaceholderBookIcon } from './Icons';

// ── Kapak resmi yüklenemeyince kitap ID'sine göre seçilen gradient paleti
const FALLBACK_GRADIENTS = [
  'from-violet-950 via-indigo-900 to-violet-950',
  'from-blue-950 via-sky-900 to-blue-950',
  'from-emerald-950 via-teal-900 to-emerald-950',
  'from-rose-950 via-pink-900 to-rose-950',
  'from-fuchsia-950 via-purple-900 to-fuchsia-950',
  'from-slate-900 via-gray-800 to-slate-900',
  'from-cyan-950 via-blue-900 to-cyan-950',
  'from-purple-950 via-fuchsia-900 to-purple-950',
];

// Kitap ID'sinden deterministik renk seçer
export function getFallbackGradient(id) {
  const score = Array.from(id).reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return FALLBACK_GRADIENTS[score % FALLBACK_GRADIENTS.length];
}

// Kırık kapak resmi yerine başlığın baş harflerini gösteren kutu
export function InitialsFallback({ title, className = '' }) {
  const initials = title
    .split(' ')
    .filter(w => w.length > 1)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gray-800 ${className}`}>
      <span
        className="text-gray-400 font-bold select-none"
        style={{ fontSize: 'clamp(1rem, 4cqw, 2rem)' }}
      >
        {initials}
      </span>
    </div>
  );
}

// ── Kitap Kartı (sade: kapak + başlık + yazar)
const BookCard = memo(function BookCard({ book, onClick }) {
  const [imgError, setImgError] = useState(false);
  const fallbackClass = getFallbackGradient(book.id);

  return (
    <div
      className="group relative flex flex-col bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      {/* ─ Kapak Resmi — sabit 2:3 oranı, CLS önlenmiş */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
        {!imgError ? (
          <img
            src={book.coverImage}
            alt={book.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${fallbackClass} flex flex-col items-center justify-center gap-3 p-4`}>
            <PlaceholderBookIcon />
            <p className="text-gray-400 text-xs text-center font-medium leading-tight line-clamp-3">
              {book.title}
            </p>
          </div>
        )}

        {/* ─ Hover overlay */}
        <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/55 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            Detayları Gör
          </span>
        </div>
      </div>

      {/* ─ Başlık + Yazar */}
      <div className="px-3 pt-2.5 pb-3 space-y-0.5">
        <h3 className="text-white text-xs font-semibold leading-snug line-clamp-2">{book.title}</h3>
        <p className="text-gray-500 text-xs line-clamp-1">{book.author}</p>
      </div>
    </div>
  );
});

export default BookCard;
