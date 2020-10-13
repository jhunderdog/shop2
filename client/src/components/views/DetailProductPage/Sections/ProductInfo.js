import React from 'react'
import { Button, Descriptions } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";

function ProductInfo(props) {
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(addToCart(props.detail._id))
    }

    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.item label="Price">{props.detail.price}</Descriptions.item>
                <Descriptions.item label="Sold">{props.detail.sold}</Descriptions.item>
                <Descriptions.item label="View">{props.detail.view}</Descriptions.item>
                <Descriptions.item label="Description">{props.detail.description}</Descriptions.item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{display:'flex', justifyContent:"center" }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo
