import React from "react";

class Temp extends React.Component { // render всегда

}
interface Inter {
    name: string
}

class Teemp extends React.PureComponent<{}, Inter> { // render только при изменении
    state: Readonly<Inter> = { name: 'Igor'}
    // constructor(props: {}) {
    //     super(props);
    //     this.state = { name: 'John'}
    // }
}

function Teeemp() { // render всегда
    return <div>

    </div>
}

const Word = React.memo( // render только при изменении
    function StarWarsWordComponent() {
        return <div>

        </div>
    }
)
