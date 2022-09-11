import express from "express";
import {ICnsApi} from '@bictory/cns-resolver';

function generateRouter(cnsApi: ICnsApi): express.Router {
    const router = express.Router();

    router
        .route('/resolve')
        .get(async (req: express.Request<undefined, undefined, undefined, { domain: string, contract_index: number }>, res) => {
            try {
                if (req.query.domain) {
                    const result = await cnsApi.resolve(req.query.domain);
                    res.status(200).send({
                        success: true,
                        data: result
                    })
                } else {
                    res.status(400).send({
                        success: false,
                        message: 'Provide domain in query params!'
                    });
                }
            } catch(e: any) {
                res.status(500).send({
                    success: false,
                    message: e.message
                });
            }

        })



    return router
}

export default generateRouter;