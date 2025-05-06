import { useEffect, useState } from 'react';
import BaseDashboard from './BaseDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, FileText, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
    const [stats, setStats] = useState({
        upcomingAppointments: 0,
        pastAppointments: 0,
        medicalRecords: 0,
        prescriptions: 0,
    });

    useEffect(() => {
        // TODO: Fetch actual stats from API
        setStats({
            upcomingAppointments: 2,
            pastAppointments: 15,
            medicalRecords: 8,
            prescriptions: 3,
        });
    }, []);

    const quickActions = [
        {
            title: 'Book Appointment',
            icon: <Calendar className="h-6 w-6" />,
            link: '/patient/book-appointment',
        },
        {
            title: 'View Medical History',
            icon: <FileText className="h-6 w-6" />,
            link: '/patient/medical-history',
        },
        {
            title: 'My Prescriptions',
            icon: <Stethoscope className="h-6 w-6" />,
            link: '/patient/prescriptions',
        },
    ];

    return (
        <BaseDashboard title="Patient Dashboard" stats={stats}>
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

                {/* Upcoming Appointments */}
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* TODO: Add actual appointment data */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Dr. Sarah Wilson</p>
                                    <p className="text-sm text-gray-500">General Checkup</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="mr-1 h-4 w-4" />
                                    Tomorrow, 10:00 AM
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Dr. Michael Brown</p>
                                    <p className="text-sm text-gray-500">Follow-up Consultation</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="mr-1 h-4 w-4" />
                                    Next Week, 02:30 PM
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </BaseDashboard>
    );
};

export default PatientDashboard; 