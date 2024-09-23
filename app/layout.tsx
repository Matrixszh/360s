import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://360-ms-git-main-syed-zain-hussainis-projects.vercel.app/"),
  title: "360 Marketing Solutions",
  description:
    "360 Marketing Solutions is a dynamic, forward-thinking marketing agency.",
  openGraph: {
    title: "360 Marketing Solutions",
    description:
      "360 Marketing Solutions is a dynamic, forward-thinking marketing agency.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "360 Marketing Solutions",
      },
    ],
    type: "website",
    url: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "360 Marketing Solutions",
    description:
      "360 Marketing Solutions is a dynamic, forward-thinking marketing agency.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
{
  /* <meta property="og:image" content="Link preview image URL"></meta> */
}
