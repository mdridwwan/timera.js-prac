let istatus = document.querySelector("h5");
let addFriends = document.querySelector("#add");
let removeFriends = document.querySelector("#remove");
let istatus2 = document.querySelector("#istatus");
let btn = document.querySelector("#btn");

let check = 0;

addFriends.addEventListener("click", function(){
    istatus.innerHTML= "Friends";
    istatus.style.color = "green";
    addFriends.innerHTML = "Friend";
})

removeFriends.addEventListener("click", function(){
    istatus.innerHTML= "Stranger";
    istatus.style.color = "red";
    addFriends.innerHTML = "Add Friend";
})

btn.addEventListener("click", function (){
    if(check == 0){
        istatus2.innerHTML= "Friends";
        istatus2.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style = "background-color: #dadada; color: black;";
        check = 1;
        console.log(check)
    }
    else{
        istatus2.innerHTML= "Stranger";
        istatus2.style.color = "red";
        btn.innerHTML = "Add Friend";   
        btn.style = "background-color: #cadetblue; color: #fff;"
        check = 0;     
        console.log(check)
    }
})