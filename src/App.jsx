import { useState, useCallback, useMemo } from 'react';
import booksData from './data/books.json';

import Header   from './components/Header';
import Hero     from './components/Hero';
import BookCard from './components/BookCard';
import BookModal from './components/BookModal';
import Footer   from './components/Footer';
import { SearchIcon } from './components/Icons';

export default function App() {
  const [query, setQuery]               = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  // En son videoDate (metadata için)
  const latestDate = useMemo(
    () => booksData
      .map(b => b.videoDate)
      .filter(Boolean)
      .sort()
      .at(-1) ?? null,
    []
  );

  // Kitapları videoDate'e göre yeniden eskiye sırala (bir kez hesapla)
  const sortedBooks = useMemo(
    () => [...booksData].sort((a, b) => {
      const da = a.videoDate ? new Date(a.videoDate).getTime() : 0;
      const db = b.videoDate ? new Date(b.videoDate).getTime() : 0;
      return db - da; // yeni → eski
    }),
    [] // booksData statik import olduğundan deps boş
  );

  // Sıralı liste üzerinden filtrele
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sortedBooks;
    return sortedBooks.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
    );
  }, [query, sortedBooks]);

  const handleClose = useCallback(() => setSelectedBook(null), []);

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-fuchsia-500/30">

      {/* ── Navigasyon çubuğu ── */}
      <Header
        query={query}
        onQueryChange={setQuery}
      />

      {/* ── Arşiv başlığı / tanıtım şeridi ── */}
      {!query && <Hero totalCount={booksData.length} latestDate={latestDate} />}

      {/* ── Kitap Grid'i ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-gray-600">
            <SearchIcon />
            <p className="mt-4 text-base text-gray-500">
              <span className="text-gray-300">"{query}"</span> için sonuç bulunamadı.
            </p>
            <button
              onClick={() => setQuery('')}
              className="mt-3 text-fuchsia-400 hover:text-fuchsia-300 text-sm underline underline-offset-2 transition-colors"
            >
              Aramayı temizle
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Detay Modal ── */}
      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleClose} />
      )}
    </div>
  );
}
