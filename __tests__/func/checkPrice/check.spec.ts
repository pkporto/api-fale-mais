import 'reflect-metadata';
import { User } from "@entities/User";
import FakeUserRepository from '@repositories/auth/fake/FakeUserRepository';
import SignUpUseCase from '@useCases/auth/signup/SignUpUseCase';
import SignInUseCase from '@useCases/auth/signin/SignInUseCase';
import PriceUseCase from "@useCases/price/PriceUseCase";
import { PlanRepository } from "@repositories/plan/implementations/PlanRepository";
import { PriceRepository } from "@repositories/price/implementations/PriceRepository";

let planRepository: PlanRepository;
let priceRepository: PriceRepository;
let price: PriceUseCase;

describe('CheckPrice', ()=>{
    beforeEach(() => {
        planRepository = new PlanRepository();
        price = new PriceUseCase(planRepository,
            priceRepository);
      });

    it('should return a string match', async () =>{
       
        const result = await price.execute('018', '011', 200, 'Fale Mais 60');

        expect(result).toMatch("O valor da ligação sem plano é 380, usando o plano R$Fale Mais 60 o valor é de R$292.60");

    });

    // it('should login, async', async () =>{
       
    //     const user1 = await signIn.execute({
    //         email: 'patrick.porto',
    //         password: '21212323'
    //     });

    //     expect(user1);

    // });



});