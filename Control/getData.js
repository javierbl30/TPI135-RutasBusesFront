class GetDatos {
    
    /** Recibe una url y devuelve un json
     * @param {*} url direecion de la api
     */
    async getDatos(url) {
        console.log('URL: '+ url)
        let data = await (await(fetch(url)
        .then(respuesta => {
            return respuesta.json()
            })
        .catch(error => {
            console.log('Hubo un error: ' + error)
            })
        ))
        return data;
}

//Recibe un json y una url para devolver un status
/* async postDatos(datos, url){
    let estado = await (await(fetch(url,{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    }).then(respuesta =>{
        return respuesta.status
    }).catch(error => {
        console.log('Hubo un error: ' + error)
    })
))
return estado;
}

async putDatos(datos, url){
    let estado = await (await(fetch(url,{
        method: 'put',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    }).then(respuesta => {
        return respuesta.status
    }).catch(error => {
        console.log('Hubo un error: ' + error)
    })
))
return estado;
}

//recibe url y devuelve un status
async deleteDatos(url){
    let estado = await (await(fetch(url,{
        method: 'delete',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(respuesta => {
        return respuesta.status
    }).catch(error => {
        console.log('Hubo un error: ' + error)
    })
))
return estado;
  } */
}
export default new GetDatos;