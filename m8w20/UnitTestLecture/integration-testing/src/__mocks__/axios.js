const data = [
    {
        id: 1,
        name: 'Bryan',
        points: 11,
    }
  ]

export default {
    get: jest.fn((url)=> {
        if(url === '/high-scores'){
            return Promise.resolve({
                status:200,
                statusText: "OK",
                data: data
            })
        }
    })
}