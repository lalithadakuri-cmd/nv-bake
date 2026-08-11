import Image from "next/image";

const whatsappNumber = "916281379611";

const products = [
  {
    name: "Premium Butter Biscuits",
    size: "100g Pouch",
    image: "/images/Butter Biscuits1.png",
    badge: "SIGNATURE",
  },
  {
    name: "Almond Cookies",
    size: "100g Pouch",
    image: "/images/Butter Biscuits1.png",
    badge: "PREMIUM",
  },
  {
    name: "Choco Cookies",
    size: "100g Pouch",
    image: "/images/Butter Biscuits1.png",
    badge: "PREMIUM",
  },
];

function orderLink(product?: string) {
  const text = product
    ? `Hi NV Bake! I would like to order ${product}.`
    : "Hi NV Bake! I would like to place an order.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] text-[#3B2417]">

      {/* TOP STRIP */}
      <div className="bg-[#3B2417] px-4 py-2 text-center text-[10px] font-bold tracking-[0.22em] text-[#F8D9A5] sm:text-xs">
        PREMIUM • BAKED WITH LOVE • MADE WITH QUALITY
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#E9D7BE] bg-[#FFF9F0]/95 backdrop-blur">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          <a href="#" className="relative h-20 w-36">
            <Image
              src="/images/Logo.png"
              alt="NV Bake"
              fill
              priority
              className="object-contain object-left"
            />
          </a>

          <nav className="hidden items-center gap-9 text-sm font-semibold md:flex">

            <a
              href="#collection"
              className="transition hover:text-[#B7652E]"
            >
              Collection
            </a>

            <a
              href="#story"
              className="transition hover:text-[#B7652E]"
            >
              Our Story
            </a>

            <a
              href="#why"
              className="transition hover:text-[#B7652E]"
            >
              Why NV Bake?
            </a>

            <a
              href="#feedback"
              className="transition hover:text-[#B7652E]"
            >
              Feedback
            </a>

            <a
              href={orderLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#B7652E] px-6 py-3 font-bold text-white shadow-sm transition hover:bg-[#934A20]"
            >
              Order Now
            </a>

          </nav>

          <a
            href={orderLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#B7652E] px-5 py-2.5 text-sm font-bold text-white md:hidden"
          >
            Order
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="overflow-hidden">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">

          {/* HERO LOGO + TAGLINE */}
          <div className="order-2 lg:order-1">

            <div className="flex items-center gap-5 sm:gap-7">


              {/* TAGLINE */}
              <h1 className="text-3xl font-black text-[#B7652E] sm:text-4xl lg:text-5xl">
                NV BAKE
              </h1>

              <h3 className="text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#B7652E] sm:text-4xl lg:text-5xl">
                Turns into your favorite in the very first bite. We bet!
              </h3>

            </div>

            <p className="mt-8 max-w-md text-base font-medium leading-7 text-[#735B49] sm:text-lg">
              <b><i>Premium biscuits & cookies, baked with love.</i></b>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#collection"
                className="rounded-full bg-[#3B2417] px-7 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#28170F]"
              >
                Explore Collection
              </a>

              <a
                href={orderLink()}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-[#B7652E] px-7 py-4 text-center text-sm font-bold text-[#934A20] transition hover:-translate-y-0.5 hover:bg-[#F6E5D0]"
              >
                Order on WhatsApp
              </a>

            </div>

          </div>

          {/* LARGE NV BAKE LOGO */}
          <div className="order-1 lg:order-2">

            <div className="relative mx-auto max-w-[650px]">

              <div className="absolute -inset-8 rounded-[3rem] bg-[#E9B86E]/30 blur-3xl" />

              <div className="relative flex aspect-square items-center justify-center rounded-[2.5rem] border-[6px] border-white bg-[#FFF9F0] shadow-[0_25px_70px_rgba(72,43,22,0.16)]">

                <div className="relative h-[75%] w-[75%]">

                  <Image
                    src="/images/Logo.png"
                    alt="NV Bake"
                    fill
                    priority
                    className="object-contain"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* COLLECTION */}
      <section id="collection" className="bg-white">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B7652E]">
                The Collection
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#3B2417] sm:text-5xl">
                Pick your{" "}
                <span className="text-[#B7652E]">
                  favourite.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-6 text-[#796353] sm:text-right">
              <b>Three delicious beginnings. 
			More favourites coming soon...</b>
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {products.map((product) => (

              <article
                key={product.name}
                className="group overflow-hidden rounded-[2rem] border border-[#EADCC9] bg-[#FFF9F0] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative aspect-square overflow-hidden bg-[#F0E1CC]">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#3B2417] px-3 py-2 text-[9px] font-bold tracking-[0.15em] text-white">
                    {product.badge}
                  </div>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-extrabold tracking-[-0.025em] text-[#3B2417]">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs font-bold tracking-[0.18em] text-[#A17B5D]">
                    {product.size}
                  </p>

                  <a
                    href={orderLink(product.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block rounded-full bg-[#B7652E] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#934A20]"
                  >
                    Order Now
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* WHY NV BAKE */}
      <section id="why" className="bg-[#F3E6D4]">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B7652E]">
              Why NV Bake?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#3B2417] sm:text-5xl">
              Premium ingredients.
              <br />
              <span className="text-[#B7652E]">
                Great first bites.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">

            {[
              [
                "01",
                "Premium",
                "Quality ingredients chosen.",
              ],
              [
                "02",
                "Freshly Baked",
                "Baked with freshness.",
              ],
              [
                "03",
                "Baked with Love",
                "Every batch gets personal attention.",
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="rounded-[1.5rem] bg-white p-7 shadow-sm"
              >

                <div className="text-xs font-black tracking-[0.2em] text-[#D3934C]">
                  {number}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#3B2417]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#735B49]">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* OUR STORY */}
      <section id="story">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B7652E]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#3B2417] sm:text-5xl">
              It started with
              <br />
              <span className="text-[#B7652E]">
                one good bite.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#735B49]">
              NV Bake is built around an exceptional idea — premium
              ingredients, quality baking and treats that make you want just
              one more.
            </p>

            <p className="mt-4 max-w-lg text-base leading-7 text-[#735B49]">
              We are baking with love and building a collection of favourites
              one bite at a time.
            </p>

            <div className="mt-7 rounded-2xl border border-[#E3C9A5] bg-[#FFF7EA] p-5">

              <p className="text-sm font-extrabold leading-7 text-[#5C3926]">
                No Palm Oil.
                <br />
                No Dalda.
                <br />
                No harmful preservatives.
              </p>

            </div>

          </div>

          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -inset-5 rounded-[3rem] bg-[#E8B96F]/25 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-xl">

              <Image
                src="/images/Sample.jpeg"
                alt="NV Bake packaging"
                width={900}
                height={1200}
                className="h-auto w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* FEEDBACK */}
      <section id="feedback" className="bg-[#3B2417]">

        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F0C889]">
            We want to hear from you
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Had your first bite?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#E4CEB2]">
            Tell us what you think. Your feedback helps NV Bake become better
            with every batch.
          </p>

          <a
            href="mailto:nvbake.in@gmail.com?subject=NV%20Bake%20Feedback"
            className="mt-8 inline-block rounded-full bg-[#E5B86F] px-8 py-4 text-sm font-black text-[#3B2417] transition hover:bg-[#F2CF99]"
          >
            Share Your Feedback
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#FFF9F0]">

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="relative h-20 w-36">

              <Image
                src="/images/Logo.png"
                alt="NV Bake"
                fill
                className="object-contain object-left"
              />

            </div>

            <div className="flex flex-col gap-3 text-sm text-[#735B49] sm:items-end">

              <a
                href={orderLink()}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#9A5225] hover:underline"
              >
                WhatsApp: +91 62813 79611
              </a>

              <a
                href="mailto:nvbake.in@gmail.com"
                className="font-bold text-[#9A5225] hover:underline"
              >
                nvbake.in@gmail.com
              </a>

            </div>

          </div>

          <div className="mt-10 border-t border-[#EAD8BD] pt-6 text-xs text-[#9B8069]">
            © {new Date().getFullYear()} NV Bake. All rights reserved.
          </div>

        </div>

      </footer>

	{/* FLOATING WHATSAPP */}
	<a
	  href={orderLink()}
	  target="_blank"
	  rel="noreferrer"
	  aria-label="Order on WhatsApp"
	  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
	>
	  <svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="h-8 w-8"
	  >
		<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.437-9.884 9.89-9.884 2.64 0 5.122 1.029 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.882 11.882 0 005.684 1.447h.005c6.554 0 11.89-5.335 11.892-11.89a11.85 11.85 0 00-3.478-8.415" />
	  </svg>
	</a>

    </main>
  );
}