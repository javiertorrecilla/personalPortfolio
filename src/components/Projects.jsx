import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { projectsData } from '../data/projectsData';
import { FaRegEye } from "react-icons/fa";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isOpen, setIsOpen] = useState(false);
  const selectBoxRef = useRef(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projectsData.map(item => item.category)));
    return ['Todos', ...unique];
  }, []);

  const filteredData = useMemo(() => {
    if (selectedCategory === 'Todos') return projectsData;
    return projectsData.filter(item => item.category === selectedCategory);
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

      <ul className="project-list">
        {filteredData.map((repo, index) => (
            <li
                key={index}
                className="project-item active"
                data-filter-item
                data-category={repo.category}
            >
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                <div className="project-item-icon-box">
                    <FaRegEye />
                </div>
                <img
                    src={repo.image}
                    alt={repo.name}
                    loading="lazy"
                />
                </figure>

                <h3 className="project-title">{repo.name}</h3>
                <div className="project-meta">
                    <p className="project-category">{repo.category}</p>
                    <span className="dot"></span>
                    <p className="project-category">{repo.technology.join(", ")}</p>
                </div>
                <p className="project-description">{repo.description}</p>
            </a>
            </li>
        ))}
        </ul>

    </section>
  );
}
