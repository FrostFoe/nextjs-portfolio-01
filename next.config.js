import createMDX from "@next/mdx";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: 'export',
};

const withMDX = createMDX({});

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

export default bundleAnalyzerConfig(withMDX(nextConfig));
