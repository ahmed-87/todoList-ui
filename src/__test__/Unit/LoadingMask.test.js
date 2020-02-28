import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import LoadingMask from '../../LoadingMask';


Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('Loading Mask Unit Test', () => {

    let wrapper = null;
    // beforeAll(() => {
    //     wrapper
    // })

    it('Should show Loading Mask when isLoading value is \'true\'', () => {
        let props = {isLoading: true, message: 'Loading'};
        let wrapper = shallow(<LoadingMask {...props} />);
        

        let loaderWrapper = wrapper.find('Dimmer').at(0);
        expect(loaderWrapper.exists()).toBeTruthy();

        let message = loaderWrapper.find('Loader');
        let isActive = loaderWrapper.prop('active');

        expect(message.dive().text()).toEqual('Loading');
        expect(isActive).toEqual(true);
    })

    it('Should hide Loading Mask when isLoading value is \'false\'', () => {
        let props = {isLoading: false};
        let wrapper = shallow(<LoadingMask {...props} />);
 
        let loaderWrapper = wrapper.find('Dimmer').at(0);
        expect(loaderWrapper.exists()).toBeFalsy();

    })

    it('Should hide Loading Mask when isLoading value is \'null\' or undefined', () => {
        let wrapper = shallow(<LoadingMask  />);
 
        let loaderWrapper = wrapper.find('Dimmer').at(0);
        expect(loaderWrapper.exists()).toBeFalsy();
    })
})