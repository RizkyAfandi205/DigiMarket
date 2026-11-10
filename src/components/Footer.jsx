import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="dm-footer mt-auto">
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <Link to="/" className="dm-footer-brand">Digi<span>Market</span></Link>
            <p className="dm-footer-copy mb-0 mt-2">Tempat menemukan aset digital untuk kebutuhan kreatifmu.</p>
          </div>
          <small className="dm-footer-copy">© {new Date().getFullYear()} DigiMarket. Semua hak dilindungi.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
