import LinkButton from "@/components/LinkButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-16 py-16">
      <section>
        <div className="container">
          <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8">
            <div className="flex flex-col gap-8">
              <h1 className="text-[32px] font-semibold">Aframawandani is a <span className="text-[--primary]">full-stack</span> web developer</h1>
              <div className="text-[--gray]">He crafts web applications where technologies meet creativity</div>
              <div>
                <LinkButton href="/contact">Contact ME =&gt;</LinkButton>
              </div>
            </div>
            <div className="relative flex flex-col">
              <Image className="absolute top-[10%] w-[30vmin]" src="/assets/images/logo-outline.svg" width={16} height={32} alt="Logo" />
              <Image className="relative z-[1] border-b border-solid border-[--primary]" src="/assets/images/hero.png" width={496} height={424} alt="Aframawandani" />
              <div className="mt-[-1px] mx-7 flex gap-2 items-center border border-solid border-[--gray] p-2 text-[--gray] font-semibold">
                <div className="w-4 h-4 border border-[--primary] bg-[--primary-op]" />
                Open for new opportunities
              </div>
              <svg className="dots absolute z-[4] top-[40%] left-[70%] w-[12vmin]" width="100%" viewBox="0 0 104 104">
                <circle cx="4" cy="4" r="4"></circle><circle cx="4" cy="28" r="4"></circle><circle cx="4" cy="52" r="4"></circle><circle cx="4" cy="76" r="4"></circle><circle cx="4" cy="100" r="4"></circle><circle cx="28" cy="4" r="4"></circle><circle cx="28" cy="28" r="4"></circle><circle cx="28" cy="52" r="4"></circle><circle cx="28" cy="76" r="4"></circle><circle cx="28" cy="100" r="4"></circle><circle cx="52" cy="4" r="4"></circle><circle cx="52" cy="28" r="4"></circle><circle cx="52" cy="52" r="4"></circle><circle cx="52" cy="76" r="4"></circle><circle cx="52" cy="100" r="4"></circle><circle cx="76" cy="4" r="4"></circle><circle cx="76" cy="28" r="4"></circle><circle cx="76" cy="52" r="4"></circle><circle cx="76" cy="76" r="4"></circle><circle cx="76" cy="100" r="4"></circle><circle cx="100" cy="4" r="4"></circle><circle cx="100" cy="28" r="4"></circle><circle cx="100" cy="52" r="4"></circle><circle cx="100" cy="76" r="4"></circle><circle cx="100" cy="100" r="4"></circle>
              </svg>
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
                projects
                <span className="ml-4 relative top-[24px] inline-block bg-[--primary] opacity-50 h-[2px] w-[10vw] align-top" />
              </h2>
              <a className="underline" href="/projects">View all ~~=&gt;</a>
            </div>
          </header>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col border border-[--gray]">
              <Image src="/assets/images/siberaca.png" width={329} height={162} alt="SIBERACA" />
              <div className="border-t border-[--gray] p-2 text-[--gray]">PHP MySQL</div>
              <div className="flex flex-col gap-4 border-t border-[--gray] p-4 text-[--gray]">
                <h3 className="text-2xl text-white font-[500]">SIBERACA</h3>
                <h4 className="text-4 text-[--gray]">Aplikasi Berita Acara Ujian SMK Negeri 6 Malang</h4>
                <div className="flex gap-2">
                  <LinkButton href="https://siberaca.smkn6malang.sch.id">Live =&gt;</LinkButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-[--gray]">
              <Image src="/assets/images/sitantri.png" width={329} height={162} alt="SITANTRI" />
              <div className="border-t border-[--gray] p-2 text-[--gray]">PHP Laravel MySQL Bootstrap</div>
              <div className="flex flex-col gap-4 border-t border-[--gray] p-4 text-[--gray]">
                <h3 className="text-2xl text-white font-[500]">SITANTRI</h3>
                <h4 className="text-4 text-[--gray]">Aplikasi Tanda Terima Ijazah SMK Negeri 6 Malang</h4>
                <div className="flex gap-2">
                  <LinkButton href="https://sitantri.smkn6malang.sch.id">Live =&gt;</LinkButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-[--gray]">
              <Image src="/assets/images/sitantri.png" width={329} height={162} alt="PROKER" />
              <div className="border-t border-[--gray] p-2 text-[--gray]">Linux PHP Laravel Typescript PostgreSQL React Tailwind <a className="text-nowrap text-[--primary]" href="https://ant.design" target="_blank">*Ant Design</a></div>
              <div className="flex flex-col gap-4 border-t border-[--gray] p-4 text-[--gray]">
                <h3 className="text-2xl text-white font-[500]">PROKER</h3>
                <h4 className="text-4 text-[--gray]">Aplikasi Program Kerja SMK Negeri 6 Malang</h4>
                <div className="flex gap-2">
                  <LinkButton href="https://proker.smkn6malang.sch.id">Live =&gt;</LinkButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-[--gray]">
              <Image src="/assets/images/dhgtk.png" width={329} height={162} alt="DHGTK" />
              <div className="border-t border-[--gray] p-2 text-[--gray]">Linux PHP Laravel Typescript PostgreSQL React Tailwind <a className="text-nowrap text-[--primary]" href="https://developer.microsoft.com/en-us/fluentui#/" target="_blank">*Fluent UI</a></div>
              <div className="flex flex-col gap-4 border-t border-[--gray] p-4 text-[--gray]">
                <h3 className="text-2xl text-white font-[500]">DHGTK</h3>
                <h4 className="text-4 text-[--gray]">Aplikasi DHGTK SMK Negeri 6 Malang</h4>
                <div className="flex gap-2">
                  <LinkButton href="https://dhgtk.smkn6malang.sch.id">Live =&gt;</LinkButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-[--gray]">
              <Image src="/assets/images/ketikweb.png" width={329} height={162} alt="DHGTK" />
              <div className="border-t border-[--gray] p-2 text-[--gray]">Typescript Next React Tailwind</div>
              <div className="flex flex-col gap-4 border-t border-[--gray] p-4 text-[--gray]">
                <h3 className="text-2xl text-white font-[500]">DHGTK</h3>
                <h4 className="text-4 text-[--gray]">Ketikweb</h4>
                <div className="flex gap-2">
                  <LinkButton href="https://ketikweb.com">Live =&gt;</LinkButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-[--gray]">
              <Image src="/assets/images/servicerollingdoormalang.png" width={329} height={162} alt="DHGTK" />
              <div className="border-t border-[--gray] p-2 text-[--gray]">Typescript Next React Tailwind</div>
              <div className="flex flex-col gap-4 border-t border-[--gray] p-4 text-[--gray]">
                <h3 className="text-2xl text-white font-[500]">DHGTK</h3>
                <h4 className="text-4 text-[--gray]">Service Rolling Door Malang</h4>
                <div className="flex gap-2">
                  <LinkButton href="https://servicerollingdoormalang.com">Live =&gt;</LinkButton>
                </div>
              </div>
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
          <div className="relative md:grid md:grid-cols-2 gap-8">
            <div className="absolute md:relative min-h-[300px] w-full">
              <Image className="absolute top-[30%] left-[70%] min-w-[14vmin]" src="/assets/images/logo-outline.svg" width={16} height={32} alt="Whatsapp" />
              <svg className="dots absolute top-[20%] left-[40%] w-[10vmin]" viewBox="0 0 80 80">
                <circle cx="4" cy="4" r="4"></circle><circle cx="4" cy="28" r="4"></circle><circle cx="4" cy="52" r="4"></circle><circle cx="4" cy="76" r="4"></circle><circle cx="28" cy="4" r="4"></circle><circle cx="28" cy="28" r="4"></circle><circle cx="28" cy="52" r="4"></circle><circle cx="28" cy="76" r="4"></circle><circle cx="52" cy="4" r="4"></circle><circle cx="52" cy="28" r="4"></circle><circle cx="52" cy="52" r="4"></circle><circle cx="52" cy="76" r="4"></circle><circle cx="76" cy="4" r="4"></circle><circle cx="76" cy="28" r="4"></circle><circle cx="76" cy="52" r="4"></circle><circle cx="76" cy="76" r="4"></circle>
              </svg>
              <svg className="dots absolute top-[70%] left-[10%] w-[16vmin]" viewBox="0 0 128 128">
                <circle cx="4" cy="4" r="4"></circle><circle cx="4" cy="28" r="4"></circle><circle cx="4" cy="52" r="4"></circle><circle cx="4" cy="76" r="4"></circle><circle cx="4" cy="100" r="4"></circle><circle cx="4" cy="124" r="4"></circle><circle cx="28" cy="4" r="4"></circle><circle cx="28" cy="28" r="4"></circle><circle cx="28" cy="52" r="4"></circle><circle cx="28" cy="76" r="4"></circle><circle cx="28" cy="100" r="4"></circle><circle cx="28" cy="124" r="4"></circle><circle cx="52" cy="4" r="4"></circle><circle cx="52" cy="28" r="4"></circle><circle cx="52" cy="52" r="4"></circle><circle cx="52" cy="76" r="4"></circle><circle cx="52" cy="100" r="4"></circle><circle cx="52" cy="124" r="4"></circle><circle cx="76" cy="4" r="4"></circle><circle cx="76" cy="28" r="4"></circle><circle cx="76" cy="52" r="4"></circle><circle cx="76" cy="76" r="4"></circle><circle cx="76" cy="100" r="4"></circle><circle cx="76" cy="124" r="4"></circle><circle cx="100" cy="4" r="4"></circle><circle cx="100" cy="28" r="4"></circle><circle cx="100" cy="52" r="4"></circle><circle cx="100" cy="76" r="4"></circle><circle cx="100" cy="100" r="4"></circle><circle cx="100" cy="124" r="4"></circle><circle cx="124" cy="4" r="4"></circle><circle cx="124" cy="28" r="4"></circle><circle cx="124" cy="52" r="4"></circle><circle cx="124" cy="76" r="4"></circle><circle cx="124" cy="100" r="4"></circle><circle cx="124" cy="124" r="4"></circle>
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-center flex-wrap gap-4">
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
                <div className="border-t border-[--gray] p-2 text-[--gray]">Linux Bash Git HTML CSS SASS SCSS Less</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="container">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <h2 className="relative text-[32px] font-[500] tracking-wide">
                <span className="text-[--primary]">#</span>
                about-me
                <span className="ml-4 relative top-[24px] inline-block bg-[--primary] opacity-50 h-[2px] w-[10vw] align-top" />
              </h2>
            </div>
          </header>
          <div className="relative flex flex-col md:flex-row items-center lg:items-start gap-8">
            <div className="flex flex-col gap-8 text-4 text-[--gray]">
              <p>I’m a self-taught full-stack developer based in Malang, Indonesia. I can develop web apps from bare metal servers, installing necessary software and dependencies like web servers (e.g., Apache, Nginx), programming languages (e.g., PHP, JavaScript, TypeScript), databases (e.g., MySQL, PostgreSQL), and frameworks (e.g., Laravel, React, Next) to create robust and scalable web applications.</p>
              <p>Transforming my creativity and knowledge into a web app has been my passion for over a year. I have been helping my school clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
              <div><LinkButton href="/contact">More =&gt;</LinkButton></div>
            </div>
            <img className="lg:mt-[-128px] max-w-[340px] border-b border-[--primary]" src="/assets/images/about-me.png" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <h2 className="relative text-[32px] font-[500] tracking-wide">
                <span className="text-[--primary]">#</span>
                contacts
                <span className="ml-4 relative top-[24px] inline-block bg-[--primary] opacity-50 h-[2px] w-[10vw] align-top" />
              </h2>
            </div>
          </header>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-16 gap-y-8">
            <div className="flex flex-col gap-4 border border-[--gray] p-4">
              <h3 className="w-[300px] text-4 font-[600]">Message me</h3>
              <div className="flex flex-col items-start gap-2">
                <a className="flex items-center gap-2 text-[--gray]" href="https://wa.me/6289512292756">
                  <Image src="/assets/images/whatsapp.svg" width={32} height={32} alt="Whatsapp" />
                  <span>089512292756</span>
                </a>
                <a className="flex items-center gap-2 text-[--gray]" href="mailto:aframawandani@gmail.com">
                  <Image src="/assets/images/email.svg" width={32} height={32} alt="Email" />
                  <span>aframawandani@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="text-[--gray]">I’m interested in freelance and remote job opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
          </div>
        </div>
      </section>
    </div>
  );
}
