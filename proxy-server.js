import express from 'express'; //import express
import { createProxyMiddleware } from 'http-proxy-middleware'; //import middleware

const app = express() //create express application
const port = 4000; //proxy server port

//defining proxy route for API
app.use('/api', createProxyMiddleware({ //use middleware for requests that match /api route
    target: 'http://api.mediastack.com', //target url
    changeOriginL: true, //changes the origin of the host header to match the target url
    pathRewrite: {
        '^/api': '/v1/news' //allows to rewrite the URL path. Rewrites request from /api to /v1/news
    }
}))

app.listen(port, ()=> { //starts the Express server and listens to it
    console.log(`Proxy server running from port ${port}`)
})