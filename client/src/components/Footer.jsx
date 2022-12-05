import React from 'react';
import './Footer.css';
import {FaFacebook} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <ul className="row">
                    {/* column1 */}
                    <li className="col">
                        <h4>Địa chỉ liên hệ</h4>
                        <ul className='Footer-icon'>
                        <li>    
                        <FaMapMarkerAlt color='#4d8b54'/>
                        </li>  
                        <li> 5/15, đường 106, phường Tăng Nhơn Phú A, thành phố Thủ Đức</li>
                        </ul>

                        <ul className='Footer-icon'>
                            <li>
                                <a href="tel:035267814" >
                                <FaPhoneAlt color='#4d8b54'/>
                                </a>
                            </li>
                            <li>
                                03-526-7814
                            </li>
                            </ul>
                        
                    </li>

                    {/* column2 */}
                    <li className="col">
                        <h4>Gmail</h4>
                        <ul className="Footer-icon">
                            <li>
                            <FaEnvelope color='#4d8b54'/>
                            </li >  
                            <li className='mail-to'> 
                                info@fiveTea.com
                                </li>
                        </ul>
                    </li>
                    {/* column3 */}
                    <li className="col">
                        <h4>Liên hệ trực tiếp</h4>
                    <ul className="Footer-icon">
                        <li>
                             <a href="https://www.youtube.com/watch?v=HYP9DLNsYwk">
                            <FaFacebook color='#4d8b54'/> 
                             </a>
                        </li>
                        
                        <li>
                        Link facebook
                        </li>
                    </ul>
                        <ul className='Footer-icon'>
                            <li>
                              <a href="https://www.youtube.com/watch?v=HYP9DLNsYwk">
                            <FaYoutube color='#4d8b54'/>
                              </a>
                            </li>
                            <li>
                            Link youtube
                            </li>
                        </ul>
                    </li>
                    {/* column4 */}
                    <li className="col">
                        <h4>Chính sách</h4>
                        <ul className="Footer-policy">
                            <li>Hình thức thanh toán</li>
                            <li>Vận chuyển giao nhận</li>
                            <li>Bảo trì, bảo hành</li>
                            <li>Chính sách bảo mật</li>
                        </ul>
                    </li>
                </ul>
                <hr />
                <div className="row2">
                    <p className="col-slogan">Chúng tôi biết bạn có nhiều sự lựa chọn,cảm ơn vì đã chọn chúng tôi</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;