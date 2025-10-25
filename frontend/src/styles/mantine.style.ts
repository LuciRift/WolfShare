import { MantineThemeOverride } from "@mantine/core";

export default <MantineThemeOverride>{
  colors: {
    victoria: [
  "#F1E1E1",
  "#E7C0C0",
  "#E49D9D",
  "#E87676",
  "#F44A4A",
  "#DE4040",
  "#C83939",
  "#A83F3F",
  "#8E4242",
  "#794646",
    ],
  },
  primaryColor: "victoria",
  components: {
    Modal: {
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
        },
      }),
    },
  },
};
