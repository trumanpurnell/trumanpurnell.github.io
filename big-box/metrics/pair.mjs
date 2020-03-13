import bb from 'big-box'
import math from 'mathjs'
import spec from './spec.mjs'

export default [
    spec('Add', function () {
        const mineA = bb.rand([1000, 1000, 2])
        const mineB = bb.rand([1000, 1000, 2])

        const yourA = math.random([1000, 1000, 2])
        const yourB = math.random([1000, 1000, 2])

        console.time('math')
        math.add(yourA, yourB)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.add({ of: mineA, with: mineB })
        op.invoke()
        console.timeEnd('bb')
    }),
    spec('Subtract', function () {
        const mineA = bb.rand([1000, 1000, 2])
        const mineB = bb.rand([1000, 1000, 2])

        const yourA = math.random([1000, 1000, 2])
        const yourB = math.random([1000, 1000, 2])

        console.time('math')
        math.subtract(yourA, yourB)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.subtract({ of: mineA, with: mineB })
        op.invoke()
        console.timeEnd('bb')
    }),

    spec('Multiply', function () {
        const mineA = bb.rand([1000, 1000, 2])
        const mineB = bb.rand([1000, 1000, 2])

        const yourA = math.random([1000, 1000, 2])
        const yourB = math.random([1000, 1000, 2])

        console.time('math')
        math.dotMultiply(yourA, yourB)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.multiply({ of: mineA, with: mineB })
        op.invoke()
        console.timeEnd('bb')
    }),

    spec('Divide', function () {
        const mineA = bb.rand([1000, 1000, 2])
        const mineB = bb.rand([1000, 1000, 2])

        const yourA = math.random([1000, 1000, 2])
        const yourB = math.random([1000, 1000, 2])

        console.time('math')
        math.dotDivide(yourA, yourB)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.divide({ of: mineA, with: mineB })
        op.invoke()
        console.timeEnd('bb')
    }),

    spec('MatMult', function () {
        const mineA = bb.rand([500, 500])
        const mineB = bb.rand([500, 500])

        const yourA = math.random([500, 500])
        const yourB = math.random([500, 500])

        console.time('math')
        math.multiply(yourA, yourB)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.matMult({ of: mineA, with: mineB })
        op.invoke()
        console.timeEnd('bb')
    }),
]
