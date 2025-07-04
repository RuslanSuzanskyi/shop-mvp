import Wrapper from "@/components/ui/wrapper/Wrapper";
import CategoryList from "@/entites/category/ui/CategoryList";

export default function Footer() {
  return (
    <footer className="flex-0 flex-shrink-0 w-full bg-white border-t border-solid border-gray-300">
      <Wrapper>
        <CategoryList variant="footer"/>  
      </Wrapper>
    </footer>
  );
};