import React from 'react'
import { Pagination, Stack, Link } from '@mui/material'
const ContainerNews = ({ news, query, pageQty, page, setQuery, setPage }) => {
  return (
    <div>

      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination
            sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}
            count={pageQty}
            page={page}
            showFirstButton
            showLastButton
            onChange={(_, num) => setPage(num)}
          />
        )}
        {
          news.map((newPost) => (
            <Link
              target="_blank"
              key={newPost.objectID}
              href={newPost.url}
              sx={{ fontSize: 16 }}
            >
              {newPost.title || newPost.story_tytle}
            </Link>
          ))
        }
      </Stack>
    </div>
  )
}
export default React.memo(ContainerNews)
