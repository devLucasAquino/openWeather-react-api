export default function Card( {children, temp, desc, tempMin, tempMax} ){
    return(
        <div className="cardContainer">

            <div class="card">
                <p class="city">{children}</p>
                <p class="temp">{temp}</p>
                <p class="weather">{desc}</p>
                
                <div class="minmaxContainer">
                <div class="min">
                    <p class="minHeading">Min</p>
                    <p class="minTemp">{tempMin}</p>
                </div>
                <div class="max">
                    <p class="maxHeading">Max</p>
                    <p class="maxTemp">{tempMax}</p>
                </div>
                </div>
            </div>
            
        </div>
    )
}
