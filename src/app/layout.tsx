import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/theme';
import { AuthProvider } from '@/hooks/useAuth';

export const metadata: Metadata = {
  title: { default: 'ArtWall Studio', template: '%s | ArtWall Studio' },
  description: 'Collection de tableaux et papiers peints de luxe.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <AuthProvider>
            <GlobalStyle />
            {children}
            <Toaster position="bottom-right" toastOptions={{ style: { fontFamily: 'var(--font-body)', background: 'var(--off-black)', color: 'var(--off-white)', borderRadius: '4px', fontSize: '14px' } }} />
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
