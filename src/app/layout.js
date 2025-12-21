import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import NavBar from './components/navbar'; 
import Footer from './components/footer';

export const metadata = {
  title: "NewJeans",
  description: "eh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
    
      <body>
        <NavBar/>
        <div>{children}</div>
        <Footer />
        </body>
    </html>
  );
}