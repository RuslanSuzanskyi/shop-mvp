import CategoryList from "@/entites/category/ui/CategoryList";
import Logo from "./components/Logo";
import Wrapper from "@/components/ui/wrapper/Wrapper";

export default function Header() {
  return (
    <header className="w-full bg-white sticky border-b border-solid border-gray-300">
      <Wrapper>
        <nav className="flex items-center min-h-16 py-4">
          <Logo />
          <CategoryList variant="header"/>
        </nav> 
      </Wrapper> 
    </header>
  );
};