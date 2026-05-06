export const metadata = {
  title: "Business Profiles - Glean Intelligence Brief",
  description: "Display Glean Intelligence Brief",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
