export class GuiController{

    #btnToggleDrawer;
    #menuDrawer;
    constructor(){
        document.getElementById("buttonToggle").addEventListener(
            "click", ()=>{
            
                if(document.getElementById("menuDrawer").style.display=="none"){
                    document.getElementById("menuDrawer").style.display ="block";

                }
                else{
                    document.getElementById("menuDrawer").style.display = "none";
                }

        })
    }

    
}


