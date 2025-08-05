import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  TreePine, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Clock,
  Award,
  Target
} from 'lucide-react';

const CSR = () => {
  const [activeTab, setActiveTab] = useState('programs');

  const csrPrograms = [
    {
      title: 'Education Initiative',
      description: 'Supporting local schools and educational programs to enhance learning opportunities for underprivileged children.',
      icon: GraduationCap,
      color: 'bg-blue-500',
      impact: '500+ students supported',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Environmental Conservation',
      description: 'Tree plantation drives, waste reduction programs, and sustainable practices to protect our environment.',
      icon: TreePine,
      color: 'bg-green-500',
      impact: '10,000+ trees planted',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Community Health',
      description: 'Free health camps, medical assistance, and awareness programs for community wellness.',
      icon: Heart,
      color: 'bg-red-500',
      impact: '2,000+ people served',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Skill Development',
      description: 'Vocational training programs to empower youth and women with employable skills.',
      icon: Users,
      color: 'bg-purple-500',
      impact: '300+ individuals trained',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Disaster Relief',
      description: 'Emergency response and relief efforts during natural disasters and community crises.',
      icon: Heart,
      color: 'bg-orange-500',
      impact: '50+ families assisted',
      image: '/api/placeholder/400/250'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Annual Tree Plantation Drive',
      date: '2024-04-15',
      time: '8:00 AM - 12:00 PM',
      location: 'Central Park Community Area',
      description: 'Join us for our biggest environmental initiative of the year. Help us plant 1,000 trees in a single day.',
      volunteers: 45,
      spotsLeft: 15,
      category: 'Environment'
    },
    {
      title: 'Educational Supply Distribution',
      date: '2024-04-22',
      time: '10:00 AM - 3:00 PM',
      location: 'Local Elementary Schools',
      description: 'Distribute school supplies and books to underprivileged students in our community.',
      volunteers: 30,
      spotsLeft: 10,
      category: 'Education'
    },
    {
      title: 'Community Health Camp',
      date: '2024-05-05',
      time: '9:00 AM - 4:00 PM',
      location: 'Community Center',
      description: 'Free health checkups, consultations, and medicine distribution for community members.',
      volunteers: 25,
      spotsLeft: 5,
      category: 'Health'
    },
    {
      title: 'Skills Training Workshop',
      date: '2024-05-12',
      time: '2:00 PM - 6:00 PM',
      location: 'TKIL Training Center',
      description: 'Computer literacy and digital skills training for unemployed youth in the community.',
      volunteers: 20,
      spotsLeft: 8,
      category: 'Education'
    }
  ];

  const impactStats = [
    { label: 'Lives Impacted', value: '10,000+', icon: Users },
    { label: 'Programs Launched', value: '25+', icon: Target },
    { label: 'Volunteer Hours', value: '5,000+', icon: Clock },
    { label: 'Community Partners', value: '15+', icon: Heart }
  ];

  const volunteerTestimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Marketing Manager',
      quote: 'Volunteering with TKIL\'s CSR programs has been incredibly rewarding. Seeing the direct impact we make in our community motivates me every day.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Chen',
      position: 'Software Engineer',
      quote: 'The tree plantation drive was amazing! It felt great to contribute to environmental conservation while bonding with colleagues.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Emily Rodriguez',
      position: 'HR Specialist',
      quote: 'Teaching computer skills to underprivileged youth through our education initiative has been one of the most fulfilling experiences of my career.',
      image: '/api/placeholder/80/80'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'events':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Volunteering Events</h3>
              <p className="text-lg text-gray-600">
                Join us in making a difference. Sign up for upcoming volunteer opportunities and be part of positive change.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      event.category === 'Environment' ? 'bg-green-100 text-green-800' :
                      event.category === 'Education' ? 'bg-blue-100 text-blue-800' :
                      event.category === 'Health' ? 'bg-red-100 text-red-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      event.spotsLeft <= 5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {event.spotsLeft} spots left
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{event.volunteers} volunteers registered</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full">
                    Sign Up to Volunteer
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-12">
            {/* CSR Programs Grid */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our CSR Programs</h3>
                <p className="text-lg text-gray-600">
                  We believe in giving back to the community through meaningful initiatives that create lasting positive impact.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {csrPrograms.map((program, index) => (
                  <div key={index} className="card hover:shadow-lg transition-shadow duration-200">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <div className={`${program.color} p-2 rounded-lg mr-3`}>
                        <program.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{program.title}</h4>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary-600">{program.impact}</span>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Learn More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Statistics */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                <p className="text-lg text-gray-600">
                  Together, we're making a meaningful difference in our community and beyond.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                      <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer Testimonials */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Stories</h3>
                <p className="text-lg text-gray-600">
                  Hear from our employees about their volunteering experiences and the impact they've made.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {volunteerTestimonials.map((testimonial, index) => (
                  <div key={index} className="card">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  const tabs = [
    { id: 'programs', label: 'CSR Programs', icon: Heart },
    { id: 'events', label: 'Volunteering Events', icon: Calendar }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 bg-opacity-85"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            At TKIL, we believe in making a positive impact on society and the environment. 
            Join us in our mission to create meaningful change through community service and sustainable practices.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-gray-200">CSR Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-200">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-gray-200">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card bg-gradient-to-r from-primary-50 to-secondary-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our CSR Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              "To be a responsible corporate citizen that contributes to the sustainable development of society 
              by focusing on education, environment, healthcare, and community empowerment while encouraging 
              our employees to actively participate in creating positive social change."
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl text-primary-100 mb-8">
            Ready to make a difference? Join our CSR initiatives and be part of positive change in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('events')}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              View Volunteer Opportunities
            </button>
            <button className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Suggest a Program
            </button>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-lg text-gray-600">
              Our commitment to social responsibility has been recognized by various organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best CSR Initiative 2023</h3>
              <p className="text-gray-600 text-sm">Recognized by the Corporate Responsibility Association</p>
            </div>
            
            <div className="card text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Environmental Excellence Award</h3>
              <p className="text-gray-600 text-sm">For outstanding contribution to environmental conservation</p>
            </div>
            
            <div className="card text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community Impact Award</h3>
              <p className="text-gray-600 text-sm">Honoring our dedication to community development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSR;
