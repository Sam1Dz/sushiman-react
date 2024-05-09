// ICONS
import ArrowUpRightIcon from '../assets/arrow-up-right.svg';

// IMAGES
import Sushi2 from '../assets/sushi-2.png';
import Sushi3 from '../assets/sushi-3.png';

export default function AboutUs() {
  return (
    <section
      className="flex min-h-[720px] overflow-hidden screen-1024:flex-col"
      id="about-us"
    >
      <div className="flex flex-1 flex-col justify-center bg-white relative screen-750:flex-col screen-1024:flex-row">
        <div className="py-8 px-16 flex flex-1 items-center bg-center bg-no-repeat bg-contain border-b-8 border-solid border-creamson bg-[url('../assets/about_bg1.png')] screen-1024:border-b-0 screen-1024:border-r-8 screen-750:border-b-8 screen-750:border-r-0 screen-550:p-8">
          <img
            src={Sushi3}
            alt="sushi"
            data-aos="fade-right"
            className="w-[225px] h-[200px] screen-550:w-2/4 screen-550:h-[160px] screen-550:object-contain"
          />
        </div>

        <button className="absolute right-0 py-3 px-8 min-h-[64px] bg-secondary rounded-tl-[2rem] rounded-l-[2rem] text-white font-plus_jakarta_sans font-medium text-lg leading-[23px] cursor-pointer screen-1024:hidden screen-750:block screen-750:top-[47%] screen-550:top-[44%]">
          <div className="flex flex-row">
            <span>Learn More</span>
            <img
              src={ArrowUpRightIcon}
              alt="learn more"
              className="object-contain ml-8"
            />
          </div>
        </button>

        <div className="py-8 px-16 flex flex-1 items-center bg-center bg-no-repeat bg-contain bg-[url('../assets/about_bg2.png')] screen-550:p-8">
          <img
            src={Sushi2}
            alt="sushi"
            data-aos="fade-right"
            className="w-[240px] h-[160px] screen-550:w-2/4 screen-550:h-[160px] screen-550:object-contain"
          />
        </div>
      </div>

      <div
        className="p-16 flex flex-1 justify-center flex-col screen-550:p-8"
        data-aos="fade-left"
      >
        <p className="sushi-subtitle">About Us / 私たちに関しては</p>
        <h3 className="sushi-title">
          Our mission is to bring true Japanese flavours to you.
        </h3>
        <p className="sushi-description">
          We will continue to provide the experience of Omotenashi, the Japanese
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </div>
    </section>
  );
}
