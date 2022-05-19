
function encoding(){
    const get = document.getElementById('encodingValue').value; 
    document.getElementById('encodingResult').innerHTML = btoa(get);
}