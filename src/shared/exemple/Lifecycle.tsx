import React from 'react'

interface ILifecycleProps {
    someProp: number;
}

interface ILifecycleState {
    stateField: number;
    isMounted: boolean;
    hasError: boolean
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
    constructor(props: ILifecycleProps) {
        super(props);

        this.state = {stateField: 0, isMounted: false, hasError: false}
        // this.handleClick = this.handleClick.bind(this)
    }

    static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
        return {stateField: props.someProp}
    } // вызывается перед render как при mount, так и при обновлении, каждый раз когда происходит ререндер

    static getDerivedStateFromError(error: Error) {
        return {hasError: true}
    }


    // если состояние или пропы были изменены то компонент будет обновлен
    // не использовать при PureComponent
    public shouldComponentUpdate(
        nextProps: Readonly<ILifecycleProps>,
        nextState: Readonly<ILifecycleState>,
        nextContext: any): boolean {
        return this.state != nextState || this.props != nextProps
    }

    public getSnapshotBeforeUpdate(
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>
    ): any | null {
        return 1234;
    }

    public componentDidUpdate(
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>,
        snapshot?: any
    ) {
        if (snapshot > 1000) {
            this.setState({})
        }
    }

    public render() {
        if (this.state.hasError){
            return <div>Error</div>
        }
        return <div onClick={this.handleClick}>1</div>
    }

    private handleClick = () => {
        this.setState({stateField: 1})
    }

    public componentDidMount() { //запускается после того как эдемент встроен в DOM дерево
        document.addEventListener('resize', () => {
        })
        setTimeout(() => {
        }, 0)
        this.setState({isMounted: true})
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    }

    public componentWillUnmount() { // срабатывает перед удалением элемента
        document.removeEventListener('resize', () => {
        })

    }
}