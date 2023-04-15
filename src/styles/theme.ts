import { Theme as EmotionTheme } from "@emotion/react";

export interface Theme extends EmotionTheme {
  colors: {
    point: string;
  };
  fonts: {};
}

export const theme: Theme = {
  colors: {
    point: "#ffa3b2"
    // primary: "blue",
    // secondary: "green"
  },
  fonts: {
    // body: "Arial, sans-serif",
    // heading: "Helvetica, sans-serif"
  }
};
