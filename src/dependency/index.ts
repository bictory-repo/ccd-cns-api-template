import {BictoryCnsApi, Environment, ICnsApi} from '@bictory/cns-resolver';

export default function (): { cnsApi: ICnsApi } {
    return {
        cnsApi: new BictoryCnsApi(Environment.TESTNET)
    }
}