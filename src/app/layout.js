import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import NavBar from './components/navbar'; 
import Footer from './components/footer';

export const metadata = {
  title: "NewJeans",
  description: "eh",
  icon: {"icon": "/favicon.svg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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