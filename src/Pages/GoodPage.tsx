import React, {FC} from 'react'
import { useParams } from 'react-router-dom'

interface GoodPageParams {
  id: number,
}

const GoodPage: FC = () => {
  const params = useParams();
  return <div>This is the page of {params.id} good</div>
}

export default GoodPage