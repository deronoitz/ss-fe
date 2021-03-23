import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

function useRepository(username) {
  const repositorySWR = useSWR(username ? `https://api.github.com/users/${username}/repos` : null, fetcher)
  return repositorySWR
}

export {
  useRepository
}