import Image from "next/image"
import FeedbackSlider from "./components/Feedback"
import HeaderCarousel from "./components/CarouselHeader"
import TestimonialSection from "./components/TestimonialSection"
import PartCategoriesSection from "./components/ProductsType"
import PartsDifferentiationSection from "./components/GenuineAftermarket"
import CategoryTabs from "./components/PartsCategories"
import FormComponent from "./components/FormComponent"
import CarBrandsGrid from "./components/BrandsWeDeal"
import posts from "../CarBrandGrid"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between lg:p-24 xl:p-24 xxl:p-24 md:p-10'>
      <HeaderCarousel />
      <PartCategoriesSection />
      <CategoryTabs />
      <FormComponent />
      <CarBrandsGrid posts={posts} />

      <PartsDifferentiationSection />

      <TestimonialSection />
      <div className='flex justify-center'>
        <FeedbackSlider />
      </div>
    </main>
  )
}
