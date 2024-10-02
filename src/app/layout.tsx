'use client';

import { useState, useEffect } from "react";
import "./globals.css";
import classNames from "classnames";
import useBreakpoint from "@/hooks/useBreakpoint";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const isMobile = (breakpoint.minWidth ?? 769) <= 768;

  useEffect(() => {
    setMenuOpen(!isMobile);
  }, [isMobile]);

  return (
    <html lang="en">
      <body>
        <div className="root">
          <header className="sticky z-[100] top-0 flex w-full h-[57px] bg-[--background] bg-opacity-50 border-b border-solid border-[--white]">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 h-full">
                <div className="fixed z-[101] lg:static flex justify-between">
                  <button className="lg:hidden hamburger" onClick={() => setMenuOpen((_menuOpen) => !_menuOpen)} />
                  <Link className="flex gap-2 items-center" href="/">
                    <img src="assets/images/logo.svg" width={16} height={32} alt="Aframawandani logo" />
                    <span className="font-bold text-[16px]">Aframawandani</span>
                  </Link>
                </div>
                <div className={classNames('fixed z-[100] lg:static top-[57px] bottom-0 py-4 left-0 lg:p-0 lg:!flex flex-col gap-4 w-64 lg:w-auto bg-[--background] border-r border-solid border-white lg:border-none', menuOpen ? undefined : 'hidden')}>
                  <ul className="flex-1 flex flex-col lg:flex-row gap-x-8 list-none">
                    <li>
                      <Link className="block py-4 px-4 lg:px-0" href="/">
                        <span className="text-[--primary]">#</span>
                        <span className={classNames('text-[--gray]', pathname === '/' ? 'text-white font-bold' : undefined)}>home</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="block py-4 px-4 lg:px-0" href="/projects">
                        <span className="text-[--primary]">#</span>
                        <span className={classNames('text-[--gray]', pathname === '/projects' ? 'text-white font-bold' : undefined)}>projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="block py-4 px-4 lg:px-0" href="/about-me">
                        <span className="text-[--primary]">#</span>
                        <span className={classNames('text-[--gray]', pathname === '/about-me' ? 'text-white font-bold' : undefined)}>about-me</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="static z-[101] lg:fixed lg:top-0 lg:left-4 flex flex-col items-center gap-2">
                    <div className="hidden lg:block w-[1px] bg-white h-[33vh] bg-[--gray]" />
                    <div className="flex flex-row lg:flex-col">
                      <a href="text-[--gray]">
                        <img src="/portfolio/assets/images/discord.svg" width={32} height={32} alt="Discord" />
                      </a>
                      <a href="text-[--gray]">
                        <img src="/portfolio/assets/images/github.svg" width={32} height={32} alt="Github" />
                      </a>
                      <a href="text-[--gray]">
                        <img src="/portfolio/assets/images/email.svg" width={32} height={32} alt="Email" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {children}
          <footer className="border-t border-white pt-8 pb-4">
            <div className="container">
              <div className="flex flex-col gap-12">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-8">
                      <Link className="flex gap-2 items-center" href="/">
                        <img src="assets/images/logo.svg" width={16} height={32} alt="Aframawandani logo" />
                        <span className="font-bold text-[16px]">Aframawandani</span>
                      </Link>
                      <a className="flex gap-2 items-center text-[--gray]" href="/">aframawandani@gmail.com</a>
                    </div>
                    <div>Full-stack web developer</div>
                  </div>
                  <div>
                    <div className="text-2xl text-white font-[500]">Media</div>
                    <div className="flex gap-2">
                      <a href="" target="_blank">
                        <img src="/portfolio/assets/images/github.svg" width={32} height={32} alt="Github" />
                      </a>
                      <a href="" target="_blank">
                        <img src="/portfolio/assets/images/discord.svg" width={32} height={32} alt="Discord" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center text-[--gray]">© Copyright 2024. Made by Aframawandani</div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
