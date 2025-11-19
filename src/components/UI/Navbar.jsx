import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from '../../constants';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const logoTitle = "Nguyen Phuc Anh | Web Developer";

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 z-50 px-6 sm:px-16 py-5 transition-all duration-300 ${
                scrolled ? "bg-primary" : "bg-transparent"
            }`}
        >
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
                
                {/* 1. Logo/Tên */}
                <Link
                    to="/"
                    className="text-white text-lg font-semibold tracking-wider"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    {logoTitle}
                </Link>

                {/* 2. Menu cho Desktop */}
                <ul className="hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`${
                                    active === link.title ? "text-white" : "text-gray-300"
                                } hover:text-white text-lg font-medium transition-colors cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 3. Nút Menu cho Mobile */}
                <div className="sm:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white text-2xl"
                    >
                        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

            </div>

            {/* 4. Menu cho Mobile (Dropdown) */}
            {isMobileMenuOpen && (
                <div className="sm:hidden absolute top-16 right-4 left-4 bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 shadow-xl z-10">
                    <ul className="flex flex-col items-start gap-4">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={`${
                                        active === link.title ? "text-white" : "text-gray-400"
                                    } text-lg font-medium cursor-pointer`}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setActive(link.title);
                                    }}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;