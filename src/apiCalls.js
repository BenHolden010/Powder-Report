
export function getReportByCity(location){
  return fetch(`https://api.worldweatheronline.com/premium/v1/ski.ashx?key=b5a5dbe0295146dfa83163732231809&q=${location}&format=json`)
           .then(res=>res.json())

}