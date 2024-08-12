// ICONS
import PlayCircleIcon from '../assets/play-circle.svg';

// IMAGES
import Sushi1 from '../assets/sushi-1.png';
import UserImg from '../assets/user.png';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-74px)] overflow-hidden screen-900:flex-col">
      <div className="relative z-[5] flex flex-1 flex-col">
        <img
          src={Sushi1}
          alt="sushi"
          data-aos="fade-up"
          className="h-full w-[120%] object-contain screen-1060:w-full"
        />
        <h2
          data-aos="fade-up"
          className="absolute bottom-0 p-5 font-playfair_display text-[7.5rem] font-bold leading-[138px] text-white screen-550:text-[40px] screen-550:leading-[60px] screen-750:text-[70px] screen-750:leading-[90px]"
        >
          日 <br />
          本 <br />食
        </h2>

        <div className="absolute inset-0 z-[-1] w-full bg-primary" />
      </div>

      <div className="flex flex-[1.22] flex-col justify-between">
        <div
          data-aos="fade-left"
          className="flex flex-1 flex-col justify-center p-16"
        >
          <h1 className="font-playfair_display text-[5rem] font-semibold leading-none text-secondary screen-550:text-6xl">
            Feel the taste of Japanese food
          </h1>
          <p className="ml-8 mt-8 font-plus_jakarta_sans text-lg font-normal leading-none text-secondary screen-550:mx-0 screen-550:my-8">
            Feel the taste of the most popular Japanese food from anywhere and
            anytime.
          </p>

          <div className="ml-10 mt-10 flex flex-wrap gap-9 screen-550:mx-0 screen-550:my-10">
            <button className="min-w-[212px] cursor-pointer rounded-[2.25rem] border-none bg-secondary p-5 text-lg font-medium leading-6 text-white outline-none outline-offset-0">
              Order Now
            </button>
            <button className="flex cursor-pointer items-center border-none bg-transparent font-plus_jakarta_sans text-base leading-5 text-black-200 outline-none outline-offset-0">
              <img
                alt="play"
                src={PlayCircleIcon}
                className="ml-3 size-12 object-contain"
              />
              How to Order
            </button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-wrap gap-5 bg-white px-16 py-8 screen-550:p-8"
        >
          <div className="flex-center flex-1 gap-3">
            <h4 className="font-playfair_display text-[62px] font-normal leading-none">
              24<span>k+</span>
            </h4>
            <p className="font-plus_jakarta_sans text-base font-normal leading-none text-secondary opacity-50">
              Happy Customers
            </p>
          </div>

          <div className="flex min-w-[200px] flex-1 items-center gap-3 border-l-[1px] border-solid border-[#020202] border-opacity-10 pl-5 screen-1060:border-l-0 screen-1060:border-t-[1px] screen-1060:pl-0 screen-1060:pt-5">
            <img alt="user" src={UserImg} className="size-11 object-contain" />
            <p className="font-plus_jakarta_sans text-xs font-normal leading-8 text-secondary opacity-80">
              &quot;This is the best Japanese food delivery service that ever
              existed.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
