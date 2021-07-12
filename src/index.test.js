// 1)написать функцию сравнения двух объектов
// 2)разбить функционал на несколько подзадач ввиде функций:
//   - сравнение длины;
//   - сравнение имён ключей объектов;
//   - сравнение типов и значений соответсвующих ключей;
// 3)в случае не совпадения длины имён или типов значений возвращать результатом сравнения false,
//    -в случае совпадения возвращать true

var obj1 = {
  name: 'igor',
};

var obj2 = {
  name: 'igor',
};

/** function getObjKeysName gets object keys
 *
 * @name getObjKeysName
 *
 * @param obj, ({key1: value1, key2: value2, ...}).  *
 * @return 'Array'.
 */

function getObjKeysName (obj) {
  return  Object.keys(obj);
}

/** function objValidation object type validation
 *
 * @name objValidation
 *
 * @param obj, ({key1: value1, key2: value2, ...}).  *
 * @return 'boolean'.
 */

function objValidation(obj) {
  if (!(obj instanceof Object)) {
    throw new Error('Type of input parameter is not an object');
  }

  return true;
}

/** function getObjSize return obj length
 *
 * @name getObjSize
 *
 * @param obj, ({key1: value1, key2: value2, ...}).
 * @return  'number'.
 */

function getObjSize(obj) {
  try {
    objValidation(obj);

    const objLength = Object.keys(obj).length;

    return objLength;
  } catch (error) {
    console.log('Error from getObjSize function :', error.message);
  }
};

/** function compareObjKeys perform object keys comparition
 *
 * @name compareObjKeys
 *
 * @param obj1, ({key1: value1, key2: value2, ...}).
 * @param obj2, ({key1: value1, key2: value2, ...}).
 * @return  'boolean'.
 */

function compareObjKeys(obj1, obj2) {
  try {
    objValidation(obj1);
    objValidation(obj2);

    const keysArr1 = getObjKeysName(obj1);
    const keysArr2 = getObjKeysName(obj2);

    for (let i = 0; i < keysArr1.length; i++) {
      const keyFromArr2 = keysArr2.find(item => item === keysArr1[i])

      if (keyFromArr2 === -1) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.log('Error from compareObjKeys function :', error.message);
  }
}

/** function objsValueComparition objects value comparition
 *
 * @name objsValueComparition
 *
 * @param obj1, ({key1: value1, key2: value2, ...}).
 * @param obj2, ({key1: value1, key2: value2, ...}).
 * @return 'boolean'.
 */

function objsValueComparition(obj1, obj2) {
  try {
    objValidation(obj1);
    objValidation(obj2);

    const keysArr1 = getObjKeysName(obj1)
    const keysArr2 = getObjKeysName(obj2)

    for (let i = 0; i < keysArr1.length; i++) {
      const keyFromArr2 = keysArr2.find(item => item === keysArr1[i])

      const value1 = obj1[keysArr1[i]];
      const value2 = obj2[keyFromArr2];
      if (typeof value1 !== typeof value2 || value1 !== value2) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.log('Error from objsValueComparition function :', error.message);
  }
}

/** function objComparition compare two objects for equality
 *
 * @name objComparition
 *
 * @param obj1, ({key1: value1, key2: value2, ...}).
 * @param obj2, ({key1: value1, key2: value2, ...}).
 * @return 'boolean'.
 */

function objComparition(obj1, obj2) {
  try {
    objValidation(obj1);
    objValidation(obj2);

    const length1 = getObjSize(obj1);
    const length2 = getObjSize(obj2);

    const keysName = compareObjKeys(obj1, obj2);
    const keysValue = objsValueComparition(obj1, obj2);

    if (length1 !== length2 || !keysName || !keysValue ) {
      return false;
    }

    return true;
  } catch (error) {
    console.log('Error from objComparition function :', error.message);
  }

}
// method getObjSize start test
it('method getObjSize positive', () => {
  expect(typeof getObjSize(obj1)).toBe('number');
});

// method getObjKeysName start test
it('method getObjKeysName positive', () => {
  expect(getObjKeysName(obj1) instanceof Array).toBe(true);
});

// method objValidation start test
it('method objValidation positive', () => {
  expect(objValidation(obj1)).toBe(true);
});

it('method objValidation negative', () => {
  expect(() => objValidation(5)).toThrow('Type of input parameter is not an object')
});

// method compareObjKeys start test
it('method compareObjKeys positive', () => {
  expect(typeof compareObjKeys(obj1, obj2)).toBe('boolean')
});

// method objsValueComparition start test
it('method objsValueComparition positive', () => {
  expect(typeof objsValueComparition(obj1, obj2)).toBe('boolean')
});

// method objComparition start test
it('method objComparition positive', () => {
  expect(typeof objComparition(obj1, obj2)).toBe('boolean')
});



