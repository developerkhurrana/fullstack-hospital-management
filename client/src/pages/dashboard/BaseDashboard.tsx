import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Stethoscope, Building2, Calendar } from 'lucide-react';

interface BaseDashboardProps {
    children: ReactNode;
    title: string;
    stats?: {
        totalPatients?: number;
        totalDoctors?: number;
        totalDepartments?: number;
        totalAppointments?: number;
    };
}

const BaseDashboard = ({ children, title, stats }: BaseDashboardProps) => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="mb-8 text-3xl font-bold">{title}</h1>

            {stats && (
                <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {stats.totalPatients !== undefined && (
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.totalPatients}</div>
                            </CardContent>
                        </Card>
                    )}

                    {stats.totalDoctors !== undefined && (
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Doctors</CardTitle>
                                <Stethoscope className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.totalDoctors}</div>
                            </CardContent>
                        </Card>
                    )}

                    {stats.totalDepartments !== undefined && (
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Departments</CardTitle>
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.totalDepartments}</div>
                            </CardContent>
                        </Card>
                    )}

                    {stats.totalAppointments !== undefined && (
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Appointments</CardTitle>
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.totalAppointments}</div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            )}

            {children}
        </div>
    );
};

export default BaseDashboard; 