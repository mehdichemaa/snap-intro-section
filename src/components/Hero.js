import HeroImgDesktop from '../images/image-hero-desktop.png';
import { ReactComponent as Databiz } from '../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../images/client-meet.svg';
import { ReactComponent as Maker } from '../images/client-maker.svg';

const Hero = () => {
  return (
    <>
      <div className="w-1/2 h-full pr-20">
        <h1 className="text-7xl text-primary font-bold">
          Make <br />
          remote work
        </h1>
        <p className="mt-10 text-lg">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a href="#" className="btn-primary">
          Learn more
        </a>
        <div className="absolute bottom-0 w-1/3 flex justify-between">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="w-1/2 flex justify-center pl-32">
        <img src={HeroImgDesktop} alt="Remote work" className="w-full" />
      </div>
    </>
  );
};

export default Hero;
