let dragging = false
splitHandle.addEventListener("mousedown", onDragStart)

function onDragStart() {
  dragging = true
  document.body.addEventListener("mousemove", onDragging)
  document.body.addEventListener("mouseup", onDragEnd)
}

function onDragging(event) {
  if (dragging) {
    leftPane.style.flexBasis = event.clientX + "px"
  } else {
    onDragEnd()
  }
}

function onDragEnd() {
  dragging = false
  document.body.removeEventListener("mouseup", onDragEnd)
  splitHandle.removeEventListener("mousemove", onDragging)
}
