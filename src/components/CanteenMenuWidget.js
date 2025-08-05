import React, { useState } from 'react';
import { Sparkles, Star, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import canteenMenu from '../data/canteenMenuData';
import { Link } from 'react-router-dom';

const mealTypeColors = {
  Breakfast: 'bg-yellow-50',
  Lunch: 'bg-green-50',
  'Non-Veg': 'bg-orange-50',
  Dessert: 'bg-pink-50',
  Beverage: 'bg-blue-50',
};

const CanteenMenuWidget = () => {
  const todayIdx = canteenMenu.findIndex(day => day.date === new Date().toISOString().slice(0, 10));
  const [dayIndex, setDayIndex] = useState(todayIdx >= 0 ? todayIdx : 0);
  const [expanded, setExpanded] = useState(null);
  const day = canteenMenu[dayIndex];

  const handlePrev = () => setDayIndex(i => (i > 0 ? i - 1 : canteenMenu.length - 1));
  const handleNext = () => setDayIndex(i => (i < canteenMenu.length - 1 ? i + 1 : 0));

  return (
    <div className="w-full max-w-4xl mx-auto my-8 rounded-3xl shadow-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-8 relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <button onClick={handlePrev} className="p-3 rounded-full hover:bg-orange-200 transition-all transform hover:scale-110"><ChevronLeft className="h-5 w-5" /></button>
        <div className="text-center flex-1">
          <div className="text-base text-orange-600 font-semibold flex items-center justify-center gap-2 mb-1">
            <span role="img" aria-label="calendar">📅</span> {day.day}, {new Date(day.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
          </div>
          <div className="text-2xl font-bold text-orange-900 tracking-wide flex items-center justify-center gap-3">
            <span role="img" aria-label="plate">🍽️</span> TKIL Canteen Menu
          </div>
        </div>
        <button onClick={handleNext} className="p-3 rounded-full hover:bg-orange-200 transition-all transform hover:scale-110"><ChevronRight className="h-5 w-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {day.meals.map((meal, idx) => (
          <div
            key={idx}
            className={`relative group rounded-2xl p-6 shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${meal.chefSpecial ? 'border-yellow-400' : 'border-transparent'} hover:scale-105`}
            onMouseEnter={() => setExpanded(idx)}
            onMouseLeave={() => setExpanded(null)}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            {/* Chef's Special Ribbon */}
            {meal.chefSpecial && (
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold animate-pulse z-10">
                <Sparkles className="h-4 w-4" /> Chef's Special
              </div>
            )}
            <div className="flex items-center gap-4">
              <span className="text-3xl">{meal.emoji}</span>
              <div className="flex-1">
                <div className="font-bold text-orange-900 text-lg mb-1">{meal.name}</div>
                <div className="flex items-center gap-2 text-sm">
                  {meal.veg ? <span className="text-green-600 font-semibold">(Veg)</span> : <span className="text-red-600 font-semibold">(Non-Veg)</span>}
                  {meal.spice > 0 && <span className="text-orange-600">{'🌶️'.repeat(meal.spice)}</span>}
                  {meal.allergens.length > 0 && meal.allergens.map((a, i) => <span key={i} className="text-yellow-600" title="Allergen">{a}</span>)}
                </div>
                <div className="text-sm text-orange-500 font-medium">{meal.type}</div>
              </div>
            </div>
            {/* Expandable Nutrition/Ingredients */}
            <div className={`transition-all duration-300 overflow-hidden ${expanded === idx ? 'max-h-40 mt-2' : 'max-h-0'}`}>
              <div className="flex items-center gap-2 text-xs text-gray-700 mb-1">
                <Info className="h-3 w-3 text-orange-400" />
                <span>Calories: {meal.nutrition.calories} kcal</span>
                <span>Protein: {meal.nutrition.protein}g</span>
                <span>Carbs: {meal.nutrition.carbs}g</span>
                <span>Fat: {meal.nutrition.fat}g</span>
              </div>
              <div className="text-xs text-gray-600 mb-1">Ingredients: {meal.ingredients.join(', ')}</div>
              <div className="flex items-center gap-1 text-xs">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Avg Rating: {meal.rating}★</span>
                <button className="ml-2 px-2 py-1 bg-orange-100 rounded hover:bg-orange-200 text-orange-700 text-xs font-semibold">Rate this Meal</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Poll, Feedback, and View Full Menu */}
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="text-xs text-orange-700 font-semibold mb-1">{day.poll.question}</div>
          <div className="flex flex-wrap gap-2">
            {day.poll.options.map((opt, i) => (
              <button key={i} className="px-3 py-2 rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-800 text-sm font-medium transition-all shadow-sm">
                {opt} <span className="ml-1 text-orange-500">({day.poll.votes[i]})</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-xs text-orange-700 font-semibold mb-1">Meal Rating</div>
          <div className="flex items-center justify-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="font-bold text-orange-900">{day.feedback.avgRating}★</span>
            <span className="text-xs text-orange-500">({day.feedback.responses} ratings)</span>
          </div>
        </div>
        <div className="flex-1 text-center lg:text-right">
          <Link to="/canteen-menu" className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105">View Weekly Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default CanteenMenuWidget;