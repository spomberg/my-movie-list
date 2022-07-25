import ListItem from "./ListItem"
import "./Home.scss"

export default function Home(props) {
  return (
    <div className="index-lists">
      <ul>
        {props.lists.map(list => {
        return(
          <li key={list.id}>
            <ListItem className="list-item"
              id={list.id}
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
