
export type ArticleType = {
  id : string;
  title : string;
  date : Date;
  description : string;
  category : string;
  city : string;
  venue : string;
}

export type ArticlesType = {
  articles: Array<ArticleType>[]
}