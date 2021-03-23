import { Typography, Input } from 'antd'
import { useEffect } from 'react'
import { useRepository } from 'hooks/useRepository'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername } from 'redux/actions/usernameAction'
import RepositoryItem from 'components/RepositoryItem'
const { Text, Title } = Typography

export default function Home() {
  const dispatch = useDispatch()
  const username = useSelector(state => state.usernameReducer.value)
  const setUsernameValue = value => dispatch(setUsername(value))
  const { data } = useRepository(username)
  const isFilled = username.length > 0

  const handleSearch = value => {
    setUsernameValue(value)
  }

  useEffect(() => {
    document.title = 'Github Repo by User'
  })

  return (
    <div className='container'>
      <div className='f f-ctr mdl' style={{ margin: '30px 0' }}>
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        <Title level={3} style={{ margin: 0, marginLeft: 12 }}>Github Repo by User</Title>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Input.Search
          placeholder='Search username...'
          onSearch={handleSearch}
        />
      </div>
      {
        data?.message === 'Not Found' && <Text>Username not found</Text>
      }
      {
        data && isFilled && data.message !== 'Not Found' &&
        <>
          <Text>Showing {data.length} results of {username}'s Repositories</Text>
          <div style={{ padding: '10px 0 40px' }}>
            {data?.map(i => <RepositoryItem key={i.node_id} repository={i} />)}
          </div>
        </>
      }
      {
        !data && isFilled &&
        <div className='f f-ctr mdl' style={{ minHeight: '50vh', width: '100%' }}>
          <Text>Loading...</Text>
        </div>
      }
    </div>
  )
}
