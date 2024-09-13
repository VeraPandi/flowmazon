export default function Footer() {
  return (
    <footer className="bg-neutral p-10 text-neutral-content">
      <div className="footer m-auto max-w-7xl">
        <div>
          <span className="footer-title">Services</span>
          <a className="link-hover link">Nos produits</a>
          <a className="link-hover link">Nos services</a>
          <a className="link-hover link">Notre engagement</a>
        </div>
        <div>
          <span className="footer-title">Entreprise</span>
          <a className="link-hover link">À propos de nous</a>
          <a className="link-hover link">Contact</a>
          <a className="link-hover link">Carrières</a>
        </div>
        <div>
          <span className="footer-title">Mentions légales</span>
          <a className="link-hover link">Conditions générales de vente</a>
          <a className="link-hover link">Politique de confidentialité</a>
          <a className="link-hover link">Politique de cookies</a>
        </div>
      </div>
    </footer>
  );
}
