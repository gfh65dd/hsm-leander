import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  keywords?: string;
}

export default function SEO({
  title,
  description,
  name = "Hyderabadi Spicy Matka",
  type = "website",
  keywords = ""
}: SEOProps) {

  // Strong default keywords for local SEO
  const baseKeywords = "best restaurants, best restaurants in leander, indian restaurants in leander, Indian food Leander TX, authentic indian food, hyderabadi food near me, spicy matka, top rated restaurants leander, biryani in leander, tandoori, curries, south indian food, best dinner spot leander, catering services leander boundary";
  const finalKeywords = keywords ? `${baseKeywords}, ${keywords}` : baseKeywords;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content={finalKeywords} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
