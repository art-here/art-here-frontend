import { Theme as EmotionTheme } from "@emotion/react";

export interface Theme extends EmotionTheme {
  colors: {
    point: string;
  };
  fonts: {};
}

export const theme: Theme = {
  colors: {
   gray: "#ececec"
    point: "#ffa3b2"
    // primary: "blue",
    // secondary: "green"
  },
  media: {
    desktop: "@media (min-width: 1200px)",
    laptop: "@media (min-width: 992px)",
    tablet: "@media (min-width: 768px)",
    mobile: "@media (min-width: 480px)"
  }
};
