import { expect } from 'chai'
import {ChainInteractor} from "../src/core/smartcontract/chain-interactor";
import BictoryCnsSerialization from "../src/service/bictoryCnsSerialization";
import {SerializationCore} from "../src/core/smartcontract/serialization";
import Smartcontract from "../src/service/smartcontract";

const INDEX = 439;
const SUB_INDEX = 0;

let smartContract: Smartcontract
const chain = new ChainInteractor(
    '18.132.59.67',
    10001
)


before(async () => {

    smartContract = new Smartcontract(
        new BictoryCnsSerialization(
            new SerializationCore.NumberSerializer(),
            new SerializationCore.AddressSerializer(),
            new SerializationCore.StringSerializer(),
        ),
        chain
    )
    await chain.connect()
})

describe('test main methods of the SmartContracts', () => {
    // it('Register Method', async () => {
        // const bytes = mainSerialization.register(
        //     'tarun.ccd',
        //     '4MyVHYbRkAU6fqQsoSDzni6mrVz1KEvhDJoMVmDmrCgPBD8b7S',
        //     1
        // )
        // const status = await chain.client?.getConsensusStatus();
        // const result = await chain.makeTransaction(
        //     Buffer.from(bytes),
        //     INDEX,
        //     'BictoryCns.register',
        //     '4MyVHYbRkAU6fqQsoSDzni6mrVz1KEvhDJoMVmDmrCgPBD8b7S',
        //     'b6f194e563d9f2decddacf6d691c4dbee96f638ab85414d30562cb33b6c94f96',
        //     5*1000000,
        // )

        // expect(bytes).length.gte(0);
    // })

    it('Resolve Method', async () => {
        const result = await smartContract.resolve('anfid1.ccd');

        expect(result).not.to.be.empty;
    })

})