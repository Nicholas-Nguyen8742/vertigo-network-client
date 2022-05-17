import "./Hero.scss"
import React, { Component } from 'react';
import NET from 'vanta/dist/vanta.net.min';


class Hero extends Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = NET({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 300.00,
        minWidth: 100.00,
        scale: 2.00,
        scaleMobile: 1.0,
        color: 0xebc411,
        backgroundColor: 0x0,
        points: 20.00,
        maxDistance: 25.00,
        spacing: 20.00
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
      return (
        <section className="hero" ref={this.vantaRef}>
            <h2 className="hero__tagline">Join the Network</h2>
        </section>
      )
    }
  }

export default Hero;