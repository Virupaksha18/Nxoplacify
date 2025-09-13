import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter,
  Building2, 
  MapPin, 
  Calendar,
  Clock,
  Users,
  Bookmark
} from 'lucide-react';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const opportunities = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer Intern',
      type: 'Internship',
      location: 'Bangalore, India',
      deadline: '2024-01-25',
      postedDate: '2024-01-15',
      requirements: ['Computer Science', 'CGPA > 8.0', 'DSA Knowledge'],
      description: 'Join Google as a Software Engineer Intern and work on cutting-edge technology...',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center',
      isBookmarked: false,
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product Manager Intern',
      type: 'Internship',
      location: 'Hyderabad, India',
      deadline: '2024-01-30',
      postedDate: '2024-01-12',
      requirements: ['Any Engineering', 'CGPA > 7.5', 'Leadership Experience'],
      description: 'Experience product management at Microsoft and shape the future of technology...',
      logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=100&fit=crop&crop=center',
      isBookmarked: true,
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Data Analyst Intern',
      type: 'Internship',
      location: 'Mumbai, India',
      deadline: '2024-02-05',
      postedDate: '2024-01-18',
      requirements: ['Statistics/Mathematics', 'CGPA > 7.0', 'Python/R'],
      description: 'Analyze large datasets and derive insights that drive business decisions...',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center',
      isBookmarked: false,
    },
    {
      id: 4,
      company: 'Netflix',
      position: 'UX Design Intern',
      type: 'Internship',
      location: 'Remote',
      deadline: '2024-02-10',
      postedDate: '2024-01-20',
      requirements: ['Design Background', 'Portfolio Required', 'Figma/Sketch'],
      description: 'Design user experiences that delight millions of Netflix users worldwide...',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=center',
      isBookmarked: false,
    },
  ];

  const getDaysLeft = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 3) return 'text-destructive';
    if (daysLeft <= 7) return 'text-warning';
    return 'text-success';
  };

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || opp.type.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Opportunities
        </h1>
        <p className="text-muted-foreground">
          Discover and apply to internships and placements from top companies
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search companies, positions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="internship">Internships</SelectItem>
            <SelectItem value="placement">Placements</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredOpportunities.length} opportunities
        </p>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOpportunities.map((opportunity) => {
          const daysLeft = getDaysLeft(opportunity.deadline);
          return (
            <Card key={opportunity.id} className="shadow-card hover:shadow-hover transition-smooth bg-gradient-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{opportunity.company}</CardTitle>
                      <p className="text-muted-foreground">{opportunity.position}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bookmark className={`h-4 w-4 ${opportunity.isBookmarked ? 'fill-current text-primary' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Posted {new Date(opportunity.postedDate).toLocaleDateString()}
                    </div>
                    <div className={`flex items-center ${getUrgencyColor(daysLeft)}`}>
                      <Clock className="h-4 w-4 mr-1" />
                      {daysLeft > 0 ? `${daysLeft} days left` : 'Deadline passed'}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div>
                    <Badge variant="secondary">{opportunity.type}</Badge>
                  </div>

                  {/* Description */}
                  <p className="text-foreground text-sm leading-relaxed">
                    {opportunity.description}
                  </p>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-gradient-primary hover:opacity-90 transition-smooth">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredOpportunities.length === 0 && (
        <div className="text-center py-16">
          <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No opportunities found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search terms or filters
          </p>
          <Button variant="outline">Clear Filters</Button>
        </div>
      )}
    </div>
  );
};

export default Opportunities;