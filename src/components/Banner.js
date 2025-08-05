import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Star, 
  Zap, 
  TrendingUp, 
  Award, 
  Heart, 
  Globe, 
  Users,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';

const Banner = ({ 
  title, 
  subtitle, 
  type = 'hero', 
  color = 'primary',
  showAnimation = true,
  showStats = false,
  stats = [],
  actionButton = null
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const getGradientClass = () => {
    const gradients = {
      primary: 'from-blue-600 via-purple-600 to-indigo-600',
      success: 'from-green-600 via-emerald-600 to-teal-600',
      warning: 'from-orange-600 via-amber-600 to-yellow-600',
      danger: 'from-red-600 via-pink-600 to-rose-600',
      info: 'from-cyan-600 via-blue-600 to-indigo-600',
      dark: 'from-gray-800 via-gray-900 to-black'
    };
    return gradients[color] || gradients.primary;
  };

  const renderHeroBanner = () => (
    <section className={`relative bg-gradient-to-br ${getGradientClass()} text-white py-24 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white opacity-5 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Floating Icons */}
      {showAnimation && (
        <>
          <div className="absolute top-20 left-10 animate-float">
            <Sparkles className="h-8 w-8 text-yellow-300" />
          </div>
          <div className="absolute top-32 right-20 animate-float-delayed">
            <Star className="h-6 w-6 text-blue-300" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float">
            <Zap className="h-7 w-7 text-green-300" />
          </div>
          <div className="absolute bottom-32 right-10 animate-float-delayed">
            <TrendingUp className="h-6 w-6 text-purple-300" />
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-fade-in">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-delayed">
            {subtitle}
          </p>

          {/* Action Button */}
          {actionButton && (
            <div className="animate-fade-in-delayed-2">
              <button className="group relative inline-flex items-center px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white border-opacity-30">
                <span className="mr-2">{actionButton.text}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Stats Section */}
          {showStats && stats.length > 0 && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delayed-3">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-yellow-300" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-200 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );

  const renderInfoBanner = () => (
    <section className={`relative bg-gradient-to-r ${getGradientClass()} text-white py-12 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent animate-shimmer"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-xl">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-200">{subtitle}</p>
            </div>
          </div>
          
          {actionButton && (
            <button className="group flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
              <span className="mr-2">{actionButton.text}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );

  const renderAlertBanner = () => (
    <section className={`relative bg-gradient-to-r ${getGradientClass()} text-white py-8 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-full">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-200 text-sm">{subtitle}</p>
          </div>
          {actionButton && (
            <button className="group flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-opacity-30 transition-all duration-300">
              <span className="mr-2">{actionButton.text}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );

  const renderStatsBanner = () => (
    <section className={`relative bg-gradient-to-br ${getGradientClass()} text-white py-16 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent animate-shimmer"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-200">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="h-10 w-10 text-yellow-300" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Render based on type
  switch (type) {
    case 'hero':
      return renderHeroBanner();
    case 'info':
      return renderInfoBanner();
    case 'alert':
      return renderAlertBanner();
    case 'stats':
      return renderStatsBanner();
    default:
      return renderHeroBanner();
  }
};

export default Banner; 