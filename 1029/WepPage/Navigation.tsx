import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-xl sm:text-2xl font-bold text-primary">MODMEN</h1>
            <div className="hidden md:flex items-center gap-6">
              <a href="#skincare" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                스킨케어
              </a>
              <a href="#hair" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                헤어스타일링
              </a>
              <a href="#fragrance" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                향수
              </a>
              <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                커뮤니티
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              로그인
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              시작하기
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
