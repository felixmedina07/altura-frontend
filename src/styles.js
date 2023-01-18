export const styles = ({ breakpoints }) => ({
    root: {
      margin: "0",
      background: "#090013",
      overflowX: 'hidden',
      overflowY:'auto',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      width: "100%",
      height: "100vh",
      '&::-webkit-scrollbar': {
        display:'none'
      },
    },
    mainConteiner: {
      height: "inherit",
    },
    container: {
      height: "inherit",
    }
  });