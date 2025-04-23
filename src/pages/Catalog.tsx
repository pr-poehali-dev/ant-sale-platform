
import Header from "@/components/Header";
import Footer from "@/components/layout/Footer";
import AntFilters from "@/components/catalog/AntFilters";
import AntListHeader from "@/components/catalog/AntListHeader";
import AntGrid from "@/components/catalog/AntGrid";
import AntPagination from "@/components/catalog/AntPagination";
import { ANTS } from "@/data/ants";

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
          <AntFilters />
          
          <div className="lg:col-span-3">
            <AntListHeader resultCount={ANTS.length} />
            <AntGrid ants={ANTS} />
            <AntPagination />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
