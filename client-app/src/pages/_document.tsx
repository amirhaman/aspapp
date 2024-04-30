import { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
export default function Document({ props }: { props: DocumentHeadTagsProps }) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
        <link rel="preconnect" href={`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL_GRAPHQL}`}/>
        <link rel="preconnect" href="https://www.googleapis.com" />
        <link rel="preconnect" href="https://apis.google.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D8E3E7" />
      </Head>
      <body className='w-full flex flex-col'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
