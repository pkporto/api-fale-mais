import { User } from "@entities/User";
import FakeUserRepository from '@repositories/auth/fake/FakeUserRepository';
import SignUpUseCase from '@useCases/auth/signup/SignUpUseCase';
import SignInUseCase from '@useCases/auth/signin/SignInUseCase';

let fakeUserRepository: FakeUserRepository;
let signUp: SignUpUseCase;
let signIn: SignInUseCase;
describe('Authentication', ()=>{
    beforeEach(() => {
        fakeUserRepository = new FakeUserRepository();
        signUp = new SignUpUseCase(fakeUserRepository);
      });

    it('should create a new user', async () =>{
       
        const user = await signUp.execute({
            name:'Patrick Porto',
            email: 'patrick.porto',
            password: '21212323'
        });

        expect(user).toHaveProperty('id');

    });

    it('should login, async', async () =>{
       
        const user1 = await signIn.execute({
            email: 'patrick.porto',
            password: '21212323'
        });

        expect(user1);

    });



});