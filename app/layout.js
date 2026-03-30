import './globals.css';
import MusicPlayer from './MusicPlayer';

export const metadata = {
  title: 'St. John Paul II Parish - Holy Week 2026',
  description: 'Schedule, Senakulo, Apostles, and Holy Week 2026 activities at St. John Paul II Parish Diocese of Tarlac.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar glass-panel">
          <div className="nav-content">
            <a href="#home" className="nav-logo">
              <img src="/logo.webp" alt="SJP2 Logo" className="nav-logo-img" />
            </a>
            <ul className="nav-links">
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#senakulo">Senakulo</a></li>
              <li><a href="#apostles">Apostles</a></li>
              <li><a href="#activities">Activities</a></li>
              <li><a href="#prayer">Prayer</a></li>
            </ul>
          </div>
        </nav>
        
        <main>{children}</main>
        <MusicPlayer />
        
        <footer className="footer glass-panel">
          <p>St. John Paul II Parish - Diocese of Tarlac &copy; 2026</p>
          <p>Contact: 0932 559 0881 | Est. 2016</p>
          <p className="footer-fb">
            <a href="https://www.facebook.com/profile.php?id=100080028258021" target="_blank" rel="noopener noreferrer">
              Follow us on Facebook
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
