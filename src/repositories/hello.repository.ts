import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SqlliteDataSource} from '../datasources';
import {Hello, HelloRelations} from '../models';

export class HelloRepository extends DefaultCrudRepository<
  Hello,
  typeof Hello.prototype.id,
  HelloRelations
> {
  constructor(
    @inject('datasources.sqllite') dataSource: SqlliteDataSource,
  ) {
    super(Hello, dataSource);
  }
}
