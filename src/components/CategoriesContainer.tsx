const CategoriesContainer = () => {
  return (
    <div className="flex items-center justify-center xs:my-12 my-32">
      <img
        src="src\assets\categories-promo-1024.png"
        alt="Categorii"
        width={1024}
        className="xs:hidden"
      />
      <img
        src="src\assets\categories-promo-512.png"
        alt="Categorii"
        width={320}
        className="xs:block hidden"
      />
    </div>
  );
};

export default CategoriesContainer;
