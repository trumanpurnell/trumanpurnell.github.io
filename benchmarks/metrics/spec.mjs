
export default function spec(name, test) {
    return function () {
        console.log(`-------------------`)
        console.log(`${name}:`)
        test()
    }
}
