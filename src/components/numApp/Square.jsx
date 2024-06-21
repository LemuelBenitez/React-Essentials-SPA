
const style ={
    height: '50px',
    width: '50px',
}

export default function Square(props){
return(
        <button className="container" style={style}>
            {props.num}
        </button>
)
}