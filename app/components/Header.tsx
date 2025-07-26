'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/ui/button'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
    const { theme, toggleTheme } = useTheme()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="flex flex-col items-center p-6 bg-background border-b border-border">
            {/* Theme Toggle Button - Top Right */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        // Sun icon for light mode
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        // Moon icon for dark mode
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>

                {/* Mobile menu button */}
                <button 
                    onClick={toggleMobileMenu}
                    className="md:hidden ml-2 p-2 rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Toggle mobile menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Logo/Brand - Centered */}
            <div className="flex flex-col items-center mb-6">
                <h1 className="text-8xl lg:text-9xl font-bold text-foreground text-center" id="title">aNtonio</h1>
                <h2 className="text-xl font-light text-muted-foreground mt-2">Portfolio</h2>
            </div>

            {/* Navigation - Below Logo */}
            <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-lg">
                    Home
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-lg">
                    About
                </Link>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors text-lg">
                    Projects
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-lg">
                    <Button variant="outline">Contact</Button>
                </Link>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="w-full md:hidden bg-background border-t border-border mt-4 pt-4">
                    <nav className="flex flex-col items-center space-y-4">
                        <Link 
                            href="/" 
                            className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            href="/projects" 
                            className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/contact" 
                            className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Button variant="outline">Contact</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}