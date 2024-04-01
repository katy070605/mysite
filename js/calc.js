let st1Input;
let st2Input;
let calcButton;
let testButton;

//#region Events
window.onload = function(){
    st1Input = document.querySelector("#st1");
    st2Input = document.querySelector("#st2");
    calcButton = document.querySelector("#button");
    testButton = document.querySelector("#testButton");

    calcButton.addEventListener("click", button_onClick);
    testButton.addEventListener("click", function(){
        document.location.href = "../test.html";
    });
};

function button_onClick(){
    care(st1Input.value, st2Input.value, "alert");
}
//#endregion

//#region Logic
function care(a, h, mode){
    if(a != null && a > 0 && h != null && h > 0){
        let s = (a*h) / 2;

        switch(mode){
            case "alert":
                alert("Площа прямокутного трикутника дорівнює " + s);
            break;
            case "write":
                document.write("Площа прямокутного трикутника дорівнює " + s);
            break;
        }

        return s;
    }
    else{
        alert("Поля висоти та основи не мають бути порожніми.");
        return null;
    }
}
//#endregion