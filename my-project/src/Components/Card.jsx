function Card(props){
    return(
        <div>
            <h2>Name:{props.name}</h2>
            <p>Age:{props.age}</p>
            <button>View Profile</button>
        </div>

    )
}
export default Card;
