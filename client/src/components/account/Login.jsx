import { useState } from 'react';
import {API} from '../../service/api.js';

import { Box, Button, TextField, Typography, styled } from '@mui/material';
import  image  from '../../images/36932.jpg';


const Component = styled(Box)`
    width: 450px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6)
`

const  Image = styled('img')({
    width: 200,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #ff9900;
    color: #004158;
    height: 48px;
    border-radius: 2px;
`


const SignUp = styled(Button)`
    text-transform: none;
    background: white;
    color: #004158;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
    color: #9cbac3;
    font-size: 16px
`

const SignupInitialValues = {
    name: '',
    username: '',
    password: '',
}

const Login =  () => {

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(SignupInitialValues);

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value});
        
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        // API call to signup user
    }

    return (
        <Component>
            <Box>
                <Image src={image} alt="login"/>
                { account === 'login' ?
                    <Wrapper>
                        <TextField variant="standard" label="Enter username" />
                        <TextField variant="standard" label="Enter password"/>
                        <LoginButton variant="contained">Login</LoginButton>
                        <Text style={{ textAlign: 'center'}}>OR</Text>
                        <SignUp onClick={() => toggleSignup()}>Create an account</SignUp>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Enter Name" />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter Username"/>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>
                        <SignUp onClick={() => signupUser()}>Signup</SignUp>
                        <Text style={{ textAlign: 'center'}}>OR</Text>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account?</LoginButton>
                    </Wrapper>
                }
            </Box>
        </Component>
    )
}


export default Login;