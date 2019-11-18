interface Box {
  w: number
  h: number
  d: number
}

const canStackBox = (bottom: Box, top: Box) =>
  bottom.w > top.w && bottom.h > top.h && bottom.d > top.d

function stackBoxes(boxes: Box[]): number {
  boxes.sort((a, b) => b.d - a.d)
  let maxHeight = 0

  for (let i = 0; i < boxes.length; i++) {
    const height = stackBoxes2(boxes, i)
    maxHeight = Math.max(height, maxHeight)
  }

  return maxHeight
}

function stackBoxes2(boxes: Box[], bottomIndex: number): number {
  const bottom = boxes[bottomIndex]
  let maxHeight = 0

  for (let i = bottomIndex + 1; i < boxes.length; i++) {
    if (canStackBox(bottom, boxes[i])) {
      const height = stackBoxes2(boxes, i)
      maxHeight = Math.max(height, maxHeight)
    }
  }

  maxHeight += bottom.h
  return maxHeight
}

const boxes = [
  { w: 10, h: 10, d: 10 },
  { w: 40, h: 40, d: 40 },
  { w: 30, h: 30, d: 30 },
  { w: 50, h: 50, d: 50 },
  { w: 20, h: 20, d: 20 }
]

console.log(stackBoxes(boxes))
