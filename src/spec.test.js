import {
  getObjKeysName,
  objValidation,
  getObjSize,
  compareObjKeys,
  objsValueComparition,
  objComparition
} from './index.test';

var obj1 = {
  name: 'igor',
};

var obj2 = {
  name: 'igor',
};
var obj3 = {
  lastName: 'Frankenstein',
};
var obj4 = {
  lastName: 'Frankenstein',
  name: 'igor',
};
var obj5 = {
  name: 'Vasa',
};
var obj6 = {
  name: 7,
};

describe('Future: object compare', () => {
  // getObjKeysName
  describe('method getObjKeysName', () => {
    describe('should returns an Array of string what are keys of Object passed as parameter', () => {
      it('method getObjKeysName positive', () => {
        expect(getObjKeysName(obj1) instanceof Array).toBe(true);
      });
    });
  });

  // method getObjSize
  describe('method getObjSize', () => {
    describe('should returns a Number of object length', () => {
      it('method getObjSize positive', () => {
        expect(typeof getObjSize(obj1)).toBe('number');
      });
    });
  });

  // method objValidation start test
  describe('method objValidation', () => {
    describe('should returns a boolean(true) when object from parameters is instance of Object.', () => {
      it('positive', () => {
        expect(objValidation(obj1)).toBe(true);
      });
      it('negative primitive', () => {
        expect(() => objValidation(5)).toThrow('Type of input parameter is not an object')
      });
      it('negative Array', () => {
        expect(() => objValidation([])).toThrow('Type of input parameter is not an object')
      });
      it('negative NULL', () => {
        expect(() => objValidation(null)).toThrow('Type of input parameter is not an object')
      });
    });
  });

  // method compareObjKeys start test
  describe('method compareObjKeys', () => {
    describe('should returns a boolean(true) when objects keys from objects from parameters are equal.', () => {
      it('method compareObjKeys positive', () => {
        expect(typeof compareObjKeys(obj1, obj2)).toBe('boolean')
      });
      it('method compareObjKeys negative', () => {
        expect(compareObjKeys(obj1, obj3)).toBe(false)
      });
    });
  });

  // method objsValueComparition start test
  describe('method objsValueComparition', () => {
    describe('should returns a boolean(true) when objects values from objects parameters are equal.', () => {
      it('method objsValueComparition positive', () => {
        expect(typeof objsValueComparition(obj1, obj2)).toBe('boolean')
      });
      it('negative value', () => {
        expect(objsValueComparition(obj1, obj5)).toBe(false);
      });
      it('negative type of value', () => {
        expect(objsValueComparition(obj1, obj6)).toBe(false);
      });
    });
  });

  // method objComparition start test
  describe('method objComparition', () => {
    describe('should returns a boolean(true) when objects keys, values and length from objects parameters are equal.', () => {

      it('method objComparition positive', () => {
        expect(typeof objComparition(obj1, obj2)).toBe('boolean')
      });
      it('negative', () => {
        expect(objComparition(obj1, obj4)).toBe(false);
      });
    });
  });
});
