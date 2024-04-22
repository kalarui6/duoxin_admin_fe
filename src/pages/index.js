import Home from '@src/biz/home'
import createServerProps from '@src/createServerProps';
import Store from '@src/biz/home/store'

export default Home;
const getServerSideProps = createServerProps(Store);
export {getServerSideProps};