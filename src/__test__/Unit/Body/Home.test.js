import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Home from '../../../Body/Home';
import { storeFactory } from '../../testUtil';

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('Home Component Test', () => {

    it('Should display \'Home\' content when a user is signed in', () => {
        let store = storeFactory({state: {}});
        let props = {user: {isSignedIn: true, profile: {userId: 1}}, store: store};
        let wrapper = shallow(<Home {...props} />)

        expect(wrapper.exists()).toBeTruthy();

        let message = wrapper.text();
        expect(message).toEqual('');
    })

    it('Should display a message inside \'Home\' when a user is NOT signed in', () => {
        let store = storeFactory({state: {}});
        let props = {user: {isSignedIn: false, profile: {userId: 1}}, store: store};
        let wrapper = shallow(<Home {...props} />)

        expect(wrapper.exists()).toBeTruthy();
        console.log(wrapper.text())
        let message = wrapper.text();
        expect(message).toEqual('You can not access your todo list, please login by clicking Sign In on the top right.');
    })
});