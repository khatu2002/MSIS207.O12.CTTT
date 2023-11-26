import * as React from "react";
class MySection extends React.Component {
    render() {
        return (
            <section>
                <h2> My section</h2>
                {this.props.children}
            </section>
        );
    }
}
export default MySection;