import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "sunspiretourism.com",
      },
      {
        protocol: "https",
        hostname: "altahadybikerent.com",
      },
      {
        protocol: "https",
        hostname: "spicemastersa.com",
      },
      {
        protocol: "https",
        hostname: "gulfroutes.com",
      },
    ],
  },
  serverExternalPackages: ["cloudinary", "nodemailer"],
};

export default nextConfig;
