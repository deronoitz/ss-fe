import { Typography, Tag } from 'antd'
import moment from 'moment'
import Link from 'next/link'
const { Title, Text } = Typography
export default function RepositoryItem({ repository }) {
  return (
    <Link href={repository.html_url}>
      <div className='wrapper'>
        <style jsx>
          {`
          .wrapper {
            padding: 28px;
            border: solid 1px #e8e8e8;
            border-radius: 8px;
            margin-bottom: 12px;
          }
        `}
        </style>
        <style jsx global>
          {`
          .item-title {
            display: inline-block;
          }
          .item-title:hover {
            text-decoration: underline;
            cursor: pointer;
          } 
        `}
        </style>
        <Title level={3} style={{ marginBottom: 5 }} className='item-title'>{repository.name}</Title>
        <div style={{ marginBottom: 5 }}>
          <Text>{repository.description}</Text>
        </div>
        {repository.language && <Tag>{repository.language}</Tag>}
        <Text>Updated {moment(repository.updated_at).fromNow()}</Text>
      </div>
    </Link>
  )
}