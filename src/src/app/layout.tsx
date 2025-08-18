import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <div className='flex flex-col pt-[96px]'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
