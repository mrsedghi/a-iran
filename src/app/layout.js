import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../providers/ThemeProvider";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "آ ایران | A Iran - پوشاک زنانه با الهام از هنر اصیل ایرانی",
  description: "برند آ ایران، ارائه‌دهنده پوشاک زنانه لوکس با الهام از نقوش و الگوهای اصیل ایرانی و مد مدرن. لباس‌های دوخته شده با کیفیت عالی و طراحی منحصر به فرد.",
  keywords: ["پوشاک زنانه", "مد ایرانی", "لباس زنانه", "فشن ایرانی", "آ ایران", "A Iran"],
  authors: [{ name: "A Iran" }],
  openGraph: {
    title: "آ ایران | A Iran - پوشاک زنانه با الهام از هنر اصیل ایرانی",
    description: "برند آ ایران، ارائه‌دهنده پوشاک زنانه لوکس با الهام از نقوش و الگوهای اصیل ایرانی",
    type: "website",
    locale: "fa_IR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1B5E3E" />
      </head>
      <body className={`${vazirmatn.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
