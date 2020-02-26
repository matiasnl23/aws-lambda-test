const handler = async () => {

    const response = {
        statusCode: 200,
        body: JSON.stringify('¡Hola desde Lambda!')
    }

    return response;
}

export { handler };