import express, {Express} from 'express';


const app:Express = express()
app.use(express.json());

const PORT = process.env.PORT || 3000;




 app.listen(PORT, () => {
    console.info(`Server is still alive...`)
 })