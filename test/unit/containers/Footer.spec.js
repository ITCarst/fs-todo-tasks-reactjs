import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from '../../../client/js/containers/Footer';

describe('Footer Container', () => {
	let FooterContainer, mockStore, props;

	beforeEach(() => {
		mockStore = createStore(() => {});
		props = {
			width: 0
		};
		FooterContainer = shallow(<Provider store={mockStore} ><Footer /></Provider>);
	});

	it('should be rendered', () => {
		expect(FooterContainer).to.have.length(1);
		expect(FooterContainer.find(Footer).length).to.equal(1);
  	});

});