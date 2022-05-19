
function encoding(){
    const get = document.getElementById('encodingValue').value; 
    document.getElementById('encodingResult').innerHTML = btoa(get);
}

function Copy(){
    var copyText = document.getElementById("fileout");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value)
}
