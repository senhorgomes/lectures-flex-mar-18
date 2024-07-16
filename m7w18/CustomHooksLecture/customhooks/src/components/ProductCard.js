function ProductCard(props) {
    return ( 
        <li className="card flow">
            <h3>{props.productName}</h3>
        </li>
     );
}

export default ProductCard;