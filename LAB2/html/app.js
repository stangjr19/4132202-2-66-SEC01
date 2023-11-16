var num = 10;
    let name = 20;
    age = 20;

    fruit = ["apple","CR7","tangmo"];
    ojb = {name:"Pattawee", age:19, tel: "123-434" };

    data = { adress: ["69", "Jira", "Buriram", 31000], name: "stang" };

    console.log(fruit[1]);
    console.log(ojb.tel);
    console.log(data.adress[2]);

    document.getElementById("msg").innerHTML = data.adress[2];

    let longTxt = data.name + " : " + fruit[0];

    longTxt = `${data.name} :
              ${fruit[1]}`;
   
    $(function(){
        $("#msg").html(longTxt);
    }); //jQuery ready
