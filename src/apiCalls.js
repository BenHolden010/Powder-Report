export function getReportByCity(){
  return fetch('https://api.worldweatheronline.com/premium/v1/ski.ashx?key=b5a5dbe0295146dfa83163732231809&q=breckenridge&format=json')
           .then(res=>res.json())
}