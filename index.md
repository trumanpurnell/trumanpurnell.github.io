---
layout: default
---

Here I present a few of the applications I've created over the past few years. Again,
we find many a visualization tools, compilers, tensor libraries and Deep Learning demos. I truly seek to understand the concepts and principles beneath the mathematics and industry tools. Everything here is built from scratch.

# Cow

Cow is a concrete representation of three-dimensional space. Complete with a virtual camera and panning abilities and built atop WebGL, Cow is robust and efficient -- able to render over 10M pixels in real time. I built Cow due to the lack of competitive python visualization libraries: Matplotlib was choking on 100K pixels. Here we see a visualization of a 10MB image in pixel space:

IMAGE HERE

# Big-Box

Big-Box is an efficient NumPy implementation in pure JavaScript. I needed a backend for Cow. It supports complex numbers and quaternions. Here we see key benchmarks against industry leaders:


| Random Array Creation |
|:----------------------|:-|
| big-box:              | 89.044ms |
| mathjs:               | 710.838ms |
| numjs:                | 98.539ms |

| Ones Array Creation |
|:--------------------|:-|
| big-box:            | 5.786ms |
| mathjs:             | 49.439ms |
| numjs:              | 51.870ms |

| Zeros Array Creation |
|:---------------------|:-|
| mathjs:              | 60.393ms |
| big-box:             | 1.285ms |
| numjs:               | 37.166ms |

| Range Array Creation |
|:---------------------|:-|
| mathjs:              | 159.187ms |
| big-box:             | 14.712ms |
| numjs:               | 172.807ms |

| Literal Array Creation |
|:-----------------------|:-|
| mathjs:                | 1.141ms |
| big-box:               | 0.087ms |
| numjs:                 | 0.215ms |

| Sum      |
|:---------|:-|
| mathjs:  | 661.154ms |
| big-box: | 24.788ms |
| numjs:   | 22.922ms |

| Mean     |
|:---------|:-|
| mathjs:  | 336.405ms |
| big-box: | 25.306ms |
| numjs:   | 19.135ms |

| Min      |
|:---------|:-|
| mathjs:  | 158.234ms |
| big-box: | 20.660ms |
| numjs:   | 30.452ms |

| Max      |
|:---------|:-|
| mathjs:  | 157.730ms |
| big-box: | 22.281ms |
| numjs:   | 26.227ms |

| Add      |
|:---------|:-|
| mathjs:  | 665.261ms |
| big-box: | 15.892ms |
| numjs:   | 29.694ms |

| Subtract |
|:---------|:-|
| mathjs:  | 704.024ms |
| big-box: | 13.244ms |
| numjs:   | 20.207ms |

| Multiply |
|:---------|:-|
| mathjs:  | 370.649ms |
| big-box: | 15.469ms |
| numjs:   | 19.704ms |

| Divide   |
|:---------|:-|
| mathjs:  | 654.055ms |
| big-box: | 15.184ms |
| numjs:   | 19.585ms |



# Deep Demos

Machine Learning since 2013 or so has just exploded. Lagging wholeheartedly behind, however, is the ability to learn from small or unlabeled datasets. These are my primary research interests. Below is a depiction of the top 100 fourier coefficients for simple utterances:

IMAGE HERE

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

