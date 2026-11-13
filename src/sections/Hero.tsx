import Bgimg from "../assets/Hero-bg.jpg";
import Button from "../components/button";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={Bgimg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Button kontakt meg homepage */}
      <div className="z-20 absolute bottom-20 left-40">
        <Button
          border="solid"
          borderColor="#fde68a"
          textColor="#fde68a"
          color="#451c08"
          height="5rem"
          onClick={() => console.log("Opptatering etterpå :)")}
          radius="1%"
          width="15rem"
          children="Kontakt"
        />
      </div>
    </section>
  );
}
export default Hero;
