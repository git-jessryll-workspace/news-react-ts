import Logo from "@/assets/coffee-cup.png";

const AppLogo = () => {
    return <div className="flex items-center space-x-3">
    <div>
      <img src={Logo} className="h-14 w-14" />
    </div>
    <div>
      <h3
        className="font-bold mt-4 text-2xl text-[#393646] dark:text-[#F4EEE0]"
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        News Coffee
      </h3>
    </div>
  </div>
}

export default AppLogo;