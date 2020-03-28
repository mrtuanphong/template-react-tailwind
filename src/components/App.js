import React from 'react';
import logo from '../assets/images/logo.svg';

function App() {
  return (
    <div className="PageLayout min-h-screen flex flex-col">
      <header className="PageHeader flex-shrink-0 bg-gray-800 text-white py-2">
        <div className="container mx-auto">
          <div class="flex items-center">
            <img src={logo} alt="Logo" className="mr-2" style={{ height: '2rem' }} />
            <h2 class="text-lg">React Tailwind Template</h2>
          </div>
        </div>
      </header>
      <div className="PageBody flex-grow bg-gray-200 p-4">
        <div className="container mx-auto">
          <main>
            <div class="md:flex bg-white rounded-lg p-6">
              <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://randomuser.me/api/portraits/women/17.jpg" alt="Avatar" />
              <div class="text-center md:text-left">
                <h2 class="text-lg">Erin Lindford</h2>
                <div class="text-purple-500">Customer Support</div>
                <div class="text-gray-600">erinlindford@example.com</div>
                <div class="text-gray-600">(555) 765-4321</div>
                <button class="btn">Button</button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className="PageFooter flex-shrink-0 p-6 bg-gray-100">
        <div className="container mx-auto">
          © tailwindcss
        </div>
      </footer>
    </div>
  );
}

export default App;
