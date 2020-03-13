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