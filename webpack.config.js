module.exports = ({NODE_ENV = ''} = {})=> {
    switch (NODE_ENV) {
        case 'product':
            return require('./config/wp.prod')
        case 'test':
            return require('./config/wp.test')
        default:
            return require('./config/wp.dev')
    }
}