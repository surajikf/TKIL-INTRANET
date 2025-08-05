import React, { useState, useEffect } from 'react';
import { 
  Users, 
  FileText, 
  Shield, 
  Heart, 
  Globe, 
  Award, 
  Clock, 
  CheckCircle,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Zap,
  Activity,
  BookOpen,
  Lock,
  Eye,
  Share2,
  Presentation,
  Palette,
  Type,
  Layout,
  Grid,
  Folder,
  Home,
  Briefcase,
  Settings,
  HelpCircle,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Download,
  Calendar,
  User,
  Building,
  Target,
  TrendingUp,
  MessageSquare,
  Bell,
  AlertCircle,
  Info,
  Play,
  Pause,
  RefreshCw,
  DollarSign,
  GraduationCap,
  Apple
} from 'lucide-react';

const HR = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Users, color: 'from-blue-500 to-blue-600' },
    { id: 'message', name: 'HR Message', icon: MessageSquare, color: 'from-green-500 to-green-600' },
    { id: 'policies', name: 'Policies & Compliance', icon: Shield, color: 'from-purple-500 to-purple-600' },
    { id: 'forms', name: 'HR Forms', icon: FileText, color: 'from-orange-500 to-orange-600' },
    { id: 'compliance', name: 'Compliance Corner', icon: CheckCircle, color: 'from-red-500 to-red-600' },
    { id: 'safety', name: 'Safety & Quality', icon: Award, color: 'from-teal-500 to-teal-600' },
    { id: 'wellness', name: 'Wellness Box', icon: Heart, color: 'from-pink-500 to-pink-600' },
    { id: 'applications', name: 'Online Applications', icon: Globe, color: 'from-indigo-500 to-indigo-600' }
  ];

  const policies = [
    {
      title: 'Leave Policy',
      description: 'Comprehensive guidelines for various types of leave including annual, sick, and special leave.',
      category: 'Leave Management',
      icon: Calendar,
      color: 'bg-blue-500',
      lastUpdated: 'March 2024',
      status: 'Active',
      details: {
        annualLeave: '25 days per year',
        sickLeave: '15 days per year',
        specialLeave: 'As per company discretion',
        maternityLeave: '6 months as per law',
        paternityLeave: '15 days'
      }
    },
    {
      title: 'Code of Conduct',
      description: 'Standards of behavior and ethical guidelines for all employees.',
      category: 'Ethics & Compliance',
      icon: Shield,
      color: 'bg-green-500',
      lastUpdated: 'February 2024',
      status: 'Active',
      details: {
        dressCode: 'Business casual',
        workHours: '9 AM - 6 PM',
        breaks: '1 hour lunch break',
        overtime: 'As required with approval'
      }
    },
    {
      title: 'Whistle Blower Policy',
      description: 'Procedures for reporting unethical behavior and misconduct.',
      category: 'Compliance',
      icon: AlertCircle,
      color: 'bg-red-500',
      lastUpdated: 'January 2024',
      status: 'Active',
      details: {
        reportingChannels: 'Anonymous hotline, Email, Direct contact',
        protection: 'Full protection for whistleblowers',
        investigation: 'Within 30 days',
        confidentiality: 'Strictly maintained'
      }
    },
    {
      title: 'Travel Policy',
      description: 'Guidelines for business travel, expenses, and reimbursement.',
      category: 'Travel & Expenses',
      icon: MapPin,
      color: 'bg-purple-500',
      lastUpdated: 'March 2024',
      status: 'Active',
      details: {
        booking: 'Through approved travel agents',
        accommodation: '3-star hotels minimum',
        meals: 'Daily allowance as per city',
        transport: 'Economy class flights'
      }
    }
  ];

  const hrForms = [
    {
      title: 'Leave Application Form',
      description: 'Submit requests for various types of leave',
      icon: Calendar,
      color: 'bg-blue-500',
      category: 'Leave Management',
      lastUpdated: '2024',
      downloadUrl: '#',
      onlineForm: true
    },
    {
      title: 'Expense Reimbursement',
      description: 'Claim reimbursement for business expenses',
      icon: DollarSign,
      color: 'bg-green-500',
      category: 'Finance',
      lastUpdated: '2024',
      downloadUrl: '#',
      onlineForm: true
    },
    {
      title: 'Performance Review',
      description: 'Annual performance evaluation forms',
      icon: Target,
      color: 'bg-purple-500',
      category: 'Performance',
      lastUpdated: '2024',
      downloadUrl: '#',
      onlineForm: false
    },
    {
      title: 'Training Request',
      description: 'Request professional development opportunities',
      icon: GraduationCap,
      color: 'bg-orange-500',
      category: 'Development',
      lastUpdated: '2024',
      downloadUrl: '#',
      onlineForm: true
    },
    {
      title: 'IT Support Request',
      description: 'Request technical support and equipment',
      icon: Settings,
      color: 'bg-teal-500',
      category: 'IT Support',
      lastUpdated: '2024',
      downloadUrl: '#',
      onlineForm: true
    },
    {
      title: 'Asset Request',
      description: 'Request office equipment and supplies',
      icon: Briefcase,
      color: 'bg-pink-500',
      category: 'Facilities',
      lastUpdated: '2024',
      downloadUrl: '#',
      onlineForm: true
    }
  ];

  const complianceGuidelines = [
    {
      title: 'Anti-Harassment Policy',
      description: 'Zero tolerance policy for workplace harassment',
      icon: Shield,
      color: 'bg-red-500',
      category: 'Workplace Safety',
      lastUpdated: 'March 2024',
      status: 'Mandatory Training Required'
    },
    {
      title: 'Data Protection',
      description: 'Guidelines for handling sensitive information',
      icon: Lock,
      color: 'bg-blue-500',
      category: 'Information Security',
      lastUpdated: 'February 2024',
      status: 'Active'
    },
    {
      title: 'Health & Safety',
      description: 'Workplace safety protocols and emergency procedures',
      icon: AlertCircle,
      color: 'bg-orange-500',
      category: 'Safety',
      lastUpdated: 'March 2024',
      status: 'Active'
    }
  ];

  const safetyQuality = [
    {
      title: 'Safety Protocols',
      description: 'Comprehensive safety guidelines for all work environments',
      icon: Shield,
      color: 'bg-red-500',
      category: 'Safety',
      lastUpdated: 'March 2024',
      trainingRequired: true
    },
    {
      title: 'Quality Standards',
      description: 'Quality assurance procedures and standards',
      icon: Award,
      color: 'bg-green-500',
      category: 'Quality',
      lastUpdated: 'February 2024',
      trainingRequired: false
    },
    {
      title: 'Emergency Procedures',
      description: 'Emergency response and evacuation procedures',
      icon: AlertCircle,
      color: 'bg-orange-500',
      category: 'Emergency',
      lastUpdated: 'March 2024',
      trainingRequired: true
    }
  ];

  const wellnessPrograms = [
    {
      title: 'Mental Health Support',
      description: 'Access to counseling and mental health resources',
      icon: Heart,
      color: 'bg-pink-500',
      category: 'Wellness',
      participants: 150,
      status: 'Active'
    },
    {
      title: 'Fitness Programs',
      description: 'Gym memberships and fitness challenges',
      icon: Activity,
      color: 'bg-green-500',
      category: 'Fitness',
      participants: 200,
      status: 'Active'
    },
    {
      title: 'Nutrition Guidance',
      description: 'Healthy eating workshops and nutrition counseling',
      icon: Apple,
      color: 'bg-orange-500',
      category: 'Nutrition',
      participants: 80,
      status: 'Active'
    },
    {
      title: 'Stress Management',
      description: 'Meditation sessions and stress relief workshops',
      icon: Zap,
      color: 'bg-purple-500',
      category: 'Wellness',
      participants: 120,
      status: 'Active'
    }
  ];

  const onlineApplications = [
    {
      title: 'Timesheet Submission',
      description: 'Submit weekly timesheets and work hours',
      icon: Clock,
      color: 'bg-blue-500',
      category: 'Time Tracking',
      frequency: 'Weekly',
      status: 'Active'
    },
    {
      title: 'Leave Applications',
      description: 'Apply for various types of leave online',
      icon: Calendar,
      color: 'bg-green-500',
      category: 'Leave Management',
      frequency: 'As needed',
      status: 'Active'
    },
    {
      title: 'Travel Requests',
      description: 'Submit business travel requests and itineraries',
      icon: MapPin,
      color: 'bg-purple-500',
      category: 'Travel',
      frequency: 'As needed',
      status: 'Active'
    },
    {
      title: 'Asset Requests',
      description: 'Request office equipment and IT support',
      icon: Briefcase,
      color: 'bg-orange-500',
      category: 'Facilities',
      frequency: 'As needed',
      status: 'Active'
    },
    {
      title: 'Reimbursement Claims',
      description: 'Submit expense claims for reimbursement',
      icon: DollarSign,
      color: 'bg-teal-500',
      category: 'Finance',
      frequency: 'Monthly',
      status: 'Active'
    },
    {
      title: 'Internal Approvals',
      description: 'Submit documents for internal approval workflow',
      icon: CheckCircle,
      color: 'bg-red-500',
      category: 'Workflow',
      frequency: 'As needed',
      status: 'Active'
    }
  ];

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
                  <h3 className="text-3xl font-bold text-gray-900">HR Overview</h3>
                  <p className="text-gray-600 mt-2">Comprehensive human resources management</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-700 font-medium">Employees</div>
                  <div className="text-sm text-gray-500 mt-2">Active workforce</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-700 font-medium">Policies</div>
                  <div className="text-sm text-gray-500 mt-2">Active policies</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-gray-700 font-medium">Forms</div>
                  <div className="text-sm text-gray-500 mt-2">Available forms</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                  <div className="text-gray-700 font-medium">Programs</div>
                  <div className="text-sm text-gray-500 mt-2">Wellness programs</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    Quick Actions
                  </h4>
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                      <span className="font-medium text-gray-900">Submit Timesheet</span>
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
                      <span className="font-medium text-gray-900">Apply for Leave</span>
                      <ArrowRight className="h-5 w-5 text-green-600" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
                      <span className="font-medium text-gray-900">Request Travel</span>
                      <ArrowRight className="h-5 w-5 text-purple-600" />
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Recent Updates</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">Updated Leave Policy - March 2024</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">New Wellness Program Launched</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">Performance Review Cycle Started</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'message':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">HR Message</h3>
                  <p className="text-gray-600 mt-2">From our HR leadership team</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl mb-8">
                <div className="flex items-start mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" 
                    alt="HR Director"
                    className="w-16 h-16 rounded-full object-cover mr-6 ring-4 ring-white"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">David Wilson</h4>
                    <p className="text-green-600 font-medium">Head of Human Resources</p>
                    <p className="text-sm text-gray-600">March 2024</p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Dear Team Members,
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    As we continue to grow and evolve as an organization, I want to emphasize our commitment 
                    to fostering a workplace that values each individual's contribution and well-being. Our HR 
                    team is dedicated to supporting your professional development and ensuring a positive work 
                    environment.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We've recently updated several policies to better reflect our values and support your needs. 
                    Please take time to review the new guidelines, especially our enhanced wellness programs and 
                    flexible work arrangements.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Remember, your feedback is invaluable to us. Don't hesitate to reach out to the HR team 
                    with any questions or suggestions.
                  </p>
                  <p className="text-gray-700 mt-6 font-medium">
                    Best regards,<br />
                    David Wilson<br />
                    Head of Human Resources
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'policies':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
            <div>
                  <h3 className="text-3xl font-bold text-gray-900">Policies & Compliance</h3>
                  <p className="text-gray-600 mt-2">Company policies and guidelines</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {policies.map((policy, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                    onClick={() => setSelectedPolicy(selectedPolicy === index ? null : index)}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${policy.color} rounded-xl mr-4`}>
                          <policy.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {policy.title}
                          </h4>
                          <p className="text-sm text-gray-600">{policy.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {policy.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                          <span className="text-xs text-gray-500">Updated: {policy.lastUpdated}</span>
                        <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {policy.status}
                        </span>
                      </div>
                      
                      {selectedPolicy === index && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h5 className="font-semibold text-gray-900 mb-3">Key Details:</h5>
                          <div className="space-y-2">
                            {Object.entries(policy.details).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                <span className="font-medium text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-500">Click to expand</span>
                        {selectedPolicy === index ? (
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'forms':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
          <div>
                  <h3 className="text-3xl font-bold text-gray-900">HR Forms</h3>
                  <p className="text-gray-600 mt-2">Download and submit forms</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hrForms.map((form, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${form.color} rounded-xl mr-4`}>
                          <form.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {form.title}
                          </h4>
                          <p className="text-sm text-gray-600">{form.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {form.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-gray-500">Updated: {form.lastUpdated}</span>
                        {form.onlineForm && (
                          <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            Online Available
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </button>
                        {form.onlineForm && (
                          <button className="flex-1 flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Online
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
          </div>
        );

      case 'compliance':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
          <div>
                  <h3 className="text-3xl font-bold text-gray-900">Compliance Corner</h3>
                  <p className="text-gray-600 mt-2">Ethical guidelines and compliance information</p>
                </div>
              </div>
              
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceGuidelines.map((guideline, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                  <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${guideline.color} rounded-xl mr-4`}>
                          <guideline.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {guideline.title}
                          </h4>
                          <p className="text-sm text-gray-600">{guideline.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {guideline.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Updated: {guideline.lastUpdated}</span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          guideline.status.includes('Required') 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {guideline.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
          </div>
        );

      case 'safety':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Safety & Quality</h3>
                  <p className="text-gray-600 mt-2">Workplace safety and quality standards</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {safetyQuality.map((item, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${item.color} rounded-xl mr-4`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
            <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">{item.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Updated: {item.lastUpdated}</span>
                        {item.trainingRequired && (
                          <span className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                            Training Required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'wellness':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Wellness Box</h3>
                  <p className="text-gray-600 mt-2">Employee wellness and health programs</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {wellnessPrograms.map((program, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${program.color} rounded-xl mr-4`}>
                          <program.icon className="h-6 w-6 text-white" />
                        </div>
          <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {program.title}
                          </h4>
                          <p className="text-sm text-gray-600">{program.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {program.description}
                      </p>
                      
                  <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{program.participants} participants</span>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {program.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
          </div>
        );

      case 'applications':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Online Applications</h3>
                  <p className="text-gray-600 mt-2">Digital workflow systems</p>
              </div>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {onlineApplications.map((app, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${app.color} rounded-xl mr-4`}>
                          <app.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {app.title}
                          </h4>
                          <p className="text-sm text-gray-600">{app.category}</p>
                    </div>
                  </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {app.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-gray-500">Frequency: {app.frequency}</span>
                        <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {app.status}
                        </span>
                    </div>
                      
                      <button className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Access Application
                </button>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            Human Resources
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Comprehensive HR services and employee resources
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-200">HR Policies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-200">Support</div>
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

export default HR;
