const Banner = () => {
  //Imagem de banner e gradiente de cor
  return (
    <div className="h-[600px] bg-white">
      <img src={"../images/moda.jpg"} alt="Novidades de Inverno" />
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Banner;