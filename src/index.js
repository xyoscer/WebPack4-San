/**
 * Created by XiYin on 03/05/2018.
 */
let  MyApp = san.defineComponent({
    template: '<p>{{name}}!</p>',

    initData: function () {
        return {
            name: ' XiYin Hello World Parcel环境搭建111'
        };
    }
});


let  myApp = new MyApp();
myApp.attach(document.body);