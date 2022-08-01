import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response, NextFunction } from 'express';
import { carMock, carMockWithId } from '../../mocks/carMocks';
import CarController from '../../../controllers/Car';
import CarService from '../../../services/Car';
import Car from '../../../models/Cars';

describe('Car Controller', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  })

  describe('Create new car', () => {
    it('Sucesso', async () => {
      req.body = carMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    })
  })
})