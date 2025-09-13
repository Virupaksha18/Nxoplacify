import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  Clock, 
  XCircle, 
  AlertCircle,
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  FileText,
  MessageSquare
} from 'lucide-react';

const Applications = () => {
  const [activeTab, setActiveTab] = useState('all');

  const applications = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer Intern',
      appliedDate: '2024-01-15',
      status: 'interview',
      location: 'Bangalore, India',
      nextStep: 'Technical Interview on Jan 25, 2024',
      interviewDate: '2024-01-25',
      notes: 'Prepare system design and coding questions',
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product Manager Intern',
      appliedDate: '2024-01-12',
      status: 'accepted',
      location: 'Hyderabad, India',
      nextStep: 'Offer letter received',
      interviewDate: null,
      notes: 'Great interview experience. Start date: June 1, 2024',
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Data Analyst Intern',
      appliedDate: '2024-01-10',
      status: 'pending',
      location: 'Mumbai, India',
      nextStep: 'Waiting for initial screening',
      interviewDate: null,
      notes: 'Application under review',
    },
    {
      id: 4,
      company: 'Netflix',
      position: 'UX Design Intern',
      appliedDate: '2024-01-08',
      status: 'rejected',
      location: 'Remote',
      nextStep: 'Application closed',
      interviewDate: null,
      notes: 'Portfolio feedback: Focus more on user research',
    },
    {
      id: 5,
      company: 'Tesla',
      position: 'Engineering Intern',
      appliedDate: '2024-01-20',
      status: 'shortlisted',
      location: 'Remote',
      nextStep: 'HR Interview scheduled',
      interviewDate: '2024-01-28',
      notes: 'Initial screening completed successfully',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'shortlisted':
        return <AlertCircle className="h-4 w-4" />;
      case 'interview':
        return <AlertCircle className="h-4 w-4" />;
      case 'accepted':
        return <CheckCircle className="h-4 w-4" />;
      case 'rejected':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-warning/10 text-warning border-warning/20',
      shortlisted: 'bg-info/10 text-info border-info/20',
      interview: 'bg-primary/10 text-primary border-primary/20',
      accepted: 'bg-success/10 text-success border-success/20',
      rejected: 'bg-destructive/10 text-destructive border-destructive/20',
    };
    return variants[status as keyof typeof variants] || variants.pending;
  };

  const filterApplications = (status: string) => {
    if (status === 'all') return applications;
    return applications.filter(app => app.status === status);
  };

  const getStatusCounts = () => {
    return {
      all: applications.length,
      pending: applications.filter(app => app.status === 'pending').length,
      interview: applications.filter(app => app.status === 'interview' || app.status === 'shortlisted').length,
      accepted: applications.filter(app => app.status === 'accepted').length,
      rejected: applications.filter(app => app.status === 'rejected').length,
    };
  };

  const counts = getStatusCounts();
  const filteredApplications = filterApplications(activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          My Applications
        </h1>
        <p className="text-muted-foreground">
          Track and manage all your internship and placement applications
        </p>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        <Card className="text-center shadow-card bg-gradient-card">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-foreground">{counts.all}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card bg-gradient-card">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-warning">{counts.pending}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card bg-gradient-card">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-info">{counts.interview}</div>
            <div className="text-sm text-muted-foreground">Interview</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card bg-gradient-card">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-success">{counts.accepted}</div>
            <div className="text-sm text-muted-foreground">Accepted</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card bg-gradient-card">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-destructive">{counts.rejected}</div>
            <div className="text-sm text-muted-foreground">Rejected</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({counts.pending})</TabsTrigger>
          <TabsTrigger value="interview">Interview ({counts.interview})</TabsTrigger>
          <TabsTrigger value="accepted">Accepted ({counts.accepted})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({counts.rejected})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredApplications.map((application) => (
            <Card key={application.id} className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Main Info */}
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {application.company}
                        </h3>
                        <Badge className={getStatusBadge(application.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(application.status)}
                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                          </span>
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-medium mb-1">
                        {application.position}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {application.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Applied: {new Date(application.appliedDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Application
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Company Portal
                    </Button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-4 pt-4 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Next Step</h4>
                      <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                      {application.interviewDate && (
                        <p className="text-sm text-primary mt-1">
                          📅 {new Date(application.interviewDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Notes</h4>
                      <p className="text-sm text-muted-foreground">{application.notes}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Add Note
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Empty State */}
          {filteredApplications.length === 0 && (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No applications found
              </h3>
              <p className="text-muted-foreground mb-4">
                {activeTab === 'all' 
                  ? "You haven't applied to any positions yet" 
                  : `No applications with status: ${activeTab}`
                }
              </p>
              <Button asChild>
                <a href="/opportunities">Browse Opportunities</a>
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Applications;