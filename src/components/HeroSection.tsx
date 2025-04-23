
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h1 className="font-montserrat text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Удивительный мир
            <span className="text-primary"> муравьев</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Создайте свою муравьиную ферму с нашей коллекцией муравьев из разных уголков мира.
            Мы предлагаем качественных муравьев, инвентарь и экспертные советы для начинающих и профессиональных мирмекологов.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-montserrat">
              Каталог муравьев
            </Button>
            <Button size="lg" variant="outline" className="font-montserrat">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
