import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLoging, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [formLoginValues, handleLoginInputChange] = useForm({
        loginEmail: 'mauricio@gmail.com',
        loginPassword: '123456'
    });

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        registerName: 'Tiziano',
        registerEmail: 'tiziano@gmail.com',
        registerPassword: '123456',
        registerPasswordRepeat: '123456'
    });

    const {loginEmail, loginPassword} = formLoginValues;
    const {registerName, registerEmail, registerPassword, registerPasswordRepeat} = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoging(loginEmail, loginPassword));
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (registerPassword !== registerPasswordRepeat) {
            return Swal.fire('Error', 'Password mismatch', 'error');
        }

        dispatch(startRegister(registerEmail, registerPassword, registerName));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Log in</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="password"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Sign in</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="registerName"
                                value={registerName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password again"
                                name="registerPasswordRepeat"
                                value={registerPasswordRepeat}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Create account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}