import ListItem from "./ListItem"
import "./Home.scss"
import axiosConn from "../../axiosConn";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);
  const { enqueueSnackbar } = useSnackbar(); 

  useEffect(() => {
    Promise.resolve(axiosConn.get("/api/lists"))
    .then(all => {
      if (all.data.code === 200) {
        setLists(all.data.lists);
        setLoading(false);
      }
      else enqueueSnackbar('Network error!', { variant: 'error' })
    })
    .catch(err => enqueueSnackbar(err.message, { variant: 'error' }))
  }, [enqueueSnackbar])

  return (
    <div className="index-lists">
      {loading ? (<BeatLoader className='loader' loading={loading} />) :
        (<ul>
          {lists.map(list => {
          return(
            <li key={list.id}>
              <ListItem 
                id={list.id}
                title={list.title}
                username={list.username}
                image={list.index_poster}
              />
            </li>
          )
          })}
        </ul>)
      }
    </div>
  )
}
