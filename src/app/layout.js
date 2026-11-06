import { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  preload: true,
});

export const metadata = {
  title: {
    default: 'Shihad Ahmed — Full-Stack MERN Developer',
    template: '%s | Shihad Ahmed',
  },
  description:
    'Full-Stack MERN Developer passionate about building scalable web applications and robust backend systems. Experienced in React, Node.js, Express, MongoDB, TypeScript, and modern UI libraries.',
  keywords: [
    'Full-Stack Developer',
    'MERN Stack',
    'React Developer',
    'Node.js Developer',
    'MongoDB',
    'TypeScript',
    'Tailwind CSS',
    'Web Development',
  ],
  authors: [{ name: 'Shihad Bin Ahmed', url: 'https://github.com/shihadahmed' }],
  creator: 'Shihad Bin Ahmed',
  publisher: 'Shihad Bin Ahmed',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shihadahmed.vercel.app',
    siteName: 'Shihad Ahmed',
    title: 'Shihad Ahmed — Full-Stack MERN Developer',
    description:
      'Full-Stack MERN Developer passionate about building scalable web applications and robust backend systems.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shihad Ahmed - Full-Stack MERN Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shihad Ahmed — Full-Stack MERN Developer',
    description:
      'Full-Stack MERN Developer passionate about building scalable web applications and robust backend systems.',
    images: ['/og-image.jpg'],
    creator: '@shihadahmed',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main" className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}