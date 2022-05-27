import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContainerNews from './ContainerNews/ContainerNews';
import Loader from './../../UI/Loader/Loader';
import classes from './News.module.css'
import { TextField } from '@mui/material'
const URL = "http://hn.algolia.com/api/v1/search?"
const News = () => {
  const [news, setNews] = useState([])
  const [query, setQuery] = useState('react')
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [isNewsLoading, setNewsLoading] = useState(false);

  useEffect(() => {
    setNewsLoading(true)
    axios.get(URL + `query=${query}&page=${page - 1}`).then(
      ({ data }) => {
        console.log(data)
        data.hits.length = 10
        setNews(data.hits)
        setPageQty(data.nbPages - 30)
        setNewsLoading(false)
        if (data.nbPages < page) {
          setPage(1)
        }

      }

    )


  }, [query, page]);
  return (
    <div className={classes.containerNewsList}>
      <div className={classes.containerTextField}>
        <TextField
          className={classes.textField}

          label="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
     
      {
        isNewsLoading
          ? <Loader />
          : <ContainerNews
            news={news}
            query={query}
            pageQty={pageQty}
            page={page}
            setQuery={setQuery}
            setPage={setPage}

          />
      }
    </div>

  )
}
export default News
