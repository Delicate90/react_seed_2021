

const unState = function(props) {
    const [foo, setFoo] = useState('123');
    const mounted = useEffect(()=>{
        return foo === '3'
    }, [foo === '321'])
    use
    return <div>123</div>
};

class state extends React.Component{
    constructor() {
        super();
    }

    state = {
        data : []
    };

    componentDidMount() {

    }

    load = async () => {
        const res = await fetch('api');
        this.setState({data: res})
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        );
    }
}


const vue = {
    data: {
        data: []
    },
    mehtod: {
        load: ()=> {
            this.data = res
        }
    }
}