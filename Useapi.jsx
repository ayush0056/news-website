import React, { useState, useEffect } from 'react';
import './Useapi.css';
import { Link } from 'react-router-dom';

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [view, setView] = useState('grid-view');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=apple&from=2023-12-26&to=2023-12-26&sortBy=popularity&apiKey=913c2079b21441928bea1dcf10335fdc'
        );
        const data = await response.json();

        data.articles.map((article) => {
          article.title = encodeURIComponent(article.title);
        });
        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleView = () => {
    setView((prevView) => (prevView === 'list-view' ? 'grid-view' : 'list-view'));
  };

  return (
    <div className={`container5 ${view}`}>
      <button onClick={toggleView} className="toggle-view-button">
        {view === 'list-view' ? 'Grid View' : 'List View'}
      </button>
      <h1>TOP - NEWS</h1>
      <div className="news-cards">
        {newsData.map((article, index) => (
          <div key={index} className={`news-card ${view}`}>
          
            {view === 'grid-view' && <img src={article.urlToImage} alt={article.title} />}
            {view === 'list-view' && <img src={article.urlToImage} alt={article.title} />}
            <div>
              <h2>{decodeURIComponent(article.title)}</h2>
              <p>{article.description}</p>
              <Link to={encodeURIComponent(article.title)}>News Detail</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
