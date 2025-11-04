import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

import heroImage from "@/assets/hero-image.jpg";
import skincareImage from "@/assets/skincare-category.jpg";
import hairImage from "@/assets/hair-category.jpg";
import fragranceImage from "@/assets/fragrance-category.jpg";
import communityImage from "@/assets/community-category.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero heroImage={heroImage} />
      
      <section id="categories" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              당신에게 맞는 카테고리를 선택하세요
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              스킨케어부터 헤어스타일링, 향수, 커뮤니티까지 모든 것을 한 곳에서
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <CategoryCard
              title="스킨케어"
              description="피부 타입별 맞춤 루틴과 제품 추천"
              image={skincareImage}
              href="#skincare"
            />
            <CategoryCard
              title="헤어스타일링"
              description="얼굴형에 맞는 헤어스타일과 제품 가이드"
              image={hairImage}
              href="#hair"
            />
            <CategoryCard
              title="향수 & 바디케어"
              description="상황별 향수 추천과 바디케어 제품"
              image={fragranceImage}
              href="#fragrance"
            />
            <CategoryCard
              title="MAN TALK"
              description="사용자들과 소통하는 그루밍 커뮤니티"
              image={communityImage}
              href="#community"
            />
          </div>
        </div>
      </section>

      <ProductSection />

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            AI 기반 맞춤 추천으로 당신만의 완벽한 그루밍 루틴을 만들어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
              피부에 따른 제품 추천 받기
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/30">
              주변 가까운 매장 찾기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
