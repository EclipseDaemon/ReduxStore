import HeroSlider from "../components/HeroSlider";
import { PRODUCTS } from "../Constants";
import ProductCard from "../components/ProductCard";
import HeadingComponent from "../components/HeadingComponent";

const Homepage = () => {
  return (
    <>
      {" "}
      <main className="main">
        {/* Hero slider section */}
        <section id="heroslider" className="mb-24 md:mb-32">
          <div className="max-w-7xl px-4 mx-auto">
            <HeroSlider />
          </div>
        </section>
        {/* Product list section */}
        <section id="product-list" className="mb-24 md:mb-32">
          <div className="max-w-7xl px-4 mx-auto">
            <HeadingComponent
              heading="Designers of the Month"
              subheading="Handpicked from the world’s finest luxury brands and boutiques"
            />
            <div
              id="product-grid"
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10"
            >
              {PRODUCTS.map(
                ({
                  id,
                  name,
                  price,
                  img,
                }: {
                  id: number;
                  name: string;
                  price: number;
                  img: string;
                }) => (
                  <ProductCard id={id} name={name} price={price} img={img} />
                )
              )}
            </div>
          </div>
        </section>
        {/* Bags section */}
        <section id="bagssection" className="mb-12 md:mb-32">
          <div className="max-w-7xl px-4 mx-auto">
            <HeadingComponent
              heading={"Bags Collection"}
              subheading={
                "Statement pieces that effortlessly exude charm and leave a lasting impression"
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <img src="./bagimg.jpg" alt="bagimaage" />
                <div className="mt-5 flex flex-col gap-2 items-center justify-center">
                  <h3 className="text-md text-center">Women's Bags</h3>
                  <p className="text-sm text-textgray text-center">
                    Trendsetting essentials for an elevated look
                  </p>
                </div>
              </div>
              <div>
                <img src="./bagimg2.jpg" alt="bagimaage" />
                <div className="mt-5 flex flex-col gap-2 items-center justify-center">
                  <h3 className="text-md text-center">MEN'S BAGS</h3>
                  <p className="text-sm text-textgray text-center">
                    Empower your appeal with refined selections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sign-up-Image Section */}
        <section id="signupimg" className="mb-12 md:mb-32">
          <div className="max-w-7xl mx-auto px-4">
            <img src="./signupbanner.jpg" alt="signupImage" />
          </div>
        </section>
        {/* Contact-us Section */}
        <section id="contactus" className="mb-12 md:mb-32">
          <div className="max-w-7xl mx-auto px-4">
            <HeadingComponent heading="Contact us" />
            <div className="grid grid-cols-3">
              <div className="flex flex-col gap-5 items-center justify-center border-r-2 border-gray-200">
                <p className="text-md text-center">Phone</p>
                <i className="text-center fa-solid fa-phone"></i>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center border-r-2 border-gray-200 ">
                <p className="text-md text-center">Whatsapp</p>
                <i className="text-center fa-brands fa-whatsapp"></i>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center">
                <p className="text-md text-center">Email</p>
                <i className="text-center fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
        </section>
        {/* Email Section */}
        <section id="email-section" className="mb-10 bg-themegray py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div>
              <p className="text-center text-sm">
                Email: Available 24/7, Phone/WhatsApp: 24 Hours Monday to Friday
              </p>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
};

export default Homepage;
