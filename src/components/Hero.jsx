// Hero bölümü — tek satır sözlük tanımı + dinamik metadata

export default function Hero({ totalCount, latestDate }) {
  // "2026-04-12" → "12 Nisan 2026" (Türkçe)
  const formattedDate = latestDate
    ? new Date(latestDate + 'T00:00:00').toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6">
      <div className="border-b border-gray-800/50 pb-7">

        {/* Ana başlık — büyük neon mor gradient */}
        <h2
          className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-none mb-3"
          style={{
            background: 'linear-gradient(90deg, #e879f9 0%, #a855f7 50%, #d946ef 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          bib·li·om·ni·bus
        </h2>

        {/* Birleşik satır: telaffuz + tanım */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 max-w-3xl">
          <span className="font-mono text-purple-400/80 mr-2">/ˌbib.li.ˈɒm.nɪ.bəs/</span>
          <span className="text-gray-500 mr-2">—</span>
          Birden fazla eserin tek bir çatı altında toplandığı külliyat; derlenmiş eserler bütünü.
        </p>

        {/* Proje açıklaması */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-4">
          Emrah Safa Gürkan'ın videolarındaki haftalık kitap önerilerini bir araya getiren{' '}
          <span className="font-semibold" style={{ color: '#d946ef' }}>sürekli büyüyen</span>{' '}
          gönüllü bir dijital arşiv.
        </p>

        {/* Dinamik metadata satırı */}
        <p className="text-xs text-gray-600 tracking-wide">
          <span className="text-purple-500/70 font-semibold tabular-nums">{totalCount}</span>
          <span className="mx-1">Eser</span>
          <span className="text-gray-700 mx-1.5">•</span>
          <span>Son Güncelleme:</span>
          {formattedDate && (
            <span className="text-purple-500/70 font-medium ml-1">{formattedDate}</span>
          )}
        </p>

      </div>
    </section>
  );
}
