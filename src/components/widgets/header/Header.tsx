import CategoryList from "@/entites/category/ui/CategoryList";
import Logo from "./components/Logo";
import Wrapper from "@/components/ui/wrapper/Wrapper";

export default function Header() {
  return (
    <header className="flex-0 flex-shrink-0 w-full bg-white sticky top-0 z-100 left-0 border-b border-solid border-gray-300">
      <Wrapper>
        <nav className="flex items-center min-h-16 py-4">
          <Logo />
          <CategoryList variant="header"/>
        </nav> 
      </Wrapper> 
    </header>
  );
};