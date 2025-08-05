import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Activity,
  BookOpen,
  Lock,
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
  Clock,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import Banner from '../components/Banner';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedValues, setExpandedValues] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const managementTeam = [
    {
      name: 'John Smith',
      position: 'Chief Executive Officer',
      email: 'john.smith@tkil.com',
      phone: '+1 (555) 123-4567',
      department: 'Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Visionary leader with 20+ years of experience driving innovation and growth.',
      linkedin: 'linkedin.com/in/johnsmith',
      expertise: ['Strategic Planning', 'Business Development', 'Leadership']
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operating Officer',
      email: 'sarah.johnson@tkil.com',
      phone: '+1 (555) 123-4568',
      department: 'Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Operations expert focused on efficiency and excellence across all departments.',
      linkedin: 'linkedin.com/in/sarahjohnson',
      expertise: ['Operations Management', 'Process Optimization', 'Team Leadership']
    },
    {
      name: 'Michael Chen',
      position: 'Chief Financial Officer',
      email: 'michael.chen@tkil.com',
      phone: '+1 (555) 123-4569',
      department: 'Finance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Financial strategist ensuring sustainable growth and fiscal responsibility.',
      linkedin: 'linkedin.com/in/michaelchen',
      expertise: ['Financial Strategy', 'Risk Management', 'Investment Planning']
    },
    {
      name: 'Lisa Rodriguez',
      position: 'Chief Technology Officer',
      email: 'lisa.rodriguez@tkil.com',
      phone: '+1 (555) 123-4570',
      department: 'Technology',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Technology innovator driving digital transformation and cutting-edge solutions.',
      linkedin: 'linkedin.com/in/lisarodriguez',
      expertise: ['Digital Transformation', 'AI/ML', 'Cloud Architecture']
    },
    {
      name: 'David Wilson',
      position: 'Head of Human Resources',
      email: 'david.wilson@tkil.com',
      phone: '+1 (555) 123-4571',
      department: 'Human Resources',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      bio: 'HR leader fostering inclusive culture and employee development.',
      linkedin: 'linkedin.com/in/davidwilson',
      expertise: ['Talent Management', 'Employee Engagement', 'HR Strategy']
    },
    {
      name: 'Emily Brown',
      position: 'Head of Marketing',
      email: 'emily.brown@tkil.com',
      phone: '+1 (555) 123-4572',
      department: 'Marketing',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      bio: 'Creative marketer building strong brand presence and customer relationships.',
      linkedin: 'linkedin.com/in/emilybrown',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Customer Experience']
    }
  ];

  const sections = [
    { id: 'overview', name: 'Overview', icon: Globe, color: 'from-blue-500 to-blue-600' },
    { id: 'mission', name: 'Mission', icon: Target, color: 'from-green-500 to-green-600' },
    { id: 'vision', name: 'Vision', icon: Eye, color: 'from-purple-500 to-purple-600' },
    { id: 'values', name: 'Values', icon: Heart, color: 'from-red-500 to-red-600' },
    { id: 'management', name: 'Management Team', icon: Users, color: 'from-orange-500 to-orange-600' }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical principles in all our interactions.',
      icon: Shield,
      color: 'bg-red-500',
      examples: ['Ethical decision making', 'Transparent communication', 'Accountability']
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and continuous improvement to deliver cutting-edge solutions.',
      icon: Zap,
      color: 'bg-blue-500',
      examples: ['Creative problem solving', 'Technology adoption', 'Process improvement']
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from product quality to customer service.',
      icon: Star,
      color: 'bg-green-500',
      examples: ['Quality assurance', 'Customer satisfaction', 'Continuous learning']
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve exceptional results.',
      icon: Users,
      color: 'bg-purple-500',
      examples: ['Cross-functional teams', 'Knowledge sharing', 'Inclusive culture']
    },
    {
      title: 'Sustainability',
      description: 'We are committed to environmental responsibility and sustainable business practices.',
      icon: Globe,
      color: 'bg-orange-500',
      examples: ['Environmental initiatives', 'Green technology', 'Social responsibility']
    },
    {
      title: 'Customer Focus',
      description: 'We prioritize understanding and exceeding our customers\' needs and expectations.',
      icon: Heart,
      color: 'bg-teal-500',
      examples: ['Customer feedback', 'Service excellence', 'Relationship building']
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
  return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">About TKIL</h3>
                  <p className="text-gray-600 mt-2">Technology & Knowledge Innovation Limited</p>
                </div>
        </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  TKIL (Technology & Knowledge Innovation Limited) is a leading technology company 
                  established in 2010, specializing in innovative solutions for businesses worldwide. 
                  With over 500 employees across multiple countries, we are committed to delivering 
                  excellence in every project we undertake.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-700 font-medium">Employees Worldwide</div>
                    <div className="text-sm text-gray-500 mt-2">Dedicated professionals</div>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                    <div className="text-gray-700 font-medium">Projects Completed</div>
                    <div className="text-sm text-gray-500 mt-2">Successful deliveries</div>
              </div>
                  <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                    <div className="text-gray-700 font-medium">Years of Excellence</div>
                    <div className="text-sm text-gray-500 mt-2">Industry experience</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mission':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 mt-2">Driving innovation and growth</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl mb-8">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    To empower businesses through innovative technology solutions while fostering 
                    sustainable growth and creating lasting value for our stakeholders.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                      Key Objectives
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Deliver cutting-edge technology solutions that drive business transformation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Foster a culture of innovation and continuous learning</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Build long-term partnerships based on trust and mutual success</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Contribute positively to the communities we serve</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                        <span className="text-gray-700">Understand client needs</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                        <span className="text-gray-700">Design innovative solutions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                        <span className="text-gray-700">Deliver with excellence</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                        <span className="text-gray-700">Support ongoing success</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                  <Eye className="h-8 w-8 text-white" />
        </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 mt-2">Shaping the future of technology</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl mb-8">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    To be the global leader in technology innovation, recognized for our commitment 
                    to excellence, sustainability, and positive societal impact.
              </p>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="h-6 w-6 text-purple-600 mr-3" />
                      Future Goals
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Expand global presence to 50+ countries</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Achieve carbon neutrality by 2030</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Develop breakthrough AI technologies</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Innovation Focus</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Artificial Intelligence & Machine Learning</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Cloud Computing & Digital Transformation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Sustainable Technology Solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'values':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Values</h3>
                  <p className="text-gray-600 mt-2">The foundation of our culture</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                    onClick={() => setExpandedValues(prev => ({...prev, [index]: !prev[index]}))}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${value.color} rounded-xl mr-4`}>
                          <value.icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{value.title}</h4>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {value.description}
                      </p>
                      
                      {expandedValues[index] && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h5 className="font-semibold text-gray-900 mb-2">Examples:</h5>
                          <ul className="space-y-1">
                            {value.examples.map((example, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-gray-500">Click to expand</span>
                        {expandedValues[index] ? (
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

      case 'management':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Management Team</h3>
                  <p className="text-gray-600 mt-2">Meet our leadership</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementTeam.map((member, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                          className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-gray-100 group-hover:ring-primary-100 transition-all"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {member.name}
                          </h4>
                          <p className="text-primary-600 font-medium text-sm">{member.position}</p>
                          <p className="text-sm text-gray-600">{member.department}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          <span className="truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4">
                        <h5 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h5>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                            >
                              {skill}
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
      {/* Hero Banner */}
      <Banner
        title="About Us"
        subtitle="Learn about TKIL's mission, vision, values, and leadership team"
        type="hero"
        color="primary"
        showAnimation={true}
        showStats={true}
        stats={[
          { value: '15+', label: 'Years Experience', icon: Award },
          { value: '500+', label: 'Team Members', icon: Users },
          { value: '1000+', label: 'Projects Completed', icon: CheckCircle }
        ]}
        actionButton={{
          text: 'Learn More',
          onClick: () => console.log('Learn more clicked')
        }}
      />

      {/* Info Banner */}
      <Banner
        title="🏆 Industry Leader"
        subtitle="Recognized for excellence in innovation and sustainable business practices"
        type="info"
        color="success"
        actionButton={{
          text: 'View Awards',
          onClick: () => console.log('View awards clicked')
        }}
      />

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-2 py-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`group flex items-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === section.id
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                <section.icon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
