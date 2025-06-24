"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { Search } from "lucide-react";
import { artists } from "../data/data";
import StatCard from "@/components/StatCard";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredArtists = artists.filter((artist) => {
    const matchSearch = artist.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchCategory =
      categoryFilter === "All" ||
      artist.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <Header />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Manager Dashboard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-200">
              Manage your artists and track their performance
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard
              label="Total Artists"
              value={artists.length}
              icon="👥"
              color="purple"
            />
            <StatCard
              label="Active Artists"
              value={artists.filter((a) => a.status === "Active").length}
              icon="✅"
              color="green"
            />
            <StatCard
              label="Total Bookings"
              value={artists.reduce((sum, a) => sum + a.bookings, 0)}
              icon="📅"
              color="blue"
            />
            <StatCard
              label="Avg. Rating"
              value={(
                artists.reduce((sum, a) => sum + a.rating, 0) / artists.length
              ).toFixed(1)}
              icon="⭐"
              color="yellow"
            />
          </div>

          {/* Controls */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-900">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search artists..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-900"
                >
                  <option>All</option>
                  <option>Singer</option>
                  <option>Dancers</option>
                  <option>Musicians</option>
                  <option>Comedian</option>
                </select>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "table" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                >
                  Table View
                </Button>
                <Button
                  variant={viewMode === "cards" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("cards")}
                >
                  Card View
                </Button>
              </div>
            </div>
          </div>

          {/* Data Display */}
          {viewMode === "table" ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      {[
                        "Artist",
                        "Category",
                        "Location",
                        "Fee Range",
                        "Status",
                        "Actions",
                      ].map((col) => (
                        <th
                          key={col}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900">
                    {filteredArtists.map((artist) => (
                      <tr
                        key={artist.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium">
                              {artist.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                                {artist.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-200">
                                ⭐ {artist.rating} • {artist.bookings} bookings
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                          {artist.category}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                          {artist.city}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                          {artist.feeRange}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              artist.status
                            )}`}
                          >
                            {artist.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtists.map((artist) => (
                <div
                  key={artist.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 dark:bg-gray-900"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {artist.name.charAt(0)}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-200">
                        {artist.category}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        artist.status
                      )}`}
                    >
                      {artist.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between text-gray-600 dark:text-white">
                      <span>Location:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-200">
                        {artist.city}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600 dark:text-white">
                      <span>Fee Range:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-200">
                        {artist.feeRange}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600 dark:text-white">
                      <span>Rating:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-200">
                        ⭐ {artist.rating}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600 dark:text-white">
                      <span>Bookings:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-200">
                        {artist.bookings}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Manage Artist
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
