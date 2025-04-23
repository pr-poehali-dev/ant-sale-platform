
import Header from "@/components/Header";
import AntCard from "@/components/AntCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const ANTS = [
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
  },
  {
    id: 4,
    name: "Фараонов муравей",
    scientificName: "Monomorium pharaonis",
    image: "/placeholder.svg",
    price: 1800,
    description: "Маленькие желтоватые муравьи, известные своей адаптивностью. Быстро размножаются и образуют большие колонии."
  },
  {
    id: 5,
    name: "Аргентинский муравей",
    scientificName: "Linepithema humile",
    image: "/placeholder.svg",
    price: 3500,
    description: "Формируют суперколонии с множеством маток. Интересный выбор для наблюдения за сложной социальной организацией."
  },
  {
    id: 6,
    name: "Лазиус нигер",
    scientificName: "Lasius niger",
    image: "/placeholder.svg",
    price: 2200,
    description: "Черный садовый муравей, один из самых распространенных видов. Неприхотлив и отлично подходит для новичков."
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <Header />
      
      <div className="bg-muted/30 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Каталог муравьев</h1>
          <p className="text-muted-foreground">Выберите идеальных муравьев для вашей коллекции</p>
        </div>
      </div>
      
      <main className="flex-1 py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-medium mb-3">Поиск</h3>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Найти муравьев..." />
                  <Button size="icon" variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Цена</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="от" type="number" className="col-span-1" />
                  <Input placeholder="до" type="number" className="col-span-1" />
                </div>
                <Button variant="outline" size="sm" className="mt-2 w-full">
                  Применить
                </Button>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Сложность содержания</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="easy" />
                    <label htmlFor="easy" className="text-sm cursor-pointer">
                      Легкая
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="medium" />
                    <label htmlFor="medium" className="text-sm cursor-pointer">
                      Средняя
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="hard" />
                    <label htmlFor="hard" className="text-sm cursor-pointer">
                      Сложная
                    </label>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Размер колонии</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="small" />
                    <label htmlFor="small" className="text-sm cursor-pointer">
                      Маленькая (до 100 особей)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="medium-size" />
                    <label htmlFor="medium-size" className="text-sm cursor-pointer">
                      Средняя (100-500 особей)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="large" />
                    <label htmlFor="large" className="text-sm cursor-pointer">
                      Большая (500+ особей)
                    </label>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full">Сбросить фильтры</Button>
            </div>
          </aside>
          
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">Найдено: 6 видов</p>
              <div className="flex items-center gap-2">
                <span className="text-sm">Сортировать:</span>
                <select className="border rounded-md px-3 py-1 text-sm">
                  <option>По популярности</option>
                  <option>По цене (убыв.)</option>
                  <option>По цене (возр.)</option>
                  <option>По названию</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {ANTS.map((ant) => (
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
            
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>
                <Button variant="outline" className="h-9 w-9">1</Button>
                <Button variant="ghost" className="h-9 w-9">2</Button>
                <Button variant="ghost" className="h-9 w-9">3</Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-muted py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2023 АнтФарм. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
