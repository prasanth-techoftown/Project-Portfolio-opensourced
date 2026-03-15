import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

// change to your domain
export const metadata = {
  metadataBase: new URL("https://example.dev"), 

  title: {
    default: "Prasanth K – Full Stack Software Engineer",
    template: "%s | Prasanth K",
  },

  description:
    "Prasanth K is a Full Stack Software Engineer specializing in Java, Spring Boot, React, scalable backend systems, and mentoring 400+ students.",

  keywords: [
    "Prasanth K",
    "Prasanth Software Engineer",
    "Full Stack Developer India",
    "Java Spring Boot Developer",
    "React Developer Portfolio",
    "Backend Engineer India",
    "Software Engineer Portfolio",
    "Spring Boot Developer India",
  ],

  authors: [{ name: "Prasanth K", url: "https://example.dev" }],
  creator: "Prasanth K",
  publisher: "Prasanth K",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical:"https://example.dev",
  },

  openGraph: {
    title: "Prasanth K – Full Stack Software Engineer",
    description:
      "Portfolio, blogs, and engineering insights by Prasanth K. Java, Spring Boot, React expert.",
    url: "https://example.dev",
    siteName: "Prasanth Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Prasanth K Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prasanth K – Software Engineer",
    description: "Full Stack Engineer | Java | Spring Boot | React",
    images: ["/og.png"],
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prasanth K",
              url: "https://example.dev",
              image: "https://example.dev/profile.jpg",
              jobTitle: "Full Stack Software Engineer",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
              ],
              knowsAbout: [
                "Java", "Spring Boot", "React", "Backend Development", "System Design",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>

        <ToastContainer />
        <main className="min-h-screen relative md:mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <Analytics />
          <ScrollToTop />
        </main>
        <Footer />
      </body>

      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
