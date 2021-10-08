import React, { Component } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import APIURL from '../helpers/environment';

type state = {
    brand: string,
    profile: string,
    shape: string,
    wrapper: string,
    origin: string,
    rating: number,
};

type props = {
	token: string;
	getProducts: () => void;
	createOn: () => void;
	createOff: () => void;
};

export default class NewCigar extends Component<props, state> {
	constructor(props: props) {
		super(props);
		this.state = {
            brand: '',
            profile: '',
            shape: '',
            wrapper: '',
            origin: '',
            rating: '',
		};
	}

    handleCancel = () => {
		this.props.createOff();
	};

    handleSubmit = async (e) => {
        e.preventDefault();
        const APIURL = `http://localhost:3000`;

        fetch(`${APIURL}/cigar/create`, {
			method: 'POST',
			body: JSON.stringify({
				product: {
                    brand: this.state.brand,
                    profile: this.state.profile,
                    shape: this.state.shape,
                    wrapper: this.state.wrapper,
                    origin: this.state.origin,
                    rating: this.state.rating,
				}
			}),
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.props.createOff();
				this.props.getProducts();

				this.setState({ brand: '' });

				this.setState({ profile: '' });

				this.setState({ shape: '' });

				this.setState({ wrapper: '' });

				this.setState({ origin: '' });

				this.setState({ rating: 0 });
			});
	};

	render() {
		return (
			<Modal
				title="Basic Modal"
				visible={true}
				onOk={this.handleSubmit}
				okText="Add Product"
				onCancel={this.handleCancel}
			>
				<Form>
					<Form.Item>
						<Input
							type="text"
							name="brand"
							placeholder="brand"
							value={this.state.brand}
							onChange={(e) => this.setState({ brand: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="profile"
							value={this.state.profile}
							name="profile"
							onChange={(e) => this.setState({ profile: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="shape"
							value={this.state.shape}
							name="shape"
							onChange={(e) => this.setState({ shape: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="wrapper"
							value={this.state.wrapper}
							name="wrapper"
							onChange={(e) => this.setState({ wrapper: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="origin"
							value={this.state.origin}
							name="origin"
							onChange={(e) => this.setState({ origin: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="rating"
							value={this.state.rating}
							name="rating"
							onChange={(e) => this.setState({ rating: e.target.value })}
						/>
					</Form.Item>
				</Form>
			</Modal>
		);
	}
};