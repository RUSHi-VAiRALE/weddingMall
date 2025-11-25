import { Playfair_Display, Raleway, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
});

export const metadata = {
  title: "WeddingBazaar - India's Largest Wedding Planning Platform",
  description: "Hire best wedding vendors such as photographers, makeup artists, venues, caterers, decorators and more. Plan your dream wedding with India's most trusted wedding platform.",
  keywords: "wedding, wedding planning, wedding vendors, photographers, makeup artists, caterers, venues, decorators, mehendi artists, wedding wear, India",
  authors: [{ name: "WeddingBazaar" }],
  openGraph: {
    title: "WeddingBazaar - India's Largest Wedding Planning Platform",
    description: "Hire best wedding vendors and plan your dream wedding",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${raleway.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
