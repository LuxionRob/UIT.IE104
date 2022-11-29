import React from 'react';
import './Footer.css';
import '../fonts/themify-icons-font/themify-icons/themify-icons.css';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4>Địa chỉ liên hệ</h4>
                        <div className="Footer-address">
                            <i className="ti-location-pin ti-icon"></i>
                            5/15, đường 106, phường Tăng Nhơn Phú A, thành phố Thủ Đức
                        </div>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4>Gmail</h4>
                        <div className="Footer-gmail">
                            <i className="ti-email ti-icon"></i>
                            SeeTee@gmail.com
                        </div>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4>Mạng xã hội</h4>
                        <ul className="Footer-social">
                            <li>
                                <a href="https://www.facebook.com/" className="Footer-icon">
                                    <i className="ti-facebook ti-icon"></i>
                                    Link facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=HYP9DLNsYwk" className="Footer-icon">
                                    <i className="ti-youtube ti-icon"></i>
                                    Link youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* column4 */}
                    <div className="col">
                        <h4>Chính sách</h4>
                        <ul className="Footer-policy">
                            <li>Hình thức thanh toán</li>
                            <li>Vận chuyển giao nhận</li>
                            <li>Bảo trì, bảo hành</li>
                            <li>Chính sách bảo mật</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row2">
                    <p className="col-slogan">Chúng tôi biết bạn có nhiều sự lựa chọn,cảm ơn vì đã chọn chúng tôi</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;