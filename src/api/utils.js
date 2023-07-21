const apikey = import.meta.env.VITE_REACT_APIKEY
export function getHttp(url){
  return fetch(
    url,
    { 
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
           apikey,
          },
    }
  )
  .then((response) => response.json())
}

