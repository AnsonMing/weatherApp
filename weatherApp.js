let mybutton = document.querySelector("#mybutton");



mybutton.addEventListener("click",function(){

    let weather=prompt("what's your favorite type of weather?").toLocaleLowerCase();
    if (weather.replace(" ","")==""||weather==null){
        weather="there";
    }
    alert(`${weather} is your favorite!`)

    let myImage=document.getElementById("myImage");
    if (weather==="sunny"){
        myImage.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimg%2F23512&psig=AOvVaw0El2wdiOyQxH70EYLQ9-K9&ust=1698552434660000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCKi1vIbvl4IDFQAAAAAdAAAAABAD";
    }else if(weather==="rainy"){
        myImage.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pixelsquid.com%2Fpng%2Frain-2240598883908457517&psig=AOvVaw3NWuM8A8668MeW-AbNmsR4&ust=1698552467429000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLCP_JXvl4IDFQAAAAAdAAAAABAD";
    }else{
        myImage.src="https://picsum.photos/601"
    }
})


