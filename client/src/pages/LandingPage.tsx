import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    Stethoscope,
    Building2,
    Clock,
    Phone,
    Mail,
    MapPin,
    ArrowRight,
    Users,
    Heart,
    Shield,
    Star,
    Calendar,
    CheckCircle2,
    Brain,
    Bone,
    Baby,
    User,
    Activity
} from 'lucide-react';
import { theme } from '@/lib/theme';

const LandingPage = () => {
    const services = [
        {
            icon: <Stethoscope className="h-6 w-6" />,
            title: "Expert Doctors",
            description: "Our team of experienced medical professionals is dedicated to providing the best care."
        },
        {
            icon: <Building2 className="h-6 w-6" />,
            title: "Modern Facilities",
            description: "State-of-the-art medical equipment and comfortable patient care facilities."
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "24/7 Service",
            description: "Round-the-clock medical assistance and emergency care services."
        }
    ];

    const departments = [
        { name: "Cardiology", icon: <Heart className="h-5 w-5" /> },
        { name: "Neurology", icon: <Brain className="h-5 w-5" /> },
        { name: "Orthopedics", icon: <Bone className="h-5 w-5" /> },
        { name: "Pediatrics", icon: <Baby className="h-5 w-5" /> },
        { name: "Gynecology", icon: <User className="h-5 w-5" /> },
        { name: "Dermatology", icon: <Activity className="h-5 w-5" /> }
    ];

    const stats = [
        { value: "50+", label: "Expert Doctors" },
        { value: "10k+", label: "Happy Patients" },
        { value: "15+", label: "Years Experience" },
        { value: "24/7", label: "Medical Support" }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Patient",
            image: "https://i.pravatar.cc/150?img=1",
            text: "The care I received was exceptional. The doctors were knowledgeable and the staff was very supportive throughout my treatment."
        },
        {
            name: "Michael Chen",
            role: "Patient",
            image: "https://i.pravatar.cc/150?img=2",
            text: "I'm grateful for the quick response and professional care during my emergency. The facilities are top-notch."
        },
        {
            name: "Emily Davis",
            role: "Patient",
            image: "https://i.pravatar.cc/150?img=3",
            text: "The pediatric department took excellent care of my child. The doctors were patient and understanding."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className={`relative bg-gradient-to-r ${theme.gradients.primary} text-white overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/hospital-bg.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-800/50"></div>

                {/* Animated Circles */}
                <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>

                <div className="container relative mx-auto px-6 py-32">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
                            Welcome to Modern Healthcare
                        </div>
                        <h1 className="mb-6 text-6xl font-bold leading-tight">
                            Your Health, <br />
                            <span className="text-blue-200">Our Priority</span>
                        </h1>
                        <p className="mb-8 max-w-2xl text-xl text-blue-100">
                            Providing exceptional healthcare services with compassion and expertise.
                            Your well-being is our top priority.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link to="/login">
                                <Button
                                    size="lg"
                                    className={`${theme.transitions.DEFAULT} bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-8`}
                                >
                                    Login
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className={`${theme.transitions.DEFAULT} bg-transparent border-2 border-white text-white hover:bg-white/10 px-8`}
                                >
                                    Register
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                            <div className="text-center">
                                <div className="mb-2 text-3xl font-bold">50+</div>
                                <div className="text-sm text-blue-200">Expert Doctors</div>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-3xl font-bold">10k+</div>
                                <div className="text-sm text-blue-200">Happy Patients</div>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-3xl font-bold">15+</div>
                                <div className="text-sm text-blue-200">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-3xl font-bold">24/7</div>
                                <div className="text-sm text-blue-200">Medical Support</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="flex flex-col items-center">
                        <span className="mb-2 text-sm text-blue-200">Scroll to explore</span>
                        <div className="h-8 w-5 rounded-full border-2 border-white/30 p-1">
                            <div className="h-2 w-2 rounded-full bg-white/50 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative -mt-16">
                <div className="container mx-auto px-6">
                    <div className={`grid gap-6 rounded-xl bg-white p-8 ${theme.shadows.xl} md:grid-cols-4`}>
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className={`mb-2 text-3xl font-bold ${theme.colors.primary.DEFAULT}`}>{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            We offer a comprehensive range of medical services to meet all your healthcare needs
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group rounded-lg border p-6 text-center ${theme.shadows.sm} ${theme.transitions.DEFAULT} hover:${theme.shadows.md} hover:border-blue-500`}
                            >
                                <div className={`mb-4 flex justify-center ${theme.colors.primary.DEFAULT}`}>
                                    {service.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Our Departments</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            Specialized care across various medical disciplines
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {departments.map((dept, index) => (
                            <div
                                key={index}
                                className={`group rounded-lg bg-white p-6 text-center ${theme.shadows.sm} ${theme.transitions.DEFAULT} hover:${theme.shadows.md} hover:border-blue-500`}
                            >
                                <div className={`mb-3 flex justify-center ${theme.colors.primary.DEFAULT}`}>
                                    {dept.icon}
                                </div>
                                <span className="font-medium">{dept.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Appointment Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className={`rounded-xl ${theme.gradients.primary} p-12 text-white relative overflow-hidden`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/50"></div>

                        {/* Content */}
                        <div className="relative grid gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="mb-4 text-3xl font-bold">Book an Appointment</h2>
                                <p className="mb-6 text-blue-100">
                                    Schedule your visit with our expert doctors. We're here to provide the care you need.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                            <CheckCircle2 className="h-5 w-5 text-blue-200" />
                                        </div>
                                        <span className="text-blue-100">Quick and easy scheduling</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                            <CheckCircle2 className="h-5 w-5 text-blue-200" />
                                        </div>
                                        <span className="text-blue-100">Flexible appointment times</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                            <CheckCircle2 className="h-5 w-5 text-blue-200" />
                                        </div>
                                        <span className="text-blue-100">Online consultation available</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link to="/login">
                                    <Button
                                        size="lg"
                                        className={`${theme.transitions.DEFAULT} bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-8 py-6 text-lg`}
                                    >
                                        Book Now
                                        <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Patient Testimonials</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            Hear what our patients have to say about their experience
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="mr-4 h-12 w-12 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">{testimonial.text}</p>
                                <div className="mt-4 flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            Get in touch with us for any questions or concerns
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="flex items-center justify-center space-x-4 rounded-lg border p-6 transition-all hover:shadow-md">
                            <Phone className="h-6 w-6 text-blue-600" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-gray-600">+1 234 567 890</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-4 rounded-lg border p-6 transition-all hover:shadow-md">
                            <Mail className="h-6 w-6 text-blue-600" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-gray-600">contact@hospital.com</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-4 rounded-lg border p-6 transition-all hover:shadow-md">
                            <MapPin className="h-6 w-6 text-blue-600" />
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-gray-600">123 Medical Center Dr.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default LandingPage; 