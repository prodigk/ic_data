import mitt from 'mitt'

const emitter = mitt()

export const BUS = {
  $on: emitter.on,
  $off: emitter.off,
  $emit: emitter.emit
}
