
import { Button } from "@/components/ui/button";

const AntPagination = () => {
  return (
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
  );
};

export default AntPagination;
