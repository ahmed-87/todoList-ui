import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import About from '../../../Body/About';
import { storeFactory } from '../../testUtil';

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('About Component Test', () => {

    it('Should display \'About\' content when a user is signed in', () => {
        let store = storeFactory({state: {}});
        let props = {user: {isSignedIn: true}, store: store};
        let wrapper = shallow(<About {...props} />)

        expect(wrapper.exists()).toBeTruthy();

        let message = wrapper.dive().dive().text();
        expect(message).toEqual('About ToDo')
    })

    it('Should display a message inside \'About\' when a user is NOT signed in', () => {
        let store = storeFactory({state: {}});
        let props = {user: {isSignedIn: false}, store: store};
        let wrapper = shallow(<About {...props} />)

        expect(wrapper.exists()).toBeTruthy();

        let message = wrapper.dive().dive().text();
        expect(message).toEqual('You Can not access this content, please login by clicking Sign In on the top right');
    })
});