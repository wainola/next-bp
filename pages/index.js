import Head from './head'

if(process.env.NODE_ENV !== 'test'){
    require('./styles.scss')
}

export const Home = () => (
    <div className='main-content'>
        <Head />
        <h1 className='main-title'>Hello World Jest NB!</h1>
    </div>
)

export default Home;