window.addEventListener("load", function(){
    let one = document.querySelector("#one");
    let two = document.querySelector("#two");
    let three = document.querySelector("#three")
    let giftset_one = document.querySelector("#giftset_one");
    let giftset_two = document.querySelector("#giftset_two");
    let giftset_three = document.querySelector("#giftset_three");

    one.addEventListener("click", function(){
        one.classList.toggle("active_toggle");
        two.classList.remove("active_toggle");
        three.classList.remove("active_toggle");
        //
        giftset_one.classList.toggle("active_giftset");
        giftset_two.classList.remove("active_giftset");
        giftset_three.classList.remove("active_giftset");
    })
    two.addEventListener("click", function(){
        one.classList.remove("active_toggle");
        two.classList.toggle("active_toggle");
        three.classList.remove("active_toggle");
        //
        giftset_one.classList.remove("active_giftset");
        giftset_two.classList.toggle("active_giftset");
        giftset_three.classList.remove("active_giftset");
    })
    three.addEventListener("click", function(){
        one.classList.remove("active_toggle");
        two.classList.remove("active_toggle");
        three.classList.toggle("active_toggle");
        //
        giftset_one.classList.remove("active_giftset");
        giftset_two.classList.remove("active_giftset");
        giftset_three.classList.toggle("active_giftset");
    })
})