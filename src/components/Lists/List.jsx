import './List.scss';
import { useParams } from 'react-router-dom';
import useListData from '../../hooks/useListData'

export default function List() {
  const params = useParams();
  const list = useListData(params.listId).list

  return (
    <div>List</div>
  )
}
