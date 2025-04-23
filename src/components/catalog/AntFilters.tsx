
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const AntFilters = () => {
  return (
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
        
        <FilterGroup 
          title="Сложность содержания"
          options={[
            { id: "easy", label: "Легкая" },
            { id: "medium", label: "Средняя" },
            { id: "hard", label: "Сложная" }
          ]}
        />
        
        <Separator />
        
        <FilterGroup 
          title="Размер колонии"
          options={[
            { id: "small", label: "Маленькая (до 100 особей)" },
            { id: "medium-size", label: "Средняя (100-500 особей)" },
            { id: "large", label: "Большая (500+ особей)" }
          ]}
        />
        
        <Separator />
        
        <Button className="w-full">Сбросить фильтры</Button>
      </div>
    </aside>
  );
};

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
}

const FilterGroup = ({ title, options }: FilterGroupProps) => {
  return (
    <div>
      <h3 className="font-medium mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox id={option.id} />
            <label htmlFor={option.id} className="text-sm cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AntFilters;
