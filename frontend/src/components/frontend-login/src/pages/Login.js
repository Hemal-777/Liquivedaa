import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import { handleError, handleSuccess } from '../utils';
import 'react-toastify/dist/ReactToastify.css'; // For proper styling of ToastContainer

// Styled components
const Container = styled.div`
  background-color: #FFF;
  padding: 32px 48px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  text-align: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FormTitle = styled.h1`
  margin-bottom: 20px;
  text-align: left;
  color: black; // Set text color to black
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: black; // Set label text color to black
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;

  &::placeholder {
    font-size: 12px;
    font-style: italic;
    color: black; // Set placeholder text color to black
  }
`;

const Button = styled.button`
  background-color: green; // Change button color to green
  border: none;
  font-size: 20px;
  color: white;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: darkgreen; // Darker green on hover
    transform: scale(1.05); // Slightly enlarge button on hover
  }

  &:active {
    transform: scale(0.95); // Slightly shrink button on click
  }
`;

const Span = styled.span`
  color: black; // Set text color to black
`;


function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('Email and password are required');
    }
    try {
      const url = `https://baquiveda-backend.vercel.app/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          // navigate('/');
          navigate('/profile-details');
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <>
      <Container>
        <FormTitle>Login</FormTitle>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <label htmlFor='email'>Email</label>
            <Input
              onChange={handleChange}
              type='email'
              name='email'
              placeholder='Enter your email...'
              value={loginInfo.email}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='password'>Password</label>
            <Input
              onChange={handleChange}
              type='password'
              name='password'
              placeholder='Enter your password...'
              value={loginInfo.password}
            />
          </FormGroup>
          <Button type='submit'>Login</Button>
          <span>
            Doesn't have an account?
            <Link to="/signup"> Signup</Link>
          </span>
        </Form>
      </Container>
      <ToastContainer
        position="top-right"  // Change position as needed
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </>
  );
}

// cartService.js

const API_URL = 'https://baquiveda-backend.vercel.app/cart'; // Replace with your actual API URL

// Get token from localStorage
const token = localStorage.getItem('token');

// Add to cart
export const addToCart = async (productId, quantity) => {
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Attach the JWT token
    },
    body: JSON.stringify({ productId, quantity })
  });
  return response.json();
};


// Remove from cart
export const removeFromCart = async (productId) => {
  const response = await fetch(`${API_URL}/remove`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Attach the JWT token
    },
    body: JSON.stringify({ productId })
  });
  return response.json();
};

// Get cart
export const getCart = async () => {
  const response = await fetch(`${API_URL}`, {
    headers: {
      'Authorization': `Bearer ${token}` // Attach the JWT token
    }
  });
  return response.json();
};


export default Login;
