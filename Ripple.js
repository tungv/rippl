import React from "react";
import ReactDOM from "react-dom";

class Ripple extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: false, start: false };
    this.ref = React.createRef();
    this.timers = [];

    this.buildRipple = () => {
      const rect = this.ref.current.getBoundingClientRect();
      const containerStyle = {
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        overflow: "hidden"
      };

      if (this.state.start) {
        containerStyle.mouseEvent = "none";
      }

      const size = Math.max(rect.width, rect.height);

      const defaultRippleStyle = {
        width: 35,
        height: 35,
        background: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        left: this.state.x - rect.left,
        top: this.state.y - rect.top,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        borderRadius: "50%",
        transition: "all 300ms linear"
      };

      const rippleStyle = {
        ...defaultRippleStyle,
        opacity: 0,
        transform: "translate(-50%, -50%)",
        width: size * 2,
        height: size * 2
      };

      return (
        <div style={containerStyle}>
          <div style={this.state.start ? rippleStyle : defaultRippleStyle} />
        </div>
      );
    };
  }

  componentWillUnmount() {
    this.timers.forEach(timer => {
      clearTimeout(timer);
    });
  }

  render() {
    const {
      props: { children, disabled = false, onClick },
      state: { active }
    } = this;

    const onlyChild = React.Children.only(children);

    return disabled ? (
      onlyChild
    ) : (
      <React.Fragment>
        {React.cloneElement(onlyChild, {
          ref: this.ref,
          style: Object.assign({}, onlyChild.props.style || {}, {
            cursor: "pointer"
          }),
          onClick: e => {
            const { pageX: x, pageY: y } = e;

            this.timers.push(
              setTimeout(() => {
                this.setState({ active: true, x, y });
                this.timers.push(
                  setTimeout(() => {
                    this.setState({ active: false, start: false });
                    this.timers.length = 0;
                  }, 300)
                );

                Promise.resolve().then(() => {
                  this.setState({ start: true });
                });
              }, 100) // avoid instant unmount
            );

            if (typeof onClick === "function") {
              onClick(e);
            }
            if (typeof onlyChild.props.onClick === "function") {
              onlyChild.props.onClick(e);
            }
          }
        })}
        {active && ReactDOM.createPortal(this.buildRipple(), document.body)}
      </React.Fragment>
    );
  }
}

export default Ripple;
