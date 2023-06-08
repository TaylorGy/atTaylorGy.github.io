# Human Resource Machine Solutions

> Author: TaylorGy  
> Most of the solutions are from my own idea. It is my pleasure if someone gets the same solutions. Also, I searched for some codes online but unfortunately, I may not be able to give quotes to these honourable authors because of the long delay from my game-time to the accomplishment of this document. Appreciation to all that have contributed to this wonderful game and to my enjoyable coding experience.

## Year 1

### size / speed : 6 / 6 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
```

## Year 2

### size / speed : 3 / 30 (size challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    OUTBOX
    JUMP     a
```

### size / speed : 24 / 20 (speed challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
    INBOX
    OUTBOX
```

## Year 3

### size / speed : 6 / 6 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COPYFROM 4
    OUTBOX
    COPYFROM 0
    OUTBOX
    COPYFROM 3
    OUTBOX
```

## Year 4

### size / speed : 7 / 21 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    COPYTO   0
    INBOX
    OUTBOX
    COPYFROM 0
    OUTBOX
    JUMP     a
```

## Year 6

### size / speed : 6 / 24 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    COPYTO   0
    INBOX
    ADD      0
    OUTBOX
    JUMP     a
```

## Year 7

### size / speed : 4 / 23 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
b:
    INBOX
    JUMPZ    b
    OUTBOX
    JUMP     a
```

## Year 8

### size / speed : 6 / 24 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    COPYTO   0
    ADD      0
    ADD      0
    OUTBOX
    JUMP     a
```

## Year 9

### size / speed : 5 / 25 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    JUMP     b
a:
    OUTBOX
b:
c:
    INBOX
    JUMPZ    a
    JUMP     c
```

## Year 10

### size / speed : 9 / 36 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    COPYTO   0
    ADD      0
    COPYTO   0
    ADD      0
    COPYTO   0
    ADD      0
    OUTBOX
    JUMP     a
```

## Year 11

### size / speed : 10 / 40 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    COPYTO   0
    INBOX
    COPYTO   1
    SUB      0
    OUTBOX
    COPYFROM 0
    SUB      1
    OUTBOX
    JUMP     a
```

## Year 12

### size / speed : 14 / 56 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    COPYTO   0
    ADD      0
    COPYTO   0
    ADD      0
    COPYTO   0
    ADD      0
    COPYTO   0
    ADD      0
    ADD      0
    ADD      0
    ADD      0
    OUTBOX
    JUMP     a
```

## Year 13

### size / speed : 9 / 27 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    JUMP     b
a:
    COPYFROM 0
    OUTBOX
b:
c:
    INBOX
    COPYTO   0
    INBOX
    SUB      0
    JUMPZ    a
    JUMP     c
```

## Year 14

### size / speed : 10 / 31 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    JUMP     c
a:
    COPYFROM 0
b:
    OUTBOX
c:
    INBOX
    COPYTO   0
    INBOX
    SUB      0
    JUMPN    a
    ADD      0
    JUMP     b
```

## Year 16

### size / speed : 8 / 34 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    JUMP     c
a:
    COPYTO   0
    SUB      0
    SUB      0
b:
    OUTBOX
c:
    INBOX
    JUMPN    a
    JUMP     b
```

## Year 17

### size / speed : 12 / 28 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
b:
    INBOX
    JUMPN    d
    INBOX
    JUMPN    e
c:
    COPYFROM 4
    OUTBOX
    JUMP     b
d:
    INBOX
    JUMPN    c
e:
    COPYFROM 5
    OUTBOX
    JUMP     a
```

## Year 19

### size / speed : 10 / 114 (size challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    COPYTO   0
b:
c:
    OUTBOX
    COPYFROM 0
    JUMPZ    a
    JUMPN    d
    BUMPDN   0
    JUMP     b
d:
    BUMPUP   0
    JUMP     c
```

### size / speed : 11 / 80 (speed challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    COPYTO   0
    JUMPN    d
b:
c:
    OUTBOX
    BUMPDN   0
    JUMPN    a
    JUMP     b
d:
e:
    OUTBOX
    BUMPUP   0
    JUMPN    e
    JUMPZ    c
```

## Year 20

### size / speed : 15 / 140 (size challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    COPYTO   0
    COPYTO   5
    INBOX
    COPYTO   1
    JUMPZ    d
b:
    BUMPDN   1
    JUMPZ    c
    COPYFROM 5
    ADD      0
    COPYTO   5
    JUMP     b
c:
    COPYFROM 5
d:
    OUTBOX
    JUMP     a
```

### size / speed : 38 / 72 (speed challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    BUMPUP   9
    JUMP     k
a:
    ADD      1
b:
    ADD      1
c:
    ADD      1
d:
    ADD      1
e:
    ADD      1
f:
    ADD      1
g:
    ADD      1
h:
    ADD      1
i:
    ADD      1
j:
    OUTBOX
k:
l:
    INBOX
    JUMPZ    m
    COPYTO   1
    INBOX
    JUMPZ    j
    SUB      9
    JUMPZ    i
    SUB      9
    JUMPZ    h
    SUB      9
    JUMPZ    g
    SUB      9
    JUMPZ    f
    SUB      9
    JUMPZ    e
    SUB      9
    JUMPZ    d
    SUB      9
    JUMPZ    c
    SUB      9
    JUMPZ    b
    SUB      9
    JUMP     a
m:
    OUTBOX
    INBOX
    JUMP     l
```

## Year 21

### size / speed : 10 / 72 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    JUMPZ    d
b:
    COPYTO   3
    INBOX
    JUMPZ    c
    ADD      3
    JUMP     b
c:
    COPYFROM 3
d:
    OUTBOX
    JUMP     a
```

## Year 22

### size / speed : 19 / 123 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    BUMPUP   9
a:
    INBOX
    COPYTO   0
    COPYFROM 9
    COPYTO   2
    COPYTO   3
    OUTBOX
b:
    COPYFROM 2
    COPYTO   1
c:
    COPYFROM 3
    COPYTO   2
    OUTBOX
    COPYFROM 1
    ADD      2
    COPYTO   3
    SUB      0
    JUMPN    b
    JUMPZ    c
    JUMP     a

DEFINE LABEL 0
eJyzZGBgCI/s8wqJuubvFfe8kyNe8BpX3KVr52KaTgdFh6y6EB3T1BN7MO9Aol6ieerz6LTszFj5PKOU
wOJLVcfLnOc1VzSdBhrBcLP9T1ZPj/UMtv7C/VaTQ25smSp68910n0sas/Yevzu3f1nkfJ7yyPkbkkBq
E7boJc7aVjhRcnv3xbitTacfbdbatWhz/7L7W1I7orcFVIbtYMg7s9so5ci+Lal/DjLkmR25VLXpaGpH
1omQVRknC/fnHl+y1eBY12KDY+/79Y4HVL488Tkl/sxk3zlnJ/v6X3qfaH9Dq+fRo52fnj4s+5Bzf8lj
hlEwCkYBTgAAT0x1MA;

DEFINE LABEL 1
eJyTZWBgmBP+umde2OMtj0NEbz4OWfFMNaT/imrIloNJoRFr74UdnR8VUTplWuT7/tOx95qZEiUb6pJk
m7el1s16m/F+r3r2vftPs+2/q2fv/AQ0imFq4ecDreWvd61qVNsu0aG23bU/dw9IPH3WraC+xYLXfJbY
f2cYBaNgFAwaAACnnjjV;

DEFINE LABEL 2
eJwTYGBgqPJJCM8NvNecHvzjcFbQhn26gbPXrw9gmJMbOLtRNvyaf1QEj+e1SHdXoWgW574YFmeXhMm+
eRkhNTMKRG8yjIJRMAqGNAAA+r8Y6Q;

DEFINE LABEL 3
eJwzZWBg+GXi7fHLJCLwkzlDnprN5JUqtgFXdawyd7638F6SZynZkGazMyPaITVqqtO9UGfPa/7/vK75
A7UxmPodnOOUmNqxOU20Ni+Dp3xdhn1uYfqWVPPU13F1Sc+j2+K14jrj3if2xJql98SyFHLFmU3liD+3
lDUhcfO+JOtjZanu5zek+1xKy/a5xFlmfYy9vHA/yNz6iV3uTRPcXbt621wmdV3zF+7SipvUZZ3F1+Nd
dqwvs/vfxL0zb8z/c6x7ybWb3UsWPJi8MPN54pwNb0ynGr1r79N7zTAKRsEoIBoAALyrXlY;
```

## Year 23

### size / speed : 12 / 73 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    JUMP     c
b:
    ADD      3
c:
    COPYTO   3
d:
    INBOX
    JUMPZ    e
    SUB      3
    JUMPN    b
    JUMP     d
e:
    COPYFROM 3
    OUTBOX
    JUMP     a

```

## Year 24

### size / speed : 11 / 53 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    COPYTO   0
    INBOX
    COPYTO   1
    COPYFROM 0
b:
    SUB      1
    JUMPN    c
    JUMP     b
c:
    ADD      1
    OUTBOX
    JUMP     a
```

## Year 25

### size / speed : 12 / 82 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    JUMPZ    d
    COPYTO   0
    COPYTO   1
b:
    BUMPDN   0
    JUMPZ    c
    ADD      1
    COPYTO   1
    JUMP     b
c:
    COPYFROM 1
d:
    OUTBOX
    JUMP     a
```

## Year 26

### size / speed : 15 / 76 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    COPYFROM 9
    COPYTO   2
    INBOX
    COPYTO   0
    INBOX
    COPYTO   1
b:
    COPYFROM 0
    SUB      1
    JUMPN    c
    COPYTO   0
    BUMPUP   2
    JUMP     b
c:
    COPYFROM 2
    OUTBOX
    JUMP     a
```

## Year 28

### size / speed : 34 / 134 (size challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    COPYTO   0
    INBOX
    COPYTO   1
    INBOX
    COPYTO   2
b:
    COPYFROM 0
    SUB      1
    JUMPN    c
    JUMPZ    d
    COPYFROM 1
    COPYTO   5
    COPYFROM 0
    COPYTO   1
    COPYFROM 5
    COPYTO   0
c:
d:
    COPYFROM 1
    SUB      2
    JUMPN    e
    JUMPZ    f
    COPYFROM 2
    COPYTO   5
    COPYFROM 1
    COPYTO   2
    COPYFROM 5
    COPYTO   1
    JUMP     b
e:
f:
    COPYFROM 0
    OUTBOX
    COPYFROM 1
    OUTBOX
    COPYFROM 2
    OUTBOX
    JUMP     a
```

### size / speed : 66 / 75 (speed challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
b:
c:
d:
e:
f:
    INBOX
    COPYTO   0
    INBOX
    COPYTO   1
    SUB      0
    JUMPN    g
    JUMP     k
g:
    INBOX
    COPYTO   2
    SUB      1
    JUMPN    h
    JUMP     i
h:
    ADD      1
    OUTBOX
    COPYFROM 1
    OUTBOX
    COPYFROM 0
    OUTBOX
    JUMP     d
i:
    COPYFROM 1
    OUTBOX
    COPYFROM 2
    SUB      0
    JUMPN    j
    COPYFROM 0
    OUTBOX
    COPYFROM 2
    OUTBOX
    JUMP     f
j:
    COPYFROM 2
    OUTBOX
    COPYFROM 0
    OUTBOX
    JUMP     e
k:
    INBOX
    COPYTO   2
    SUB      1
    JUMPN    l
    COPYFROM 0
    OUTBOX
    COPYFROM 1
    OUTBOX
    COPYFROM 2
    OUTBOX
    JUMP     c
l:
    ADD      1
    JUMPN    p
    SUB      0
    JUMPN    n
m:
    COPYFROM 0
    OUTBOX
    COPYFROM 2
    OUTBOX
    COPYFROM 1
    OUTBOX
    JUMP     b
n:
o:
    ADD      0
    OUTBOX
    COPYFROM 0
    OUTBOX
    COPYFROM 1
    OUTBOX
    JUMP     a
p:
    SUB      0
    JUMPN    o
    JUMP     m
```

## Year 29

### size / speed : 5 / 25 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    COPYTO   12
    COPYFROM [12]
    OUTBOX
    JUMP     a
```

## Year 30

### size / speed : 7 / 203 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
    COPYTO   24
b:
    COPYFROM [24]
    JUMPZ    a
    OUTBOX
    BUMPUP   24
    JUMP     b
```

## Year 31

### size / speed : 11 / 118 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
b:
    INBOX
    JUMPZ    c
    COPYTO   [14]
    BUMPUP   14
    JUMP     a
c:
d:
    BUMPDN   14
    COPYFROM [14]
    OUTBOX
    COPYFROM 14
    JUMPZ    b
    JUMP     d
```

## Year 32

### size / speed : 16 / 404 (size challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    JUMP     b
a:
    COPYFROM 19
    OUTBOX
b:
    COPYFROM 14
    COPYTO   19
    COPYTO   18
    INBOX
    COPYTO   15
c:
    COPYFROM [18]
    JUMPZ    a
    SUB      15
    JUMPZ    e
d:
    BUMPUP   18
    JUMP     c
e:
    BUMPUP   19
    JUMP     d

DEFINE LABEL 18
eJxzZmBgWKXg1bxV8WnvVsW/C1zl+Y4ChRgeqb6JfKQqFQtilxhLN2QasUzINGLd7GGuPEnG2qnQ0749
Rca5PaXRZVnaU9cnWYvd11X8cbdeClLPEenVPDOsou1okPHkxMD1s4WDZqwuDz6+ziHs+vqwiBVrRKK8
l/XHLu+cFddf1h+bbt8cwx3THLN+9otY72V3YmQWN8ecmwsy50vatR6uzK99fvlWTVeKnQrbSphzrxQv
S9tU0J5yL8eogCuzo31jBsuE5MygqVXZ++fMzuNdZFH6d8G+ygWz2mucp0yqvdYzqTayBWSWa5tnAvOE
5Z3pE491S06qaAOJbZ2wNyyw/06EZJdRQVSDylaGUTAKRiAAAAsMbu8;

DEFINE LABEL 19
eJzzY2BgqExZEbMvaX4YU2JMyL0w2dBoB+usTeYnSxyNZje2GeT2ndBvW+BieGvdDtOm03fsr9084iF5
B6iNwSVhel1Q9JbJNyJOLpKKiFgbFTF/07RIte1ecUYHStLKDi3L3rAvLi9zp0y+0pa7ebPXv8gymvQp
LaEVpHdVo2TDy8bMnWrNPw4/bPlxWKwzd8+2KU1zi6Ztmbxx2ppe06nzW5bNOno2fu6al0pzHj9aPPvk
BZC+7A0MeTob1Do3rLu2eusa3qWVq7V6ytYEVL5fV5WpuXFDksrmNfFxWwuTRXZylLTu+zzJ4jDL2dqD
Ww42HOBdCtL/4W6Xu9FdtejCu6K1+vfW9Ko/nLwy5VHMBpmnqdtEXizZ6vkmZkPD+/5ldR+a5rK82zIZ
pEfgkmAVx1We8h+3Tpb8fw/E/39WMoyCUTBMAABlUJow;
```

### size / speed : 21 / 40 (speed challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    COPYFROM 14
    COPYTO   2
    BUMPUP   2
    BUMPUP   2
    COPYTO   3
    BUMPUP   3
    COPYTO   0
    BUMPUP   0
    COPYTO   1
    BUMPUP   1
    JUMP     b
a:
    COPYFROM [19]
    OUTBOX
b:
c:
    INBOX
    SUB      6
    COPYTO   19
    SUB      3
    JUMPN    a
    COPYFROM 3
    OUTBOX
    JUMP     c
```

## Year 34

### size / speed : 13 / 323 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
b:
    COPYFROM 5
    COPYTO   9
    INBOX
    COPYTO   6
c:
    COPYFROM [9]
    JUMPZ    d
    SUB      6
    JUMPZ    b
    BUMPUP   9
    JUMP     c
d:
    COPYFROM 6
    OUTBOX
    JUMP     a
```

## Year 35

### size / speed : 17 / 159 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    INBOX
    COPYTO   0
a:
    OUTBOX
b:
    INBOX
    COPYTO   11
    COPYFROM 14
    COPYTO   12
c:
    COPYFROM [12]
    SUB      11
    JUMPZ    b
    BUMPDN   12
    JUMPN    d
    JUMP     c
d:
    BUMPUP   14
    COPYFROM 11
    COPYTO   [14]
    JUMP     a

DEFINE LABEL 11
eJyzZGBgcDQqtbA0zU14bi17P81G6VGC3YIHQGEGJTWW+c2GRpNWWL/u8XZT69zor9ZZ5K/VA5JLCpVs
kIiUXBcSVXciJMrn0rTI/iu3w6eviYrYMlk0Srb5XMzJEvd45wKnxJMlf5Mi6jekX1qhn7Fh34b0mA05
mQxz5ualdhyqCKg0q+UpN6w/V76qUbZ5Ttv7vREdCx5EtcfcS2h1Pw+yZ9ksoxSlOQmtiXO2vn88u+3P
slnOv95N774Ikru80Nqmc+kGk1+rDjrobFgT/2rDzoxXG9qK1q4XrTVf876ffVndLKFFTXMZRsEoGAU4
AQCSYWYb;

DEFINE LABEL 12
eJyzYGBgiNR8rhum9dpggg6HG7uBaG2bQffFU3p7jwOlGK5qZTKe1d3L72bQJgbiP80OWfUii3fp19Sd
01oSnndei7zVkBoiWrs+QLR2i9/sxp8+hRN/+kSsLfK3P/kyyOfSvDCOC23x9zb+SKmbVZguWvshfUVM
SVqu0Y4Uf9nKlFKur6ltYnkZuQk5mW0LGHP+/wfZYZT1//+6jNxXIPb6+j9Zaxt4yh+27Jy2c/KPj+VT
rL9UTS77UDNpwQOQfP3E6XVNE1Z0nekJWH6z/f3e7Ebey7VVjx95l6556Vey4Q3DKBgFowAvAADbqmfU
;

DEFINE LABEL 14
eJyzZGBgmBaZGjUzwr14ZoRiW0x43az4ML29SaEnLywJ6b/yLLjpdGrI+70Xos+Ve8WZpVul3AoyT40I
/Jo6P+xralO+VQrL/B8pDKesUowOmKeqbQcax3C87Hk0T+ma+OsFa3pn57svvJtXd+JWvvv5GQW8l0WK
+q/wl3BcyGjK7Ytq35s9p02xbU5b12Lp9vmbIjrKDol17jwCMmPjtP4Ko2mve4qmvd/7eWrqtqJpe2cu
nl2VGT83N2H2vNdx4QsKk0MW1uWcWGo/++iya6sPL2eYU7m6vyJtk6i/3FbFiFvbPqcwHmA527qv6TTD
KBgFowAnAAD8A25N;
```

## Year 36

### size / speed : 27 / 64 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    INBOX
    COPYTO   [23]
    JUMPZ    b
    BUMPUP   23
    JUMP     a
b:
    COPYTO   22
c:
    INBOX
    JUMPZ    h
    COPYTO   20
    SUB      [22]
    JUMPZ    g
    JUMPN    e
d:
    COPYFROM [22]
    JUMPZ    i
    OUTBOX
    BUMPUP   22
    JUMP     d
e:
    COPYFROM 20
f:
    OUTBOX
    INBOX
    JUMPZ    j
    JUMP     f
g:
    COPYFROM 20
    OUTBOX
    BUMPUP   22
    SUB      23
    JUMPN    c
h:
i:
j:

DEFINE LABEL 20
eJyzZGBgYDIK8G4zaMpvM4iodzH8MbXOOGRVmZne3mLzzwfeW5Qd0rQ2OjDfbv4moFKGbXJGk+6qL2k/
ZCjbPNUpop7bLaASJJ4fwFOeHyC57qP/pRWPQy5VxYTzlE+LvFZ7OWpFV0hU4uYpUe4LL0Tr9Z+I4yhh
TThaeCDxaOGv5MnVP1LuNRuln1u6IV1r16e059s/pd3bqJ9xaQXIzBkFzgW38rtKb+Xfaz5bsvMIT+mC
B/wlEbcDi8sOgeQnFx3M8yyryqyoKU3bVFealtHEkPew5Vrt/NYl7Qqtr3tSm40m2VXZz2bAA4rXRqxN
2CK5jnNvyKo/B72XmB1pmvvlyM5pFodz+/4dWNHVsVexTWRnQqvc1oTW5xufd+pseN+/dc25pTtW/zj8
ffXJCyZrL13LW3/rTvLmxIdhO5Qe5R6XvGNw7NxlkNmr72d2b7yb2lFzM7WD4YZWj/tV6xknr4SsYr6u
tMX89oZ9iY/rTlx6ce4yx9XZd2eee/wInztHwSigFQAAzDa4RQ;

DEFINE LABEL 22
eJxzZmBg4NfN7evQD1nVob/3+Cm9iNs8eokPL+goPQJKMUhpZsYG6nxOAbHzA0qnmPrl9u30ed1j6/26
x8FLr5/Z8/OkfpfUbRedBa/1u8TcO+Oa+PC4++NH7wLW7J4S9bzzdOze7NOxatFToo46R0Xstb0XxuKs
EDY9QCFsQ5JUxPNOgRi9vSCzfyXHNH1Ke975KnPnNPm893vFC93Pz87/c0w+79IKkPyt/Ol1irk/pjIk
2Z9kTRC81hN7775/jOQdkFxPz5+srt7SNKcJ7xN1ZyyJVJ29JFJ23uu4mfOrMkUXhtRMXlg4cdqCySvn
zS3cXzRt+q19ExMf8vWoPWXrj7m3bYroTfm5AVfP7+K9zDAKRsEIBACEZ3mo;

DEFINE LABEL 23
eJxzZmBg2GTu7bHJXDLI0lS0ts54ydY/xrfuVJssePDFTPb+EY+jZ4FKGJo8uxbfC7OecSJuRdfhhGu1
7vFdpT6xRwvnhDflvw7kKNnpM72u1WNNL6f73pkn3QKWH/HI3VPrffDURv+QG6khSo/CIzOfu8e/fqGT
qfRodn7A1cBi+5O9JXp7z5bMXg8yP6xwfot44fu9kQWvd0UWRKwVLI6o7y79nAKSa67IjK2tep/4vca5
ILX52up7rfYnFVqbTi9vqjoKkjdc90hrwzprm8J1VZlb18g226zaeWTvSuczB1YcPHVgBUxNis7WNSv0
KldvMDm9RCvu8sKqTJD41QVlh9yX/Tgst7XtHMMoGAUjEAAAISp9uQ;
```

## Year 37

### size / speed : 8 / 63 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

a:
    INBOX
b:
    COPYTO   7
    COPYFROM [7]
    OUTBOX
    BUMPUP   7
    COPYFROM [7]
    JUMPN    a
    JUMP     b

DEFINE LABEL 7
eJzzZGBgOO+yIWmSc2rHdMdLK+7btZ2rt/z/HyjM0GTy/7+NydHfIDa3260GNo+Ypn9emd2lficXvQ60
P5kasvOTRnDZB4OAazdBas64rtixJnDFDhBbPu/WuqfZ09doZcVs2JC+YV9J2rnLJWkLHnxKS32yOnPJ
4wnFPw4fLY/Z4FjpvpCxcsMEntLPKYLFldaXigR9uktFa1vLX+9irDx5AWSW1eSQVQwTuxYf6zs6X6Db
ed6s9pBVsW1KW+Ta9PbKtf04LNFx9KxYZ9u5SV3OZ7p6rY/9m5i588M0jkXvphdOLJkqG/ptynvjz1Nj
QmLmLXkMMu//isKJu1cpbfm0dsEDy9X2J3+tWrFjx2rR1TobUjuWbprdOGO7YBVI3Zrj9ifXH2M4xTAK
RsEwBgCohI2l;
```

## Year 38

### size / speed : 28 / 213 (size challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    JUMP     d
a:
    COPYFROM 2
    JUMPZ    b
    OUTBOX
b:
    COPYFROM 4
    JUMPZ    c
    SUB      2
    OUTBOX
c:
    COPYFROM 0
    OUTBOX
d:
    COPYFROM 9
    COPYTO   2
    INBOX
    COPYTO   0
e:
    SUB      11
    JUMPN    f
    COPYTO   0
    BUMPUP   2
    COPYFROM 0
    JUMP     e
f:
    COPYFROM 2
    COPYTO   4
g:
    COPYFROM 0
    SUB      10
    JUMPN    a
    COPYTO   0
    BUMPUP   4
    JUMP     g

DEFINE LABEL 0
eJxzYGBgeGz6JEvAasJMI9uqM7Z2ci+NbJPvGNn6nJxml7Vih6N0g7Erc+4RL+6YJp87EV7+byLLgyMS
TUOnpz4PvZrpHV5QkhS5Yo18tOwx01jVGz7xBx8BjWSYnddfdjk7aZpidtYKxezs0055qjf88lVvpBQ+
v6xb07mKscF5ilVre4prW0e7a9vfBSvbTbZ19DTfm9y78eGPvoOPtk5IvgMyp36xU+G7uV1nbea+O7Rg
3ozVNxe/rTm36rE7SO7pmjbH3+sMfdk2aMVlb/y74PymFWvKNsksbtzcOMN+71aXxAO/zHMOvja7c7jc
YebRzx53Ty/vnHWWdfOeC2LXfc6duPjijM0JhlEwCkY4AABFln1a;

DEFINE LABEL 2
eJxTY2BgOOKlnH/EK7E43vH+wd/2Ny79to8+Nd2tom2np1Ohpg9z7tEg4TzNEKOCmWF3q2eG8S66E8J3
dHfkv8NArQw6OeUOOjlWTREZ19cvS9c97pgme6wlZeFekJx57rHuyIJj3c5lHe2nmtZVXG3uL5NocipM
a/ySDZKf18akvrJ9q8vKdu9lb1on7nnTOum+XovqjZrmmecYiADf2wKLvrf9XeDa5rw9oF1mcUdPR/v1
yUczWBdMc6pfrGn9ZImk1ful05w8ll3NVFtcOL1k0cK9mQuLdmUu/LaRGPNHwSgYCQAASqBjZQ;

DEFINE LABEL 4
eJwLYmBgmCx3t5pZkWVCjOKNS6sU/h1mVnzae0DpT22gxrI0KW2tOHf9oxn1Jpmtv8xFt7Baqt5gtQy5
HWzx/cp2S5+TQO0M6zweu/9xN/TtcZ3RUeYctTzLqetsvOPK84vsdY+D5Nc6FE5f7F44/VjU9q7PcZmt
nIk89SDxuyltjseTkqb9i590vz9W9YZWzMrzWjHRp0ByVcXHuguqrvVsadje9b0ts7W2m6e+o+dutX5P
QylInrcxP5CxIbCooCprRUGV83aQWP3sGR2Gc4KmFs9S2coyw+fkz2k2J9ymvTv0dqrJtgXTZBYfnNnR
bjP3bU3cgnUVNxevq3i/lKd+zfKvfYdX2pw4t2rl+XOr2K4dXtl1FmSW8ZZ0+xl7yx1mX9W0BvE5T9QH
JZ1oKH1+5NkG4YOT7q/f//8/SLxl3///3vvYfzKMglEwRAEAjliUoQ;

DEFINE LABEL 9
eJwTZ2BgEC886XYrv8tdPm96wNPs0rTVmZndqzMPzlHPnr4mOv/93sDiskNHy80PG9e936vQOn+TQPfJ
RUf6n3c6TeivONK/JdWrd37YtQ4ez+zGPzbba7aYN1dsMb9aWGfHMApGwSgY9AAA5Z8taA;

DEFINE LABEL 10
eJyTZGBg+Fl91FmyQKunLunkhZkRTT+BQgwt/c4F7X3uxRe7VnTNb03crNB68FRsW/+Vm+2iN4O6bt1h
mCh7f930kBuR85tOn1i6Zvf/FRFrq1cdnb935ese1uWzG/0Xe5e9m743u2aSfS7DKBgFo2DQAgDtlzN1
;

DEFINE LABEL 11
eJxTZ2BguOJUZzfLYXrABotzSytM9fYChRjmhNvnzgvT6rkXZjQpKsJ6hlA0y/ye2LYFrAks8/8m7Z25
OS2ifnMaR4lVilace/ytIIGY2cEx4c+jk0L1ElNDStNAZkwozk3gL2nK9y4NqWktX9HlWPm+f3vNhglr
GzK7E1plmyM6BKsmddXlTOoySpnecS9UsynA27D+rGdpbYC3ZMHBPIZRMApGAc0BAFChPw8;
```

### size / speed : 105 / 133 (speed challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    COPYFROM 11
    ADD      11
    ADD      11
    COPYTO   8
    COPYFROM 10
    ADD      10
    ADD      10
    COPYTO   7
    COPYFROM 9
    COPYTO   3
    BUMPUP   3
    BUMPUP   3
    BUMPUP   3
    ADD      3
    COPYTO   4
    ADD      3
    COPYTO   5
a:
b:
c:
    INBOX
    COPYTO   0
    SUB      10
    JUMPN    v
    ADD      10
    SUB      11
    JUMPN    n
    ADD      11
    SUB      8
    JUMPN    d
    SUB      8
    JUMPN    e
    SUB      8
    JUMPN    f
    COPYTO   0
    COPYFROM 5
    OUTBOX
    JUMP     m
d:
    COPYFROM 9
    JUMP     h
e:
    ADD      8
    COPYTO   0
    COPYFROM 3
    JUMP     g
f:
    ADD      8
    COPYTO   0
    COPYFROM 4
g:
h:
    COPYTO   2
    COPYFROM 0
    SUB      11
    JUMPN    j
    SUB      11
    JUMPN    i
    COPYTO   0
    BUMPUP   2
    BUMPUP   2
    JUMP     l
i:
    ADD      11
    COPYTO   0
    BUMPUP   2
    JUMP     k
j:
    ADD      11
    COPYTO   0
    COPYFROM 2
k:
l:
    OUTBOX
m:
n:
    COPYFROM 0
    SUB      7
    JUMPN    o
    SUB      7
    JUMPN    p
    SUB      7
    JUMPN    q
    COPYTO   0
    COPYFROM 5
    OUTBOX
    COPYFROM 0
    OUTBOX
    JUMP     b
o:
    COPYFROM 9
    JUMP     r
p:
    ADD      7
    COPYTO   0
    COPYFROM 3
    JUMP     s
q:
    ADD      7
    COPYTO   0
    COPYFROM 4
r:
s:
    COPYTO   1
    COPYFROM 0
    SUB      10
    JUMPN    u
    SUB      10
    JUMPN    t
    COPYTO   0
    BUMPUP   1
    BUMPUP   1
    OUTBOX
    COPYFROM 0
    OUTBOX
    JUMP     a
t:
    ADD      10
    COPYTO   0
    BUMPUP   1
u:
    COPYFROM 1
    OUTBOX
v:
    COPYFROM 0
    OUTBOX
    JUMP     c
```

## Year 39

### size / speed : 14 / 73 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    JUMP     b
a:
    ADD      15
    OUTBOX
    COPYFROM 12
    OUTBOX
b:
    COPYFROM 14
    COPYTO   12
    INBOX
c:
    SUB      15
    JUMPN    a
    COPYTO   13
    BUMPUP   12
    COPYFROM 13
    JUMP     c

DEFINE LABEL 12
eJzjZmBgOJ702cMxbW/YxgzmXNGsoKmiWZ2rFLPXz55YmhBQUHXb1LI2T+9By1ojBioB7aANb3QDb90B
sd3jRWsrU86VH5zwOi5ldmbs7XmlaTfm780OWbik/fLCW+umLdh7fN7c1CcL52Q+fzbr+dOsmQsevJt+
7jJIb3DR7MbgosdtMwo2TFidKbsRJKbcktCqO6NuFojNWCm7cX+l2vaGyojbIH5zxfPt81ufb49tMz+c
2sx7+WVjyI21Dddurq+/dnNTneA1avlvFIyCoQQArYNdTA;

DEFINE LABEL 13
eJzjYWBg8MuPsHPK01nilHdg/+y87NN++SvPixWp3tAtMb35oOb55avNXWcn907c86PPeTsDkaBvsfM8
EC3cpdjG19M0t6dHacu5bt7LGp3//4PEA5r+/9dsOvUPxN5aG3OPsZLhx/Eyjn+nSo/+Bomlz+K4oDRn
yeM18yHqR8EoGAW0AQDQ6DkY;
```

## Year 40

### size / speed : 25 / 499 (size challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  4
    COPYFROM 24
a:
    COPYTO   5
    COPYTO   2
    BUMPUP   5
    INBOX
    COPYTO   0
    COMMENT  0
b:
    BUMPUP   5
c:
    COPYFROM 24
    COPYTO   1
    COPYTO   2
    BUMPDN   0
    COMMENT  3
    JUMPZ    a
    BUMPUP   0
d:
    SUB      5
    COMMENT  1
    JUMPN    b
    COPYTO   2
    BUMPUP   1
    COPYFROM 2
    JUMPZ    e
    JUMP     d
e:
    COMMENT  2
    COPYFROM 5
    OUTBOX
    COPYFROM 1
    COPYTO   0
    JUMP     c

DEFINE COMMENT 0
eJyrZmBgaOMNmqrLG1ikyzujYxLf+tmT+Ip23ecV3dLGe25uG++1Hgu+zNYowYKSQmGnwnZRp8Lv4gUl
aVJ3q1VktnfVyhxfd1paZWuh9IyOazJ/agMV+ssklQtKOlX7ywI1/tSyaL6dv02zcuU2zYV7gVYx7HBk
zv1t/yTLyPZJ1mEr5lxbs4ZSNZNrPfUmvItszSpXbrfcsbbbdsfaRfZZK3Y47p+T5eQ8Jcupv0zQyarp
sNPyTmPX/XMWu1euXOcxYzXIvDsh88tnhj3t9Q7PWvEpTHQLSCwnaJoTiFZINtm2O7Fxxu7EwKLdiVZN
eUnXevKSKtq0U/rLHNOcCjdmKOdfzjYqMM9NLJ6dd7eaoWB5J3ehylaQXqve/XM6elgm1Hb/Mpfs2qII
Ersx+2iGzdxlaUHzl6VtX3A049DCJ1k3F/eXGS152nt2UdK07QsWzKqfvWDWz2kiE92mHeueMrW/7Oc0
p8Izs45mgPRnb9SKm7FVKvb27owk731Psv7ucyoM21/R1rvnaa/m7q99dltFJq5dzzLBbu32LqM1Xs03
VwcW2a39ks22YVs6SH//Gebc5Avey45ffLbh+EWbE5WX2K6BxM3OVCS3nN4b1n9mbWjL5b1hEde5Y/Jv
ZiRdviWcJ3ZzXcXLK9qNXBesmhhGwSjAAgDrhtxG;

DEFINE COMMENT 1
eJxrYWBgSOVKmsbN9bZmOceyNG4ur+aT3CwTxLmPdYtzOxWe5L6aWc2zLK2Nd3pqqlB7ylWRJ1nfxe9W
80ot79wvVTgdqJ3htPL01EANrTgpbanYqXpSsSyGEYklxsy5aiY89WomkS3bDWd0dOke6+bXOtb9Vm1G
xwGlgpIDSkcz6lTaU0D6Dzvtq2RzvBMBYhu7asUtsueOUbeRigXxZZxFJso4n60CsZtjpqeKRB3N4IgU
zlsf0V+2PuJP7cXor30+8caTkxJZJogmbe/KS2oo5UxkzuVMXJZWmTy/fGPG016Q3nltE2ZatR7rbm85
WyXRND11S0NCwJaGrS56LbdNeTvnGqp0zzV82xthB1L7pvVohn/9sjQQm3/mtvTOKcvSiicJ552ZZNXU
OeVY9+rpzlOkZjlPMZzztc9mbmarzdz+MsM5RgWGc+aX28y9W12yaEaH0RKRibZLjSeDzHi6paJt7fqO
dqM1Vk3qq3nqs1YmFmetXJZ2c7VnwqJ13DFsG7hjZmy9mvlxq3AeSP3zI29rtA63p2gd/h0F4m847pkQ
tj8iEcSuvDQvhOtGfqDO7TeRznevZjrfTSy+fMuqKflGR/uEKxVtohfvVoefdyrceD4isfKSZTxID8+L
htKo5+0pc5/2BfO8UM4veDm//ORL7Ubxl0+ylF9FJFq+eRO58t3a0Iefz4YzjIIRBwDTMtna;

DEFINE COMMENT 2
eJwLYWBg8LRfuNfW7tmGTCvL+EwrJZ9z1ltdbO0i7LKcJK1uuUTYhXokBACVMax1eNrraf+1D8TOjeKp
T4q8W70k/GyVcNDZqj/+f2qf+Wa2nvcWmSjr/Xb+eW/rpV7+x9cJBz3b8Dz0+vq/4Z2rdkfyLjoWNaPj
WFTSNMe4bxtB5twvWbEmpfDZhpe5zzZUZR9fl5xZuXJ22v45/anGk/tTM1sd03jqN2Y0lFZlBxbNzgss
Wp6fWJxf9KcWpDe64/r6gPaCEhD7YY90Q02zdINLnVUTiM8/8271jdmJxawLjArqFxeULFz2tkZw5YyO
wyuNJ7OuuDfPY5n10vrFM1b/nHd8ndrs4+tYZlSuXDCNd5HbNJYJq6ffrZaata4CZI7d1uPrjLcUTjfe
sq+ycXNgEUjszzaWCX+2XesR2unVrLn7T23Y/vnliQfWVew6cLeaYRSMgiEGAJZmmJs;

DEFINE COMMENT 3
eJxzZmBg6LbdV7ndcn65oem6ikNGd6uDDLya3+ktmLVAX2ZxrGHnqnqTZxs8zEW3nLMW3WJrt2Ptb3vr
pTscj3UfdrriVua81BloBMNHP6umP/7ajcJB+yqbQvrLRKL6y+7EnK36HJfZ6hNfOP1FrMzi3KgVa9ZH
HF+XGHh8nZf/ijW3ff4uaPJRnvTMd0bH+gCeerngtzUgs05k3ZuXl3Wtpyq7oORytnSDYvbxdYrZfxdc
zg6a6pRn1RRZcLf6a9m+Sp5KnnrxqsxW8aoda0H60joLpzNPKJwuOelaj+Qkr+atE+5W13YnFvN2FpSs
bJ9frtfi1azcbDxZuXn/nO9tK9akdV5fv3XCsw2Sk66vr5s8YzXDKBgFIxAAAIdFfOU;

DEFINE COMMENT 4
eJzzZWBgaI4JlzYNvazs5R+v2+hyxPWwk6HvDsc7ETscPRNuuQjn2fvdrd4dOaPjYvS1Hse4pGkvYvfP
uRjNu+hTWNaKmzbnDwCNYLiXsyytNae/7ETWse7kzKRpGzNkFv9PvzcPJFeVzWWpkxNhB2KLV/2Ocm37
HfWwxzNhVX97Ct/EL9l8E40K5vedrZrc+rXPpW797H2VWStWtleunN/3bAPzhGcbfvStWAPSy9uYWKzc
fLbqQGdmK9/ExhmSkxbMSp8YNDVmgvFkkPyCeSIT6xeLTBRc+bQ3e+fbmiX7Cko4DjzJWrIvIvHozrWh
dlvzA0PWO/odXuno57EsP7B+8d4w1gXtKQvmGRW4z5Nu+Dlvwayzi5p2v1/Kd3THiuhTsptWni/fVXWm
/JDsMc4TB/ZrnU7e2X9GdAvDKBgFwwgAANjPkUE;

DEFINE LABEL 0
eJyTYGBgmOE3cc8Mv+1di/3f1oQGGPruCpS0Eg5S1ARKMQgHzQuRCzb0rYi+beoTv9boS9oe49YcC5vZ
eVtd/PIfuzMUrA1lKLia6ZR3bu6EXOulE3KfbWjNmbinNUf2mE7Ou0MMo2AUjIJBDQDCnydN;

DEFINE LABEL 1
eJzTZ2BgWOwetfyDW9I0T/f+sqeue8OAQgye7l+yZb09E+z9fkeFBtyJkAu+EzEzjDsmLKIi+ViUdqN8
tM4SkDrfdLmXE3I37NtbqDyJp9Iy/kGNh61/vYP2/sYlCjXNP0WUm08LFjZxioHUWk998MRgitj1zikb
9vFNfNq7dUJg0fw+7pgffXciiiflB/6c5ugnNcvRz31efqDa4jeR05ZWJP9aFli0cFlma/1ikYmZC52n
/JwXNHXbjKCpj6awTGAYBaNgFFAMAGxnUHc;

DEFINE LABEL 2
eJwLYGBgCJDwXuYirjzptdjd6u/i19evlJgw87S0VdND2bc1Kirzy6eo7atcpWHVtE3za982zXvzDmpV
rgRqY9BwmTDzvPO+ykYX48l2bjKL7dw6Vz11dZ7C7mnVVOb9p3ax/9kqueCKtqYQmcV3QrZ39YVGtuRG
ravwie8v250o3XApOWsFyJzZefPLq4qdCr+WORXyVDaUnqx6W3OlOrO1utp5ysmqCTNflcosZih4O392
3v45OjnKky5nWzXNzltXEVkwvxykv6NHOT+6w6jgavPd6qvNma0PWownu7YtmHW6y3qpfo/3sh993sv4
JvIuOjDx3NziSW9rtk6ISIyZoKgJ0vt0zYMn6qvvH2xYrZxvtOZLdvyGoxmNm49m/Nn2JTt7p1FB7x6r
pt49He2au7/2se9wntK4uXA624bC6TdXG09+ukZ5EsMQBg1b7HPdNkXUJ2/e22S3Va/fe4/kdJB402l3
ceXTt1RST8mqK5/ea3vk1ApXtlM8nkdOWQfPP6MWHXt2Z8bD0035889E1Eufu9csfDFmpuu1+bN33rKe
IXH72hSQGfsPuMfsP/Ao4uehg+EvTxwMVz7NEmVwSS26/HZMyMD6ehSgAwD0j9Bf;

DEFINE LABEL 5
eJwTZGBgWJ6fffpLXtEup7yIxAm5fcFOeQ7aKYVM6vdLmNSvVJ8x+VZX7hDV8NmDt1Eq1r9+emp7zZds
xorAovslicX5RU6FDKNgFIyCIQsAlI0cfw;

DEFINE LABEL 24
eJyTZWBgWJYe2fIlzajgS1pF8rJ0qVjF7AB/i9LXZuJVeXpz6/L0JrfeNj3QOc1Jv8fQ90ff0YwffbyL
JLtsTri27bgwqdb0JmOF6c38IrZrfvkrz+vk/DvMlbljLVdm4fQ9mTM6TmRZNQGtYPiSd339lgajggOd
a0MZRsEoGAWDBgAAeKs0fA;
```

### size / speed : 52 / 150 (speed challenge)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
    COPYFROM 24
    COPYTO   2
    BUMPUP   2
    BUMPUP   2
    COPYTO   4
    COPYTO   6
    COPYTO   8
    COPYTO   10
    COPYTO   12
    COPYTO   14
    COPYTO   16
    COPYTO   18
    COPYTO   20
    COPYTO   3
    BUMPUP   3
    COPYTO   9
    COPYTO   15
    ADD      2
    COPYTO   5
    ADD      2
    COPYTO   7
    ADD      2
    ADD      2
    COPYTO   11
    ADD      2
    COPYTO   13
    ADD      2
    ADD      2
    COPYTO   17
    ADD      2
    COPYTO   19
    JUMP     b
a:
    COPYTO   1
    COPYFROM 0
    OUTBOX
b:
    INBOX
    COPYTO   1
c:
    COPYFROM 1
    COPYTO   0
    SUB      [0]
    JUMPZ    a
    COPYFROM [0]
    COPYTO   23
    OUTBOX
    COPYFROM 24
    COPYTO   1
d:
    BUMPUP   1
    COPYFROM 0
    SUB      23
    JUMPZ    c
    COPYTO   0
    JUMP     d

DEFINE COMMENT 0
eJxLZ2BguOWSbs9qmR9YYswdE2SwLX21wZfss8YNpdleIhNNfBfMeub7dr69n8ziXt/KlZ72TbsfqX6/
AtTG0BTSX9YU4r1sVyDbtV2B/58JB5nelAuGyDmEzS/PS+ovM0vdV+mYxlPvmPa091Ly+tn9sZ2rwiK+
bQSpyS9KmsZY4Txlbt2xbv/6GR3f6iJb9lWuq5hT1l+2t7C/7EvevkqdnGs9l7PvzWvN0VnilJe1QrH4
+Lrq6m8beRu/bWxvOb4OZM7K9ms9aZ3Xeqx6O9pX9Vs1dU5xKrw+uT3lzKSIROYJWnGSXZ4J39uOZkxu
NSp40LKuwqr1ae+b1qCpvJ28i053RS1/2NO5SnLS8XWxM66vXzCvc1XJIuul9Yvfzq9fPGGm2uKgqZkL
jSeD7DHZ45nQtFsqVmjnm8hbm+9ElG36HSW00TI+ayVz7rSl0g3Tlm7vWrPceLL66gWzpq/dP+f3uv1z
ZDc5T2HfYVSQeMBcUu7QHL4l+xQ12XcsS3u6JWna0y1ZK+y27ljrte36eqGdzzYcPZi1IvfkvXkVp9bP
Tjohs5hhFIwCOgAA+6PH3A;

DEFINE LABEL 0
eJwLYGBgULGVDHpuvSFJzebWumTb3D3RDs5npju6nxd0YTl7xrXuBFAJwzz1prmXtKumf/Nd0n47PKF1
X1JEPUhcKqJpblTEyUUn4niX1iS7L3ybsXfm/dzCiSJFj9suFc1uvFQkWitSFFApXuhdNju/q3RZtmht
T+zs9QIx7/cKxPw47BNrf9Iloem0eWrT6fPFZYe21i7Z+rJRcMXypqa5GU1bJoPseNOQ0GpZs2HfrurM
nT+rA5YX1yW0Zje6Fyu07syIbTNLF+he0t40IXdP04Sj820nqXV+ntpWBNL3YE5A5cI5LPNj5mXuvLqA
5ey0BTuPgMQrV3OUmKxVbPu6JnXb/xXmHw8vj7jNtAIi937dhqTsDWvin256HSe5/XUc3+4NSR17d2Y4
HDhZUnvwdc/+A39muO3jWCSy89rq4rWJmxmQwKWdhckzthcmL9r8J2vt+q7SwnXT6zI3ruiK2P6888zu
hNZD+0Vrtx+uygSpXXP8UcSWI2qdpUdEawuOHczTOJmbMP/MvVCJ8xGBvpcnV3NcNZvKem1FF0jtygeC
PkZ357cY3S2c+OHuwTm6990XZj7oWrzsofvCCS8Lk0Fqei5vSV19/3Vc36vM2Ib3r+Me/vqTxTAKRgER
AAAtq+R3;

DEFINE LABEL 1
eJwrZGBg4BYP8PYV43ALFf5j84R3i3kWd6lFKfte2z8sAd57WK75V7HeCtrEoRixnCc1KlYgNWqKcEL4
OdHpAbxik30niswOVuAvnTKf/9a6IJGuxVrKzzuBRjKkqF7zT1eZHaylnJugpbw3+4FaV6m4lncZvy5L
Ybfe3uyjBs+jWQynB7gZcJS4GEbUNxgJVoH0qdhKBmlazw/TscqMfWO5JTXbqipzqY1zQaw9S6G0w8G8
i84rYs673AoKcBH1F3YO8VtqExMC0jctstRiXpiz07Pg2cGvA62zXgeeK38ZNL1OOXR+i0KYYtu1yITW
vhjJhhNx/RUc8c4FID1sHksiJ0Y/irBPmh8G4l8vcHcNLI4J4SmtygTxo/NFFYOLFmuD2Ksat6Tea1WL
vtYxPeBaR5f7vVYGh+zGOrv19Ued91btzKitaiv6U9VfsbV2et2dNskG5gnnyn9POloI0ls1OcTv96T5
YVaTS9N2Tn4UsXEag8PrGZ/Nls0qNJWfa2QWM29nRuT8gErxBe7FIPWLNmsZaG4U9EnbZJb+aDNHyZ2t
ITUztkfUH9rflA+S71t8LzRv/ezgh6dvBSmfTghnGAWjgAIAANHyrag;

DEFINE LABEL 23
eJyTYGBg6IvpcueKmx3skqDYdjjh+fZj8bL3GeL+/wdKMcyJ/v8/KPr1CxD7V3KdXVq2lsGE4nvqHWXz
NQ5VqOla1jg7fa+JCdle8zllb5V78fGy2Y3XC973/0o+OCcmvGsxAxrw6LsXGtB9LzSi41GEZtOGpE11
7sVbax+3GdZnds9v3TDBacKa3n8TtXq2TL3XvG66aO2aGe7Fa2bszHg3/X0iw8SE8GN9CeHoZo6CUTAK
yAcAydBPLQ;

DEFINE LABEL 24
eJyTYGBg+Fn93ri2ysisobLSmrNsdvD54qrMq4UbJlwtdF84oXjJ1u7S93vdyrccrK36cbi4bsvBe62z
11/pbJp7pketk6OPp5yj73MKX4+o/5XOo85R7dY2y5sKTTfVbTBpqNxizjAKRsEoGNQAAB3tLws;
```

## Year 41

### size / speed : 34 / 695 (both challenges)

```
-- HUMAN RESOURCE MACHINE PROGRAM --

    COMMENT  0
a:
    COPYFROM 24
    COPYTO   20
    INBOX
    COPYTO   [20]
b:
c:
    BUMPUP   20
    INBOX
    JUMPZ    f
    COPYTO   [20]
    COPYTO   23
    COPYFROM 20
    COPYTO   22
    COPYTO   21
d:
    BUMPDN   21
    COPYFROM [22]
    SUB      [21]
    JUMPN    e
    JUMP     b
e:
    COPYFROM [22]
    COPYTO   23
    COPYFROM [21]
    COPYTO   [22]
    COPYFROM 23
    COPYTO   [21]
    BUMPDN   22
    JUMPZ    c
    JUMP     d
f:
    COPYTO   [20]
    COPYFROM 24
    COPYTO   20
g:
    COPYFROM [20]
    JUMPZ    a
    OUTBOX
    BUMPUP   20
    JUMP     g

DEFINE COMMENT 0
eJxzZGBgWG1goCVg5Oj3Tm/BrOs6ztvPaItdP6PddXa1AcuEx6bK+R7mVzMPW01PtbWbnrrW4Uv2Dsd1
FTsct3f9tr83r9v2+vou05nnthu63AIaxTDDb3uXpk/lSk0fk23PfJt2JwYu3Ps8NHnnxejOVf/ij3X/
i69o84m3ajoWNb/cO7yh9KNfQ6ms97oKkF6/8s8er0oTAjYVZLb65TfO8Mtn3ZxS2LRbt2Th3lelC/fy
VKpsBalTSI5sSc6MbGlvmV8O4rv1bXWZ3/e25m2v8qSOHuulkl3JOyW7WDdf6+ZdNL/vae+Cacr5j+dM
Tz20MCNp2tLE4vgV5+bGr1h5fs3yH9+fLLn5lWEUjIIRDAB5AnpS;

DEFINE LABEL 20
eJwTYmBgWBlUmJweXJr2IFSyISTq8wGf2P4rQtFmU6dElaYFRecmcMUtiWRKXBFTmWKWbpLWVrQgd8WO
2fl1J4KLBK+JF/Zfkc/7c4yBSmB/ZcgNx8ruiyB2boN9rl3Vii6VnKqjhem37jgl/vhISL/FlJgm4a7p
a+61vt6V3eh+nlruGgWjYLgCADB0NiI;

DEFINE LABEL 21
eJzjZGBgYPPYm93k6b7Q1cP9fKvHucsHPSdfBwozMHrpGdd6W9swjIJRMAqGLQAA73YLow;

DEFINE LABEL 22
eJyTYmBgUFepmq6q+mdGolrbAnn16WvmqVt/AQozTNMK8AbRW814l9636192xrVrcV+M2dS2eKNJ7vF6
/SC5nz57s58FX7r2MijkBojvWBnix1gZ0+Rc4b6wuaL74v9Kvde1Vf//M4yCUTAKBiUAAEEFKLE;

DEFINE LABEL 23
eJzzZGBgiLUPqEyzOVfOYqjYdlWravoNzYNzZmieXCSuJbhCSGf6mgajxM2fzJdsPe/y+cBJt51HAlw4
Lmhax9w7YLTiGVA7g2pIW1F68PPO5cE/pi4JaVsQE/54y4XoH4e54vT2Hk6I2ZCXIdv8KnN+y9XCqqPn
i1nO8pQePctZ5nymtXzLwb1VB+dsr5nd+L2mrQhk1sEJn1MOThCsaulf09vfHbBcri3g6r1Wn0sSHfM3
cfc+bgOpqZmUGlUy1blAY9bJRTHz3u/lX3zucsjCptM35u89DpLXnbFkq+rsW+ual7ctAPFvbXufeGtb
V6nc1oNz5m79cyx5s9r2pZsEV4DkePYEeB/af9bz5QnJoMenEsIfns5NeHjaOmvViWu1747Nb3HbZzSJ
YRSMgmEMALfhjp4;

DEFINE LABEL 24
eJwTYWBg2JxmlFKWOrm6LFWvPy/j3katrBU75PMK9/OXFO53rsjcubdq9vpd1V2LLWsKJ1pXT69jqShM
Fiy+FTQ376TbtlQGh7qkJkf3eFF/oei92QyjYBSMgiEFAGOuIgc;
```