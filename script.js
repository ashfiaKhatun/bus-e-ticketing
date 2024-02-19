let flag = 0;

/* Calling click event of seat button section */
document.getElementById("seat-list").addEventListener('click', (event)=>{
    /* Checking seat count */
    flag++;

    /* Checking how seats have booked */

    if(flag <= 4){

        /* Adding Background Color */

        const pressedSeat = event.target.innerText;

        const seatId  = document.getElementById(pressedSeat);
    
        seatId.classList.add("bg-[#1DD100]");
        seatId.classList.add("text-white");


        /* Showing how many seats are available*/
        const availableSeats = seatCounter("seat-left");

        let seatLeft = availableSeats-1;

        replaceValue("seat-left", seatLeft)

        /* Showing  how many seats have selected*/
        replaceValue("seat-count", flag);

        /* Showing Selected seat information */
        selectedSeatInfo("show-info", pressedSeat);

        /* showing the total price */
        let totalPrice = 550*flag;

        document.getElementById("total-price").innerText = totalPrice;
        let grandTotal = replaceValue('grand-total', totalPrice);

        
       document.getElementById("coupon-apply").addEventListener('click', ()=>{
        const couponInput = document.getElementById("coupon-field").value;

        const new15 = getTextElement("new15");
        const couple20 = getTextElement("couple20");

        if(new15 === couponInput){

            console.log("object");
            grandTotal = totalPrice - (totalPrice*0.15);
            replaceValue("grand-total", grandTotal);
        }

        else if(couple20 === couponInput){
            grandTotal = totalPrice - (totalPrice*0.2);
            replaceValue("grand-total", grandTotal);

        } 
        else{
            grandTotal = totalPrice;
        }  


        const couponSection = document.getElementById("coupon-section");

        couponSection.classList.add("hidden");
        
   })

    }
   

})




/* Calling an element and replacing with new value */

function replaceValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



function getTextElement(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;

    return text; 
}


/* Calling the seat count and converting it to integer */

function seatCounter(elementId){
    const element = document.getElementById(elementId);
    const seatCount = parseInt(element.innerText);

    return seatCount;
}

// flex justify-between text-center mt-2 ml-2


/* Selected Seat Information */

function selectedSeatInfo(elementId, value){
    const selectedTicket = document.getElementById(elementId);

    const div = document.createElement("div");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p.innerText = value;
    p2.innerText = "Economy";
    p3.innerText = "550";

    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("text-center");
    div.classList.add("mt-2");
    div.classList.add("ml-2");

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedTicket.appendChild(div);

}



    document.getElementById("next-page-btn").addEventListener("click", ()=>{
       document.getElementById("header-sect").classList.add("hidden");
       document.getElementById("main-sect").classList.add("hidden");
       document.getElementById("footer-sect").classList.add("hidden");

       document.getElementById("hidden-sect").classList.remove("hidden");
    })

    document.getElementById("cont-btn").addEventListener("click", ()=>{
       document.getElementById("header-sect").classList.remove("hidden");
       document.getElementById("main-sect").classList.remove("hidden");
       document.getElementById("footer-sect").classList.remove("hidden");

       document.getElementById("hidden-sect").classList.add("hidden");
    })