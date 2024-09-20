import { IDBConnector } from '../interfaces/connectors/IDBConnector.ts';
import { IRepository } from '../interfaces/repositories/IRepository.ts';
import { ItemEntity, itemEntitySchema } from '../entities/ItemEntity.ts';
import { IMongoDBConnection } from '../connectors/mongo/index.ts';
import ItemSchema from '../schemas/ItemSchema.ts';

export class ItemRepository implements IRepository<ItemEntity> {
  constructor(private readonly dbConnector: IDBConnector<IMongoDBConnection>) {
    this.dbConnector.connection.registerSchema('ItemSchema', ItemSchema);
  }

  async create(data: ItemEntity): Promise<void> {
    const model = this.dbConnector.connection.getModel('ItemSchema');

    await model.create([data]);

    return;
  }

  async list(): Promise<ItemEntity[]> {
    const model = this.dbConnector.connection.getModel('ItemSchema');

    const items = await model.find();

    return items.map(item => itemEntitySchema.parse(item));
  }

  async getOne(id: string): Promise<ItemEntity | null> {
    const model = this.dbConnector.connection.getModel('ItemSchema');

    const item = await model.findOne({
      _id: id,
    });

    if (!item) {
      return null;
    }

    return itemEntitySchema.parse(item);
  }
}
