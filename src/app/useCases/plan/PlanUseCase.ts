import { getCustomRepository } from 'typeorm';
import { User } from '@entities/User';
import { IUserRepository } from '@repositories/auth/models/IUserRepository';
import ISignUpDTO from './PlanDTO';
import AppError from '@shared/helpers/AppError';
import IPlanDTO from './PlanDTO';

export default class PlanUseCase {
  

  public async execute(data: IPlanDTO): Promise<String> {
    const { origin, destiny, time } = data;
    const list= {
      "prices":[
        {
          "origin": "011",
          "options":[

            {
              "destiny":"016",
              "price":1.9
            },
            {
              "destiny":"017",
              "price":1.7
            },
            {
              "destiny":"018",
              "price":0.9
            },
          ]
        },
        {
          "016":[
            {"011":2.9},
          ]
        },
        {
          "origin": "017",
          "options":[
            {
              "destiny":"011",
              "price":2.7
            },
          ]
        },
        {
          "origin": "018",
          "options":[
            {
              "destiny":"011",
              "price":1.9
            },
          ]
        }
      ]
    }
  
    const plans ={
      "plans":[
        {
          "name": "FaleMais 30",
          "time": 30
        },
        {
          "name": "FaleMais 60",
          "time": 60
        },
        {
          "name": "FaleMais 120",
          "time": 120
        }
      ]
    }

    let callValue: number = 0;



    list['prices'].forEach(element =>{
      if( Number(element.origin) == origin){
          element.options!.forEach(option =>{
              if(option.destiny == destiny){
                  callValue = option.price;
              }
          })
      }
      
   })
  }
}
