/**
 *  Iterates over elements of `array`, returning an item where
 * `predicates` returns truthy for. The first function in the 
 * `predicates` array will get the highest value so even if 
 *  it get a match with any other predicates, the function will  
 *  continue to look for other items in the array until it finds an item that
 *  matches the first predicate or till the end of `array`  
 *
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Array.<Function>} predicates The array of functions invoked per iteration.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * const users = [
 *   { 'user': 'deepu', 'age': 35 },
 *   { 'user': 'sebulu', 'age': 27 },
 *   { 'user': 'sijo',   'age': 30 },
 *   { 'user': 'jobin',   'age': 28 }
 * ]
 * 
 * const predicates = [
 *  (i) => i.age === 28,
 *  (i) => i.age === 35,
 *  (i) => i.name === sijo,
 * ]
 *
 * findOneByAny(users, predicates)
 * // => { 'user': 'jobin',   'age': 28 }
 */

export const findOneByAny = (array: any[], predicates: ((i: any) => any)[]) => {
    const { length } = array
    const predicatesLength = predicates.length
    let index = 0
    const foundItems: any = {}
    while ((index < length)) {
        for (let i = 0; i < predicatesLength; i++) {
            let p = predicates[i]
            if (p(array[index])) {
                if (i === 0) {
                    return array[index]
                } else {
                    foundItems[i] = array[index]
                }
            }
        }
        ++index
    }
    for (let k = 0; k < predicatesLength; k++) {
        if (foundItems[k]) {
            return foundItems[k]
        }
    }

    return undefined
}

