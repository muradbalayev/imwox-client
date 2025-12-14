import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="wrapper py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          IMVOX
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-imvox-blue transition-colors">
            Xüsusiyyətlər
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-imvox-blue transition-colors">
            Necə işləyir
          </Link>
          <Link href="#users" className="text-sm font-medium hover:text-imvox-blue transition-colors">
            İstifadəçilər
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Daxil ol
          </Button>
          <Button className="bg-black text-white hover:bg-black/90">
            Yüklə
          </Button>
        </div>
      </div>
    </nav>
  );
}
