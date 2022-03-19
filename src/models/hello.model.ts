import {Entity, model, property} from '@loopback/repository';

@model()
export class Hello extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  msg: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  sender: string;


  constructor(data?: Partial<Hello>) {
    super(data);
  }
}

export interface HelloRelations {
  // describe navigational properties here
}

export type HelloWithRelations = Hello & HelloRelations;
