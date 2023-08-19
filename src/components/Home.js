import { backgrounds, icons, images} from "../data/Data";

const Home = () => {
  return (
    
    <div id="home" className="relative p-10 h-screen">
      <img
        id="backgroundImage"
        src={backgrounds.homebackground}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <img
            src={images.homelogo}
            className="w-14 h-auto mb-3"
            alt=""
        />
        <p className="text-white text-5xl mb-5 font-semibold-">WELCOME</p>
        <p className="text-white text-8xl mb-5 font-bold">TO DELANI STUDIO</p>
        <p className="text-white " >AMAZING PEOPLE ARE MAKING DESIGNS IN A FUN ENVIRONMENT </p>
      </div>
      <img
        id="icon"
        src={icons.homemouseicon}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-auto mb-8"
        alt=""
      />
    </div>
  );
};

export default Home;