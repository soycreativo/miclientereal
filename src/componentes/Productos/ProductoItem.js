import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { DataContext } from '../../context/DataProvider';





export const ProductoItem = ({
    id,
    title,
    image,
    category,
    definicion,
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    console.log(image)

    return(
       <div className="producto">
        <a href="#">
        <div className="producto__img">

        </div>
        </a>
        <div className="producto__footer">
            <h1 className="servicio"> {title} </h1><br/>
            <h2> {category} </h2><br/>
            <div className="paragraph"><p> {definicion} </p></div>
        </div>
        <div className="buttom">
            <button className="btn" onClick={() => addCarrito(id)}>Solicitar servicio</button>
            <div>
            <a href="#" className="btn">
                Vista
                </a>
            </div>
        </div>
    </div>


    



 

    )
}