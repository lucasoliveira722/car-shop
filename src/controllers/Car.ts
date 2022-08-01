import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request & { body: ICar }, res: Response<ICar>) {
    const createdCar = await this._service.create(req.body);
    return res.status(201).json(createdCar);
  }

  public async find(_req: Request, res: Response) {
    const carList = await this._service.read();
    return res.status(200).json(carList);
  }

  public async readOne(req: Request, res: Response) {
    const car = await this._service.readOne(req.params.id);
    return res.status(200).json(car);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const updatedCar = await this._service.update(req.params.id, req.body);
    return res.status(200).json(updatedCar);
  }
}