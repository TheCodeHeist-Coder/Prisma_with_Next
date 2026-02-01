import express, {Express, Request, Response} from 'express';
import { prisma } from './lib/prisma';


const app:Express = express()
app.use(express.json());

const PORT = process.env.PORT || 3000;



 app.put("/users", async(req: Request, res: Response) => {
const {email, age} = req.body;
    const updatedUser = await prisma.user.update({
        where: {email: email},   // user which belong to this email
        data:{
            age: age     // want to update age
        }
    })

 })


 app.listen(PORT, () => {
    console.info(`Server is still alive...`)
 })