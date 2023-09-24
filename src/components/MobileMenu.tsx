import ToggleTheme from "./ToggleTheme";

export default function MobileMenu() {
  return (
    <>
      <div className="absolute right-4 bottom-2 block md:hidden">
        <ToggleTheme />
      </div>
      <div className="items-center space-x-14 pt-5 hidden md:flex">
        <ToggleTheme />
      </div>
    </>
  );
}
