/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Tambahkan ini jika ada masalah dengan gambar
  },
};

module.exports = nextConfig;

