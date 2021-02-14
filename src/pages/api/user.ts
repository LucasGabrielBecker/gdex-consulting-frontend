import { NowRequest, NowResponse } from '@vercel/node'

export default function handler(request: NowRequest, response: NowResponse) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ name: 'John Doe' })
  }