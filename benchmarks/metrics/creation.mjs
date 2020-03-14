import nj from 'numjs'
import bb from 'big-box'
import math from 'mathjs'
import spec from './spec.mjs'

export default [
    spec('Random Array Creation', function () {
        console.time('mathjs')
        math.random([200, 200, 200])
        console.timeEnd('mathjs')

        console.time('big-box')
        bb.rand([200, 200, 200])
        console.timeEnd('big-box')

        console.time('numjs')
        nj.random([200, 200, 200])
        console.timeEnd('numjs')
    }),
    spec('Ones Array Creation', function () {
        console.time('mathjs')
        math.ones([200, 200, 200])
        console.timeEnd('mathjs')

        console.time('big-box')
        bb.ones([200, 200, 200])
        console.timeEnd('big-box')

        console.time('numjs')
        nj.ones([200, 200, 200])
        console.timeEnd('numjs')

    }),
    spec('Zeros Array Creation', function () {
        console.time('mathjs')
        math.zeros([200, 200, 200])
        console.timeEnd('mathjs')

        console.time('big-box')
        bb.zeros([200, 200, 200])
        console.timeEnd('big-box')

        console.time('numjs')
        nj.zeros([200, 200, 200])
        console.timeEnd('numjs')

    }),
    spec('Range Array Creation', function () {
        console.time('mathjs')
        math.range(0, 1e7, 2)
        console.timeEnd('mathjs')

        console.time('big-box')
        bb.arange(0, 1e7, 1)
        console.timeEnd('big-box')

        console.time('numjs')
        nj.arange(0, 1e7, 1)
        console.timeEnd('numjs')
    }),
    spec('Complex Array Creation', function () {
        console.time('mathjs')
        const result = new Float32Array(2 * 1e6)
        for (let i = 0; i < 2 * 1e6; i += 2) {
            const c = math.complex(Math.random(), Math.random())
            result[i] = c.re
            result[i + 1] = c.im
        }
        console.timeEnd('mathjs')

        console.time('big-box')
        bb.rand([2e6]).view(bb.ComplexFloat32)
        console.timeEnd('big-box')
    }),
    spec('Literal Array Creation', function () {
        console.time('mathjs')
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
        console.timeEnd('mathjs')

        console.time('big-box')
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
        console.timeEnd('big-box')


        console.time('numjs')
        nj.array([
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
        console.timeEnd('numjs')
    })
]