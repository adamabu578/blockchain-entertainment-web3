// import type { Metadata } from "next";
// import { Analytics } from "@vercel/analytics/next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Blockchain & Entertainment Event",
//   description:
//     "Africa's Premier WEB3 entertainment event where innovation meets creativity.",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="overflow-x-hidden">
//       <body className="antialiased overflow-x-hidden bg-black">
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { polySans } from "@/font"; // adjust path
import "./globals.css";

export const metadata: Metadata = {
  title: "Blockchain & Entertainment Event",
  description:
    "Africa's Premier WEB3 entertainment event where innovation meets creativity.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${polySans.className} antialiased overflow-x-hidden bg-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
