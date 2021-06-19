import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io',
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const api = `${this.apiUrl}/admin/signin`;
      axios.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            // 寫入 cookie token
            // expires 設置有效時間
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
            window.location = 'admin.html';
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
}).mount('#app');



// const url = 'https://vue3-course-api.hexschool.io';

// const usernameInput = document.querySelector('#username');
// const passwordInput = document.querySelector('#password');
// const loginBtn = document.querySelector('.js-btn');

// loginBtn.addEventListener('click', login);
// function login() {
//   const username = usernameInput.value;
//   const password = passwordInput.value;
//   const loginData = {
//     username,
//     password,
//   };
//   axios.post(`${url}/admin/signin`, loginData) //發出請求
//     .then((res) => {
//       console.log(res);
//       if (res.data.success) {
//         const { token, expired } = res.data;
//         // 寫入 cookie token
//           // expires 設置有效時間
//         document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
//         window.location = 'admin.html';
//       }else {
//         alert("登入未成功，請輸入正確帳號密碼");
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// }



















// const url = 'https://vue3-course-api.hexschool.io';
// const path = 'easytoget';

// const usernameInput = document.querySelector('#username');
// const passwordInput = document.querySelector('#password');
// const loginBtn = document.querySelector('.js-btn');

// loginBtn.addEventListener('click', login);

// function login() {
//   const username = usernameInput.value;
//   const password = passwordInput.value;
//   const loginData = {
//     username,
//     password
//   };
//   axios.post(`${url}/admin/signin`, loginData) //發出請求
//     .then((res) => {
//       console.log(res);
//       if (res.data.success) {
//         // const token = res.data.token;
//         // const expired = res.data.expired;
//         const { token, expired } = res.data;
//         document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
//       }
//     });

// }

// const app = {
//   data: {

//   },
//   init() {
//     const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//     axios.defaults.headers.common['Authorization'] = token;
//     // axios.post(`${url}/api/user/check`)
//     //   .then(res => {
//     //     console.log(res);
//     //   })
//   }
// }
// app.init();