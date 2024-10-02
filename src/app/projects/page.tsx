import LinkButton from "@/components/LinkButton";
export default function Projects() {
  return (
    <div className="flex flex-col gap-y-16 py-16">
      <section>
        <div className="container">
          <header className="mb-8">
            <div className="flex flex-col gap-4">
              <h2 className="relative text-[32px] font-[500] tracking-wide">
                <span className="text-[--primary]">/</span>
                projects
              </h2>
              <h3 className="text-[--gray]">All my projects</h3>
            </div>
          </header>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <h2 className="relative text-[32px] font-[500] tracking-wide">
                <span className="text-[--primary]">#</span>
                decents
                <span className="ml-4 relative top-[24px] inline-block bg-[--primary] opacity-50 h-[2px] w-[10vw] align-top" />
              </h2>
            </div>
          </header>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col border border-[--gray]">
              <img src="/assets/images/siberaca.png" width={329} height={162} alt="SIBERACA" />
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
              <img src="/assets/images/sitantri.png" width={329} height={162} alt="SITANTRI" />
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
              <img src="/assets/images/sitantri.png" width={329} height={162} alt="PROKER" />
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
              <img src="/assets/images/dhgtk.png" width={329} height={162} alt="DHGTK" />
              <div className="border-t border-[--gray] p-2 text-[--gray]">Linux PHP Laravel Typescript PostgreSQL React Tailwind <a className="text-nowrap text-[--primary]" href="https://developer.microsoft.com/en-us/fluentui#/" target="_blank">*Fluent UI</a></div>
              <div className="flex flex-col gap-4 border-t border-[--gray] p-4 text-[--gray]">
                <h3 className="text-2xl text-white font-[500]">DHGTK</h3>
                <h4 className="text-4 text-[--gray]">Aplikasi DHGTK SMK Negeri 6 Malang</h4>
                <div className="flex gap-2">
                  <LinkButton href="https://dhgtk.smkn6malang.sch.id">Live =&gt;</LinkButton>
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
                small
                <span className="ml-4 relative top-[24px] inline-block bg-[--primary] opacity-50 h-[2px] w-[10vw] align-top" />
              </h2>
            </div>
          </header>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col border border-[--gray]">
              <img src="/assets/images/ketikweb.png" width={329} height={493} alt="" />
              <div className="border-t border-[--gray] p-2 text-[--gray]">React Next</div>
              <div className="flex flex-col gap-4 border-t border-[--gray] p-4 text-[--gray]">
                <h3 className="text-2xl text-white font-[500]">KETIKWEB</h3>
                <h4 className="text-4 text-[--gray]">Designing responsive web with figma</h4>
                <div className="flex gap-2">
                  <LinkButton href="https://ketikweb.com/">Live =&gt;</LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}