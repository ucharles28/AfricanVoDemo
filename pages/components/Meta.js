import Head from 'next/head';
import { useRouter  } from 'next/router';

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
        <meta propert="og:type" content={meta.type} />
        <meta propert="og:site_name" content="Voice Over Marketplace" />
        <meta propert="og:description" content={meta.description} />
        <meta propert="og:title" content={meta.title} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
    </>
  )
}

export default Meta;
