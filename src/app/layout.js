import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'TokenFlow | AI API Cost Intelligence & Optimization',
    description: 'The production-grade solution for monitoring, analyzing, and optimizing your global AI API spend. Save up to 40% on LLM costs.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
