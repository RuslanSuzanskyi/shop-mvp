import CategoryList from "@/entites/category/ui/CategoryList";
import Logo from "./components/Logo";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import WishlistCountLink from "@/entites/wishlist/ui/WishlistCountLink";
import SearchButtonWithModal from "@/components/ui/search/SearchButtonWithModal";

export default function Header() {
  return (
    <header className="flex-0 flex-shrink-0 w-full bg-white sticky top-0 z-50 left-0 border-b border-solid border-gray-300">
      <Wrapper>
        <nav className="flex items-center min-h-16 py-4">
          <Logo />
          <CategoryList variant="header"/> 
          <div className="ml-auto flex items-center justify-evenly gap-3">
            <SearchButtonWithModal />
            <WishlistCountLink />
          </div>
        </nav> 
      </Wrapper> 
    </header>
  );
};