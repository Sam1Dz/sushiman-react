// ICONS
import SearchIcon from '../assets/search.svg';
import SearchMenuIcon from '../assets/menu.svg';

// DATA
import { HeaderMenu } from '../data';

export default function Header() {
  return (
    <header>
      <nav className="flex overflow-hidden screen-1060:bg-primary">
        <div className="relative flex flex-1 p-5">
          <h4
            data-aos="fade-down"
            className="pl-8 font-playfair_display text-2xl font-bold uppercase leading-none text-white opacity-80 screen-550:pl-0"
          >
            Sushiman
          </h4>
          <div className="absolute inset-0 z-[-1] w-full bg-primary" />
        </div>

        <ul
          data-aos="fade-down"
          className="flex flex-[1.235] list-none items-center justify-end gap-16 p-5 screen-1060:hidden"
        >
          {HeaderMenu.map((data, i) => (
            <li
              key={i}
              className="cursor-pointer font-plus_jakarta_sans text-base font-medium uppercase leading-5 text-secondary"
            >
              <a href={data.href}>{data.title}</a>
            </li>
          ))}

          <li className="cursor-pointer font-plus_jakarta_sans text-base font-medium uppercase leading-5 text-secondary">
            <img
              src={SearchIcon}
              alt="search"
              className="size-6 object-contain"
            />
          </li>
        </ul>

        <ul
          className="relative hidden list-none items-center justify-end gap-5 p-5 screen-1060:flex"
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
