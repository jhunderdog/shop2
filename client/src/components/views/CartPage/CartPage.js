import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { getCartItems } from "../../../_actions/user_actions"
import UserCardBlock from './Sections/UserCardBlock';

function CartPage(props) {
    const [Total, setTotal] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        let cartItems = []
        if(props.user.userData){
            if(props.user.userData.cart.length > 0){
                props.user.userData.cart.forEach(item  => {
                    cartItems.push(item.id)
                })
            dispatch(getCartItems(cartItems, props.user.userData))
            .then(response => {calculateTotal(response.payload)})
            }
        }
    }, [props.user.userData])

    const calculateTotal = (cartDetail) => {
        let total = 0;
        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        })
        setTotal(total);
    }
    return (
        <div style={{width:'85%', margin: '3rem auto'}}>
            <h1>My Cart</h1>
        <div>
            <UserCardBlock products={props.user.cartDetail && props.user.cartDetail.product}/>
        </div>

        <div style={{marginTop:'3rem'}}>
            <h2>Total Amount: ${Total}</h2>
        </div>
    )
}

export default CartPage
