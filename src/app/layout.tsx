import './globals.css';

import { Noto_Sans_KR } from 'next/font/google';

const NotoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={NotoSansKR.className}>
      <body className='relative min-h-screen max-w-screen-xl bg-gray-100'>
        {children}
      </body>
    </html>
  );
}
