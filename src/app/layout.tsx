import './globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Trattoria Fedeli',
    description: '',
    icons: {
        icon: '/icon.png',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}
