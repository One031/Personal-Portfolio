import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

// Navigation Links
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];


export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle
    const [isScrolled, setIsScrolled] = useState(false); // Track scroll for navbar styling

    // Scroll listener to change navbar style
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : " bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-6 flex items-center relative">

                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    OT<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                        ))}
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <button className="md:hidden ml-auto p-2 text-foreground" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    { isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
                </button>
            </nav>
            {/* Mobile Menu*/}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} onClick={() => setIsMobileMenuOpen(false)}className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}</a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};