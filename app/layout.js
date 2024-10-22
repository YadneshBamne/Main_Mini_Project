
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "./Provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HOLMES - PG Accomodation",
  description: "One Stop Solution for Finding PG's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        
      <body className={inter.className}>
      
        <Navbar/>
        <AuthProvider>
        
            {children}
          
          </AuthProvider>
          
        <Footer/>

        </body>
        
    </html>
  );
}
