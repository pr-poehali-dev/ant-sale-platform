
import AntCard from "@/components/AntCard";

interface Ant {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  price: number;
  description: string;
}

interface AntGridProps {
  ants: Ant[];
}

const AntGrid = ({ ants }: AntGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {ants.map((ant) => (
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
  );
};

export default AntGrid;
