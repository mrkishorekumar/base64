
function encoding(){
    const get = document.getElementById('encodingValue').value; 
    document.getElementById('encodingResult').innerHTML = btoa(get);
}

function Copy1(){
    var copyText = document.getElementById("encodingResult");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value)
}

function Copy(){
    var copyText = document.getElementById("fileout");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value)
}
