import ListItem from "./ListItem"
import "./Lists.scss"

export default function Lists(props) {
  return (
    <div className="index-lists">
      <ul>
        {props.lists.map(list => {
        return(
          <li key={list.id}>
            <ListItem className="list-item"
              title={list.title}
              created_by={list.created_by}
              description={list.description}
              image={list.index_poster}
            />
          </li>
        )
        })}
      </ul>
    </div>
  )
}
