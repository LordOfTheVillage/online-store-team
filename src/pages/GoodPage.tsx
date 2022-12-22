import React, {FC} from 'react'
import { useParams } from 'react-router-dom'

export const GoodsItemPage: FC = () => {
  const params = useParams();
  return <div>This is the page of {params.id} good</div>
}
