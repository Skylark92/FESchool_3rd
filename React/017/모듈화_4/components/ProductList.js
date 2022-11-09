import { productData } from "../data/data.js";

export default function (productData) {
    console.log(productData);
    return (
        <ul>
            <li>{productData[0]}</li>
            <li>{productData[1]}</li>
            <li>{productData[2]}</li>
            <li>{productData[3]}</li>
            <li>{productData[4]}</li>
        </ul>
    );
}
