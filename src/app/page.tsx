'use client';
import { useState, ChangeEvent } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

import { 
  Phone,  
  GraduationCap, 
  Laptop, 
  Book, 
  PenTool, 
  FileText, 
  BarChart, 
  Wrench, 
  Star 
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-500">NEXUS</h1>
            <h1 className="text-2xl font-bold text-black">SWARM</h1>
          </div>
          <nav className="flex space-x-4">
            <Button variant="ghost" className="text-black">Home</Button>
            <Button variant="ghost" className="text-black">Link</Button>
            <Button variant="ghost" className="text-black">Dropdown</Button>
            <Button variant="ghost" className="text-gray-400" disabled>Disabled</Button>
          </nav>
          <Input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-64"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 flex">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-900 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Nexus Swarm Where Ideas Converge!</h2>
          <p className="text-lg mb-6">Connect, create, and conquer the future - one idea at a time!</p>
          <div className="flex space-x-4">
            <div className="bg-white rounded-full p-2">
              <Phone className="w-6 h-6 text-blue-900" />
              
            </div>
            <div className="bg-white rounded-full p-2">
              {/* <Linkedin className="w-6 h-6 text-blue-900" /> */}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-blue-200 p-8 rounded-lg relative">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 row-span-2 bg-yellow-300 rounded-lg flex items-center justify-center">
              <a href="https://www.whatsapp.com/channel/0029VadY0pO1Hspr6yKS1Y1P">
              <GraduationCap className="w-12 h-12 text-orange-500" />
              </a>
            </div>
            <div className="bg-yellow-300 rounded-lg flex items-center justify-center">
              <a href="https://t.me/nexus_swarm">
              <Laptop className="w-8 h-8 text-blue-900" /></a>
            </div>
            <div className="bg-yellow-300 rounded-lg flex items-center justify-center">
              <Book className="w-8 h-8 text-blue-900" />
            </div>
            <div className="bg-yellow-300 rounded-lg flex items-center justify-center">
              <PenTool className="w-8 h-8 text-blue-900" />
            </div>
            <div className="bg-yellow-300 rounded-lg flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-900" />
            </div>
            <div className="bg-yellow-300 rounded-lg flex items-center justify-center">
              <BarChart className="w-8 h-8 text-blue-900" />
            </div>
            <div className="bg-yellow-300 rounded-lg flex items-center justify-center">
              <Wrench className="w-8 h-8 text-blue-900" />
            </div>
          </div>
          <h2 className=" text-3xl font-bold mt-8 text-center">NEXUS SWARM</h2>
          <div className="mt-4 flex items-center justify-center">
            <div className="bg-yellow-300 rounded-full p-2">
              <Star className="w-12 h-12 text-pink-500" />
            </div>
          </div>
          {/* <div className="absolute bottom-4 right-4 flex space-x-4">
            <Instagram className="w-6 h-6 text-black" />
            <Linkedin className="w-6 h-6 text-black" />
            <Youtube className="w-6 h-6 text-black" />
          </div> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2023 Nexus Swarm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;