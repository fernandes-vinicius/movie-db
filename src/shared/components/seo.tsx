import { Helmet } from "react-helmet-async";
import { SEO_CONFIG } from "@/shared/config/seo-config";

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description = SEO_CONFIG.description }: SEOProps) {
  return (
    <Helmet>
      <title>
        {title ? `${title} | ${SEO_CONFIG.title}` : SEO_CONFIG.title}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
