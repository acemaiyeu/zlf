// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


const initState = {
  listDefaultQA: [
    {
      question: "ơi",
      answer: ["Zạ! Em em nghe nè ox", "Zạ! Em em nghe có chuyện gì hong nèk!"],
      next_question: "",
    },

    {
      question: "làm gì",
      answer: [
        "Zạ! Em đang chuẩn bị nấu cơm",
        "Zạ! Em đang nằm chơi á. Còn anh",
        "Zạ em đang nhớ về anh ạ",
        "Zạ em đang ăn cơm ạ",
      ],
      next_question: "",
    },
    {
      question: "nhớ",
      answer: ["Thiệt hong đó!", "Nhớ thiệt hong", "Nhớ rùi làm gì nè!"],
      next_question: "",
    },
    {
      question: "hun",
      answer: ["Được! qua đi cho nè", "Hihi"],
      next_question: "",
    },
    {
      question: "có bận gì hong",
      answer: ["Zạ hong ạ. Sao vậy anh?"],
      next_question: "",
    },
    {
      question: "chơi",
      answer: ["Zạ đi đâu ạ"],
      next_question: "",
    },
    {
      question: "du lịch",
      answer: ["Zạ đi đâu vậy anh"],
      next_question: "",
    },
    {
      question: "hòn sơn",
      answer: ["Zạ chỉ cần có anh, đi đâu cũng được ạ"],
      next_question: "",
    },
    {
      question: "thiệt",
      answer: ["Hihi"],
      next_question: "",
    },
    {
      question: "mệt",
      answer: [
        "Zạ! anh nhớ giữ gìn sức khỏe đó, em biết anh mệt, nè dựa vào lòng em đi",
        "Cực cho anh quá à!",
      ],
      next_question: "",
    },
    {
      question: "có cực gì đâu à",
      answer: ["Zạ! hihi"],
      next_question: "",
    },
    {
      question: "hello xin chào",
      answer: ["Zạ chồng"],
      next_question: "",
    },
    {
      question: "Zạ dạ",
      answer: ["Zạ chồng"],
      next_question: "",
    },
  ],
  listStickers: [
    {
      name: "Nhớ",
      link: "https://media.tenor.com/TwTTaGB-woAAAAAm/%E9%9D%92%E8%9B%99%E6%90%9E%E7%AC%91.webp",
      is_show: true,
    },
    {
      name: "nghi ngờ",
      link: "https://media.tenor.com/yR1YfVvNUzgAAAAm/susdog.webp",
      is_show: true,
    },
    {
      name: "mèo hun, mèo kiss",
      link: "https://media.tenor.com/bvXwJ4I19ZQAAAAm/cat-cat-meme.webp",
      is_show: true,
    },
    {
      name: "ổn, ok",
      link: "https://media.tenor.com/CORnjI6A2isAAAAm/kanade-kanade-yoisaki.webp",
      is_show: true,
    },
    // {
    //   name: "vui vẻ, ngại",
    //   link: "https://media.tenor.com/86-bl9RDjCIAAAAm/mizuki-mizuki-akiyama.webp",
    // },
    {
      name: "ngủ ngon",
      link: "https://media.tenor.com/99NBPX37hg4AAAAm/lgbtq-artists-lgbtq-holidays.webp",
      is_show: true,
    },
    {
      name: "giận, hong quan tâm",
      link: "https://media.tenor.com/5D4h1TBpO7kAAAAm/angry-cute-angry-cat.webp",
      is_show: true,
    },
    {
      name: "kiss, hung, hôn, hun",
      link: "https://media.tenor.com/yC1xbN87LPgAAAAm/peachu-kiss-gomu.webp",
      is_show: true,
    },
    {
      name: "sorry xin lỗi",
      link: "https://media.tenor.com/TEvaE7m0iZcAAAAm/len.webp",
      is_show: true,
    },
    {
      name: "thích, enjoy",
      link: "https://media.tenor.com/tTEIAHIku1kAAAAm/bubu-dudu-sseeyall.webp",
      is_show: true,
    },
    {
      name: "hug me ôm ",
      link: "https://media.tenor.com/R01QpRD6waQAAAAm/quby-says-hug-me.webp",
      is_show: true,
    },
    {
      name: "giỡn, đánh nè",
      link: "https://media.tenor.com/qQmsOJoeMoMAAAAm/dudu-bubu.webp",
      is_show: true,
    },
    {
      name: "đáng yêu, thích, nhớ, thương",
      link: "https://media.tenor.com/IWv3qEU0ZN4AAAAm/quby-flower.webp",
      is_show: true,
    },
    {
      name: "year, đập tay",
      link: "https://media.tenor.com/AHAi9SFQE9cAAAAm/quby-yeah.webp",
      is_show: true,
    },
    // {
    //   name: "trái tim, tình yêu",
    //   link: "https://media.tenor.com/RhaiQhKwd3QAAAAm/heart.webp",
    // },
    {
      name: "ôm bảo vệ",
      link: "https://media.tenor.com/szNccuQSFfoAAAAm/big-hug-protector.webp",
      is_show: true,
    },
    {
      name: "hello xin chào",
      link: "https://media.tenor.com/tZsmDBXPMtEAAAAm/birbhaus-hello.webp",
      is_show: true,
    },
    {
      name: "yêu gần gũi",
      link: "https://media.tenor.com/Ez-nD6tQiOgAAAAm/mollyane.webp",
      is_show: true,
    },
    {
      name: "amee xin lỗi",
      link: "https://media0.giphy.com/media/JrGX2VCCRkfeFLUrzj/200.webp",
      is_show: true,
    },
    {
      name: "flo flolentino vậy hả",
      link: "https://media4.giphy.com/media/iJ6hoyfunz7x9YRGfe/giphy.webp",
      is_show: true,
    },
    {
      name: "zuka đáng yêu",
      link: "https://media1.giphy.com/media/fYNCZuYJ6b0N45YcDD/giphy.webp",
      is_show: true,
    },
    {
      name: "grankk an ủi",
      link: "https://media2.giphy.com/media/KH2DBmebm8fsWApG4U/giphy.webp",
      is_show: true,
    },
    {
      name: "tức giận liên quân",
      link: "https://media4.giphy.com/media/YRKKqBaQ2vjcppijNz/giphy.webp",
      is_show: true,
    },
    {
      name: "ngại quỷ sứ liên quân",
      link: "https://media0.giphy.com/media/XzdgJK32Otye3DGhHI/giphy.webp",
      is_show: true,
    },
    {
      name: "khóc liên quân huhu",
      link: "https://media2.giphy.com/media/SVIAzvEDXtu37zB3wN/giphy.webp",
      is_show: true,
    },
    {
      name: "tình yêu trái tim",
      link: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjloZWZ1aTBuZWdoZHBqcnYxemZ5czVjdmNjNnNmZDc0b2x0eW53dSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/MBKZxbBglJz3dwfcf8/giphy.webp",
      is_show: true,
    },
    {
      name: "yêu thế nhở tình yêu",
      link: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjloZWZ1aTBuZWdoZHBqcnYxemZ5czVjdmNjNnNmZDc0b2x0eW53dSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/K9a3zcbhC3nHioBiFP/giphy.webp",
      is_show: true,
    },
    {
      name: "tình yêu trái tim",
      link: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGM4b292a211ODQyNmdtMHk2d3RtNWt4Z2JtbmlidHA2Yzh1eDB6dCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/fvN5KrNcKKUyX7hNIA/200.webp",
      is_show: true,
    },
    {
      name: "môi hun kiss",
      link: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGM4b292a211ODQyNmdtMHk2d3RtNWt4Z2JtbmlidHA2Yzh1eDB6dCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/3og0IQ7L4cWZNP72Vi/giphy.webp",
      is_show: true,
    },
    {
      name: "trái tim",
      link: "https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b2hnM2Z3eGRkM2M0dzN1YjY1bzk1c24zN294MHFkbjRmZms2MHFzaCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/3d5DiVNB0Y4eZtaP6g/giphy.webp",
      is_show: true,
    },
    {
      name: "hôn hun hung kiss",
      link: "https://media1.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eTFvOTcwdjQ5Nzk0N2cyY3Q0c3ludDF0dHRhM2l1aWZtbmJoZWlwdCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/KcXdzxv4MW2ZfbLual/giphy.webp",
      is_show: true,
    },
    {
      name: "trái tim tình yêu ngại",
      link: "https://media2.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MzEyOGlobHBvd3E3dWd0Z2psY3gxYmd2Nnh5c3N6ajAybzJvNXVoZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/vEcTsPwp2ilQz5bGQ8/giphy.webp",
      is_show: true,
    },
    {
      name: "ngại tình yêu",
      link: "https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Ymh0YTZkNWdkd3Y1ZjBza255aHRrbXRmbnQycXRnbDd5eHp1amw5YyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/g609K30gXO75IGvyRM/giphy.webp",
      is_show: true,
    },
    {
      name: "trái tim tình yêu",
      link: "https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aDhka24wOTRmZ2dycDRsMnA3cDdlMTl4NHQzeHI2YWZtMzJoYmdlciZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/EwQ5BcgtYXCHj51Mu9/giphy.webp",
      is_show: true,
    },
    {
      name: "thích thư giãn",
      link: "https://media1.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dHpycDlsbGI4YmppN2o0d2dhemh6cjV5cDM1ajRpemo1ZTZ4ZGxzNCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/TJltzto9x75VdAHF2s/giphy.webp",
      is_show: true,
    },
  ],
 listEmojis =  [
            { title: '', value: '😀'},
            { title: '', value: '😃'},
            { title: '', value: '😄'},
            { title: '', value: '😁'},
            { title: '', value: '😆'},
            { title: '', value: '😅'},
            { title: '', value: '😂'},
            { title: '', value: '🤣'},
            { title: '', value: '☺️'},
            { title: '', value: '😊'},
            { title: '', value: '😇'},
            { title: '', value: '🙂'},
            { title: '', value: '🙃'},
            { title: '', value: '😉'},
            { title: '', value: '😌'},
            { title: '', value: '😍'},
            { title: '', value: '🥰'},
            { title: '', value: '😘'},
            { title: '', value: '😗'},
            { title: '', value: '😙'},
            { title: '', value: '😚'},
            { title: '', value: '😋'},
            { title: '', value: '😛'},
            { title: '', value: '😝'},
            { title: '', value: '😜'},
            { title: '', value: '🤪'},
            { title: '', value: '🤨'},
            { title: '', value: '🧐'},
            { title: '', value: '🤓'},
            { title: '', value: '😎'},
            { title: '', value: '🤩'},
            { title: '', value: '🥳'},
            { title: '', value: '🙂‍↕️'},
            { title: '', value: '😏'},
            { title: '', value: '😒'},
            { title: '', value: '🙂‍↔️'},
            { title: '', value: '😞'},
            { title: '', value: '😔'},
            { title: '', value: '😟'},
            { title: '', value: '😕'},
            { title: '', value: '🙁'},
            { title: '', value: '☹️'},
            { title: '', value: '😣'},
            { title: '', value: '😖'},
            { title: '', value: '😫'},
            { title: '', value: '😩'},
            { title: '', value: '🥺'},
            { title: '', value: '😢'},
            { title: '', value: '😭'},
            { title: '', value: '😮‍💨'},
            { title: '', value: '😤'},
            { title: '', value: '😠'},
            { title: '', value: '😡'},
            { title: '', value: '🤬'},
            { title: '', value: '🤯'},
            { title: '', value: '😳'},
            { title: '', value: '🥵'},
            { title: '', value: '🥶'},
            { title: '', value: '😱'},
            { title: '', value: '😨'},
            { title: '', value: '😰'},
            { title: '', value: '😥'},
            { title: '', value: '😓'},
            { title: '', value: '🤗'},
            { title: '', value: '🤔'},
            { title: '', value: '🤭'},
            { title: '', value: '🤫'},
            { title: '', value: '🤥'},
            { title: '', value: '😶'},
            { title: '', value: '😶‍🌫️'},
            { title: '', value: '😐'},
            { title: '', value: '😑'},
            { title: '', value: '😬'},
            { title: '', value: '🫨'},
            { title: '', value: '🫠'},
            { title: '', value: '🙄'},
            { title: '', value: '😯'},
            { title: '', value: '😦'},
            { title: '', value: '😧'},
            { title: '', value: '😮'},
            { title: '', value: '😲'},
            { title: '', value: '🥱'},
            { title: '', value: '😴'},
            { title: '', value: '🤤'},
            { title: '', value: '😪'},
            { title: '', value: '😵'},
            { title: '', value: '😵‍💫'},
            { title: '', value: '🤐'},
            { title: '', value: '🥴'},
            { title: '', value: '🤢'},
            { title: '', value: '🤮'},
            { title: '', value: '🤧'},
            { title: '', value: '😷'},
            { title: '', value: '🤒'},
            { title: '', value: '🤕'},
            { title: '', value: '🤑'},
            { title: '', value: '🤠'},
            { title: '', value: '😈'},
            { title: '', value: '👿'},
            { title: '', value: '👹'},
            { title: '', value: '👺'},
            { title: '', value: '🤡'},
            { title: '', value: '💩'},
            { title: '', value: '👻'},
            { title: '', value: '💀'},
            { title: '', value: '☠️'},
            { title: '', value: '👽'},
            { title: '', value: '👾'},
            { title: '', value: '🤖'},
            { title: '', value: '🎃'},
            { title: '', value: '😺'},
            { title: '', value: '😸'},
            { title: '', value: '😹'},
            { title: '', value: '😻'},
            { title: '', value: '😼'},
            { title: '', value: '😽'},
            { title: '', value: '🙀'},
            { title: '', value: '😿'},
            { title: '', value: '😾'}
        ],
      listUsers: [
        {
          fullname: "Bà xã nhỏ",
          avatar:
            "https://play-lh.googleusercontent.com/K7STyDQJpIF-5YON7Df-xZRfYEmr7zZoo0Ui-VF3_EkZq2Q_70G1fW20w0fb4-H86Ns",
          introduce: "Vì thương mà đến",
          gender: "female",
          status: true,
          birthday: "2000-01-01",
          number_phone: "0123456789",
          listMessage: [
                {
                    type: "me",
                    message: "Xin chào",
                    icon: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmgwNjNhMThhbW8wMDh3dW9hZDkzZjBwaWt5aTRhbnhzazc1dG95diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dsPBfiEEozyXUXShhB/giphy.gif",
                    time: ""
                },
                {
                    type: "Thanh",
                    messages: [
                        {
                            message: "",
                            icon: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmgwNjNhMThhbW8wMDh3dW9hZDkzZjBwaWt5aTRhbnhzazc1dG95diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dsPBfiEEozyXUXShhB/giphy.gif",
                            time: "11:26:00 12/08/2025"
                        },{
                            message: "Chào anh ạ",
                            icon: "",
                            time: "23:25:00 17/08/2025"
                        },
                        {
                            message: "Anh đang làm gì vậy?",
                            icon: "",
                            time: "23:32:00 21/08/2025"
                        }
                    ]
                },
                {
                    type: "me",
                    message: "Đang nhắn tin cho em nè",
                    icon: "",
                    time: ""
                },
                {
                    type: "Thanh",
                    messages: [
                        {
                            message: "Vâng ạ",
                            icon: "",
                            time: "11:26 12/08/2025"
                        },{
                            message: "Nay làm việc như nào",
                            icon: "",
                            time: "21:01:00 22/08/2025"
                        }
                    ]
                },
          ],
        },
        {
          fullname: "Bạn gái 1",
          avatar: "https://picsum.photos/seed/picsum/200/300",
          introduce: "Vì thương mà đến",
          gender: "female",
          status: true,
          birthday: "2000-01-01",
          number_phone: "0123456789",
          listContents: [],
        },
        {
          fullname: "Bạn gái 2",
          avatar: "https://picsum.photos/200/300",
          introduce: "Vì thương mà đến",
          gender: "female",
          status: false,
          birthday: "2000-01-01",
          number_phone: "0123456789",
          listContents: [],
        },
      ],
      myUser: {
        fullname: "Nguyễn Thành Huy",
        avatar:
          "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/469530792_3499704730333197_6202666659628314099_n.jpg?stp=c12.0.558.562a_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=96TSigzQTiYQ7kNvwH1_iy3&_nc_oc=AdknzprE48oWynTfeRH_1vV1ELsOfewXxvg4MZQ61SmI0fYhjzqWynvdwXEyIpSVwojsacq21gqbcLUV8o7iJxpK&_nc_zt=24&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=vX5HD1B11IGHF1k1qt64Uw&oh=00_AfO6De6EiiwzRl23UfSSIIfT319gsGIDY68iyTJD8IRuGQ&oe=6862EB65",
        introduce: "Vì thương mà đến",
        gender: "female",
        status: "online",
        birthday: "2000-01-01",
        number_phone: "0123456789",
      }
      ,
      n_rand: -1
    }
// Reducer mẫu
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 }
    case 'SEND_MESSAGE': 
      let { user_index, message, icon}  = action.payload;
      let { listUsers, n_rand } = state;
      // console.log(listUsers[user_index].listMessage.length)
      listUsers[user_index].listMessage.push({
          type: "me",
          message: message ?? "",
          icon: icon ?? "",
          time: getCurrentTime()
      })
      listUsers[user_index].listMessage.push({
                type: "!me",
                messages: [
                    {
                        message: "Vâng ạ",
                        icon: "",
                        time: getCurrentTime()
                    }
                ]
            })
      n_rand = Math.random();
      return {...state,listUsers, n_rand}
      
    default: return state
  }
}
function getCurrentTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0'); // thêm giây
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = now.getFullYear();

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
}





const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  
)
