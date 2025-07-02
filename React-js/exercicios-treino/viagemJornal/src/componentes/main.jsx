import '../estilos/maincomp.css'
import Fill from '../img/Fill.png'

const MainComponent =(props)=>{
    return(
    <main>
        <img src={props.img.src} alt={props.img.alt} className='macaco'/>
        <div className="wrapper">
            <nav>
                <p><img src={Fill} alt="checker" />{props.country}</p>
                <a href={props.googlemaps} target='_blank'>View on Google Maps</a>
            </nav>
            <section>
                <h2>{props.title}</h2>
                <p className='date'>{props.date}</p>
                <p className='text'>{props.text}</p>
            </section>
        </div>
    </main>
    )
}

export default MainComponent