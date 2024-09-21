import { IRepository } from '../interfaces/repositories/IRepository.ts';
import { CreateItemEntity, ItemEntity } from '../entities/ItemEntity.ts';

export class ItemsService {
  constructor(private readonly itemsRepository: IRepository<ItemEntity>) {}

  async create(data: Partial<CreateItemEntity>): Promise<void> {
    await this.itemsRepository.create(data);

    return;
  }

  async get(id: string): Promise<ItemEntity | null> {
    return this.itemsRepository.getOne(id);
  }

  async list(): Promise<ItemEntity[]> {
    return this.itemsRepository.list();
  }
}
