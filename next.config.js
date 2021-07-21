module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      ],
      type: "javascript/auto",
    });
    return config;
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};
