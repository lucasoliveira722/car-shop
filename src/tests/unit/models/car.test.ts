import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Cars'
import { Model } from 'mongoose';
import {
  carMock,
  carMockWithId,
} from '../../mocks/carMocks';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('create new car', () => {
    it('created sccessfully', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId)
    })
  })
})