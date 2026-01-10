import {
  HeroSlider,
  ProductCollections,
  StatsSection,
  WhyChooseXAG,
  ResourcesSection,
  TrainingPromo,
  SupportSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero Slider with Products */}
      <HeroSlider />

      {/* Product Collections - Airborne & Landborne */}
      <ProductCollections />

      {/* Impressive Numbers */}
      <StatsSection />

      {/* Why Choose XAG */}
      <WhyChooseXAG />

      {/* Resources - Case Studies, Videos, Blog */}
      <ResourcesSection />

      {/* Training Programs Promotion */}
      <TrainingPromo />

      {/* Customer Support */}
      <SupportSection />

      {/* Final CTA */}
      <CTASection
        titleKey="readyToTransform"
        descriptionKey="readyToTransformDesc"
        primaryCtaKey="ctaContact"
        primaryCtaHref="/contact-us"
        secondaryCtaKey="viewProducts"
        secondaryCtaHref="/products"
        variant="dark"
      />
    </>
  );
}
