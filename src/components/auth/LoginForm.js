import React from 'react'
import useInput from '../../customhook/useInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginForm = () => {
    const [userName, bindUserName, resetUserName] = useInput('', 'text')
    const [password, bindPassword, resetPassword] = useInput('', 'password')
    const resetForm = (e) => {
        e.preventDefault();
        resetUserName();
        resetPassword();
    }
    return (
        <div className="d-flex justify-content-center h-100">
            <div className="card w-50 align-middle">
                <div className="card-header">
                    <h3>Sign In</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FontAwesomeIcon icon="user"/></span>
                            </div>
                            <input className="form-control" placeholder="username"  {...bindUserName} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FontAwesomeIcon icon="key"/></span>
                            </div>
                            <input className="form-control" placeholder="password" {...bindPassword} />
                        </div>
                        <div className="row align-items-center justify-content-center remember">
                            <input type="checkbox" />&nbsp;Remember Me
                        </div>
                        <div className="form-group">
                            <button autoComplete="off" defaultValue="Login" className="btn justify-content-center btn-primary" >Login</button>&nbsp;
                            <button autoComplete="off" defaultValue="Login" className="btn justify-content-center btn-danger" oncClick={e => resetForm(e)}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
