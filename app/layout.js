import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import './i18n'

import { TranslationProvider } from './TranslationContext';

export default function RootLayout({ children }) {
  return (

    <html>

      <body className={inter.className}>
    <TranslationProvider>

        {children}
        </TranslationProvider>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YTL1F2E53E"
        />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-YTL1F2E53E');
        `}} />

        </body>

    </html>

  )
}
