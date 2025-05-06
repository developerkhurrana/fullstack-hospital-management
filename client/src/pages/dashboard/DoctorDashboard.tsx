import { useEffect, useState } from 'react';
import BaseDashboard from './BaseDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
    const [stats, setStats] = useState({
        totalAppointments: 0,
        todayAppointments: 0,
        totalPatients: 0,
        pendingReports: 0,
    });

    useEffect(() => {
        // TODO: Fetch actual stats from API
        setStats({
            totalAppointments: 45,
            todayAppointments: 8,
            totalPatients: 120,
            pendingReports: 5,
        });
    }, []);

    const quickActions = [
        {
            title: 'Today\'s Schedule',
            icon: <Calendar className="h-6 w-6" />,
            link: '/doctor/schedule',
        },
        {
            title: 'Patient Records',
            icon: <User className="h-6 w-6" />,
            link: '/doctor/patients',
        },
        {
            title: 'Medical Reports',
            icon: <FileText className="h-6 w-6" />,
            link: '/doctor/reports',
        },
    ];

    return (
        <BaseDashboard title="Doctor Dashboard" stats={stats}>
            <div className="grid gap-6 md:grid-cols-2">
                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            {quickActions.map((action) => (
                                <Link key={action.title} to={action.link}>
                                    <Button variant="outline" className="w-full justify-start">
                                        {action.icon}
                                        <span className="ml-2">{action.title}</span>
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Today's Appointments */}
                <Card>
                    <CardHeader>
                        <CardTitle>Today's Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* TODO: Add actual appointment data */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">John Doe</p>
                                    <p className="text-sm text-gray-500">General Checkup</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="mr-1 h-4 w-4" />
                                    09:00 AM
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Jane Smith</p>
                                    <p className="text-sm text-gray-500">Follow-up Consultation</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="mr-1 h-4 w-4" />
                                    10:30 AM
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Mike Johnson</p>
                                    <p className="text-sm text-gray-500">Regular Checkup</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="mr-1 h-4 w-4" />
                                    02:00 PM
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </BaseDashboard>
    );
};

export default DoctorDashboard; 