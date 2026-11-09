import Bgimg from "../assets/Hero-bg.jpg";

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
    </section>
  );
}
export default Hero;
