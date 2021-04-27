import './country.css'

function Country(props) {
    return (
        <div className="country">
            <div className={props.description}>
                <h2>{props.description}</h2>
                <img
                    src={props.image}
                    alt={props.description}/>
            </div>
        </div>
    );
}

export default Country;