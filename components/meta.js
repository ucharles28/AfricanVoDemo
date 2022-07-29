import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ( pageMeta ) => {
  const router = useRouter();

  const meta = {
    title: 'Africanvo - African’s largest voice over marketplace.',
    description: 'African’s largest voice over marketplace.',
    type: 'website',
    ... pageMeta,


  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link ref="icon" href="../../assets/img/favicon.png" />
        <meta name="description" content={meta.description} />
        <meta property='og:url' content={`https://localhost:7777${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Voice Over Marketplace" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
    </>
  )
}

export default Meta;
