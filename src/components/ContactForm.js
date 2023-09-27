import React from 'react';
import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const ContactForm = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				phone: '',
				email: '',
				message: '',
			}}
		>
			<Form>
				<FormGroup row>
					<Col md='8'>
						<Field
							name='name'
							placeholder='Name'
							className='form-control'
						></Field>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col md='8'>
						<Field
							name='email'
							placeholder='Email'
							className='form-control'
						></Field>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col md='8'>
						<Field
							name='phone'
							placeholder='Phone'
							className='form-control'
						></Field>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col md='8'>
						<Field
							name='message'
							as='textarea'
							rows='6'
							placeholder='Message'
							className='form-control'
						></Field>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col>
						<Button className='submit-btn' type='submit'>
							Send
						</Button>
					</Col>
				</FormGroup>
			</Form>
		</Formik>
	);
};

export default ContactForm;
