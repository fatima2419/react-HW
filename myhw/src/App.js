
import React, { useState } from 'react';
import "./App.css";

function App() { 
  const cartoonname = [
    'Naruto',
    'demon slayer',
    'fire force',
    'last air bender',
    'black clover'
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(cartoonname);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredItems = cartoonname.filter(item =>
      item.toLowerCase().includes(searchTerm));
      // لتنسين فكرة الفلتر راح ياخذ الاري الاصلي ماتج ياخذ ايتم ايتم يحولة 
      //سمول لتر ويشوف منو يحتوي عل الحرف الي دحلتي بالسيرج
       //او كلمة لان السيرج ايتم الفاليو ماته مرتبطة بالانبت سيرج
    setFilteredItems(filteredItems);
  };
  return ( 
    <div className="cartoon">
<h3>my cartoonlist</h3>
      <input
      className='search'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {/* هنا سوينا ماب لان راح يدحل على الاري ماتي الجديد على كل ايلمن 
         بي ويطبق اوبريشن عليه ال ايتم ,هي ارو فنكسن راح تطبق على كل ايتم ب الاري الجديد  
         */}
    {filteredItems.map((item) => (
          <li>{item}</li>
        ))}
</ul>
    </div>
    
  );
} 
 
export default App; 
