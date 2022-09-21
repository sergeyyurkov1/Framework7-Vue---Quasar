import { boot } from "quasar/wrappers";

import Framework7 from "framework7/lite-bundle";
import Framework7Vue, { registerComponents } from "framework7-vue/bundle";

import "framework7/css/bundle";

export default boot(async ({ app }) => {
  Framework7.use(Framework7Vue);
  registerComponents(app);
});
