import nj from 'numjs'
import bb from 'big-box'
import math from 'mathjs'
import spec from './spec.mjs'

export default [
    spec('Add', function () {
        const mathra = math.random([1000, 1000, 2])
        const mathrb = math.random([1000, 1000, 2])

        const bbra = bb.rand([1000, 1000, 2])
        const bbrb = bb.rand([1000, 1000, 2])

        const njra = nj.random([1000, 1000, 2])
        const njrb = nj.random([1000, 1000, 2])

        console.time('mathjs')
        math.add(mathra, mathrb)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.add({ of: bbra, with: bbrb })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.add(njra, njrb)
        console.timeEnd('numjs')
    }),
    spec('Subtract', function () {
        const mathra = math.random([1000, 1000, 2])
        const mathrb = math.random([1000, 1000, 2])

        const bbra = bb.rand([1000, 1000, 2])
        const bbrb = bb.rand([1000, 1000, 2])

        const njra = nj.random([1000, 1000, 2])
        const njrb = nj.random([1000, 1000, 2])

        console.time('mathjs')
        math.subtract(mathra, mathrb)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.subtract({ of: bbra, with: bbrb })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.subtract(njra, njrb)
        console.timeEnd('numjs')
    }),

    spec('Multiply', function () {
        const mathra = math.random([1000, 1000, 2])
        const mathrb = math.random([1000, 1000, 2])

        const bbra = bb.rand([1000, 1000, 2])
        const bbrb = bb.rand([1000, 1000, 2])

        const njra = nj.random([1000, 1000, 2])
        const njrb = nj.random([1000, 1000, 2])


        console.time('mathjs')
        math.dotMultiply(mathra, mathrb)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.multiply({ of: bbra, with: bbrb })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.multiply(njra, njrb)
        console.timeEnd('numjs')
    }),

    spec('Divide', function () {
        const mathra = math.random([1000, 1000, 2])
        const mathrb = math.random([1000, 1000, 2])

        const bbra = bb.rand([1000, 1000, 2])
        const bbrb = bb.rand([1000, 1000, 2])

        const njra = nj.random([1000, 1000, 2])
        const njrb = nj.random([1000, 1000, 2])

        console.time('mathjs')
        math.dotDivide(mathra, mathrb)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.divide({ of: bbra, with: bbrb })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.divide(njra, njrb)
        console.timeEnd('numjs')
    }),

    spec('MatMult', function () {
        const mathra = math.random([500, 500])
        const mathrb = math.random([500, 500])

        const bbra = bb.rand([500, 500])
        const bbrb = bb.rand([500, 500])

        const njra = nj.random([500, 500])
        const njrb = nj.random([500, 500])

        console.time('mathjs')
        math.multiply(mathra, mathrb)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.matMult({ of: bbra, with: bbrb })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.dot(njra, njrb)
        console.timeEnd('numjs')
    }),
]
