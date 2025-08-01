import type { FC } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

// A placeholder for the logo component


const Footer: FC = () => {
    return (
        // The pt-32 creates space for the overlapping CTA card
        <footer className="bg-[#1C1C1C] mt-23 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* CTA Section */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-[90%] md:w-[85%] lg:w-4/5">
                    <div className="bg-indigo-600 rounded-lg shadow-xl px-8 py-10 md:px-12 lg:px-16">
                        <div className="md:flex md:items-center md:justify-between text-center md:text-left">
                            <div className="md:w-3/5">
                                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                    Deliver quality software continuously
                                </h2>
                                <p className="mt-2 text-indigo-100">
                                    Start testing in minutes
                                </p>
                            </div>
                            <div className="mt-6 md:mt-0 flex-shrink-0 flex justify-center md:justify-end space-x-2 sm:space-x-4">
                                <button className="px-5 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition-colors text-sm sm:text-base">
                                    Talk to Sales
                                </button>
                                <button className="px-5 py-3 bg-[#0f172a] text-white font-semibold rounded-md shadow-md hover:bg-gray-800 transition-colors text-sm sm:text-base">
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 pt-32">
                    {/* Column 1: Logo and Socials */}
                    <div className="md:col-span-12 lg:col-span-5">
                        <img src="/logo.svg" alt="Logo" className="h-10" />
                        <div className="mt-6 flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Columns 2, 3, 4: Links */}
                    <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Explore</h3>
                            <ul className="mt-4 space-y-3">
                                {['About US', 'Contact US', 'For Employers', 'For Education', 'Features', 'Pricing'].map((item) => (
                                    <li key={item}><Link href="#" className="text-base text-gray-400 hover:text-white">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Resources</h3>
                            <ul className="mt-4 space-y-3">
                                {['Learn', 'Help Center', 'FAQs', "What's New"].map((item) => (
                                    <li key={item}><Link href="#" className="text-base text-gray-400 hover:text-white">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact Us</h3>
                            <ul className="mt-4 space-y-3 text-base text-gray-400">
                                <li>Charlotte, USA</li>
                                <li>+ (937) 823-0491</li>
                                <li>tech@resumatch.io</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sub-Footer */}
                <div className="border-t border-gray-700 py-6">
                    <div className="flex flex-col-reverse sm:flex-row justify-between items-center text-sm text-gray-500 gap-y-4">
                        <p className="text-center sm:text-left">&copy; 2025 resumatch.io. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <Link href="#" className="hover:text-white">Terms of Use</Link>
                            <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;