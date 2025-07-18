---
layout: default
---

# Portfolio

Here I present a few of the applications I've created in years past. We see visualization tools, compilers, tensor libraries and Deep Learning demos. I truly seek to understand the concepts and principles beneath the mathematics and industry tools. Everything here is built from scratch.

## Claude

Claude is a concrete representation of three-dimensional space. Complete with a virtual camera and built atop WebGL, Claude is robust and efficient -- able to render over 10M pixels in real time. I built Claude due to the lack of competitive python visualization libraries: Matplotlib was choking on 100K pixels. Here we see a visualization of a 10MB image in pixel space:

<iframe src="https://my-mulch.github.io/claude" style="display: inline-block; width: 500px; height: 375px;"></iframe>
<img src="https://my-mulch.github.io/claude/assets/img/sea.jpg" style="display: inline-block; width: 500px; height: 375px;"/>

## Big-Box

Big-Box is an efficient NumPy implementation in pure JavaScript. I needed a backend for Claude. It supports complex numbers and quaternions. Here we see key benchmarks against industry leaders:

| Random   |
| :------- | :-------- |
| big-box: | 89.044ms  |
| numjs:   | 98.539ms  |
| mathjs:  | 710.838ms |

| Ones     |
| :------- | :------- |
| big-box: | 5.786ms  |
| mathjs:  | 49.439ms |
| numjs:   | 51.870ms |

| Zeros    |
| :------- | :------- |
| big-box: | 1.285ms  |
| numjs:   | 37.166ms |
| mathjs:  | 60.393ms |

| Range    |
| :------- | :-------- |
| big-box: | 14.712ms  |
| mathjs:  | 159.187ms |
| numjs:   | 172.807ms |

| Literal  |
| :------- | :------ |
| big-box: | 0.087ms |
| numjs:   | 0.215ms |
| mathjs:  | 1.141ms |

| Sum      |
| :------- | :-------- |
| numjs:   | 22.922ms  |
| big-box: | 24.788ms  |
| mathjs:  | 661.154ms |

| Mean     |
| :------- | :-------- |
| numjs:   | 19.135ms  |
| big-box: | 25.306ms  |
| mathjs:  | 336.405ms |

| Min      |
| :------- | :-------- |
| big-box: | 20.660ms  |
| numjs:   | 30.452ms  |
| mathjs:  | 158.234ms |

| Max      |
| :------- | :-------- |
| big-box: | 22.281ms  |
| numjs:   | 26.227ms  |
| mathjs:  | 157.730ms |

| Add      |
| :------- | :-------- |
| big-box: | 15.892ms  |
| numjs:   | 29.694ms  |
| mathjs:  | 665.261ms |

| Subtract |
| :------- | :-------- |
| big-box: | 13.244ms  |
| numjs:   | 20.207ms  |
| mathjs:  | 704.024ms |

| Multiply |
| :------- | :-------- |
| big-box: | 15.469ms  |
| numjs:   | 19.704ms  |
| mathjs:  | 370.649ms |

| Divide   |
| :------- | :-------- |
| big-box: | 15.184ms  |
| numjs:   | 19.585ms  |
| mathjs:  | 654.055ms |

## Deep Demos

Machine Learning over the past decade has exploded. Lagging behind, however, is the ability to learn from small or unlabeled datasets. I believe breakthroughs will arise as more inspiration is lifted from biology. This has been an evident trend. Neural Networks are more brain-like than their predecessors (SVMs, Logistic Units, etc.), and they peform better. Convolutional Networks are more eye-like: better performance. Our ears execute the fourier transform, so let's build some ear models on top of it. Below is a visualization of the top 100 fourier coefficients over time for simple utterances:

<img src="https://my-mulch.github.io/kinder/assets/img/go.png" style="display: inline-block; width: 500px; height: 375px;"/>

<video controls src="https://my-mulch.github.io/kinder/assets/video/co.mp4" width="500px" height="375px"></video>
