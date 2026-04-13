import { useState, useEffect, useCallback } from 'react';
import { YouTubeSVG, ExternalLinkIcon, PersonIcon, BookOpenIcon } from './Icons';
import { InitialsFallback } from './BookCard';

// Saniyeyi "m:ss" veya "h:mm:ss" formatına çevirir
function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function BookModal({ book, onClose }) {
  // ESC tuşuyla kapatma + body scroll kilidi
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const [imgError, setImgError] = useState(false);

  // autoplay=1 — start/end parametreleriyle tam aralıktan başlatır
  const embedSrc = book.youtubeId
    ? `https://www.youtube.com/embed/${book.youtubeId}?` +
      new URLSearchParams({
        ...(book.startTimestamp && { start: book.startTimestamp }),
        ...(book.endTimestamp   && { end:   book.endTimestamp }),
        autoplay: 1,
        rel:      0,
        modestbranding: 1,
      }).toString()
    : null;

  // Overlay'e tıklanınca kapat, modal içine tıklamaları geçirme
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    /* Overlay: bg-black/80 + backdrop-blur-md */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      {/* Modal Paneli */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-gray-900 border border-gray-700/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)' }}
      >
        {/* Kapat Butonu — z-50 ile her zaman üstte */}
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-gray-800/90 hover:bg-gray-700 border border-gray-600/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {/* İçerik: mobilde flex-col (video üst, detay alt) | md'de flex-row */}
        <div className="flex flex-col md:flex-row overflow-y-auto md:overflow-hidden md:h-full">

          {/* Sol / Üst: Video Bölümü */}
          <div className="w-full md:w-[55%] shrink-0 flex flex-col bg-gray-950">

            {embedSrc ? (
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={embedSrc}
                  title={book.videoTitle || book.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-950 text-gray-700">
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            )}

            {/* Video başlığı + tarihi + zaman damgası */}
            {book.videoTitle && (
              <div className="px-5 py-3 border-t border-gray-800/60 bg-gray-950/80">
                <div className="flex items-start gap-2">
                  <YouTubeSVG className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-300 text-xs font-medium leading-snug line-clamp-2">
                      {book.videoTitle}
                    </p>
                    <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                      {book.videoDate && (
                        <p className="text-gray-600 text-xs">
                          {new Date(book.videoDate).toLocaleDateString('tr-TR', {
                            day: 'numeric', month: 'long', year: 'numeric',
                          })}
                        </p>
                      )}
                      {book.startTimestamp && book.endTimestamp && (
                        <p className="text-gray-700 text-xs font-mono">
                          {formatTime(book.startTimestamp)} – {formatTime(book.endTimestamp)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sağ / Alt: Kitap Bilgileri — flex-col + gap-y-4 ile sabit aralıklı dikey düzen */}
          <div className="w-full md:w-[45%] flex flex-col gap-y-4 md:overflow-y-auto p-6">

            {/* Kapak + Başlık + Meta */}
            <div className="flex gap-4">

              {/* Sabit w-24 h-36, object-contain → yamulma yok */}
              <div className="w-24 h-36 shrink-0 rounded-xl overflow-hidden border border-gray-700/50 shadow-xl bg-gray-800">
                {!imgError ? (
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-contain"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Kırık link → baş harfli şık kutu */
                  <InitialsFallback title={book.title} />
                )}
              </div>

              {/* Başlık & Meta — pr-12: X butonuyla asla çakışmaz */}
              <div className="flex flex-col gap-y-1.5 min-w-0 justify-center pr-12">
                {/* text-lg md:text-xl: uzun başlıklar mobilde devasa olmaz; line-clamp-3: 3 satırda kesilir */}
                <h2 className="text-white text-lg md:text-xl font-bold leading-snug line-clamp-3">
                  {book.title}
                </h2>
                <div className="flex items-center gap-2">
                  <PersonIcon />
                  <p className="text-gray-300 text-sm leading-snug">{book.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpenIcon />
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{book.publisher}</p>
                </div>
              </div>
            </div>

            {/* Video referansı zaman bilgisi */}
            {book.startTimestamp && book.endTimestamp && (
              <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700/40 rounded-2xl px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                  <YouTubeSVG className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Video referansı</p>
                  <p className="text-gray-200 text-sm font-mono font-semibold">
                    {formatTime(book.startTimestamp)} → {formatTime(book.endTimestamp)}
                  </p>
                </div>
              </div>
            )}

            {/* Satın Al Butonu — mt-auto ile her zaman en altta */}
            {book.purchaseLink && (
              <div className="mt-auto pt-2">
                <a
                  href={book.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-fuchsia-500 hover:bg-fuchsia-400 active:bg-fuchsia-600 text-white font-bold py-3.5 px-5 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-fuchsia-500/30 text-sm"
                >
                  <ExternalLinkIcon />
                  Kitapyurdunda Görüntüle
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
