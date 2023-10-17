import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="flex items-center w-full p-6 bg-background z-10 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Política de privacidade
        </Button>
        <Button variant="ghost" size="sm">
          Termos de uso
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
