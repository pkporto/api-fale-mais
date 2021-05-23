import { EntityRepository, getRepository, Repository } from "typeorm";
import  Plan  from "@entities/Plan";
import IPlanRepository  from '@repositories/plan/models/IPlanRepository';


@EntityRepository(Plan)
export class PlanRepository implements IPlanRepository {
    async get(name: string): Promise<Plan> {
       const plan =  await getRepository(Plan).findOne({
            where:
            {
                name
            }
        });
        return plan!;
    }
   

}
