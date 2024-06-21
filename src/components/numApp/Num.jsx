import React from 'react'
import { useState } from "react"
import Square from "./Square"
import {Data} from './Data'

export default function(){
const[count, setCount] = useState(1)

    return(
         <div className='container' style={{textAlign: "center"}} >
            <h1>{count}</h1>
            <table style={{marginLeft: "auto",marginRight: "auto"}}>
                    <tbody>
                    <tr>
                    <td onClick={ () => {setCount(0)}}>
                    <Square num= {Data[0]}/>
                    </td>
                    <td onClick={ () => {setCount(count + 1)}}>
                    <Square num= {Data[1]}/>
                    </td>
                    <td onClick={ () => {setCount(count + 2)}}>
                    <Square num= {Data[2]}/>
                    </td>
                    </tr>
                    <tr>
                    <td onClick={ () => {setCount(count + 3)}}>
                    <Square num= {Data[3]}/>
                    </td>
                    <td onClick={ () => {setCount(count + 4)}}>
                    <Square num= {Data[4]}/>
                    </td>
                    <td onClick={ () => {setCount(count + 5)}}>
                    <Square num= {Data[5]}/>
                    </td>
                    </tr>
                    </tbody>
                   </table>
         </div>
    )

}