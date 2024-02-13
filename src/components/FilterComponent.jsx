import React, { useEffect, useState } from 'react';

function FilterComponent() {
  const [activeBtn, setActiveBtn] = useState('all');

  useEffect(() => {
    filterSelection(activeBtn);
  }, [activeBtn]);

  const filterSelection = (c) => {
    const elements = document.getElementsByClassName("filterDiv");
    if (c === "all") c = "";
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("hidden");
      if (elements[i].className.indexOf(c) > -1) {
        elements[i].classList.remove("hidden");
      } else {
        elements[i].classList.add("hidden");
      }
    }
  }

  const handleClick = (filter) => {
    setActiveBtn(filter);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Filter DIV Elements</h2>
      <div className="flex mb-4">
        <button className={`btn ${activeBtn === 'all' ? 'active' : ''}`} onClick={() => handleClick('all')}>Show all</button>
        <button className={`btn ${activeBtn === 'cars' ? 'active' : ''}`} onClick={() => handleClick('cars')}>Cars</button>
        <button className={`btn ${activeBtn === 'animals' ? 'active' : ''}`} onClick={() => handleClick('animals')}>Animals</button>
        <button className={`btn ${activeBtn === 'fruits' ? 'active' : ''}`} onClick={() => handleClick('fruits')}>Fruits</button>
        <button className={`btn ${activeBtn === 'colors' ? 'active' : ''}`} onClick={() => handleClick('colors')}>Colors</button>
      </div>

      <div className="flex flex-wrap">
        <div className="filterDiv cars bg-blue-500 text-white w-24 h-24 flex items-center justify-center m-2">BMW</div>
        <div className="filterDiv colors fruits bg-orange-500 text-white w-24 h-24 flex items-center justify-center m-2">Orange</div>
        <div className="filterDiv cars bg-blue-500 text-white w-24 h-24 flex items-center justify-center m-2">Volvo</div>
        <div className="filterDiv colors bg-red-500 text-white w-24 h-24 flex items-center justify-center m-2">Red</div>
        <div className="filterDiv cars bg-blue-500 text-white w-24 h-24 flex items-center justify-center m-2">Ford</div>
        <div className="filterDiv colors bg-blue-500 text-white w-24 h-24 flex items-center justify-center m-2">Blue</div>
        <div className="filterDiv animals bg-green-500 text-white w-24 h-24 flex items-center justify-center m-2">Cat</div>
        <div className="filterDiv animals bg-green-500 text-white w-24 h-24 flex items-center justify-center m-2">Dog</div>
        <div className="filterDiv fruits bg-green-500 text-white w-24 h-24 flex items-center justify-center m-2">Melon</div>
        <div className="filterDiv fruits animals bg-green-500 text-white w-24 h-24 flex items-center justify-center m-2">Kiwi</div>
        <div className="filterDiv fruits bg-green-500 text-white w-24 h-24 flex items-center justify-center m-2">Banana</div>
        <div className="filterDiv fruits bg-green-500 text-white w-24 h-24 flex items-center justify-center m-2">Lemon</div>
        <div className="filterDiv animals bg-green-500 text-white w-24 h-24 flex items-center justify-center m-2">Cow</div>
      </div>
    </div>
  );
}

export default FilterComponent;
