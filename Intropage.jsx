import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './Intropage.css'
export const Intropage = () => {
    const [newsData, setNewsData] = useState([]);
    
    const {title} = useParams()
    
    useEffect(() => {
        
        const fetchData = async () => {
            console.log(title)
            const apiKey = '913c2079b21441928bea1dcf10335fdc';
            const apiUrl = `https://newsapi.org/v2/everything?q=${title}&sortBy=relevancy&apiKey=${apiKey}&searchin=title&pageSize=1`
            console.log(apiUrl)
          try {
            const response = await fetch(apiUrl);
            
            const data = await response.json();

            setNewsData(data.articles);

            //console.log(data)

          } catch (error) {
            console.error('Error fetching news data:', error);
          }
        };
        fetchData();
    }, []); 

  return (
    <div className='Intropage'>
      {newsData.map((article, index) => (
        <div key={index}>
          <div>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p className='desc'>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </div>
      ))}
    </div>
  )
}
