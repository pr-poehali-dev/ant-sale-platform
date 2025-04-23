
import AntCard from "@/components/AntCard";

const POPULAR_ANTS = [
  {
    id: 1,
    name: "Муравей-жнец",
    scientificName: "Messor structor",
    image: "/placeholder.svg",
    price: 2500,
    description: "Муравьи-жнецы известны своим трудолюбием и способностью собирать семена. Идеальный выбор для начинающих мирмекологов."
  },
  {
    id: 2,
    name: "Огненный муравей",
    scientificName: "Solenopsis invicta",
    image: "/placeholder.svg",
    price: 3200,
    description: "Отличаются ярким окрасом и активным образом жизни. Формируют крупные колонии с интересной социальной структурой."
  },
  {
    id: 3,
    name: "Древоточец черный",
    scientificName: "Camponotus vagus",
    image: "/placeholder.svg",
    price: 2800,
    description: "Крупные и впечатляющие муравьи, создающие свои колонии в древесине. Отличный выбор для визуального наблюдения."
  }
];

const PopularAnts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold tracking-tight">Популярные виды муравьев</h2>
          <p className="mt-4 text-muted-foreground">
            Познакомьтесь с нашими самыми востребованными видами для муравьиных ферм
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ANTS.map((ant) => (
            <AntCard 
              key={ant.id}
              name={ant.name}
              scientificName={ant.scientificName}
              image={ant.image}
              price={ant.price}
              description={ant.description}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" className="font-montserrat">
            Смотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularAnts;
