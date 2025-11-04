const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MODMEN</h3>
            <p className="text-sm text-gray-300">
              현대 남성을 위한 종합 그루밍 플랫폼
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">카테고리</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#skincare" className="text-gray-300 hover:text-accent transition-colors">스킨케어</a></li>
              <li><a href="#hair" className="text-gray-300 hover:text-accent transition-colors">헤어스타일링</a></li>
              <li><a href="#fragrance" className="text-gray-300 hover:text-accent transition-colors">향수</a></li>
              <li><a href="#fashion" className="text-gray-300 hover:text-accent transition-colors">패션</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors">회사 소개</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent transition-colors">문의하기</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-accent transition-colors">채용</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">법적 고지</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="text-gray-300 hover:text-accent transition-colors">개인정보처리방침</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-accent transition-colors">이용약관</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          © 2025 MODMEN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
