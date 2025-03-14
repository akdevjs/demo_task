// libs
import { logout } from "../libs/auth";

// components
import Button from "../ui/Button";
import ComponentPlaceholder from "../ui/ComponentPlaceholder";

function Header() {
  return (
    <ComponentPlaceholder
      height="fit-content"
      width="100%"
      textColor="text-red-900"
      backgroundColor="bg-red-200"
    >
      <div className="w-full flex items-center justify-between ">
        <h1 className="text-3xl font-bold">LOGO</h1>

        <Button variant="danger" onClick={logout}>
          Log out
        </Button>
      </div>
    </ComponentPlaceholder>
  );
}

export default Header;
