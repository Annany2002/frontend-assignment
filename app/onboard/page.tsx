"use client";

import { FormEvent, useState } from "react";
import { Upload } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";
import { extendCategories, languages, feeRanges } from "../data/data";

const Onboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    categories: [] as string[],
    languages: [] as string[],
    feeRange: "",
    location: "",
    profileImage: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleMultiSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(
            (item) => item !== value
          )
        : [...(prev[field as keyof typeof prev] as string[]), value],
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.bio.trim()) newErrors.bio = "Bio is required";
    if (formData.categories.length === 0)
      newErrors.categories = "Select at least one category";
    if (!formData.feeRange) newErrors.feeRange = "Fee range is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setTimeout(() => {
        alert("Application submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          bio: "",
          categories: [],
          languages: [],
          feeRange: "",
          location: "",
          profileImage: null,
        });
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <Header />

      <div className="pt-20 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 dark:bg-gray-900">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
                Join Artistly.com
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-200">
                Create your artist profile and start getting booked for amazing
                events
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200">
                  Basic Information
                </h2>

                {/* Name */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Artist/Band Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your stage name or band name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Bio/Description *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    required
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.bio ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your artistic background..."
                  />
                  {errors.bio && (
                    <p className="text-red-500 text-sm mt-1">{errors.bio}</p>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 dark:text-white">
                  Performance Categories
                </h2>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white mb-3">
                    Select your performance categories *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {extendCategories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <input
                          type="checkbox"
                          checked={formData.categories.includes(category)}
                          onChange={() =>
                            handleMultiSelectChange("categories", category)
                          }
                          className="mr-2 h-4 w-4 text-purple-600 border-gray-300 rounded"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                  {errors.categories && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.categories}
                    </p>
                  )}
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white mb-3">
                    Languages Spoken (optional)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {languages.map((language) => (
                      <label
                        key={language}
                        className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <input
                          type="checkbox"
                          checked={formData.languages.includes(language)}
                          onChange={() =>
                            handleMultiSelectChange("languages", language)
                          }
                          className="mr-2 h-4 w-4 text-purple-600 border-gray-300 rounded"
                        />
                        <span className="text-sm">{language}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & Location */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 dark:text-white">
                  Pricing & Location
                </h2>

                {/* Fee Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Fee Range *
                  </label>
                  <select
                    value={formData.feeRange}
                    onChange={(e) =>
                      handleInputChange("feeRange", e.target.value)
                    }
                    required
                    className={`w-full p-3 border dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.feeRange ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select your typical fee range</option>
                    {feeRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.feeRange && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.feeRange}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    required
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 dark:placeholder:text-white focus:border-transparent ${
                      errors.location ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="City, State (e.g., New York, NY)"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Profile Image */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 dark:text-white">
                  Profile Media
                </h2>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">
                    Profile Image (optional)
                  </label>
                  <label className="cursor-pointer block">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-sm text-gray-600 mb-2 dark:text-gray-200">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-200">
                        PNG, JPG up to 10MB
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleInputChange(
                            "profileImage",
                            e.target.files?.[0] || null
                          )
                        }
                      />
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  By submitting, you agree to our terms of service and privacy
                  policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Onboard;
