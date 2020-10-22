export const isFillBag = (arr, target) => {
    if (!arr || (target === undefined)) return undefined
    else if (target === 0) return []
    else if (!arr.length) return undefined
    else {
        const firstIndex = 1
        const lastIndex = arr.length + 1
        const nextValue = arr[0]
        const nextArr = arr.slice(firstIndex, lastIndex)
        const resultWithValue = isFillBag(nextArr, target - nextValue)
        const resultWithoutValue = isFillBag(nextArr, target)
        if (resultWithValue) return [...resultWithValue, nextValue]
        return resultWithoutValue
    }    
}