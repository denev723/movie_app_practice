import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description?: string;
}

export const HelmetMeta = ({ title, description }: Props) => {
  const fullTitle = `${title} | My Movie App`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta name="og:description" content={description} />}
    </Helmet>
  );
};
