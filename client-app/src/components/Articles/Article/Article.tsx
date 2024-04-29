import React from 'react';
import { ArticleType } from '@/types/@types.articles';


export const ArticleComponent = ({id, title, date, description, category, city, venue} : ArticleType ) => {
  return (
    <li className='w-full flex flex-row'>{title} {description} {date.toString()} {category} {city} {venue}</li>
  )
}
