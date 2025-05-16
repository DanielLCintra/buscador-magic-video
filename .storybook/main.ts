import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {}
  },
  viteFinal: async (config, { configType }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        "next/image": path.resolve(__dirname, "./mocks/NextImage.tsx"),
        "next/link": path.resolve(__dirname, "./mocks/NextLink.tsx"),
      }
    };
    return config;
  }
};

export default config;
