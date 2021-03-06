
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="alternate icon" type="image/png" href="https://github.githubassets.com/favicons/favicon-dark.png"></link>
          <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
        <body id='ss'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;