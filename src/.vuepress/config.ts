import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "鸣人同学",
      description: "有话直说，说到做到，这就是我的忍道！",
    },
    "/": {
      lang: "en-US",
      title: "naruto",
      description: "To Be The Best!",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
