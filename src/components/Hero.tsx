// ICONS
import PlayCircleIcon from '../assets/play-circle.svg';

// IMAGES
import Sushi1 from '../assets/sushi-1.png';
import UserImg from '../assets/user.png';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-74px)] overflow-hidden screen-1060:flex-col">
      <div className="flex flex-1 flex-col relative z-[5]">
        <img
          src={Sushi1}
          alt="sushi"
          data-aos="fade-up"
          className="w-[120%] h-full object-contain screen-1060:w-full screen-1060:skew-x-6 screen-1060:scale-y-125"
        />
        <h2
          className="absolute bottom-0 p-5 font-playfair_display font-bold text-[7.5rem] leading-[138px] text-white screen-750:text-[70px] screen-750:leading-[90px] screen-550:text-[2.5rem] screen-550:leading-[3.75rem]"
          data-aos="fade-up"
        >
          日 <br />
          本 <br />食
        </h2>

        <div className="absolute inset-0 w-full bg-primary z-[-1]" />
      </div>

      <div className="flex flex-[1.22] justify-between flex-col">
        <div
          className="p-16 flex flex-1 justify-center flex-col screen-550:p-8"
          data-aos="fade-left"
        >
          <h1 className="text-[5rem] font-semibold font-playfair_display text-secondary screen-550:text-6xl screen-550:leading-none">
            Feel the taste of Japanese food
          </h1>
          <p className="mt-8 ml-8 font-plus_jakarta_sans text-secondary text-lg leading-none font-normal screen-550:my-8 screen-550:mx-0">
            Feel the taste of the most popular Japanese food from anywhere and
            anytime.
          </p>

          <div className="mt-[41px] ml-[41px] flex flex-wrap gap-9 screen-550:my-[41px] screen-550:mx-0">
            <button className="p-5 rounded-[2.25rem] min-w-[212px] bg-secondary cursor-pointer text-white font-medium text-lg leading-[23px]">
              Order Now
            </button>
            <button className="bg-transparent flex items-center text-base leading-[19px] text-black-200 font-plus_jakarta_sans cursor-pointer">
              <img
                src={PlayCircleIcon}
                alt="play"
                className="ml-3 w-[46px] h-[46px] object-contain"
              />
              How to Order
            </button>
          </div>
        </div>

        <div
          className="py-8 px-16 flex flex-wrap gap-5 bg-white screen-550:p-8"
          data-aos="fade-up"
        >
          <div className="flex-center flex-1 gap-[10px]">
            <h4 className="text-[62px] font-normal font-playfair_display">
              24<span>k+</span>
            </h4>
            <p className="text-base leading-none font-normal font-plus_jakarta_sans text-secondary opacity-50">
              Happy Customers
            </p>
          </div>

          <div className="flex flex-1 items-center gap-[10px] pl-5 border-l-[1px] border-solid border-[#020202] border-opacity-10 min-w-[200px]">
            <img
              src={UserImg}
              alt="user"
              className="w-[42px] h-[42px] object-contain"
            />
            <p className="text-xs leading-8 font-normal font-plus_jakarta_sans text-secondary opacity-80">
              &quot;This is the best Japanese food delivery service that ever
              existed.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
