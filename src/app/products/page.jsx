import Link from 'next/link';
import { 
  Microscope, Pill, FlaskConical, ClipboardList, Syringe, 
  Leaf, Beaker, Package, Settings, ShieldCheck, Apple 
} from 'lucide-react';

export const metadata = {
  title: "Products",
  description: "Explore our wide range of high-quality pharmaceutical, herbal, and regulatory machinery products.",
};


const categories = [
  { id: 'apis', name: 'Active Pharmaceutical Ingredients (APIs)', icon: <Microscope size={32} /> },
  { id: 'intermediates', name: 'Intermediates', icon: <Beaker size={32} /> },
  // { id: 'pellets', name: 'Pellets and Granules', icon: <Pill size={32} /> },
  { id: 'excipients', name: 'Excipients', icon: <FlaskConical size={32} /> },
  { id: 'dossier', name: 'Dossier', icon: <ClipboardList size={32} /> },
  { id: 'finished-dosage', name: 'Finished Dosage Forms', icon: <Syringe size={32} /> },
  { id: 'nutraceuticals', name: 'Nutraceuticals', icon: <Apple size={32} /> },
  { id: 'herbal', name: 'Herbal and Phytoextracts', icon: <Leaf size={32} /> },
  { id: 'rld', name: 'Innovator Samples (RLD)', icon: <div className="font-bold text-lg text-blue-600">RLD</div> },
  { id: 'machineries', name: 'Machineries', icon: <Settings size={32} /> },
  { id: 'packaging', name: 'Packaging Materials', icon: <Package size={32} /> },
  { id: 'regulatory', name: 'Regulatory Service for Europe', icon: <ShieldCheck size={32} /> },
];

export default function CategoriesPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 text-center">Our Specialized Portfolio</h1>
        <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
          Kontazio provides comprehensive pharmaceutical solutions across various categories with a focus on quality and regulatory compliance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {categories.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <div className="flex items-center gap-6 p-4 md:p-6 border border-slate-100 rounded-full hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer group bg-slate-50/30">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-sm text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all border border-slate-100 shrink-0">
                  {item.icon}
                </div>
                <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}