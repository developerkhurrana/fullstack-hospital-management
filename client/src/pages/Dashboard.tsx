import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Stethoscope, Building2, Calendar } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        {
            title: 'Total Patients',
            value: '1,234',
            icon: <Users className="h-4 w-4 text-muted-foreground" />,
            description: 'Active patients in the system',
        },
        {
            title: 'Total Doctors',
            value: '45',
            icon: <Stethoscope className="h-4 w-4 text-muted-foreground" />,
            description: 'Registered medical professionals',
        },
        {
            title: 'Departments',
            value: '12',
            icon: <Building2 className="h-4 w-4 text-muted-foreground" />,
            description: 'Hospital departments',
        },
        {
            title: 'Appointments',
            value: '89',
            icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
            description: 'Scheduled for today',
        },
    ];

    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            {stat.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Add recent activity items here */}
                        <p className="text-sm text-muted-foreground">No recent activity</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard; 