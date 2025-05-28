function Card(props) {
    return (
        <div className="card">
            {props.img_top && <img src={props.img_top} className="card__img top" />}
            <section className="card__body">
                {props.children}
            </section>
            {props.img_bottom && <img src={props.img_bottom} className="card__img bottom" />}
        </div>
    )
}


export default Card