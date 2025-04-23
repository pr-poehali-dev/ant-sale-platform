
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AntCardProps {
  name: string;
  scientificName: string;
  image: string;
  price: number;
  description: string;
}

const AntCard = ({ name, scientificName, image, price, description }: AntCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <CardHeader>
        <CardTitle className="font-montserrat">{name}</CardTitle>
        <CardDescription className="font-montserrat italic">{scientificName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <p className="mt-4 text-xl font-bold text-primary">{price} ₽</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Подробнее</Button>
        <Button size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AntCard;
