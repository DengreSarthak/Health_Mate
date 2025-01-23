import "./globals.css"
import { Inter } from "next/font/google"
import { MainNav } from "@/components/main-nav"
import { SidebarProvider } from "@/components/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Therapist Chatbot",
  description: "A supportive AI chatbot for mental health",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr]">
            <MainNav />
            <main className="flex-1">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

