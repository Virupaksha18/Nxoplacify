import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  TrendingUp,
  Calendar,
  Building2,
  Users
} from 'lucide-react';

const Dashboard = () => {
  const [userRole] = useState<'student' | 'faculty'>('student'); // This would come from auth

  const applicationStats = [
    { label: 'Total Applications', value: 0, icon: Users, color: 'text-primary' },
    { label: 'In Progress', value: 0, icon: Clock, color: 'text-warning' },
    { label: 'Accepted', value: 0, icon: CheckCircle, color: 'text-success' },
    { label: 'Pending Interview', value: 0, icon: AlertCircle, color: 'text-info' },
  ];

  const recentApplications = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer Intern',
      appliedDate: '2024-01-15',
      status: 'interview',
      deadline: '2024-01-20',
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product Manager Intern',
      appliedDate: '2024-01-12',
      status: 'accepted',
      deadline: '2024-01-18',
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Data Analyst Intern',
      appliedDate: '2024-01-10',
      status: 'pending',
      deadline: '2024-01-25',
    },
  ];

  const upcomingDeadlines = [
    { company: 'Apple', position: 'iOS Developer Intern', deadline: '2024-01-22', daysLeft: 3 },
    { company: 'Netflix', position: 'UX Design Intern', deadline: '2024-01-25', daysLeft: 6 },
    { company: 'Tesla', position: 'Engineering Intern', deadline: '2024-01-28', daysLeft: 9 },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-warning/10 text-warning border-warning/20',
      interview: 'bg-info/10 text-info border-info/20',
      accepted: 'bg-success/10 text-success border-success/20',
      rejected: 'bg-destructive/10 text-destructive border-destructive/20',
    };
    return variants[status as keyof typeof variants] || variants.pending;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, John! 👋
        </h1>
        <p className="text-muted-foreground">
          Track your applications and never miss an opportunity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {applicationStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="bg-gradient-card shadow-card hover:shadow-hover transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Recent Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg border hover:shadow-card transition-smooth">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{app.company}</h3>
                    <p className="text-sm text-muted-foreground">{app.position}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Applied: {new Date(app.appliedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusBadge(app.status)}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="p-3 bg-gradient-subtle rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-foreground text-sm">
                      {deadline.company}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {deadline.daysLeft}d left
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {deadline.position}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Due: {new Date(deadline.deadline).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              View All Opportunities
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-8 shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-auto p-4 bg-gradient-primary hover:opacity-90 transition-smooth">
              <div className="text-center">
                <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Update Resume</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4">
              <div className="text-center">
                <Building2 className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Browse Companies</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4">
              <div className="text-center">
                <Calendar className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Schedule Mock Interview</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4">
              <div className="text-center">
                <Users className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Join Study Group</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;