import { app as server, deps } from './server';


export async function start(): Promise<void> {
    await deps.cnsApi.connect()
    server.listen(3000, () => {
        console.log('Application is started!!!')
    })
}