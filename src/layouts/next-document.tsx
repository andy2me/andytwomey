import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssString, theme } from '@/local/stitches.config'

export class DocumentLayout extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Hey, I'm Andy. This is my single page website which explains who I am and how you can follow along or contact me. "/>

          {/*Facebook Meta Tags*/}
          <meta property="og:url" content="https://andytwomey.com/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Andy Twomey - Helping Marketers is my schtick."/>
          <meta property="og:description" content="Hey, I'm Andy. This is my single page website which explains who I am and how you can follow along or contact me. "/>
          <meta property="og:image" content="https://res.cloudinary.com/dpsoblb69/image/upload/v1620088330/img/andy-the-og_jcvwkd.png"/>

          {/*  Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="andytwomey.com"/>
          <meta property="twitter:url" content="https://andytwomey.com/"/>
          <meta name="twitter:title" content="Andy Twomey - Helping Marketers is my schtick."/>
          <meta name="twitter:description" content="Hey, I'm Andy. This is my single page website which explains who I am and how you can follow along or contact me. "/>
          <meta name="twitter:image" content="https://res.cloudinary.com/dpsoblb69/image/upload/v1620088330/img/andy-the-og_jcvwkd.png"/>

          {/* Icons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
          <link rel="manifest" href="/site.webmanifest?v=2" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#111111" />
          <link rel="shortcut icon" href="/favicon.ico?v=2" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#fffcee" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="css-reset"
            dangerouslySetInnerHTML={{ __html: `
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Global background */
html {
  background:
    linear-gradient(90deg, #FFF 20px, transparent 1%) center,
    linear-gradient(#FFF 20px, transparent 1%) center,
    ${theme.colors.bgGridFg};
  background-size: 22px 22px;
}

/* Sane defaults */
html {
  box-sizing: border-box;
  font-size: ${theme.fontSizes.base};
}
*, *:before, *:after {
  box-sizing: inherit;
}
body, #__next {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}
a {
  text-decoration: none;
  color: initial;
}` }}
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
