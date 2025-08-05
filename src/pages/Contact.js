import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  DollarSign, 
  Building,
  User,
  Clock,
  Globe,
  MessageSquare,
  Grid,
  Briefcase,
  Settings,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Calendar,
  Target,
  TrendingUp
} from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Grid, color: 'from-blue-500 to-blue-600' },
    { id: 'search', name: 'Search', icon: Search, color: 'from-green-500 to-green-600' },
    { id: 'directory', name: 'Department Directory', icon: Users, color: 'from-purple-500 to-purple-600' },
    { id: 'hr', name: 'HR Department', icon: Users, color: 'from-orange-500 to-orange-600' },
    { id: 'accounts', name: 'Accounts Department', icon: DollarSign, color: 'from-red-500 to-red-600' },
    { id: 'housekeeping', name: 'House Keeping', icon: Building, color: 'from-teal-500 to-teal-600' }
  ];

  const departments = [
    {
      name: 'Human Resources',
      description: 'Employee services, policies, and development',
      icon: Users,
      color: 'bg-blue-500',
      category: 'HR Department',
      contact: {
        phone: '+1 (555) 123-4567',
      email: 'hr@tkil.com',
        location: 'Floor 2, Building A',
        hours: '9:00 AM - 6:00 PM'
      },
      team: [
        {
          name: 'David Wilson',
          position: 'Head of HR',
          email: 'david.wilson@tkil.com',
          phone: '+1 (555) 123-4568',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Sarah Johnson',
          position: 'HR Manager',
          email: 'sarah.johnson@tkil.com',
          phone: '+1 (555) 123-4569',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Michael Chen',
          position: 'Recruitment Specialist',
          email: 'michael.chen@tkil.com',
          phone: '+1 (555) 123-4570',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        }
      ],
      services: ['Employee Relations', 'Recruitment', 'Training', 'Benefits', 'Performance Management']
    },
    {
      name: 'Finance & Accounts',
      description: 'Financial management, budgeting, and accounting services',
      icon: DollarSign,
      color: 'bg-green-500',
      category: 'Accounts Department',
      contact: {
        phone: '+1 (555) 123-4571',
        email: 'finance@tkil.com',
        location: 'Floor 3, Building A',
        hours: '9:00 AM - 6:00 PM'
      },
      team: [
        {
          name: 'Lisa Rodriguez',
          position: 'Finance Director',
          email: 'lisa.rodriguez@tkil.com',
          phone: '+1 (555) 123-4572',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'James Brown',
          position: 'Senior Accountant',
          email: 'james.brown@tkil.com',
          phone: '+1 (555) 123-4573',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Emily Davis',
          position: 'Financial Analyst',
          email: 'emily.davis@tkil.com',
          phone: '+1 (555) 123-4574',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
        }
      ],
      services: ['Budget Planning', 'Financial Reporting', 'Accounts Payable', 'Accounts Receivable', 'Tax Compliance']
    },
    {
      name: 'Information Technology',
      description: 'IT support, system maintenance, and technical services',
      icon: Settings,
      color: 'bg-purple-500',
      category: 'IT Department',
      contact: {
        phone: '+1 (555) 123-4575',
        email: 'it@tkil.com',
        location: 'Floor 1, Building B',
        hours: '8:00 AM - 7:00 PM'
      },
      team: [
        {
          name: 'Alex Thompson',
          position: 'IT Manager',
          email: 'alex.thompson@tkil.com',
          phone: '+1 (555) 123-4576',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Rachel Green',
          position: 'System Administrator',
          email: 'rachel.green@tkil.com',
          phone: '+1 (555) 123-4577',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Tom Wilson',
          position: 'Network Engineer',
          email: 'tom.wilson@tkil.com',
          phone: '+1 (555) 123-4578',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        }
      ],
      services: ['Technical Support', 'Network Management', 'Software Installation', 'Hardware Maintenance', 'Security']
    },
    {
      name: 'Marketing',
      description: 'Brand management, campaigns, and market research',
      icon: TrendingUp,
      color: 'bg-orange-500',
      category: 'Marketing Department',
      contact: {
        phone: '+1 (555) 123-4579',
        email: 'marketing@tkil.com',
        location: 'Floor 4, Building A',
        hours: '9:00 AM - 6:00 PM'
      },
      team: [
        {
          name: 'Emma White',
          position: 'Marketing Director',
          email: 'emma.white@tkil.com',
      phone: '+1 (555) 123-4580',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Chris Lee',
          position: 'Digital Marketing Specialist',
          email: 'chris.lee@tkil.com',
          phone: '+1 (555) 123-4581',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Maria Garcia',
          position: 'Content Creator',
          email: 'maria.garcia@tkil.com',
          phone: '+1 (555) 123-4582',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
        }
      ],
      services: ['Brand Management', 'Digital Marketing', 'Content Creation', 'Market Research', 'Event Planning']
    },
    {
      name: 'Operations',
      description: 'Business operations, process optimization, and project management',
      icon: Briefcase,
      color: 'bg-teal-500',
      category: 'Operations Department',
      contact: {
        phone: '+1 (555) 123-4583',
        email: 'operations@tkil.com',
        location: 'Floor 2, Building B',
        hours: '9:00 AM - 6:00 PM'
      },
      team: [
        {
          name: 'Robert Taylor',
          position: 'Operations Manager',
          email: 'robert.taylor@tkil.com',
          phone: '+1 (555) 123-4584',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Jennifer Adams',
          position: 'Project Coordinator',
          email: 'jennifer.adams@tkil.com',
          phone: '+1 (555) 123-4585',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Kevin Martinez',
          position: 'Process Analyst',
          email: 'kevin.martinez@tkil.com',
          phone: '+1 (555) 123-4586',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        }
      ],
      services: ['Process Optimization', 'Project Management', 'Quality Assurance', 'Supply Chain', 'Logistics']
    },
    {
      name: 'Facilities Management',
      description: 'Building maintenance, security, and housekeeping services',
      icon: Building,
      color: 'bg-red-500',
      category: 'House Keeping',
      contact: {
        phone: '+1 (555) 123-4587',
        email: 'facilities@tkil.com',
        location: 'Ground Floor, Building A',
        hours: '7:00 AM - 8:00 PM'
      },
      team: [
        {
          name: 'Carlos Rodriguez',
          position: 'Facilities Manager',
          email: 'carlos.rodriguez@tkil.com',
          phone: '+1 (555) 123-4588',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Linda Anderson',
          position: 'Security Supervisor',
          email: 'linda.anderson@tkil.com',
          phone: '+1 (555) 123-4589',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Mark Thompson',
          position: 'Maintenance Technician',
          email: 'mark.thompson@tkil.com',
          phone: '+1 (555) 123-4590',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        }
      ],
      services: ['Building Maintenance', 'Security Services', 'Housekeeping', 'Equipment Repair', 'Space Management']
    }
  ];

  const getFilteredDepartments = () => {
    let filtered = departments;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(dept => 
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.team.some(member => 
          member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.position.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by department category
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(dept => dept.category === selectedDepartment);
    }

    return filtered;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
  return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                  <Users className="h-8 w-8 text-white" />
        </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Contact Overview</h3>
                  <p className="text-gray-600 mt-2">Connect with departments and team members</p>
          </div>
        </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-gray-700 font-medium">Departments</div>
                  <div className="text-sm text-gray-500 mt-2">Active departments</div>
                  </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-green-600 mb-2">18</div>
                  <div className="text-gray-700 font-medium">Team Members</div>
                  <div className="text-sm text-gray-500 mt-2">Available contacts</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-700 font-medium">Support</div>
                  <div className="text-sm text-gray-500 mt-2">IT emergency support</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-orange-600 mb-2">30+</div>
                  <div className="text-gray-700 font-medium">Services</div>
                  <div className="text-sm text-gray-500 mt-2">Available services</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    Quick Contact
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">General Inquiries</div>
                        <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
          </div>
        </div>
                    <div className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors cursor-pointer">
                      <Mail className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Email Support</div>
                        <div className="text-sm text-gray-600">support@tkil.com</div>
                  </div>
                </div>
                    <div className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors cursor-pointer">
                      <Settings className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">IT Support</div>
                        <div className="text-sm text-gray-600">+1 (555) 123-4575</div>
          </div>
        </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-medium text-gray-900">Closed</span>
                  </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Emergency Support</span>
                        <span className="font-medium text-gray-900">24/7</span>
                  </div>
                  </div>
                  </div>
                </div>
          </div>
        </div>
          </div>
        );

      case 'search':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Search Contacts</h3>
                  <p className="text-gray-600 mt-2">Find the right person or department</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, department, or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All Departments</option>
                  <option value="HR Department">HR Department</option>
                  <option value="Accounts Department">Accounts Department</option>
                  <option value="IT Department">IT Department</option>
                  <option value="Marketing Department">Marketing Department</option>
                  <option value="Operations Department">Operations Department</option>
                  <option value="House Keeping">House Keeping</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredDepartments().map((dept, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                    onClick={() => setSelectedContact(selectedContact === index ? null : index)}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${dept.color} rounded-xl mr-4`}>
                          <dept.icon className="h-6 w-6 text-white" />
                        </div>
              <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {dept.name}
                          </h4>
                          <p className="text-sm text-gray-600">{dept.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {dept.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{dept.contact.phone}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          <span>{dept.contact.email}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{dept.contact.location}</span>
                        </div>
                      </div>
                      
                      {selectedContact === index && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h5 className="font-semibold text-gray-900 mb-3">Team Members:</h5>
                          <div className="space-y-3">
                            {dept.team.map((member, idx) => (
                              <div key={idx} className="flex items-center">
                                <img 
                                  src={member.image} 
                                  alt={member.name}
                                  className="w-8 h-8 rounded-full object-cover mr-3"
                                />
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                  <div className="text-xs text-gray-600">{member.position}</div>
                                </div>
                                <div className="text-xs text-gray-500">
                                  <div>{member.email}</div>
                                  <div>{member.phone}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-500">Click to expand</span>
                        {selectedContact === index ? (
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {getFilteredDepartments().length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'directory':
      case 'hr':
      case 'accounts':
      case 'housekeeping':
        const filteredDepts = getFilteredDepartments();
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
              <div>
                  <h3 className="text-3xl font-bold text-gray-900">Department Directory</h3>
                  <p className="text-gray-600 mt-2">Connect with departments and team members</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDepts.map((dept, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${dept.color} rounded-xl mr-4`}>
                          <dept.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {dept.name}
                          </h4>
                          <p className="text-sm text-gray-600">{dept.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {dept.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{dept.contact.phone}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          <span>{dept.contact.email}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{dept.contact.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{dept.contact.hours}</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2 text-sm">Services:</h5>
                        <div className="flex flex-wrap gap-1">
                          {dept.services.map((service, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 bg-opacity-85"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Get in touch with departments and team members
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-gray-200">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-200">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-2 py-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </section>
    </div>
  );
};

export default Contact;
