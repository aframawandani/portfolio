export default function AboutMe() {
  return (
    <div className="flex flex-col gap-y-16 py-16">
      <section>
        <div className="container">
          <header className="mb-8">
            <div className="flex flex-col gap-4">
              <h2 className="relative text-[32px] font-[500] tracking-wide">
                <span className="text-[--primary]">/</span>
                about-me
              </h2>
              <h3 className="text-[--gray]">Who am i</h3>
            </div>
          </header>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <img className="max-w-[340px] border-b border-[--primary]" src="/assets/images/about-me.png" width={339} height={507} alt="About Me" />
            <div className="flex flex-col gap-8 text-4 text-[--gray]">
              <p>I’m a self-taught full-stack developer based in Malang, Indonesia. I can develop web apps from bare metal servers, installing necessary software and dependencies like web servers (e.g., Apache, Nginx), programming languages (e.g., PHP, JavaScript, TypeScript), databases (e.g., MySQL, PostgreSQL), and frameworks (e.g., Laravel, React, Next) to create robust and scalable web applications.</p>
              <p>Transforming my creativity and knowledge into a web app has been my passion for over a year. I have been helping my school clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <h2 className="relative text-[32px] font-[500] tracking-wide">
                <span className="text-[--primary]">#</span>
                skills
                <span className="ml-4 relative top-[24px] inline-block bg-[--primary] opacity-50 h-[2px] w-[10vw] align-top" />
              </h2>
            </div>
          </header>
          <div className="flex-1 flex items-start justify-start flex-wrap gap-4">
            <div className="z-[1] w-[200px] border border-[--gray] bg-[--background]">
              <header className="p-2 text-4 font-[600]">Languages</header>
              <div className="border-t border-[--gray] p-2 text-[--gray]">PHP JavaScript TypeScript</div>
            </div>
            <div className="z-[1] w-[200px] border border-[--gray] bg-[--background]">
              <header className="p-2 text-4 font-[600]">Databases</header>
              <div className="border-t border-[--gray] p-2 text-[--gray]">MySQL PostgreSQL</div>
            </div>
            <div className="z-[1] w-[200px] border border-[--gray] bg-[--background]">
              <header className="p-2 text-4 font-[600]">Frameworks</header>
              <div className="border-t border-[--gray] p-2 text-[--gray]">Laravel React Next FrameMotion Tailwind</div>
            </div>
            <div className="z-[1] w-[200px] border border-[--gray] bg-[--background]">
              <header className="p-2 text-4 font-[600]">Other</header>
              <div className="border-t border-[--gray] p-2 text-[--gray]">Linux Bash HTML CSS SASS SCSS Less</div>
            </div>
            <div className="z-[1] w-[200px] border border-[--gray] bg-[--background]">
              <header className="p-2 text-4 font-[600]">Tools</header>
              <div className="border-t border-[--gray] p-2 text-[--gray]">VSCode Figma Git & GitHub</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}