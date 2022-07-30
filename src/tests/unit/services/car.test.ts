import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Cars';
import CarService from '../../../services/Car';
import { carMock, carMockWithId } from '../../mocks/carMocks';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create new Car', () => {
    it('Creates Successfully', async () => {
      const newCar = await carService.create(carMock);

      expect(newCar).to.be.deep.equal(carMockWithId);
    })
  })
})