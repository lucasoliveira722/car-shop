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
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('create new car', () => {
    it('created sccessfully', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId)
    })
  });

  describe('search car by id', () => {
    it('success', async () => {
      const foundCar = await carModel.readOne('62e4a8436ef30cb3f03989c9');
      expect(foundCar).to.be.deep.equal(carMockWithId);
    });
    it('failure - id not found', async () => {
      try{
        await carModel.readOne('invalidId');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId')
      }
    })
  })
})