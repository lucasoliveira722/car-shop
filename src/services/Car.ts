import IService from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
// import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  constructor(private _model: IModel<ICar>) { }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._model.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this._model.read();
  }
}

export default CarService;