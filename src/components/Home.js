import React from 'react'
import "../scss/Home.scss"
import logo_vn from '../asset/img/logo_vn.png'
import logo_en from '../asset/img/istockphoto-1042208442-612x612.jpg'
// import video from '../asset/video/MV EM CHẲNG ĐÀNH - Miu Lê  OST HẸN YÊU - KIM ENTERTAINMENT (720p, h264).mp4'
import Message from './Message'
import {connect} from 'react-redux'
class Home extends React.Component{
    state = {
        user_index: 0,
        message: "",
        active_user: {
            name: "Châu Đăng Khoa 2",
            avatar: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/500058654_3999422733706244_5664473045642803434_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEPw72Yy8CC-O4linvvY_2mIPh9XTMQ5oMg-H1dMxDmg5xI52fSAbYZ_s-62__J2g2cT8N-qWMvh0y5CP0u_SlH&_nc_ohc=lf5lblEu9EQQ7kNvwF4YtBV&_nc_oc=AdkG6UJ4Q62wFrp9loz5sPeoegh21gIiEtJeujIKeHxqJgVpR1cN1ipsAG58KScmjKTv9urzToD_ZGaLclidBvRN&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=L6-NMrePrVFcYrKb_uI6yQ&oh=00_AfWguMdgPfeWcPQiR2u48sT80nKqUzIyzX3SYDm7UjjuRA&oe=689BC096"
        },
        listMessages: [],
        listUsers: this.props.listUsers,
        n_rand: 0,
        listStickers: [],
        show_sticker: false
    }

    sendMessage = () => {
        this.props.sendMessage({
            user_index: this.state.user_index,
            message: this.state.message
        })
        this.setState({
            message: ""
        })
    }
    sendSticker = (link) => {
        this.props.sendSticker({
            user_index: this.state.user_index,
            icon: link
        })
        this.setState({
            message: this.state.message.replaceAll("@sticker", "").replaceAll("@STICKER", ""),
            show_sticker: false
        })
    }
    handleClickUser = (index) => {
            this.setState({
                user_index: index,
                listMessages: this.props.listUsers[index].listMessage,
                show_sticker: false,
                message: "",
                active_user: {
                    name: this.props.listUsers[index??this.state.user_index].fullname,
                },    
            })
    }
    messageChange = (e) => {
        
        this.setState({
            message: e.target.value
        })
        if (e.key === 'Enter') {
            this.sendMessage();
        }
        if (e.target.value.slice(0, 8) === "@sticker" || e.target.value.slice(0, 8) === "@STICKER") {
            this.setState({
                show_sticker: true
            })
        }else{
            this.setState({
                show_sticker: false
            })
        }
    }   
      componentDidMount(){
        this.setState({
            listMessages: this.props.listUsers[0].listMessage,
            listStickers: this.props.listStickers
        })
    }
       componentDidUpdate(prevProps) {
        
        if (prevProps.n_rand !== this.props.n_rand) {
                this.setState({
                    messages: this.props.messages,
                    listStickers: this.props.listStickers
                });
            }
        }

    render() {
        let { listStickers, show_sticker, active_user, listUsers, user_index} = this.state;
        console.log("listUsers", listUsers);
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
                            <i className="bi bi-person-vcard-fill"></i>
                        </div>
                    </div>
                    <div className="left-footer">
                        <div className="icon" title="ZLF Cloud">
                            <i className="bi bi-cloud-check"></i>
                        </div>
                         <div className="icon" title="Cloud của tôi">
                            <i className="bi bi-cloud"></i>
                        </div>
                         <div className="icon" title="Chụp hình KHÔNG kèm cửa sổ ZLF">
                            <i className="bi bi-fullscreen"></i>
                        </div>
                        <div className="icon" title="Công cụ">
                           <i className="bi bi-briefcase-fill"></i>
                        </div>
                        <div className="icon" title="Cài đặt">
                            <i className="bi bi-gear"></i>
                            <div className="modal-setting">
                                <div className="modal-item">
                                        <div className="modal-icon">
                                            <i className="bi bi-person"></i>
                                        </div>
                                         <div className="modal-title">Thông tin tài khoản</div>
                                          <div className="modal-expends"></div>
                                </div>
                                <div className="modal-item">
                                        <div className="modal-icon">
                                            <i className="bi bi-gear"></i>
                                        </div>
                                         <div className="modal-title">Cài đặt</div>
                                          <div className="modal-expends"></div>
                                </div>
                                    <hr style={{ width: "90%"}}/>
                                <div className="modal-item">
                                        <div className="modal-icon">
                                           <i className="bi bi-database"></i>
                                        </div>
                                         <div className="modal-title" title="Dữ liệu">Dữ liệu</div>
                                          <div className="modal-expends">
                                            <i className="bi bi-chevron-right"></i>
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
                                                                <i className="bi bi-chevron-right"></i>
                                                            </div>
                                                    </div>
                                             </div>
                                </div>
                                <div className="modal-item">
                                        <div className="modal-icon">
                                            <i className="bi bi-globe"></i>
                                        </div>
                                         <div className="modal-title">Ngôn ngữ</div>
                                          <div className="modal-expends">
                                            <i className="bi bi-chevron-right"></i>
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
                                           <i className="bi bi-patch-question"></i>
                                        </div>
                                         <div className="modal-title">Hỗ trợ</div>
                                          <div className="modal-expends">
                                            <i className="bi bi-chevron-right"></i>
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
                                        <i className="bi bi-search"></i>
                                        <input type='text' placeholder='Tìm kiếm'/>
                                    </div>
                                    <i className="bi bi-person-plus"></i>
                                    <i className="bi bi-person-plus-fill"></i>
                                </div>
                                <div className="list-users">
                                    { listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                        return (
                                        <div key={index} className={`user-item ${index === user_index ? "active" : ""}`} onClick={() => this.handleClickUser(index)} >
                                            <div className="user-avatar">
                                                 <img loadding="lazy" src={item.avatar} alt="avatar"/>
                                            </div>
                                            <div className="user-content">
                                                <p className="user-name">{item.fullname}</p>
                                                <p className="message">Đr em</p>
                                            </div>
                                            <div className="user-more">
                                                <div className="more-action">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/16/16073.png" alt="dot"/>
                                                </div>
                                                {/* <p>4 giờ</p> */}
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="content">
                                <div className="content-header">
                                    <div className="content-left">
                                        <div className="content-avatar">
                                            <img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/500058654_3999422733706244_5664473045642803434_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEPw72Yy8CC-O4linvvY_2mIPh9XTMQ5oMg-H1dMxDmg5xI52fSAbYZ_s-62__J2g2cT8N-qWMvh0y5CP0u_SlH&_nc_ohc=lf5lblEu9EQQ7kNvwF4YtBV&_nc_oc=AdkG6UJ4Q62wFrp9loz5sPeoegh21gIiEtJeujIKeHxqJgVpR1cN1ipsAG58KScmjKTv9urzToD_ZGaLclidBvRN&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=L6-NMrePrVFcYrKb_uI6yQ&oh=00_AfWguMdgPfeWcPQiR2u48sT80nKqUzIyzX3SYDm7UjjuRA&oe=689BC096" alt="avatar"/>
                                        </div>
                                        <div className="content-body">
                                            <div className="content-username">Châu Đăng Khoa</div>
                                            <div className="content-status">Vừa mới truy cập <span>|</span></div>
                                        </div>
                                    </div>
                                    <div className="content-right">
                                        <div className="icon">
                                                    <i className="bi bi-telephone" onClick={() => this.sendMessage()}></i>
                                        </div>
                                        <div className="icon">
                                                    <i className="bi bi-camera-video"></i>
                                        </div>
                                        <div className="icon">
                                                    <i className="bi bi-search"></i>
                                        </div>
                                        <div className="icon">
                                                    <i className="bi bi-layout-sidebar-reverse"></i>
                                                   
                                        </div>  
                                    </div>
                                </div>
                                <div className="box-message">
                                        <Message messages={this.state.listMessages ?? []}/>
                                </div>
                                <div className="input-container">
                                    <div className="typing-container">
                                        <p>{active_user?.name ?? ""} đang soạn tin nhắn</p>
                                    </div>
                                    {show_sticker && 
                                            <div className="header-input-modal">
                                                {listStickers && listStickers.length > 0 && listStickers.map((item) => {
                                                    return (<img onClick={() => this.sendSticker(item.link)}  src={item.link} alt="sticker/emochi"/>)
                                                })}
                                                
                                            </div>
        }
                                            <div className="header-input">
                                                    <i className="bi bi-emoji-grin" title="Gửi sticker"></i>
                                                    <i className="bi bi-card-image" title="Gửi hình ảnh"></i>
                                                    <i className="bi bi-paperclip" title="Đính kèm file"></i>
                                                    <i className="bi bi-person-vcard" title="Gửi danh thiếp"></i>
                                                    <i className="bi bi-fullscreen" title="Chụp kèm với cửa sổ ZLF"></i>
                                                    
                                                    <i className="bi bi-type" title="Định dạng tin nhắn (Ctrl + Shift + X)"></i>
                                                    <i className="bi bi-chat-left-text" title="Chèn tin nhắn nhanh"></i>
                                                    <i className="bi bi-three-dots" title="Tùy chọn thêm"></i>
                                            </div>
                                            <div className="form-input">
                                                <input value={this.state.message} type='text' placeholder='Nhập @, tin nhắn tới Châu Đăng Khoa' onChange={(e) => this.messageChange(e)} onKeyDown={(e) => this.messageChange(e)}/>
                                                
                                                <i className="bi bi-emoji-smile"></i>
                                                {this.state.message !== "" ? <i className="bi bi-send-fill btn-send" onClick={() => this.sendMessage()}></i> : <i className="bi bi-hand-thumbs-up-fill thumup"></i>}
                                                
                                                
                                            </div>
                                        </div>
                            </div>
                            <div className="box-expends">
                                <div className="box-expends-header">
                                    <p>Thông tin hội thoại</p>
                                </div>
                                <div className="box-expends-body">
                                    <div className="info-user">
                                        <div className="user-avatar">
                                            <img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/500058654_3999422733706244_5664473045642803434_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEPw72Yy8CC-O4linvvY_2mIPh9XTMQ5oMg-H1dMxDmg5xI52fSAbYZ_s-62__J2g2cT8N-qWMvh0y5CP0u_SlH&_nc_ohc=lf5lblEu9EQQ7kNvwF4YtBV&_nc_oc=AdkG6UJ4Q62wFrp9loz5sPeoegh21gIiEtJeujIKeHxqJgVpR1cN1ipsAG58KScmjKTv9urzToD_ZGaLclidBvRN&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=L6-NMrePrVFcYrKb_uI6yQ&oh=00_AfWguMdgPfeWcPQiR2u48sT80nKqUzIyzX3SYDm7UjjuRA&oe=689BC096" alt="avatar"/>
                                        </div>
                                        <div className="user-name">
                                            <p className="user-username">Châu Đăng Khoa</p> 
                                            <div className="edit-username">
                                                <i className="bi bi-pencil"></i>
                                            </div>
                                        </div>
                                        <div className="user-function">
                                            <div className="function-item">
                                                <div className="function-item-icon">
                                                    <i className="bi bi-bell"></i>
                                                </div>
                                                <div className="function-item-title">
                                                    Tắt thông báo
                                                </div>
                                                
                                            </div>
                                            <div className="function-item"> 
                                                <div className="function-item-icon">
                                                    <i className="bi bi-eyedropper"></i>
                                                </div>
                                                 <div className="function-item-title">
                                                    Ghim hội thoại
                                                 </div>
                                            </div>
                                            <div className="function-item"> 
                                                 <div className="function-item-icon">
                                                    <i className="bi bi-person-plus-fill"></i>
                                                </div>
                                                 <div className="function-item-title">
                                                    Tạo nhóm trò chuyện
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reminder">
                                        <div className="reminder-icon">
                                            <img src="https://cdn.creazilla.com/emojis/44982/alarm-clock-emoji-clipart-md.png" alt="reminder-icon" />
                                        </div>
                                        <div className="reminder-title">
                                            Danh sách nhắc hẹn
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-title">
                                            <p>Ảnh/Video</p>
                                            <div className="media-icon">
                                                <i className="bi bi-caret-down-fill"></i>
                                                {/* <i className="bi bi-caret-right-fill"></i> */}
                                            </div>
                                        </div>
                                        <div className="media-list">
                                            <div className="media-item">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUvEV4qKn_lxckDDd01lspzo2a9djhy4ZqQ&s" alt="media" />
                                            </div>
                                   
                                        </div>
                                    </div>
                                    <div className="file">
                                        <div className="file-title">
                                            <p>File</p>
                                            <div className="media-icon">
                                                <i className="bi bi-caret-down-fill"></i>
                                                {/* <i className="bi bi-caret-right-fill"></i> */}
                                            </div>
                                        </div>
                                        <div className="file-list">
                                            <div className="file-item">
                                                <div className="file-icon">
                                                    <i className="bi bi-file-music"></i>
                                                    {/* <i className="bi bi-camera-video"></i>
                                                    <i className="bi bi-file-earmark-excel"></i>
                                                    <i className="bi bi-file-text"></i> */}
                                                </div>
                                                <div className="file-content">
                                                    <div className="file-content-name">Em của ngày hôm qua.mp3</div>
                                                    <div className="file-content-size">4.38 MB</div>
                                                </div>
                                                <div className="file-time">Hôm qua</div>
                                            </div>
                                             <div className="file-item">
                                                <div className="file-icon">
                                                    {/* <i className="bi bi-file-music"></i> */}
                                                    {/* <i className="bi bi-camera-video"></i> */}
                                                    <i className="bi bi-file-earmark-excel"></i>
                                                    {/* <i className="bi bi-file-text"></i> */}
                                                </div>
                                                <div className="file-content">
                                                    <div className="file-content-name">File thống kê doanh thu năm 2024.xls</div>
                                                    <div className="file-content-size">20.12 MB</div>
                                                </div>
                                                <div className="file-time">Hôm qua</div>
                                            </div>
                                            <div className="file-item">
                                                <div className="file-icon">
                                                    {/* <i className="bi bi-file-music"></i> */}
                                                    {/* <i className="bi bi-camera-video"></i> */}
                                                    <i className="bi bi-file-earmark-excel"></i>
                                                    {/* <i className="bi bi-file-text"></i> */}
                                                </div>
                                                <div className="file-content">
                                                    <div className="file-content-name">File thống kê doanh thu năm 2024.xls</div>
                                                    <div className="file-content-size">20.12 MB</div>
                                                </div>
                                                <div className="file-time">20/10/2024</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="link"></div>
                                    <div className="security">
                                        <div className="security-title">
                                                <p>Thiết lập bảo mật</p>
                                                <i className="bi bi-caret-down-fill"></i>
                                        </div>
                                        <div className="list-security">
                                            
                                            <div className="security-item1">
                                                <div className="security-item-icon">
                                                    <i className="bi bi-clock-history"></i>
                                                    {/* <i className="bi bi-caret-right-fill"></i> */}
                                                     
                                                </div>
                                               <div className="security-item-title1">
                                                            <div className="group">
                                                                <p>Tin nhắn tự xóa</p> 
                                                                <span className="security-help">
                                                                    <i className="bi bi-patch-question"></i>
                                                                    <div className="modal-security-help">
                                                                        <p>Tin nhắn sẽ tự xóa sau khoảng thời gian cài đặt</p>
                                                                    </div>
                                                            </span>
                                                            </div>
                                                             <p>Không bao giờ</p>
                                                    </div>
                                               
                                               
                                            </div>
                                            <div className="security-item">
                                                <div className="security-item-icon">
                                                    <i className="bi bi-eye-slash"></i>
                                                     
                                                </div>
                                             <div className="security-item-title">
                                               
                                                <p>Ẩn cuộc trò chuyện</p> 
                                                <i className="bi bi-toggle-off"></i>
                                                {/* <i className="bi bi-toggle-on"></i> */}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="distroy">
                                        <div className="distroy-item">
                                            <div className="distroy-item-icon">
                                                <i className="bi bi-exclamation-triangle"></i>
                                            </div>
                                            <div className="distroy-item-title">Báo xấu</div>
                                        </div>
                                        <div className="distroy-item">
                                            <div className="distroy-item-icon">
                                                <i className="bi bi-trash"></i>
                                            </div>
                                            <div className="distroy-item-title" style={{color: "red"}}>Xóa lịch sử trò chuyện</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps  = (state) => {
        return state;
}
const mapDispatchToProps = (dispatch) => ({
    sendMessage: (data) => dispatch({
        type: "SEND_MESSAGE",
        payload: data
    }),
     sendSticker: (data) => dispatch({
        type: "SEND_MESSAGE",
        payload: data
    })
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);