import ListItem from "../Lists/ListItem"
import "./Home.scss"

export default function Home(props) {
  return (
    <div className="index-lists">
      <ul>
        {props.lists.map(list => {
        return(
          <li key={list.id}>
            <ListItem className="list-item"
              title={list.title}
              username={list.username}
              image={list.index_poster}
            />
          </li>
        )
        })}
      </ul>
    </div>
  )
}
