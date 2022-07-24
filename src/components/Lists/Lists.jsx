import ListItem from "./ListItem"

export default function Lists(props) {
  return (
    <ul>{props.lists.map(list => {
      return(
        <ListItem 
          key={list.id}
          title={list.title}
          created_by={list.created_by}
          description={list.description}
          image={list.index_poster}
        />
      )
    })}</ul>
  )
}
