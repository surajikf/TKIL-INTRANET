import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Star, ChevronLeft, ChevronRight, Info, Search, 
  Calendar, Heart, Share2, Users,
  ChefHat, Utensils, Coffee, Cake, Apple, Beef
} from 'lucide-react';
import canteenMenu from '../data/canteenMenuData';
import Banner from '../components/Banner';

const CanteenMenuPage = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = [
    { id: 'all', label: 'All Meals', icon: Utensils },
    { id: 'breakfast', label: 'Breakfast', icon: Coffee },
    { id: 'lunch', label: 'Lunch', icon: ChefHat },
    { id: 'non-veg', label: 'Non-Veg', icon: Beef },
    { id: 'dessert', label: 'Dessert', icon: Cake },
    { id: 'beverage', label: 'Beverage', icon: Coffee },
    { id: 'veg', label: 'Vegetarian', icon: Apple },
  ];

  const getFilteredMeals = (day) => {
    let meals = day.meals;
    
    // Search filter
    if (searchTerm) {
      meals = meals.filter(meal => 
        meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meal.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meal.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    // Category filter
    if (selectedFilter !== 'all') {
      meals = meals.filter(meal => {
        if (selectedFilter === 'veg') return meal.veg;
        if (selectedFilter === 'non-veg') return !meal.veg;
        return meal.type.toLowerCase() === selectedFilter;
      });
    }
    
    return meals;
  };

  const currentDay = canteenMenu[selectedDay];
  const filteredMeals = getFilteredMeals(currentDay);

  const handleDayChange = (direction) => {
    if (direction === 'prev') {
      setSelectedDay(prev => prev > 0 ? prev - 1 : canteenMenu.length - 1);
    } else {
      setSelectedDay(prev => prev < canteenMenu.length - 1 ? prev + 1 : 0);
    }
  };

  const handleMealRating = (mealIndex, rating) => {
    // In a real app, this would update the backend
    console.log(`Rating meal ${mealIndex} with ${rating} stars`);
  };

  const handlePollVote = (optionIndex) => {
    // In a real app, this would update the backend
    console.log(`Voting for option ${optionIndex}`);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1080&fit=crop&crop=center')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 bg-opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            🍽️ TKIL Canteen Menu
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
            Discover delicious meals, nutritional information, and daily specials
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-200">Daily Meals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-gray-200">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Happy Diners</div>
            </div>
          </div>
          
          <button 
            onClick={() => setSelectedDay(0)}
            className="group px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <span className="flex items-center">
              Today's Special
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search meals, ingredients, or dietary preferences..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === filter.id
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleDayChange('prev')}
              className="p-3 rounded-full hover:bg-orange-100 transition-all transform hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-orange-600" />
            </button>
            
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                <span className="text-lg font-semibold text-orange-900">
                  {currentDay.day}, {new Date(currentDay.date).toLocaleDateString(undefined, { 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="text-sm text-orange-600">
                {filteredMeals.length} meals available
              </div>
            </div>
            
            <button
              onClick={() => handleDayChange('next')}
              className="p-3 rounded-full hover:bg-orange-100 transition-all transform hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-orange-600" />
            </button>
          </div>
          
          {/* Week Navigation */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {canteenMenu.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedDay === index
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {day.day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredMeals.map((meal, idx) => (
            <div
              key={idx}
              className={`relative group rounded-2xl p-6 shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                meal.chefSpecial ? 'border-yellow-400' : 'border-transparent'
              } hover:scale-105`}
              onMouseEnter={() => setExpandedMeal(idx)}
              onMouseLeave={() => setExpandedMeal(null)}
              onClick={() => setExpandedMeal(expandedMeal === idx ? null : idx)}
            >
              {/* Chef's Special Ribbon */}
              {meal.chefSpecial && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold animate-pulse z-10">
                  <Sparkles className="h-4 w-4" /> Chef's Special
                </div>
              )}

              {/* Meal Image Placeholder */}
              <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">{meal.emoji}</span>
              </div>

              {/* Meal Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{meal.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    {meal.veg ? (
                      <span className="text-green-600 font-semibold">🥬 Vegetarian</span>
                    ) : (
                      <span className="text-red-600 font-semibold">🍖 Non-Veg</span>
                    )}
                    {meal.spice > 0 && (
                      <span className="text-orange-600">{'🌶️'.repeat(meal.spice)}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{meal.type}</p>
                </div>

                {/* Allergens */}
                {meal.allergens.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {meal.allergens.map((allergen, i) => (
                      <span key={i} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        {allergen}
                      </span>
                    ))}
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(meal.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{meal.rating}★</span>
                </div>
              </div>

              {/* Expandable Details */}
              <div className={`transition-all duration-300 overflow-hidden ${
                expandedMeal === idx ? 'max-h-96 mt-4' : 'max-h-0'
              }`}>
                <div className="border-t pt-4 space-y-4">
                  {/* Nutrition Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-orange-500" />
                      Nutritional Information
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-orange-50 p-2 rounded">
                        <span className="font-medium">Calories:</span> {meal.nutrition.calories} kcal
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <span className="font-medium">Protein:</span> {meal.nutrition.protein}g
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <span className="font-medium">Carbs:</span> {meal.nutrition.carbs}g
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <span className="font-medium">Fat:</span> {meal.nutrition.fat}g
                      </div>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ingredients</h4>
                    <div className="flex flex-wrap gap-1">
                      {meal.ingredients.map((ingredient, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMealRating(idx, 5);
                      }}
                      className="flex-1 px-3 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                    >
                      Rate this Meal
                    </button>
                    <button className="p-2 text-gray-500 hover:text-orange-500 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Poll Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🗳️ Poll of the Day</h3>
            <p className="text-gray-600">{currentDay.poll.question}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentDay.poll.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handlePollVote(index)}
                className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-all transform hover:scale-105"
              >
                <div className="font-medium text-orange-900 mb-1">{option}</div>
                <div className="text-sm text-orange-600">{currentDay.poll.votes[index]} votes</div>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Today's Feedback</h3>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">{currentDay.feedback.avgRating}★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{currentDay.feedback.responses}</div>
                <div className="text-sm text-gray-600">Responses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{filteredMeals.length}</div>
                <div className="text-sm text-gray-600">Meals Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanteenMenuPage; 