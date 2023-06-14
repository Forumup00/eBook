// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "eBook",
      htmlAttrs: {
        dir: "ltr",
        lang: "en",
      },
      bodyAttrs: {
        mood: "light",
      },
      meta: [
        {
          name: "description",
          content: "ebook website",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity:
            "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/style/main.scss",
  ],
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "ar-EG",
        iso: "ar-EG",
        name: "Arabic",
        file: "ar-EG.json",
      },
    ],
    defaultLocale: "en-US",
  },
  alias: {
    assets: "/<rootDir>/assets",
  },
  ssr: false,
});
