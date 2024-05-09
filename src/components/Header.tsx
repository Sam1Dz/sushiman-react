// ICONS
import SearchIcon from '../assets/search.svg';
import SearchMenuIcon from '../assets/menu.svg';

// DATA
import { HeaderMenu } from '../data';

export default function Header() {
  return (
    <header>
      <nav className="flex overflow-hidden screen-900:bg-primary">
        <div className="flex flex-1 relative p-5">
          <h4
            className="pl-[30px] font-bold text-2xl leading-0 uppercase font-playfair_display text-white opacity-80 screen-550:pl-0"
            data-aos="fade-down"
          >
            Sushiman
          </h4>
          <div className="absolute inset-0 w-full bg-primary z-[-1]" />
        </div>

        <ul
          className="p-5 flex flex-[1.236] items-center justify-end gap-16 list-none screen-900:hidden"
          data-aos="fade-down"
        >
          {HeaderMenu.map((data, i) => (
            <li
              key={i}
              className="font-medium font-plus_jakarta_sans text-secondary text-base uppercase leading-5 cursor-pointer"
            >
              <a href={data.href}>{data.title}</a>
            </li>
          ))}

          <li className="font-medium font-plus_jakarta_sans text-secondary text-base uppercase leading-5 cursor-pointer">
            <img
              src={SearchIcon}
              alt="search"
              className="size-6 object-contain"
            />
          </li>
        </ul>

        <ul
          className="p-5 items-center justify-end none gap-5 list-none relative screen-900:flex"
          data-aos="fade-down"
        >
          <li>
            <img src={SearchMenuIcon} alt="menu" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
