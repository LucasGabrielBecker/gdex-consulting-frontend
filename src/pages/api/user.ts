import { NowRequest, NowResponse } from '@vercel/node'

export default function handler(request: NowRequest, response: NowResponse) {
    request.statusCode = 200
    response.setHeader("content-type", "application/json")
    response.json({name:"John Doe"})
    
  }