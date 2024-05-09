import React from 'react';

// AOS (Animate on Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';

// COMPONENTS
import Header from './components/Header';
import Hero from './components/Hero';

// ICONS
import StarIcon from './assets/star.svg';
import CheckIcon from './assets/check.svg';
import ArrowRightIcon from './assets/arrow-right.svg';
import ArrowUpRightIcon from './assets/arrow-up-right.svg';
import ArrowVerticalIcon from './assets/arrow-vertical.svg';
import ArrowHorizontalIcon from './assets/arrow-horizontal.svg';

// SOCIAL
import TwitterXLogo from './assets/twitter-x.svg';
import FacebookLogo from './assets/facebook.svg';
import InstagramLogo from './assets/instagram.svg';

// IMAGES
import Sushi2 from './assets/sushi-2.png';
import Sushi3 from './assets/sushi-3.png';
import Sushi4 from './assets/sushi-4.png';
import Sushi5 from './assets/sushi-5.png';
import Sushi6 from './assets/sushi-6.png';
import Sushi7 from './assets/sushi-7.png';
import Sushi8 from './assets/sushi-8.png';
import Sushi9 from './assets/sushi-9.png';

// DATA
import { Cards, TrendingDrink, TrendingSushi } from './data';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Hero />

      {/* ABOUT US */}
      <section className="about-us" id="about-us">
        <div className="about-us__image">
          <div className="about-us__image-sushi3">
            <img src={Sushi3} alt="sushi" data-aos="fade-right" />
          </div>

          <button className="about-us__button">
            Learn More
            <img src={ArrowUpRightIcon} alt="learn more" />
          </button>

          <div className="about-us__image-sushi2">
            <img src={Sushi2} alt="sushi" data-aos="fade-right" />
          </div>
        </div>

        <div className="about-us__content" data-aos="fade-left">
          <p className="sushi__subtitle">About Us / 私たちに関しては</p>
          <h3 className="sushi__title">
            Our mission is to bring true Japanese flavours to you.
          </h3>
          <p className="sushi__description">
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customers.
          </p>
        </div>
      </section>

      {/* POPULAR */}
      <section className="popular-foods" id="menu">
        <h2 className="popular-foods__title" data-aos="flip-up">
          Popular Food / 人気
        </h2>

        <div
          className="popular-foods__filters sushi__hide-scrollbar"
          data-aos="fade-up"
        >
          <button className="popular-foods__filter-btn active">All</button>
          <button className="popular-foods__filter-btn">
            <img src={Sushi9} alt="sushi 9" />
            Sushi
          </button>
          <button className="popular-foods__filter-btn">
            <img src={Sushi8} alt="sushi 8" />
            Ramen
          </button>
          <button className="popular-foods__filter-btn">
            <img src={Sushi7} alt="sushi 7" />
            Udon
          </button>
          <button className="popular-foods__filter-btn">
            <img src={Sushi6} alt="sushi 6" />
            Dango
          </button>
          <button className="popular-foods__filter-btn">All</button>
        </div>

        <div className="popular-foods__catalogue" data-aos="fade-up">
          {Cards.map((data, i) => (
            <article
              key={i}
              className={`popular-foods__card ${data.active && 'active-card'}`}
            >
              <img
                className="popular-foods__card-image"
                src={data.imgSrc}
                alt={data.alt}
              />
              <h4 className="popular-foods__card-title">{data.title}</h4>
              <div className="popular-foods__card-details flex-between">
                <div className="popular-foods__card-rating">
                  <img src={StarIcon} alt="star" />
                  <p>{data.rating}</p>
                </div>

                <p className="popular-foods__card-price">{data.price}</p>
              </div>
            </article>
          ))}
        </div>

        <button className="popular-foods__button">
          Explore Food <img src={ArrowRightIcon} alt="arrow-right" />
        </button>
      </section>

      {/* TRENDING */}
      <section className="trending" id="food">
        {/* TRENDING SUSHI */}
        <section className="trending-sushi">
          <div className="trending__content" data-aos="fade-right">
            <p className="sushi__subtitle">What&apos;s Trending / トレンド</p>

            <h3 className="sushi__title">Japanese Sushi</h3>
            <p className="sushi__description">
              Feel the taste of the most delicious Sushi here
            </p>

            <ul className="trending__list flex-between">
              {TrendingSushi.map((data, index) => (
                <li key={index}>
                  <div className="trending__icon flex-center">
                    <img src={CheckIcon} alt="check" />
                  </div>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="trending__image flex-center">
            <img src={Sushi5} alt="sushi-5" data-aos="fade-left" />

            <div className="trending__arrow trending__arrow-left">
              <img src={ArrowVerticalIcon} alt="arrow vertical" />
            </div>

            <div className="trending__arrow trending__arrow-bottom">
              <img src={ArrowHorizontalIcon} alt="arrow horizontal" />
            </div>
          </div>
        </section>

        <div className="trending__discover" data-aos="zoom-in">
          <p>Discover</p>
        </div>

        {/* TRENDING DRINK */}
        <section className="trending-drink">
          <div className="trending__image flex-center">
            <img src={Sushi4} alt="sushi-4" data-aos="fade-right" />

            <div className="trending__arrow trending__arrow-top">
              <img src={ArrowHorizontalIcon} alt="arrow horizontal" />
            </div>

            <div className="trending__arrow trending__arrow-right">
              <img src={ArrowVerticalIcon} alt="arrow vertical" />
            </div>
          </div>

          <div className="trending__content" data-aos="fade-left">
            <p className="sushi__subtitle">What&apos;s Trending / トレンド</p>

            <h3 className="sushi__title">Japanese Drinks</h3>
            <p className="sushi__description">
              Feel the taste of the most delicious Japanese drinks here
            </p>

            <ul className="trending__list flex-between">
              {TrendingDrink.map((data, index) => (
                <li key={index}>
                  <div className="trending__icon flex-center">
                    <img src={CheckIcon} alt="check" />
                  </div>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      {/* NEWSLETTER */}
      <section className="subscription flex-center" id="services">
        <h2 data-aos="flip-down">
          Get offers stright <br />
          to your inbox
        </h2>
        <p data-aos="fade-up">Sign up for the Sushiman newsletter</p>

        <div className="subscription__form" data-aos="fade-up">
          <input type="text" placeholder="Enter your email address" />
          <button>Get Started</button>
        </div>
      </section>

      <footer className="footer flex-between">
        <h3 className="footer__logo">
          <span>Sushi</span>man
        </h3>

        <ul className="footer__nav">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#food">Food</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
        </ul>

        <ul className="footer__social">
          <li className="flex-center">
            <img src={FacebookLogo} alt="facebook" />
          </li>
          <li className="flex-center">
            <img src={InstagramLogo} alt="instagram" />
          </li>
          <li className="flex-center">
            <img src={TwitterXLogo} alt="twitter x" />
          </li>
        </ul>
      </footer>
    </React.Fragment>
  );
}

export default App;
