import nj from 'numjs'
import bb from 'big-box'
import math from 'mathjs'
import spec from './spec.mjs'

export default [
    spec('Sum', function () {
        const bbr = bb.rand([1000, 1000, 10])
        const njr = nj.random([1000, 1000, 10])
        const mathr = math.random([1000, 1000, 10])

        console.time('mathjs')
        math.sum(mathr)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.sum({ of: bbr })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.sum(njr)
        console.timeEnd('numjs')
    }),

    spec('Mean', function () {
        const bbr = bb.rand([1000, 1000, 10])
        const njr = nj.random([1000, 1000, 10])
        const mathr = math.random([1000, 1000, 10])

        console.time('mathjs')
        math.mean(mathr)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.mean({ of: bbr })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.mean(njr)
        console.timeEnd('numjs')
    }),

    spec('Min', function () {
        const bbr = bb.rand([1000, 1000, 10])
        const njr = nj.random([1000, 1000, 10])
        const mathr = math.random([1000, 1000, 10])

        console.time('mathjs')
        math.min(mathr)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.min({ of: bbr })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.min(njr)
        console.timeEnd('numjs')
    }),

    spec('Max', function () {
        const bbr = bb.rand([1000, 1000, 10])
        const njr = nj.random([1000, 1000, 10])
        const mathr = math.random([1000, 1000, 10])

        console.time('mathjs')
        math.max(mathr)
        console.timeEnd('mathjs')

        console.time('big-box')
        const op = new bb.cached.max({ of: bbr })
        op.invoke()
        console.timeEnd('big-box')

        console.time('numjs')
        nj.max(njr)
        console.timeEnd('numjs')
    }),

]