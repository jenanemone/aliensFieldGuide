document.querySelector('button').addEventListener('click',apiRequest)



async function apiRequest(){
    const alienName = document.querySelector('input').value;
    try{
        const response = await fetch(`https://jennies-alien-field-guide.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data);
        document.getElementById('speciesOutput').value = data[alienName]
    } 
    catch(error) {
        console.log(error)
    }
}