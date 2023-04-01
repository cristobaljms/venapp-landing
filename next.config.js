/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: "https://hub.venapp.com",
    publicKey: "555gegffefej565xnuT8cjxj56jiyvrzvGtLOsgecvLftt265kgCf1TAA",
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: "854279205592160",
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: "GTM-TXT6CDJ"
  },
};

module.exports = nextConfig;
