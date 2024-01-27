import { CSSProperties } from "react";

const HeroPromo = () => {
  const shadowStyle: CSSProperties = {
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
  };
  return (
    <div
      className="flex flex-row xs:flex-col-reverse items-center justify-center bg-[#F0F0F0] mt-32 px-0 xs:px-10"
      style={shadowStyle}
    >
      <div>
        <img src="src\assets\hero-promo.avif" alt="Promo for the website" />
      </div>
      <span className="max-w-[58ch] xs:ms-0 ms-24 xs:text-[0.8rem] text-[1rem] font-medium py-0 xs:py-4">
        Suntem bucuroși să anunțăm că lucrăm intens pentru a vă aduce o resursă
        completă și unică pentru organizarea evenimentelor de neuitat. Veți avea
        la îndemână tot ceea ce vă trebuie pentru a crea evenimentul perfect,
        indiferent dacă este vorba despre o nuntă elegantă, o petrecere
        corporate sau oricare altă ocazie specială.
      </span>
    </div>
  );
};

export default HeroPromo;
