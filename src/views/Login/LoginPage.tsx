import { ErrorMessage, Field, Form, Formik } from 'formik';
import classes from "../Login/LoginPage.module.css"
import logo from "../../asset/logo-crypto.svg"
import logoGoogle from "../../asset/google.svg"
import logoMicrosoft from "../../asset/microsoft.svg"
import { useState } from 'react';
import axios from 'axios';


function LoginPage() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    const handleClick = () => setIsVisiblePassword(!isVisiblePassword)

    const initialValues={
        email: '',
        password: '',
    }
    
    async function login(email:string, password:string) {
        fetch(`./fake_users.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data)})
      
            .catch(function (error) {
                console.log(error)
            })
            
    }

    

    return (<>
        <main className={classes.main} >

                <section className={classes.sectionMain}>
                <div className={classes.divLayout}>
                    <div className={classes.divLogo}>
                        <img src={logo} />
                    </div>
                    <div className={classes.divForm}>
                        <Formik initialValues={initialValues}
                         
                            onSubmit={(values, { resetForm }) => {
                                console.log(values)
                                
                                resetForm();
                                login(initialValues.email, initialValues.password)
                            }}>
                            {({
                                values,
                                handleSubmit,
                                handleChange
                            }) => (
                                <form onSubmit={handleSubmit} className={classes.form}>
                                    <h2>Login</h2>
                                    <Field
                                        className={classes.input}
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder='Endereço de email'
                                    />
                                    <div className={classes.inputPassword}>
                                        <input
                                            className={classes.input}
                                            type={isVisiblePassword ? "text" : "password"}
                                            name="password"
                                            value={values.password}
                                            placeholder='Senha'
                                            onChange={handleChange}
                                        />
                                        {isVisiblePassword ? <span onClick={handleClick} className={classes.invisiblePassword} /> : <span onClick={handleClick} className={classes.visiblePassword} />}
                                    </div>
                                    <a href="#">Esqueceu sua senha?</a>
                                    <div className={classes.divButton}>
                                        <button>
                                            Entrar
                                        </button>
                                    </div>
                                    <div className={classes.divNewUser}>
                                        <p>Novo usuário? <a href='#'> Criar Conta</a> </p>
                                    </div>
                                </form>
                            )}
                        </Formik>

                    </div>
                    <div className={classes.loginOptions}>
                        <h2> ou faça o login com </h2>
                    </div>

                    <div className={classes.buttonsOptionsLogin}>
                        <button><img src={logoGoogle} /></button>
                        <button><img src={logoMicrosoft} /></button>
                    </div>
                </div>
                <footer className={classes.footer}>
                    <p><a href='#'>FAQ</a></p>
                    <p>Powered by Transfero</p>
                </footer>
            </section>
        </main>

    </>
    )
}

export default LoginPage

