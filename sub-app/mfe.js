import Vue from "vue"

export function addProps(props) {
  // We'll get the props object here. We can inject it into this.$ by using Vue.prototype
  if (props.sdk) Vue.prototype.$sdk = props.sdk
}

export default function (render) {
  if (!window.__POWERED_BY_QIANKUN__) {
    render()
  }
}

export function bootstrap(test) {
  console.warn(test)
}

export function mount(render, props) {
  console.warn(props)
  addProps(props) // Prevents components from not receiving props.
}

export async function update() {}

export function mounted(instance, props) {
  addProps(props)
}

export function beforeUnmount(instance, props) {
  console.log(instance)
  console.warn(props)
}
export function unmount(instance) {
  console.log(instance)
}
