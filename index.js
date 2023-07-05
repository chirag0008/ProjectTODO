var j=1;


var k = 1;   // box

function add(){
    
    var heading=String(prompt("ENTER THE HEADING"));
    var noofitems=Number(prompt("ENTER NUMBER OF ITEMS"));
    var arr1=new Array();
    
    for(var i=0;i<noofitems;i++){
        arr1[i]=prompt("Enter "+(i+1)+" item");
    }

    var box1=document.getElementById('boxdiv');
    var box2=document.createElement("div");

    box2.id=k;
    k++;


    box2.className="boxx auto";
    
    box2.innerHTML += `<h3 onclick  = "EditBox(${box2.id})" style="font-size:25px">${heading}</h3>`;



    box2.innerHTML += `<button style="margin-left:20px ; background-color:lightyellow ; font-size:15px ; font-weight:bold ; cursor:pointer ; border-radius:10px " onclick=removeBox(${box2.id}) >Remove</button> <hr>`;


    for(var i=0;i<noofitems;i++){

        if(arr1[i]!=""){

                box2.innerHTML+=`<h4><input class="ab1" type="checkbox" id="id${j}" onclick="checkl( id${j} , label${j} )">
                <label class="ab2" for="id${j}" id="label${j}">${arr1[i]}</label></h4>`;

            j++;

        

                    
    }
            if(heading!==" " && noofitems!=""){
                box1.appendChild(box2); 
            }
    }

    console.log(box2)

}



/*function EditBox(bid) {

    var box = bid
    
    var item1 = Number(prompt("Enter Number of Tasks (Enter Only Number)"));

        var arr1 = new Array();
    
        for (var i = 0; i < item1; i++) {
            arr1[i] = prompt("ENTER " + (i + 1) + " ELEMENT");
        }
    
        for (var i = 0; i < item1; i++) {

            if (arr1[i] != "") {

                box.innerHTML+=
                
                    `<h4>   
                        <input class="ab1" type="checkbox" id="id${j}" onclick="checkl( id${j} , label${j} )">
                        <label class="ab2" for="id${j}" id="label${j}">${arr1[i]}</label>
                        
                    </h4>`;

                    j++;   

            }

        }

    
}*/

    
    
    

function removeBox(boxid){

    var BoxId = boxid;
    console.log(BoxId);


    var x=document.getElementById(BoxId)
    x.remove();

}


function checkl(idd, labell) {
    var checkb = idd;
    var label = labell;
    
    if (checkb.checked == true) {
        label.style.textDecoration = "line-through";
        label.style.color = "#C2C2C2";
    } else {
        label.style.textDecoration = "none";
        label.style.color = "#424242";
    }
}


