
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularAnts from "@/components/PopularAnts";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PopularAnts />
        
        <section className="py-16 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <h3 className="font-semibold text-lg">Здоровые колонии</h3>
                    <p className="text-muted-foreground">Мы предлагаем только здоровых муравьев, выращенных в идеальных условиях.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚚</span>
                  <div>
                    <h3 className="font-semibold text-lg">Безопасная доставка</h3>
                    <p className="text-muted-foreground">Специальные контейнеры с терморегуляцией обеспечивают безопасную транспортировку.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">👨‍🔬</span>
                  <div>
                    <h3 className="font-semibold text-lg">Экспертная поддержка</h3>
                    <p className="text-muted-foreground">Наши специалисты всегда готовы помочь с вопросами по содержанию и уходу.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Муравьиная ферма" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-primary text-white p-4 rounded-lg max-w-[200px]">
                <p className="font-semibold">Более 50 видов муравьев со всего мира</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-primary/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Начните свою муравьиную ферму сегодня</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Присоединяйтесь к тысячам энтузиастов, которые уже открыли для себя 
              увлекательный мир муравьев с нашей помощью.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Выбрать муравьев
              </button>
              <button className="bg-white border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/10 transition-colors">
                Заказать консультацию
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-muted py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🐜</span>
                <span className="font-bold text-xl">АнтФарм</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ваш надежный партнер в мире мирмекологии с 2015 года.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Муравьи</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Муравьиные фермы</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Корм и оборудование</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Наборы для начинающих</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Доставка и оплата</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Гарантии</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">support@antfarm.ru</li>
                <li className="text-muted-foreground">+7 (800) 123-45-67</li>
                <li className="text-muted-foreground">г. Москва, ул. Муравьиная, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © 2023 АнтФарм. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
