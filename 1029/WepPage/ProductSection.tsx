import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "수분 에센스 토너",
    category: "토너",
    price: "28,000원",
    image: "https://images.unsplash.com/photo-1556228578-dd165a1b6089?w=400&h=400&fit=crop",
    badge: "베스트",
  },
  {
    id: 2,
    name: "올인원 모이스처라이저",
    category: "로션",
    price: "35,000원",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "데일리 선크림 SPF50+",
    category: "선케어",
    price: "25,000원",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    badge: "신제품",
  },
  {
    id: 4,
    name: "딥 클렌징 폼",
    category: "클렌저",
    price: "18,000원",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "하이드레이팅 세럼",
    category: "에센스",
    price: "42,000원",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "리커버리 나이트 크림",
    category: "크림",
    price: "48,000원",
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop",
    badge: "추천",
  },
  {
    id: 7,
    name: "페이셜 미스트",
    category: "미스트",
    price: "22,000원",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "아이 세럼",
    category: "아이케어",
    price: "38,000원",
    image: "https://images.unsplash.com/photo-1556228852-80c3be9a4600?w=400&h=400&fit=crop",
  },
];

const ProductSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            기초 화장품 컬렉션
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            남성 피부를 위해 특별히 설계된 프리미엄 스킨케어 제품
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.badge && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-primary">
                  {product.price}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
