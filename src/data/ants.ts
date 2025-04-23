
export interface Ant {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  price: number;
  description: string;
}

export const ANTS: Ant[] = [
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
