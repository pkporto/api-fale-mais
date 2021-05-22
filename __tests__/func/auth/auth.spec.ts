import { User } from "@entities/User";
import FakeUserRepository from '@repositories/auth/fake/FakeUserRepository';
import SignUpUseCase from '@useCases/auth/signup/SignUpUseCase';

describe('Authentication', ()=>{
    it('should create a new user', async () =>{
        const fakeUserRepository = new FakeUserRepository();
    });

    
});