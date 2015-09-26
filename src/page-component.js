import React from 'react'

export default React.createClass({
  displayName: 'PageComponent',

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1><a href="/">AnsalonItems</a></h1>
          </div>
        </header>
        <section>
          <div className="container">
            {this.props.children}
          </div>
        </section>
        <footer>
          <div className="container">
            &copy; 2015 Jason Rose. All item content is from <a href="http://ansalonmud.net">AnsalonMUD</a>.
          </div>
        </footer>
      </div>
    )
  }
})
