import { configure, getStorybookUI } from "@storybook/react-native";

import "./rn-addons";

configure(() => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  require("./stories");
}, module);

//exp://192.168.1.109:19000
//http://172.30.48.1:7007/

const StorybookUIRoot = getStorybookUI({
  host: "172.30.48.1",
  port: 7007,
  asyncStorage: null,
});

export default StorybookUIRoot;
