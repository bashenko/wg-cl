// app/layout.tsx
import type { Metadata } from "next";
import axios from "axios";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/meta`); // Replace with your API endpoint
    const meta = response.data.data;

    return {
      title: meta.title || "Default Title",
      description: meta.description || "Default description",
      openGraph: {
        title: meta.og_title || meta.title,
        description: meta.og_description || meta.description,
        url: meta.og_url || " ",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${meta.og_image}`,
            width: 800,
            height: 600,
            alt: meta.og_image_alt || "Forum Image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: meta.twitter_title || meta.title,
        description: meta.twitter_description || meta.description,
        images: [`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${meta.twitter_image}`],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Government Services Forum",
      description: "Government Services Forum 2024",
    };
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}