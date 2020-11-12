import React from 'react'
import style from '../Css files/footer.module.css'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <>
                <div className={style.footer}>

                    <div>
                        <div className={style.footerTitle}>BRANDS</div>
                        <div className={style.footerText}>
                            <div>Adsen</div>
                            <div>Albam</div>
                            <div>and wander</div>
                            <div>Arpenteur</div>
                            <div>Corridor</div>
                            <div>Eastlogue</div>
                            <div>Gitman Vintage</div>
                            <div>Kestin</div>
                            <div>Lady White</div>
                            <div>Nanamica</div>
                            <div>Norse projects</div>
                        </div>
                    </div>

                    <div>
                        <div className={style.footerTitle}>INFO</div>
                        <div className={style.footerText}>
                            <div><Link to="/about">About Us</Link></div>
                            <div><Link to="/contact">Contact Us</Link></div>
                            <div><Link to="faq">FAQ</Link></div>
                            <div>Shipping</div>
                            <div>Returns & Exchanges</div>
                            <div>Repairs & warranty Info</div>
                            <div>Wholesale</div>
                            <div>Privacy Policy</div>
                            <div>Terms & Conditions</div>
                        </div>
                    </div>

                    <div>
                        <div className={style.footerTitle}>SHOP</div>
                        <div className={style.footerText}>
                            <div>New Arrivals</div>
                            <div>Best Sellers</div>
                            <div>Home & Lifestyle</div>
                            <div>Mazam Tableware</div>
                            <div>Wallets</div>
                            <div>Bags</div>
                            <div>Accessories</div>
                            <div>Tops</div>
                            <div>Bottoms</div>
                            <div>Final Sale</div>
                        </div>
                    </div>

                    <div>
                        <div className={style.footerTitle}>RETAIL STORES</div>

                        <div className={style.footerText}>
                            <div style={{ fontWeight: "bold" }}>Portland Flagship</div>
                            <div>1022 W Burnside St. Ste E<br />
                        Portland, OR 97209<br />
                        Phone: (503) 222-2774
                        </div>
                            <div>Get Directions</div>
                        </div>


                        <div className={style.dot}>........</div>

                        <div className={style.footerText}>
                            <div style={{ fontWeight: "bold" }}>San Francisco</div>
                            <div>651 Divisader St.<br />
                        San Francisco, CA 94117<br />
                        Phone: (415) 745-0614
                        </div>
                            <div>Get Directions</div>
                        </div>


                    </div>

                    <div>
                        <div className={style.footerTitle}>STAY IN THE LOOP</div>
                        <div className={style.footerText}>
                            <div >Subscribe to receive exclusive offers and be the first to know of new product releases.</div>

                        </div>
                        <div ><input placeholder="Enter your email" className={style.input} /></div>

                        <div className={style.icons}>
                            <div><i class="fab fa-instagram"></i></div>
                            <div><i class="fab fa-facebook-square"></i></div>
                        </div>
                    </div>



                </div>
                <div className={style.iconsDiv}>
                    <div><i class="fab fa-amazon"></i></div>
                    <div><i class="fab fa-cc-amex"></i></div>
                    <div><i class="fab fa-apple-pay"></i></div>
                    <div><i class="fab fa-google-pay"></i></div>
                    <div><i class="fab fa-cc-paypal"></i></div>
                    <div><i class="fab fa-cc-amazon-pay"></i></div>
                    <div><i class="fab fa-cc-visa"></i></div>
                    <div><i class="fab fa-cc-mastercard"></i></div>
                </div>
            </>


        )
    }
}