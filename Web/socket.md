# vue2.x 使用 socket 数据交互

## 简单封装 socket

```js
//生成唯一标识符
function getUuid {
  let s = [];
  let hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";
  return s.join("");
};

class socketClient {
  wsUrl = "";
  wsAuto = {};
  websocket = null;
  constructor(wsUrl, wsAuto) {
    this.wsUrl = wsUrl;
    this.wsAuto = wsAuto;
  }
  // 初始化socket
  initWebSocket() {
    this.websocket = new WebSocket(this.wsUrl);
    console.log("========= create websocket ===========");
    this.wsOpen().then((res) => {
      console.log("========= onopen websocket ===========", res);
      this.wsSend(this.wsAuto);
      console.log("========= 授权完成 ===========");
    });

    this.websocket.onerror = (evt) => {
      console.log("========= 连接错误 ===========", evt);
    };

    this.websocket.onclose = (evt) => {
      console.log("========= 客户端断开连接 ===========", evt);
    };
  }
  // 打开连接
  wsOpen() {
    if (this.websocket) {
      return new Promise((resolve, reject) => {
        try {
          this.websocket.onopen = (evt) => {
            resolve(evt);
          };
        } catch (err) {
          reject(err);
        }
      });
    }
  }
  // 关闭连接
  wsClose() {
    if (this.websocket) {
      this.websocket.close();
      return new Promise((resolve, reject) => {
        try {
          this.websocket.onclose = (evt) => {
            console.log("========= 客户端断开连接 ===========", evt);
            resolve(evt);
          };
        } catch (err) {
          reject(err);
        }
      });
    }
  }
  // 监听消息
  wsMessage(callback) {
    // 需要监听的消息路径
    if (this.websocket) {
      try {
        this.websocket.onmessage = (evt) => {
          // 判断是否有 data 数据
          if (evt.data) {
            let data = evt.data;
            if (this.isJsonString(data)) {
              callback(JSON.parse(data));
            }
          }
        };
      } catch (err) {
        callback(err);
      }
    }
  }
  // 发送消息
  wsSend(options, isFile = false) {
    if (this.websocket) {
      try {
        if (isFile) {
          let params = { ...options };
          params.RequestId = getUuid();
          this.websocket.send(params);
        } else {
          this.websocket.send(JSON.stringify(options));
        }
      } catch (e) {
        console.log('错误', e)
      }
    }
  }
  // 连接因错误而关闭时触发
  wsOnerror() {
    if (this.websocket) {
      return new Promise((resolve, reject) => {
        try {
          this.websocket.onerror = (evt) => {
            resolve(evt);
          };
        } catch (err) {
          reject(err);
        }
      });
    }
  }
  // 判断是否是json字符串
  isJsonString(str) {
    try {
      if (typeof JSON.parse(str) == "object") {
        return true;
      }
    } catch (e) {
      console.log("isJsonString:错误捕获");
    }
    return false;
  }
}

export { socketClient };
```

## 在 main.js 上引用

```js
// ********** socket **********
import { socketClient } from "./utils/socket";
// 初始化 socket
const ws_wyf_url = "ws://xxx.xxx.xxx.xxx:8080/conn?u=123ad";
const wsAuto = {
  appId: "xxxx",
  appSecret: "xxxxxxx"
};
const wsocket = new socketClient(ws_wyf_url, wsAuto);
wsocket.initWebSocket();
Vue.prototype.$ws = wsocket;
```

## 组件使用

```html
<script>
  created() {
      // 监听消息
      this.$ws.wsMessage((res) => {
          console.log(res)
      });
  },

  // 发送消息
  let parm = {
      name:"asd"
  }
  this.$ws.wsSend(patm);
</script>
```
