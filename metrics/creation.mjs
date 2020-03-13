import bb from 'big-box'
import math from 'mathjs'
import spec from './spec.mjs'

export default [
    spec('Random Array Creation', function () {
        console.time('math')
        math.random([200, 200, 200])
        console.timeEnd('math')

        console.time('bb')
        bb.rand([200, 200, 200], bb.Float64)
        console.timeEnd('bb')
    }),
    spec('Ones Array Creation', function () {
        console.time('math')
        math.ones([200, 200, 200])
        console.timeEnd('math')

        console.time('bb')
        bb.ones([200, 200, 200])
        console.timeEnd('bb')
    }),
    spec('Zeros Array Creation', function () {
        console.time('math')
        math.zeros([200, 200, 200])
        console.timeEnd('math')

        console.time('bb')
        bb.zeros([200, 200, 200])
        console.timeEnd('bb')
    }),
    spec('Range Array Creation', function () {
        console.time('math')
        math.range(0, 10000000, 2)
        console.timeEnd('math')

        console.time('bb')
        bb.arange(0, 10000000, 2)
        console.timeEnd('bb')
    }),
    spec('Complex Array Creation', function () {
        console.time('math')
        const result = new Float32Array(2 * 1e6)
        for (let i = 0; i < 2 * 1e6; i += 2) {
            const c = math.complex(Math.random(), Math.random())
            result[i] = c.re
            result[i + 1] = c.im
        }
        console.timeEnd('math')

        console.time('bb')
        bb.rand([2e6]).view(bb.ComplexFloat32)
        console.timeEnd('bb')
    }),
    spec('Literal Array Creation', function () {
        console.time('math')
        math.matrix([
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]])
        console.timeEnd('math')

        console.time('bb')
        math.matrix([
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]],
            [[1], [1], [1], [1], [1], [1], [1], [1], [1], [1]]])
        console.timeEnd('bb')
    })

]