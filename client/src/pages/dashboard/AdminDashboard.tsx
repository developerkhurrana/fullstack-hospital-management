import { useEffect, useState } from 'react';
import BaseDashboard from './BaseDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users, Stethoscope, Building2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalPatients: 0,
        totalDoctors: 0,
        totalDepartments: 0,
        totalAppointments: 0,
    });

    useEffect(() => {
        // TODO: Fetch actual stats from API
        setStats({
            totalPatients: 150,
            totalDoctors: 25,
            totalDepartments: 8,
            totalAppointments: 45,
        });
    }, []);

    const quickActions = [
        {
            title: 'Add New Doctor',
            icon: <Stethoscope className="h-6 w-6" />,
            link: '/admin/doctors/new',
        },
        {
            title: 'Add New Patient',
            icon: <Users className="h-6 w-6" />,
            link: '/admin/patients/new',
        },
        {
            title: 'Manage Departments',
            icon: <Building2 className="h-6 w-6" />,
            link: '/admin/departments',
        },
        {
            title: 'View Appointments',
            icon: <Calendar className="h-6 w-6" />,
            link: '/admin/appointments',
        },
    ];

    return (
        <BaseDashboard title="Admin Dashboard" stats={stats}>
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

                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* TODO: Add actual recent activity data */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">New Patient Registration</p>
                                    <p className="text-sm text-gray-500">John Doe registered as a new patient</p>
                                </div>
                                <span className="text-sm text-gray-500">2 hours ago</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Appointment Scheduled</p>
                                    <p className="text-sm text-gray-500">Dr. Smith scheduled a new appointment</p>
                                </div>
                                <span className="text-sm text-gray-500">3 hours ago</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Department Update</p>
                                    <p className="text-sm text-gray-500">Cardiology department hours updated</p>
                                </div>
                                <span className="text-sm text-gray-500">5 hours ago</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </BaseDashboard>
    );
};

export default AdminDashboard; 