export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/background1.jpg')" }}
    >
      <div className="relative min-h-screen bg-gradient-to-b from-black/67 via-black/30 to-black/77">
        <nav className="flex items-center justify-between px-6 py-6 md:px-10">
        <div>
  <img
    src="/logo.png"
    alt="Reto Bill"
    className="h-8 w-auto"
  />
</div>

          <div className="text-sm text-white/60">
            RETO BILL
          </div>
        </nav>

        <section className="flex min-h-[calc(100vh-80px)] flex-col justify-center px-6 pb-20 md:px-10">
          <div className="max-w-6xl">
            <p className="mb-8 text-sm uppercase tracking-[0.2em] text-white/50">
              Don’t Die With Your Music Still In You
            </p>

            <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.85] tracking-[-0.06em] text-white/80">
            ᏗᎦᏃᏗᎢ
              <br />
            
              <span className="text-white/40"></span>
            </h1>

            <p className="mt-12 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">

            </p>
          </div>
        </section>
        <footer className="absolute bottom-0 left-0 right-0 flex flex-col gap-6 px-6 py-6 text-sm text-white/60 md:grid md:grid-cols-3 md:items-center md:px-10">
  {/* Left */}
  <div className="flex gap-6">
    <a
      href="https://bandcamp.com/"
      className="transition-colors hover:text-white"
    >
      Bandcamp
    </a>

    <a
      href="https://t.me/retobill"
      className="transition-colors hover:text-white"
    >
      Telegram
    </a>

    <a
      href="https://www.linkedin.com/in/reto-bill"
      className="transition-colors hover:text-white"
    >
      LinkedIn
    </a>
  </div>

  {/* Center */}
  <div className="text-center">
    <a
      href="/legal"
      className="transition-colors hover:text-white"
    >
      Legal Notice
    </a>
  </div>

  {/* Right */}
  <div className="text-left md:text-right">
    © {new Date().getFullYear()} Reto Bill
  </div>
</footer>
      </div>
    </main>
  );
}