export interface IRepository<Entity extends { id: string }> {
  create(data: Partial<Entity>): Promise<void>;
  getOne(data: string): Promise<Entity | null>;
  list(): Promise<Entity[]>;
}
