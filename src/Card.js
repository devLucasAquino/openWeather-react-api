export default function Card( {children, temp} ){
    return(
        <div className="Card" style={{
            backgroundColor : 'blue'
        }}>
            <h1> {children} </h1>
            <p> {temp} </p>
        </div>
    )
}