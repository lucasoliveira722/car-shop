import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: "AUDI",
	year: 2001,
	color: "black",
	status: true,
	buyValue: 3000,
	doorsQty: 4,
  seatsQty: 5
};

const carMockWithId: ICar & { _id: string } = {
  "model": "AUDI",
	"year": 2001,
	"color": "black",
	"status": true,
	"buyValue": 3000,
	"doorsQty": 4,
	"seatsQty": 5,
	"_id": "62e4a8436ef30cb3f03989c9",
}

export {
  carMock,
  carMockWithId,
}