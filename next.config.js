/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URL:
      // "mongodb+srv://rabil:rabil@cluster0.wk291zy.mongodb.net/ecom-rabilcandy?retryWrites=true&w=majority",
      "mongodb+srv://rabil:rabil@cluster0.wk291zy.mongodb.net/ecom-rabilcandy?retryWrites=true&w=majority",
    SENDER_PASSWORD: "wuip jfxb bmgh twcv",
    SENDER_EMAIL: "cyn.webservices@gmail.com",
    RECEIVER_EMAIL: "mdaksel01@gmail.com",
    SMTP_HOST: "smtp.gmail.com", // "smtp.ethereal.email", //
  },
};

module.exports = nextConfig;
