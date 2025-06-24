"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { Search, Filter, X } from "lucide-react";
import { artists, categories, locations, priceRanges } from "../data/data";

export default function Explore() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtists = artists.filter((artist) => {
    const matchSearch = artist.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || artist.category === selectedCategory;
    const matchLocation =
      selectedLocation === "All" || artist.city === selectedLocation;
    const matchPrice =
      selectedPrice === "All" || artist.feeRange === selectedPrice;

    return matchSearch && matchCategory && matchLocation && matchPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Artists
            </h1>
            <p className="text-lg text-gray-600">
              Find the perfect performer for your next event
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Filter size={16} />
                    Filters
                  </div>
                  {isFilterOpen ? <X size={16} /> : <Filter size={16} />}
                </Button>
              </div>

              {/* Filter Panel */}
              <div
                className={`${
                  isFilterOpen ? "block" : "hidden"
                } lg:block bg-white rounded-lg shadow-md p-6`}
              >
                <h3 className="font-semibold text-gray-900 mb-4">Filter by</h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={16}
                    />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Search artists..."
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Artist Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArtists.length === 0 ? (
                  <p className="text-center col-span-full text-gray-500">
                    No artists match the selected filters.
                  </p>
                ) : (
                  filteredArtists.map((artist, index) => (
                    <div
                      key={artist.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mr-4">
                            {artist.image}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {artist.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {artist.category}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              Price Range:
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {artist.feeRange}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              Location:
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {artist.city}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              Rating:
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              ⭐ {artist.rating}
                            </span>
                          </div>
                        </div>

                        <Button className="w-full">Ask for Quote</Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
