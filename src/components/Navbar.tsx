const Navbar = () => {
  return (
    <div className="bg-[#FAEDCD] relative">
      <div className="text-center xs:py-[2rem] py-[3.5rem]">
        <div className="flex flex-row items-center justify-center mb-2">
          <img
            src="src\assets\logo.svg"
            alt="Logo"
            className="xs:w-[45px] w-[70px]"
          />
          <img
            src="src\assets\logo-text.svg"
            alt="Artistly"
            className="ms-2 xs:w-[100px] w-[180px]"
          />
        </div>
        <span className="font-medium text-[#333] font-laila text-[1.6rem] xs:text-[1rem]">
          Pasiunea Ta, Evenimentul Tău, Alegerea ta
        </span>
      </div>
      <div className="absolute xs:left-0 xs:-translate-x-0 xs:mx-10 left-[50%] -translate-x-[50%] bg-[#033] py-3 rounded-b-[6.25rem] xs:rounded-b-[1.39975rem] xs:text-center">
        <span className="text-[#FFF] xs:text-[0.7rem] text-[1rem] px-[2.5rem]">
          Suntem în plin proces de creare și nu putem aștepta să împărtășim cu
          voi ceea ce pregătim.
        </span>
      </div>
    </div>
  );
};

export default Navbar;
