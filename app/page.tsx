import Image from "next/image"
import FeedbackSlider from "./components/Feedback"
import HeaderCarousel from "./components/CarouselHeader"
import TestimonialSection from "./components/TestimonialSection"
import PartCategoriesSection from "./components/ProductsType"
import PartsDifferentiationSection from "./components/GenuineAftermarket"
import CategoryTabs from "./components/PartsCategories"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 md:p-10 xs:p-5 xxs:p-5 sm:p-5 s:p-5'>
      <HeaderCarousel />
      <PartCategoriesSection />
      <CategoryTabs />

      <PartsDifferentiationSection />

      <TestimonialSection />
      <div className='flex justify-center'>
        <FeedbackSlider />
      </div>
    </main>
  )
}
