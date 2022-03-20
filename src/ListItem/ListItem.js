
import './ListItem.css';
const ListItem = ({data}) => {

    // You have to split the Panel and The list items into separate components
    return(
        data.map((item) => (
            <li className="list-group-item">
            {item.symbol}
            <br/>
            <small>{item.title}</small>
        </li>
    ))
    );
}

export default ListItem;