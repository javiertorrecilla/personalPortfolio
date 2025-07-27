import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { achievementData } from '../data/achievementData';

export default function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isOpen, setIsOpen] = useState(false);
  const selectBoxRef = useRef(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(achievementData.map(item => item.category)));
    return ['Todos', ...unique];
  }, []);

  const filteredData = useMemo(() => {
    if (selectedCategory === 'Todos') return achievementData;
    return achievementData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="blog-posts">
      <div className="filter-select-box" ref={selectBoxRef}>
        <button
           className={`filter-select ${isOpen ? 'active' : ''}`}
          data-select
          onClick={() => setIsOpen(prev => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          type="button"
        >
          <div className="select-value" data-select-value>{selectedCategory}</div>
          <div className="select-icon">
            <MdArrowDropDown />
          </div>
        </button>

        <ul className={`select-list ${isOpen ? 'open' : ''}`} role="listbox">
          {categories.map(category => (
            <li className="select-item" key={category}>
              <button
                data-select-item
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setIsOpen(false);
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ul className="filter-list">
        {categories.map(category => (
          <li className="filter-item" key={category}>
            <button
              data-select-item
              type="button"
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <ul className="blog-posts-list">
        {filteredData.map((post, index) => (
          <li className="blog-post-item" key={index}>
            <figure className="blog-banner-box">
              <img src={post.image} alt={post.alt} loading="lazy" />
            </figure>
            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">{post.category}</p>
                <span className="dot"></span>
                <time>{post.date}</time>
              </div>
              <h3 className="h3 blog-item-title">{post.title}</h3>
              <p className="blog-text">{post.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
