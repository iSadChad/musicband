import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import NavBar from './components/navbar'; 
import Footer from './components/footer';

export const metadata = {
  title: "NewJeans",
  description: "Unofficial fan site for the K-pop group NewJeans",
  icon: {"icon": "/favicon.svg"},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}