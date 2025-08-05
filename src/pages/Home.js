import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Award, 
  GraduationCap, 
  Bell, 
  Search, 
  Briefcase,
  Users,
  FileText,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Star,
  Eye,
  Heart,
  Zap,
  Activity,
  Globe,
  Shield,
  Target,
  CheckCircle,
  Plus,
  ExternalLink,
  Utensils
} from 'lucide-react';
import Banner from '../components/Banner';


const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearInterval(timer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  const quickLinks = [
    { 
      name: 'HR Portal', 
      href: '/hr', 
      icon: Users, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Access HR policies and employee services',
      stats: '500+ Employees',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: 'Downloads', 
      href: '/download', 
      icon: FileText, 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      description: 'Browse company documents and templates',
      stats: '42 Files Available',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: Phone, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Get in touch with departments',
      stats: '6 Departments',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: 'CSR Programs', 
      href: '/csr', 
      icon: Award, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Explore corporate social responsibility',
      stats: '5 Active Programs',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: 'Canteen Menu', 
      href: '/canteen-menu', 
      icon: Utensils, 
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      description: 'View daily menu and nutritional information',
      stats: '25+ Daily Meals',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&crop=center'
    },
  ];

  const newsEvents = [
    {
      title: 'Annual Company Meeting 2024',
      date: 'March 15, 2024',
      description: 'Join us for our annual company-wide meeting to discuss achievements and future goals.',
      type: 'Event',
      icon: Calendar,
      color: 'bg-blue-500',
      attendees: 250,
      location: 'Main Auditorium',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&crop=center'
    },
    {
      title: 'New Employee Wellness Program Launch',
      date: 'March 10, 2024',
      description: 'Introducing comprehensive wellness benefits for all employees.',
      type: 'News',
      icon: Heart,
      color: 'bg-green-500',
      participants: 500,
      duration: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center'
    },
    {
      title: 'Q1 Performance Reviews',
      date: 'March 20, 2024',
      description: 'Performance review cycle begins. Please schedule meetings with your managers.',
      type: 'Announcement',
      icon: Target,
      color: 'bg-purple-500',
      deadline: 'April 15, 2024',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center'
    }
  ];

  const achievements = [
    { 
      title: 'ISO 9001 Certification', 
      description: 'Quality management excellence',
      icon: Shield,
      color: 'bg-blue-500',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center'
    },
    { 
      title: 'Best Employer Award 2023', 
      description: 'Recognized for employee satisfaction',
      icon: Star,
      color: 'bg-yellow-500',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop&crop=center'
    },
    { 
      title: '500+ Projects Completed', 
      description: 'Milestone achievement this year',
      icon: CheckCircle,
      color: 'bg-green-500',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=300&h=200&fit=crop&crop=center'
    },
    { 
      title: 'Zero Safety Incidents', 
      description: '365 days accident-free workplace',
      icon: Award,
      color: 'bg-red-500',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop&crop=center'
    }
  ];

  const trainingPrograms = [
    { 
      title: 'Leadership Development', 
      duration: '4 weeks', 
      level: 'Advanced',
      icon: Users,
      color: 'bg-purple-500',
      participants: 25,
      startDate: 'April 1, 2024',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=200&fit=crop&crop=center'
    },
    { 
      title: 'Digital Skills Training', 
      duration: '2 weeks', 
      level: 'Beginner',
      icon: Globe,
      color: 'bg-blue-500',
      participants: 50,
      startDate: 'March 25, 2024',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center'
    },
    { 
      title: 'Safety Compliance', 
      duration: '1 week', 
      level: 'Mandatory',
      icon: Shield,
      color: 'bg-orange-500',
      participants: 500,
      startDate: 'March 18, 2024',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center'
    },
    { 
      title: 'Project Management', 
      duration: '6 weeks', 
      level: 'Intermediate',
      icon: Target,
      color: 'bg-green-500',
      participants: 30,
      startDate: 'April 8, 2024',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center'
    }
  ];

  const stats = [
    { label: 'Employees', value: '500+', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Projects', value: '1000+', icon: Briefcase, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Countries', value: '15+', icon: Globe, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Years', value: '15+', icon: Award, color: 'text-orange-600', bgColor: 'bg-orange-100' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to TKIL Intranet
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your gateway to company resources, services, and information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="group px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <span className="flex items-center">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <span className="flex items-center">
                Contact Us
                <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Background */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=400&fit=crop&crop=center')`,
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600">Everything you need, just a click away</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundImage: `url('${link.image}')` }}
                ></div>
                
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${link.color}"></div>
                <div className="relative p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${link.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className={`h-8 w-8 bg-gradient-to-r ${link.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{link.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600">{link.stats}</span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Events</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest company news and upcoming events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsEvents.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 ${item.color} rounded-xl`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">{item.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    {item.location && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                    )}
                  </div>
                  
                  {item.attendees && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {item.attendees} attendees
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Facts & Figures</h2>
            <p className="text-xl text-gray-600">Our key achievements and milestones</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="h-32 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${achievement.image}')` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${achievement.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 -mt-8 relative z-10`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {achievement.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600">Enhance your skills with our comprehensive training programs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="h-32 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${program.image}')` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${program.color} rounded-xl mb-4 -mt-8 relative z-10`}>
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {program.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Level:</span>
                      <span className="font-medium">{program.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Participants:</span>
                      <span className="font-medium">{program.participants}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Starts: {program.startDate}</span>
                    <span className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      Enroll Now
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Background Image */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop&crop=center')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 bg-opacity-90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore our comprehensive intranet platform and discover all the resources available to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="group px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <span className="flex items-center">
                Learn About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="group px-8 py-4 bg-primary-700 text-white rounded-xl hover:bg-primary-800 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <span className="flex items-center">
                Contact Us
                <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
