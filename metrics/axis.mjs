import bb from 'big-box'
import math from 'mathjs'
import spec from './spec.mjs'

export default [
    spec('Sum', function () {
        const mine = bb.rand([1000, 1000, 50])
        const your = math.random([1000, 1000, 50])

        console.time('math')
        math.sum(your)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.sum({ of: mine })
        op.invoke()
        console.timeEnd('bb')
    }),

    spec('Mean', function () {
        const mine = bb.rand([1000, 1000, 50])
        const your = math.random([1000, 1000, 50])

        console.time('math')
        math.mean(your)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.mean({ of: mine })
        op.invoke()
        console.timeEnd('bb')
    }),

    spec('Min', function () {
        const mine = bb.rand([1000, 1000, 50])
        const your = math.random([1000, 1000, 50])

        console.time('math')
        math.min(your)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.min({ of: mine })
        op.invoke()
        console.timeEnd('bb')
    }),

    spec('Max', function () {
        const mine = bb.rand([1000, 1000, 50])
        const your = math.random([1000, 1000, 50])

        console.time('math')
        math.min(your)
        console.timeEnd('math')

        console.time('bb')
        const op = new bb.cached.max({ of: mine })
        op.invoke()
        console.timeEnd('bb')
    }),

]