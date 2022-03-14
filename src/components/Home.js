import React from 'react'
export default function Home() {
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-icon">
                <i class="fas fa-shopping-cart"></i><i class="fa-solid fa-circle-plus"></i>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn.shopify.com/s/files/1/0587/1593/0803/products/fksb-c-sam-m12-tra-flipkart-smartbuy-original-imagfbs6kvbgwvtz_1024x1024@2x.jpg?v=1626671549" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
