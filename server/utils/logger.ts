export default function (req, res, next) {
    const {method, originalUrl, rawHeaders} = req
    if(method === 'DELETE') {
        console.log("\x1b[31m", `http://${rawHeaders[1]} ${method} ${originalUrl}`)
    } else {
        console.log("\x1b[33m",`http://${rawHeaders[1]} ${method} ${originalUrl}`)
    }
    next()
}