
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

interface AntListHeaderProps {
  resultCount: number;
}

const AntListHeader = ({ resultCount }: AntListHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-muted-foreground">Найдено: {resultCount} видов</p>
      <div className="flex items-center gap-2">
        <span className="text-sm">Сортировать:</span>
        <Select defaultValue="popularity">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">По популярности</SelectItem>
            <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
            <SelectItem value="price-asc">По цене (возр.)</SelectItem>
            <SelectItem value="name">По названию</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default AntListHeader;
