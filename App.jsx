import booksData from './data/books.json';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>ESG Kitap Arşivi</h1>
      <p>Toplam {booksData.length} kitap listeleniyor.</p>
      
      <ul>
        {booksData.slice(0, 5).map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App