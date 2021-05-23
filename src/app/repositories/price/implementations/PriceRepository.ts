import { EntityRepository, getRepository, Repository } from "typeorm";
import  Price  from "@entities/Price";
import IPriceRepository  from '@repositories/price/models/IPriceRepository';


@EntityRepository(Price)
export class PriceRepository implements IPriceRepository {
    async get(origin: string, destiny: string): Promise<Price> {
       const plan =  await getRepository(Price).findOne({
            where:
            {
                origin,
                destiny
            }
        });
        return plan!;
    }
   

}
