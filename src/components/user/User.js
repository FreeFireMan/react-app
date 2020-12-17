export default function User(props) {
    let {item} = props;
    return (
        <div>
            {item.name}
            <input type="number" />
        </div>
    );
}

