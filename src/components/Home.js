import React from 'react'
import "../scss/Home.scss"
import logo_vn from '../asset/img/logo_vn.png'
import logo_en from '../asset/img/istockphoto-1042208442-612x612.jpg'

class Home extends React.Component{
    render() {
        return (
            <div className="home-container">
                <div className="left">
                    <div className="left-header">
                        <div className="avatar">
                            <img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/500058654_3999422733706244_5664473045642803434_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEPw72Yy8CC-O4linvvY_2mIPh9XTMQ5oMg-H1dMxDmg5xI52fSAbYZ_s-62__J2g2cT8N-qWMvh0y5CP0u_SlH&_nc_ohc=lf5lblEu9EQQ7kNvwF4YtBV&_nc_oc=AdkG6UJ4Q62wFrp9loz5sPeoegh21gIiEtJeujIKeHxqJgVpR1cN1ipsAG58KScmjKTv9urzToD_ZGaLclidBvRN&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=L6-NMrePrVFcYrKb_uI6yQ&oh=00_AfWguMdgPfeWcPQiR2u48sT80nKqUzIyzX3SYDm7UjjuRA&oe=689BC096" alt="avatar"/>
                        </div>
                        <div className="icon">
                            <i className="bi bi-chat-text-fill"></i>
                        </div>
                        <div className="icon">
                            <i class="bi bi-person-vcard-fill"></i>
                        </div>
                    </div>
                    <div className="left-footer">
                        <div className="icon" title="ZLF Cloud">
                            <i class="bi bi-cloud-check"></i>
                        </div>
                         <div className="icon" title="Cloud của tôi">
                            <i class="bi bi-cloud"></i>
                        </div>
                         <div className="icon" title="Chụp hình KHÔNG kèm cửa sổ ZLF">
                            <i class="bi bi-fullscreen"></i>
                        </div>
                        <div className="icon" title="Công cụ">
                           <i class="bi bi-briefcase-fill"></i>
                        </div>
                        <div className="icon" title="Cài đặt">
                            <i class="bi bi-gear"></i>
                            <div className="modal-setting">
                                <div className="modal-item">
                                        <div className="modal-icon">
                                            <i class="bi bi-person"></i>
                                        </div>
                                         <div className="modal-title">Thông tin tài khoản</div>
                                          <div className="modal-expends"></div>
                                </div>
                                <div className="modal-item">
                                        <div className="modal-icon">
                                            <i class="bi bi-gear"></i>
                                        </div>
                                         <div className="modal-title">Cài đặt</div>
                                          <div className="modal-expends"></div>
                                </div>
                                    <hr style={{ width: "90%"}}/>
                                <div className="modal-item">
                                        <div className="modal-icon">
                                           <i class="bi bi-database"></i>
                                        </div>
                                         <div className="modal-title" title="Dữ liệu">Dữ liệu</div>
                                          <div className="modal-expends">
                                            <i class="bi bi-chevron-right"></i>
                                          </div>
                                               <div className="modal-data">
                                                    <div className="modal-item">
                                                            <div className="modal-title">Đồng bộ tin nhắn</div>
                                                            <div className="modal-expends"></div>
                                                    </div>
                                                    <div className="modal-item">
                                                            <div className="modal-title">Quản lý dữ liệu</div>
                                                            <div className="modal-expends"></div>
                                                    </div>
                                                    <hr style={{ width: "90%"}}/>
                                                     <div className="modal-item">
                                                            <div className="modal-title">Khác
                                                                <div className="modal-orther">
                                                                    <div className="modal-item">
                                                                            <div className="modal-title">Xuất dữ liệu</div>
                                                                            <div className="modal-expends"></div>
                                                                    </div>
                                                                    <div className="modal-item">
                                                                            <div className="modal-title">Nhập dữ liệu</div>
                                                                            <div className="modal-expends"></div>
                                                                    </div>
                                                                    <hr style={{ width: "90%"}}/>
                                                                    <div className="modal-item">
                                                                            <div className="modal-title">Quản lý File</div>
                                                                            <div className="modal-expends">
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-expends">
                                                                <i class="bi bi-chevron-right"></i>
                                                            </div>
                                                    </div>
                                             </div>
                                </div>
                                <div className="modal-item">
                                        <div className="modal-icon">
                                            <i class="bi bi-globe"></i>
                                        </div>
                                         <div className="modal-title">Ngôn ngữ</div>
                                          <div className="modal-expends">
                                            <i class="bi bi-chevron-right"></i>
                                          </div>
                                          <div className="modal-data">
                                                    <div className="modal-item">
                                                            <div className="modal-icon">
                                                                <img src={logo_vn}  alt="logo_vn"/>
                                                            </div>
                                                            <div className="modal-title">Tiếng Việt</div>
                                                            <div className="modal-expends"></div>
                                                    </div>
                                                    <div className="modal-item">
                                                        <div className="modal-icon">
                                                                <img src={logo_en}  alt="logo_vn"/>
                                                            </div>
                                                            <div className="modal-title">Tiếng Anh</div>
                                                            <div className="modal-expends"></div>
                                                    </div>
                                             </div>
                                </div>
                                <div className="modal-item">
                                        <div className="modal-icon">
                                           <i class="bi bi-patch-question"></i>
                                        </div>
                                         <div className="modal-title">Hỗ trợ</div>
                                          <div className="modal-expends">
                                            <i class="bi bi-chevron-right"></i>
                                          </div>
                                          <div className="modal-data">
                                                    <div className="modal-item">
                                                            <div className="modal-title">Thông tin phiên bản</div>
                                                            <div className="modal-expends"></div>
                                                    </div>
                                                    <div className="modal-item">      
                                                            <div className="modal-title">Liên hệ</div>
                                                            <div className="modal-expends"></div>
                                                    </div>
                                                    <div className="modal-item">      
                                                            <div className="modal-title">Gửi file log tới ZLF</div>
                                                            <div className="modal-expends"></div>
                                                    </div>
                                                    <hr style={{ width: "90%"}}/>
                                                     <div className="modal-item">      
                                                            <div className="modal-title">Phím tắt</div>
                                                            <div className="modal-expends"></div>
                                                    </div>
                                             </div>
                                </div>
                             
                                    <hr style={{ width: "90%"}}/>
                                <div className="modal-item">
                                        <div className="modal-icon">
                                           
                                        </div>
                                        <div className="modal-title" style={{color: "red"}}>Đăng xuất</div>
                                         
                                </div>
                                 <div className="modal-item">
                                        <div className="modal-icon">
                                          
                                        </div>
                                        <div className="modal-title">Thoát</div>
                                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="right-header">
                                <p>Zalo - Thành Huy</p>
                    </div>
                    <div className="right-content">
                            <div className="list-content">
                                <div className="found-container">
                                    <div className="form-control">
                                        <i class="bi bi-search"></i>
                                        <input type='text' placeholder='Tìm kiếm'/>
                                    </div>
                                    <i class="bi bi-person-plus"></i>
                                    <i class="bi bi-person-plus-fill"></i>
                                </div>
                                <div className="list-users">
                                    
                                </div>
                            </div>
                            <div className="content">Content</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;