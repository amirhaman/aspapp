import React, { useEffect } from 'react';
import { ActivitiesType, ActivityType } from '@/types/@types.articles';
import { axiosGet } from '@/utils/axios-utils';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getArticles, setArticles } from './Activities.Slice';
import { ArticleComponent } from './Activity/Activity';

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(getArticles);

  useEffect(() => {
    const abortController = new AbortController();

    axiosGet(`http://localhost:5000/api/activities`, abortController.signal).then((response) => {
      if (response?.data) {
        dispatch(setArticles(response.data));
      } else {
        console.log(`api/activities response`, response)
        alert('error fetching api/activities');
      }
    });

    return () => {
      // cancel the request before component unmounts
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <ul>
        {articles &&
          articles?.map((article: ActivityType) => {
            return (
              <ArticleComponent
                key={article.id}
                id={article.id}
                title={article.title}
                date={article.date}
                description={article.description}
                category={article.category}
                city={article.city}
                venue={article.venue}
              />
            );
          })}
      </ul>
    </div>
  );
};
