!function() {
  var view = document.querySelector(".message");
  var model = {
    init: function() {
      var APP_ID = "EbANG4iuAx0hVaLtwgkY1Nx5-gzGzoHsz";
      var APP_KEY = "eCE8fydt4uDoo1Ns0bpVvye2";
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function() {
      //获取数据
      var query = new AV.Query("Message");
      return query.find(); //promise对象
    },
    save: function(name, content) {
      //保存数据
      var Message = AV.Object.extend("Message");
      var message = new Message();
      return message.save({
        //返回一个promise对象
        name: name,
        content: content
      });
    }
  };
  // 我们要做的就是把M V 传给C C要做的就是对M V 进行控制 和操作
  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function(view, model) {
      this.view = view;
      this.model = model;
      this.messageList = view.querySelector("#messageList");
      this.form = view.querySelector("form");
      this.model.init();
      this.loadMessages();
      this.bindEvents();
    },

    loadMessages: function() {
      this.model.fetch().then(messages => {
        let array = messages.map(item => item.attributes);
        array.forEach(item => {
          let li = document.createElement("li");
          // li.innerText = item.content;
          li.innerText = `${item.name}: ${item.content}`;
          // let messageList = document.querySelector("#messageList");
          this.messageList.appendChild(li);
        });
        // 成功获得实例
        // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
      });
    },

    // bindEvents: function() {
    //   var self = this;
    //   self.form.addEventListener("submit", function(e) {
    //     e.preventDefault();
    //     console.log("阻止默认事件");
    //     console.log(self);
    //     self.saveMessage();
    //     // bindEvents里面除了事件 其他的不该放
    //   });
    // },
    bindEvents: function() {
      this.form.addEventListener("submit", e => {
        e.preventDefault();
        console.log(this);        
        this.saveMessage();
      });
    },
    saveMessage: function() {
      let myForm = this.form;
      let content = myForm.querySelector("input[name=content]").value;
      let name = myForm.querySelector("input[name=name]").value;
      this.model.save(name, content).then(function(object) {
        let li = document.createElement("li");
        li.innerText = `${object.attributes.name}:${object.attributes.content}`;
        let messageList = document.querySelector("#messageList");
        messageList.appendChild(li);
        myForm.querySelector("input[name=content]").value = "";
      });
    }
  };
  controller.init(view, model);
}.call();

// var APP_ID = 'EbANG4iuAx0hVaLtwgkY1Nx5-gzGzoHsz';
// var APP_KEY = 'eCE8fydt4uDoo1Ns0bpVvye2';

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });
// console.log('运行到这里没有报错');

// var query = new AV.Query('Message');
// query.find()
//   .then(function (messages) {
//   let array = messages.map((item)=>item.attributes)
//   array.forEach((item)=>{
//     let li = document.createElement('li');
//     // li.innerText = item.content;
//     li.innerText = `${item.name}:${item.content}`
//     let messageList = document.querySelector('#messageList');
//     messageList.append(li);
//   })
//   // 成功获得实例
//   // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
// }, function (error) {
//   // 异常处理
//   alert('提交失败，请改天再试试')
// })
// // .then(()=>{},(error)=>{
// //   console.log(error);
// // });

// // // 批量获取
// // AV.Object.fetchAll(objects).then(function (objects) {
// //   // 成功
// // }, function (error) {
// //   // 异常处理
// // });

// // var query = new AV.Query('Todo');
// // query.find().then(function (todos) {
// //   todos.forEach(function(todo) {
// //     todo.set('status', 1);
// //   });
// //   return AV.Object.saveAll(todos);
// // }).then(function(todos) {
// //   // 更新成功
// // }, function (error) {
// //   // 异常处理
// // });

// let myForm = document.querySelector('#postMessageForm');
// myForm.addEventListener('submit',function(e){
//   e.preventDefault();
//   let content = myForm.querySelector('input[name=content]').value;
//   let name = myForm.querySelector('input[name=name]').value;
//   var Message = AV.Object.extend('Message');
//   var message = new Message();
//   message.save({
//     'name':name,
//     'content':content
//   }).then(function(object){
//     // window.location.reload();
//     let li = document.createElement('li');
//     li.innerText = `${object.attributes.name}:${object.attributes.content}`
//     let messageList = document.querySelector('#messageList');
//     messageList.append(li);
//     myForm.querySelector('input[name=content]').value = '';
//   })
// })

// // 创建TestObject 表
// var xxx = AV.Object.extend('MiyaW');  //表的名字
// // 在表中创建一行数据
// var o = new xxx();
// //  数据内容是：hello world 然后保存
// // 如果保存成功  则运行alert
// o.save({
//   words: 'Miss U!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

// !function() {
//   var model = {
//     // 获取数据

//     init: function() {
//       var APP_ID = "EbANG4iuAx0hVaLtwgkY1Nx5-gzGzoHsz";
//       var APP_KEY = "eCE8fydt4uDoo1Ns0bpVvye2";
//       AV.init({ appId: APP_ID, appKey: APP_KEY });
//     },
//     fetch: function() {
//       var query = new AV.Query("Message");
//       return query.find(); // Promise 对象
//     },
//     // 创建数据
//     save: function(name, content) {
//       var Message = AV.Object.extend("Message");
//       var message = new Message();
//       return message.save({
//         // Promise 对象
//         name: name,
//         content: content
//       });
//     }
//   };

//   var view = document.querySelector("section.message");

//   var controller = {
//     view: null,
//     model: null,
//     messageList: null,
//     init: function(view, model) {
//       this.view = view;
//       this.model = model;

//       this.messageList = view.querySelector("#messageList");
//       this.form = view.querySelector("form");
//       this.model.init();
//       this.loadMessages();
//       this.bindEvents();
//     },
//     loadMessages: function() {
//       this.model.fetch().then(messages => {
//         let array = messages.map(item => item.attributes);
//         array.forEach(item => {
//           let li = document.createElement("li");
//           li.innerText = `${item.name}: ${item.content}`;
//           this.messageList.appendChild(li);
//         });
//       });
//     },
// bindEvents: function() {
//   this.form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     this.saveMessage();
//   });
// },
//     saveMessage: function() {
//       let myForm = this.form;
//       let content = myForm.querySelector("input[name=content]").value;
//       let name = myForm.querySelector("input[name=name]").value;
//       this.model.save(name, content).then(function(object) {
//         let li = document.createElement("li");
//         li.innerText = `${object.attributes.name}: ${
//           object.attributes.content
//         }`;
//         let messageList = document.querySelector("#messageList");
//         messageList.appendChild(li);
//         myForm.querySelector("input[name=content]").value = "";
//         console.log(object);
//       });
//     }
//   };

//   controller.init(view, model);
// }.call();
