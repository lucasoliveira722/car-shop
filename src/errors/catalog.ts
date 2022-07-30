export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  InvalidDataCar = 'InvalidDataCar',
}

type ErrorResponseObject = { 
  message: string;
  httpStatus: number
};
  
export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
  
};
  
export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Entity not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    httpStatus: 400,
  },
  InvalidDataCar: {
    message: 'All parameters must be filled and correct',
    httpStatus: 400,
  },
};