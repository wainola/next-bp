const React = require('react')
const { shallow } = require('enzyme')

const { Home } = require('../../pages/index')

describe('<Home />', () => {
    it('it should render', () => {
        const component = shallow(<Home />)

        expect(component).toMatchSnapshot();
    })
})