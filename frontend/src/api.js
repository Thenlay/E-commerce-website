// import { apiUrl } from "../config.js"
 const apiUrl = 'http://localhost:5001'
console.log(apiUrl);
export const getProduct = async (id) =>{
    try{
      const response = await fetch(`${apiUrl}/api/products/${id}`,{
        // url: `${apiUrl}/api/products/${id}`,
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        },
      });
      if(!response.ok){
        throw new Error(`${response.status}`)
      }
      return response.json();
    } catch(err){
        console.log(err);
        return {error: err.message};

    }
};
export const signin = async({email, password}) =>{
  try{
    const response = await fetch({
      url: `${apiUrl}/api/users/signin`,
      method: 'POST',
      header:{
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
      },
    });
    if(response.statusText !== 'OK'){
      throw new Error(response.data.message);
    }
    return response.data;
  } catch(err){
    console.log(err);
    return{ error: err.response.data.message || err.message};
  }
}