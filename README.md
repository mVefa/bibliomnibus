# BİBLİOMNİBUS

> *bib·li·om·ni·bus* — /ˌbib.li.ˈɒm.nɪ.bəs/
> Birden fazla eserin tek bir çatı altında toplandığı külliyat; derlenmiş eserler bütünü.

---

## Hikaye

**BİBLİOMNİBUS**, Omnibus videolarında her hafta paylaşılan kıymetli kitap önerilerinin kaybolmaması, düzenli ve erişilebilir bir şekilde saklanması amacıyla geliştirilmiş gönüllü bir projedir; zira bu öneriler videoların farklı anlarına dağılmış durumda olduğundan, izleyicilerin hem not alma hem de ilgili saniyeye geri dönme zahmetini ortadan kaldırmak ve tüm içerikleri video referanslı, bütünlüklü bir külliyat haline getirmek hedeflenmiştir.

---

## Özellikler

- **Saniye bazlı referans** — Her kitap kartında YouTube embed'i var; hocanın o kitaptan bahsettiği saniyeden başlar, ilgili bölümde biter. Videonun başına geri sarmak yok.
- **Anlık arama** — Kitap adı veya yazar adıyla filtrele; arama kutusuna yazarken liste anında güncellenir.
- **Lügat estetiği** — Başlık bir sözlük maddesi gibi tasarlandı. Ciddi ama soğuk değil.
- **Mobil öncelikli** — Tailwind ile yazıldı, telefonda da masaüstünde de aynı şekilde çalışıyor.
- **Dinamik metadata** — Kitap sayısı ve son güncelleme tarihi `books.json`'dan otomatik okunuyor; yeni kitap ekleyince her şey kendiliğinden güncelleniyor.

---

## Teknik

```
React 19 + Vite + Tailwind CSS v4
```

Büyük bir altyapı yok. Tüm kitap verisi tek bir `books.json` dosyasında duruyor. Her kitap için şu alanlar tutuluyor:

```json
{
  "id": "kitap-slug",
  "title": "Kitap Adı",
  "author": "Yazar",
  "publisher": "Yayınevi",
  "videoTitle": "Hangi videoda geçtiği",
  "videoDate": "2026-04-12",
  "youtubeId": "videoId",
  "startTimestamp": 3575,
  "endTimestamp": 3689,
  "coverImage": "kapak-url",
  "purchaseLink": "kitapyurdu-linki"
}
```

---

## Kurulum

```bash
git clone https://github.com/mVefa/bibliomnibus
cd bibliomniibus
npm install
npm run dev
```

### Yeni kitap eklemek

`src/data/books.json` dosyasını aç, yeni bir nesne ekle, kaydet. Başka bir şey gerekmez.

---

## Sorumluluk Reddi

Bu tamamen bir **öğrenci hayran projesidir.**

Emrah Safa Gürkan hocamla, Omnibus kanalıyla veya Kitapyurdu ile hiçbir resmi ya da ticari bağım yoktur. Bu siteyi yapmak için kimseden izin almadım, kimseyle anlaşmadım; tamamen keyfi ve gönüllüdür.


---

## Geliştirici

**Muhammet Vefa Yoksul**

[github.com/mVefa](https://github.com/mVefa)

---

*"Bilginin külliyatı, paylaşıldıkça büyür."*
