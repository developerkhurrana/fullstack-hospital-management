import { useEffect, useState } from 'react';
import BaseDashboard from './BaseDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Clock, FileText, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const NurseDashboard = () => {
    const [stats, setStats] = useState({
        totalPatients: 0,
        activePatients: 0,
        pendingTasks: 0,
        completedTasks: 0,
    });

    useEffect(() => {
        // TODO: Fetch actual stats from API
        setStats({
            totalPatients: 25,
            activePatients: 12,
            pendingTasks: 8,
            completedTasks: 15,
        });
    }, []);

    const quickActions = [
        {
            title: 'Patient List',
            icon: <User className="h-6 w-6" />,
            link: '/nurse/patients',
        },
        {
            title: 'Daily Tasks',
            icon: <Clock className="h-6 w-6" />,
            link: '/nurse/tasks',
        },
        {
            title: 'Patient Records',
            icon: <FileText className="h-6 w-6" />,
            link: '/nurse/records',
        },
        {
            title: 'Vital Signs',
            icon: <Activity className="h-6 w-6" />,
            link: '/nurse/vitals',
        },
    ];

    return (
        <BaseDashboard title="Nurse Dashboard" stats={stats}>
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

                {/* Today's Tasks */}
                <Card>
                    <CardHeader>
                        <CardTitle>Today's Tasks</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* TODO: Add actual task data */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Morning Rounds</p>
                                    <p className="text-sm text-gray-500">Room 101 - John Doe</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="mr-1 h-4 w-4" />
                                    08:00 AM
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Medication</p>
                                    <p className="text-sm text-gray-500">Room 203 - Jane Smith</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="mr-1 h-4 w-4" />
                                    10:30 AM
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Vital Signs Check</p>
                                    <p className="text-sm text-gray-500">Room 305 - Mike Johnson</p>
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

export default NurseDashboard; 