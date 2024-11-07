

export const POST = async (URL_API, params) => {
    try{
        const response = await fetch(URL_API, {
            method: 'POST',
            ...params
           
        })
        return response.json()
    }
    catch(error){
        
        throw error
    }
    
}

export const GET = async (URL_API, params) => {
	try{
		const response = await fetch(URL_API, {
			method: 'GET',
			...params
		})
		return response.json()
	}
	catch(error){
		console.log(error)
		throw error
		
	}
}

const unnauthenticatHeaders = new Headers ()
unnauthenticatHeaders.set('Content-Type', 'application/json')
unnauthenticatHeaders.set('x-api-key', '8e849ec1-2977-404c-88c0-c8d2246d498f')
unnauthenticatHeaders.set('Authorization', 'Bearer' + sessionStorage.getItem('access_token'))

const authenticatedHeaders = new Headers ()
authenticatedHeaders.set('Content-Type', 'application/json')
authenticatedHeaders.set('x-api-key', '8e849ec1-2977-404c-88c0-c8d2246d498f')
authenticatedHeaders.set('Authorization', 'Bearer' + sessionStorage.getItem('access_token'))

export { authenticatedHeaders, unnauthenticatHeaders }