class Component {
  /** function constructor gets object keys
  *
  * @name constructor
  *
  * @param props, (type object).  
  */
  //  Д3 - протестировать вызов рендера который вызывается при изменении пропсов
  constructor(props) {
    this.render();
    this.props = {
      children: null,
    } 
    Object.assign(this.props, props)
    // Object.defineProperty(this.props, '_outerProps', {
    //   set: function(propsObj) {
    //     Object.assign(this.props, propsObj)
    //   }
    // })
  }
  render() {
    return "<div></div>"
  }
  // test() {
  //   this.render();
  // }
}
class SomeComponent extends Component {
  render() {
    return "childRender"
  }
}
export { Component }