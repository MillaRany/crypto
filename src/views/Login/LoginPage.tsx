import { ErrorMessage, Field, Form, Formik } from 'formik';
import classes from "../Login/LoginPage.module.css"
import logo from "../../asset/logo-crypto.svg"
import logoGoogle from "../../asset/google.svg"
import logoMicrosoft from "../../asset/microsoft.svg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    const handleClick = () => setIsVisiblePassword(!isVisiblePassword)
    const [erro, setErro] = useState(false)
    const navigate = useNavigate()


    async function login(email: string, password: string) {
        setTimeout(() => {
            new Promise((resolve, reject) => {
                return fetch(`./fake_users.json`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.email === email && data.password === password) {
                            resolve(data)
                            navigate("/home")
                                                        
                        } else {
                            reject(new Error('error'))
                            setErro(true)
                            setTimeout(() => {setErro(false)}, 3000)
                        }
                    }, error => {
                        reject(new Error(error.message))
                        
                    })
            })
        }, 1000)

    }
 
    function validateEmail(value: string) {
        console.log(value)
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Email inválido';
        }
        return error;
    }

    function validatePassword(value: string) {
        console.log(value)
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }


    return (<>
        <main className={classes.main} >
            <section className={classes.sectionMain}>
                <div className={classes.divLayout}>
                    <div className={classes.divLogo}>
                        <img src={logo} />
                    </div>
                    <div className={classes.divForm}>
                        <Formik

                            initialValues={{
                                email: '',
                                password: '',
                            }}

                            onSubmit={(values, {resetForm }) => {
                                resetForm();
                                login(values.email, values.password)
                                setErro(false)

                            }}
                        >
                            {({ errors,
                                isValid,
                                touched,
                                values,
                                handleSubmit,
                                handleChange,


                            }) => (
                                <Form onSubmit={handleSubmit} className={classes.form}>
                                    <h2>Login</h2>
                                    {erro &&<div className={classes.divError}>Login inválido</div>}

                                    {errors.email && touched.email ? (
                                            <div className={classes.divError}>{errors.email}</div>
                                        ) : null}

                                    <Field
                                        className={classes.input}
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder='Endereço de email'
                                        validate={validateEmail}

                                    />


                                    <div className={classes.inputPassword}>
                                        {errors.password && touched.password ? (
                                            <div className={classes.divError}>{errors.password}</div>
                                        ) : null}
                                        
                                        <Field
                                            className={classes.input}
                                            type={isVisiblePassword ? "text" : "password"}
                                            name="password"
                                            value={values.password}
                                            placeholder='Senha'
                                            onChange={handleChange}
                                            validate={validatePassword}
                                        />
                                        {isVisiblePassword ? <span onClick={handleClick} className={classes.invisiblePassword} />
                                            :
                                            <span onClick={handleClick} className={classes.visiblePassword} />}
                                    </div>
                                    <a href="#">Esqueceu sua senha?</a>
                                    <div className={classes.divButton}>
                                        <button
                                            disabled={!isValid}>
                                            Entrar
                                        </button>
                                    </div>
                                    <div className={classes.divNewUser}>
                                        <p>Novo usuário? <a href='#'> Criar Conta</a> </p>
                                    </div>

                                </Form>
                            )}
                        </Formik>

                    </div>
                    <div className={classes.loginOptions}>
                        <h2> ou faça o login com </h2>
                    </div>

                    <div className={classes.buttonsOptionsLogin}>
                        <button onClick={() => { navigate("/") }}><img src={logoGoogle} /></button>
                        <button onClick={() => { navigate("/") }}><img src={logoMicrosoft} /></button>
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

