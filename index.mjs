import bb from 'big-box'
import math from 'mathjs'

/** Creation */
console.time('mine')
const mine = bb.rand([300, 300, 300], bb.Float64)
console.timeEnd('mine')


console.time('your')
const your = math.random([300, 300, 300])
console.timeEnd('your')



