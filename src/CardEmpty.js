export default function CardEmpty({children}){
    return(
       
         <p className="card_empty" style={{
            color: 'red',
            fontWeight: 900,
            fontSize: 22,
        }}>{children}</p>
       
    )
}