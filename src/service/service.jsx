
 
    export const getCity=(data)=>{
        console.log("service",data)
       return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=0d80f5df3e9f0e92ddbec1e7caf19f15`)
    }
    




