export default function Card( {children, temp, desc, tempMin, tempMax, country} ){
    return(
        <div className="cardContainer">

            <div className="card">
                <p className="city">{children}</p>
                <p className="country">{country}</p>
                <p className="temp">{temp}</p>
                <p className="weather">{desc}</p>
                
                <div className="minmaxContainer">
                <div className="min">
                    <p className="minHeading">Min</p>
                    <p className="minTemp">{tempMin}</p>
                </div>
                <div className="max">
                    <p className="maxHeading">Max</p>
                    <p className="maxTemp">{tempMax}</p>
                </div>
                </div>
            </div>
            
        </div>
    )
}
