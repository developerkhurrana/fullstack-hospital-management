import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    LayoutDashboard,
    Users,
    Stethoscope,
    Building2,
    Calendar,
    FileText,
    LogOut,
} from 'lucide-react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const menuItems = [
        { icon: <LayoutDashboard />, label: 'Dashboard', path: '/dashboard' },
        { icon: <Users />, label: 'Patients', path: '/patients' },
        { icon: <Stethoscope />, label: 'Doctors', path: '/doctors' },
        { icon: <Building2 />, label: 'Departments', path: '/departments' },
        { icon: <Calendar />, label: 'Appointments', path: '/appointments' },
        { icon: <FileText />, label: 'Medical Records', path: '/medical-records' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white shadow-lg">
                <div className="flex h-16 items-center justify-center border-b">
                    <h1 className="text-xl font-bold text-primary">Hospital MS</h1>
                </div>
                <nav className="space-y-1 p-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-3 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                    <Button
                        variant="ghost"
                        className="mt-4 w-full justify-start space-x-3"
                        onClick={() => {
                            // Handle logout
                            localStorage.removeItem('token');
                            window.location.href = '/login';
                        }}
                    >
                        <LogOut />
                        <span>Logout</span>
                    </Button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-8">
                {/* Header */}
                <header className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Dashboard</h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Welcome, Admin</span>
                    </div>
                </header>

                {/* Page Content */}
                <div className="rounded-lg bg-white p-6 shadow-sm">{children}</div>
            </main>
        </div>
    );
};

export default MainLayout; 