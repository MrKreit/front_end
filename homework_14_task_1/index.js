function getStudent(name, age){
return new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({name, age})}, 4000)
    
})
}
const student = getStudent('Anri', 32);
student.then((data)=>{
    console.log(`Name: ${data.name}`);
});