import React from 'react';
import { ActivityType } from '@/types/@types.articles';


const Activity = ({id, title, date, description, category, city, venue} : ActivityType ) => {
  return (
    <li className='w-full flex flex-row'>{title} {description} {date.toString()} {category} {city} {venue}</li>
  )
}

export default Activity;
