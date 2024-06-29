import { extendTheme } from 'native-base';

    const theme = extendTheme({
      components: {
        Button: {
          baseStyle: {
            rounded: "md",
          },
        },
        Heading: {
          baseStyle: ({ colorMode }) => {
            return {
              color: colorMode === "dark" ? "red.300" : "blue.300",
              fontWeight: "normal",
            };
          },
        },
        Text: {
          baseStyle: {
            fontSize: 40,
          },
        },
      },
      colors: {
        amber: {
          400: "#ffc529",
        },
      },
    });
export default theme;