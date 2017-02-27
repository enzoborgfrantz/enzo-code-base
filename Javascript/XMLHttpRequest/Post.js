const url = "http://httpbin.org/post";
const data = {
  enzo:{
    height: '1.7 meters',
    age: '23',
    iq: '1000',
  }
}

export const callback(result) => {
  console.log(result);
}

export const post = (url, data, callback) => {
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
          callback(JSON.parse(request.responseText));
        }
    }
    request.send(JSON.stringify(data));
}

post(url, data, callback);
