import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  DollarSign, 
  TrendingUp, 
  Image, 
  MessageSquare, 
  Newspaper,
  Search,
  Grid,
  Folder,
  Star,
  CheckCircle,
  Eye,
  Share2,
  Presentation,
  ExternalLink,
  Calendar,
  Target,
  Book,
  Users,
  Shield,
  Palette,
  Mail,
  FileVideo,
  SortAsc,
  SortDesc
} from 'lucide-react';

const DownloadPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Grid, color: 'from-blue-500 to-blue-600' },
    { id: 'hr', name: 'HR Policies', icon: Users, color: 'from-green-500 to-green-600' },
    { id: 'finance', name: 'Finance & Accounts', icon: DollarSign, color: 'from-purple-500 to-purple-600' },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp, color: 'from-orange-500 to-orange-600' },
    { id: 'templates', name: 'Templates', icon: FileText, color: 'from-red-500 to-red-600' },
    { id: 'communication', name: 'Communication', icon: MessageSquare, color: 'from-teal-500 to-teal-600' },
    { id: 'newsletter', name: 'Newsletter', icon: Newspaper, color: 'from-pink-500 to-pink-600' },
    { id: 'media', name: 'Media Centre', icon: Image, color: 'from-indigo-500 to-indigo-600' }
  ];

  const hrPolicies = [
    {
      title: 'Employee Handbook 2024',
      description: 'Comprehensive guide covering all company policies and procedures',
      category: 'HR Policies',
      icon: Book,
      color: 'bg-blue-500',
      size: '2.4 MB',
      type: 'PDF',
      lastUpdated: 'March 2024',
      downloads: 245,
      rating: 4.8
    },
    {
      title: 'Leave Policy Guidelines',
      description: 'Detailed leave policies and application procedures',
      category: 'HR Policies',
      icon: Calendar,
      color: 'bg-green-500',
      size: '1.8 MB',
      type: 'PDF',
      lastUpdated: 'February 2024',
      downloads: 189,
      rating: 4.6
    },
    {
      title: 'Performance Review Template',
      description: 'Standard templates for annual performance evaluations',
      category: 'HR Policies',
      icon: Target,
      color: 'bg-purple-500',
      size: '956 KB',
      type: 'DOCX',
      lastUpdated: 'March 2024',
      downloads: 156,
      rating: 4.7
    },
    {
      title: 'Code of Conduct',
      description: 'Company ethics and behavioral guidelines',
      category: 'HR Policies',
      icon: Shield,
      color: 'bg-red-500',
      size: '1.2 MB',
      type: 'PDF',
      lastUpdated: 'January 2024',
      downloads: 203,
      rating: 4.9
    }
  ];

  const financeAccounts = [
    {
      title: 'Expense Report Template',
      description: 'Standard format for expense reporting and reimbursement',
      category: 'Finance & Accounts',
      icon: DollarSign,
      color: 'bg-green-500',
      size: '678 KB',
      type: 'XLSX',
      lastUpdated: 'March 2024',
      downloads: 178,
      rating: 4.5
    },
    {
      title: 'Budget Planning Guide',
      description: 'Annual budget planning and forecasting guidelines',
      category: 'Finance & Accounts',
      icon: TrendingUp,
      color: 'bg-blue-500',
      size: '3.1 MB',
      type: 'PDF',
      lastUpdated: 'February 2024',
      downloads: 134,
      rating: 4.7
    },
    {
      title: 'Financial Procedures Manual',
      description: 'Comprehensive financial procedures and controls',
      category: 'Finance & Accounts',
      icon: Book,
      color: 'bg-purple-500',
      size: '4.2 MB',
      type: 'PDF',
      lastUpdated: 'January 2024',
      downloads: 98,
      rating: 4.8
    },
    {
      title: 'Invoice Template',
      description: 'Standard invoice format for client billing',
      category: 'Finance & Accounts',
      icon: FileText,
      color: 'bg-orange-500',
      size: '445 KB',
      type: 'DOCX',
      lastUpdated: 'March 2024',
      downloads: 167,
      rating: 4.6
    }
  ];

  const marketing = [
    {
      title: 'Brand Guidelines 2024',
      description: 'Complete brand identity and usage guidelines',
      category: 'Marketing',
      icon: Palette,
      color: 'bg-purple-500',
      size: '5.6 MB',
      type: 'PDF',
      lastUpdated: 'March 2024',
      downloads: 89,
      rating: 4.9
    },
    {
      title: 'Marketing Campaign Template',
      description: 'Standard templates for marketing campaigns',
      category: 'Marketing',
      icon: TrendingUp,
      color: 'bg-blue-500',
      size: '2.3 MB',
      type: 'PPTX',
      lastUpdated: 'February 2024',
      downloads: 145,
      rating: 4.7
    },
    {
      title: 'Social Media Guidelines',
      description: 'Guidelines for social media content and engagement',
      category: 'Marketing',
      icon: Share2,
      color: 'bg-green-500',
      size: '1.7 MB',
      type: 'PDF',
      lastUpdated: 'March 2024',
      downloads: 123,
      rating: 4.6
    },
    {
      title: 'Content Calendar Template',
      description: 'Monthly content planning and scheduling template',
      category: 'Marketing',
      icon: Calendar,
      color: 'bg-orange-500',
      size: '892 KB',
      type: 'XLSX',
      lastUpdated: 'February 2024',
      downloads: 156,
      rating: 4.5
    }
  ];

  const templates = [
    {
      title: 'Letterhead Template',
      description: 'Official company letterhead for all correspondence',
      category: 'Templates',
      icon: FileText,
      color: 'bg-blue-500',
      size: '234 KB',
      type: 'DOCX',
      lastUpdated: 'March 2024',
      downloads: 267,
      rating: 4.8
    },
    {
      title: 'Internal Memo Format',
      description: 'Standard format for internal communications',
      category: 'Templates',
      icon: MessageSquare,
      color: 'bg-green-500',
      size: '156 KB',
      type: 'DOCX',
      lastUpdated: 'February 2024',
      downloads: 189,
      rating: 4.7
    },
    {
      title: 'PowerPoint Templates',
      description: 'Professional presentation templates for various purposes',
      category: 'Templates',
      icon: Presentation,
      color: 'bg-purple-500',
      size: '8.9 MB',
      type: 'PPTX',
      lastUpdated: 'March 2024',
      downloads: 234,
      rating: 4.9
    },
    {
      title: 'Event/Webinar Slide Template',
      description: 'Specialized templates for events and webinars',
      category: 'Templates',
      icon: Presentation,
      color: 'bg-orange-500',
      size: '4.2 MB',
      type: 'PPTX',
      lastUpdated: 'February 2024',
      downloads: 145,
      rating: 4.6
    },
    {
      title: 'Mini Brand Guidelines',
      description: 'Condensed brand guidelines for quick reference',
      category: 'Templates',
      icon: Book,
      color: 'bg-red-500',
      size: '1.8 MB',
      type: 'PDF',
      lastUpdated: 'March 2024',
      downloads: 178,
      rating: 4.8
    }
  ];

  const communication = [
    {
      title: 'Communication Policy',
      description: 'Internal and external communication guidelines',
      category: 'Communication',
      icon: MessageSquare,
      color: 'bg-blue-500',
      size: '2.1 MB',
      type: 'PDF',
      lastUpdated: 'March 2024',
      downloads: 156,
      rating: 4.7
    },
    {
      title: 'Email Signature Template',
      description: 'Standard email signature format for all employees',
      category: 'Communication',
      icon: Mail,
      color: 'bg-green-500',
      size: '89 KB',
      type: 'HTML',
      lastUpdated: 'February 2024',
      downloads: 234,
      rating: 4.8
    },
    {
      title: 'Meeting Minutes Template',
      description: 'Standard format for meeting documentation',
      category: 'Communication',
      icon: FileText,
      color: 'bg-purple-500',
      size: '123 KB',
      type: 'DOCX',
      lastUpdated: 'March 2024',
      downloads: 189,
      rating: 4.6
    }
  ];

  const newsletters = [
    {
      title: 'Q1 2024 Newsletter',
      description: 'Quarterly company newsletter with updates and achievements',
      category: 'Newsletter',
      icon: Newspaper,
      color: 'bg-blue-500',
      size: '3.4 MB',
      type: 'PDF',
      lastUpdated: 'March 2024',
      downloads: 89,
      rating: 4.8
    },
    {
      title: 'February 2024 Newsletter',
      description: 'Monthly newsletter with company highlights',
      category: 'Newsletter',
      icon: Newspaper,
      color: 'bg-green-500',
      size: '2.8 MB',
      type: 'PDF',
      lastUpdated: 'February 2024',
      downloads: 67,
      rating: 4.7
    },
    {
      title: 'January 2024 Newsletter',
      description: 'Monthly newsletter with new year updates',
      category: 'Newsletter',
      icon: Newspaper,
      color: 'bg-purple-500',
      size: '2.9 MB',
      type: 'PDF',
      lastUpdated: 'January 2024',
      downloads: 78,
      rating: 4.6
    }
  ];

  const mediaCentre = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats',
      category: 'Media Centre',
      icon: Image,
      color: 'bg-blue-500',
      size: '12.3 MB',
      type: 'ZIP',
      lastUpdated: 'March 2024',
      downloads: 145,
      rating: 4.9
    },
    {
      title: 'Product Images',
      description: 'Professional product photography collection',
      category: 'Media Centre',
      icon: Image,
      color: 'bg-green-500',
      size: '45.7 MB',
      type: 'ZIP',
      lastUpdated: 'February 2024',
      downloads: 89,
      rating: 4.8
    },
    {
      title: 'Corporate Video Assets',
      description: 'Video content for presentations and marketing',
      category: 'Media Centre',
      icon: FileVideo,
      color: 'bg-purple-500',
      size: '156.2 MB',
      type: 'ZIP',
      lastUpdated: 'March 2024',
      downloads: 67,
      rating: 4.7
    },
    {
      title: 'Brand Photography',
      description: 'Professional brand photography collection',
      category: 'Media Centre',
      icon: Image,
      color: 'bg-orange-500',
      size: '23.8 MB',
      type: 'ZIP',
      lastUpdated: 'February 2024',
      downloads: 123,
      rating: 4.8
    }
  ];

  const getFilteredFiles = () => {
    let files = [];
    
    switch (activeTab) {
      case 'hr':
        files = hrPolicies;
        break;
      case 'finance':
        files = financeAccounts;
        break;
      case 'marketing':
        files = marketing;
        break;
      case 'templates':
        files = templates;
        break;
      case 'communication':
        files = communication;
        break;
      case 'newsletter':
        files = newsletters;
        break;
      case 'media':
        files = mediaCentre;
        break;
      default:
        files = [...hrPolicies, ...financeAccounts, ...marketing, ...templates, ...communication, ...newsletters, ...mediaCentre];
    }

    // Filter by search term
    if (searchTerm) {
      files = files.filter(file => 
        file.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      files = files.filter(file => file.category === selectedCategory);
    }

    // Sort files
    files.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'date':
          aValue = new Date(a.lastUpdated);
          bValue = new Date(b.lastUpdated);
          break;
        case 'size':
          aValue = parseFloat(a.size.replace(/[^\d.]/g, ''));
          bValue = parseFloat(b.size.replace(/[^\d.]/g, ''));
          break;
        case 'downloads':
          aValue = a.downloads;
          bValue = b.downloads;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        default:
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return files;
  };

  const renderTabContent = () => {
    const files = getFilteredFiles();

  return (
      <div className="space-y-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                              <FileText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Downloads</h3>
              <p className="text-gray-600 mt-2">Browse and download company documents</p>
            </div>
        </div>

          {/* Search and Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="HR Policies">HR Policies</option>
              <option value="Finance & Accounts">Finance & Accounts</option>
              <option value="Marketing">Marketing</option>
              <option value="Templates">Templates</option>
              <option value="Communication">Communication</option>
              <option value="Newsletter">Newsletter</option>
              <option value="Media Centre">Media Centre</option>
            </select>
            
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="size">Size</option>
                <option value="downloads">Downloads</option>
                <option value="rating">Rating</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {sortOrder === 'asc' ? <SortAsc className="h-5 w-5" /> : <SortDesc className="h-5 w-5" />}
              </button>
            </div>
          </div>

      {/* Files Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${file.color} rounded-xl mr-4`}>
                      <file.icon className="h-6 w-6 text-white" />
            </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {file.title}
                      </h4>
                      <p className="text-sm text-gray-600">{file.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {file.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Size:</span>
                      <span className="font-medium text-gray-900">{file.size}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium text-gray-900">{file.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Updated:</span>
                      <span className="font-medium text-gray-900">{file.lastUpdated}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{file.downloads} downloads</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{file.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
                                      <FileText className="h-4 w-4 mr-2" />
                Download
                    </button>
                    <button className="flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                  </div>
                </div>
              ))}
          </div>

          {files.length === 0 && (
            <div className="text-center py-12">
              <Folder className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No files found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            Downloads
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Access company documents, templates, and resources
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">42</div>
              <div className="text-gray-200">Documents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-gray-200">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-200">Downloads</div>
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

export default DownloadPage;
