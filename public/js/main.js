document.getElementById('getButton').addEventListener('click',apiRequest)



async function apiRequest(){
    const alienName = document.getElementById('alienName').value;
    try{
        const response = await fetch(`https://jennies-alien-field-guide.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data);
        console.log(data.speciesName)
        document.getElementById('speciesOutput').textContent = data.speciesName
    } 
    catch(error) {
        console.log(error)
    }
}