import { Request } from 'express'
import { SESSION_NAME } from './config'

export const isLoggedIn = (req: Request) => !!req.session.cookie.domain

export const logIn = (req: Request , userId: string) => {
    //console.log(userId)
    //Store.set(sid)
    //.session.views
    req.session!.userId = userId

    req.session!.createdAt = Date.now()
}

export const logOut = (req: Request, res: Response) => 
    new Promise((resolve, reject) => {
        req.session!.destroy((err: Error) =>{
            if (err) reject(err)

            res.clearCookie(SESSION_NAME)

            resolve()
        })
    })