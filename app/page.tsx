import { CatalogTabs } from "@/components/CatalogTabs";
import { Hero } from "@/components/Hero";
import { OptionsNote } from "@/components/OptionsNote";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CatalogTabs />
      <OptionsNote />
    </>
  );
}
