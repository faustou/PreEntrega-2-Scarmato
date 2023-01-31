export default function ItemListContainer(props){
    return(
        <div className="greeting">
            <p className="bienvenida"> {props.bienvenida} </p>
            <p className="proximamente"> {props.proximamente} </p>
        </div>

    );
}