import Head from 'next/head';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { Articles } from '@/components/Activities/Activities';
// import { getPages, getPageByUri } from '@/lib/wp-services/wpGraphqlservice';
// import { GetStyleSheet } from '@/lib/wp-services/wpGraphqlservice';
// import { BlockRendererProvider } from '../utils/wpRenderer/WpRenderer.mjs';
// import WpBlockRenderer from '../components/WpBlockRenderer.js';
// import CustomLink from '@/components/CustomLink/CustomLink';
import NavigationComponent from '@/components/NavigationComponent/NavigationComponent';

export default function PageLayout({ page, themeStyleSheet }: { page: any; themeStyleSheet: string }) {
  return (
    <>
      <Head>
        <title>{page?.seo?.title}</title>
        <meta name="description" content={page?.seo?.opengraphDescription}></meta>
        <style type="text/css">{themeStyleSheet}</style>
      </Head>
      <NavigationComponent />
      <Articles />
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const pages = await getPages(); // retrieve first 100 posts
//   pages.map((page: any) => (page.uri === '/' ? (page.uri = '/home') : null));
//   return {
//     paths: pages.map((page: any) => `${page.uri}`),
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const page = await getPageByUri(params?.page as string);
//   const themeStyleSheet = await GetStyleSheet();
//   return {
//     props: { page, themeStyleSheet },
//   };
// };
