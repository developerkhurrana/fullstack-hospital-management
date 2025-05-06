import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { theme } from '@/lib/theme';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Quick Links',
            links: [
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/#services' },
                { label: 'Departments', path: '/#departments' },
                { label: 'Contact', path: '/#contact' },
            ],
        },
        {
            title: 'Services',
            links: [
                { label: 'Emergency Care', path: '/#services' },
                { label: 'Outpatient Services', path: '/#services' },
                { label: 'Inpatient Care', path: '/#services' },
                { label: 'Medical Checkup', path: '/#services' },
            ],
        },
        {
            title: 'Working Hours',
            items: [
                'Monday - Friday: 8:00 AM - 8:00 PM',
                'Saturday: 9:00 AM - 5:00 PM',
                'Sunday: Emergency Only',
            ],
        },
    ];

    const socialLinks = [
        { icon: <Facebook className="h-5 w-5" />, href: '#' },
        { icon: <Twitter className="h-5 w-5" />, href: '#' },
        { icon: <Instagram className="h-5 w-5" />, href: '#' },
        { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Hospital Info */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Hospital MS</h3>
                        <p className="mb-4 text-gray-400">
                            Providing quality healthcare services to our community with compassion and expertise.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">+1 234 567 890</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">contact@hospital.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">123 Medical Center Dr.</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="mb-4 font-semibold">{section.title}</h4>
                            {section.links ? (
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.path}
                                                className="text-gray-400 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="space-y-2">
                                    {section.items?.map((item, index) => (
                                        <li key={index} className="text-gray-400">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 flex justify-center space-x-6 border-t border-gray-800 pt-8">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="text-gray-400 transition-colors hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Hospital MS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 