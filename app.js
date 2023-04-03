const d=new Date();
document.getElementById("ddate").innerHTML=d.toDateString();

var inptxt=document.getElementById("inputbar");
var plusbtn=document.getElementById("plusbtn");
var tasklist=document.getElementById("tasklist");

function add() {
    if(inptxt.value==""){ return;}
    
    var taskbar=document.createElement("div");
    var chkbox=document.createElement("i");
    var task=document.createElement("p");
    var delbtn=document.createElement("i");

    taskbar.setAttribute("class","taskbar");
    chkbox.setAttribute("class","fa-2x fa-regular fa-square");
    chkbox.setAttribute("id","chkbtn");
    task.setAttribute("class","task");
    delbtn.setAttribute("class","fa-2x fa fa-trash");
    delbtn.setAttribute("id","delbtn");
    task.innerText=inptxt.value;

    tasklist.appendChild(taskbar);
    taskbar.appendChild(chkbox);
    taskbar.appendChild(task);
    taskbar.appendChild(delbtn);

    chkbox.addEventListener("click",e => {
            if(chkbox.classList.contains("fa-square")) {
                chkbox.classList.remove("fa-regular","fa-square");
                chkbox.classList.add("fa-solid","fa-square-check");
            } else {
                chkbox.classList.remove("fa-solid","fa-square-check");
                chkbox.classList.add("fa-regular","fa-square");
            }
        }
    )
    
    delbtn.addEventListener("click",e => {
            taskbar.remove();
        }
    )
    inptxt.value="";
}
//for adding thru keyboard
function anonymous (e) {
    if(e.keyCode===13) { // 13-> enter key
        add();
    }
}
inptxt.addEventListener("keydown",anonymous);
//for adding thru button
plusbtn.addEventListener("click",add);


