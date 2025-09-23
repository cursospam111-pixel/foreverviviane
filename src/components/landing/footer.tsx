import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-white">Lift Detox Black</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground md:gap-6">
          <a href="#" className="transition-colors hover:text-white">Termos de Uso</a>
          <a href="#" className="transition-colors hover:text-white">Política de Privacidade</a>
          <a href="#" className="transition-colors hover:text-white">Contato</a>
        </nav>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lift Detox Black. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
