import Image from "next/image";

const whatsappNumber = "916281379611";

const products = [
  {
    name: "Plain Butter",
    sizes: ["50g", "80g", "100g"],
    regular: ["₹99", "₹149", "₹189"],
    sale: ["₹79", "₹129", "₹159"],
    image: "/images/BB.png",
    badge: "SIGNATURE",
  },
  {
    name: "Almond",
    sizes: ["50g", "80g", "100g"],
    regular: ["₹119", "₹169", "₹209"],
    sale: ["₹99", "₹149", "₹179"],
    image: "/images/Almond.png",
    badge: "POWER-PACKED",
  },
  {
    name: "Choco",
    sizes: ["50g", "80g", "100g"],
    regular: ["₹139", "₹189", "₹229"],
    sale: ["₹119", "₹169", "₹199"],
    image: "/images/Choco.png",
    badge: "ALL TIME FAVORITE",
  },
];

function orderLink(product?: string) {
  const text = product
    ? `Hi NV Bake! I would like to place a pre-order for ${product}.`
    : "Hi NV Bake! I would like to place a pre-order.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] text-[#3B2417]">

      {/* TOP STRIP */}
      <div className="bg-[#3B2417] px-4 py-2 text-center text-[10px] font-bold tracking-[0.22em] text-[#F8D9A5] sm:text-xs">
        PREMIUM • BAKED WITH LOVE • PRE-ORDER ONLY
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

            <a href="#collection" className="transition hover:text-[#B7652E]">
              Collection
            </a>

            <a href="#pricing" className="transition hover:text-[#B7652E]">
              Pricing
            </a>

            <a href="#our-story">Our Story</a>

            <a href="#why-nv-bake">
				Why NV Bake
			</a>
			
			<a
			  href="https://www.instagram.com/nvbake.in/"
			  target="_blank"
			  rel="noopener noreferrer"
			  aria-label="NV Bake on Instagram"
			>
			  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="instagram-gradient-header" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#F58529" />
      <stop offset="30%" stopColor="#DD2A7B" />
      <stop offset="65%" stopColor="#8134AF" />
      <stop offset="100%" stopColor="#515BD4" />
    </linearGradient>
  </defs>

  <rect
    x="2"
    y="2"
    width="20"
    height="20"
    rx="5"
    fill="url(#instagram-gradient-header)"
  />

  <rect
    x="6"
    y="6"
    width="12"
    height="12"
    rx="3.5"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
  />

  <circle
    cx="12"
    cy="12"
    r="3"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
  />

  <circle
    cx="17"
    cy="7"
    r="1"
    fill="white"
  />
</svg>
			</a>

            <a href="#feedback" className="transition hover:text-[#B7652E]">
              Feedback
            </a>

            <a
              href={orderLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#B7652E] px-6 py-3 font-bold text-white shadow-sm transition hover:bg-[#934A20]"
            >
              Pre-Order
            </a>

          </nav>

          <a
            href={orderLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#B7652E] px-5 py-2.5 text-sm font-bold text-white md:hidden"
          >
            Pre-Order
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="overflow-hidden">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">

          {/* LOGO + TAGLINE */}
          <div className="order-2 lg:order-1">

            <div className="flex items-stretch gap-5 sm:gap-7">

<div className="flex items-stretch gap-5 sm:gap-7">

  <div className="relative w-36 shrink-0 sm:w-44">
    <Image
      src="/images/sample1.png"
      alt="NV Bake"
      fill
      priority
      className="object-fill"
    />
  </div>

  <h1 className="text-3xl font-black leading-[1.08] tracking-[-0.035em] text-[#B7652E] sm:text-4xl lg:text-5xl">
    Turns into your favorite in the very first bite. We bet!
  </h1>

</div>

            <p className="mt-8 max-w-md text-base font-medium leading-7 text-[#B7652E] sm:text-xl">
              Indulge in our Premium Butter, Almond, and Choco cookies, baked with love just for you...
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
                Pre-Order on WhatsApp
              </a>
			  
			  <a
href="https://www.instagram.com/nvbake.in/"
target="_blank"
rel="noopener noreferrer"
className="instagram-hero-link"
aria-label="Follow NV Bake on Instagram"

>

<svg
  width="28"
  height="28"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#F58529" />
      <stop offset="30%" stopColor="#DD2A7B" />
      <stop offset="65%" stopColor="#8134AF" />
      <stop offset="100%" stopColor="#515BD4" />
    </linearGradient>
  </defs>

  <rect
    x="2"
    y="2"
    width="20"
    height="20"
    rx="5"
    fill="url(#instagram-gradient)"
  />

  <rect
    x="6"
    y="6"
    width="12"
    height="12"
    rx="3.5"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
  />

  <circle
    cx="12"
    cy="12"
    r="3"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
  />

  <circle
    cx="17"
    cy="7"
    r="1"
    fill="white"
  />
</svg>

  <span>
    <small>Follow along</small>
    @nvbake.in
  </span>
</a>


            </div>

          </div>

          {/* LARGE LOGO */}
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
                Baked for every appetite, Pick your:{" "}
                <span className="text-[#B7652E]">
                  favourite.
                </span>
              </h2>

            </div>

          </div>

          <div id="pricing" className="grid gap-6 md:grid-cols-3">

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

                  <div className="absolute right-4 top-4 rounded-full bg-[#3B2417] px-3 py-2 text-[11px] font-bold italic tracking-[0.15em] text-white">
                    {product.badge}
                  </div>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-extrabold tracking-[-0.025em] text-[#3B2417]">
                    {product.name}
                  </h3>

                  <div className="mt-6 rounded-2xl border border-[#E3C9A5] bg-white p-4">

                    <div className="grid grid-cols-3 gap-2 text-center">

                      {product.sizes.map((size, index) => (

                        <div key={size}>

                          <p className="text-sm font-bold text-[#735B49]">
                            {size}
                          </p>
						  
						  <div className="relative inline-block">
							<p className="text-sm font-semibold text-[#8B7666]">
								{product.regular[index]}
							</p>

							<span className="pointer-events-none absolute inset-0 flex items-center justify-center">
							<span className="absolute h-[1px] w-[115%] rotate-45 bg-red-600" />
							<span className="absolute h-[1px] w-[115%] -rotate-45 bg-red-600" />
							</span>
						</div>

                          <p className="mt-1 text-sm font-black text-[#B7652E]">
                            {product.sale[index]}
                            {index === 2 && " ⭐"}
                          </p>

                        </div>

                      ))}

                    </div>
					
					<div className="mt-4 overflow-hidden whitespace-nowrap">
						<div className="inline-block animate-marquee text-[10px] font-black uppercase tracking-[0.18em] text-[#B7652E]">
							★ Freedom Sale Pricing &nbsp;&nbsp;&nbsp; ★ Freedom Sale Pricing &nbsp;&nbsp;&nbsp; ★ Freedom Sale Pricing
						</div>
					</div>

                  </div>

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
      <section id="why-nv-bake" className="section">
		  <div className="section-heading">
			<p className="eyebrow">Why NV Bake</p>
			<h2>Good ingredients.<br />Better biscuits.</h2>
			<p className="section-intro">
			  What goes into your bite matters. We choose our ingredients
			  carefully because great taste starts with great ingredients.
			</p>
		  </div>

		  <div className="why-grid">

			  <div className="why-card why-card-1">
				<span className="why-symbol">✦</span>
				<h3>Amul Butter</h3>
				<p>
				  Rich, creamy butter for that unmistakable buttery taste and
				  melt-in-your-mouth texture.
				</p>
			  </div>

			  <div className="why-card why-card-2">
				<span className="why-symbol">♡</span>
				<h3>Khandsari Sugar</h3>
				<p>
				  Khandsari sugar adds a delicate warmth and depth of sweetness,
				  perfectly complementing the rich buttery flavour.
				</p>
			  </div>

			  <div className="why-card why-card-3">
				<span className="why-symbol">✿</span>
				<h3>Premium Patisserie Duo</h3>
				<p>
				  Cloud-milled patisserie finesse meets pure vanilla warmth for the ultimate luxury bake.
				</p>
			  </div>

			  <div className="why-card why-card-4">
				<span className="why-symbol">✦</span>
				<h3>No Vanaspati</h3>
				<p>
				  Made with butter at the heart of the recipe, without vanaspati
				  or Dalda.
				</p>
			  </div>

			  <div className="why-card why-card-5">
				<span className="why-symbol">♡</span>
				<h3>No Preservatives</h3>
				<p>
				  Thoughtfully baked in small batches, without any preservatives —
				  keeping every batch as fresh and delightful as it should be.
				</p>
			  </div>

			  <div className="why-card why-card-6">
				<span className="why-symbol">✿</span>
				<h3>Small-Batch Baking</h3>
				<p>
				  Every batch gets personal attention, from mixing the dough to
				  baking each biscuit to that perfect bite.
				</p>
			  </div>

			</div>

		  <div className="why-highlight">
			<h3>What goes into your bite matters.</h3>
			<p>
			  No shortcuts. No compromising on ingredients. Just carefully chosen
			  ingredients, freshly baked.
			</p>
		  </div>
		</section>

      {/* OUR STORY */}
      <section id="our-story" className="section story-section">
		  <div className="story-content">
			<p className="eyebrow">Our Story</p>

			<h2>It started with<br />my son.</h2>

			<p>
			  My son has always been fond of biscuits.
			</p>

			<p>
			  Out of his love for biscuits, I started wondering if I could make
			  something at home that was genuinely delicious, while also using
			  ingredients I was happy to give my family.
			</p>

			<p>
			  So, I started experimenting.
			</p>

			<p>
			  Recipe after recipe, batch after batch, I kept tweaking the
			  ingredients, proportions and baking process until I finally created
			  a biscuit that we absolutely loved.
			</p>

			<p>
			  That little experiment became <strong>NV Bake</strong>.
			</p>

			<p>
			  What started with baking for my son has now grown into a passion
			  for making premium, small-batch biscuits with carefully chosen
			  ingredients — biscuits that we are proud to serve to our own family
			  and yours.
			</p>

			<div className="story-highlight">
			  <strong>Made with ingredients we believe in.</strong>
			  <span>No shortcuts. Just good biscuits.</span>
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
		  	    href="https://www.instagram.com/nvbake.in/"
			    target="_blank"
			    rel="noopener noreferrer"
			    className="instagram-link"
			  >
			    <svg
				  width="18"
				  height="18"
				  viewBox="0 0 24 24"
				  fill="none"
				  stroke="currentColor"
				  strokeWidth="1.8"
				  strokeLinecap="round"
				  strokeLinejoin="round"
			    >
				<rect x="3" y="3" width="18" height="18" rx="5" />
				<circle cx="12" cy="12" r="4" />
				<circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
			    </svg>

			    <span>@nvbake.in</span>
			  </a>

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
        aria-label="Pre-order on WhatsApp"
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