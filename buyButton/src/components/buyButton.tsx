import axios from "axios";

import * as URL from "../constant/urls";
import {useParams} from "react-router-dom";

function BuyButton() {
    const { productId } = useParams<{ productId: string }>();

    async function buyProduct() {
        console.log(productId);
        axios.post(URL.API_URL + URL.API_ADD_TO_CART, {
            body: JSON.stringify({productId, cartId: 1}),
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }).then((res) => {
            console.log(res)
            alert('Product added to cart')
        });
    }

    return (
        <div>
            <button
                onClick={buyProduct}
                id={productId}
                data-testid="buy-button"
            >
                Buy product
            </button>
        </div>
    );
};

export default BuyButton;
