import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "CurrencyConverter",
  slug: "CurrencyConverter",
  extra: {
    eas: {
      projectId: "98d7becf-b9c8-4b13-a85c-161ef4f32096",
    },
  },
  owner: "manueldev04",
  updates: {
    url: "https://u.expo.dev/98d7becf-b9c8-4b13-a85c-161ef4f32096",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
};

export default config;
