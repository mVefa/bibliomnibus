import { YouTubeSVG, GitHubIcon } from './Icons';

const GITHUB_PROFILE = 'https://github.com/mVefa';
const GITHUB_REPO    = 'https://github.com/mVefa';
const OMNIBUS_YT     = 'https://www.youtube.com/@OMNIBUSLIVE';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800/50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-5">

        {/* ── Disclaimer ── */}
        <p className="text-center text-xs text-gray-500 italic leading-relaxed max-w-2xl mx-auto">
          Bu platform, Omnibus videolarını severek izleyen bir bilgisayar mühendisliği öğrencisinin,
          hocanın paylaştığı kıymetli eserleri bir araya getirmek için kendi isteğiyle hazırladığı
          gönüllü bir arşivdir. Omnibus veya Kitapyurdu ile resmi/ticari bir bağım yoktur;
          sadece bir takipçi projesidir.
        </p>

        {/* ── Ayırıcı ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* ── Alt satır: imza (sol) + ikonlar (sağ) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* İmza */}
          <p className="text-xs text-gray-600 tracking-wide text-center sm:text-left">
            <span className="mr-1">💻</span>
            Geliştiren:{' '}
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-500/80 hover:text-fuchsia-400 transition-colors duration-200 underline underline-offset-2 decoration-fuchsia-500/30 hover:decoration-fuchsia-400/60"
            >
              Muhammet Vefa Yoksul
            </a>
          </p>

          {/* İkonlar */}
          <div className="flex items-center gap-3">
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub reposu"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 hover:border-fuchsia-500/40 hover:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-fuchsia-400 transition-all duration-200"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={OMNIBUS_YT}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Omnibus YouTube kanalı"
              className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 hover:border-red-500/40 hover:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-red-400 transition-all duration-200"
            >
              <YouTubeSVG className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
