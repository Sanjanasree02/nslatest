'use client';
import React, { useState, ChangeEvent } from 'react';
import { Button } from './components/ui/button';
import { 
  Wrench, Star, GraduationCap, Laptop, Book, PenTool, 
  FileText, BarChart, Phone, Search, Menu, X
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">NEXUS SWARM</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Button variant="ghost" className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium">Home</Button>
            <Button variant="ghost" className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium">Services</Button>
            <Button variant="ghost" className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium">Resources</Button>
            <Button variant="ghost" className="text-gray-800 hover:text-orange-500 hover:bg-orange-50 font-medium">About</Button>
            <Button variant="ghost" className="text-gray-400" disabled>Coming Soon</Button>
          </nav>
          
          {/* Search Bar */}
          <div className="hidden md:flex relative">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-64 p-2 pl-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="text-gray-800 justify-start">Home</Button>
              <Button variant="ghost" className="text-gray-800 justify-start">Services</Button>
              <Button variant="ghost" className="text-gray-800 justify-start">Resources</Button>
              <Button variant="ghost" className="text-gray-800 justify-start">About</Button>
              <Button variant="ghost" className="text-gray-400 justify-start" disabled>Coming Soon</Button>
              
              <div className="relative mt-2">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="w-full p-2 pl-10 border border-gray-300 rounded-full"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Discover the Power of Connection</h2>
            <p className="text-xl text-blue-100 mb-8">Join the Nexus Swarm community and transform your ideas into reality</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg font-bold transition-all transform hover:scale-105">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-800 to-blue-900 text-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105">
            <h2 className="text-3xl font-bold mb-4">Nexus Swarm - Where Ideas Converge</h2>
            <p className="text-lg mb-8">Connect, create, and conquer the future - one idea at a time! Join our global community of innovators and problem-solvers.</p>
            <div className="flex space-x-6 mb-6">
              <div className="bg-white rounded-full p-3 shadow-lg transform transition-all hover:rotate-12">
                <Phone className="w-8 h-8 text-blue-900" />
              </div>
              <div className="bg-white rounded-full p-3 shadow-lg transform transition-all hover:rotate-12">
                <Laptop className="w-8 h-8 text-blue-900" />
              </div>
              <div className="bg-white rounded-full p-3 shadow-lg transform transition-all hover:rotate-12">
                <Book className="w-8 h-8 text-blue-900" />
              </div>
            </div>
            <Button className="mt-4 bg-white text-blue-900 hover:bg-blue-50 px-6 py-2 rounded-full font-medium">
              Learn More
            </Button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-yellow-300 to-orange-300 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Explore Our Resources</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="aspect-square bg-white bg-opacity-40 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer hover:bg-white">
                <a href="https://www.whatsapp.com/channel/0029VadY0pO1Hspr6yKS1Y1P" className="flex flex-col items-center">
                  <GraduationCap className="w-12 h-12 text-orange-600 mb-2" />
                  <span className="text-blue-900 font-medium text-sm">Learn</span>
                </a>
              </div>
              <div className="aspect-square bg-white bg-opacity-40 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer hover:bg-white">
                <a href="https://t.me/nexus_swarm" className="flex flex-col items-center">
                  <Laptop className="w-12 h-12 text-blue-900 mb-2" />
                  <span className="text-blue-900 font-medium text-sm">Build</span>
                </a>
              </div>
              <div className="aspect-square bg-white bg-opacity-40 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer hover:bg-white">
                <div className="flex flex-col items-center">
                  <Book className="w-12 h-12 text-blue-900 mb-2" />
                  <span className="text-blue-900 font-medium text-sm">Read</span>
                </div>
              </div>
              <div className="aspect-square bg-white bg-opacity-40 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer hover:bg-white">
                <div className="flex flex-col items-center">
                  <PenTool className="w-12 h-12 text-blue-900 mb-2" />
                  <span className="text-blue-900 font-medium text-sm">Create</span>
                </div>
              </div>
              <div className="aspect-square bg-white bg-opacity-40 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer hover:bg-white">
                <div className="flex flex-col items-center">
                  <FileText className="w-12 h-12 text-blue-900 mb-2" />
                  <span className="text-blue-900 font-medium text-sm">Docs</span>
                </div>
              </div>
              <div className="aspect-square bg-white bg-opacity-40 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer hover:bg-white">
                <div className="flex flex-col items-center">
                  <BarChart className="w-12 h-12 text-blue-900 mb-2" />
                  <span className="text-blue-900 font-medium text-sm">Analyze</span>
                </div>
              </div>
              <div className="aspect-square bg-white bg-opacity-40 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer hover:bg-white">
                <div className="flex flex-col items-center">
                  <Wrench className="w-12 h-12 text-blue-900 mb-2" />
                  <span className="text-blue-900 font-medium text-sm">Tools</span>
                </div>
              </div>
              <div className="aspect-square bg-white bg-opacity-40 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer hover:bg-white">
                <div className="flex flex-col items-center">
                  <Star className="w-12 h-12 text-blue-900 mb-2" />
                  <span className="text-blue-900 font-medium text-sm">Premium</span>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex flex-col items-center justify-center p-4 shadow-md hover:shadow-xl transition-all cursor-pointer">
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-lg">New!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Why Join Nexus Swarm?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Learn & Grow</h3>
              <p className="text-gray-600">Access curated resources and connect with experts to accelerate your learning journey.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <PenTool className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Create & Innovate</h3>
              <p className="text-gray-600">Turn your ideas into reality with our collaborative tools and supportive community.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Connect & Succeed</h3>
              <p className="text-gray-600">Network with like-minded individuals and find opportunities for collaboration.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Swarm?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Become part of our growing community and discover how collaboration can transform your ideas.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-bold">
              Sign Up Now
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full text-lg font-bold">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">NEXUS</h3>
              <p className="text-gray-400">Connect, create, and conquer the future - one idea at a time!</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Forums</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">&copy; 2023 Nexus Swarm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;